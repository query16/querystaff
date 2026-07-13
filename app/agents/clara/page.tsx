export default function ClaraPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 40px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 45%, #040912 100%)",
        color: "white",
      }}
    >
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
          <div style={{ fontSize: "64px" }}>📋</div>

          <h1
            style={{
              margin: "20px 0 8px",
              fontSize: "56px",
              letterSpacing: "-2px",
            }}
          >
            Clara
          </h1>

          <p
            style={{
              color: "#6ee7f9",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            Collaboratrice IA pour l’assistance administrative
          </p>

          <p
            style={{
              color: "#c3cede",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Clara organise vos tâches administratives, prépare vos courriers,
            classe les informations importantes et facilite le suivi de vos
            dossiers.
          </p>

          <h2>Ses principales missions</h2>

          <ul style={{ color: "#c3cede", lineHeight: 2 }}>
            <li>Rédiger des courriers et des réponses professionnelles</li>
            <li>Organiser les documents et les informations</li>
            <li>Préparer des listes de tâches et des rappels</li>
            <li>Suivre les dossiers administratifs</li>
            <li>Créer des comptes rendus et des synthèses</li>
          </ul>

          <div
            style={{
              marginTop: "28px",
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(110,231,249,0.10)",
            }}
          >
            <strong style={{ fontSize: "22px" }}>Dès 39 €/mois</strong>

<a
  href="/api/checkout?agent=clara"
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
  Choisir Clara
</a>
          </div>
        </div>
      </section>
    </main>
  );
} 