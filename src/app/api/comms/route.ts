import { NextResponse } from "next/server";
import { commsFeed } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({ items: commsFeed });
  } catch {
    return NextResponse.json(
      {
        error: "COMMS_FETCH_FAILED",
        message: "Failed to load communications feed.",
      },
      { status: 500 },
    );
  }
}
