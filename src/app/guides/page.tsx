import type { Metadata } from "next";
import { GuidesDataSection } from "@/components/guides/GuidesDataSection";

export const metadata: Metadata = {
  title: "How-To Library | USDM Coalition",
  description: "Guides for minting, lending, and coalition participation paths.",
};

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-gold">Education</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">How-To Library</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">Step-by-step onboarding guides for USDM, fGLD, and Fluid flows.</p>
      </header>
      <GuidesDataSection />
    </div>
  );
}
