"use client";

import { useMemo, useState } from "react";
import type { Incentive } from "@/types";
import { IncentiveCard } from "@/components/incentives/IncentiveCard";

export function IncentivesGrid({ incentives }: { incentives: Incentive[] }) {
  const [status, setStatus] = useState<"all" | "active" | "upcoming">("all");

  const filtered = useMemo(() => {
    if (status === "all") {
      return incentives;
    }
    if (status === "active") {
      return incentives.filter((item) => item.active);
    }
    return incentives.filter((item) => !item.active);
  }, [incentives, status]);

  return (
    <section className="space-y-4">
      <div className="flex gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-3">
        {(["all", "active", "upcoming"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setStatus(value)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
              status === value
                ? "bg-amber-500/20 text-amber-200"
                : "border border-white/15 bg-slate-900 text-slate-300"
            }`}
          >
            {value === "all" ? "All" : value === "active" ? "Active" : "Upcoming"}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((incentive) => (
          <IncentiveCard key={incentive.id} incentive={incentive} />
        ))}
      </div>
    </section>
  );
}
