import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ posts: blogPosts });
}
