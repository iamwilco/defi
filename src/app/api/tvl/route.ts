import { NextResponse } from "next/server";
import { coalitionContributions, totalTVL } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({
      total: totalTVL,
      contributions: coalitionContributions,
    });
  } catch {
    return NextResponse.json(
      {
        error: "TVL_FETCH_FAILED",
        message: "Failed to load TVL data.",
      },
      { status: 500 },
    );
  }
}
