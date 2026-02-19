"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { totalTVL } from "@/lib/mockData";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeIn } from "@/components/animations/MotionWrapper";

const GlobeScene = dynamic(
  () => import("@/components/3d/GlobeScene").then((mod) => ({ default: mod.GlobeScene })),
  { ssr: false },
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-accent-blue/20 bg-linear-to-br from-black via-[#050510] to-[#0a0a20] p-6 sm:p-10">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-accent-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-accent-gold/8 blur-[80px]" />

      <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex-1">
          <FadeIn delay={0}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue">
              Coalition Campaign • Live on Cardano
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              USDM DeFi Coalition
              <span className="mt-1 block text-accent-blue glow-blue-text">Proof of Growth</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-(--text-secondary)">
              Coalition entities coordinate liquidity, education, and incentive flows to build
              durable USDM utility across the Cardano ecosystem.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap items-end gap-4 sm:gap-6">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-(--text-muted)">Total Value Locked</p>
                <AnimatedCounter
                  value={totalTVL}
                  prefix="$"
                  className="text-4xl font-bold text-accent-gold glow-gold-text"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog/month-1-review"
                  className="rounded-xl border border-accent-blue/30 bg-accent-blue/10 px-5 py-2.5 text-sm font-medium text-accent-blue transition hover:bg-accent-blue/20 hover:shadow-[0_0_20px_rgba(0,123,255,0.2)]"
                >
                  Why it matters
                </Link>
                <Link
                  href="/wallet"
                  className="rounded-xl border border-accent-gold/30 bg-accent-gold/10 px-5 py-2.5 text-sm font-medium text-accent-gold transition hover:bg-accent-gold/20 hover:shadow-[0_0_20px_rgba(255,165,0,0.2)]"
                >
                  Connect & Explore
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3D Globe */}
        <div className="hidden h-72 w-72 shrink-0 lg:block xl:h-80 xl:w-80">
          <GlobeScene className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
