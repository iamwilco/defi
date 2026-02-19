"use client";

import { CommsFeed } from "@/components/comms/CommsFeed";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { useCommsFeed } from "@/lib/hooks/useCommsFeed";

export function CommsDataSection() {
  const { data, isLoading, isError, refetch } = useCommsFeed();

  if (isLoading) {
    return <LoadingCard label="Loading fresh updates from the coalition..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to load communications"
        message="Comms feed endpoint is unavailable."
        onRetry={() => void refetch()}
      />
    );
  }

  return <CommsFeed items={data.items} />;
}
