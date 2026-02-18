import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional | DeFi Coalition",
  description: "RWA narrative and institutional outlook for USDM growth on Cardano.",
};

export default function InstitutionalPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue">Strategy</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Institutional Outlook</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Placeholder for RWA-to-Cardano strategy narratives and oracle comparison (Finest vs USDM framing).
        </p>
      </header>

      <section className="rounded-2xl border border-white/8 bg-white/2 p-5 text-sm text-(--text-secondary) backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground">Pitch Kit Stub</h2>
        <p className="mt-2">
          This route is reserved for institutional briefings, comparative oracle analysis, and coalition performance
          snapshots.
        </p>
      </section>
    </div>
  );
}
