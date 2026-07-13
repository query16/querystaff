                            




                             

 "use client";

import { FormEvent , Suspense } from"react";
import { useSearchParams } from "next/navigation";
const agents = {
  gordon: {
    name: "Gordon",
    role: "Restauration",
    price: "39 € / mois",
  },
  emma: {
    name: "Emma",
    role: "Commerce",
    price: "39 € / mois",
  },
  maxime: {
    name: "Maxime",
    role: "Dropshipping",
    price: "59 € / mois",
  },
  agassi: {
    name: "Agassi",
    role: "Formalités d’entreprise",
    price: "59 € / mois",
  },
};

function CommandeContent(){
  const searchParams = useSearchParams();
  const agentKey = searchParams.get("agent") || "gordon";
  const agent = agents[agentKey as keyof typeof agents] || agents.gordon;
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  window.location.href = `/api/checkout?agent=${agentKey}`;
}
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 30px",
        background:
          "radial-gradient(circle at top left, #12335e 0%, #07111f 45%, #040912 100%)",
        color: "white",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a
          href="/agents"
          style={{
            color: "#6ee7f9",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          ← Retour aux collaborateurs
        </a>

        <div
          style={{
            marginTop: "30px",
            padding: "34px",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            style={{
              color: "#6ee7f9",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Configuration de votre collaborateur
          </p>

          <h1 style={{ fontSize: "46px", marginBottom: "8px" }}>
            Choisir {agent.name}
          </h1>

          <p style={{ color: "#c3cede", fontSize: "18px" }}>
            {agent.role} — {agent.price}
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "18px",
              }}
            >
              <input
  required
  name="name"
  placeholder="Nom et prénom"
  style={inputStyle}
/>

<input
  required
  name="email"
  type="email"
  placeholder="E-mail"
  style={inputStyle}
/>

<input
  name="company"
  placeholder="Entreprise"
  style={inputStyle}
/>

<input
  name="phone"
  placeholder="Téléphone"
  style={inputStyle}
/>
            </div>

            <textarea
              required
              rows={6}
              placeholder="Décrivez les missions que vous souhaitez confier à votre collaborateur..."
              style={{
                ...inputStyle,
                marginTop: "18px",
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: "24px",
                padding: "16px 24px",
                border: 0,
                borderRadius: "999px",
                background: "linear-gradient(135deg, #22c7e8, #7257f5)",
                color: "white",
                fontSize: "17px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Continuer vers le paiement sécurisé
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "16px",
};                            

export default function CommandePage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <CommandeContent />
    </Suspense>
  );
}