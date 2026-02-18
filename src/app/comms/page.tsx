import type { Metadata } from "next";
import { MediaEmbed } from "@/components/comms/MediaEmbed";

export const metadata: Metadata = {
  title: "Communications | USDM Coalition",
  description: "X Spaces, campaign videos, and coalition communication links.",
};

export default function CommsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-100">Comms Hub</h1>
        <p className="mt-2 text-slate-300">Recordings, updates, and minting/yield announcements from coalition channels.</p>
      </header>

      <section className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5 text-sm text-amber-100">
        <h2 className="text-lg font-semibold">NBX Minting Banner</h2>
        <p className="mt-2">Mint USDM on NBX and route into Fluid opportunities for active campaign windows.</p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <MediaEmbed
          title="Mint to Fluid Walkthrough"
          description="Video placeholder for onboarding flow from mint to lending."
          href="#"
        />
        <MediaEmbed
          title="Coalition X Space"
          description="Weekly coalition discussion covering growth metrics and campaign strategy."
          href="#"
        />
      </div>
    </div>
  );
}
