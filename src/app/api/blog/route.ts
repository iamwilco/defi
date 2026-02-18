import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/mockData";

export async function GET() {
  try {
    return NextResponse.json({ posts: blogPosts });
  } catch {
    return NextResponse.json(
      {
        error: "BLOG_FETCH_FAILED",
        message: "Failed to load blog posts.",
      },
      { status: 500 },
    );
  }
}
