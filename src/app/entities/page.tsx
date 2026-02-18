import type { Metadata } from "next";
import { EntitiesDataSection } from "@/components/entities/EntitiesDataSection";

export const metadata: Metadata = {
  title: "Entities | USDM Coalition",
  description: "Coalition members contributing to USDM growth and liquidity.",
};

export default function EntitiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">Coalition Entities</h1>
        <p className="mt-2 text-slate-300">NBX, Fluid, Moneta/W3I, Wave and partners powering Proof of Growth.</p>
      </header>

      <EntitiesDataSection />

      <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-100">Joining / Leaving</h2>
        <p className="mt-2">
          Coalition participation follows transparent liquidity and communication principles. Historical
          contribution metrics remain visible even if entities leave.
        </p>
      </section>
    </div>
  );
}
