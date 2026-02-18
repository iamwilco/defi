"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { coalitionContributions } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function TvlChart() {
  return (
    <div className="h-72 w-full" role="img" aria-label="Bar chart showing total USDM TVL by coalition entity">
      <ResponsiveContainer>
        <BarChart data={coalitionContributions}>
          <XAxis dataKey="entity" stroke="#94a3b8" tick={{ fontSize: 12 }} />
          <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value) =>
              typeof value === "number" ? formatCurrency(value) : String(value ?? "")
            }
            contentStyle={{ backgroundColor: "#020617", border: "1px solid #1e293b" }}
          />
          <Bar dataKey="tvl" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
