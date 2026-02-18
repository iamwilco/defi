export interface FluidCampaignSnapshot {
  campaignId: string;
  aprBoost: number;
  eligibleWallets: number;
}

export async function getFluidCampaignSnapshot(): Promise<FluidCampaignSnapshot[]> {
  // Stub for Sprint 1: replace with real Fluid endpoints during Sprint 2 live incentives work.
  return [];
}
