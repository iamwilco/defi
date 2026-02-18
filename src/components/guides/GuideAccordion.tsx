"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const GUIDES = [
  {
    id: "mint-fluid",
    title: "Mint to Fluid Journey",
    body: "Mint USDM on NBX, transfer to wallet, and lend on Fluid. Video walkthrough placeholder included.",
    steps: ["Mint USDM on NBX", "Move funds to a supported wallet", "Supply USDM to Fluid"],
    mediaLabel: "Video Placeholder: Mint to Fluid Walkthrough",
  },
  {
    id: "fgld-flow",
    title: "fGLD Flow: Buy gold on NBX, lend on Fluid",
    body: "Acquire fGLD on NBX, deposit into Fluid markets, and monitor utilization/risk limits.",
    steps: ["Acquire fGLD on NBX", "Supply fGLD to lending market", "Monitor utilization and rates"],
    mediaLabel: "Diagram Placeholder: NBX -> Fluid fGLD Flow",
  },
  {
    id: "starter",
    title: "USDM Starter Loop",
    body: "Beginner path for stablecoin entry, lending setup, and campaign eligibility checks.",
    steps: ["Understand campaign terms", "Start with small test position", "Track rewards weekly"],
    mediaLabel: "Checklist Placeholder: Beginner onboarding",
  },
];

export function GuideAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {GUIDES.map((guide) => (
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
