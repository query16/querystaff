 export default function NolaPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 24px 80px",
        background:
          "radial-gradient(circle at top, #16334a 0%, #071827 45%, #020914 100%)",
        color: "white",
      }}
    >
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "48px",
          border: "1px solid rgba(80, 220, 255, 0.28)",
          borderRadius: "28px",
          background: "rgba(15, 40, 60, 0.82)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.35)",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>📅</div>

        <p
          style={{
            color: "#32f0c0",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Gestion des rendez-vous & anti-absences
        </p>

        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 88px)",
            lineHeight: 0.95,
            margin: "12px 0 24px",
          }}
        >
          Nola protège votre planning et réduit les rendez-vous oubliés.
        </h1>

        <p
          style={{
            maxWidth: "760px",
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#d8e8f3",
          }}
        >
          Nola confirme les rendez-vous, envoie les rappels, facilite les
          annulations et aide à récupérer les créneaux libérés avant qu’ils ne
          soient perdus.
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
            "Confirmation des rendez-vous",
            "Rappels automatiques",
            "Gestion des annulations",
            "Réduction des rendez-vous non honorés",
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
            background: "rgba(0, 255, 200, 0.08)",
          }}
        >
          <strong style={{ fontSize: "28px" }}>Tarif à définir</strong>
          <p style={{ marginTop: "8px", color: "#cfe4ee" }}>
            Le tarif dépendra des rappels, des canaux utilisés et du volume de
            rendez-vous gérés.
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
