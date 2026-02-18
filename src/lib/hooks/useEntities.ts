"use client";

import { useQuery } from "@tanstack/react-query";
import { getEntities } from "@/lib/api";

export function useEntities() {
  return useQuery({
    queryKey: ["entities"],
    queryFn: getEntities,
    staleTime: 10 * 60 * 1000,
  });
}
