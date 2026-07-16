 export default function MiloPage() {
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
          <div style={{ fontSize: "64px" }}>🎙️</div>

          <h1
            style={{
              margin: "20px 0 8px",
              fontSize: "56px",
              letterSpacing: "-2px",
            }}
          >
            Milo
          </h1>

          <p
            style={{
              color: "#6ee7f9",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            Collaborateur IA pour artistes et professionnels de la musique
          </p>

          <p
            style={{
              color: "#c3cede",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Milo accompagne les artistes, labels et producteurs dans leur communication presse et la promotion de leurs projets musicaux.
          </p>

          <h2>Ses principales missions</h2>

        <ul style={{ color: "#c3cede", lineHeight: 2 }}>
          <li>Rédiger les communiqués et dossiers de presse</li>
          <li>Préparer les e-mails pour les journalistes, radios et médias</li>
          <li>Organiser les campagnes de lancement musical</li>
          <li>Préparer les relances et les demandes d’interview</li>
          <li>Suivre les retombées presse et les contacts médias</li>
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
  href="/api/checkout?agent=milo"
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
  Choisir Milo
</a>          
         
          </div>
        </div>
      </section>
    </main>
  );
}
