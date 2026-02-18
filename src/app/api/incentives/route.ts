import { NextResponse } from "next/server";
import { incentives } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({
      active: incentives.filter((item) => item.active),
      upcoming: incentives.filter((item) => !item.active),
    });
  } catch {
    return NextResponse.json(
      {
        error: "INCENTIVES_FETCH_FAILED",
        message: "Failed to load incentives.",
      },
      { status: 500 },
    );
  }
}
