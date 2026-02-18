export function LoadingCard({ label = "Loading data..." }: { label?: string }) {
  return (
    <div className="space-y-3" role="status" aria-live="polite" aria-busy="true">
      <p className="text-xs text-slate-400">{label}</p>
      <div className="h-6 w-1/3 animate-pulse rounded bg-slate-800" />
      <div className="h-20 animate-pulse rounded-xl bg-slate-800" />
    </div>
  );
}
