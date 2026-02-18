"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { assetUtilization } from "@/lib/mockData";
import { formatPercent } from "@/lib/utils";

const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#22d3ee"];

export function AssetUtilizationChart() {
  return (
    <div className="w-full" role="img" aria-label="Donut chart showing utilized amounts by asset">
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={assetUtilization} dataKey="utilized" nameKey="asset" outerRadius={90} label>
              {assetUtilization.map((entry, index) => (
                <Cell key={entry.asset} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) =>
                typeof value === "number" ? value.toLocaleString("en-US") : String(value ?? "")
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-3 space-y-1.5 text-xs text-(--text-secondary)">
        {assetUtilization.map((item, index) => (
          <li key={item.asset} className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              {item.asset}
            </span>
            <span className="font-medium text-foreground">{formatPercent(item.utilizationRate)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
