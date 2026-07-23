 import { NextResponse } from "next/server";

export async function GET() {
  const appId = process.env.META_APP_ID;

  if (!appId) {
    return NextResponse.json(
      { error: "META_APP_ID manquant" },
      { status: 500 }
    );
  }

  const redirectUri = "https://querystaff.com/api/meta/callback";

  const facebookUrl = new URL(
    "https://www.facebook.com/v23.0/dialog/oauth"
  );

  facebookUrl.searchParams.set("client_id", appId);
  facebookUrl.searchParams.set("redirect_uri", redirectUri);
  facebookUrl.searchParams.set("response_type", "code");
  facebookUrl.searchParams.set("scope", "public_profile");

  return NextResponse.redirect(facebookUrl);
}