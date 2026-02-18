import type { Metadata } from "next";
import { EntitiesDataSection } from "@/components/entities/EntitiesDataSection";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { comingSoonTeasers } from "@/lib/mockData";

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

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Potential Partners</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {comingSoonTeasers
            .filter((item) => item.target === "entities")
            .map((teaser) => (
              <ComingSoonCard key={teaser.id} teaser={teaser} />
            ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5 text-sm text-(--text-secondary)">
        <h2 className="text-lg font-semibold text-foreground">Joining / Leaving</h2>
        <p className="mt-2">
          Coalition participation follows transparent liquidity and communication principles. Historical
          contribution metrics remain visible even if entities leave.
        </p>
      </section>
    </div>
  );
}
