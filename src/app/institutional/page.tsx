import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional | USDM Coalition",
  description: "RWA narrative and institutional outlook for USDM growth on Cardano.",
};

export default function InstitutionalPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">Institutional Outlook</h1>
        <p className="mt-2 text-slate-300">
          Placeholder for RWA-to-Cardano strategy narratives and oracle comparison (Finest vs USDM framing).
        </p>
      </header>

      <section className="rounded-2xl border border-border bg-card p-5 text-sm text-[color:var(--text-secondary)]">
        <h2 className="text-lg font-semibold text-foreground">Pitch Kit Stub</h2>
        <p className="mt-2">
          This route is reserved for institutional briefings, comparative oracle analysis, and coalition performance
          snapshots.
        </p>
      </section>
    </div>
  );
}
