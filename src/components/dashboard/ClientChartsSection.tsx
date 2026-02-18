"use client";

import dynamic from "next/dynamic";
import { DashboardCard } from "@/components/shared/DashboardCard";

const TvlChart = dynamic(() => import("@/components/dashboard/TvlChart").then((mod) => mod.TvlChart), {
  ssr: false,
  loading: () => <div className="h-72 animate-pulse rounded-xl bg-white/5" />,
});

const AssetUtilizationChart = dynamic(
  () => import("@/components/dashboard/AssetUtilization").then((mod) => mod.AssetUtilizationChart),
  {
    ssr: false,
    loading: () => <div className="h-72 animate-pulse rounded-xl bg-white/5" />,
  },
);

export function ClientChartsSection() {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <DashboardCard title="Total USDM TVL by Entity">
        <TvlChart />
      </DashboardCard>

      <DashboardCard title="Asset-Specific Utilization">
        <AssetUtilizationChart />
      </DashboardCard>
    </section>
  );
}
