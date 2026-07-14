"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function ConnexionPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function envoyerLien() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Lien de connexion envoyé. Vérifiez votre boîte e-mail.");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 48%, #040912 100%)",
        color: "white",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "480px",
          padding: "32px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
          Espace client QueryStaff
        </h1>

        <p style={{ color: "#c3cede", lineHeight: 1.7 }}>
          Saisissez votre adresse e-mail pour recevoir un lien sécurisé de
          connexion.
        </p>

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="votre@email.com"
          style={{
            width: "100%",
            marginTop: "24px",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            fontSize: "16px",
          }}
        />

        <button
          type="button"
          onClick={envoyerLien}
          disabled={loading || !email}
          style={{
            width: "100%",
            marginTop: "16px",
            padding: "15px",
            border: 0,
            borderRadius: "999px",
            background: "linear-gradient(90deg, #18d7ff, #7b61ff)",
            color: "white",
            fontWeight: 800,
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {loading ? "Envoi..." : "Recevoir mon lien de connexion"}
        </button>

        {message && (
          <p style={{ marginTop: "18px", color: "#9ce7ff" }}>{message}</p>
        )}
      </section>
    </main>
  );
}
