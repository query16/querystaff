import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import Link from "next/link";

const rubriques = [
  {
    title: "Mes collaborateurs IA",
    description: "Accéder à votre équipe numérique.",
    href: "/espace-client/collaborateurs",
    icon: "🤖",
  },
  {
    title: "Mes commandes",
    description: "Suivre vos demandes en cours.",
    href: "/espace-client/commandes",
    icon: "📋",
  },
  {
    title: "Mes documents",
    description: "Retrouver les fichiers produits.",
    href: "/espace-client/documents",
    icon: "📁",
  },
  {
    title: "Mon abonnement",
    description: "Consulter votre formule et vos paiements.",
    href: "/espace-client/abonnement",
    icon: "💳",
  },
];

export default async function EspaceClientPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 24px 70px",
        color: "white",
        background:
          "radial-gradient(circle at top left, #12305a 0%, #07101f 45%, #030712 100%)",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#67e8f9",
            fontWeight: 800,
            letterSpacing: "0.04em",
          }}
        >
          ESPACE CLIENT QUERYSTAFF
        </p>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 54px)",
            margin: "12px 0",
            lineHeight: 1.1,
          }}
        >
          Bienvenue dans votre espace client
        </h1>

        <p
          style={{
            maxWidth: "760px",
            color: "#cbd5e1",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Retrouvez ici vos collaborateurs IA, vos commandes, votre abonnement,
          vos documents et l’historique de vos échanges.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "42px",
          }}
        >
          {rubriques.map((rubrique) => (
            <Link
              key={rubrique.href}
              href={rubrique.href}
              style={{
                display: "block",
                padding: "28px",
                minHeight: "190px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                color: "white",
                textDecoration: "none",
                boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "18px" }}>
                {rubrique.icon}
              </div>

              <h2 style={{ fontSize: "22px", margin: "0 0 12px" }}>
                {rubrique.title}
              </h2>

              <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                {rubrique.description}
              </p>

              <p
                style={{
                  color: "#67e8f9",
                  fontWeight: 800,
                  marginTop: "22px",
                  marginBottom: 0,
                }}
              >
                Ouvrir →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
