import Link from "next/link";
import { incentives } from "@/lib/mockData";

export function IncentivesOverview() {
  const active = incentives.filter((item) => item.active);

  return (
    <div className="space-y-3">
      {active.map((item) => (
        <article key={item.id} className="rounded-xl border border-amber-400/20 bg-slate-900/80 p-4">
          <p className="text-xs uppercase tracking-wider text-amber-300">{item.type.replace("_", " ")}</p>
          <h4 className="mt-1 text-lg font-semibold text-slate-100">{item.name}</h4>
          <p className="mt-1 text-sm text-slate-300">{item.description}</p>
          <p className="mt-2 text-sm font-medium text-amber-200">{item.rateLabel}</p>
        </article>
      ))}

      <Link href="/incentives" className="inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
        View all incentive mechanics →
      </Link>
    </div>
  );
}
