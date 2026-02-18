import type { Metadata } from "next";
import { IncentivesGrid } from "@/components/incentives/IncentivesGrid";
import { incentives } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Incentives | USDM Coalition",
  description: "Campaign mechanics, boosts, and eligibility logic for coalition incentives.",
};

export default function IncentivesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">Incentives</h1>
        <p className="mt-2 text-slate-300">Kickback mechanics designed to subsidize borrowing and lending rates.</p>
      </header>

      <IncentivesGrid incentives={incentives} />

      <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-100">Gaming Prevention</h2>
        <p className="mt-2">Loyalty boosts assume a 30-day minimum holding period before bonus eligibility unlocks.</p>
      </section>
    </div>
  );
}
