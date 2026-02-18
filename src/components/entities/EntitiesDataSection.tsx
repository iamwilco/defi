"use client";

import { EntitiesGrid } from "@/components/entities/EntitiesGrid";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { useEntities } from "@/lib/hooks/useEntities";

export function EntitiesDataSection() {
  const { data, isLoading, isError, refetch } = useEntities();

  if (isLoading) {
    return <LoadingCard label="Loading coalition entities..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to load entities"
        message="The entities endpoint is temporarily unavailable."
        onRetry={() => void refetch()}
      />
    );
  }

  return <EntitiesGrid entities={data.entities} />;
}
