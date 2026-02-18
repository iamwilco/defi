import { NextResponse } from "next/server";
import { getDataProvider } from "@/lib/providers";

export async function GET() {
  try {
    const provider = getDataProvider();
    const payload = await provider.getBlogPosts();
    return NextResponse.json(payload);
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
