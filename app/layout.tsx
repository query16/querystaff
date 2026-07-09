export const metadata = {
  title: "QueryStaff",
  description: "The first international AI employee recruitment platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          background: "#0b1020",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
