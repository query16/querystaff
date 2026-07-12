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
      </body>
    </html>
  );
}