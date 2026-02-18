import { NextResponse } from "next/server";
import { getContentBlogPostBySlug } from "@/lib/content/blog";
import { withApiHeaders, optionsResponse } from "@/lib/security/http";
import { checkRateLimit } from "@/lib/security/rateLimit";

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const limit = checkRateLimit(request, "api:blog-slug");
  if (!limit.allowed) {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "RATE_LIMITED",
          message: "Too many blog detail requests. Please retry shortly.",
        },
        { status: 429 },
      ),
    );
  }

  try {
    const { slug } = await params;
    const post = await getContentBlogPostBySlug(slug);

    if (!post) {
      return withApiHeaders(
        NextResponse.json(
          {
            error: "BLOG_POST_NOT_FOUND",
            message: "The requested blog post was not found.",
          },
          { status: 404 },
        ),
      );
    }

    return withApiHeaders(NextResponse.json(post));
  } catch {
    return withApiHeaders(
      NextResponse.json(
        {
          error: "BLOG_POST_FETCH_FAILED",
          message: "Failed to load blog post.",
        },
        { status: 500 },
      ),
    );
  }
}

export function OPTIONS() {
  return optionsResponse();
}
