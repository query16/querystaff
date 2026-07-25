 export default function NoahPage() {
  const missions = [
    "Répondre aux demandes sur les biens disponibles",
    "Présenter les caractéristiques de chaque logement",
    "Qualifier les acheteurs et les locataires",
    "Préparer les demandes de visite",
    "Relancer les prospects intéressés",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 24px",
        background:
          "radial-gradient(circle at top left, #12356b 0%, #071426 45%, #020711 100%)",
        color: "white",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <img
          src="/avatars/noah.png"
          alt="Noah, collaborateur IA pour les professionnels de l’immobilier"
          style={{
            width: "100%",
            maxWidth: "520px",
            display: "block",
            margin: "0 auto 36px",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
          }}
        />

        <a
          href="/agents"
          style={{
            display: "inline-block",
            marginBottom: "28px",
            color: "#6ee7f9",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ← Retour aux collaborateurs
        </a>

        <div
          style={{
            padding: "34px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.07)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ fontSize: "52px" }}>🏠</div>

          <h1
            style={{
              margin: "20px 0 8px",
              fontSize: "56px",
              letterSpacing: "-2px",
            }}
          >
            Noah
          </h1>

          <h2
            style={{
              margin: "0 0 22px",
              color: "#5eead4",
              fontSize: "22px",
            }}
          >
            Collaborateur IA pour les professionnels de l’immobilier
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Noah répond aux demandes des futurs clients, présente vos biens,
            qualifie les prospects et facilite l’organisation des visites.
          </p>

          <h3
            style={{
              marginTop: "30px",
              marginBottom: "16px",
              fontSize: "28px",
            }}
          >
            Ses principales missions
          </h3>

          <ul
            style={{
              paddingLeft: "24px",
              fontSize: "18px",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {missions.map((mission) => (
              <li key={mission}>{mission}</li>
            ))}
          </ul>

          <div
            style={{
              marginTop: "34px",
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(110,231,249,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <strong style={{ fontSize: "22px" }}>Dès 39 €/mois</strong>

            <a
              href="/checkout?agent=noah"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, #22d3ee 0%, #60a5fa 55%, #c084fc 100%)",
                color: "#04111f",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Choisir Noah
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}