export default function EspaceClientPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 24px 60px",
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
        <p style={{ color: "#67e8f9", fontWeight: 700 }}>
          ESPACE CLIENT QUERYSTAFF
        </p>

        <h1 style={{ fontSize: "44px", margin: "12px 0" }}>
          Bienvenue dans votre espace client
        </h1>

        <p
          style={{
            maxWidth: "700px",
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
          {[
            ["Mes collaborateurs IA", "Accéder à votre équipe numérique."],
            ["Mes commandes", "Suivre vos demandes en cours."],
            ["Mes documents", "Retrouver les fichiers produits."],
            ["Mon abonnement", "Consulter votre formule et vos paiements."],
          ].map(([title, description]) => (
            <article
              key={title}
              style={{
                padding: "26px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h2 style={{ fontSize: "21px", marginBottom: "12px" }}>
                {title}
              </h2>
              <p style={{ color: "#cbd5e1", lineHeight: 1.5 }}>
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
