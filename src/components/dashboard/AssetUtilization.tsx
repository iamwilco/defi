"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { assetUtilization } from "@/lib/mockData";
import { formatPercent } from "@/lib/utils";

const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#22d3ee"];

export function AssetUtilizationChart() {
  return (
    <div className="h-72 w-full" role="img" aria-label="Donut chart showing utilized amounts by asset">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={assetUtilization} dataKey="utilized" nameKey="asset" outerRadius={100} label>
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
      <ul className="mt-3 space-y-1 text-xs text-slate-300">
        {assetUtilization.map((item) => (
          <li key={item.asset} className="flex justify-between">
            <span>{item.asset}</span>
            <span>{formatPercent(item.utilizationRate)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
