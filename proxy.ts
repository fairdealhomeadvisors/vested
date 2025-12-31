import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { domainMappings } from "./config/domains";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Find matching domain
  for (const [key, mapping] of Object.entries(domainMappings)) {
    if (host === mapping.domain || host.startsWith(`${mapping.domain}:`)) {
      // Skip if already on the correct path
      if (pathname.startsWith(mapping.path)) {
        return NextResponse.next();
      }

      // Rewrite to the property path
      const url = request.nextUrl.clone();
      url.pathname = `${mapping.path}${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};

