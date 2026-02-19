import type { Metadata } from "next";
import { BlogDataSection } from "@/components/blog/BlogDataSection";
import { ClientPhasesInfographic } from "@/components/blog/ClientPhasesInfographic";
import { DeFiPulseTimeline } from "@/components/blog/DeFiPulseTimeline";
import { FourteenDaysRecap } from "@/components/blog/FourteenDaysRecap";
import { fourteenDayRecap, timeline } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "DeFi Pulse | DeFi Coalition",
  description: "Coalition blog posts, phase reviews, and growth narratives.",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue">Content Hub</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">DeFi Pulse: Our Monthly Scoop</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Get the inside story on our coalition&apos;s wins, from TVL jumps to user stories — all in bite-sized reviews.
        </p>
      </header>

      <BlogDataSection />

      <section className="grid gap-4 xl:grid-cols-2">
        <ClientPhasesInfographic milestones={timeline} />
        <FourteenDaysRecap highlights={fourteenDayRecap} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">How Each Phase Came Together</h2>
        <DeFiPulseTimeline />
      </section>
    </div>
  );
}
