import type { BlogPost, Incentive, TVLResponse, UtilizationResponse } from "@/types";

export type DataMode = "mock" | "live";

export interface CoalitionDataProvider {
  getTVL: () => Promise<TVLResponse>;
  getUtilization: () => Promise<UtilizationResponse>;
  getIncentives: () => Promise<{ active: Incentive[]; upcoming: Incentive[] }>;
  getBlogPosts: () => Promise<{ posts: BlogPost[] }>;
}
