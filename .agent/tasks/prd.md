# PRD: USDM DeFi Coalition Dashboard — Proof of Growth

> **Version:** 1.0
> **Status:** Draft
> **Last Updated:** 2026-02-18
> **Owner:** Coalition Marketing Team (Moneta/W3I, NBX, Fluid, Wave Capital)

---

## 1. Executive Summary

The **USDM DeFi Coalition Dashboard** is a public-facing web application that serves as a joint marketing instrument for the USDM DeFi coalition. It showcases growth metrics, entity contributions, incentive campaigns, and educational content related to USDM (a fiat-backed stablecoin on Cardano) and associated assets (fGLD, Night, etc.).

**Primary goal:** Start with an MVP focused on simple contributions by the coalition across assets, then evolve to include advanced analytics, real-time blockchain data, and community engagement tools.

**Title:** "USDM DeFi Coalition Dashboard — Proof of Growth"

---

## 2. Problem Statement

The USDM coalition (NBX, Fluid, Moneta/W3I, Wave Capital, and others) needs a centralized, visually compelling dashboard to:

1. **Prove growth** — Show TVL, utilization, and velocity metrics to attract new participants.
2. **Coordinate marketing** — Provide a shared platform for blog posts, campaign announcements, and educational content.
3. **Incentivize participation** — Display ongoing boosts and campaigns to drive USDM adoption.
4. **Build trust** — Link to proof of reserves and third-party validations.

Currently, coalition data is fragmented across individual entity sites with no unified view.

---

## 3. Target Audience

| Segment | Need |
|---------|------|
| **DeFi users** | Understand USDM utility, find yield opportunities |
| **Institutional investors** | See TVL proof, reserve backing, RWA narrative |
| **Coalition entities** | Track contributions, publish content, coordinate campaigns |
| **Cardano community** | Discover USDM ecosystem, learn how to participate |
| **Potential partners** | Evaluate coalition for joining (Strike, etc.) |

---

## 4. Success Metrics

| Metric | MVP Target | 90-Day Target |
|--------|------------|---------------|
| Total USDM TVL displayed | $100K+ | $500K+ |
| Monthly unique visitors | 500 | 5,000 |
| Blog posts published | 3 | 15 |
| Coalition entities onboarded | 4 | 8 |
| Average session duration | 1 min | 3 min |

---

## 5. Scope

### 5.1 MVP (Phase 1 — Foundation)

**Timeline:** 2 weeks

#### Pages

| Page | Route | Description |
|------|-------|-------------|
| Dashboard (Home) | `/` | Hero + TVL metrics + asset utilization + heatmap + incentives overview + proof of reserves |
| Blog / DeFi Pulse | `/blog` | Blog list with markdown rendering + DeFi Pulse timeline |
| How-To Library | `/guides` | Guides with accordion layout, video placeholders |
| Entities | `/entities` | Coalition entity cards with logos, descriptions, links |
| Incentives | `/incentives` | Boost details, campaign cards, coming-soon teasers |
| Communications | `/comms` | X Space links, video embeds, NBX minting banner |

#### MVP Features

- **F-001 — Dashboard Metrics Cards:** Total USDM TVL (bar chart), asset-specific utilization (pie chart), coalition contributions table.
- **F-002 — Utilization Heatmap:** Recharts heatmap showing assets vs. activity levels (borrow/lend/mint).
- **F-003 — Incentives Overview:** Cards listing current campaigns (Early Bird Boost, Loyalty Boost).
- **F-004 — Proof of Reserves:** Card with external links and embedded summaries (Matteo's article, LenFI withdrawal).
- **F-005 — Blog System:** List view with title, excerpt, author/entity, date. Full post rendering with React Markdown.
- **F-006 — DeFi Pulse Timeline:** Phase 1-3 timeline component showing milestones.
- **F-007 — How-To Guides:** Accordion-based guides ("Mint to Fluid Journey", "fGLD Flow").
- **F-008 — Entity Profiles:** Cards for each coalition entity with branding, links, descriptions.
- **F-009 — Incentive Details Page:** Detailed boost mechanics, gaming prevention rules.
- **F-010 — Communications Hub:** Embedded media links, X Space recordings, minting banner.
- **F-011 — Dark/Light Theme:** Dark mode by default, toggleable via header.
- **F-012 — Responsive Layout:** Mobile-first design, stacked cards on small screens.
- **F-013 — Navigation:** Navbar with all page links + sidebar for quick metrics.
- **F-014 — Mock Data Layer:** All metrics served from `/lib/mockData.ts` with typed interfaces.
- **F-015 — SEO & Metadata:** Next.js metadata API for all pages.

#### MVP Data (Mock)

All data is mock for MVP. Structured as TypeScript interfaces in `/lib/mockData.ts`:

```typescript
interface CoalitionContribution {
  entity: string;
  asset: string;
  tvl: number;
  lendingAmount: number;
  borrowingAmount: number;
}

interface AssetUtilization {
  asset: string;
  totalSupply: number;
  utilized: number;
  utilizationRate: number;
}

interface HeatmapCell {
  asset: string;
  metric: string; // 'borrow' | 'lend' | 'mint' | 'trade'
  intensity: number; // 0-100
}

interface Incentive {
  id: string;
  name: string;
  type: 'early_bird' | 'loyalty' | 'campaign';
  description: string;
  rate: number;
  startDate: string;
  endDate: string;
  active: boolean;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown
  author: string;
  entity: string;
  date: string;
  tags: string[];
  phase: number;
}

interface CoalitionEntity {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  role: string;
  joinedDate: string;
}
```

### 5.2 Phase 2 — Acceleration (Post-MVP)

- **F-020 — Live Blockchain Data:** Integrate Blockfrost / custom APIs for real USDM metrics.
- **F-021 — Velocity Metrics:** Transaction count, total borrow/lend amounts over time.
- **F-022 — Advanced Heatmap:** Time-series heatmap with date range filters.
- **F-023 — Blog CMS Stub:** Admin-only content upload (auth gated).
- **F-024 — Incentive Tracking:** Live boost status, user eligibility checks.
- **F-025 — Infographics:** "14 Days of USDM" recap, phase milestone cards.
- **F-026 — Search & Filters:** Blog search, date filters (since/until), tag filtering.
- **F-027 — Institutional Pitch Page:** RWA into Cardano blog, oracle comparison (Finest vs. USDM).

### 5.3 Phase 3 — Long-Term

- **F-030 — Generalized USDM Dashboard:** Extend beyond coalition to all USDM activity.
- **F-031 — Partner Onboarding:** Self-service entity profile creation.
- **F-032 — Flip App Teaser:** Integration placeholder for Flip App.
- **F-033 — Notification System:** Email/push for new campaigns.
- **F-034 — Embedded Widget:** Embeddable dashboard widget for partner sites.
- **F-035 — Multi-chain Support:** If USDM expands beyond Cardano.

---

## 6. Technical Architecture

### 6.1 Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14+ (App Router) |
| **UI** | React 18+, TypeScript |
| **Styling** | Tailwind CSS 3.x |
| **Components** | shadcn/ui (Radix UI primitives) |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **State** | Zustand (global theme, filters) |
| **Data Fetching** | TanStack Query (React Query) v5 |
| **Markdown** | React Markdown + remark-gfm |
| **HTTP** | Fetch API (native) |
| **Testing** | Jest + React Testing Library |
| **Deployment** | Vercel |

### 6.2 Folder Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout (navbar, sidebar, providers)
│   ├── page.tsx                # Dashboard home
│   ├── blog/
│   │   ├── page.tsx            # Blog list
│   │   └── [slug]/page.tsx     # Blog post detail
│   ├── guides/
│   │   └── page.tsx            # How-to library
│   ├── entities/
│   │   └── page.tsx            # Coalition entities
│   ├── incentives/
│   │   └── page.tsx            # Incentive details
│   ├── comms/
│   │   └── page.tsx            # Communications hub
│   ├── api/
│   │   ├── tvl/route.ts        # TVL data endpoint
│   │   ├── utilization/route.ts
│   │   ├── incentives/route.ts
│   │   └── blog/route.ts
│   └── globals.css
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── dashboard/
│   │   ├── HeroSection.tsx
│   │   ├── TvlChart.tsx
│   │   ├── AssetUtilization.tsx
│   │   ├── ContributionsTable.tsx
│   │   ├── UtilizationHeatmap.tsx
│   │   ├── IncentivesOverview.tsx
│   │   └── ProofOfReserves.tsx
│   ├── blog/
│   │   ├── BlogList.tsx
│   │   ├── BlogCard.tsx
│   │   └── DeFiPulseTimeline.tsx
│   ├── guides/
│   │   └── GuideAccordion.tsx
│   ├── entities/
│   │   └── EntityCard.tsx
│   ├── incentives/
│   │   └── IncentiveCard.tsx
│   ├── comms/
│   │   └── MediaEmbed.tsx
│   └── shared/
│       ├── DashboardCard.tsx
│       ├── ThemeToggle.tsx
│       ├── LoadingSpinner.tsx
│       └── ErrorFallback.tsx
├── lib/
│   ├── mockData.ts             # All mock data
│   ├── api.ts                  # API helper functions
│   ├── utils.ts                # Formatting, helpers
│   ├── constants.ts            # App-wide constants
│   └── hooks/
│       ├── useCoalitionTVL.ts
│       ├── useUtilization.ts
│       ├── useIncentives.ts
│       └── useBlogPosts.ts
├── store/
│   └── useAppStore.ts          # Zustand store
├── types/
│   ├── index.ts                # Re-exports
│   ├── coalition.ts            # Coalition data types
│   ├── blog.ts                 # Blog types
│   └── incentives.ts           # Incentive types
├── public/
│   ├── logos/                  # Entity logos (placeholders)
│   └── images/                 # Static images
├── __tests__/
│   ├── components/
│   └── lib/
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### 6.3 Data Flow

```
[Mock Data / API Routes] 
        ↓
[TanStack Query hooks] ←→ [Zustand store (theme, filters)]
        ↓
[Server Components / Client Components]
        ↓
[Recharts visualizations + shadcn/ui cards]
```

- **MVP:** Mock data served from API routes → TanStack Query caches with 5-min stale time.
- **Phase 2:** Replace mock data with Blockfrost/custom API calls in API routes. No frontend changes needed.

### 6.4 API Routes (MVP)

All return mock data. Designed to be swapped for real integrations.

| Route | Method | Returns |
|-------|--------|---------|
| `/api/tvl` | GET | `{ total: number, contributions: CoalitionContribution[] }` |
| `/api/utilization` | GET | `{ assets: AssetUtilization[], heatmap: HeatmapCell[] }` |
| `/api/incentives` | GET | `{ active: Incentive[], upcoming: Incentive[] }` |
| `/api/blog` | GET | `{ posts: BlogPost[] }` |
| `/api/blog/[slug]` | GET | `BlogPost` |

---

## 7. Design Specifications

### 7.1 Theme

- **Default:** Dark mode
- **Primary palette:** Deep navy (`#0A0E27`), electric blue (`#3B82F6`), gold (`#F59E0B`)
- **Accent:** Green for positive metrics (`#10B981`), red for negative (`#EF4444`)
- **Typography:** Inter (headings), JetBrains Mono (numbers/data)
- **Card style:** Rounded corners, subtle border, glass-morphism effect on hover

### 7.2 Branding

Coalition entities with placeholder logos:
- **Moneta/W3I** — USDM issuer
- **NBX** — Exchange, minting gateway, fGLD
- **Fluid** — Lending/borrowing protocol
- **Wave Capital** — Institutional capital
- **LenFI** — DeFi lending (proof of reserves)

### 7.3 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| `< 640px` | Single column, stacked cards, hamburger nav |
| `640-1024px` | Two-column grid, collapsible sidebar |
| `> 1024px` | Full layout with sidebar + main content |

---

## 8. Content Strategy

### 8.1 Blog Content Plan

| Phase | Content | Cadence |
|-------|---------|---------|
| Phase 1 (Days 1-8) | Launch announcement, "Why USDM matters", entity introductions | Daily |
| Phase 2 (Days 10-14) | "14 Days of USDM" recap, utilization deep-dive, incentive explainer | Every 2 days |
| Phase 3 (Monthly+) | Monthly reviews, partner spotlights, RWA thesis, oracle comparisons | Monthly |

### 8.2 Convincing Framework

Each dashboard section pairs:
1. **Shallow convincing** — Big numbers (TVL, transaction count, entity count)
2. **Deep convincing** — Blog post / argument link explaining *why it matters*

---

## 9. Entity Governance

### 9.1 Joining

- Coalition is open to new entities contributing to USDM growth.
- FIFO / equal distribution model for liquidity coordination.
- New entities get a profile card on `/entities`.

### 9.2 Leaving

- Entities can leave at any time; their data remains as historical data points.
- Content ownership: "Content owned by respective entities; rights to remove content, but contribution data remains as historical record."

### 9.3 Content Ownership

Displayed in footer:
> "Content owned by respective coalition entities. Entities retain the right to remove their authored content. Contribution metrics remain as historical data points for dashboard integrity."

---

## 10. Security & Compliance

- **No auth for MVP** — Fully public dashboard.
- **API keys** — Stored in `.env.local`, never exposed to client. API routes run server-side.
- **Input sanitization** — Minimal user input; sanitize any search/filter params.
- **Content Security Policy** — Standard Next.js headers.
- **GDPR** — No personal data collected in MVP. Cookie banner placeholder for analytics.

---

## 11. Deployment

- **Primary:** Vercel (free tier sufficient for MVP).
- **Domain:** Standalone URL (e.g., `coalition.usdm.money` or hosted on NBX subdomain).
- **CI/CD:** Vercel auto-deploys from `main` branch.
- **Environments:** `preview` (PR branches), `production` (main).
- **Monitoring:** Vercel Analytics for MVP; consider Sentry for error tracking in Phase 2.

---

## 12. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Real API data not available | Blocks Phase 2 | Mock data layer fully functional standalone |
| Low coalition participation | Fewer contributions | Incentive campaigns + easy onboarding |
| Content staleness | Users don't return | Phase-based content cadence + automated DeFi Pulse |
| Performance with charts | Slow load on mobile | Lazy load Recharts, Suspense boundaries |
| Branding inconsistency | Unprofessional look | Design system in Tailwind config |

---

## 13. Open Questions

1. **Exact API endpoints** for live Cardano/USDM data (Blockfrost vs. custom).
2. **fGLD data source** — Does NBX expose an API for gold-backed asset metrics?
3. **Hosting decision** — Standalone Vercel vs. embedded in NBX/USDM site?
4. **Institutional page** — Separate pitch page or integrated into blog?
5. **Flip App integration** — Timeline and API surface for teaser?

---

## Appendix A: Reference Links

- Matteo's Proof of Reserves article: `[TBD]`
- LenFI withdrawal documentation: `[TBD]`
- Mint to Fluid video: `[TBD]`
- NBX fGLD documentation: `[TBD]`
- Cardano Blockfrost API: `https://blockfrost.io/`
