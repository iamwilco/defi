"use client";

import { BlogList } from "@/components/blog/BlogList";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { useBlogPosts } from "@/lib/hooks/useBlogPosts";

export function BlogDataSection() {
  const { data, isLoading, isError, refetch } = useBlogPosts();

  if (isLoading) {
    return <LoadingCard label="Loading DeFi Pulse posts..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to load blog posts"
        message="The blog API is currently unavailable. Try again shortly."
        onRetry={() => void refetch()}
      />
    );
  }

  return <BlogList posts={data.posts} />;
}
