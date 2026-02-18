import { timeline } from "@/lib/mockData";

export function DeFiPulseTimeline() {
  return (
    <ol className="space-y-4">
      {timeline.map((item) => (
        <li key={item.phase} className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
          <p className="text-xs uppercase tracking-widest text-amber-300">{item.window}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-100">Phase {item.phase}: {item.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
