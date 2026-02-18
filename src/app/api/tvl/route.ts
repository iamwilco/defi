import { NextResponse } from "next/server";
import { coalitionContributions, totalTVL } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({
    total: totalTVL,
    contributions: coalitionContributions,
  });
}
