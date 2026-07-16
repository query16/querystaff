import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Vous devez être connecté." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const company = String(body.company ?? "").trim();
    const sector = String(body.sector ?? "").trim();
    const agent = String(body.agent ?? "").trim();
    const goals = String(body.goals ?? "").trim();
    const tone = String(body.tone ?? "").trim();
    const missions = String(body.missions ?? "").trim();

    if (!company || !sector || !agent || !goals) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("collaborator_configurations")
      .insert({
        user_id: user.id,
        company,
        sector,
        agent,
        goals,
        tone: tone || null,
        missions: missions || null,
      });

    if (error) {
      console.error("Erreur Supabase :", error);
      return NextResponse.json(
        { error: "Impossible d’enregistrer la configuration." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur configuration :", error);

    return NextResponse.json(
      { error: "Une erreur inattendue est survenue." },
      { status: 500 }
    );
  }
}
