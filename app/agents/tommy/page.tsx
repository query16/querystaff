 export default function TommyPage() {
  const missions = [
    {
      icon: "📞",
      title: "Décrocher les appels",
      description:
        "Tommy accueille chaque appelant avec une présentation claire et professionnelle.",
    },
    {
      icon: "💬",
      title: "Comprendre la demande",
      description:
        "Il écoute le motif de l’appel, pose les bonnes questions et identifie le besoin.",
    },
    {
      icon: "📝",
      title: "Prendre les coordonnées",
      description:
        "Il recueille le nom, le numéro de téléphone et les informations utiles.",
    },
    {
      icon: "🚨",
      title: "Qualifier les priorités",
      description:
        "Il distingue une demande classique d’une situation nécessitant une réponse rapide.",
    },
    {
      icon: "📅",
      title: "Préparer un rendez-vous",
      description:
        "Selon votre configuration, Tommy peut recueillir les disponibilités du client.",
    },
    {
      icon: "📨",
      title: "Transmettre un résumé",
      description:
        "Après l’appel, il vous remet une synthèse claire pour faciliter votre suivi.",
    },
  ];

  const benefits = [
    "Moins d’appels manqués",
    "Accueil professionnel",
    "Demandes mieux organisées",
    "Coordonnées centralisées",
    "Temps de traitement réduit",
    "Suivi client simplifié",
  ];

  return (
    <main className="tommy-page">
      <section className="tommy-container">
        <a href="/agents" className="back-link">
          ← Retour aux collaborateurs
        </a>

        <div className="hero">
          <div className="hero-image-wrapper">
            <img
              src="/avatars/tommy.png"
              alt="Tommy, standard téléphonique IA de QueryStaff"
              className="hero-image"
            />

            <div className="availability-badge">
              <span className="availability-dot" />
              Standard téléphonique IA
            </div>
          </div>

          <div className="hero-content">
            <p className="eyebrow">Collaborateur téléphonique QueryStaff</p>

            <h1>Tommy</h1>

            <h2>Le standard téléphonique IA qui ne laisse plus vos clients sans réponse</h2>

            <p className="introduction">
              Tommy accueille vos appelants, comprend leur demande, recueille
              les informations importantes et vous transmet un résumé clair
              après chaque conversation.
            </p>

            <p className="secondary-text">
              Il peut être configuré selon votre activité, vos horaires, vos
              consignes et les situations qui doivent être transmises en
              priorité à un membre de votre équipe.
            </p>
          </div>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Ses principales missions</p>
            <h2>Un véritable premier accueil pour votre entreprise</h2>
          </div>

          <div className="missions-grid">
            {missions.map((mission) => (
              <article className="mission-card" key={mission.title}>
                <span className="mission-icon">{mission.icon}</span>

                <h3>{mission.title}</h3>

                <p>{mission.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div>
            <p className="eyebrow">Pourquoi recruter Tommy ?</p>

            <h2>Vos appels deviennent des demandes exploitables</h2>

            <p className="secondary-text">
              Vous ne recevez plus seulement un appel manqué. Tommy transforme
              chaque conversation en informations structurées pour vous aider à
              rappeler la bonne personne avec le bon contexte.
            </p>
          </div>

          <div className="benefits-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span>✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="summary-section">
          <div className="summary-icon">📋</div>

          <div>
            <p className="eyebrow">Après chaque appel</p>

            <h2>Un résumé immédiatement compréhensible</h2>

            <p>
              Tommy peut restituer l’identité de l’appelant, ses coordonnées,
              le motif de son appel, son niveau de priorité et les prochaines
              actions recommandées.
            </p>
          </div>
        </section>

        <section className="final-message">
          <span>☎️</span>

          <div>
            <h2>Tommy répond pendant que vous vous concentrez sur votre métier.</h2>

            <p>
              Un accueil cohérent, une voix professionnelle et des demandes
              transmises sans perdre les informations essentielles.
            </p>
          </div>
        </section>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .tommy-page {
          min-height: 100vh;
          padding: 48px 24px 80px;
          background:
            radial-gradient(circle at 10% 5%, rgba(40, 111, 218, 0.36), transparent 32%),
            radial-gradient(circle at 90% 15%, rgba(111, 70, 230, 0.22), transparent 30%),
            linear-gradient(145deg, #061329 0%, #030815 55%, #02050c 100%);
          color: #ffffff;
        }

        .tommy-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-flex;
          margin-bottom: 30px;
          color: #6ee7f9;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) minmax(320px, 1.15fr);
          align-items: center;
          gap: 54px;
          margin-bottom: 80px;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .hero-image {
          display: block;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 32px;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.46);
        }

        .availability-badge {
          position: absolute;
          right: 20px;
          bottom: 20px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 15px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          background: rgba(4, 12, 28, 0.88);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          backdrop-filter: blur(14px);
        }

        .availability-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #36e5a2;
          box-shadow: 0 0 14px rgba(54, 229, 162, 0.85);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #6ee7f9;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .hero-content h1 {
          margin: 0;
          font-size: clamp(60px, 9vw, 104px);
          line-height: 0.9;
          letter-spacing: -5px;
        }

        .hero-content h2 {
          max-width: 720px;
          margin: 24px 0 22px;
          font-size: clamp(29px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: -1.8px;
        }

        .introduction {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.65;
        }

        .secondary-text {
          margin: 0;
          color: #b9c9de;
          font-size: 17px;
          line-height: 1.75;
        }

        .content-section {
          margin-bottom: 76px;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 30px;
        }

        .section-heading h2,
        .benefits-section h2,
        .summary-section h2,
        .final-message h2 {
          margin: 0;
          font-size: clamp(31px, 5vw, 50px);
          line-height: 1.08;
          letter-spacing: -1.8px;
        }

        .missions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .mission-card {
          min-height: 245px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.055);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(13px);
        }

        .mission-icon {
          display: grid;
          width: 54px;
          height: 54px;
          margin-bottom: 23px;
          place-items: center;
          border-radius: 17px;
          background: rgba(110, 231, 249, 0.13);
          font-size: 27px;
        }

        .mission-card h3 {
          margin: 0 0 11px;
          font-size: 22px;
        }

        .mission-card p {
          margin: 0;
          color: #b9c9de;
          font-size: 16px;
          line-height: 1.65;
        }

        .benefits-section {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 55px;
          margin-bottom: 76px;
          padding: 38px;
          border: 1px solid rgba(110, 231, 249, 0.18);
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              rgba(31, 102, 193, 0.2),
              rgba(84, 49, 164, 0.12)
            );
        }

        .benefits-section .secondary-text {
          margin-top: 20px;
        }

        .benefits-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 11px;
          min-height: 62px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.055);
        }

        .benefit-item span {
          display: grid;
          flex: 0 0 28px;
          width: 28px;
          height: 28px;
          place-items: center;
          border-radius: 50%;
          background: rgba(54, 229, 162, 0.16);
          color: #58efb4;
          font-weight: 900;
        }

        .benefit-item p {
          margin: 0;
          color: #eef6ff;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.35;
        }

        .summary-section {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 25px;
          margin-bottom: 28px;
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.055);
        }

        .summary-icon {
          display: grid;
          width: 68px;
          height: 68px;
          place-items: center;
          border-radius: 21px;
          background: rgba(110, 231, 249, 0.13);
          font-size: 34px;
        }

        .summary-section p:last-child {
          max-width: 820px;
          margin: 18px 0 0;
          color: #c0cee0;
          font-size: 17px;
          line-height: 1.7;
        }

        .final-message {
          display: flex;
          align-items: flex-start;
          gap: 23px;
          padding: 38px;
          border-radius: 28px;
          background: linear-gradient(135deg, #137fbd, #6250d8);
          box-shadow: 0 25px 65px rgba(28, 92, 193, 0.25);
        }

        .final-message > span {
          font-size: 48px;
        }

        .final-message p {
          max-width: 800px;
          margin: 15px 0 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 17px;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .hero,
          .benefits-section {
            grid-template-columns: 1fr;
          }

          .hero {
            gap: 34px;
          }

          .missions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .tommy-page {
            padding: 28px 16px 55px;
          }

          .hero {
            margin-bottom: 58px;
          }

          .hero-content h1 {
            letter-spacing: -3px;
          }

          .availability-badge {
            right: 12px;
            bottom: 12px;
            max-width: calc(100% - 24px);
          }

          .missions-grid,
          .benefits-list {
            grid-template-columns: 1fr;
          }

          .mission-card {
            min-height: auto;
          }

          .benefits-section,
          .summary-section,
          .final-message {
            padding: 25px;
          }

          .summary-section {
            grid-template-columns: 1fr;
          }

          .final-message {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}