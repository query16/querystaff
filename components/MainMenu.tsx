 "use client";

import { useState } from "react";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Collaborateurs IA", href: "/agents" },
  { label: "Comment ça fonctionne", href: "/comment-ca-fonctionne" },
  { label: "Métiers", href: "/#metiers" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Démonstration", href: "/#demonstration" },
  { label: "Contact", href: "/#contact" },
];

export default function MainMenu() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "14px 24px",
        background: "rgba(4, 9, 18, 0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          Query<span style={{ color: "#6ee7f9" }}>Staff</span>
        </a>

        <nav
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#d9e2ef",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/agents"
            style={{
              padding: "12px 18px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22c7e8, #7257f5)",
              color: "white",
              textDecoration: "none",
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            Choisir mon collaborateur IA
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          style={{
            display: "none",
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.07)",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav
          className="mobile-menu"
          style={{
            maxWidth: "1200px",
            margin: "14px auto 0",
            padding: "18px",
            borderRadius: "20px",
            background: "rgba(15, 27, 46, 0.98)",
            border: "1px solid rgba(255,255,255,0.10)",
            display: "grid",
            gap: "14px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
                padding: "8px 4px",
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/agents"
            onClick={() => setOpen(false)}
            style={{
              marginTop: "4px",
              padding: "13px 18px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #22c7e8, #7257f5)",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Choisir mon collaborateur IA
          </a>
        </nav>
      )}
    </header>
  );
}