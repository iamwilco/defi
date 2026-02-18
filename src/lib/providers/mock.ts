import {
  assetUtilization,
  blogPosts,
  coalitionContributions,
  heatmapCells,
  incentives,
  totalTVL,
} from "@/lib/mockData";
import type { CoalitionDataProvider } from "@/lib/providers/types";

export const mockProvider: CoalitionDataProvider = {
  async getTVL() {
    return {
      total: totalTVL,
      contributions: coalitionContributions,
    };
  },
  async getUtilization() {
    return {
      assets: assetUtilization,
      heatmap: heatmapCells,
    };
  },
  async getIncentives() {
    return {
      active: incentives.filter((item) => item.active),
      upcoming: incentives.filter((item) => !item.active),
    };
  },
  async getBlogPosts() {
    return { posts: blogPosts };
  },
};
