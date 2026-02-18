import { totalTVL, coalitionContributions, incentives } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-border bg-[color:var(--surface)]/60 p-4 lg:block">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">Quick Metrics</h2>
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
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="text-xs text-[color:var(--text-muted)]">{label}</p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}
