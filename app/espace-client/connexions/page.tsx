 import Link from "next/link";

const reseaux = [
  {
    nom: "Facebook",
    description: "Connecter une page Facebook professionnelle.",
    icon: "📘",
  },
  {
    nom: "Instagram",
    description: "Connecter un compte Instagram professionnel.",
    icon: "📸",
  },
  {
    nom: "LinkedIn",
    description: "Connecter votre profil ou votre page LinkedIn.",
    icon: "💼",
  },
  {
    nom: "TikTok",
    description: "Connecter votre compte TikTok.",
    icon: "🎵",
  },
  {
    nom: "YouTube",
    description: "Connecter votre chaîne YouTube.",
    icon: "▶️",
  },
];

export default function ConnexionsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 24px",
        background:
          "radial-gradient(circle at top, #102a43 0%, #061525 55%, #030b14 100%)",
        color: "white",
      }}
    >
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Link
          href="/espace-client"
          style={{
            color: "#55e6d5",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          ← Retour à l’espace client
        </Link>

        <p
          style={{
            marginTop: "42px",
            color: "#55e6d5",
            fontWeight: 800,
            letterSpacing: "1px",
          }}
        >
          MES CONNEXIONS
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 76px)",
            margin: "12px 0 18px",
          }}
        >
          Connecter mes réseaux sociaux
        </h1>

        <p
          style={{
            maxWidth: "760px",
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#d7e3ee",
          }}
        >
          Autorisez QueryStaff à accéder uniquement aux comptes que vous
          choisissez. Vos mots de passe ne sont jamais enregistrés.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
            marginTop: "48px",
          }}
        >
          {reseaux.map((reseau) => (
            <article
              key={reseau.nom}
              style={{
                padding: "28px",
                border: "1px solid rgba(85, 230, 213, 0.35)",
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <div style={{ fontSize: "38px" }}>{reseau.icon}</div>

              <h2 style={{ margin: "18px 0 10px", fontSize: "28px" }}>
                {reseau.nom}
              </h2>

              <p
                style={{
                  minHeight: "58px",
                  color: "#d7e3ee",
                  lineHeight: 1.5,
                }}
              >
                {reseau.description}
              </p>

              <button
                type="button"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px 18px",
                  border: "none",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #18d9d1 0%, #5577ff 55%, #b36bff 100%)",
                  color: "white",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Connecter
              </button>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "42px",
            padding: "24px",
            borderRadius: "20px",
            background: "rgba(85, 230, 213, 0.08)",
            border: "1px solid rgba(85, 230, 213, 0.25)",
          }}
        >
          🔒 Les boutons sont pour le moment une présentation. Nous ajouterons
          ensuite les connexions sécurisées officielles de chaque réseau.
        </div>
      </section>
    </main>
  );
}