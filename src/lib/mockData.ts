import type {
  AssetUtilization,
  BlogPost,
  CoalitionContribution,
  CoalitionEntity,
  HeatmapCell,
  Incentive,
  TimelineMilestone,
  TvlHistoryPoint,
} from "@/types";

export const coalitionContributions: CoalitionContribution[] = [
  { id: "1", entity: "NBX", asset: "USDM", tvl: 32000, lendingAmount: 15000, borrowingAmount: 7000 },
  { id: "2", entity: "Fluid", asset: "USDM", tvl: 28000, lendingAmount: 14000, borrowingAmount: 9000 },
  { id: "3", entity: "Moneta/W3I", asset: "USDM", tvl: 18000, lendingAmount: 6000, borrowingAmount: 3500 },
  { id: "4", entity: "Wave Capital", asset: "fGLD", tvl: 14000, lendingAmount: 4500, borrowingAmount: 2500 },
  { id: "5", entity: "LenFI", asset: "Night", tvl: 8500, lendingAmount: 3000, borrowingAmount: 2000 },
];

export const assetUtilization: AssetUtilization[] = [
  { asset: "USDM", totalSupply: 120000, utilized: 78000, utilizationRate: 65 },
  { asset: "fGLD", totalSupply: 30000, utilized: 16800, utilizationRate: 56 },
  { asset: "Night", totalSupply: 22000, utilized: 11440, utilizationRate: 52 },
  { asset: "ADA-USDM LP", totalSupply: 18000, utilized: 9900, utilizationRate: 55 },
];

export const heatmapCells: HeatmapCell[] = [
  { asset: "USDM", metric: "Borrow", intensity: 86 },
  { asset: "USDM", metric: "Lend", intensity: 91 },
  { asset: "USDM", metric: "Mint", intensity: 74 },
  { asset: "USDM", metric: "Trade", intensity: 68 },
  { asset: "fGLD", metric: "Borrow", intensity: 60 },
  { asset: "fGLD", metric: "Lend", intensity: 66 },
  { asset: "fGLD", metric: "Mint", intensity: 42 },
  { asset: "fGLD", metric: "Trade", intensity: 58 },
  { asset: "Night", metric: "Borrow", intensity: 47 },
  { asset: "Night", metric: "Lend", intensity: 52 },
  { asset: "Night", metric: "Mint", intensity: 39 },
  { asset: "Night", metric: "Trade", intensity: 44 },
];

export const incentives: Incentive[] = [
  {
    id: "early-bird",
    name: "Early Bird Boost",
    type: "early_bird",
    description: "First 25% of campaign capacity earns a boosted lending rate.",
    rateLabel: "+2.5% APY",
    startDate: "2026-02-01",
    endDate: "2026-03-01",
    active: true,
  },
  {
    id: "loyalty",
    name: "Loyalty Boost",
    type: "loyalty",
    description: "Hold a qualifying USDM position for 30 days to unlock extra yield.",
    rateLabel: "+1.2% APY",
    startDate: "2026-02-10",
    endDate: "2026-04-10",
    active: true,
  },
  {
    id: "phase-2",
    name: "Phase 2 Liquidity Sprint",
    type: "campaign",
    description: "Campaign coordinated across NBX and Fluid to accelerate utilization.",
    rateLabel: "Campaign Bonus",
    startDate: "2026-03-10",
    endDate: "2026-04-01",
    active: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "month-1-review",
    title: "Month 1 Review: Coalition Momentum",
    excerpt: "How the USDM coalition crossed six-figure TVL and what it proves.",
    content:
      "## Proof of Growth\n\nIn the first month, coalition coordination pushed USDM utilization across lending markets.\n\n- TVL climbed above $100K\n- Liquidity became denser in core pairs\n- Incentives converted awareness into sustained participation\n\nThe focus next: velocity and institutional clarity.",
    author: "Coalition Desk",
    entity: "Moneta/W3I",
    date: "2026-02-15",
    tags: ["review", "growth"],
    phase: 1,
  },
  {
    slug: "mint-to-fluid-guide",
    title: "Mint to Fluid Journey",
    excerpt: "A practical path from minting USDM to lending and borrowing on Fluid.",
    content:
      "## Mint to Fluid\n\n1. Mint USDM on NBX\n2. Bridge funds to supported wallet\n3. Supply to Fluid\n4. Optionally borrow against your position\n\nThis flow is the core adoption loop for early coalition activity.",
    author: "NBX Team",
    entity: "NBX",
    date: "2026-02-12",
    tags: ["guide", "mint", "fluid"],
    phase: 1,
  },
  {
    slug: "rwa-narrative-cardano",
    title: "RWA on Cardano: Why USDM Matters",
    excerpt: "Institutional framing for stablecoin liquidity and on-chain credit rails.",
    content:
      "## Institutional Angle\n\nUSDM is not just a stablecoin unit — it is settlement infrastructure for RWA flows on Cardano.\n\nKey lens:\n- reliability\n- composability\n- proof-driven communications",
    author: "Wave Capital Research",
    entity: "Wave Capital",
    date: "2026-02-10",
    tags: ["institutional", "rwa"],
    phase: 2,
  },
];

export const timeline: TimelineMilestone[] = [
  {
    phase: 1,
    title: "Foundation",
    description: "Days 1-8: launch announcements, onboarding loops, first liquidity pushes.",
    window: "Days 1-8",
  },
  {
    phase: 2,
    title: "Acceleration",
    description: "Days 10-14: campaign amplification, recap content, partner updates.",
    window: "Days 10-14",
  },
  {
    phase: 3,
    title: "Long-term",
    description: "Monthly reviews, quarterly growth proofs, institutional narratives.",
    window: "Monthly/Quarterly",
  },
];

export const entities: CoalitionEntity[] = [
  {
    id: "nbx",
    name: "NBX",
    logo: "/logos/nbx.svg",
    description: "Exchange and minting gateway for USDM and related RWA flows.",
    website: "https://nbx.com",
    role: "Exchange + Mint",
  },
  {
    id: "fluid",
    name: "Fluid",
    logo: "/logos/fluid.svg",
    description: "Core lending and borrowing venue for USDM coalition liquidity.",
    website: "https://fluidtokens.com",
    role: "Lending Protocol",
  },
  {
    id: "moneta",
    name: "Moneta / W3I",
    logo: "/logos/moneta.svg",
    description: "USDM issuer and coalition coordination lead.",
    website: "https://moneta.digital",
    role: "Issuer",
  },
  {
    id: "wave",
    name: "Wave Capital",
    logo: "/logos/wave.svg",
    description: "Institutional strategy and growth capital partner.",
    website: "https://wave.example",
    role: "Capital Partner",
  },
  {
    id: "lenfi",
    name: "LenFI",
    logo: "/logos/lenfi.svg",
    description: "DeFi lending venue and proof-of-reserves reference collaborator.",
    website: "https://lenfi.io",
    role: "Lending Partner",
  },
];

export const tvlHistory: TvlHistoryPoint[] = [
  { date: "2026-02-01", total: 62100, transactions: 144 },
  { date: "2026-02-03", total: 70450, transactions: 190 },
  { date: "2026-02-05", total: 76820, transactions: 232 },
  { date: "2026-02-07", total: 83900, transactions: 281 },
  { date: "2026-02-09", total: 90110, transactions: 325 },
  { date: "2026-02-11", total: 96400, transactions: 388 },
  { date: "2026-02-13", total: 100500, transactions: 421 },
];

export const totalTVL = coalitionContributions.reduce((sum, item) => sum + item.tvl, 0);
