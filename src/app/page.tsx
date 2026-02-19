import { ContributionsTable } from "@/components/dashboard/ContributionsTable";
import { ClientChartsSection } from "@/components/dashboard/ClientChartsSection";
import { ClientHeatmapSection } from "@/components/dashboard/ClientHeatmapSection";
import { GrowthWindowCard } from "@/components/dashboard/GrowthWindowCard";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { IncentivesOverview } from "@/components/dashboard/IncentivesOverview";
import { ProofOfReserves } from "@/components/dashboard/ProofOfReserves";
import { ApiStatusCard } from "@/components/dashboard/ApiStatusCard";
import { DashboardCard } from "@/components/shared/DashboardCard";

export default function Home() {
  return (
    <div className="space-y-6">
      <HeroSection />

      <ClientChartsSection />

      <section className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="See How We're Growing">
          <GrowthWindowCard />
        </DashboardCard>

        <DashboardCard title="Live Endpoint Status">
          <ApiStatusCard />
        </DashboardCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="Our Team's Contributions">
          <ContributionsTable />
        </DashboardCard>

        <DashboardCard title="Hot Spots: Where USDM Is Buzzing Right Now">
          <ClientHeatmapSection />
        </DashboardCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="Grab These Rewards Before They're Gone!">
          <IncentivesOverview />
        </DashboardCard>

        <DashboardCard title="Proof We're Solid">
          <ProofOfReserves />
        </DashboardCard>
      </section>
    </div>
  );
}
