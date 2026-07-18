 import { NextResponse } from "next/server";

function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
 const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

const key =
  rawKey.match(/sb_secret_[A-Za-z0-9._-]+/)?.[0] ??
  rawKey.match(/eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/)?.[0] ??
  "";
  
  return { url, key };
}

export async function GET() {
  const { url, key } = getConfig();

 if (!url || !key) {
  return NextResponse.json(
    {
      error: "Variables Supabase manquantes",
      urlPresent: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      rawKeyPresent: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      extractedKeyPresent: !!key,
    },
    { status: 500 }
  );
}
  

  try {
    const response = await fetch(
      `${url}/rest/v1/live_events?select=*&order=created_at.desc&limit=20`,
      {
        headers: {
          apikey: key,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json({ events: data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const { url, key } = getConfig();

  if (!url || !key) {
    return NextResponse.json(
      { error: "Variables Supabase manquantes" },
      { status: 500 }
    );
  }

  const body = await request.json();

  try {
    const response = await fetch(`${url}/rest/v1/live_events`, {
      method: "POST",
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        session_id: crypto.randomUUID(),
        event_type: body.type || "Visiteur arrivé",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}