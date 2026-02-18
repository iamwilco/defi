"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/animations/ParticleBackground").then((mod) => ({ default: mod.ParticleBackground })),
  { ssr: false },
);

export function ClientParticles() {
  return <ParticleBackground />;
}
