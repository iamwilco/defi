"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { GuideEntry } from "@/types";

export function GuideAccordion({ guides }: { guides: GuideEntry[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {guides.map((guide) => (
        <Accordion.Item key={guide.id} value={guide.id} className="rounded-xl border border-white/10 bg-slate-900/70">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left text-slate-100">
              {guide.title}
              <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="space-y-3 px-4 pb-4 text-sm text-slate-300">
            <p>{guide.body}</p>
            <ul className="list-inside list-disc space-y-1 text-slate-300">
              {guide.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <div className="rounded-lg border border-dashed border-blue-400/40 bg-blue-500/5 p-3 text-xs text-blue-200">
              {guide.mediaLabel}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
