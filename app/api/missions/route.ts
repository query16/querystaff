 import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function POST(request: Request) {
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
  const missionId = body.missionId;

  if (!missionId) {
    return NextResponse.json(
      { error: "Mission manquante." },
      { status: 400 }
    );
  }

  const { data: mission, error } = await supabase
    .from("missions")
    .select("*")
    .eq("id", missionId)
    .eq("user_id", user.id)
    .single();

  if (error || !mission) {
    return NextResponse.json(
      { error: "Mission introuvable." },
      { status: 404 }
    );
  }const { data: collaborator, error: collaboratorError } = await supabase
  .from("collaborator_configurations")
  .select("agent, sector, goals")
  .eq("id", mission.collaborator_id)
  .eq("user_id", user.id)
  .single();

if (collaboratorError || !collaborator) {
  return NextResponse.json(
    { error: "Collaborateur introuvable." },
    { status: 404 }
  );
}
const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${openaiApiKey}`,
  },
  body: JSON.stringify({
    model: "gpt-4.1-mini",
    input:mission.content,
  }),
});

const openaiResult = await openaiResponse.json();

if (!openaiResponse.ok) {
  return NextResponse.json(
    { error: openaiResult?.error?.message || "Erreur OpenAI." },
    { status: 500 }
  );
}

const resultText =
  openaiResult.output?.[0]?.content?.[0]?.text ||
  "Réponse indisponible.";
  return NextResponse.json({
    success: true,
    mission,
    result: resultText,
  });
}