"use client";

import { useEffect } from "react";
import EconomyCalculator from "../components/EconomyCalculator";
import LiveDemo from "../components/LiveDemo";
import ContactForm from "../components/ContactForm"; 
export default function HomePage() {
   useEffect(() => {
  const alreadyTracked = sessionStorage.getItem("querystaff_visitor_tracked");

  if (!alreadyTracked) {
    fetch("/api/admin/live-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "Visiteur arrivé",
      }),
    });

    sessionStorage.setItem("querystaff_visitor_tracked", "true");
  }
}, []);
   return (

    <main
      style={{
        minHeight: "100vh",
        padding: "90px 30px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 45%, #040912 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >


        <p
          style={{
            color: "#6ee7f9",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          QueryStaff
        </p>

              <p
        style={{
          display: "inline-block",
          margin: "0 0 18px",
          padding: "9px 16px",
          borderRadius: "999px",
          background: "rgba(34, 199, 232, 0.12)",
          border: "1px solid rgba(34, 199, 232, 0.35)",
          color: "#6ee7f9",
          fontWeight: 800,
          fontSize: "14px",
        }}
      >
        11 collaborateurs IA spécialisés — disponibles 24h/24
      </p>

      <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.05,
            margin: "18px 0",
            letterSpacing: "-3px",
          }}
        >
          Votre équipe IA,
          <br />
          disponible immédiatement
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            color: "#c3cede",
            fontSize: "20px",
            lineHeight: 1.7,
          }}
        >
          Découvrez des collaborateurs IA spécialisés pour la restauration,
          le commerce, l’administratif, l’immobilier, les réseaux sociaux et
          bien plus encore.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "38px",
          }}
        >
          <a
            href="/agents"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              padding: "15px 24px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22c7e8, #7257f5)",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Découvrir nos collaborateurs
          </a>

          <a
            href="/comment-ca-fonctionne"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              padding: "15px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Comment ça fonctionne
          </a>
        </div>
 <div style={{ marginTop: "70px" }}>
      <div style={{ marginTop: "70px", marginBottom: "70px" }}>
        <p
          style={{
            color: "#6ee7f9",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Une équipe adaptée à votre activité
        </p>

        <h2 style={{ fontSize: "38px", marginBottom: "14px" }}>
          Découvrez trois de nos collaborateurs IA
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 32px",
            color: "#c3cede",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Chaque collaborateur possède sa spécialité et ses propres missions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            textAlign: "left",
          }}
        >
          {[
            {
              name: "Gordon",
              icon: "👨‍🍳",
              role: "Restaurant",
              mission: "Réservations, menus, allergènes et demandes clients",
              link: "/agents/gordon",
            },
            {
              name: "Lina",
              icon: "📱",
              role: "Réseaux sociaux",
              mission: "Publications, calendrier éditorial et réponses",
              link: "/agents/lina",
            },
            {
              name: "Milo",
              icon: "🎙️",
              role: "Relations presse & musique",
              mission: "Communiqués, campagnes médias et promotion musicale",
              link: "/agents/milo",
            },
          ].map((agent) => (
            <a
              key={agent.name}
              href={agent.link}
              style={{
                display: "block",
                padding: "26px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.07)",
                color: "white",
                textDecoration: "none",
              }}
            >
              <div style={{ fontSize: "38px", marginBottom: "14px" }}>
                {agent.icon}
              </div>
              <h3 style={{ fontSize: "27px", margin: "0 0 6px" }}>
                {agent.name}
              </h3>
              <p style={{ color: "#6ee7f9", fontWeight: 800 }}>
                {agent.role}
              </p>
              <p style={{ color: "#c3cede", lineHeight: 1.6 }}>
                {agent.mission}
              </p>
              <strong style={{ color: "#6ee7f9" }}>
                Découvrir {agent.name} →
              </strong>
            </a>
          ))}
        </div>

        <a
          href="/agents"
          style={{
            display: "inline-flex",
            marginTop: "28px",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #22c7e8, #7257f5)",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Voir les 11 collaborateurs
        </a>
      </div>

  <p
    style={{
      color: "#6ee7f9",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
    }}
  >
    Témoignages
  </p>

  <h2 style={{ fontSize: "38px", marginBottom: "30px" }}>
    Ils font déjà confiance à QueryStaff
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      textAlign: "left",
    }}
  >
    {[
      {
        name: "Sophie Martin",
        company: "Boutique en ligne",
        text: "Emma répond rapidement aux demandes et nous aide à ne manquer aucun prospect.",
      },
      {
        name: "Karim Bensaïd",
        company: "Restaurant",
        text: "Gordon nous fait gagner du temps sur les réservations et les questions des clients.",
      },
      {
        name: "Julie Moreau",
        company: "Agence immobilière",
        text: "Noah qualifie les demandes et facilite vraiment l’organisation des visites.",
      },
    ].map((avis) => (
      <article
        key={avis.name}
        style={{
          padding: "26px",
          borderRadius: "22px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div style={{ fontSize: "22px" }}>★★★★★</div>

        <p style={{ color: "#c3cede", lineHeight: 1.7 }}>
          “{avis.text}”
        </p>

        <strong>{avis.name}</strong>

        <p style={{ color: "#6ee7f9", marginTop: "6px" }}>
          {avis.company}
        </p>
      </article>
    ))}
  </div>
</div>
<div style={{ marginTop: "70px", textAlign: "left" }}>
  <p
    style={{
      color: "#6ee7f9",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
      textAlign: "center",
    }}
  >
    Questions fréquentes
  </p>

  <h2
    style={{
      fontSize: "38px",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    Tout savoir sur QueryStaff
  </h2>

  {[
    {
      question: "Qu’est-ce qu’un collaborateur IA ?",
      answer:
        "C’est un assistant numérique spécialisé qui vous aide sur des tâches précises selon votre activité.",
    },
    {
      question: "Est-ce qu’il remplace un salarié ?",
      answer:
        "Non. Il complète votre organisation, automatise certaines tâches et fait gagner du temps à votre équipe.",
    },
    {
      question: "Combien de temps faut-il pour le mettre en service ?",
      answer:
        "Selon les besoins, la configuration peut être réalisée rapidement après validation de vos missions.",
    },
    {
      question: "Puis-je modifier ses missions plus tard ?",
      answer:
        "Oui. Les missions peuvent évoluer avec votre activité et vos nouvelles priorités.",
    },
  ].map((item) => (
    <details
      key={item.question}
      style={{
        marginBottom: "14px",
        padding: "20px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <summary
        style={{
          cursor: "pointer",
          fontWeight: 800,
          fontSize: "18px",
        }}
      >
        {item.question}
      </summary>

      <p
        style={{
          marginTop: "14px",
          color: "#c3cede",
          lineHeight: 1.7,
        }}
      >
        {item.answer}
      </p>
    </details>
  ))}
</div>
<div
  style={{
    marginTop: "70px",
    padding: "42px 28px",
    borderRadius: "28px",
    background:
      "linear-gradient(135deg, rgba(34,199,232,0.16), rgba(114,87,245,0.16))",
    border: "1px solid rgba(255,255,255,0.14)",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#6ee7f9",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
    }}
  >
    Prêt à commencer ?
  </p>

<h2
  id="metiers"
  style={{
    fontSize: "38px",
    margin: "12px 0",
  }}
>
  Trouvez le collaborateur IA adapté à votre activité
</h2>

<p    style={{
      maxWidth: "680px",
      margin: "0 auto 28px",
      color: "#c3cede",
      fontSize: "18px",
      lineHeight: 1.7,
    }}
  >
    Découvrez notre équipe, comparez les missions et choisissez le profil qui
    répond le mieux à vos besoins.
  </p>

  <a
    href="/agents"
    style={{
      display: "inline-flex",
      justifyContent: "center",
      padding: "15px 24px",
      borderRadius: "999px",
      background: "linear-gradient(135deg, #22c7e8, #7257f5)",
      color: "white",
      fontWeight: 800,
      textDecoration: "none",
    }}
  >
    Découvrir nos collaborateurs
  </a>
</div>
 <EconomyCalculator/>     
      <div style={{ marginTop: "70px" }}>
  <p
    style={{
      color: "#6ee7f9",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
      textAlign: "center",
    }}
  >
    Comparatif
  </p>

  <h2
    style={{
      fontSize: "38px",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    Collaborateur classique ou collaborateur IA ?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
    }}
  >
    <article
      style={{
        padding: "28px",
        borderRadius: "24px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <h3 style={{ fontSize: "24px" }}>Collaborateur classique</h3>

      <ul style={{ color: "#c3cede", lineHeight: 2 }}>
        <li>Horaires limités</li>
        <li>Coût mensuel plus élevé</li>
        <li>Congés et absences possibles</li>
        <li>Temps de recrutement et de formation</li>
        <li>Capacité de traitement limitée</li>
      </ul>
    </article>

    <article
      style={{
        padding: "28px",
        borderRadius: "24px",
        background:
          "linear-gradient(135deg, rgba(34,199,232,0.14), rgba(114,87,245,0.14))",
        border: "1px solid rgba(110,231,249,0.28)",
      }}
    >
      <h3 style={{ fontSize: "24px", color: "#6ee7f9" }}>
        Collaborateur QueryStaff
      </h3>

      <ul style={{ color: "#c3cede", lineHeight: 2 }}>
        <li>Disponible 24 h/24</li>
        <li>Abonnement maîtrisé</li>
        <li>Aucune absence</li>
        <li>Configuration rapide</li>
        <li>Traite plusieurs demandes simultanément</li>
      </ul>
    </article>
  </div>

  <p
    style={{
      marginTop: "20px",
      color: "#9fb0c4",
      fontSize: "14px",
      lineHeight: 1.6,
      textAlign: "center",
    }}
  >
    QueryStaff complète vos équipes et automatise les tâches répétitives.
  </p>
</div> 
<div id="demonstration">
  <LiveDemo />
  </div>
<div id="tarifs" style={{ marginTop: "70px"}}><p
    style={{
      color: "#6ee7f9",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
      textAlign: "center",
    }}
  >
    Tarifs
  </p>

  <h2
    style={{
      fontSize: "38px",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    Choisissez l’offre adaptée à votre activité
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    }}
  >
    {[
      {
        name: "Essentiel",
        price: "39 €",
        description: "Pour démarrer avec un collaborateur IA.",
        features: [
          "1 collaborateur IA",
          "Missions principales",
          "Réponses automatisées",
          "Support standard",
        ],
      },
      {
        name: "Professionnel",
        price: "59 €",
        description: "Pour automatiser davantage votre activité.",
        features: [
          "1 collaborateur IA avancé",
          "Missions personnalisées",
          "Intégrations professionnelles",
          "Support prioritaire",
        ],
        popular: true,
      },
      {
        name: "Sur mesure",
        price: "Sur devis",
        description: "Pour les besoins spécifiques et les équipes.",
        features: [
          "Plusieurs collaborateurs IA",
          "Configuration personnalisée",
          "Intégrations sur mesure",
          "Accompagnement dédié",
        ],
      },
    ].map((offer) => (
      <article
        key={offer.name}
        style={{
          position: "relative",
          padding: "28px",
          borderRadius: "24px",
          background: offer.popular
            ? "linear-gradient(135deg, rgba(34,199,232,0.16), rgba(114,87,245,0.16))"
            : "rgba(255,255,255,0.06)",
          border: offer.popular
            ? "1px solid rgba(110,231,249,0.35)"
            : "1px solid rgba(255,255,255,0.12)",
          textAlign: "left",
        }}
      >
        {offer.popular && (
          <span
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              padding: "6px 10px",
              borderRadius: "999px",
              background: "rgba(110,231,249,0.16)",
              color: "#6ee7f9",
              fontSize: "12px",
              fontWeight: 800,
            }}
          >
            Le plus choisi
          </span>
        )}

        <h3 style={{ fontSize: "24px", marginBottom: "8px" }}>
          {offer.name}
        </h3>

        <strong style={{ fontSize: "34px" }}>{offer.price}</strong>

        <p style={{ color: "#c3cede", lineHeight: 1.7 }}>
          {offer.description}
        </p>

        <ul style={{ color: "#c3cede", lineHeight: 2 }}>
          {offer.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <a
          href="/agents"
          style={{
            display: "inline-flex",
            marginTop: "10px",
            padding: "13px 18px",
            borderRadius: "999px",
            background: offer.popular
              ? "linear-gradient(135deg, #22c7e8, #7257f5)"
              : "rgba(255,255,255,0.08)",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Choisir cette offre
        </a>
      </article>
    ))}
  </div>
</div>
  <div id="contact">
    <ContactForm />
    </div></section>
    </main>
      );
      }
    
  