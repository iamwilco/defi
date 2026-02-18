"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/lib/api";
import { QUERY_REFETCH_INTERVAL_MS, REFRESH_INTERVAL_MS } from "@/lib/constants";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: getBlogPosts,
    staleTime: REFRESH_INTERVAL_MS,
    refetchInterval: QUERY_REFETCH_INTERVAL_MS,
  });
}
