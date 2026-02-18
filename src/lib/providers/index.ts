import { blockfrostProvider } from "@/lib/providers/blockfrost";
import { mockProvider } from "@/lib/providers/mock";
import type { CoalitionDataProvider, DataMode } from "@/lib/providers/types";

export function getDataMode(): DataMode {
  const mode = process.env.NEXT_PUBLIC_DATA_MODE;
  return mode === "live" ? "live" : "mock";
}

export function getDataProvider(): CoalitionDataProvider {
  return getDataMode() === "live" ? blockfrostProvider : mockProvider;
}
