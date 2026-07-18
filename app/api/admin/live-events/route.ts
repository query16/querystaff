 import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    test: "API OK",
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
  });
}