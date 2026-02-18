import { NextResponse } from "next/server";
import { guidesCatalog } from "@/lib/mockData";
import { withApiHeaders, optionsResponse } from "@/lib/security/http";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function GET(request: Request) {
  const limit = checkRateLimit(request, "api:guides");
  if (!limit.allowed) {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "RATE_LIMITED",
          message: "Too many guide requests. Please retry shortly.",
        },
        { status: 429 },
      ),
    );
  }

  try {
    return withApiHeaders(NextResponse.json({ guides: guidesCatalog }));
  } catch {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "GUIDES_FETCH_FAILED",
          message: "Failed to load guides catalog.",
        },
        { status: 500 },
      ),
    );
  }
}

export function OPTIONS() {
  return optionsResponse();
}
