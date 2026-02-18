"use client";

import { useMemo, useState } from "react";
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import type { HeatmapCell } from "@/types";
import { useUtilization } from "@/lib/hooks/useUtilization";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";

const METRICS = ["Borrow", "Lend", "Mint", "Trade"] as const;

function colorForIntensity(intensity: number) {
  if (intensity >= 80) return "#2563eb";
  if (intensity >= 60) return "#3b82f6";
  if (intensity >= 40) return "#60a5fa";
  return "#93c5fd";
}

function HeatmapTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: HeatmapCell & { intensity: number } }> }) {
  if (!active || !payload?.length) {
    return null;
  }

  const item = payload[0]?.payload;

  if (!item) {
    return null;
  }

  return (
    <div className="rounded-lg border border-(--border-strong) bg-(--surface) px-3 py-2 text-xs text-(--text-primary) shadow-xl">
      <p className="font-medium">{item.asset}</p>
      <p className="text-(--text-muted)">{item.metric}</p>
      <p className="mt-1 font-semibold">Intensity: {item.intensity}</p>
    </div>
  );
}

export function UtilizationHeatmap() {
  const { data, isLoading, isError, refetch } = useUtilization();
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const heatmap = useMemo(() => data?.heatmap ?? [], [data?.heatmap]);

  const allAssets = useMemo(() => Array.from(new Set(heatmap.map((cell) => cell.asset))), [heatmap]);

  const activeAssets = selectedAssets.length ? selectedAssets : allAssets;

  const filtered = useMemo(
    () => heatmap.filter((cell) => activeAssets.includes(cell.asset)),
    [activeAssets, heatmap],
  );

  const points = useMemo(
    () =>
      filtered.map((cell) => ({
        ...cell,
        x: METRICS.indexOf(cell.metric as (typeof METRICS)[number]) + 1,
        y: activeAssets.indexOf(cell.asset) + 1,
      })),
    [activeAssets, filtered],
  );

  if (isLoading) {
    return <LoadingCard label="Loading heatmap..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to render utilization heatmap"
        message="Try again to reload utilization metrics."
        onRetry={() => void refetch()}
      />
    );
  }

  const toggleAsset = (asset: string) => {
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((item) => item !== asset) : [...prev, asset],
    );
  };

  return (
    <section className="space-y-4" aria-label="Utilization heatmap by asset and metric">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedAssets([])}
          aria-pressed={selectedAssets.length === 0}
          className="rounded-md border border-border bg-(--surface-soft) px-3 py-1 text-xs text-(--text-secondary)"
        >
          All Assets
        </button>
        {allAssets.map((asset) => {
          const isActive = activeAssets.includes(asset);
          return (
            <button
              key={asset}
              type="button"
              onClick={() => toggleAsset(asset)}
              aria-pressed={isActive}
              className={`rounded-md border px-3 py-1 text-xs transition ${
                isActive
                  ? "border-blue-400/60 bg-blue-500/20 text-blue-100"
                  : "border-border bg-(--surface-soft) text-(--text-secondary)"
              }`}
            >
              {asset}
            </button>
          );
        })}
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
            <XAxis
              type="number"
              dataKey="x"
              ticks={METRICS.map((_, index) => index + 1)}
              domain={[0.5, METRICS.length + 0.5]}
              tickFormatter={(value) => METRICS[value - 1] ?? ""}
              stroke="#64748b"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              type="number"
              dataKey="y"
              ticks={activeAssets.map((_, index) => index + 1)}
              domain={[0.5, activeAssets.length + 0.5]}
              tickFormatter={(value) => activeAssets[value - 1] ?? ""}
              stroke="#64748b"
              tick={{ fontSize: 12 }}
              width={80}
            />
            <Tooltip cursor={false} content={<HeatmapTooltip />} />
            <Scatter
              data={points}
              shape={({ cx, cy, payload }) => (
                <rect
                  x={(cx ?? 0) - 18}
                  y={(cy ?? 0) - 16}
                  width={36}
                  height={32}
                  rx={6}
                  fill={colorForIntensity(payload.intensity)}
                  fillOpacity={0.9}
                  stroke="#0f172a"
                />
              )}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-3 text-xs text-(--text-muted)">
        <span className="font-medium text-(--text-secondary)">Intensity</span>
        {[25, 45, 65, 85].map((value) => (
          <span key={value} className="flex items-center gap-1">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: colorForIntensity(value) }}
              aria-hidden="true"
            />
            {value}+
          </span>
        ))}
      </div>
    </section>
  );
}
