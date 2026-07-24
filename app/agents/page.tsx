
const agents = [
  {
    name: "Gordon",
    icon: "👨‍🍳",
    role: "Restaurant",
    mission: "Réservations, accueil clients, menus et allergènes",
    price: "Dès 39 €/mois",
  },
  {
    name: "Emma",
    icon: "👩‍💼",
    avatar: "/avatars/emma.png",
    role: "Commerce",
    mission: "Relation client, questions fréquentes et relance commerciale",
    price: "Dès 39 €/mois",
  },
  {
    name: "Maxime",
    icon: "🛍️",
    avatar: "/avatars/maxime.png",
    role: "Dropshipping",
    mission: "Recherche de produits prometteurs et analyse des tendances",
    price: "Dès 59 €/mois",
  },
  {
    name: "Agassi",
    icon: "⚖️",
    role: "Formalités d’entreprise",
    mission: "Création de société, démarches et préparation des documents",
    price: "Dès 59 €/mois",
  },
  {
    name: "Sofia",
    icon: "👩‍⚕️",
    avatar: "/avatars/sofia.png",
    role: "Santé",
    mission: "Accueil, rappels de rendez-vous et orientation des patients",
    price: "Dès 39 €/mois",
  },
  {
    name: "Lina",
    icon: "📱",
    avatar: "/avatars/lina.png",
    role: "Réseaux sociaux",
    mission: "Idées de publications, calendrier éditorial et réponses",
    price: "Dès 49 €/mois",
  },
  {
    name: "Noah",
    icon: "🏠",
    avatar: "/avatars/noah.png",
    role: "Immobilier",
    mission: "Qualification des prospects et organisation des visites",
    price: "Dès 49 €/mois",
  },
  {
    name: "Maya",
    icon: "🛒",
    role: "E-commerce",
    mission: "Suivi des commandes, assistance client et ventes additionnelles",
    price: "Dès 49 €/mois",
  },
  {
    name: "Léo",
    icon: "🔧",
    avatar: "/avatars/leo.png",
    role: "Garage",
    mission: "Prise de rendez-vous, devis et suivi des réparations",
    price: "Dès 39 €/mois",
  },
  {
    name: "Clara",
    icon: "📊",
    avatar: "/avatars/clara.png",
    role: "Administration",
    mission: "Classement, facturation, rappels et organisation quotidienne",
    price: "Dès 49 €/mois",
  },
  {
    name: "Milo",
    icon: "🎙️",
    avatar: "/avatars/milo.png",
    role: "Relations presse & musique",
    mission: "Communiqués de presse, campagnes médias, relances et promotion musicale",
    price: "Dès 39 €/mois",
  },
  {
  name: "Tommy",
  icon: "📞",
  avatar: "/avatars/tommy.png",
  role: "Standard téléphonique IA",
  mission: "Répond aux appels, qualifie les demandes, prend les coordonnées et transmet un résumé.",
  price: "Dès 99 €/mois",
},
{
  name: "Nola",
  icon: "📅",
  avatar: "/avatars/nola.png",
  role: "Rendez-vous & anti-absences",
  mission:
    "Confirme les rendez-vous, envoie les rappels, gère les annulations et réduit les rendez-vous non honorés.",
  price: "Tarif à définir",
},
{
  name: "Magic Query",
  icon: "✨",
  avatar: "/avatars/magic-query.png",
  role: "Superviseur IA & assistance de secours",
  mission:
    "Analyse les blocages, oriente vers le bon agent et accompagne l’abonné étape par étape jusqu’à la solution.",
  price: "Inclus avec l’abonnement",
},

];

export default function AgentsPage() {
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
      <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            margin: 0,
            color: "#6ee7f9",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Le cabinet de collaborateurs IA
        </p>

        <h1
          style={{
            margin: "14px 0 12px",
            maxWidth: "850px",
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 0.95,
            letterSpacing: "-3px",
          }}
        >
          Composez votre équipe QueryStaff
        </h1>
        <a
  href="/"
  style={{
    display: "inline-flex",
    marginBottom: "24px",
    color: "#6ee7f9",
    fontWeight: 800,
    textDecoration: "none",
  }}
>
  ← Retour à l’accueil
</a>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 0 40px",
            color: "#b9c7da",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Choisissez des collaborateurs numériques spécialisés, disponibles
          pour accompagner votre activité à chaque instant.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {agents.map((agent) => (
            <article
              key={agent.name}
              style={{
                display: "flex",
                minHeight: "310px",
                padding: "24px",
                flexDirection: "column",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.07)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.20)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    display: "grid",
                    width: "58px",
                    height: "58px",
                    placeItems: "center",
                    borderRadius: "18px",
                    background: "rgba(110,231,249,0.15)",
                    fontSize: "32px",
                  }}
                >
                  {agent.icon}
                </span>

                <span
                  style={{
                    color: "#6ee7f9",
                    fontSize: "13px",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  {agent.price}
                </span>
              </div>

              <h2
                style={{
                  margin: "24px 0 6px",
                  fontSize: "30px",
                  letterSpacing: "-1px",
                }}
              >
                {agent.name}
              </h2>

              <p
                style={{
                  margin: "0 0 16px",
                  color: "#8ee8f5",
                  fontWeight: 800,
                }}
              >
                {agent.role}
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#c3cede",
                  lineHeight: 1.6,
                }}
              >
                {agent.mission}
              </p>

<a
href={
  agent.name === "Magic Query"
    ? "/agents/magic-query"
    : "/agents/" +
      agent.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
}
  style={{
    display: "inline-flex",
    justifyContent: "center",
    marginTop: "auto",
    padding: "13px 18px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #22c7e8, #7257f5)",
    color: "white",
    fontWeight: 800,
    textDecoration: "none",
  }}
>
  Découvrir {agent.name}
</a>            </article>
          ))}
        </div>
      </section>
    </main>
  );
}