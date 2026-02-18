export interface CoalitionContribution {
  id: string;
  entity: string;
  asset: string;
  tvl: number;
  lendingAmount: number;
  borrowingAmount: number;
}

export interface AssetUtilization {
  asset: string;
  totalSupply: number;
  utilized: number;
  utilizationRate: number;
}

export interface HeatmapCell {
  asset: string;
  metric: "Borrow" | "Lend" | "Mint" | "Trade";
  intensity: number;
}

export interface CoalitionEntity {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  role: string;
}

export interface ContentOwnershipPolicy {
  id: string;
  entity: string;
  contentOwner: string;
  removalRights: "entity_only" | "shared_governance";
  removalRequestPath: string;
}

export interface TVLResponse {
  total: number;
  contributions: CoalitionContribution[];
}

export interface UtilizationResponse {
  assets: AssetUtilization[];
  heatmap: HeatmapCell[];
}

export interface TvlHistoryPoint {
  date: string;
  total: number;
  transactions: number;
}
