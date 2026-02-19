import type { Metadata } from "next";
import { GuidesDataSection } from "@/components/guides/GuidesDataSection";

export const metadata: Metadata = {
  title: "Your Easy Guides Hub | DeFi Coalition",
  description: "Guides for minting, lending, and coalition participation paths.",
};

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-gold">Education</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Your Easy Guides Hub</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Simple steps to get you minting USDM, trading fGLD, or lending on Fluid — no jargon, just results.
        </p>
      </header>
      <GuidesDataSection />
    </div>
  );
}
