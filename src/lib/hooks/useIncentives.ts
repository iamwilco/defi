"use client";

import { useQuery } from "@tanstack/react-query";
import { getIncentives } from "@/lib/api";
import { REFRESH_INTERVAL_MS } from "@/lib/constants";

export function useIncentives() {
  return useQuery({
    queryKey: ["incentives"],
    queryFn: getIncentives,
    staleTime: REFRESH_INTERVAL_MS,
  });
}
