import type {
  AssetUtilization,
  BlogPost,
  CoalitionContribution,
  CoalitionEntity,
  ContentOwnershipPolicy,
  ComingSoonTeaser,
  CommsFeedItem,
  GuideEntry,
  HeatmapCell,
  Incentive,
  RecapHighlight,
  TimelineMilestone,
  TvlHistoryPoint,
} from "@/types";

export const coalitionContributions: CoalitionContribution[] = [
  { id: "1", entity: "NBX", asset: "USDM", tvl: 32000, lendingAmount: 15000, borrowingAmount: 7000 },
  { id: "2", entity: "Fluid", asset: "USDM", tvl: 28000, lendingAmount: 14000, borrowingAmount: 9000 },
  { id: "3", entity: "Moneta/W3I", asset: "USDM", tvl: 18000, lendingAmount: 6000, borrowingAmount: 3500 },
  { id: "4", entity: "Wave Capital", asset: "fGLD", tvl: 14000, lendingAmount: 4500, borrowingAmount: 2500 },
];

export const fourteenDayRecap: RecapHighlight[] = [
  {
    day: 1,
    title: "We Launched!",
    metricLabel: "Started With",
    metricValue: "$62.1K",
    detail: "Our teams synced posts and updates across channels to get everyone excited.",
  },
  {
    day: 4,
    title: "Liquidity Push",
    metricLabel: "Transactions",
    metricValue: "232",
    detail: "Early liquidity pushes from our partners improved depth across key pairs.",
  },
  {
    day: 8,
    title: "Guides Took Off",
    metricLabel: "Guide CTR",
    metricValue: "38%",
    detail: "Our Mint-to-Fluid guide became the go-to path for new users.",
  },
  {
    day: 12,
    title: "Reward Momentum",
    metricLabel: "Active Boosts",
    metricValue: "2",
    detail: "Loyalty and Early Bird perks kept participation strong all week.",
  },
  {
    day: 14,
    title: "Big Recap Milestone",
    metricLabel: "Total TVL",
    metricValue: "$100.5K",
    detail: "We crossed six-figure TVL with steady, healthy utilization growth.",
  },
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
    name: "Early Bird Perk",
    type: "early_bird",
    description: "Be one of the first 25% in and snag an extra 2.5% APY on your lending — a great way to get ahead.",
    rateLabel: "+2.5% APY",
    startDate: "2026-02-01",
    endDate: "2026-03-01",
    active: true,
  },
  {
    id: "loyalty",
    name: "Loyalty Perk",
    type: "loyalty",
    description: "Hold your qualifying USDM position for 30 days and unlock bonus yield — simple and fair.",
    rateLabel: "+1.2% APY",
    startDate: "2026-02-10",
    endDate: "2026-04-10",
    active: true,
  },
  {
    id: "phase-2",
    name: "Phase 2 Liquidity Sprint",
    type: "campaign",
    description: "A coordinated NBX + Fluid campaign to bring in more users and boost real USDM activity.",
    rateLabel: "Campaign Bonus",
    startDate: "2026-03-10",
    endDate: "2026-04-01",
    active: false,
  },
];

export const guidesCatalog: GuideEntry[] = [
  {
    id: "mint-fluid",
    title: "How to Mint USDM and Start Earning in Fluid",
    body: "A simple walkthrough to mint USDM on NBX, move it to your wallet, and start using it in Fluid with confidence.",
    steps: [
      "Connect account and mint USDM on NBX",
      "Move minted USDM into a supported non-custodial wallet",
      "Open Fluid, connect wallet, and supply USDM",
      "Review collateral and liquidation settings before any borrow action",
    ],
    mediaLabel: "Video Placeholder: Mint to Fluid Walkthrough",
    mediaType: "video",
    mediaUrl: "#",
  },
  {
    id: "fgld-flow",
    title: "fGLD in Action: Buy on NBX, Lend on Fluid",
    body: "Follow this easy path from buying gold-backed fGLD on NBX to putting it to work in Fluid markets.",
    steps: [
      "Buy fGLD on NBX during available market window",
      "Move fGLD to your custodial or self-custody Cardano wallet",
      "Bridge funds into the Fluid-connected wallet profile",
      "Supply fGLD to lending pools and monitor utilization/rate shifts",
    ],
    mediaLabel: "Diagram Placeholder: NBX -> Fluid fGLD Flow",
    mediaType: "diagram",
    mediaUrl: "#",
  },
  {
    id: "starter",
    title: "USDM Starter Loop in 5 Minutes",
    body: "New here? This beginner-friendly loop helps you start small, set up lending, and track reward eligibility.",
    steps: ["Understand campaign terms", "Start with small test position", "Track rewards weekly"],
    mediaLabel: "Checklist Placeholder: Beginner onboarding",
    mediaType: "checklist",
  },
  {
    id: "dca-flow",
    title: "USDM + fGLD DCA Plan",
    body: "Build a steady recurring position with simple weekly steps and an easy monthly rebalance check.",
    steps: [
      "Set your weekly DCA budget split between USDM and fGLD",
      "Execute purchases on NBX at fixed intervals",
      "Route assets to Fluid and adjust allocation monthly",
      "Track campaign eligibility and rebalance if one leg drifts",
    ],
    mediaLabel: "Checklist Placeholder: DCA schedule and rebalance planner",
    mediaType: "checklist",
  },
];

export const comingSoonTeasers: ComingSoonTeaser[] = [
  {
    id: "flip-app",
    title: "Flip App Campaign Rail",
    description: "Unified campaign discovery and reward tracking for coalition incentive programs.",
    target: "incentives",
    eta: "Q2 2026",
  },
  {
    id: "strike-integration",
    title: "Who's Next? Strike Partner Integration",
    description: "We're chatting with Strike and others to join the coalition — stay tuned for more ways to grow together.",
    target: "entities",
    eta: "Q2 2026",
  },
  {
    id: "institutional-pitch-kit",
    title: "Institutional RWA Pitch Kit",
    description: "Curated narrative and metrics package for institutional USDM growth conversations.",
    target: "institutional",
    eta: "Q3 2026",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "month-1-review",
    title: "Month 1 Wins: Hitting $100K TVL",
    excerpt: "Here's how we did it — and why that growth matters for users like you.",
    content:
      "## Proof of Growth\n\nIn our first month, teams across the coalition worked together to drive real USDM usage across lending markets.\n\n- TVL climbed above $100K\n- Liquidity got stronger in core pairs\n- Incentives helped turn interest into action\n\nNext up: faster growth and clearer institutional rails.",
    author: "Coalition Desk",
    entity: "Moneta/W3I",
    date: "2026-02-15",
    tags: ["review", "growth"],
    phase: 1,
  },
  {
    slug: "mint-to-fluid-guide",
    title: "Mint to Fluid Journey",
    excerpt: "A practical, beginner-friendly path from minting USDM to earning on Fluid.",
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
    excerpt: "A clear institutional view of stablecoin liquidity and on-chain credit rails.",
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
    title: "Getting Started",
    description: "We kicked off with big announcements, easy onboarding, and our first liquidity boosts.",
    window: "Days 1-8",
    startDate: "2026-02-01",
    endDate: "2026-02-08",
  },
  {
    phase: 2,
    title: "Acceleration",
    description: "We turned up momentum with campaign pushes, recap drops, and partner updates.",
    window: "Days 10-14",
    startDate: "2026-02-10",
    endDate: "2026-02-14",
  },
  {
    phase: 3,
    title: "Long-Term Momentum",
    description: "We keep the flywheel moving with monthly reviews, quarterly proof points, and institutional updates.",
    window: "Monthly/Quarterly",
    startDate: "2026-03-01",
    endDate: "2026-12-31",
  },
];

export const commsFeed: CommsFeedItem[] = [
  {
    id: "mint-fluid-video",
    kind: "video",
    title: "Watch: Mint to Fluid in Action",
    description: "A quick walkthrough showing how easy it is to go from minting to earning.",
    href: "#",
    date: "2026-02-16",
  },
  {
    id: "coalition-space-weekly",
    kind: "x_space",
    title: "Coalition Weekly Space",
    description: "Join our weekly chat on growth wins, campaign moves, and what's next for users.",
    href: "#",
    date: "2026-02-14",
  },
  {
    id: "phase-recap-article",
    kind: "article",
    title: "14 Days of USDM: Quick Wins Recap",
    description: "A friendly recap of incentive performance, TVL growth, and what we learned.",
    href: "#",
    date: "2026-02-15",
  },
];

export const entities: CoalitionEntity[] = [
  {
    id: "nbx",
    name: "NBX",
    logo: "/logos/nbx-logo.png",
    description: "Your entry point to mint and exchange USDM, plus explore real-world asset tokens with confidence.",
    website: "https://nbx.com",
    role: "Exchange + Mint",
  },
  {
    id: "fluid",
    name: "Fluid",
    logo: "/logos/fluid-logo.png",
    description: "Where users lend and borrow USDM with simple flows, clear rates, and active coalition liquidity.",
    website: "https://fluidtokens.com",
    role: "Lending Protocol",
  },
  {
    id: "moneta",
    name: "Moneta / W3I",
    logo: "/logos/moneta-logo.png",
    description: "The team behind USDM issuance and coalition coordination, helping everyone move in sync.",
    website: "https://moneta.global/",
    role: "Issuer",
  },
  {
    id: "wave",
    name: "Wave Capital",
    logo: "/logos/wave.svg",
    description: "Our institutional strategy partner, helping connect growth capital to real DeFi adoption.",
    website: undefined,
    role: "Capital Partner",
  },
];

export const contentOwnershipPolicies: ContentOwnershipPolicy[] = [
  {
    id: "nbx-policy",
    entity: "NBX",
    contentOwner: "NBX Content Team",
    removalRights: "entity_only",
    removalRequestPath: "ops@nbx.com",
  },
  {
    id: "fluid-policy",
    entity: "Fluid",
    contentOwner: "Fluid Communications",
    removalRights: "entity_only",
    removalRequestPath: "legal@fluidtokens.com",
  },
  {
    id: "moneta-policy",
    entity: "Moneta / W3I",
    contentOwner: "Moneta Editorial",
    removalRights: "shared_governance",
    removalRequestPath: "coalition-governance@moneta.global",
  },
  {
    id: "wave-policy",
    entity: "Wave Capital",
    contentOwner: "Wave Research",
    removalRights: "entity_only",
    removalRequestPath: "research@wave.example",
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
