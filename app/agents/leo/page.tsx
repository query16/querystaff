 export default function LeoPage() {
  const missions = [
    "Répondre aux demandes des automobilistes",
    "Planifier les rendez-vous à l’atelier",
    "Recueillir les informations du véhicule",
    "Préparer les demandes de devis",
    "Informer les clients sur le suivi des réparations",
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
          src="/avatars/leo.png"
          alt="Léo, collaborateur IA pour les garages"
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
            🚗
          </div>

          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "56px",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Léo
          </h1>

          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "28px",
              lineHeight: 1.3,
              color: "#60e7f9",
            }}
          >
            Collaborateur IA pour les garages
          </h2>

          <p
            style={{
              margin: "0 0 34px",
              maxWidth: "760px",
              fontSize: "19px",
              lineHeight: 1.7,
              color: "#d8e8ff",
            }}
          >
            Léo répond aux clients, présente votre carte, gère les demandes de
            réservation et facilite la prise de commandes.
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
              margin: 0,
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
        </div>
      </section>
    </main>
  );
}