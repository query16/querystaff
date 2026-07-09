import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
