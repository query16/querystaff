"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "../../../../lib/supabase/client";

export default function MissionPage() {
  const params = useParams();
  const collaboratorId = params.id as string;

  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function sendMission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!content.trim()) {
      setMessage("Veuillez décrire votre mission.");
      return;
    }

    setSending(true);
    setMessage("");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Vous devez être connecté.");
      setSending(false);
      return;
    }

    const { error } = await supabase.from("missions").insert({
      user_id: user.id,
      collaborator_id: collaboratorId,
      content: content.trim(),
      status: "pending",
    });

    if (error) {
      setMessage(`Erreur : ${error.message}`);
      setSending(false);
      return;
    }

    setContent("");
    setMessage("✅ Mission envoyée avec succès à votre collaborateur IA.");
    setSending(false);
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

        <p style={styles.label}>NOUVELLE MISSION</p>
        <h1 style={styles.title}>Confier une mission</h1>

        <p style={styles.text}>
          Décrivez clairement la mission que vous souhaitez confier à votre
          collaborateur IA.
        </p>

        <form onSubmit={sendMission}>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Exemple : Prépare un communiqué de presse pour mon nouveau titre..."
            style={styles.textarea}
          />

          <button
            type="submit"
            disabled={sending}
            style={styles.button}
          >
            {sending ? "Envoi en cours..." : "Envoyer la mission"}
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
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
    maxWidth: "760px",
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
    color: "#40e6ef",
    fontWeight: 800,
  },
  title: {
    margin: "8px 0 12px",
    fontSize: "clamp(42px, 7vw, 66px)",
    lineHeight: 1,
  },
  text: {
    marginBottom: "28px",
    fontSize: "18px",
    lineHeight: 1.6,
  },
  textarea: {
    width: "100%",
    minHeight: "180px",
    padding: "20px",
    border: "1px solid rgba(255,255,255,0.55)",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.12)",
    color: "white",
    fontSize: "17px",
    resize: "vertical" as const,
    boxSizing: "border-box" as const,
  },
  button: {
    marginTop: "20px",
    padding: "15px 25px",
    border: "none",
    borderRadius: "999px",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
    background: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
  },
  message: {
    marginTop: "22px",
    padding: "14px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.1)",
    fontWeight: 700,
  },
};