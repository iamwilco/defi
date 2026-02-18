import { NextResponse } from "next/server";
import { getDataProvider } from "@/lib/providers";
import { withApiHeaders, optionsResponse } from "@/lib/security/http";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function GET(request: Request) {
  const limit = checkRateLimit(request, "api:utilization");
  if (!limit.allowed) {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "RATE_LIMITED",
          message: "Too many utilization requests. Please retry shortly.",
        },
        { status: 429 },
      ),
    );
  }

  try {
    const provider = getDataProvider();
    const payload = await provider.getUtilization();
    return withApiHeaders(NextResponse.json(payload));
  } catch {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "UTILIZATION_FETCH_FAILED",
          message: "Failed to load utilization data.",
        },
        { status: 500 },
      ),
    );
  }
}

export function OPTIONS() {
  return optionsResponse();
}
