import { NextResponse } from "next/server";
import { entities } from "@/lib/mockData";
import { withApiHeaders, optionsResponse } from "@/lib/security/http";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function GET(request: Request) {
  const limit = checkRateLimit(request, "api:entities");
  if (!limit.allowed) {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "RATE_LIMITED",
          message: "Too many entities requests. Please retry shortly.",
        },
        { status: 429 },
      ),
    );
  }

  try {
    return withApiHeaders(NextResponse.json({ entities }));
  } catch {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "ENTITIES_FETCH_FAILED",
          message: "Failed to load coalition entities.",
        },
        { status: 500 },
      ),
    );
  }
}

export function OPTIONS() {
  return optionsResponse();
}
