import "./globals.css";
import type { Metadata } from "next";
import MainMenu from "../components/MainMenu";
export const metadata: Metadata = {
  title: "QueryStaff — AI Employee Recruitment",
  description: "The first international AI employee recruitment platform."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
        <body>
        <MainMenu />
        {children}

        <footer
          style={{
            width: "100%",
            padding: "24px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            background: "#030712",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          <span>© 2026 QueryStaff — </span>
          <a
            href="/politique-confidentialite"
            style={{
              color: "#67e8f9",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Politique de confidentialité & RGPD
          </a>

          <span style={{ opacity: 0.5 }}>•</span>

          <a
            href="/mentions-legales"
            style={{
              color: "#67e8f9",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Mentions légales
          </a>
        </footer>
      </body>
    </html>
  );
}