import { Resend } from "resend";


export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  return Response.json(
    { error: "Service e-mail non configuré" },
    { status: 500 }
  );
}

const resend = new Resend(resendApiKey);
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const sector = String(body.sector || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !sector || !message) {
      return Response.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "QueryStaff <onboarding@resend.dev>",
      to: ["querymickael@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande QueryStaff — ${name}`,
      text: `
Nouvelle demande depuis QueryStaff

Nom : ${name}
E-mail : ${email}
Entreprise : ${company || "Non renseignée"}
Secteur : ${sector}

Besoin exprimé :
${message}
      `,
    });

    if (error) {
      console.error ("Erreur Resend :", error);
      return Response.json(
        { error: "L’envoi du message a échoué." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch {
    return Response.json(
      { error: "Une erreur inattendue est survenue." },
      { status: 500 }
    );
  }
}