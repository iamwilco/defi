import { totalTVL, coalitionContributions, incentives } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function Sidebar() {
  const entityCount = new Set(coalitionContributions.map((item) => item.entity)).size;
  const campaignCount = incentives.filter((item) => item.active).length;

  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/6 bg-black/30 p-4 backdrop-blur-sm lg:block">
      <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--text-muted)">
        Quick Metrics
      </h2>
      <div className="space-y-3">
        <Metric label="Total USDM TVL" value={formatCurrency(totalTVL)} accent="blue" />
        <Metric label="Active Entities" value={String(entityCount)} accent="gold" />
        <Metric label="Active Campaigns" value={String(campaignCount)} accent="green" />
      </div>

      <div className="mt-6 rounded-xl border border-white/6 bg-white/2 p-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-glow" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">Network Status</span>
        </div>
        <p className="mt-1.5 text-xs text-(--text-secondary)">Cardano mainnet — synced</p>
      </div>
    </aside>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent: "blue" | "gold" | "green" }) {
  const accentColors = {
    blue: "border-accent-blue/20 hover:border-accent-blue/40 hover:shadow-[0_0_15px_rgba(0,123,255,0.1)]",
    gold: "border-accent-gold/20 hover:border-accent-gold/40 hover:shadow-[0_0_15px_rgba(255,165,0,0.1)]",
    green: "border-accent-green/20 hover:border-accent-green/40 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)]",
  };

  const valueColors = {
    blue: "text-accent-blue",
    gold: "text-accent-gold",
    green: "text-accent-green",
  };

  return (
    <div className={`rounded-xl border bg-white/2 p-3 transition-all duration-300 ${accentColors[accent]}`}>
      <p className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">{label}</p>
      <p className={`mt-1 text-lg font-bold ${valueColors[accent]}`}>{value}</p>
    </div>
  );
}
