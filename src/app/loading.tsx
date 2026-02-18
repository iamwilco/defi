export default function Loading() {
  return (
    <div className="space-y-4" aria-live="polite" aria-busy="true">
      <div className="h-10 w-2/3 animate-pulse rounded bg-slate-800" />
      <div className="h-64 animate-pulse rounded-2xl bg-slate-900" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-40 animate-pulse rounded-2xl bg-slate-900" />
        <div className="h-40 animate-pulse rounded-2xl bg-slate-900" />
      </div>
    </div>
  );
}
