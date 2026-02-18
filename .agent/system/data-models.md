# Data Models — USDM DeFi Coalition Dashboard

> **Version:** 1.0 | **Last Updated:** 2026-02-18
> **Source of truth for all TypeScript interfaces used across the project.**

---

## 1. Coalition Types (`/types/coalition.ts`)

```typescript
export interface CoalitionContribution {
  /** Unique identifier */
  id: string;
  /** Entity name (e.g., "NBX", "Fluid") */
  entity: string;
  /** Entity ID reference */
  entityId: string;
  /** Asset name (e.g., "USDM", "fGLD", "Night") */
  asset: string;
  /** Total Value Locked in USD */
  tvl: number;
  /** Amount currently lent */
  lendingAmount: number;
  /** Amount currently borrowed */
  borrowingAmount: number;
  /** Timestamp of last update */
  lastUpdated: string;
}

export interface AssetUtilization {
  /** Asset identifier */
  asset: string;
  /** Display name */
  displayName: string;
  /** Total supply in circulation */
  totalSupply: number;
  /** Amount currently utilized (lent/borrowed/staked) */
  utilized: number;
  /** Utilization rate as percentage (0-100) */
  utilizationRate: number;
  /** Asset category */
  category: 'stablecoin' | 'rwa' | 'utility' | 'governance';
}

export interface HeatmapCell {
  /** Asset on x-axis */
  asset: string;
  /** Metric on y-axis: borrow, lend, mint, trade */
  metric: 'borrow' | 'lend' | 'mint' | 'trade';
  /** Intensity value 0-100 (maps to color scale) */
  intensity: number;
  /** Raw value for tooltip */
  rawValue: number;
  /** Display unit (e.g., "USDM", "txns") */
  unit: string;
}

export interface CoalitionEntity {
  /** Unique identifier */
  id: string;
  /** Entity display name */
  name: string;
  /** Path to logo in /public/logos/ */
  logo: string;
  /** Short tagline */
  tagline: string;
  /** Full description (1-2 paragraphs) */
  description: string;
  /** Website URL */
  website: string;
  /** Role in coalition */
  role: 'issuer' | 'exchange' | 'protocol' | 'capital' | 'lending';
  /** Role display label */
  roleLabel: string;
  /** Date entity joined coalition */
  joinedDate: string;
  /** Whether entity is currently active */
  active: boolean;
}

export interface TVLSummary {
  /** Total TVL across all entities */
  total: number;
  /** TVL change in last 24h (percentage) */
  change24h: number;
  /** TVL change in last 7d (percentage) */
  change7d: number;
  /** Per-entity contributions */
  contributions: CoalitionContribution[];
  /** Timestamp */
  lastUpdated: string;
}

export interface UtilizationSummary {
  /** Per-asset utilization */
  assets: AssetUtilization[];
  /** Heatmap grid data */
  heatmap: HeatmapCell[];
}
```

---

## 2. Blog Types (`/types/blog.ts`)

```typescript
export interface BlogPost {
  /** URL-friendly slug */
  slug: string;
  /** Post title */
  title: string;
  /** Short excerpt (max 200 chars) */
  excerpt: string;
  /** Full content in Markdown */
  content: string;
  /** Author name */
  author: string;
  /** Coalition entity that authored this */
  entity: string;
  /** Entity ID reference */
  entityId: string;
  /** Publication date (ISO 8601) */
  date: string;
  /** Tags for filtering */
  tags: string[];
  /** Coalition phase this relates to */
  phase: 1 | 2 | 3;
  /** Optional cover image path */
  coverImage?: string;
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Whether post is featured on dashboard */
  featured: boolean;
}

export interface BlogCategory {
  /** Category slug */
  slug: string;
  /** Display name */
  name: string;
  /** Post count */
  count: number;
}

export interface Phase {
  /** Phase number */
  number: 1 | 2 | 3;
  /** Phase title */
  title: string;
  /** Phase description */
  description: string;
  /** Start date (ISO 8601) */
  startDate: string;
  /** End date (ISO 8601, optional for ongoing) */
  endDate?: string;
  /** Phase status */
  status: 'completed' | 'active' | 'upcoming';
  /** Key milestones */
  milestones: PhaseMilestone[];
}

export interface PhaseMilestone {
  /** Milestone title */
  title: string;
  /** Date achieved */
  date: string;
  /** Short description */
  description: string;
  /** Whether milestone is completed */
  completed: boolean;
}
```

---

## 3. Incentive Types (`/types/incentives.ts`)

```typescript
export type IncentiveType = 'early_bird' | 'loyalty' | 'campaign' | 'referral';

export interface Incentive {
  /** Unique identifier */
  id: string;
  /** Campaign name */
  name: string;
  /** Type of incentive */
  type: IncentiveType;
  /** Full description */
  description: string;
  /** Short summary for cards */
  summary: string;
  /** Boost rate (e.g., 1.5 for 50% boost) */
  rate: number;
  /** Display rate string (e.g., "50% APY Boost") */
  rateDisplay: string;
  /** Campaign start date */
  startDate: string;
  /** Campaign end date */
  endDate: string;
  /** Whether currently active */
  active: boolean;
  /** Eligible assets */
  eligibleAssets: string[];
  /** Requirements to qualify */
  requirements: string[];
  /** Rules to prevent gaming */
  antiGamingRules: string[];
}

export interface Campaign {
  /** Unique identifier */
  id: string;
  /** Campaign title */
  title: string;
  /** Description */
  description: string;
  /** Related incentives */
  incentiveIds: string[];
  /** Campaign phase */
  phase: 1 | 2 | 3;
  /** Status */
  status: 'active' | 'upcoming' | 'ended';
}

export interface IncentivesSummary {
  /** Currently active incentives */
  active: Incentive[];
  /** Upcoming incentives */
  upcoming: Incentive[];
  /** Ended incentives (historical) */
  ended: Incentive[];
}
```

---

## 4. Guide Types (`/types/guides.ts`)

```typescript
export interface Guide {
  /** Unique identifier */
  id: string;
  /** Guide title */
  title: string;
  /** Short description */
  description: string;
  /** Difficulty level */
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  /** Estimated time in minutes */
  estimatedTime: number;
  /** Related entity */
  entityId: string;
  /** Step-by-step instructions */
  steps: GuideStep[];
  /** Tags */
  tags: string[];
  /** Video URL (optional) */
  videoUrl?: string;
}

export interface GuideStep {
  /** Step number */
  number: number;
  /** Step title */
  title: string;
  /** Step content (markdown) */
  content: string;
  /** Optional image/screenshot path */
  image?: string;
}
```

---

## 5. Communication Types (`/types/comms.ts`)

```typescript
export type MediaType = 'x_space' | 'video' | 'article' | 'banner';

export interface MediaItem {
  /** Unique identifier */
  id: string;
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Media type */
  type: MediaType;
  /** External URL */
  url: string;
  /** Thumbnail/preview image path */
  thumbnail?: string;
  /** Date published */
  date: string;
  /** Related entity */
  entityId?: string;
  /** Whether to feature prominently */
  featured: boolean;
}

export interface Banner {
  /** Unique identifier */
  id: string;
  /** Banner headline */
  headline: string;
  /** Banner body text */
  body: string;
  /** CTA button text */
  ctaText: string;
  /** CTA link */
  ctaUrl: string;
  /** Background style */
  variant: 'primary' | 'gold' | 'gradient';
  /** Whether banner is currently shown */
  active: boolean;
}
```

---

## 6. API Response Wrappers

```typescript
export interface ApiResponse<T> {
  data: T;
  meta: {
    timestamp: string;
    source: 'mock' | 'live';
    cacheHit: boolean;
  };
}

export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}
```

---

## 7. App Store Types (`/store/useAppStore.ts`)

```typescript
export interface AppState {
  /** Current theme */
  theme: 'dark' | 'light';
  /** Sidebar visibility */
  sidebarOpen: boolean;
  /** Toggle theme between dark/light */
  toggleTheme: () => void;
  /** Toggle sidebar open/closed */
  toggleSidebar: () => void;
  /** Set sidebar state explicitly */
  setSidebarOpen: (open: boolean) => void;
}
```

---

## Entity Relationships

```
CoalitionEntity (1) ──── (N) CoalitionContribution
CoalitionEntity (1) ──── (N) BlogPost
CoalitionEntity (1) ──── (N) Guide
CoalitionEntity (1) ──── (N) MediaItem

Asset ──── (N) CoalitionContribution
Asset ──── (N) AssetUtilization
Asset ──── (N) HeatmapCell
Asset ──── (N) Incentive.eligibleAssets

Phase (1) ──── (N) BlogPost
Phase (1) ──── (N) PhaseMilestone
Phase (1) ──── (N) Campaign

Campaign (1) ──── (N) Incentive
```
