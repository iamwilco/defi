"use client";

import { useQuery } from "@tanstack/react-query";
import { getCommsFeed } from "@/lib/api";

export function useCommsFeed() {
  return useQuery({
    queryKey: ["comms-feed"],
    queryFn: getCommsFeed,
    staleTime: 5 * 60 * 1000,
  });
}
