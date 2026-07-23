 export default function MagicQueryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 24px 80px",
        background:
          "radial-gradient(circle at top, #2a2454 0%, #0a1730 48%, #020914 100%)",
        color: "white",
      }}
    >
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "48px",
          border: "1px solid rgba(150, 108, 255, 0.32)",
          borderRadius: "28px",
          background: "rgba(19, 28, 58, 0.84)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.38)",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>✨</div>

        <p
          style={{
            color: "#65f0d1",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Superviseur IA & assistance de secours
        </p>

        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 88px)",
            lineHeight: 0.95,
            margin: "12px 0 24px",
          }}
        >
          Magic Query vous aide quand vous ne savez plus par où commencer.
        </h1>

        <p
          style={{
            maxWidth: "760px",
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#d8e8f3",
          }}
        >
          Magic Query analyse votre blocage, identifie le bon collaborateur IA,
          vous guide étape par étape et vous évite de tout réexpliquer.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginTop: "40px",
          }}
        >
          {[
            "Diagnostic du problème",
            "Orientation vers le bon agent",
            "Aide étape par étape",
            "Résumé clair du blocage",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "22px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "42px",
            padding: "26px",
            borderRadius: "20px",
            background: "rgba(155, 108, 255, 0.10)",
          }}
        >
          <strong style={{ fontSize: "28px" }}>
            Inclus avec votre abonnement
          </strong>
          <p style={{ marginTop: "8px", color: "#cfe4ee" }}>
            Magic Query est le service de secours intelligent de QueryStaff. Il
            ne remplace pas les agents métiers : il vous aide à trouver la bonne
            solution et le bon interlocuteur.
          </p>
        </div>

        <a
          href="/agents"
          style={{
            display: "inline-block",
            marginTop: "34px",
            padding: "16px 26px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #00d8d8, #9b6cff)",
            color: "white",
 
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Retour aux collaborateurs IA
        </a>
      </section>
    </main>
  );
}