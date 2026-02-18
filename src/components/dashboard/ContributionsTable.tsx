import { coalitionContributions } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

export function ContributionsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-300">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
            <th className="px-3 py-2">Entity</th>
            <th className="px-3 py-2">Asset</th>
            <th className="px-3 py-2">TVL</th>
            <th className="px-3 py-2">Lend</th>
            <th className="px-3 py-2">Borrow</th>
          </tr>
        </thead>
        <tbody>
          {coalitionContributions.map((row) => (
            <tr key={row.id} className="border-b border-white/5">
              <td className="px-3 py-2">{row.entity}</td>
              <td className="px-3 py-2">{row.asset}</td>
              <td className="px-3 py-2">{formatCurrency(row.tvl)}</td>
              <td className="px-3 py-2">{formatCurrency(row.lendingAmount)}</td>
              <td className="px-3 py-2">{formatCurrency(row.borrowingAmount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
