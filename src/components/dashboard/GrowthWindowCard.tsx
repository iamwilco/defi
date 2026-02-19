"use client";

import { useMemo, useState } from "react";
import { tvlHistory } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

function toISODate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function GrowthWindowCard() {
  const [since, setSince] = useState(tvlHistory[0]?.date ?? "2026-02-01");
  const [until, setUntil] = useState(tvlHistory[tvlHistory.length - 1]?.date ?? "2026-02-14");

  const summary = useMemo(() => {
    const inRange = tvlHistory.filter((point) => point.date >= since && point.date <= until);

    if (inRange.length === 0) {
      return {
        start: 0,
        end: 0,
        delta: 0,
        txCount: 0,
      };
    }

    const start = inRange[0].total;
    const end = inRange[inRange.length - 1].total;
    const txCount = inRange.reduce((sum, point) => sum + point.transactions, 0);

    return {
      start,
      end,
      delta: end - start,
      txCount,
    };
  }, [since, until]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-xs text-slate-400">
          Since
          <input
            type="date"
            value={since}
            min={tvlHistory[0]?.date}
            max={until}
            onChange={(event) => setSince(event.target.value || toISODate(new Date()))}
            className="mt-1 w-full rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100"
          />
        </label>
        <label className="text-xs text-slate-400">
          Until
          <input
            type="date"
            value={until}
            min={since}
            max={tvlHistory[tvlHistory.length - 1]?.date}
            onChange={(event) => setUntil(event.target.value || toISODate(new Date()))}
            className="mt-1 w-full rounded-md border border-white/15 bg-slate-950 px-3 py-2 text-sm text-slate-100"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Metric title="We Started At" value={formatCurrency(summary.start)} />
        <Metric title="Where We Are Now" value={formatCurrency(summary.end)} />
        <Metric
          title="Now Up By"
          value={`${summary.delta >= 0 ? "+" : ""}${formatCurrency(summary.delta)}`}
          emphasis={summary.delta >= 0 ? "positive" : "negative"}
        />
      </div>

      <p className="text-xs text-slate-400">
        With {summary.txCount.toLocaleString("en-US")} transactions — that&apos;s real activity from users like you.
      </p>
    </div>
  );
}

function Metric({
  title,
  value,
  emphasis = "neutral",
}: {
  title: string;
  value: string;
  emphasis?: "neutral" | "positive" | "negative";
}) {
  const tone = emphasis === "positive" ? "text-emerald-300" : emphasis === "negative" ? "text-red-300" : "text-slate-100";

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
      <p className="text-xs text-slate-400">{title}</p>
      <p className={`mt-1 text-lg font-semibold ${tone}`}>{value}</p>
    </div>
  );
}
