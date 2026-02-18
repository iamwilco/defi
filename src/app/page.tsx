import { ContributionsTable } from "@/components/dashboard/ContributionsTable";
import { ClientChartsSection } from "@/components/dashboard/ClientChartsSection";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { IncentivesOverview } from "@/components/dashboard/IncentivesOverview";
import { ProofOfReserves } from "@/components/dashboard/ProofOfReserves";
import { UtilizationHeatmap } from "@/components/dashboard/UtilizationHeatmap";
import { DashboardCard } from "@/components/shared/DashboardCard";

export default function Home() {
  return (
    <div className="space-y-6">
      <HeroSection />

      <ClientChartsSection />

      <section className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="Coalition Contributions">
          <ContributionsTable />
        </DashboardCard>

        <DashboardCard title="Utilization Heatmap">
          <UtilizationHeatmap />
        </DashboardCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <DashboardCard title="Ongoing Incentives">
          <IncentivesOverview />
        </DashboardCard>

        <DashboardCard title="Proof of Reserves">
          <ProofOfReserves />
        </DashboardCard>
      </section>
    </div>
  );
}
