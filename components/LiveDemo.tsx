 "use client";

import { useState } from "react";

const demoMessages = [
  {
    question: "Quels sont vos horaires ?",
    answer:
      "Nous sommes disponibles du lundi au samedi, de 9 h à 19 h. Je peux aussi transmettre une demande à l’équipe.",
  },
  {
    question: "Puis-je réserver ?",
    answer:
      "Oui. Indiquez-moi le jour, l’heure et le nombre de personnes, et je prépare votre demande de réservation.",
  },
  {
    question: "Combien coûte QueryStaff ?",
    answer:
      "Les abonnements commencent à partir de 39 € par mois selon le collaborateur choisi.",
  },
];

export default function LiveDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      style={{
        marginTop: "70px",
        padding: "36px",
        borderRadius: "28px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        textAlign: "left",
      }}
    >
      <p
        style={{
          color: "#6ee7f9",
          fontWeight: 800,
          letterSpacing: "1px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Démonstration
      </p>

      <h2
        style={{
          fontSize: "38px",
          marginBottom: "14px",
          textAlign: "center",
        }}
      >
        Testez un collaborateur QueryStaff
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 30px",
          color: "#c3cede",
          lineHeight: 1.7,
          textAlign: "center",
        }}
      >
        Cliquez sur une question pour voir comment un collaborateur IA peut
        répondre immédiatement à vos clients.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        <div>
          {demoMessages.map((message, index) => (
            <button
              key={message.question}
              type="button"
              onClick={() => setSelectedIndex(index)}
              style={{
                width: "100%",
                marginBottom: "12px",
                padding: "16px",
                borderRadius: "16px",
                border:
                  selectedIndex === index
                    ? "1px solid #6ee7f9"
                    : "1px solid rgba(255,255,255,0.12)",
                background:
                  selectedIndex === index
                    ? "rgba(110,231,249,0.12)"
                    : "rgba(255,255,255,0.05)",
                color: "white",
                fontWeight: 800,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {message.question}
            </button>
          ))}
        </div>

        <div
          style={{
            padding: "24px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(34,199,232,0.14), rgba(114,87,245,0.14))",
            border: "1px solid rgba(110,231,249,0.24)",
          }}
        >
          <p
            style={{
              color: "#6ee7f9",
              fontWeight: 800,
              marginTop: 0,
            }}
          >
            Réponse de QueryStaff
          </p>

          <p
            style={{
              color: "#c3cede",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            {demoMessages[selectedIndex].answer}
          </p>
        </div>
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
        Cette démonstration est un exemple. Chaque collaborateur est configuré
        selon votre activité.
      </p>
    </div>
  );
}