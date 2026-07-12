 "use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          sector: formData.get("sector"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(
          result.error || "L’envoi a échoué. Merci de réessayer."
        );
        return;
      }

      form.reset();
      setSent(true);
    } catch {
      setErrorMessage(
        "Impossible de contacter le serveur. Merci de réessayer."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      style={{
        marginTop: "70px",
        padding: "36px",
        borderRadius: "28px",
        background:
          "linear-gradient(135deg, rgba(34,199,232,0.13), rgba(114,87,245,0.13))",
        border: "1px solid rgba(255,255,255,0.14)",
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
        Contact
      </p>

      <h2
        style={{
          fontSize: "38px",
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        Demandez votre démonstration personnalisée
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 30px",
          color: "#c3cede",
          lineHeight: 1.7,
          textAlign: "center",
        }}
      >
        Présentez-nous votre activité et vos besoins. Nous vous aiderons à
        choisir le collaborateur QueryStaff le plus adapté.
      </p>

      {sent ? (
        <div
          style={{
            padding: "28px",
            borderRadius: "20px",
            background: "rgba(110,231,249,0.12)",
            border: "1px solid rgba(110,231,249,0.28)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px" }}>✅</div>

          <h3 style={{ fontSize: "26px", marginBottom: "8px" }}>
            Votre demande a bien été envoyée
          </h3>

          <p style={{ color: "#c3cede", lineHeight: 1.7 }}>
            Merci. Nous vous répondrons dès que possible.
          </p>

          <button
            type="button"
            onClick={() => setSent(false)}
            style={{
              marginTop: "12px",
              padding: "12px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Envoyer une autre demande
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "8px" }}>
                Nom et prénom
              </label>

              <input
                required
                type="text"
                name="name"
                placeholder="Votre nom"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px" }}>
                Adresse e-mail
              </label>

              <input
                required
                type="email"
                name="email"
                placeholder="vous@entreprise.fr"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px" }}>
                Entreprise
              </label>

              <input
                type="text"
                name="company"
                placeholder="Nom de votre entreprise"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px" }}>
                Secteur d’activité
              </label>

              <select required name="sector" style={inputStyle}>
                <option value="">Choisissez un secteur</option>
                <option value="restaurant">Restauration</option>
                <option value="commerce">Commerce</option>
                <option value="immobilier">Immobilier</option>
                <option value="sante">Santé</option>
                <option value="garage">Garage</option>
                <option value="administratif">Administratif</option>
                <option value="autre">Autre activité</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "18px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              De quoi avez-vous besoin ?
            </label>

            <textarea
              required
              name="message"
              rows={6}
              placeholder="Expliquez les missions que vous souhaitez automatiser..."
              style={{
                ...inputStyle,
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />
          </div>

          <label
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              marginTop: "18px",
              color: "#c3cede",
              lineHeight: 1.5,
            }}
          >
            <input required type="checkbox" style={{ marginTop: "4px" }} />
            J’accepte d’être contacté au sujet de ma demande.
          </label>

          {errorMessage && (
            <p
              style={{
                marginTop: "18px",
                padding: "12px",
                borderRadius: "12px",
                background: "rgba(255,80,80,0.12)",
                color: "#ffb4b4",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            style={{
              width: "100%",
              marginTop: "24px",
              padding: "16px 24px",
              border: 0,
              borderRadius: "999px",
              background: sending
                ? "rgba(255,255,255,0.15)"
                : "linear-gradient(135deg, #22c7e8, #7257f5)",
              color: "white",
              fontSize: "17px",
              fontWeight: 800,
              cursor: sending ? "wait" : "pointer",
            }}
          >
            {sending
              ? "Envoi en cours..."
              : "Demander ma démonstration"}
          </button>
        </form>
      )}
    </div>
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