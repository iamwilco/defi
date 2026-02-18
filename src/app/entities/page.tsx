import type { Metadata } from "next";
import { EntitiesDataSection } from "@/components/entities/EntitiesDataSection";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { comingSoonTeasers, contentOwnershipPolicies } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Entities | USDM Coalition",
  description: "Coalition members contributing to USDM growth and liquidity.",
};

export default function EntitiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue">Partners</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Coalition Entities</h1>
        <p className="mt-2 text-sm text-(--text-secondary)">NBX, Fluid, Moneta/W3I, Wave and partners powering Proof of Growth.</p>
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

      <section className="rounded-2xl border border-white/8 bg-white/2 p-5 text-sm text-(--text-secondary) backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground">Joining / Leaving</h2>
        <p className="mt-2">
          Coalition participation follows transparent liquidity and communication principles. Historical
          contribution metrics remain visible even if entities leave.
        </p>
      </section>

      <section className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground">Content Ownership Model</h2>
        <p className="mt-2 text-sm text-(--text-secondary)">
          Each coalition entity retains ownership of authored content and may request updates or removals through
          the governance pathway listed below.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-xs text-(--text-secondary)">
            <thead className="text-(--text-muted)">
              <tr>
                <th className="px-2 py-2 font-medium">Entity</th>
                <th className="px-2 py-2 font-medium">Content Owner</th>
                <th className="px-2 py-2 font-medium">Removal Rights</th>
                <th className="px-2 py-2 font-medium">Request Path</th>
              </tr>
            </thead>
            <tbody>
              {contentOwnershipPolicies.map((policy) => (
                <tr key={policy.id} className="border-t border-white/6">
                  <td className="px-2 py-2 text-foreground">{policy.entity}</td>
                  <td className="px-2 py-2">{policy.contentOwner}</td>
                  <td className="px-2 py-2">{policy.removalRights === "entity_only" ? "Entity Only" : "Shared Governance"}</td>
                  <td className="px-2 py-2">{policy.removalRequestPath}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
