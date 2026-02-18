"use client";

import { ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from "recharts";
import type { TimelineMilestone } from "@/types";

interface PhasesInfographicProps {
  milestones: TimelineMilestone[];
}

function calcDuration(startDate: string, endDate: string) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const days = Math.max(Math.round((end - start) / (1000 * 60 * 60 * 24)), 1);
  return Number.isFinite(days) ? days : 1;
}

function calcProgress(startDate: string, endDate: string) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const now = Date.now();

  if (now <= start) {
    return 0;
  }

  if (now >= end) {
    return 100;
  }

  return Math.max(Math.min(((now - start) / (end - start)) * 100, 100), 0);
}

export function PhasesInfographic({ milestones }: PhasesInfographicProps) {
  const data = milestones.map((item) => ({
    label: `Phase ${item.phase}`,
    title: item.title,
    durationDays: calcDuration(item.startDate, item.endDate),
    progress: calcProgress(item.startDate, item.endDate),
    window: item.window,
  }));

  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <h3 className="text-lg font-semibold text-foreground">Phase Infographic</h3>
      <p className="mt-1 text-sm text-(--text-secondary)">Duration-weighted view of campaign stages.</p>
      <div className="mt-4 h-72 w-full" role="img" aria-label="Timeline chart of campaign phase durations">
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
            <XAxis type="number" stroke="#64748b" tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey="label" stroke="#64748b" tick={{ fontSize: 12 }} width={80} />
            <Tooltip
              cursor={{ fill: "rgba(59,130,246,0.15)" }}
              formatter={(value) => [`${value} days`, "Duration"]}
              labelFormatter={(value) => String(value)}
              contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155" }}
            />
            <Bar dataKey="durationDays" fill="#3b82f6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-3 space-y-1 text-xs text-(--text-muted)">
        {data.map((item) => (
          <li key={item.label} className="space-y-1">
            <p>
              {item.label}: {item.title} ({item.window})
            </p>
            <div className="h-1.5 overflow-hidden rounded-full bg-(--surface-muted)">
              <div className="h-full bg-blue-400" style={{ width: `${item.progress}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
