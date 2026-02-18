import type { Metadata } from "next";
import { CommsDataSection } from "@/components/comms/CommsDataSection";

export const metadata: Metadata = {
  title: "Communications | USDM Coalition",
  description: "X Spaces, campaign videos, and coalition communication links.",
};

export default function CommsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">Comms Hub</h1>
        <p className="mt-2 text-slate-300">Recordings, updates, and minting/yield announcements from coalition channels.</p>
      </header>

      <section className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5 text-sm text-amber-100">
        <h2 className="text-lg font-semibold">NBX Minting Banner</h2>
        <p className="mt-2">Mint USDM on NBX and route into Fluid opportunities for active campaign windows.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold text-slate-100">Coalition Updates</h2>
          <p className="mt-2 text-sm text-slate-300">
            Weekly snapshots summarize TVL movement, top-performing campaigns, and contribution milestones.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold text-slate-100">Institutional Briefings</h2>
          <p className="mt-2 text-sm text-slate-300">
            Publish concise notes for partners evaluating USDM liquidity depth and reserve-backed confidence.
          </p>
        </article>
      </section>

      <CommsDataSection />
    </div>
  );
}
