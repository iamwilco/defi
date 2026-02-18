import { NextResponse } from "next/server";
import { getDataProvider } from "@/lib/providers";

export async function GET() {
  try {
    const provider = getDataProvider();
    const payload = await provider.getTVL();
    return NextResponse.json(payload);
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
