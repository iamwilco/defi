import {
  assetUtilization,
  coalitionContributions,
  heatmapCells,
  incentives,
  totalTVL,
} from "@/lib/mockData";
import { getContentBlogPosts } from "@/lib/content/blog";
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
    return { posts: await getContentBlogPosts() };
  },
};
