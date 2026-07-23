 import { NextResponse } from "next/server";
import { createClient as createServerClient } from "../../../../lib/supabase/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  const appId = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const redirectUri = "https://querystaff.com/api/meta/callback";

  if (
    !code ||
    !appId ||
    !appSecret ||
    !supabaseUrl ||
    !serviceRoleKey
  ) {
    return NextResponse.redirect(
      new URL(
        "/espace-client/connexions?meta=erreur",
        requestUrl.origin
      )
    );
  }

  try {
    const supabase = await createServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
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

    const tokenResponse = await fetch(tokenUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      return NextResponse.redirect(
        new URL(
          "/espace-client/connexions?meta=erreur",
          requestUrl.origin
        )
      );
    }

    const profileUrl = new URL(
      "https://graph.facebook.com/v23.0/me"
    );

    profileUrl.searchParams.set("fields", "id,name");
    profileUrl.searchParams.set(
      "access_token",
      tokenData.access_token
    );

    const profileResponse = await fetch(profileUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    const profileData = await profileResponse.json();

    if (!profileResponse.ok || !profileData.id) {
      return NextResponse.redirect(
        new URL(
          "/espace-client/connexions?meta=erreur",
          requestUrl.origin
        )
      );
    }

    const adminSupabase = createAdminClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

    const { error } = await adminSupabase
      .from("social_connections")
      .upsert(
        {
          user_id: user.id,
          provider: "facebook",
          provider_user_id: profileData.id,
          access_token: tokenData.access_token,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,provider",
        }
      );

    if (error) {
        console.error("SUPABASE_INSERT_ERROR", error);
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
  } catch (error) {
  console.error("META_CALLBACK_ERROR", error);
    return NextResponse.redirect(
      new URL(
        "/espace-client/connexions?meta=erreur",
        requestUrl.origin
      )
    );
  }
}