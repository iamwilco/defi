import { NextResponse } from "next/server";
import { incentives } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({
    active: incentives.filter((item) => item.active),
    upcoming: incentives.filter((item) => !item.active),
  });
}
