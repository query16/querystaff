 export default function NoahPage() {
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
          <div style={{ fontSize: "64px" }}>🏠</div>

          <h1
            style={{
              margin: "20px 0 8px",
              fontSize: "56px",
              letterSpacing: "-2px",
            }}
          >
            Noah
          </h1>

          <p
            style={{
              color: "#6ee7f9",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            Collaborateur IA pour les professionnels de l’immobilier
          </p>

          <p
            style={{
              color: "#c3cede",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Noah répond aux demandes des futurs clients, présente vos biens,
            qualifie les prospects et facilite l’organisation des visites.
          </p>

          <h2>Ses principales missions</h2>

          <ul style={{ color: "#c3cede", lineHeight: 2 }}>
            <li>Répondre aux demandes sur les biens disponibles</li>
            <li>Présenter les caractéristiques de chaque logement</li>
            <li>Qualifier les acheteurs et les locataires</li>
            <li>Préparer les demandes de visite</li>
            <li>Relancer les prospects intéressés</li>
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
          </div>
        </div>
      </section>
    </main>
  );
}