 import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

function cleanHistory(value: unknown): ConversationMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is ConversationMessage =>
        Boolean(item) &&
        typeof item === "object" &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string" &&
        item.content.trim().length > 0
    )
    .slice(-20)
    .map((item) => ({
      role: item.role,
      content: item.content.trim().slice(0, 4000),
    }));
}

function extractResponseText(result: any): string {
  if (typeof result?.output_text === "string" && result.output_text.trim()) {
    return result.output_text.trim();
  }

  if (!Array.isArray(result?.output)) {
    return "";
  }

  for (const outputItem of result.output) {
    if (!Array.isArray(outputItem?.content)) {
      continue;
    }

    for (const contentItem of outputItem.content) {
      if (
        typeof contentItem?.text === "string" &&
        contentItem.text.trim()
      ) {
        return contentItem.text.trim();
      }
    }
  }

  return "";
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      return NextResponse.json(
        { error: "Clé OpenAI absente." },
        { status: 500 }
      );
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non connecté." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const missionId =
      typeof body?.missionId === "string" ? body.missionId : "";

    const history = cleanHistory(body?.history);

    if (!missionId) {
      return NextResponse.json(
        { error: "Mission manquante." },
        { status: 400 }
      );
    }

    const { data: mission, error: missionError } = await supabase
      .from("missions")
      .select("*")
      .eq("id", missionId)
      .eq("user_id", user.id)
      .single();

    if (missionError || !mission) {
      return NextResponse.json(
        { error: "Mission introuvable." },
        { status: 404 }
      );
    }

    const { data: collaborator, error: collaboratorError } =
      await supabase
        .from("collaborator_configurations")
        .select("agent, sector, goals, tone, missions")
        .eq("id", mission.collaborator_id)
        .eq("user_id", user.id)
        .single();

    if (collaboratorError || !collaborator) {
      return NextResponse.json(
        { error: "Collaborateur introuvable." },
        { status: 404 }
      );
    }

    const agentName = String(collaborator.agent || "").trim();
    const isTommy = agentName.toLowerCase() === "tommy";

    const generalInstructions = `
Tu es ${agentName}, un collaborateur IA de QueryStaff.

Ton secteur est : ${collaborator.sector}.
Tes objectifs sont : ${collaborator.goals}.
Ton ton est : ${collaborator.tone || "professionnel et naturel"}.
Tes missions prévues sont : ${
      collaborator.missions || "accompagner le client dans ton domaine"
    }.

Reste strictement dans ton domaine professionnel.
Si une demande est hors de ton métier, refuse poliment et recommande le collaborateur QueryStaff adapté.
Réponds en français, clairement et sans inventer d'informations.
`.trim();
const nowInFrance = new Date();

const frenchDateTime = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Europe/Paris",
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
}).format(nowInFrance);

const frenchHour = Number(
  new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    hourCycle: "h23",
  }).format(nowInFrance)
);

const timePeriod =
  frenchHour >= 5 && frenchHour < 18
    ? "journée"
    : frenchHour >= 18 && frenchHour < 23
      ? "soirée"
      : "nuit";
    const tommyInstructions = `
Tu es Tommy, le standard téléphonique IA de QueryStaff.
Nous sommes actuellement le ${frenchDateTime}, en ${timePeriod}, heure de Paris.

Adapte toujours ton accueil et ta formule de fin à l’heure :
- pendant la journée, utilise « Bonjour » et termine par « Bonne journée » ;
- pendant la soirée, utilise « Bonsoir » et termine par « Bonne soirée » ;
- pendant la nuit, utilise « Bonsoir », adopte un ton calme et termine par « Bonne nuit » ;
- ne dis jamais « Bonne journée » pendant la soirée ou la nuit.


Tu simules une vraie conversation téléphonique avec un appelant.

RÈGLES ABSOLUES :
1. Garde en mémoire toutes les informations déjà données dans la conversation.
2. Ne redemande jamais le nom, le numéro ou le motif s'ils ont déjà été fournis.
3. Pose une seule question courte à la fois.
4. Ne recommence pas ta présentation à chaque message.
5. Utilise naturellement le nom de l'appelant lorsqu'il est connu.
6. Ne donne pas une longue liste numérotée de questions.
7. Ne promets jamais un rappel ou un transfert réel s'il n'est pas techniquement confirmé.
8. Dis plutôt que la demande va être enregistrée et transmise à l'équipe.
9. Si l'appelant demande des informations simples sur QueryStaff et que tu les connais grâce au contexte, réponds brièvement.
ORIENTATION VERS LES AUTRES COLLABORATEURS QUERYSTAFF :
- Quand une demande relève clairement d’un autre collaborateur QueryStaff, nomme ce collaborateur et explique brièvement pourquoi il est compétent.
- Pour TikTok, Instagram, Facebook, les réseaux sociaux, la communication, les publications et les contenus, recommande Lina.
- Si le client est abonné à Lina, propose de lui transmettre la demande.
- Si le client n’est pas abonné à Lina, recommande de l’ajouter ou de la découvrir, sans prétendre transmettre automatiquement.
- Ne dis pas seulement « l’équipe QueryStaff » lorsqu’un collaborateur précis est clairement adapté.
- Ne choisis jamais un collaborateur au hasard : base-toi uniquement sur sa spécialité.
10. Quand les informations essentielles sont réunies, ne pose plus de questions inutiles.

INFORMATIONS À RECUEILLIR PROGRESSIVEMENT :
- le nom de l'appelant ;
- le motif précis de l'appel ;
- le meilleur numéro de rappel, seulement s'il n'est pas déjà connu ;
- le niveau d'urgence ;
- toute précision indispensable au traitement.

DÉROULEMENT :
- Au premier échange seulement, présente-toi brièvement.
- Ensuite, poursuis exactement là où la conversation s'est arrêtée.
- Pose toujours une seule question.
- Lorsque le nom, les coordonnées et le motif sont connus, produis un résumé concis.

FORMAT DU RÉSUMÉ FINAL :
Résumé de l'appel
Nom :
Téléphone :
Motif :
Urgence :
Action recommandée :

Après le résumé, termine par une phrase courte confirmant que la demande est enregistrée pour transmission à l'équipe QueryStaff.
`.trim();

    const input = [
      ...history.map((item) => ({
        role: item.role,
        content: item.content,
      })),
      {
        role: "user" as const,
        content: String(mission.content || "").trim(),
      },
    ];

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          instructions: isTommy
            ? tommyInstructions
            : generalInstructions,
          input,
          max_output_tokens: isTommy ? 300 : 800,
        }),
      }
    );

    const openaiResult = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return NextResponse.json(
        {
          error:
            openaiResult?.error?.message ||
            "Erreur pendant le traitement OpenAI.",
        },
        { status: 500 }
      );
    }

    const resultText =
      extractResponseText(openaiResult) ||
      "Réponse indisponible pour le moment.";

    return NextResponse.json({
      success: true,
      mission,
      agent: agentName,
      result: resultText,
    });
  } catch (error) {
    console.error("Erreur route missions :", error);

    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}