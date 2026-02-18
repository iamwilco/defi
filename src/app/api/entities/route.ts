import { NextResponse } from "next/server";
import { entities } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({ entities });
  } catch {
    return NextResponse.json(
      {
        error: "ENTITIES_FETCH_FAILED",
        message: "Failed to load coalition entities.",
      },
      { status: 500 },
    );
  }
}
