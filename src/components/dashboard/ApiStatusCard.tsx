"use client";

import { useCoalitionTVL } from "@/lib/hooks/useCoalitionTVL";
import { formatCurrency } from "@/lib/utils";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";

export function ApiStatusCard() {
  const { data, isLoading, isError, refetch } = useCoalitionTVL();

  if (isLoading) {
    return <LoadingCard label="Checking API health..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Live TVL endpoint failed"
        message="Using fallback mock data is recommended until endpoint recovers."
        onRetry={() => void refetch()}
      />
    );
  }

  return (
    <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
      <p className="text-xs uppercase tracking-wider text-emerald-300">API Health</p>
      <p className="mt-1 text-lg font-semibold text-emerald-100">/api/tvl responding</p>
      <p className="mt-2 text-sm text-emerald-200">Current total: {formatCurrency(data.total)}</p>
    </div>
  );
}
