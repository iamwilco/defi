import { NextResponse } from "next/server";
import { guidesCatalog } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({ guides: guidesCatalog });
  } catch {
    return NextResponse.json(
      {
        error: "GUIDES_FETCH_FAILED",
        message: "Failed to load guides catalog.",
      },
      { status: 500 },
    );
  }
}
