import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { domainMappings } from "./config/domains";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Find matching domain
  for (const [key, mapping] of Object.entries(domainMappings)) {
    if (host === mapping.domain || host.startsWith(`${mapping.domain}:`)) {
      // Only rewrite the root path to the property page
      // Other paths (like /disclaimer, /assets, etc.) should work as-is
      if (pathname === "/") {
        const url = request.nextUrl.clone();
        url.pathname = mapping.path;
        return NextResponse.rewrite(url);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Only match the root path for domain rewrites
    "/",
  ],
};

