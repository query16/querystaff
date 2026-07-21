 "use client";

import { useEffect, useState } from "react";

type LiveEvent = {
  id: number;
  event_type: string;
  created_at: string;
  page?: string | null;
  browser?: string | null;
  device?: string | null;
  country?: string | null;
  city?: string | null;
  amount_cents?: number | null;
  agent?: string | null;
  customer_email?: string | null;
  customer_name?: string | null;
};
function countryToFlag(country?: string | null) {
  if (!country || country.length !== 2) return "";

  return country
    .toUpperCase()
    .split("")
    .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
    .join("");
}

export default function LiveDashboard() {
  const [events, setEvents] = useState<LiveEvent[]>([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await fetch("/api/admin/live-events", {
        cache: "no-store",
      });

      const result = await response.json();

      if (response.ok) {
        setEvents(result.events ?? []);
      }
    }

    loadEvents();

    const interval = setInterval(loadEvents, 3000);

    return () => clearInterval(interval);
  }, []);
const todayKey = new Date().toLocaleDateString("en-CA");

const todayEvents = events.filter(
  (event) =>
    new Date(event.created_at).toLocaleDateString("en-CA") === todayKey
);

const paymentEvents = todayEvents.filter(
  (event) => event.event_type === "Paiement validé"
);

const paymentsCount = paymentEvents.length;

const revenueToday = paymentEvents.reduce(
  (total, event) => total + Number(event.amount_cents || 0) / 100,
  0
);
  const cards = [
  { title: "Visiteurs", value: String(todayEvents.length), icon: "👥" },
    
   { title: "Paiements validés", value: String(paymentsCount), icon: "💳" },
{ title: "CA du jour", value: `${revenueToday.toFixed(2)} €`, icon: "💰" },
    { title: "Conversations IA", value: "0", icon: "🤖" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 40px 60px",
        color: "white",
        background:
          "linear-gradient(135deg, #07111f 0%, #0b2038 50%, #081625 100%)",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "30px" }}>
        🚀 QueryStaff Live Center
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              padding: "28px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ fontSize: "26px" }}>{card.icon}</div>
            <div style={{ marginTop: "14px", opacity: 0.75 }}>
              {card.title}
            </div>
            <div style={{ fontSize: "30px", fontWeight: 700 }}>
              {card.value}
            </div>
          </div>
        ))}
      </section>

      <section
        style={{
          padding: "28px",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>🔴 Activité en direct</h2>

        {events.length === 0 ? (
          <p>Aucune activité pour le moment.</p>
        ) : (
          events.map((event) => (
            <p key={event.id}>
              {event.event_type}
{event.event_type === "Paiement validé" ? (
  <>
 {event.agent && <> — {event.agent}</>} 
  {event.customer_name && <> • {event.customer_name}</>}
    {event.customer_email && <> • {event.customer_email}</>}
     {typeof event.amount_cents === "number" && ( 
 
      <> — {(event.amount_cents / 100).toFixed(2).replace(".", ",")} €</>
    )}
  </>
) : (
  <> — </>
)}
              {event.country && <> • {countryToFlag(event.country)} {event.country}</>}
              {event.city && <> • {event.city}</>}
            {event.page && <> • {event.page}</>}
{event.device && <> • {event.device}</>}
{event.browser && <> • {event.browser}</>}  
{" — "}{new Date(event.created_at).toLocaleTimeString("fr-FR")}
            </p>
          ))
        )}
      </section>
    </main>
  );
}