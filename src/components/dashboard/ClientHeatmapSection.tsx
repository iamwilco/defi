"use client";

import dynamic from "next/dynamic";

const UtilizationHeatmap = dynamic(
  () => import("@/components/dashboard/UtilizationHeatmap").then((mod) => mod.UtilizationHeatmap),
  {
    ssr: false,
    loading: () => <div className="h-72 animate-pulse rounded-xl bg-white/5" />,
  },
);

export function ClientHeatmapSection() {
  return <UtilizationHeatmap />;
}
