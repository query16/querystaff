const candidates = [
  { name: "Gordon", role: "Restaurant", icon: "👨‍🍳", skills: ["Réservations", "Menu & allergènes", "WhatsApp", "Avis clients"] },
  { name: "Emma", role: "Commerce", icon: "👩‍💼", skills: ["Accueil client", "Questions fréquentes", "Relance prospects", "Instagram"] },
  { name: "Max", role: "Garage", icon: "👨‍🔧", skills: ["Rendez-vous", "Devis", "Suivi réparation", "SMS"] },
  { name: "Sofia", role: "Santé", icon: "👩‍⚕️", skills: ["Rendez-vous", "Rappels", "Orientation", "E-mail"] }
];

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <nav className="nav">
          <div className="brand">QUERY<span>STAFF</span></div>
          <div className="navlinks">
            <a href="#candidats">Candidats IA</a>
            <a href="#metiers">Métiers</a>
            <a href="#tarifs">Salaires</a>
          </div>
          <a className="btn primary" href="#candidats">Recruter maintenant</a>
        </nav>

        <section className="hero">
          <div>
            <div className="badge">Nouveau · Cabinet international de collaborateurs IA</div>
            <h1>Recrutez votre prochain <span className="gradient">collaborateur IA.</span></h1>
            <p className="lead">
              Query Staff ne vend pas un chatbot. Nous présentons des collaborateurs numériques
              spécialisés, disponibles 24h/24 pour accueillir, renseigner et accompagner vos clients.
            </p>
            <div className="actions">
              <a className="btn primary" href="#candidats">Voir les CV</a>
              <a className="btn light" href="#metiers">Explorer les métiers</a>
            </div>
            <div className="kpis">
              <div className="kpi"><b>300+</b><small>métiers</small></div>
              <div className="kpi"><b>24/7</b><small>disponible</small></div>
              <div className="kpi"><b>40+</b><small>langues</small></div>
              <div className="kpi"><b>0 dev.</b><small>pour démarrer</small></div>
            </div>
          </div>

          <div className="card">
            <div className="avatar">👨‍🍳</div>
            <h2>Gordon</h2>
            <p><b>Spécialiste Restaurant</b></p>
            <span className="status">Disponible immédiatement</span>
            <div className="skills">
              <div className="skill">📅 Réservations</div>
              <div className="skill">🍽️ Menu</div>
              <div className="skill">📱 WhatsApp</div>
              <div className="skill">⭐ Avis clients</div>
            </div>
            <div className="salary">
              <b>Salaire numérique</b><br />
              <span style={{ fontSize: 34, fontWeight: 900 }}>39 €/mois</span>
            </div>
          </div>
        </section>
      </div>

      <section className="section" id="candidats">
        <div className="container">
          <h2>Rencontrez vos futurs collaborateurs</h2>
          <p>Chaque collaborateur possède un métier, des compétences et un CV.</p>
          <div className="grid">
            {candidates.map((candidate) => (
              <div className="whitecard" key={candidate.name}>
                <div style={{ fontSize: 42 }}>{candidate.icon}</div>
                <h3>{candidate.name}</h3>
                <p>{candidate.role}</p>
                <ul>
                  {candidate.skills.map((skill) => <li key={skill}>✓ {skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="metiers">
        <div className="container">
          <h2>Plus de 300 métiers</h2>
          <p>Restaurant, hôtel, garage, commerce, santé, immobilier, artisan, taxi, VTC, services, e-commerce, tourisme et bien plus.</p>
        </div>
      </section>

      <section className="section" id="tarifs">
        <div className="container">
          <h2>Le salaire de votre collaborateur IA</h2>
          <p>Découverte gratuite, puis offres accessibles dès 39 €/mois.</p>
        </div>
      </section>

      <footer className="footer">
        QUERY STAFF — The first international AI employee recruitment platform.
      </footer>
    </main>
  );
}
