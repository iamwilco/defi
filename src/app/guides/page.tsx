import type { Metadata } from "next";
import { GuideAccordion } from "@/components/guides/GuideAccordion";

export const metadata: Metadata = {
  title: "How-To Library | USDM Coalition",
  description: "Guides for minting, lending, and coalition participation paths.",
};

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">How-To Library</h1>
        <p className="mt-2 text-slate-300">Step-by-step onboarding guides for USDM, fGLD, and Fluid flows.</p>
      </header>
      <GuideAccordion />
    </div>
  );
}
