"use client";

import { useMemo, useState } from "react";
import { timeline } from "@/lib/mockData";

export function DeFiPulseTimeline() {
  const [since, setSince] = useState("2026-02-01");
  const [until, setUntil] = useState("2026-12-31");

  const filteredTimeline = useMemo(() => {
    return timeline.filter((item) => item.endDate >= since && item.startDate <= until);
  }, [since, until]);

  return (
    <section className="space-y-4">
      <div className="grid gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4 sm:grid-cols-2">
        <label className="text-xs text-slate-400">
          Since
          <input
            type="date"
            value={since}
            onChange={(event) => setSince(event.target.value)}
            className="mt-1 w-full rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100"
          />
        </label>
        <label className="text-xs text-slate-400">
          Until
          <input
            type="date"
            value={until}
            onChange={(event) => setUntil(event.target.value)}
            className="mt-1 w-full rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100"
          />
        </label>
      </div>

      <ol className="space-y-4">
        {filteredTimeline.map((item) => (
          <li key={item.phase} className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-widest text-amber-300">{item.window}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-100">
              Phase {item.phase}: {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            <p className="mt-2 text-xs text-slate-400">
              {item.startDate} to {item.endDate}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
