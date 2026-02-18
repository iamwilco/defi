import type { RecapHighlight } from "@/types";

export function FourteenDaysRecap({ highlights }: { highlights: RecapHighlight[] }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <h3 className="text-lg font-semibold text-foreground">14 Days of USDM Recap</h3>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">Milestones from launch to six-figure TVL.</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.day} className="rounded-xl border border-border bg-[color:var(--surface-soft)] p-4">
            <p className="text-xs uppercase tracking-wide text-amber-300">Day {item.day}</p>
            <h4 className="mt-1 text-sm font-semibold text-foreground">{item.title}</h4>
            <p className="mt-2 text-xs text-[color:var(--text-muted)]">{item.metricLabel}</p>
            <p className="text-lg font-semibold text-blue-300">{item.metricValue}</p>
            <p className="mt-2 text-xs text-[color:var(--text-secondary)]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
