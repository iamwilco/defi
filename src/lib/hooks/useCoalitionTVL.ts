"use client";

import { useQuery } from "@tanstack/react-query";
import { getTVL } from "@/lib/api";
import { QUERY_REFETCH_INTERVAL_MS, REFRESH_INTERVAL_MS } from "@/lib/constants";

export function useCoalitionTVL() {
  return useQuery({
    queryKey: ["tvl"],
    queryFn: getTVL,
    staleTime: REFRESH_INTERVAL_MS,
    refetchInterval: QUERY_REFETCH_INTERVAL_MS,
  });
}
