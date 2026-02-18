import { NextResponse } from "next/server";
import { getDataProvider } from "@/lib/providers";

export async function GET() {
  try {
    const provider = getDataProvider();
    const payload = await provider.getIncentives();
    return NextResponse.json(payload);
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
