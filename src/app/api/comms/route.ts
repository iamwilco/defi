import { NextResponse } from "next/server";
import { commsFeed } from "@/lib/mockData";
import { withApiHeaders, optionsResponse } from "@/lib/security/http";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function GET(request: Request) {
  const limit = checkRateLimit(request, "api:comms");
  if (!limit.allowed) {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "RATE_LIMITED",
          message: "Too many communications requests. Please retry shortly.",
        },
        { status: 429 },
      ),
    );
  }

  try {
    return withApiHeaders(NextResponse.json({ items: commsFeed }));
  } catch {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "COMMS_FETCH_FAILED",
          message: "Failed to load communications feed.",
        },
        { status: 500 },
      ),
    );
  }
}

export function OPTIONS() {
  return optionsResponse();
}
