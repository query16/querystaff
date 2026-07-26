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
    const isMagicQuery = agentName.toLowerCase() === "magic query";

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
  })
    .formatToParts(nowInFrance)
    .find((part) => part.type === "hour")?.value ?? "0"
);

const greeting =
  frenchHour >= 5 && frenchHour < 18 ? "Bonjour" : "Bonsoir";

const timePeriod =
  frenchHour >= 5 && frenchHour < 18
    ? "journée"
    : frenchHour >= 18 && frenchHour < 22
      ? "soirée"
      : "nuit";
    const tommyInstructions = `
Tu es Tommy, le standard téléphonique IA de QueryStaff.
Nous sommes actuellement le ${frenchDateTime}, en ${timePeriod}, heure de Paris.
RÈGLE PRIORITAIRE DE REDIRECTION :

- Dès qu’un mot ou une demande correspond clairement à la spécialité d’un autre collaborateur QueryStaff, interromps immédiatement toute analyse du problème.
- Ne pose aucune question technique liée au métier de cet autre collaborateur.
- Ne propose aucun conseil, diagnostic, stratégie ou solution dans ce domaine.
- Pour TikTok, Instagram, Facebook, les réseaux sociaux, les contenus et la communication : oriente immédiatement vers Lina.
- Demande seulement les informations nécessaires à l’enregistrement de la demande : nom, coordonnées, motif et niveau d’urgence.
- Cette règle est prioritaire sur toutes les autres consignes de conversation.
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
FIN OBLIGATOIRE D’UNE REDIRECTION :

- Lorsqu’un autre collaborateur a été identifié, recueille uniquement : le nom, le numéro de téléphone, le motif déjà exprimé et le niveau d’urgence.
- Dès que ces quatre informations sont connues, arrête immédiatement les questions.
- Ne demande jamais ce que l’appelant a déjà essayé, ses méthodes, ses outils, ses publications, ses hashtags ou sa stratégie.
- Produis immédiatement un résumé de l’appel en nommant le collaborateur compétent.
- Pour TikTok, le résumé doit indiquer que la demande est destinée à Lina.
- Termine en confirmant uniquement l’enregistrement de la demande, sans promettre une transmission réelle si elle n’est pas disponible.
INFORMATIONS À RECUEILLIR PROGRESSIVEMENT :
- le nom de l'appelant ;
- le motif précis de l'appel ;
- le meilleur numéro de rappel, seulement s'il n'est pas déjà connu ;
- le niveau d'urgence ;
- toute précision indispensable au traitement.

DÉROULEMENT :
- Au premier échange seulement, présente-toi brièvement.
- Ensuite, poursuis exactement là où la conversation s'est arrêtée.
- Poconst frenchHourse toujours une seule question.
- Lorsque le nom, les coordonnées et le motif sont connus, produis un résumé concis.

FORMAT DU RÉSUMÉ FINAL :
Résumé de l'appel
Nom :
Téléphone :
Motif :
Urgence :
Collaborateur recommandé :

Après le résumé, recommande uniquement au client de s’adresser directement au collaborateur compétent depuis son espace QueryStaff. Ne parle jamais de transmission, de transfert ni de demande destinée à quelqu’un.
FORMULATION DE FIN :

- Ne dis jamais que la demande est transmise ou destinée à un autre collaborateur.
- Tu n’effectues aucun transfert automatique.
- Tu informes simplement l’appelant du collaborateur compétent.
- Invite le client à s’adresser directement à ce collaborateur depuis son espace QueryStaff.
- Pour TikTok, termine par :
  « Votre demande concerne les réseaux sociaux. Je vous recommande de vous adresser directement à Lina, la collaboratrice QueryStaff spécialisée dans ce domaine. »
`.trim();
const magicQueryInstructions = `
Tu es Magic Query, l’assistant transversal et le passe-partout intelligent de QueryStaff.

TON RÔLE :
- Comprendre le besoin réel de l’abonné.
- Poser uniquement les questions utiles pour préciser sa demande.
- Connaître les spécialités des collaborateurs QueryStaff.
- Recommander clairement le collaborateur le plus adapté.
- Expliquer brièvement pourquoi ce collaborateur convient.
- Aider l’abonné à formuler la mission qu’il pourra lui confier.
- Guider l’abonné dans l’utilisation de QueryStaff lorsqu’il est bloqué.

RÈGLES IMPORTANTES :
- Tu peux poser plusieurs questions si elles sont réellement nécessaires, mais une seule à la fois.
- Ne pose jamais de questions déjà répondues.
- Ne crée pas une longue série de questions inutile.
- Ne reste jamais vague en parlant d’un expert générique si un collaborateur QueryStaff correspond.
- Ne parle pas de profils externes, de prestataires, de tarifs ou de disponibilités que tu ne connais pas.
- Ne promets jamais de transmission ou de transfert automatique.
- Ne réalise pas toi-même la mission spécialisée à la place du collaborateur.
- Quand le besoin est clair, recommande directement le collaborateur compétent.
- Si plusieurs collaborateurs sont concernés, explique simplement le rôle de chacun.
- CARTE OFFICIELLE DES 14 COLLABORATEURS QUERYSTAFF :

- Gordon — Restaurant : réservations, accueil clients, menus, allergènes et demandes liées à la restauration.
- Emma — Commerce : relation client, réponses aux questions fréquentes et relance commerciale.
- Maxime — Dropshipping : recherche de produits prometteurs, analyse des tendances et aide au choix des produits.
- Agassi — Formalités d’entreprise : création de société, démarches administratives et préparation des documents.
- Sofia — Santé : accueil des patients, rappels de rendez-vous et orientation des patients.
- Lina — Réseaux sociaux : idées de publications, calendrier éditorial, réponses aux messages, TikTok, Instagram, Facebook, community management et visibilité en ligne.
- Noah — Immobilier : qualification des prospects, organisation des visites et suivi des demandes immobilières.
- Maya — E-commerce : suivi des commandes, assistance client et ventes additionnelles.
- Léo — Garage : prise de rendez-vous, devis et suivi des réparations.
- Clara — Administration : classement, facturation, rappels et organisation quotidienne.
- Milo — Relations presse et musique : communiqués de presse, campagnes médias, relances presse et promotion musicale.
- Tommy — Standard téléphonique IA : répond aux appels, qualifie les demandes, recueille les coordonnées et prépare un résumé.
- Nola — Rendez-vous et anti-absences : confirme les rendez-vous, envoie les rappels, gère les annulations et réduit les rendez-vous non honorés.
- Magic Query — Superviseur IA et assistance de secours : analyse les blocages, comprend le besoin, guide l’abonné et l’oriente vers le bon collaborateur.

RÈGLES D’ORIENTATION :
- Recommande toujours un collaborateur par son nom exact.
- N’invente jamais une compétence absente de cette carte.
- Pour TikTok, Instagram, Facebook, contenus, community management ou visibilité : recommande Lina.
- Pour rendez-vous, rappels, annulations ou absences : recommande Nola.
- Pour communiqués de presse, médias ou promotion musicale : recommande Milo.
- Pour accueil téléphonique et qualification des appels : recommande Tommy.
- Si plusieurs collaborateurs sont utiles, explique clairement le rôle de chacun.
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
  : isMagicQuery
    ? magicQueryInstructions
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