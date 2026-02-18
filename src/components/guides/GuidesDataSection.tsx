"use client";

import { GuideAccordion } from "@/components/guides/GuideAccordion";
import { ErrorFallback } from "@/components/shared/ErrorFallback";
import { LoadingCard } from "@/components/shared/LoadingCard";
import { useGuides } from "@/lib/hooks/useGuides";

export function GuidesDataSection() {
  const { data, isLoading, isError, refetch } = useGuides();

  if (isLoading) {
    return <LoadingCard label="Loading guides catalog..." />;
  }

  if (isError || !data) {
    return (
      <ErrorFallback
        title="Unable to load guides"
        message="Guides endpoint is currently unavailable."
        onRetry={() => void refetch()}
      />
    );
  }

  return <GuideAccordion guides={data.guides} />;
}
