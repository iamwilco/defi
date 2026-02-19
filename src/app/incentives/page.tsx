import type { Metadata } from "next";
import { IncentivesDataSection } from "@/components/incentives/IncentivesDataSection";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { comingSoonTeasers } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Incentives | DeFi Coalition",
  description: "Campaign mechanics, boosts, and eligibility logic for coalition incentives.",
};

export default function IncentivesPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-green">Yield Programs</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Score Extra Rewards</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Our perks make borrowing and lending even better — think bonuses that put more in your pocket.
        </p>
      </header>

      <IncentivesDataSection />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Coming Soon</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {comingSoonTeasers
            .filter((item) => item.target === "incentives")
            .map((teaser) => (
              <ComingSoonCard key={teaser.id} teaser={teaser} />
            ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/8 bg-white/2 p-5 text-sm text-(--text-secondary) backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground">No Shortcuts Here</h2>
        <p className="mt-2">Hold for 30 days to unlock loyalty bonuses — it keeps things fair for everyone.</p>
      </section>
    </div>
  );
}
