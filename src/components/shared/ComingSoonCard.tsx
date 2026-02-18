import type { ComingSoonTeaser } from "@/types";

interface ComingSoonCardProps {
  teaser: ComingSoonTeaser;
}

export function ComingSoonCard({ teaser }: ComingSoonCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-2 py-1 text-[11px] font-medium text-blue-200">
          Coming Soon
        </span>
        <span className="text-xs text-[color:var(--text-muted)]">ETA {teaser.eta}</span>
      </div>
      <h3 className="text-base font-semibold text-foreground">{teaser.title}</h3>
      <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{teaser.description}</p>
    </article>
  );
}
