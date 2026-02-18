"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/lib/api";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: getBlogPosts,
    staleTime: 5 * 60 * 1000,
  });
}
