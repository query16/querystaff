  "use client";

import Link from "next/link";
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { createClient } from "../../../../lib/supabase/client";

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

type Collaborator = {
  agent: string;
  sector: string;
  goals: string;
};

export default function MissionPage() {
  const params = useParams();
  const collaboratorId = params.id as string;

  const [collaborator, setCollaborator] =
    useState<Collaborator | null>(null);

  const [content, setContent] = useState("");
  const [history, setHistory] = useState<ConversationMessage[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [loadingCollaborator, setLoadingCollaborator] = useState(true);

  const isTommy =
    collaborator?.agent?.trim().toLowerCase() === "tommy";

  useEffect(() => {
    let isMounted = true;

    async function loadCollaborator() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (isMounted) {
          setErrorMessage("Vous devez être connecté.");
          setLoadingCollaborator(false);
        }
        return;
      }

      const { data, error } = await supabase
        .from("collaborator_configurations")
        .select("agent, sector, goals")
        .eq("id", collaboratorId)
        .eq("user_id", user.id)
        .single();

      if (!isMounted) {
        return;
      }

      if (error || !data) {
        setErrorMessage("Collaborateur introuvable.");
        setLoadingCollaborator(false);
        return;
      }

      setCollaborator(data);
      setLoadingCollaborator(false);
    }

    loadCollaborator();

    return () => {
      isMounted = false;
    };
  }, [collaboratorId]);

  const pageTitle = useMemo(() => {
    if (isTommy) {
      return "Tester le standard Tommy";
    }

    return "Confier une mission";
  }, [isTommy]);

  const description = useMemo(() => {
    if (isTommy) {
      return "Écrivez comme si vous étiez un appelant. Tommy poursuivra la conversation une question à la fois.";
    }

    return "Décrivez clairement la mission que vous souhaitez confier à votre collaborateur IA.";
  }, [isTommy]);

  const placeholder = useMemo(() => {
    if (isTommy) {
      if (history.length === 0) {
        return "Exemple : Bonjour, je souhaite parler au service commercial.";
      }

      return "Répondez à Tommy comme pendant un appel téléphonique...";
    }

    if (collaborator?.agent) {
      return `Décrivez la mission destinée à ${collaborator.agent}...`;
    }

    return "Décrivez votre demande...";
  }, [collaborator?.agent, history.length, isTommy]);

  async function sendMission(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const userText = content.trim();

    if (!userText) {
      setErrorMessage(
        isTommy
          ? "Veuillez écrire la réponse de l’appelant."
          : "Veuillez décrire votre mission."
      );
      return;
    }

    setSending(true);
    setErrorMessage("");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setErrorMessage("Vous devez être connecté.");
      setSending(false);
      return;
    }

    const { data: mission, error } = await supabase
      .from("missions")
      .insert({
        user_id: user.id,
        collaborator_id: collaboratorId,
        content: userText,
        status: "pending",
      })
      .select("id")
      .single();

    if (error || !mission) {
      setErrorMessage(
        `Erreur : ${error?.message || "Mission non enregistrée."}`
      );
      setSending(false);
      return;
    }

    const previousHistory = [...history];

    setHistory((currentHistory) => [
      ...currentHistory,
      {
        role: "user",
        content: userText,
      },
    ]);

    setContent("");

    try {
      const response = await fetch("/api/missions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          missionId: mission.id,
          history: previousHistory,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(
          `Erreur : ${
            result.error || "Traitement impossible."
          }`
        );
        setSending(false);
        return;
      }

      setHistory((currentHistory) => [
        ...currentHistory,
        {
          role: "assistant",
          content:
            result.result ||
            "Réponse indisponible pour le moment.",
        },
      ]);
    } catch {
      setErrorMessage(
        "Impossible de contacter le collaborateur pour le moment."
      );
    } finally {
      setSending(false);
    }
  }

  function restartConversation() {
    setHistory([]);
    setContent("");
    setErrorMessage("");
  }

  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <Link
          href="/espace-client/collaborateurs"
          style={styles.back}
        >
          ← Retour à mes collaborateurs
        </Link>

        <p style={styles.label}>
          {isTommy
            ? "STANDARD TÉLÉPHONIQUE IA"
            : "NOUVELLE MISSION"}
        </p>

        <h1 style={styles.title}>{pageTitle}</h1>

        {collaborator?.agent && (
          <p style={styles.agentName}>
            Collaborateur :{" "}
            <strong>{collaborator.agent}</strong>
          </p>
        )}

        <p style={styles.text}>{description}</p>

        {isTommy && history.length > 0 && (
          <div style={styles.conversation}>
            {history.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                style={{
                  ...styles.bubble,
                  ...(item.role === "user"
                    ? styles.userBubble
                    : styles.assistantBubble),
                }}
              >
                <p style={styles.bubbleLabel}>
                  {item.role === "user"
                    ? "Appelant"
                    : "Tommy"}
                </p>

                <p style={styles.bubbleText}>
                  {item.content}
                </p>
              </div>
            ))}

            {sending && (
              <div
                style={{
                  ...styles.bubble,
                  ...styles.assistantBubble,
                }}
              >
                <p style={styles.bubbleLabel}>Tommy</p>
                <p style={styles.bubbleText}>
                  Tommy prépare sa réponse…
                </p>
              </div>
            )}
          </div>
        )}

        {!isTommy && history.length > 0 && (
          <div style={styles.conversation}>
            {history.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                style={{
                  ...styles.bubble,
                  ...(item.role === "user"
                    ? styles.userBubble
                    : styles.assistantBubble),
                }}
              >
                <p style={styles.bubbleLabel}>
                  {item.role === "user"
                    ? "Votre demande"
                    : collaborator?.agent || "Collaborateur IA"}
                </p>

                <p style={styles.bubbleText}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={sendMission}>
          <textarea
            value={content}
            onChange={(event) =>
              setContent(event.target.value)
            }
            placeholder={placeholder}
            style={styles.textarea}
            disabled={sending || loadingCollaborator}
          />

          <div style={styles.actions}>
            <button
              type="submit"
              disabled={sending || loadingCollaborator}
              style={{
                ...styles.button,
                opacity:
                  sending || loadingCollaborator ? 0.65 : 1,
              }}
            >
              {sending
                ? "Tommy réfléchit..."
                : isTommy
                  ? history.length === 0
                    ? "Démarrer l’appel"
                    : "Répondre à Tommy"
                  : "Envoyer la mission"}
            </button>

            {isTommy && history.length > 0 && (
              <button
                type="button"
                onClick={restartConversation}
                disabled={sending}
                style={styles.secondaryButton}
              >
                Nouvel appel
              </button>
            )}
          </div>
        </form>

        {errorMessage && (
          <p style={styles.error}>{errorMessage}</p>
        )}
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "120px 20px 60px",
    background:
      "radial-gradient(circle at top, #063a70 0%, #04182f 55%, #020b18 100%)",
    color: "white",
  },

  card: {
    width: "100%",
    maxWidth: "820px",
    margin: "0 auto",
    padding: "38px",
    border: "1px solid rgba(94, 234, 255, 0.35)",
    borderRadius: "28px",
    background: "rgba(8, 37, 70, 0.72)",
  },

  back: {
    color: "#4de7f5",
    textDecoration: "none",
    fontWeight: 700,
  },

  label: {
    marginTop: "32px",
    marginBottom: "8px",
    color: "#40e6ef",
    fontWeight: 800,
  },

  title: {
    margin: "8px 0 12px",
    fontSize: "clamp(42px, 7vw, 66px)",
    lineHeight: 1,
  },

  agentName: {
    margin: "0 0 12px",
    color: "#9feaf2",
    fontSize: "16px",
  },

  text: {
    marginBottom: "28px",
    color: "#e2e8f0",
    fontSize: "18px",
    lineHeight: 1.6,
  },

  conversation: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "14px",
    maxHeight: "480px",
    marginBottom: "24px",
    padding: "18px",
    overflowY: "auto" as const,
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    background: "rgba(0,0,0,0.15)",
  },

  bubble: {
    maxWidth: "88%",
    padding: "14px 17px",
    borderRadius: "17px",
  },

  userBubble: {
    alignSelf: "flex-end",
    background:
      "linear-gradient(135deg, rgba(34,211,238,0.3), rgba(139,92,246,0.3))",
    border: "1px solid rgba(94,234,255,0.25)",
  },

  assistantBubble: {
    alignSelf: "flex-start",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  bubbleLabel: {
    margin: "0 0 5px",
    color: "#67e8f9",
    fontSize: "12px",
    fontWeight: 900,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
  },

  bubbleText: {
    margin: 0,
    color: "white",
    fontSize: "16px",
    lineHeight: 1.55,
    whiteSpace: "pre-wrap" as const,
  },

  textarea: {
    width: "100%",
    minHeight: "150px",
    padding: "20px",
    border: "1px solid rgba(255,255,255,0.55)",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.12)",
    color: "white",
    fontSize: "17px",
    resize: "vertical" as const,
    boxSizing: "border-box" as const,
  },

  actions: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "12px",
    marginTop: "20px",
  },

  button: {
    padding: "15px 25px",
    border: "none",
    borderRadius: "999px",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
    background:
      "linear-gradient(90deg, #22d3ee, #8b5cf6)",
  },

  secondaryButton: {
    padding: "14px 22px",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "999px",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
    background: "rgba(255,255,255,0.08)",
  },

  error: {
    marginTop: "22px",
    padding: "14px",
    border: "1px solid rgba(248,113,113,0.35)",
    borderRadius: "12px",
    background: "rgba(127,29,29,0.25)",
    color: "#fecaca",
    fontWeight: 700,
  },
};