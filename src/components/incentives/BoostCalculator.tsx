"use client";

import { useState } from "react";
import type { Incentive } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface BoostCalculatorProps {
  incentives: Incentive[];
}

function parseRate(rateLabel: string) {
  const match = rateLabel.match(/([0-9.]+)/);
  if (!match) {
    return 0;
  }
  return Number(match[1]) / 100;
}

export function BoostCalculator({ incentives }: BoostCalculatorProps) {
  const selectable = incentives.filter((item) => item.active);
  const [position, setPosition] = useState(1000);
  const [daysHeld, setDaysHeld] = useState(14);
  const [selectedId, setSelectedId] = useState(selectable[0]?.id ?? "");

  const selected = selectable.find((item) => item.id === selectedId) ?? selectable[0];

  const bonusRate = selected ? parseRate(selected.rateLabel) : 0;
  const projectedBonus = position * bonusRate * (daysHeld / 365);
  const eligible = daysHeld >= 30;

  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-lg font-semibold text-foreground">Boost Calculator</h2>
      <p className="mt-1 text-sm text-(--text-secondary)">
        Estimate campaign bonus yield and track 30-day eligibility progress.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <label className="text-xs text-(--text-muted)">
          Incentive
          <select
            value={selected?.id ?? ""}
            onChange={(event) => setSelectedId(event.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-(--surface-soft) px-3 py-2 text-sm text-foreground"
          >
            {selectable.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs text-(--text-muted)">
          Position Size (USD)
          <input
            type="number"
            min={0}
            step={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-border bg-(--surface-soft) px-3 py-2 text-sm text-foreground"
          />
        </label>

        <label className="text-xs text-(--text-muted)">
          Hold Duration (Days)
          <input
            type="number"
            min={0}
            max={365}
            value={daysHeld}
            onChange={(event) => setDaysHeld(Number(event.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-border bg-(--surface-soft) px-3 py-2 text-sm text-foreground"
          />
        </label>
      </div>

      <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
        <p className="text-xs uppercase tracking-wide text-emerald-300">Projected Bonus</p>
        <p className="mt-1 text-2xl font-semibold text-emerald-100">{formatCurrency(projectedBonus)}</p>
        <p className="mt-1 text-xs text-emerald-200">Bonus rate: {(bonusRate * 100).toFixed(2)}% APY</p>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-(--surface-soft) p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-(--text-secondary)">
          <span>Eligibility Progress</span>
          <span>{Math.min(daysHeld, 30)} / 30 days</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-(--surface-muted)">
          <div
            className="h-full bg-blue-400 transition-all"
            style={{ width: `${Math.min((daysHeld / 30) * 100, 100)}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-(--text-muted)">
          {eligible ? "Eligible: 30-day threshold reached." : "Not yet eligible: hold at least 30 days."}
        </p>
      </div>
    </section>
  );
}
