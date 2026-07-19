import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getCloudflareContext } from "@opennextjs/cloudflare";
function clean(value?: string) {
  return (value ?? "")
    .replace(/[\u0000-\u001F\u007F\u200B-\u200D\uFEFF]/g, "")
    .replace(/^["']|["']$/g, "")
    .trim();
}

function getSupabase() {
  const rawUrl = clean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const url = rawUrl ? new URL(rawUrl).origin : "";
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
  const { cf } = getCloudflareContext();
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
    page: body.page || null,
browser: body.browser || null,
device: body.device || null,


country: cf?.country || body.country || null,
city: cf?.city || body.city || null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
