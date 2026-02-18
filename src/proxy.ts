import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { maybeRequireAdminBasicAuth } from "@/lib/security/guards";

export function proxy(request: NextRequest) {
  const guardResponse = maybeRequireAdminBasicAuth(request);
  if (guardResponse) {
    return guardResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
