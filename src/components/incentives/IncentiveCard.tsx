import type { Incentive } from "@/types";

export function IncentiveCard({ incentive }: { incentive: Incentive }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">{incentive.name}</h3>
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-xs text-amber-300">
          {incentive.rateLabel}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{incentive.description}</p>
      <p className="mt-3 text-xs text-slate-400">
        {incentive.startDate} → {incentive.endDate}
      </p>
    </article>
  );
}
