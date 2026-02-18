import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/mockData";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
      return NextResponse.json(
        {
          error: "BLOG_POST_NOT_FOUND",
          message: "The requested blog post was not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(post);
  } catch {
    return NextResponse.json(
      {
        error: "BLOG_POST_FETCH_FAILED",
        message: "Failed to load blog post.",
      },
      { status: 500 },
    );
  }
}
