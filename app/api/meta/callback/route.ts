 import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  const appId = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  const redirectUri = "https://querystaff.com/api/meta/callback";

  if (!code || !appId || !appSecret) {
    return NextResponse.redirect(
      new URL(
        "/espace-client/connexions?meta=erreur",
        requestUrl.origin
      )
    );
  }

  const tokenUrl = new URL(
    "https://graph.facebook.com/v23.0/oauth/access_token"
  );

  tokenUrl.searchParams.set("client_id", appId);
  tokenUrl.searchParams.set("client_secret", appSecret);
  tokenUrl.searchParams.set("redirect_uri", redirectUri);
  tokenUrl.searchParams.set("code", code);

  try {
    const response = await fetch(tokenUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok || !data.access_token) {
      return NextResponse.redirect(
        new URL(
          "/espace-client/connexions?meta=erreur",
          requestUrl.origin
        )
      );
    }

    return NextResponse.redirect(
      new URL(
        "/espace-client/connexions?meta=connecte",
        requestUrl.origin
      )
    );
  } catch {
    return NextResponse.redirect(
      new URL(
        "/espace-client/connexions?meta=erreur",
        requestUrl.origin
      )
    );
  }
}