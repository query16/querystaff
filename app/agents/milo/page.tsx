 export default function MiloPage() {
  const missions = [
    "Rédiger les communiqués et dossiers de presse",
    "Préparer les e-mails pour les journalistes, radios et médias",
    "Organiser les campagnes de lancement musical",
    "Préparer les relances et les demandes d’interview",
    "Suivre les retombées presse et les contacts médias",
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
          src="/avatars/milo.png"
          alt="Milo, collaborateur IA pour artistes et professionnels de la musique"
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
            🎵
          </div>

          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "56px",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Milo
          </h1>

          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "28px",
              lineHeight: 1.3,
              color: "#60e7f9",
            }}
          >
            Collaborateur IA pour artistes et professionnels de la musique
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
            Milo accompagne les artistes, labels et producteurs dans leur
            communication presse et la promotion de leurs projets musicaux.
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