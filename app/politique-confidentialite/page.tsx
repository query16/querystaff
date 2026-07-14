import Link from "next/link";

const sections = [
  {
    title: "1. Responsable du traitement",
    content: (
      <>
        <p>
          Le responsable du traitement des données personnelles collectées sur
          QueryStaff est :
        </p>
        <p>
          <strong>KECHMARA – QueryStaff</strong>
          <br />
          6 rue de l’Arsenal
          <br />
          16000 Angoulême – France
        </p>
        <p>
          Pour toute question relative à vos données personnelles, vous pouvez
          utiliser la page Contact de QueryStaff.
        </p>
      </>
    ),
  },
  {
    title: "2. Données personnelles collectées",
    content: (
      <>
        <p>QueryStaff peut collecter les informations suivantes :</p>
        <ul>
          <li>nom, prénom et adresse e-mail ;</li>
          <li>nom de l’entreprise et secteur d’activité ;</li>
          <li>informations nécessaires à la création du compte client ;</li>
          <li>commandes, collaborateurs IA sélectionnés et historique associé ;</li>
          <li>documents transmis ou produits dans le cadre du service ;</li>
          <li>informations relatives aux paiements et abonnements ;</li>
          <li>données techniques de connexion, de sécurité et de navigation ;</li>
          <li>contenu des demandes envoyées par le formulaire de contact.</li>
        </ul>
        <p>
          QueryStaff ne demande jamais à ses clients de communiquer des données
          sensibles sans nécessité particulière.
        </p>
      </>
    ),
  },
  {
    title: "3. Finalités des traitements",
    content: (
      <>
        <p>Les données sont utilisées afin de :</p>
        <ul>
          <li>créer et sécuriser l’espace client ;</li>
          <li>authentifier les utilisateurs par lien sécurisé ;</li>
          <li>gérer les commandes et les collaborateurs IA sélectionnés ;</li>
          <li>produire et mettre à disposition les documents demandés ;</li>
          <li>gérer les abonnements, paiements et factures ;</li>
          <li>répondre aux demandes de contact et d’assistance ;</li>
          <li>prévenir la fraude et assurer la sécurité du service ;</li>
          <li>respecter les obligations légales et comptables.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Bases légales",
    content: (
      <>
        <p>Les traitements réalisés par QueryStaff reposent selon les cas sur :</p>
        <ul>
          <li>
            <strong>l’exécution du contrat</strong>, pour fournir les services
            commandés et gérer l’espace client ;
          </li>
          <li>
            <strong>le respect d’une obligation légale</strong>, notamment pour
            la facturation et la comptabilité ;
          </li>
          <li>
            <strong>l’intérêt légitime</strong>, pour la sécurité, la prévention
            de la fraude et l’amélioration du service ;
          </li>
          <li>
            <strong>le consentement</strong>, lorsqu’il est requis, notamment
            pour certains cookies ou communications commerciales.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Prestataires et destinataires",
    content: (
      <>
        <p>
          Les données sont accessibles uniquement aux personnes autorisées et
          aux prestataires nécessaires au fonctionnement de QueryStaff,
          notamment :
        </p>
        <ul>
          <li><strong>Supabase</strong> : authentification et base de données ;</li>
          <li><strong>Stripe</strong> : paiements et gestion des abonnements ;</li>
          <li><strong>Cloudflare</strong> : hébergement, diffusion et sécurité ;</li>
          <li><strong>Resend</strong> : envoi des e-mails transactionnels ;</li>
          <li>
            les prestataires techniques strictement nécessaires à la fourniture
            du service.
          </li>
        </ul>
        <p>
          QueryStaff ne vend pas les données personnelles de ses utilisateurs.
        </p>
      </>
    ),
  },
  {
    title: "6. Durées de conservation",
    content: (
      <>
        <p>
          Les données sont conservées uniquement pendant la durée nécessaire à
          leur finalité :
        </p>
        <ul>
          <li>
            données du compte : pendant la relation contractuelle, puis pendant
            la durée nécessaire à la gestion d’éventuelles réclamations ;
          </li>
          <li>
            demandes de contact : jusqu’à 3 ans après le dernier échange ;
          </li>
          <li>
            factures et documents comptables : pendant la durée légale
            applicable, généralement 10 ans ;
          </li>
          <li>
            journaux techniques et de sécurité : pendant une durée limitée
            nécessaire à la sécurité du service ;
          </li>
          <li>
            documents clients : pendant la durée du service, puis supprimés ou
            archivés selon les obligations applicables.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Sécurité des données",
    content: (
      <>
        <p>
          QueryStaff met en œuvre des mesures techniques et organisationnelles
          destinées à protéger les données contre l’accès non autorisé, la
          perte, l’altération ou la divulgation.
        </p>
        <p>
          L’accès à l’espace client est protégé par une authentification
          sécurisée. Les paiements sont traités directement par Stripe :
          QueryStaff ne conserve pas les numéros complets de carte bancaire.
        </p>
      </>
    ),
  },
  {
    title: "8. Vos droits",
    content: (
      <>
        <p>
          Conformément au RGPD, vous pouvez demander :
        </p>
        <ul>
          <li>l’accès à vos données personnelles ;</li>
          <li>leur rectification ;</li>
          <li>leur effacement, lorsque la loi le permet ;</li>
          <li>la limitation du traitement ;</li>
          <li>la portabilité de certaines données ;</li>
          <li>l’opposition à certains traitements ;</li>
          <li>le retrait de votre consentement à tout moment.</li>
        </ul>
        <p>
          Vous pouvez exercer vos droits depuis la page Contact en précisant
          « Demande RGPD ». Une preuve d’identité pourra être demandée uniquement
          en cas de doute raisonnable sur votre identité.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la
          Commission nationale de l’informatique et des libertés – CNIL.
        </p>
      </>
    ),
  },
  {
    title: "9. Cookies et traceurs",
    content: (
      <>
        <p>
          QueryStaff peut utiliser des cookies strictement nécessaires au
          fonctionnement du site, notamment pour la sécurité, l’authentification
          et le maintien de la session.
        </p>
        <p>
          Les cookies non indispensables, par exemple publicitaires ou certains
          outils de mesure d’audience, ne doivent être déposés qu’après le
          consentement de l’utilisateur.
        </p>
        <p>
          L’utilisateur doit pouvoir accepter, refuser ou modifier son choix
          aussi facilement.
        </p>
      </>
    ),
  },
  {
    title: "10. Transferts hors de l’Union européenne",
    content: (
      <>
        <p>
          Certains prestataires techniques peuvent traiter des données depuis
          des pays situés en dehors de l’Union européenne. Dans ce cas, les
          transferts doivent être encadrés par les garanties prévues par la
          réglementation applicable, notamment les clauses contractuelles
          types ou une décision d’adéquation.
        </p>
      </>
    ),
  },
  {
    title: "11. Modification de la politique",
    content: (
      <>
        <p>
          Cette politique peut être mise à jour afin de tenir compte des
          évolutions légales, techniques ou fonctionnelles de QueryStaff.
        </p>
        <p>
          <strong>Dernière mise à jour : 14 juillet 2026.</strong>
        </p>
      </>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "125px 24px 70px",
        color: "white",
        background:
          "radial-gradient(circle at top left, #12305a 0%, #07101f 48%, #030712 100%)",
      }}
    >
      <article
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#67e8f9",
            textDecoration: "none",
            fontWeight: 800,
          }}
        >
          ← Retour à l’accueil
        </Link>

        <p
          style={{
            color: "#67e8f9",
            fontWeight: 800,
            marginTop: "35px",
            letterSpacing: "0.05em",
          }}
        >
          PROTECTION DES DONNÉES
        </p>

        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 58px)",
            lineHeight: 1.08,
            margin: "12px 0 20px",
          }}
        >
          Politique de confidentialité et RGPD
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "19px",
            lineHeight: 1.7,
            marginBottom: "42px",
          }}
        >
          QueryStaff accorde une importance particulière à la protection de vos
          données personnelles et à la transparence de leur utilisation.
        </p>

        <div style={{ display: "grid", gap: "20px" }}>
          {sections.map((section) => (
            <section
              key={section.title}
              style={{
                padding: "28px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.16)",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  marginTop: 0,
                  marginBottom: "16px",
                }}
              >
                {section.title}
              </h2>

              <div
                style={{
                  color: "#cbd5e1",
                  fontSize: "17px",
                  lineHeight: 1.7,
                }}
              >
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
