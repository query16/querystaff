 export default function MagicQueryPage() {
  const missions = [
    "Diagnostic du problème",
    "Orientation vers le bon agent",
    "Aide étape par étape",
    "Résumé clair du blocage",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 24px",
        background:
          "radial-gradient(circle at top left, #12356b 0%, #07152f 38%, #020817 100%)",
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
          src="/avatars/magicquery.png"
          alt="Magic Query, superviseur IA et assistance de secours"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "520px",
            height: "auto",
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
            color: "#60e7f9",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ← Retour aux collaborateurs
        </a>

        <div
          style={{
            padding: "34px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "28px",
            background: "rgba(255, 255, 255, 0.07)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              marginBottom: "10px",
            }}
          >
            🪄
          </div>

          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "56px",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Magic Query
          </h1>

          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "28px",
              lineHeight: 1.3,
              color: "#60e7f9",
            }}
          >
            Superviseur IA &amp; assistance de secours
          </h2>

          <p
            style={{
              margin: "0 0 18px",
              maxWidth: "760px",
              fontSize: "19px",
              lineHeight: 1.7,
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Magic Query vous aide quand vous ne savez plus par où commencer.
          </p>

          <p
            style={{
              margin: "0 0 34px",
              maxWidth: "760px",
              fontSize: "19px",
              lineHeight: 1.7,
              color: "#d8e8ff",
            }}
          >
            Magic Query analyse votre blocage, identifie le bon collaborateur
            IA, vous guide étape par étape et vous évite de tout réexpliquer.
          </p>

          <h3
            style={{
              margin: "0 0 20px",
              fontSize: "25px",
              color: "#ffffff",
            }}
          >
            Ses principales missions
          </h3>

          <ul
            style={{
              margin: "0 0 34px",
              paddingLeft: "24px",
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#eef6ff",
            }}
          >
            {missions.map((mission) => (
              <li key={mission}>{mission}</li>
            ))}
          </ul>

          <div
            style={{
              padding: "24px",
              border: "1px solid rgba(96, 231, 249, 0.35)",
              borderRadius: "22px",
              background: "rgba(0, 141, 216, 0.12)",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
                color: "#60e7f9",
              }}
            >
              Inclus avec votre abonnement
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#d8e8ff",
              }}
            >
              Magic Query est le service de secours intelligent de QueryStaff.
              Il ne remplace pas les agents métiers : il vous aide à trouver la
              bonne solution et le bon interlocuteur.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}