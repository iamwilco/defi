import Link from "next/link";
import { totalTVL } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="rounded-2xl border border-blue-400/25 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-blue-300">Coalition Campaign</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        The $100K USDM Coalition is Live
      </h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        Proof of Growth for Cardano DeFi. Coalition entities coordinate liquidity, education, and incentive
        flows to build durable USDM utility.
      </p>
      <div className="mt-6 flex flex-wrap items-end gap-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Total TVL</p>
          <p className="text-3xl font-semibold text-amber-300">{formatCurrency(totalTVL)}</p>
        </div>
        <Link
          href="/blog/month-1-review"
          className="rounded-lg border border-amber-300/60 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-400/20"
        >
          Why it matters
        </Link>
      </div>
    </section>
  );
}
