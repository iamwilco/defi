import { type ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value?: string;
  children?: ReactNode;
}

export function DashboardCard({ title, value, children }: DashboardCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_8px_30px_rgba(2,6,23,0.35)]">
      <h3 className="text-sm font-medium text-slate-300">{title}</h3>
      {value ? <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
