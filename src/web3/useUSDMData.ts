import { DATA_MODE } from "@/lib/constants";

export interface OnChainMetrics {
  tvl: number;
  velocity: number;
  reserveRatio: number;
  transactions24h: number;
  holders: number;
}

const mockMetrics: OnChainMetrics = {
  tvl: 100500,
  velocity: 421,
  reserveRatio: 1.0,
  transactions24h: 87,
  holders: 312,
};

export async function fetchUSDMMetrics(): Promise<OnChainMetrics> {
  if (DATA_MODE === "live") {
    // TODO: Replace with real Blockfrost / Charli3 Oracle / Fluid DEX queries
    // const blockfrostKey = process.env.BLOCKFROST_API_KEY;
    // const charli3Url = process.env.CHARLI3_API_URL;
    // const fluidUrl = process.env.FLUID_API_URL;
    throw new Error("Live data mode not yet implemented — set NEXT_PUBLIC_DATA_MODE=mock");
  }

  // Simulated network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockMetrics;
}
