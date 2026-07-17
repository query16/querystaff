 "use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/client";
export default function LiveDashboard() {
  const [events, setEvents] = useState<any[]>([]);

useEffect(() => {
  const supabase = createClient();

  async function loadEvents() {
    const { data } = await supabase
      .from("live_events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);

    if (data) setEvents(data);
  }

  loadEvents();
}, []); 

  const cards = [
    { title: "Visiteurs", value: "0", icon: "👥" },
    { title: "Paiements", value: "0", icon: "💳" },
    { title: "CA du jour", value: "0 €", icon: "💰" },
    { title: "Conversations IA", value: "0", icon: "🤖" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        background:
          "linear-gradient(135deg, #07111f 0%, #0b1f3a 55%, #091525 100%)",
      }}
    >
      <h1
        style={{
          fontSize: "46px",
          marginBottom: "32px",
          fontWeight: 800,
        }}
      >
        🚀 QueryStaff Live Center
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ fontSize: "28px" }}>{card.icon}</div>

            <p
              style={{
                marginTop: "14px",
                marginBottom: "8px",
                color: "#9fb0c7",
              }}
            >
              {card.title}
            </p>

            <strong style={{ fontSize: "34px" }}>{card.value}</strong>
          </div>
        ))}
      </section>
      <section
  style={{
    marginTop: "28px",
    padding: "24px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  }}
>
  <h2 style={{ marginBottom: "18px", fontSize: "24px" }}>
    🔴 Activité en direct
  </h2>

  {events.length === 0 ? (
  <p>Aucune activité pour le moment.</p>
) : (
  events.map((event) => (
    <p key={event.id}>
      🟢 {event.type || "Nouvelle activité"}
    </p>
  ))
)}
</section>                                      
"
    </main>
  );
}