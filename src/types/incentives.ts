export interface Incentive {
  id: string;
  name: string;
  type: "early_bird" | "loyalty" | "campaign";
  description: string;
  rateLabel: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

export interface ComingSoonTeaser {
  id: string;
  title: string;
  description: string;
  target: "incentives" | "entities" | "institutional";
  eta: string;
}
