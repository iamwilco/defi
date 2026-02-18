import { NextResponse } from "next/server";
import { assetUtilization, heatmapCells } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({
      assets: assetUtilization,
      heatmap: heatmapCells,
    });
  } catch {
    return NextResponse.json(
      {
        error: "UTILIZATION_FETCH_FAILED",
        message: "Failed to load utilization data.",
      },
      { status: 500 },
    );
  }
}
