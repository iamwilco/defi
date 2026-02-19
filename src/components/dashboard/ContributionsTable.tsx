import Image from "next/image";
import { coalitionContributions } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

const ENTITY_LOGOS: Record<string, string> = {
  NBX: "/logos/nbx-logo.png",
  Fluid: "/logos/fluid-logo.png",
  "Moneta/W3I": "/logos/moneta-logo.png",
};

export function ContributionsTable() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400">
        Check out what each partner is bringing to the table — real liquidity for better yields.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
            <th className="px-3 py-2">Team</th>
            <th className="px-3 py-2">Asset</th>
            <th className="px-3 py-2">Locked Value</th>
            <th className="px-3 py-2">Supplied</th>
            <th className="px-3 py-2">Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {coalitionContributions.map((row) => (
            <tr key={row.id} className="border-b border-white/5">
              <td className="px-3 py-2">
                <div className="flex items-center gap-2">
                  {ENTITY_LOGOS[row.entity] ? (
                    <Image
                      src={ENTITY_LOGOS[row.entity]}
                      alt={`${row.entity} logo`}
                      width={18}
                      height={18}
                      className="rounded-sm"
                    />
                  ) : null}
                  <span>{row.entity}</span>
                </div>
              </td>
              <td className="px-3 py-2">{row.asset}</td>
              <td className="px-3 py-2">{formatCurrency(row.tvl)}</td>
              <td className="px-3 py-2">{formatCurrency(row.lendingAmount)}</td>
              <td className="px-3 py-2">{formatCurrency(row.borrowingAmount)}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
