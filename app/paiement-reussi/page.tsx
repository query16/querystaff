 export default function PaiementReussiPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 30px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 45%, #040912 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "760px",
          margin: "0 auto",
          padding: "42px",
          borderRadius: "28px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.14)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "64px" }}>✅</div>

        <p
          style={{
            marginTop: "18px",
            color: "#6ee7f9",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Paiement confirmé
        </p>

        <h1
          style={{
            margin: "12px 0",
            fontSize: "48px",
          }}
        >
          Bienvenue chez QueryStaff
        </h1>

        <p
          style={{
            color: "#c3cede",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Votre abonnement a bien été enregistré. Nous allons maintenant
          préparer votre collaborateur IA et vous contacter pour finaliser sa
          configuration.
        </p>

        <div
          style={{
            marginTop: "28px",
            padding: "20px",
            borderRadius: "18px",
            background: "rgba(110,231,249,0.10)",
            color: "#dffbff",
          }}
        >
          Un reçu de paiement sera envoyé à l’adresse e-mail utilisée sur
          Stripe.
        </div>

        <a
          href="/configurer-collaborateur"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            marginTop: "28px",
            padding: "14px 22px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #22c7e8, #7257f5)",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Configurer mon collaborateur
        </a>
      </section>
    </main>
  );
}