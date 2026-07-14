import Link from "next/link";

export default function MentionsLegalesPage() {
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
          maxWidth: "900px",
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
            marginTop: "35px",
            color: "#67e8f9",
            fontWeight: 800,
          }}
        >
          INFORMATIONS JURIDIQUES
        </p>

        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 58px)",
            margin: "12px 0 35px",
          }}
        >
          Mentions légales
        </h1>

        <div style={{ display: "grid", gap: "20px" }}>
          <Section title="Éditeur du site">
            <p>
              QueryStaff est un service numérique exploité par{" "}
              <strong>SAS KECHMARA</strong>.
            </p>
          </Section>

          <Section title="Identification de la société">
            <p>
              <strong>SAS KECHMARA</strong>
              <br />
              SIREN : 930 869 557
              <br />
              SIRET : 930 869 557 00015
            </p>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              Siège social : 6 rue de l’Arsenal, 16000 Angoulême, France.
            </p>
          </Section>

          <Section title="Directeur de la publication">
            <p>
              M. <strong>Query Mickael</strong>, représentant légal de SAS
              KECHMARA.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              E-mail :{" "}
              <a
                href="mailto:contact@querystaff.com"
                style={{ color: "#67e8f9" }}
              >
                contact@querystaff.com
              </a>
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              Le site est hébergé par <strong>Cloudflare, Inc.</strong>
              <br />
              101 Townsend Street, San Francisco, California 94107,
              États-Unis.
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              Les textes, éléments graphiques, interfaces, marques,
              fonctionnalités et contenus présents sur QueryStaff sont
              protégés. Toute reproduction ou utilisation non autorisée est
              interdite.
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>
              QueryStaff met en œuvre les moyens raisonnables afin d’assurer
              l’exactitude et la disponibilité du service. L’éditeur ne peut
              toutefois garantir l’absence totale d’erreurs, d’interruptions ou
              d’indisponibilités temporaires.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>
              Les informations relatives au traitement des données personnelles
              sont disponibles dans la{" "}
              <Link
                href="/politique-confidentialite"
                style={{ color: "#67e8f9" }}
              >
                Politique de confidentialité et RGPD
              </Link>
              .
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: "28px",
        borderRadius: "22px",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.06)",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "24px" }}>{title}</h2>
      <div
        style={{
          color: "#cbd5e1",
          fontSize: "17px",
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </section>
  );
}
