import type { BlogPost, Incentive, TVLResponse, UtilizationResponse } from "@/types";

async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url, { next: { revalidate: 300 } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export function getTVL() {
  return fetcher<TVLResponse>("/api/tvl");
}

export function getUtilization() {
  return fetcher<UtilizationResponse>("/api/utilization");
}

export function getIncentives() {
  return fetcher<{ active: Incentive[]; upcoming: Incentive[] }>("/api/incentives");
}

export function getBlogPosts() {
  return fetcher<{ posts: BlogPost[] }>("/api/blog");
}
