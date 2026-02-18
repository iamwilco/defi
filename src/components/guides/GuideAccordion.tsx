"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { GuideEntry } from "@/types";
import { EmbedPlaceholder } from "@/components/shared/EmbedPlaceholder";

export function GuideAccordion({ guides }: { guides: GuideEntry[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {guides.map((guide) => (
        <Accordion.Item key={guide.id} value={guide.id} className="rounded-xl border border-border bg-card">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left text-foreground">
              {guide.title}
              <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="space-y-3 px-4 pb-4 text-sm text-[color:var(--text-secondary)]">
            <p>{guide.body}</p>
            <ul className="list-inside list-disc space-y-1 text-[color:var(--text-secondary)]">
              {guide.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <EmbedPlaceholder
              title={guide.title}
              label={guide.mediaLabel}
              type={guide.mediaType}
              href={guide.mediaUrl}
            />
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
