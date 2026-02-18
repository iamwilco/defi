import { totalTVL, coalitionContributions, incentives } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { WalletButton } from "@/components/web3/WalletButton";

export function Navbar() {
  const entityCount = new Set(coalitionContributions.map((item) => item.entity)).size;
  const campaignCount = incentives.filter((item) => item.active).length;

  return (
    <header className="sticky top-0 z-30 border-b border-white/6 bg-black/60 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Quick Metrics — hidden on mobile (sidebar hamburger takes that space) */}
        <div className="hidden items-center gap-5 lg:flex">
          <MetricPill label="TVL" value={formatCurrency(totalTVL)} accent="blue" />
          <MetricPill label="Entities" value={String(entityCount)} accent="gold" />
          <MetricPill label="Campaigns" value={String(campaignCount)} accent="green" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-glow" />
            <span className="text-[10px] text-(--text-muted)">Mainnet</span>
          </div>
        </div>

        {/* Mobile: show logo text in the top bar since sidebar is collapsed */}
        <span className="text-sm font-bold tracking-wide text-foreground lg:hidden">
          DeFi <span className="text-accent-blue">Coalition</span>
        </span>

        {/* Right side: wallet + theme */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <WalletButton />
        </div>
      </div>
    </header>
  );
}

function MetricPill({ label, value, accent }: { label: string; value: string; accent: "blue" | "gold" | "green" }) {
  const colors = {
    blue: "text-accent-blue",
    gold: "text-accent-gold",
    green: "text-accent-green",
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">{label}</span>
      <span className={`text-sm font-bold ${colors[accent]}`}>{value}</span>
    </div>
  );
}
