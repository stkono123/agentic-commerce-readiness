import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const EXCLUDED_PATHS = ["/login", "/api/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (EXCLUDED_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("auth")?.value;

  if (authCookie === "acn-song-2026") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
