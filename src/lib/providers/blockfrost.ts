import { mockProvider } from "@/lib/providers/mock";
import type { CoalitionDataProvider } from "@/lib/providers/types";

const BLOCKFROST_BASE_URL = "https://cardano-mainnet.blockfrost.io/api/v0";

export const blockfrostProvider: CoalitionDataProvider = {
  async getTVL() {
    const apiKey = process.env.BLOCKFROST_API_KEY;

    if (!apiKey) {
      return mockProvider.getTVL();
    }

    // Stub for Sprint 1: keep frontend contract stable while wiring live mode plumbing.
    // Replace this request with asset/policy-specific aggregation once coalition endpoints are finalized.
    const response = await fetch(`${BLOCKFROST_BASE_URL}/health`, {
      headers: {
        project_id: apiKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Blockfrost health check failed: ${response.status}`);
    }

    return mockProvider.getTVL();
  },
  async getUtilization() {
    return mockProvider.getUtilization();
  },
  async getIncentives() {
    return mockProvider.getIncentives();
  },
  async getBlogPosts() {
    return mockProvider.getBlogPosts();
  },
};
