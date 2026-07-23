 import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (!code) {
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
}