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
};

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

  const cards = [
    { title: "Visiteurs", value: String(events.length), icon: "👥" },
    { title: "Paiements", value: "0", icon: "💳" },
    { title: "CA du jour", value: "0 €", icon: "💰" },
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
              {event.event_type} —{" "}
              {event.country && <> • {event.country}</>}
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