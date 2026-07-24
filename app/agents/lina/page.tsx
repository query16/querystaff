 export default function LinaPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 40px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 45%, #040912 100%)",
        color: "white",
      }}
    ><img
  src="/avatars/lina.png"
  alt="Lina, collaboratrice IA pour les réseaux sociaux"
  style={{
    width: "100%",
    maxWidth: "520px",
    display: "block",
    margin: "0 auto 32px",
    borderRadius: "24px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
  }}
/>
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a
          href="/agents"
          style={{
            color: "#6ee7f9",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ← Retour aux collaborateurs
        </a>

        <div
          style={{
            marginTop: "30px",
            padding: "34px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ fontSize: "64px" }}>📱</div>

          <h1
            style={{
              margin: "20px 0 8px",
              fontSize: "56px",
              letterSpacing: "-2px",
            }}
          >
            Lina
          </h1>

          <p
            style={{
              color: "#6ee7f9",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            Collaboratrice IA pour les réseaux sociaux
          </p>

          <p
            style={{
              color: "#c3cede",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Lina prépare vos idées de publications, organise votre calendrier
            éditorial et vous aide à répondre aux commentaires et messages.
          </p>

          <h2>Ses principales missions</h2>

          <ul style={{ color: "#c3cede", lineHeight: 2 }}>
            <li>Créer des idées de publications</li>
            <li>Préparer un calendrier éditorial</li>
            <li>Rédiger des textes pour Facebook, Instagram et LinkedIn</li>
            <li>Proposer des hashtags adaptés</li>
            <li>Préparer des réponses aux commentaires et messages</li>
          </ul>

          <div
            style={{
              marginTop: "28px",
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(110,231,249,0.10)",
            }}
          >
            <strong style={{ fontSize: "22px" }}>Dès 49 €/mois</strong>

<a
  href="/api/checkout?agent=lina"
  style={{
    display: "inline-block",
    marginTop: "18px",
    padding: "14px 24px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #18d7ff, #7b61ff)",
    color: "white",
    fontWeight: 800,
    textDecoration: "none",
  }}
>
  Choisir Lina
</a>
          </div>
        </div>
      </section>
    </main>
  );
}