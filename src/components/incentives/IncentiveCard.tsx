import type { Incentive } from "@/types";

export function IncentiveCard({ incentive }: { incentive: Incentive }) {
  const now = new Date("2026-02-18");
  const start = new Date(incentive.startDate);
  const daysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const eligibility = !incentive.active
    ? "Upcoming"
    : incentive.type === "loyalty" && daysSinceStart < 30
      ? "Not yet eligible"
      : "Eligible";

  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">{incentive.name}</h3>
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-xs text-amber-300">
          {incentive.rateLabel}
        </span>
      </div>
      <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{incentive.description}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-[color:var(--text-muted)]">
        <p>
          {incentive.startDate} → {incentive.endDate}
        </p>
        <span
          className={`rounded-full border px-2 py-1 ${
            eligibility === "Eligible"
              ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
              : eligibility === "Not yet eligible"
                ? "border-amber-400/40 bg-amber-500/10 text-amber-200"
                : "border-blue-400/40 bg-blue-500/10 text-blue-200"
          }`}
        >
          {eligibility}
        </span>
      </div>
    </article>
  );
}
