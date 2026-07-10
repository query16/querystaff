const candidates = [
  {
    name: "Gordon",
    role: "Restaurant",
    icon: "👨‍🍳",
    specialty: "Accueil, réservations & expérience client",
    availability: "Disponible maintenant",
    price: "39 €/mois",
    highlight: "Accueil & réservations",
    skills: ["Réservations", "Menu & allergènes", "WhatsApp", "Avis clients"],
    integrations: ["Resy", "Google Calendar", "WhatsApp", "Google Sheets"]
  },
  {
    name: "Emma",
    role: "Commerce",
    icon: "👩‍💼",
    specialty: "Relation client & accompagnement commercial",
    availability: "Prête en 24 h",
    price: "39 €/mois",
    highlight: "Relation client",
    skills: ["Accueil client", "Questions fréquentes", "Relance prospects", "Instagram"],
    integrations: ["Instagram", "Mailchimp", "Calendly", "Notion"]
  },
  {
    name: "Max",
    role: "Garage",
    icon: "👨‍🔧",
    specialty: "Organisation des rendez-vous & suivi atelier",
    availability: "Disponible immédiatement",
    price: "39 €/mois",
    highlight: "Rendez-vous & suivi",
    skills: ["Rendez-vous", "Devis", "Suivi réparation", "SMS"],
    integrations: ["Google Calendar", "Twilio", "Trello", "Drive"]
  },
  {
    name: "Sofia",
    role: "Santé",
    icon: "👩‍⚕️",
    specialty: "Gestion des appels & rappels patients",
    availability: "Déploiement rapide",
    price: "39 €/mois",
    highlight: "Organisation & rappel",
    skills: ["Rendez-vous", "Rappels", "Orientation", "E-mail"],
    integrations: ["Outlook", "Google Workspace", "Mail", "Trello"]
  }
];

const howItWorks = [
  {
    number: "01",
    icon: "✨",
    title: "Choisissez votre employé IA",
    text: "Sélectionnez un profil pensé pour votre activité, votre rythme et votre niveau d’autonomie."
  },
  {
    number: "02",
    icon: "⚙️",
    title: "Personnalisez ses missions",
    text: "Définissez les tâches prioritaires, les réponses attendues et le ton de votre marque."
  },
  {
    number: "03",
    icon: "🔗",
    title: "Connectez vos outils",
    text: "Reliez WhatsApp, votre site, votre agenda ou votre CRM pour une vraie continuité d’usage."
  },
  {
    number: "04",
    icon: "🌙",
    title: "Votre IA travaille 24/7",
    text: "Laissez votre collaborateur gérer les demandes même hors horaires, sans rupture de service."
  }
];

const capabilities = [
  { title: "Service client premium", text: "Réponses instantanées, polies et personnalisées à chaque interaction." },
  { title: "Opérations 24/7", text: "Un employé IA disponible pour gérer les pics de demande sans délai." },
  { title: "Intégration sans friction", text: "Déploiement rapide avec vos outils existants, sans équipe technique lourde." },
  { title: "Conversion mesurable", text: "Chaque interaction est conçue pour améliorer les réservations et les ventes." }
];

const comparison = [
  { label: "Coût mensuel", traditional: "Salaire, charges et formation", ai: "Abonnement mensuel prévisible" },
  { label: "Disponibilité", traditional: "Heures fixes et absences", ai: "Disponible 24/7" },
  { label: "Déploiement", traditional: "Recrutement et intégration", ai: "Mise en place rapide" },
  { label: "Évolution", traditional: "Formation continue limitée", ai: "Adaptation rapide à vos besoins" }
];

const testimonials = [
  {
    quote: "Le temps gagné sur l’accueil client est immédiatement visible. L’expérience reste fluide, naturelle et professionnelle.",
    author: "M. L.",
    role: "Gérant d’un restaurant indépendant"
  },
  {
    quote: "La présentation est claire, l’intégration est simple, et le suivi de chaque demande est beaucoup plus structuré.",
    author: "A. R.",
    role: "Responsable d’un point de vente"
  },
  {
    quote: "Le profil me donne l’impression d’avoir un vrai collaborateur, sans la complexité d’un recrutement classique.",
    author: "S. B.",
    role: "Directeur d’une activité de service"
  }
];

const faqs = [
  {
    question: "À quoi ressemble un employé IA QueryStaff ?",
    answer: "Il s’agit d’un collaborateur numérique spécialisé, conçu pour gérer des missions concrètes comme l’accueil, les réponses aux clients, les réservations ou les relances."
  },
  {
    question: "Est-ce adapté à mon activité ?",
    answer: "Oui. Les profils sont pensés pour couvrir des besoins récurrents dans des secteurs variés, avec une approche professionnelle et personnalisable."
  },
  {
    question: "Comment démarrer ?",
    answer: "Vous pouvez choisir un profil, le déployer rapidement et l’ajuster selon votre rythme et vos besoins métier."
  },
  {
    question: "Le prix est-il transparent ?",
    answer: "Oui. L’accès à un profil premium démarre à 39 €/mois, avec une logique simple et prévisible."
  }
];

export default function Home() {
  return (
    <main className="page">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="light-beam" />

      <div className="container">
        <nav className="nav">
          <a className="brand" href="#">
            <span className="brand-mark">Q</span>
            <span className="brand-text">QUERY<span>STAFF</span></span>
          </a>
          <div className="navlinks">
            <a href="#candidats">Candidats IA</a>
            <a href="#comparatif">Comparatif</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="btn primary" href="#candidats">Recruter maintenant</a>
        </nav>

        <section className="hero">
          <div className="hero-copy">
            <div className="badge">Nouveau · cabinet international d’employés IA premium</div>
            <h1>
              Des collaborateurs IA <span className="gradient">prêts à agir</span> à chaque instant.
            </h1>
            <p className="lead">
              QueryStaff propose des profils numériques spécialisés pour accueillir vos clients, répondre à leurs questions
              et soutenir vos opérations avec une expérience professionnelle dès le premier contact.
            </p>
            <div className="actions">
              <a className="btn primary" href="#candidats">Voir les profils</a>
              <a className="btn secondary" href="#comparatif">Découvrir le comparatif</a>
            </div>
            <div className="kpis">
              <div className="kpi"><b>300+</b><small>métiers</small></div>
              <div className="kpi"><b>24/7</b><small>disponible</small></div>
              <div className="kpi"><b>40+</b><small>langues</small></div>
              <div className="kpi"><b>0 dev.</b><small>pour démarrer</small></div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel__glow" />
            <div className="hero-panel__header">
              <div className="panel-avatar">🤖</div>
              <div>
                <p className="eyebrow">Profil premium</p>
                <h2>Gordon • Restaurant</h2>
              </div>
            </div>
            <div className="hero-panel__body">
              <span className="status-pill">Disponible immédiatement</span>
              <div className="skill-list">
                <div className="skill-chip">📅 Réservations</div>
                <div className="skill-chip">🍽️ Menu</div>
                <div className="skill-chip">📱 WhatsApp</div>
                <div className="skill-chip">⭐ Avis clients</div>
              </div>
              <div className="pricing-box">
                <span>Coût mensuel</span>
                <strong>39 €/mois</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="how-section">
        <div className="container">
          <div className="section-heading how-heading">
            <p className="eyebrow">Comment ça fonctionne</p>
            <h2>Un déploiement simple, premium et rapide.</h2>
            <p>Chaque étape a été pensée pour rendre l’intégration fluide, claire et professionnelle.</p>
          </div>
          <div className="how-grid">
            {howItWorks.map((step, index) => (
              <article className="how-card" key={step.title} style={{ animationDelay: `${index * 120}ms` }}>
                <div className="how-card__top">
                  <span className="how-card__number">{step.number}</span>
                  <span className="how-card__icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Pourquoi QueryStaff</p>
            <h2>Comparatif : Employé traditionnel vs Employé IA QueryStaff</h2>
            <p>Comparez rapidement les différences clés entre un recrutement classique et notre solution IA.</p>
          </div>

          <div className="compare-table">
            <div className="compare-head">
              <span>Critère</span>
              <span>Employé traditionnel</span>
              <span>QueryStaff IA</span>
            </div>

            {[
              ["Disponible 24/7", "✕", "✓"],
              ["Salaire", "Salaire + charges", "Abonnement fixe"],
              ["Arrêt maladie", "Oui", "✕"],
              ["Congés", "Oui", "✕"],
              ["Déploiement instantané", "Non", "✓"],
              ["Langues", "Limité", "✓"],
              ["Scalabilité", "Recrutement requis", "✓"],
              ["Vitesse de réponse", "Variable", "✓"]
            ].map((row) => (
              <div className="compare-row" key={row[0]}>
                <div className="compare-crit">{row[0]}</div>
                <div className={`compare-trad ${row[1] === '✓' ? 'check' : 'cross'}`}>{row[1]}</div>
                <div className={`compare-ai ${row[2] === '✓' ? 'check' : 'cross'}`}>{row[2]}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="section" id="metiers">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Pourquoi QueryStaff</p>
            <h2>Une nouvelle classe d’employés IA, pensée pour la performance.</h2>
            <p>Des collaborateurs numériques prêts à agir, à représenter votre marque et à créer une expérience fluide, premium et continue.</p>
          </div>
          <div className="feature-grid">
            {capabilities.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="candidats">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Profils sélectionnés</p>
            <h2>Des employés IA premium, prêts à représenter votre activité.</h2>
            <p>Chaque profil combine un métier, des compétences, une disponibilité claire et un prix mensuel simple.</p>
          </div>
          <div className="grid">
            {candidates.map((candidate) => (
              <article className="candidate-card" key={candidate.name}>
                <div className="candidate-card__top">
                  <div className="candidate-icon">{candidate.icon}</div>
                  <div className="candidate-card__pricewrap">
                    <span className="candidate-highlight">{candidate.highlight}</span>
                    <span className="candidate-price">{candidate.price}</span>
                  </div>
                </div>
                <h3>{candidate.name}</h3>
                <p className="candidate-role">{candidate.role}</p>
                <p className="candidate-specialty">{candidate.specialty}</p>
                <div className="candidate-meta-row">
                  <span className="candidate-badge">{candidate.availability}</span>
                </div>
                <div className="candidate-skills">
                  {candidate.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <div className="candidate-integrations">
                  <span className="candidate-label">Intégrations</span>
                  <div className="candidate-integration-list">
                    {candidate.integrations.map((integration) => <span key={integration}>{integration}</span>)}
                  </div>
                </div>
                <div className="candidate-actions">
                  <a className="btn secondary btn-small" href="#">Voir le profil</a>
                  <a className="btn primary btn-small" href="#">Essayer gratuitement</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="comparatif">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Comparatif</p>
            <h2>Un modèle plus simple qu’un recrutement traditionnel.</h2>
            <p>La différence entre un employé classique et un employé IA QueryStaff se voit rapidement sur la structure, le coût et la disponibilité.</p>
          </div>
          <div className="table-card">
            <div className="table-head">
              <span>Élément</span>
              <span>Employé traditionnel</span>
              <span>QueryStaff AI employee</span>
            </div>
            {comparison.map((row) => (
              <div className="table-row" key={row.label}>
                <strong>{row.label}</strong>
                <span>{row.traditional}</span>
                <span>{row.ai}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Simulation visuelle</p>
            <h2>Une estimation simple, pensée comme un aperçu de gestion.</h2>
          </div>
          <div className="calculator-card">
            <div className="calculator-panel">
              <p className="eyebrow">Économie estimée</p>
              <h3>Réduction de charge de travail sur l’accueil</h3>
              <div className="calculator-graph">
                <div className="bar bar-one" />
                <div className="bar bar-two" />
                <div className="bar bar-three" />
              </div>
              <div className="calculator-foot">
                <div>
                  <span>Besoin</span>
                  <strong>2 h/jour</strong>
                </div>
                <div>
                  <span>Coût mensuel</span>
                  <strong>39 €/mois</strong>
                </div>
              </div>
            </div>
            <div className="calculator-copy">
              <h3>Mockup de calcul</h3>
              <p>Cette section présente une vue visuelle d’un scénario de gestion, sans prétendre remplacer une simulation métier complète.</p>
              <ul>
                <li>Réduction des temps de réponse</li>
                <li>Meilleure continuité de service</li>
                <li>Organisation plus claire des priorités</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="temoignages">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Témoignages</p>
            <h2>Des usages concrets, présentés de façon crédible et simple.</h2>
            <p>Chaque retour ci-dessous reflète un usage réel d’accompagnement, sans nom d’entreprise ni promesse non vérifiée.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.author}>
                <p>“{item.quote}”</p>
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faq">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Questions fréquentes sur QueryStaff.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="trusted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Ils nous font confiance</p>
            <h2>Des équipes qui nous recommandent</h2>
            <p>Des clients variés utilisent QueryStaff pour fiabiliser leur accueil et améliorer la conversion.</p>
          </div>
          <div className="trusted-logos">
            <div className="logo">🏨</div>
            <div className="logo">🛍️</div>
            <div className="logo">🔧</div>
            <div className="logo">🩺</div>
            <div className="logo">💼</div>
          </div>

          <div className="premium-stats">
            <div className="stat-card">
              <div className="stat">24/7</div>
              <div className="stat-label">Disponibilité continue</div>
            </div>
            <div className="stat-card">
              <div className="stat">300+</div>
              <div className="stat-label">Métiers couverts</div>
            </div>
            <div className="stat-card">
              <div className="stat">40+</div>
              <div className="stat-label">Langues</div>
            </div>
            <div className="stat-card">
              <div className="stat">39 €</div>
              <div className="stat-label">Prix de départ / mois</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="pricing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Tarifs</p>
            <h2>Des offres simples, conçues pour évoluer</h2>
            <p>Choisissez un profil, personnalisez-le et déployez rapidement.</p>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card-anim">
              <div className="pc-top">
                <div className="pc-title">Profil Standard</div>
                <div className="pc-price">39 €/mois</div>
              </div>
              <ul>
                <li>Déploiement rapide</li>
                <li>Support standard</li>
                <li>Intégrations basiques</li>
              </ul>
              <div className="pc-actions">
                <a className="btn secondary" href="#">Essayer gratuitement</a>
                <a className="btn primary" href="#">Demander une démo</a>
              </div>
            </div>
            <div className="pricing-card-anim featured">
              <div className="pc-top">
                <div className="pc-title">Profil Premium</div>
                <div className="pc-price">89 €/mois</div>
              </div>
              <ul>
                <li>Support premium</li>
                <li>Intégrations avancées</li>
                <li>Personnalisation métier</li>
              </ul>
              <div className="pc-actions">
                <a className="btn secondary" href="#">Essayer gratuitement</a>
                <a className="btn primary" href="#">Demander une démo</a>
              </div>
            </div>
            <div className="pricing-card-anim">
              <div className="pc-top">
                <div className="pc-title">Entreprise</div>
                <div className="pc-price">Sur-mesure</div>
              </div>
              <ul>
                <li>SLA dédié</li>
                <li>Intégrations sur-mesure</li>
                <li>Formation & onboarding</li>
              </ul>
              <div className="pc-actions">
                <a className="btn secondary" href="#">Contactez-nous</a>
                <a className="btn primary" href="#">Demander une démo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="roi">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">ROI</p>
            <h2>Calculateur d’impact (aperçu)</h2>
            <p>Une estimation visuelle de l’impact sur vos coûts et votre disponibilité.</p>
          </div>
          <div className="roi-card">
            <div className="roi-inputs">
              <label>Heures manuelles / jour
                <input type="range" min="0" max="8" defaultValue={2} />
              </label>
              <label>Coût horaire moyen
                <input type="range" min="10" max="80" defaultValue={25} />
              </label>
            </div>
            <div className="roi-output">
              <div className="roi-number">Économie estimée
                <div className="roi-amount">~39 €/mois</div>
              </div>
              <p className="muted">Aperçu visuel — pour une simulation détaillée, demandez une démo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="stories">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Success stories</p>
            <h2>Exemples d’utilisation réels</h2>
            <p>Des cas concrets montrant la valeur apportée par QueryStaff.</p>
          </div>
          <div className="stories-grid">
            <article className="story-card">
              <h3>Restaurant — augmentation des réservations</h3>
              <p>Automatisation des réservations et gestion des avis, améliorant le taux de remplissage.</p>
            </article>
            <article className="story-card">
              <h3>Garage — suivi des interventions</h3>
              <p>Rendez-vous et relances automatisées, réduisant les délais et améliorant la satisfaction.</p>
            </article>
            <article className="story-card">
              <h3>Commerce — relance prospects</h3>
              <p>Messages ciblés et relances organisées, générant davantage de conversions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <h2>Prêt à déployer votre premier employé IA ?</h2>
              <p>Demandez une démo gratuite et voyez comment QueryStaff peut transformer votre service client.</p>
            </div>
            <div className="cta-actions">
              <a className="btn primary" href="#">Demander une démo</a>
              <a className="btn secondary" href="#">Essayer gratuitement</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#">
              <span className="brand-mark">Q</span>
              <span className="brand-text">QUERY<span>STAFF</span></span>
            </a>
            <p>QueryStaff conçoit des employés IA spécialisés pour un accueil client plus fluide, plus rapide et plus structuré.</p>
          </div>
          <div>
            <h3>Solutions</h3>
            <a href="#candidats">Profils IA</a>
            <a href="#comparatif">Comparatif</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:contact@querystaff.com">contact@querystaff.com</a>
            <span>Déploiement simple · Support premium</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
