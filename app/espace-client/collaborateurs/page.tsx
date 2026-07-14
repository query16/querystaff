import Link from "next/link";

export default function CollaborateursPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <Link href="/espace-client" style={styles.back}>← Retour à l’espace client</Link>
        <p style={styles.label}>MON ÉQUIPE NUMÉRIQUE</p>
        <h1 style={styles.title}>Mes collaborateurs IA</h1>
        <p style={styles.text}>
          Retrouvez ici les collaborateurs IA choisis pour accompagner votre entreprise.
        </p>
        <div style={styles.card}>
          <h2>Votre équipe QueryStaff</h2>
          <p style={styles.text}>
            Vos collaborateurs actifs apparaîtront ici après votre commande.
          </p>
          <Link href="/#collaborateurs" style={styles.button}>
            Découvrir les collaborateurs IA
          </Link>
        </div>
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "120px 24px 60px",
    color: "white",
    background: "radial-gradient(circle at top left, #12305a, #07101f 48%, #030712)",
  },
  section: { width: "100%", maxWidth: "1000px", margin: "0 auto" },
  back: { color: "#67e8f9", textDecoration: "none", fontWeight: 700 },
  label: { color: "#67e8f9", fontWeight: 800, marginTop: "35px" },
  title: { fontSize: "clamp(38px, 6vw, 54px)", margin: "10px 0" },
  text: { color: "#cbd5e1", fontSize: "18px", lineHeight: 1.6 },
  card: {
    marginTop: "35px",
    padding: "30px",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.07)",
  },
  button: {
    display: "inline-block",
    marginTop: "18px",
    padding: "14px 22px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
    color: "white",
    textDecoration: "none",
    fontWeight: 800,
  },
};
