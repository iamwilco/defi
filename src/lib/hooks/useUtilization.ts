"use client";

import { useQuery } from "@tanstack/react-query";
import { getUtilization } from "@/lib/api";
import { QUERY_REFETCH_INTERVAL_MS, REFRESH_INTERVAL_MS } from "@/lib/constants";

export function useUtilization() {
  return useQuery({
    queryKey: ["utilization"],
    queryFn: getUtilization,
    staleTime: REFRESH_INTERVAL_MS,
    refetchInterval: QUERY_REFETCH_INTERVAL_MS,
  });
}
