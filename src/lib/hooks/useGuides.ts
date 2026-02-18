"use client";

import { useQuery } from "@tanstack/react-query";
import { getGuides } from "@/lib/api";

export function useGuides() {
  return useQuery({
    queryKey: ["guides"],
    queryFn: getGuides,
    staleTime: 10 * 60 * 1000,
  });
}
