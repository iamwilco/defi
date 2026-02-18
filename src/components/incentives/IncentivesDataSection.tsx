"use client";

import { IncentivesGrid } from "@/components/incentives/IncentivesGrid";
import { BoostCalculator } from "@/components/incentives/BoostCalculator";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { useIncentives } from "@/lib/hooks/useIncentives";

export function IncentivesDataSection() {
  const { data, isLoading, isError, refetch } = useIncentives();

  if (isLoading) {
    return <LoadingCard label="Loading incentives..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to load incentives"
        message="The incentives endpoint is currently unavailable."
        onRetry={() => void refetch()}
      />
    );
  }

  const incentives = [...data.active, ...data.upcoming];

  return (
    <div className="space-y-5">
      <IncentivesGrid incentives={incentives} />
      <BoostCalculator incentives={incentives} />
    </div>
  );
}
