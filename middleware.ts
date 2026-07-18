import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization");

  const user = process.env.ADMIN_USER ?? "";
  const password = process.env.ADMIN_PASSWORD ?? "";

  const expected =
    "Basic " + btoa(`${user}:${password}`);

  if (auth !== expected) {
    return new NextResponse("Accès protégé", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="QueryStaff Admin"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/live/:path*"],
};
