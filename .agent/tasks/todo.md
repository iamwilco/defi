# USDM DeFi Coalition Dashboard — Master Task List

> **Last Updated:** 2026-02-18
> **PRD Reference:** `.agent/tasks/prd.md`
> **Legend:** ⬜ Todo | 🔄 In Progress | ✅ Done | ❌ Blocked

---

## Phase 0: Project Setup

- [ ] **T-001** Initialize Next.js 14+ project with TypeScript and App Router
- [ ] **T-002** Install and configure Tailwind CSS (with `@tailwindcss/forms`)
- [ ] **T-003** Install core dependencies: Recharts, Zustand, TanStack Query v5, Lucide React
- [ ] **T-004** Install UI dependencies: shadcn/ui (init + base components: Button, Card, Badge, Tooltip, Accordion, Dialog, Sheet)
- [ ] **T-005** Install content dependencies: react-markdown, remark-gfm
- [ ] **T-006** Configure `tailwind.config.ts` with custom theme (colors, fonts, breakpoints per PRD §7.1)
- [ ] **T-007** Set up folder structure: `/components`, `/lib`, `/store`, `/types`, `/public/logos`, `/public/images`, `/__tests__`
- [ ] **T-008** Create `.env.example` with placeholder keys (BLOCKFROST_API_KEY, NEXT_PUBLIC_APP_URL)
- [ ] **T-009** Create `tsconfig.json` path aliases (`@/components`, `@/lib`, `@/types`, `@/store`)
- [ ] **T-010** Set up Jest + React Testing Library configuration
- [ ] **T-011** Create `.gitignore` (node_modules, .env.local, .next, etc.)

---

## Phase 1: Type System & Mock Data

- [ ] **T-020** Define types in `/types/coalition.ts`: `CoalitionContribution`, `AssetUtilization`, `HeatmapCell`, `CoalitionEntity`
- [ ] **T-021** Define types in `/types/blog.ts`: `BlogPost`, `BlogCategory`, `Phase`
- [ ] **T-022** Define types in `/types/incentives.ts`: `Incentive`, `IncentiveType`, `Campaign`
- [ ] **T-023** Create `/types/index.ts` re-exporting all types
- [ ] **T-024** Create `/lib/mockData.ts` — coalition contributions (5 entities, 4+ assets, realistic TVL numbers summing to ~$100K)
- [ ] **T-025** Create `/lib/mockData.ts` — asset utilization data (USDM, fGLD, Night, ADA pairs)
- [ ] **T-026** Create `/lib/mockData.ts` — heatmap data (assets × metrics matrix, intensity values)
- [ ] **T-027** Create `/lib/mockData.ts` — incentives data (3 active, 2 upcoming campaigns)
- [ ] **T-028** Create `/lib/mockData.ts` — blog posts (3+ posts with full markdown content, phase tags)
- [ ] **T-029** Create `/lib/mockData.ts` — entity profiles (NBX, Fluid, Moneta/W3I, Wave Capital, LenFI)
- [ ] **T-030** Create `/lib/mockData.ts` — guides data (3 how-to guides with step content)
- [ ] **T-031** Create `/lib/mockData.ts` — communications data (X Spaces, videos, banners)
- [ ] **T-032** Create `/lib/constants.ts` — app-wide constants (refresh intervals, color palettes, nav items)
- [ ] **T-033** Create `/lib/utils.ts` — formatting helpers (currency, percentage, date, number abbreviation)

---

## Phase 2: API Routes (Mock)

- [ ] **T-040** Create `/app/api/tvl/route.ts` — returns total TVL + contributions array
- [ ] **T-041** Create `/app/api/utilization/route.ts` — returns asset utilization + heatmap data
- [ ] **T-042** Create `/app/api/incentives/route.ts` — returns active + upcoming incentives
- [ ] **T-043** Create `/app/api/blog/route.ts` — returns blog post list (filterable by phase/tag)
- [ ] **T-044** Create `/app/api/blog/[slug]/route.ts` — returns single blog post by slug

---

## Phase 3: Data Fetching Hooks

- [ ] **T-050** Set up TanStack Query provider in `/app/layout.tsx`
- [ ] **T-051** Create `/lib/api.ts` — typed fetch wrappers for each API route
- [ ] **T-052** Create `/lib/hooks/useCoalitionTVL.ts` — query hook with 5-min stale time
- [ ] **T-053** Create `/lib/hooks/useUtilization.ts` — query hook for assets + heatmap
- [ ] **T-054** Create `/lib/hooks/useIncentives.ts` — query hook for incentive campaigns
- [ ] **T-055** Create `/lib/hooks/useBlogPosts.ts` — query hook with optional filters

---

## Phase 4: Global State & Providers

- [ ] **T-060** Create `/store/useAppStore.ts` — Zustand store (theme: dark/light, sidebarOpen, activeFilters)
- [ ] **T-061** Create theme provider component with CSS variables for dark/light mode
- [ ] **T-062** Create `/app/providers.tsx` — wraps QueryClientProvider + ThemeProvider
- [ ] **T-063** Wire providers into `/app/layout.tsx`

---

## Phase 5: Layout Components

- [ ] **T-070** Create `/components/layout/Navbar.tsx` — logo, nav links (Dashboard, Blog, Guides, Entities, Incentives, Comms), theme toggle, mobile hamburger
- [ ] **T-071** Create `/components/layout/Sidebar.tsx` — quick metrics panel (Total TVL, Active Entities, Active Campaigns), collapsible on mobile
- [ ] **T-072** Create `/components/layout/Footer.tsx` — content ownership notice, coalition branding, links
- [ ] **T-073** Create `/app/layout.tsx` — root layout composing Navbar + Sidebar + Footer + Providers
- [ ] **T-074** Create `/app/globals.css` — Tailwind directives, CSS variables for theme, custom scrollbar, glass-morphism utilities
- [ ] **T-075** Create `/components/shared/ThemeToggle.tsx` — dark/light toggle button with Lucide icons

---

## Phase 6: Shared Components

- [ ] **T-080** Create `/components/shared/DashboardCard.tsx` — reusable card with title, value, trend indicator, optional chart slot
- [ ] **T-081** Create `/components/shared/LoadingSpinner.tsx` — skeleton/spinner for Suspense boundaries
- [ ] **T-082** Create `/components/shared/ErrorFallback.tsx` — graceful error state with retry button
- [ ] **T-083** Initialize shadcn/ui components: Button, Card, Badge, Tooltip, Accordion, Sheet, Dialog, Tabs, Separator

---

## Phase 7: Dashboard Page (Home `/`)

- [ ] **T-090** Create `/app/page.tsx` — dashboard page layout with sections
- [ ] **T-091** Create `/components/dashboard/HeroSection.tsx` — headline "The $100K USDM Coalition is Live", big TVL number, blog teaser blurb
- [ ] **T-092** Create `/components/dashboard/TvlChart.tsx` — Recharts BarChart showing TVL by entity (stacked or grouped)
- [ ] **T-093** Create `/components/dashboard/AssetUtilization.tsx` — Recharts PieChart or donut showing asset breakdown
- [ ] **T-094** Create `/components/dashboard/ContributionsTable.tsx` — table with entity, asset, TVL, lending, borrowing columns; sortable
- [ ] **T-095** Create `/components/dashboard/UtilizationHeatmap.tsx` — Recharts ScatterChart or custom heatmap (assets × metrics, color-coded by intensity)
- [ ] **T-096** Create `/components/dashboard/IncentivesOverview.tsx` — 2-3 cards summarizing active campaigns with CTAs
- [ ] **T-097** Create `/components/dashboard/ProofOfReserves.tsx` — card with external links (Matteo's article, LenFI), embedded summaries
- [ ] **T-098** Add Suspense boundaries and loading states to all dashboard sections
- [ ] **T-099** Add SEO metadata to dashboard page (title, description, OG tags)

---

## Phase 8: Blog / DeFi Pulse Page (`/blog`)

- [ ] **T-100** Create `/app/blog/page.tsx` — blog list page with search and phase filters
- [ ] **T-101** Create `/components/blog/BlogList.tsx` — renders list of BlogCard components
- [ ] **T-102** Create `/components/blog/BlogCard.tsx` — card with title, excerpt, author, entity badge, date, tags
- [ ] **T-103** Create `/app/blog/[slug]/page.tsx` — blog post detail with React Markdown rendering
- [ ] **T-104** Create `/components/blog/DeFiPulseTimeline.tsx` — vertical timeline showing Phase 1/2/3 milestones with dates and descriptions
- [ ] **T-105** Add SEO metadata to blog pages (dynamic OG tags per post)

---

## Phase 9: How-To Library (`/guides`)

- [ ] **T-110** Create `/app/guides/page.tsx` — guides page layout
- [ ] **T-111** Create `/components/guides/GuideAccordion.tsx` — expandable accordion for each guide with steps, video placeholder, entity attribution
- [ ] **T-112** Add guide content: "Mint to Fluid Journey" (step-by-step with video placeholder)
- [ ] **T-113** Add guide content: "fGLD Flow: Buy gold on NBX, lend on Fluid"
- [ ] **T-114** Add guide content: "Getting Started with USDM on Cardano"
- [ ] **T-115** Add SEO metadata to guides page

---

## Phase 10: Entities Page (`/entities`)

- [ ] **T-120** Create `/app/entities/page.tsx` — entities page layout
- [ ] **T-121** Create `/components/entities/EntityCard.tsx` — card with logo, name, role, description, website link, joined date
- [ ] **T-122** Add placeholder logos to `/public/logos/` (nbx.svg, fluid.svg, moneta.svg, wave.svg, lenfi.svg)
- [ ] **T-123** Add "Joining the Coalition" and "Leaving the Coalition" info sections
- [ ] **T-124** Add SEO metadata to entities page

---

## Phase 11: Incentives Page (`/incentives`)

- [ ] **T-130** Create `/app/incentives/page.tsx` — incentives page layout
- [ ] **T-131** Create `/components/incentives/IncentiveCard.tsx` — card with name, type badge, rate, dates, description, active status
- [ ] **T-132** Add "How Incentives Work" explainer section (Early Bird, Loyalty mechanics)
- [ ] **T-133** Add "Gaming Prevention" section (30-day hold, rules)
- [ ] **T-134** Add "Coming Soon" teaser section (Flip App, future campaigns)
- [ ] **T-135** Add subtitle: "Kickback to subsidize interest rates"
- [ ] **T-136** Add SEO metadata to incentives page

---

## Phase 12: Communications Page (`/comms`)

- [ ] **T-140** Create `/app/comms/page.tsx` — communications hub layout
- [ ] **T-141** Create `/components/comms/MediaEmbed.tsx` — reusable embed for X Spaces, YouTube/video links
- [ ] **T-142** Add NBX minting banner component with yield opportunity CTA
- [ ] **T-143** Add X Space recordings list
- [ ] **T-144** Add video embeds section (Mint to Fluid video placeholder)
- [ ] **T-145** Add SEO metadata to comms page

---

## Phase 13: Testing

- [ ] **T-150** Write unit test: `DashboardCard` renders title, value, trend correctly
- [ ] **T-151** Write unit test: `TvlChart` renders with mock data without crashing
- [ ] **T-152** Write unit test: `ContributionsTable` renders correct number of rows
- [ ] **T-153** Write unit test: `BlogCard` renders all fields
- [ ] **T-154** Write unit test: `EntityCard` renders logo, name, description
- [ ] **T-155** Write unit test: `IncentiveCard` renders active/inactive states
- [ ] **T-156** Write unit test: `useCoalitionTVL` hook returns expected data shape
- [ ] **T-157** Write unit test: formatting utils (currency, percentage, date)
- [ ] **T-158** Verify all pages render without errors (basic smoke tests)

---

## Phase 14: Polish & Documentation

- [ ] **T-160** Create `/README.md` — setup instructions, architecture overview, how to add features, deployment
- [ ] **T-161** Add loading skeletons to all data-dependent sections
- [ ] **T-162** Add ARIA attributes to interactive components (charts, accordions, navigation)
- [ ] **T-163** Add `not-found.tsx` for 404 page
- [ ] **T-164** Add `error.tsx` error boundaries for each route segment
- [ ] **T-165** Optimize images and add next/image where applicable
- [ ] **T-166** Review mobile responsiveness on all pages
- [ ] **T-167** Performance audit: verify lazy loading of Recharts, code splitting
- [ ] **T-168** Final Tailwind theme review (consistent colors, spacing, typography)
- [ ] **T-169** Verify dark/light theme toggle works across all pages

---

## Phase 15: Deployment

- [ ] **T-170** Configure `next.config.js` for production (images, redirects)
- [ ] **T-171** Set up Vercel project with environment variables
- [ ] **T-172** Deploy to Vercel preview environment
- [ ] **T-173** Verify production build (no TypeScript errors, no build warnings)
- [ ] **T-174** Configure custom domain (if available)

---

## Post-MVP Backlog (Phase 2+)

- [ ] **T-200** Integrate Blockfrost API for live USDM TVL data
- [ ] **T-201** Add velocity metrics (transaction count, amounts over time)
- [ ] **T-202** Add time-series heatmap with date range picker
- [ ] **T-203** Stub admin auth for blog CMS
- [ ] **T-204** Add live incentive tracking with eligibility checks
- [ ] **T-205** Create "14 Days of USDM" infographic component
- [ ] **T-206** Add blog search functionality
- [ ] **T-207** Add date range filters (since/until) for metrics
- [ ] **T-208** Create institutional pitch page (RWA into Cardano, oracle comparison)
- [ ] **T-209** Add partner section (Strike, potential partners)
- [ ] **T-210** Generalize dashboard beyond coalition push
- [ ] **T-211** Embeddable widget for partner sites
- [ ] **T-212** Notification system for new campaigns

---

## Review / Retrospective

> _Fill in after each phase completion._

### Phase 0 Review
- Completed:
- Issues:
- Lessons:

### Phase 1 Review
- Completed:
- Issues:
- Lessons:

<!-- Continue for each phase -->
