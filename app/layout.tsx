import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import MainMenu from "../components/MainMenu";
import LiveTracker from "../components/LiveTracker";
export const metadata: Metadata = {
  title: "QueryStaff — Vos collaborateurs IA spécialisés",
  description:
    "Des collaborateurs IA spécialisés pour accompagner les entreprises dans l’administratif, le commerce, la communication et la relation client.",
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
        <LiveTracker />
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
      <GoogleAnalytics gaId="G-8TFXNJZ0BW" />
      <Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xnj7eyney5");
  `}
</Script>
      </body>
    </html>
  );
}