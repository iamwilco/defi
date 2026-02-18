import { totalTVL, coalitionContributions, incentives } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-950/60 p-4 lg:block">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Quick Metrics</h2>
      <div className="space-y-3">
        <Metric label="Total USDM TVL" value={formatCurrency(totalTVL)} />
        <Metric label="Active Entities" value={String(new Set(coalitionContributions.map((item) => item.entity)).size)} />
        <Metric label="Active Campaigns" value={String(incentives.filter((item) => item.active).length)} />
      </div>
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-semibold text-slate-100">{value}</p>
    </div>
  );
}
