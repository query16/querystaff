"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfigurerCollaborateurPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/configurer-collaborateur", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: form.get("company"),
        sector: form.get("sector"),
        agent: form.get("agent"),
        goals: form.get("goals"),
        tone: form.get("tone"),
        missions: form.get("missions"),
      }),
    });

    const result = await response.json();

    if (response.status === 401) {
      router.push("/connexion");
      return;
    }

    if (!response.ok) {
      setMessage(result.error || "Impossible d’enregistrer la configuration.");
      setLoading(false);
      return;
    }

    router.push("/espace-client");
  }

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.07)",
    color: "white",
    fontSize: "16px",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "#dbeafe",
    fontWeight: 700,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "70px 24px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 48%, #040912 100%)",
        color: "white",
      }}
    >
      <section style={{ maxWidth: "760px", margin: "0 auto" }}>
        <p
          style={{
            color: "#6ee7f9",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Bienvenue dans votre équipe
        </p>

        <h1 style={{ fontSize: "46px", margin: "12px 0" }}>
          Configurons votre collaborateur IA
        </h1>

        <p
          style={{
            color: "#c3cede",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "34px",
          }}
        >
          Ces informations permettront à votre collaborateur de comprendre
          votre activité, votre ton et vos priorités.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "22px",
            padding: "30px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <label style={labelStyle}>Nom de l’entreprise</label>
            <input
              name="company"
              placeholder="Ex. Query Media"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Secteur d’activité</label>
            <input
              name="sector"
              placeholder="Ex. Musique, restauration, immobilier…"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Votre collaborateur choisi</label>
            <input
              name="agent"
              placeholder="Ex. Milo"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Vos objectifs principaux</label>
            <textarea
              name="goals"
              placeholder="Expliquez ce que vous attendez de votre collaborateur…"
              required
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <div>
            <label style={labelStyle}>Ton souhaité</label>
            <select name="tone" style={inputStyle} defaultValue="">
              <option value="" disabled>
                Choisissez un ton
              </option>
              <option value="professionnel">Professionnel</option>
              <option value="chaleureux">Chaleureux</option>
              <option value="commercial">Commercial</option>
              <option value="creatif">Créatif</option>
              <option value="direct">Direct et concis</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Missions prioritaires</label>
            <textarea
              name="missions"
              placeholder="Ex. rédiger mes communiqués, répondre aux demandes…"
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {message && (
            <p style={{ color: "#fca5a5", fontWeight: 700, margin: 0 }}>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              border: 0,
              padding: "16px 24px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22c7e8, #7257f5)",
              color: "white",
              fontSize: "17px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {loading ? "Enregistrement…" : "Enregistrer et continuer"}
          </button>
        </form>
      </section>
    </main>
  );
}
