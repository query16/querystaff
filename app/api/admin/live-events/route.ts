import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function clean(value?: string) {
  return (value ?? "")
    .replace(/[\u0000-\u001F\u007F\u200B-\u200D\uFEFF]/g, "")
    .replace(/^["']|["']$/g, "")
    .trim();
}

function getSupabase() {
  const url = clean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const key = clean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!url || !key) return null;

  return createClient(url, key);
}

export async function GET() {
  const supabase = getSupabase();

  if (!supabase) {
    return NextResponse.json(
      { error: "Variables Supabase manquantes" },
      { status: 500 }
    );
  }

  const { data, error } = await supabase
    .from("live_events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ events: data ?? [] });
}

export async function POST(request: Request) {
  const supabase = getSupabase();

  if (!supabase) {
    return NextResponse.json(
      { error: "Variables Supabase manquantes" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const { error } = await supabase.from("live_events").insert({
    session_id: crypto.randomUUID(),
    event_type: body.type || "Visiteur arrivé",
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
