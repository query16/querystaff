export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071120",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          QueryStaff
        </h1>

        <h2
          style={{
            fontSize: "30px",
            color: "#60A5FA",
            marginBottom: "30px",
          }}
        >
          Le premier cabinet international de recrutement
          d'employés IA
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#D1D5DB",
            lineHeight: "1.7",
            marginBottom: "50px",
          }}
        >
          Recrutez un collaborateur IA spécialisé pour votre
          entreprise en quelques minutes.
          <br />
          Restaurant, Hôtel, Garage, Immobilier, Santé,
          Commerce…
        </p>

        <button
          style={{
            background: "#2563EB",
            color: "white",
            border: "none",
            padding: "18px 40px",
            borderRadius: "14px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          Recruter mon premier collaborateur IA
        </button>
      </div>
    </main>
  );
}
