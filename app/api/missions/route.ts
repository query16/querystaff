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
  }

  return NextResponse.json({
    success: true,
    mission,
  });
}