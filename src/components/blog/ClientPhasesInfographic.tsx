"use client";

import dynamic from "next/dynamic";
import type { TimelineMilestone } from "@/types";

const PhasesInfographic = dynamic(
  () => import("@/components/blog/PhasesInfographic").then((mod) => mod.PhasesInfographic),
  {
    ssr: false,
    loading: () => <div className="h-72 animate-pulse rounded-xl bg-slate-800" />,
  },
);

export function ClientPhasesInfographic({ milestones }: { milestones: TimelineMilestone[] }) {
  return <PhasesInfographic milestones={milestones} />;
}
