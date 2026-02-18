import type { Metadata } from "next";
import { BlogDataSection } from "@/components/blog/BlogDataSection";
import { DeFiPulseTimeline } from "@/components/blog/DeFiPulseTimeline";
import { FourteenDaysRecap } from "@/components/blog/FourteenDaysRecap";
import { PhasesInfographic } from "@/components/blog/PhasesInfographic";
import { fourteenDayRecap, timeline } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "DeFi Pulse | USDM Coalition",
  description: "Coalition blog posts, phase reviews, and growth narratives.",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">DeFi Pulse</h1>
        <p className="mt-2 text-slate-300">Monthly coalition insights and phase-based progress reviews.</p>
      </header>

      <BlogDataSection />

      <section className="grid gap-4 xl:grid-cols-2">
        <PhasesInfographic milestones={timeline} />
        <FourteenDaysRecap highlights={fourteenDayRecap} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-100">Phased Reviews</h2>
        <DeFiPulseTimeline />
      </section>
    </div>
  );
}
