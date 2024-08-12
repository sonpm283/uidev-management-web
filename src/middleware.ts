import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/me", "/dashboard"];
const authPaths = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("accessToken")?.value;

  const { pathname } = request.nextUrl;

  // Is Not LoggedIn
  if (privatePaths.some((path) => pathname.startsWith(path) && !sessionToken)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Is LoggedIn
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/me", "/dashboard", "/login", "/register"],
};
