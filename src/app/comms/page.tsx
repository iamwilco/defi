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

      {/* NBX Minting Banner with NBX brand color #beed5e */}
      <section className="relative overflow-hidden rounded-2xl border border-[#beed5e]/30 bg-[#beed5e]/5 p-5 text-sm">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#beed5e]/15 blur-[60px]" />
        <div className="relative z-10">
          <h2 className="text-lg font-bold text-[#beed5e]">NBX Minting Banner</h2>
          <p className="mt-2 text-(--text-secondary)">Mint USDM on <span className="font-semibold text-[#beed5e]">NBX</span> and route into Fluid opportunities for active campaign windows.</p>
          <a
            href="https://nbx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-xl border border-[#beed5e]/30 bg-[#beed5e]/10 px-4 py-2 text-xs font-medium text-[#beed5e] transition hover:bg-[#beed5e]/20 hover:shadow-[0_0_15px_rgba(190,237,94,0.25)]"
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
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Week 2 Snapshot</span>
                <span className="text-[10px] text-(--text-muted)">Feb 14, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">TVL crossed $100K. <span className="font-semibold text-[#beed5e]">NBX</span> minting volume up 34%. Fluid lending utilization steady at 65%. Early Bird Boost drove 48% of new deposits this week.</p>
            </li>
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Week 1 Snapshot</span>
                <span className="text-[10px] text-(--text-muted)">Feb 7, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Coalition launch week. Initial TVL at $62.1K across 4 entities. Moneta/W3I coordinated the first campaign push. <span className="font-semibold text-[#beed5e]">NBX</span> onboarded 120 new minters.</p>
            </li>
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Pre-Launch Brief</span>
                <span className="text-[10px] text-(--text-muted)">Jan 30, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Final alignment call between coalition entities. Campaign rails, content ownership, and incentive mechanics confirmed. Wave Capital committed growth capital allocation.</p>
            </li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-foreground">Institutional Briefings</h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            Publish concise notes for partners evaluating USDM liquidity depth and reserve-backed confidence.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">USDM Reserve Transparency Note</span>
                <span className="text-[10px] text-(--text-muted)">Feb 12, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Third-party audit confirms 1:1 reserve backing for all circulating USDM. On-chain proof available via Cardano explorer. Institutional partners can verify reserves in real-time through the coalition dashboard.</p>
            </li>
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">RWA Liquidity Depth Report</span>
                <span className="text-[10px] text-(--text-muted)">Feb 8, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Analysis of USDM and fGLD order book depth across <span className="font-semibold text-[#beed5e]">NBX</span> markets. Average slippage under 0.3% for trades up to $25K. Institutional-grade execution available during EU and US market hours.</p>
            </li>
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Cardano DeFi Positioning Memo</span>
                <span className="text-[10px] text-(--text-muted)">Feb 3, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Strategic overview of USDM&apos;s positioning within the Cardano DeFi ecosystem. Comparison with competing stablecoin rails, lending protocol composability, and long-term coalition growth thesis for institutional allocators.</p>
            </li>
          </ul>
        </article>
      </section>

      <CommsDataSection />
    </div>
  );
}
