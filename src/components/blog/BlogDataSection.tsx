"use client";

import { BlogList } from "@/components/blog/BlogList";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { useBlogPosts } from "@/lib/hooks/useBlogPosts";

export function BlogDataSection() {
  const { data, isLoading, isError, refetch } = useBlogPosts();

  if (isLoading) {
    return <LoadingCard label="Loading this month’s coalition stories..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to load blog posts"
        message="Our story feed is taking a quick breather. Try again in a moment."
        onRetry={() => void refetch()}
      />
    );
  }

  return <BlogList posts={data.posts} />;
}
