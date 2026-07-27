 "use client";

import { useState } from "react";

export default function EconomyCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(25);
  const queryStaffCost = 39;
const monthlyHours = Math.round(hoursPerWeek * 4.33);
const timeValue = Math.round(monthlyHours * hourlyCost);

  const monthlyHumanCost = Math.round(hoursPerWeek * 4.33 * hourlyCost);
  
  const monthlySavings = Math.max(monthlyHumanCost - queryStaffCost, 0);
  const annualSavings = monthlySavings * 12;

  return (
    <div
      className="economy-calculator-card"
      style={{
        marginTop: "70px",
        padding: "36px",
        borderRadius: "28px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        textAlign: "left",
      }}
    >
      <p
        style={{
          color: "#6ee7f9",
          fontWeight: 800,
          letterSpacing: "1px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Calculateur d’économies
      </p>

      <h2
        style={{
          fontSize: "38px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Estimez vos économies avec QueryStaff
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: 800,
            }}
          >
            Heures de travail par semaine
          </label>

          <input
            type="number"
            min="1"
            value={hoursPerWeek}
            onChange={(event) =>
              setHoursPerWeek(Number(event.target.value) || 0)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "17px",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: 800,
            }}
          >
            Coût horaire estimé
          </label>

          <input
            type="number"
            min="1"
            value={hourlyCost}
            onChange={(event) =>
              setHourlyCost(Number(event.target.value) || 0)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "17px",
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "18px",
        }}
      >
        <div
          style={{
            padding: "22px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <p style={{ color: "#c3cede", margin: 0 }}>
            Coût mensuel estimé
          </p>
          <strong style={{ fontSize: "28px" }}>
            {timeValue}  €
          </strong>
        </div>

        <div
          style={{
            padding: "22px",
            borderRadius: "18px",
            background: "rgba(110,231,249,0.10)",
          }}
        >
          <p style={{ color: "#c3cede", margin: 0 }}>
            Économie mensuelle
          </p>
          <strong style={{ fontSize: "28px", color: "#6ee7f9" }}>
            {monthlySavings} €
          </strong>
        </div>

        <div
          style={{
            padding: "22px",
            borderRadius: "18px",
            background: "rgba(114,87,245,0.12)",
          }}
        >
          <p style={{ color: "#c3cede", margin: 0 }}>
            Économie annuelle
          </p>
          <strong style={{ fontSize: "28px" }}>
            {Math.max((timeValue - queryStaffCost) * 12, 0)} €
          </strong>
        </div>
      </div>

      <p
        style={{
          marginTop: "20px",
          color: "#9fb0c4",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Estimation indicative basée sur un abonnement QueryStaff à 49 €/mois.
      </p>
    </div>
  );
}