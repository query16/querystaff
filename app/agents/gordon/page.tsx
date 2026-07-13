 export default function GordonPage() {
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
          <div style={{ fontSize: "64px" }}>👨‍🍳</div>

          <h1
            style={{
              margin: "20px 0 8px",
              fontSize: "56px",
              letterSpacing: "-2px",
            }}
          >
            Gordon
          </h1>

          <p
            style={{
              color: "#6ee7f9",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            Collaborateur IA pour restaurants
          </p>

          <p
            style={{
              color: "#c3cede",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Gordon accueille vos clients, répond aux questions sur le menu,
            gère les demandes de réservation et présente les allergènes.
          </p>

          <h2>Ses principales missions</h2>

          <ul style={{ color: "#c3cede", lineHeight: 2 }}>
            <li>Répondre aux demandes de réservation</li>
            <li>Présenter le menu et les spécialités</li>
            <li>Informer sur les allergènes</li>
            <li>Répondre via WhatsApp ou le site</li>
            <li>Transmettre les demandes importantes à l’équipe</li>
          </ul>

          <div
            style={{
              marginTop: "28px",
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(110,231,249,0.10)",
            }}
          >
  <strong style={{ fontSize: "22px" }}>Dès 39 €/mois</strong>
           <a
  href="/api/checkout?agent=gordon"
  style={{
    display: "inline-block",
    marginTop: "18px",
    padding: "14px 24px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #18d7ff, #7b61ff)",
    color: "white",
    fontWeight: 800,
    textDecoration: "none",
  }}
>
  Choisir Gordon
</a>          
         
          </div>
        </div>
      </section>
    </main>
  );
}
