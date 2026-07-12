 export default function CommentCaFonctionnePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 30px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 45%, #040912 100%)",
        color: "white",
      }}
    >
      <section style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            color: "#6ee7f9",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ← Retour à l’accueil
        </a>

        <h1
          style={{
            marginTop: "30px",
            fontSize: "56px",
            letterSpacing: "-2px",
          }}
        >
          Comment ça fonctionne ?
        </h1>

        <p
          style={{
            maxWidth: "760px",
            color: "#c3cede",
            fontSize: "19px",
            lineHeight: 1.7,
          }}
        >
          QueryStaff vous permet de choisir un collaborateur IA spécialisé,
          de définir ses missions et de le mettre rapidement au service de
          votre activité.
        </p>

        <div
          style={{
            marginTop: "45px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              number: "1",
              title: "Choisissez votre agent",
              text: "Sélectionnez le collaborateur IA qui correspond le mieux à votre métier et à vos besoins.",
            },
            {
              number: "2",
              title: "Définissez ses missions",
              text: "Indiquez les tâches, les réponses, les horaires et les priorités que vous souhaitez lui confier.",
            },
            {
              number: "3",
              title: "Configuration personnalisée",
              text: "Votre collaborateur est préparé selon votre activité, vos services et votre manière de travailler.",
            },
            {
              number: "4",
              title: "Mise en service",
              text: "Une fois configuré, votre agent peut commencer à vous accompagner au quotidien.",
            },
          ].map((step) => (
            <article
              key={step.number}
              style={{
                padding: "28px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "rgba(110,231,249,0.15)",
                  color: "#6ee7f9",
                  fontSize: "22px",
                  fontWeight: 900,
                }}
              >
                {step.number}
              </div>

              <h2>{step.title}</h2>

              <p style={{ color: "#c3cede", lineHeight: 1.7 }}>
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <a
            href="/agents"
            style={{
              display: "inline-flex",
              padding: "15px 24px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22c7e8, #7257f5)",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Découvrir nos collaborateurs
          </a>
        </div>
      </section>
    </main>
  );
}