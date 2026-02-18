import type { Metadata } from "next";
import { CommsDataSection } from "@/components/comms/CommsDataSection";

export const metadata: Metadata = {
  title: "Communications | DeFi Coalition",
  description: "X Spaces, campaign videos, and coalition communication links.",
};

export default function CommsPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-gold">Channels</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Comms Hub</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">Recordings, updates, and minting/yield announcements from coalition channels.</p>
      </header>

      {/* NBX Minting Banner with glow */}
      <section className="relative overflow-hidden rounded-2xl border border-accent-gold/25 bg-accent-gold/5 p-5 text-sm">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-gold/10 blur-[60px]" />
        <div className="relative z-10">
          <h2 className="text-lg font-bold text-accent-gold">NBX Minting Banner</h2>
          <p className="mt-2 text-(--text-secondary)">Mint USDM on NBX and route into Fluid opportunities for active campaign windows.</p>
          <a
            href="https://nbx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-xl border border-accent-gold/30 bg-accent-gold/10 px-4 py-2 text-xs font-medium text-accent-gold transition hover:bg-accent-gold/20 hover:shadow-[0_0_15px_rgba(255,165,0,0.2)]"
          >
            Start Minting →
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-foreground">Coalition Updates</h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            Weekly snapshots summarize TVL movement, top-performing campaigns, and contribution milestones.
          </p>
        </article>
        <article className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-foreground">Institutional Briefings</h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            Publish concise notes for partners evaluating USDM liquidity depth and reserve-backed confidence.
          </p>
        </article>
      </section>

      <CommsDataSection />
    </div>
  );
}
