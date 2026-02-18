import { NextResponse } from "next/server";
import { assetUtilization, heatmapCells } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({
    assets: assetUtilization,
    heatmap: heatmapCells,
  });
}
