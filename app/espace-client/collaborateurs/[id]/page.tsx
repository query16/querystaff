 import Link from "next/link";

export default function MissionPage() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <Link href="/espace-client/collaborateurs" style={styles.back}>
          ← Retour à mes collaborateurs
        </Link>

        <p style={styles.label}>NOUVELLE MISSION</p>
        <h1 style={styles.title}>Confier une mission</h1>

        <p style={styles.text}>
          Décrivez clairement la mission que vous souhaitez confier à votre
          collaborateur IA.
        </p>

        <textarea
          placeholder="Exemple : Prépare un communiqué de presse pour mon nouveau titre..."
          style={styles.textarea}
        />

        <button style={styles.button}>Envoyer la mission</button>
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "120px 24px 60px",
    color: "white",
    background: "radial-gradient(circle at top left, #12305a, #07101f 48%)",
  },
  card: {
    width: "100%",
    maxWidth: "850px",
    margin: "0 auto",
    padding: "40px",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "28px",
    background: "rgba(255,255,255,0.05)",
  },
  back: {
    color: "#67e8f9",
    textDecoration: "none",
    fontWeight: 700,
  },
  label: {
    color: "#67e8f9",
    fontWeight: 800,
    marginTop: "35px",
  },
  title: {
    fontSize: "clamp(38px, 6vw, 58px)",
    margin: "10px 0",
  },
  text: {
    color: "#cbd5e1",
    fontSize: "18px",
    lineHeight: 1.6,
  },
  textarea: {
    width: "100%",
    minHeight: "220px",
    marginTop: "25px",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontSize: "17px",
    resize: "vertical" as const,
  },
  button: {
    marginTop: "22px",
    padding: "16px 28px",
    border: "none",
    borderRadius: "999px",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
    background: "linear-gradient(90deg, #22d3ee, #8b5cf6)",
  },
};