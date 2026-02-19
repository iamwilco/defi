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
        <h1 className="mt-2 text-3xl font-bold text-foreground">Stay in the Loop</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Catch our latest videos, updates, and tips straight from the coalition — all about minting, yields, and more.
        </p>
      </header>

      {/* NBX Minting Banner with NBX brand color #beed5e */}
      <section className="relative overflow-hidden rounded-2xl border border-[#beed5e]/30 bg-[#beed5e]/5 p-5 text-sm">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#beed5e]/15 blur-[60px]" />
        <div className="relative z-10">
          <h2 className="text-lg font-bold text-[#beed5e]">NBX Minting Banner</h2>
          <p className="mt-2 text-(--text-secondary)">
            Mint USDM on <span className="font-semibold text-[#beed5e]">NBX</span> today, then hop over to Fluid for sweet yield chances during our campaigns.
          </p>
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
          <h2 className="text-lg font-bold text-foreground">Quick Weekly Wins</h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            We share the biggest wins each week, from TVL milestones to campaign moments that helped real users.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Week 2 (Feb 14): We Hit $100K TVL!</span>
                <span className="text-[10px] text-(--text-muted)">Feb 14, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">TVL crossed $100K. <span className="font-semibold text-[#beed5e]">NBX</span> minting volume rose 34%, and Fluid utilization held strong at 65%. Thanks to all of you who joined early.</p>
            </li>
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Week 1: Big Launch Energy</span>
                <span className="text-[10px] text-(--text-muted)">Feb 7, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">We launched with $62.1K TVL across 4 entities. Moneta/W3I coordinated the first campaign push, and <span className="font-semibold text-[#beed5e]">NBX</span> onboarded 120 new minters.</p>
            </li>
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Pre-Launch: Team Alignment</span>
                <span className="text-[10px] text-(--text-muted)">Jan 30, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Our teams aligned campaign rails, ownership rules, and incentives. Wave Capital also confirmed growth capital support to help us scale.</p>
            </li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
          <h2 className="text-lg font-bold text-foreground">For the Pros: Our Briefs</h2>
          <p className="mt-2 text-sm text-(--text-secondary)">
            Short, practical notes for professional partners evaluating liquidity depth and reserve confidence.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-white/6 bg-white/2 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">USDM Reserves Check</span>
                <span className="text-[10px] text-(--text-muted)">Feb 12, 2026</span>
              </div>
              <p className="mt-1 text-xs text-(--text-secondary)">Audited and 1:1 backed. Partners can verify reserves anytime through the dashboard and on-chain references.</p>
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
