# Feedback-Driven Task List — USDM DeFi Coalition Dashboard

> **Created:** 2026-02-18
> **Source:** `.agent/tasks/feedback.md`
> **Legend:** ⬜ Todo | 🔄 In Progress | ✅ Done | ❌ Blocked

---

## Sprint 1 — P0: Core Gaps (High Priority)

### 1A: Dark/Light Theme (Actually Working)

- [x] **FB-001** Add CSS custom properties for theme colors in `globals.css` (dark and light palettes)
- [x] **FB-002** Replace hardcoded dark palette classes (`bg-slate-950`, `text-slate-100`, etc.) with CSS variable-backed or `dark:` variant classes across all components
- [x] **FB-003** Update `useAppStore` with `persist` middleware (Zustand) to save theme preference in `localStorage`
- [ ] **FB-004** Verify theme toggle visually switches all pages between dark and light modes
- [ ] **FB-005** Test: theme persists across page reloads

### 1B: Interactive Utilization Heatmap

- [x] **FB-010** Refactor `UtilizationHeatmap` from CSS grid to a Recharts-based heatmap (ScatterChart or custom cells)
- [x] **FB-011** Add interactive tooltips showing asset name, metric, and exact intensity value on hover
- [x] **FB-012** Add a color scale legend component below the heatmap
- [x] **FB-013** Add asset toggle filters (show/hide specific assets in the heatmap)
- [x] **FB-014** Wrap in `dynamic(() => ..., { ssr: false })` for client-only rendering (Recharts)
- [x] **FB-015** Test: heatmap renders without crashing with mock data

### 1C: Mock/Live Data Toggle + Blockfrost Stub

- [x] **FB-020** Add `NEXT_PUBLIC_DATA_MODE=mock` to `.env.example` and `.env.local`
- [x] **FB-021** Create `src/lib/providers/blockfrost.ts` — typed Blockfrost client stub (fetch USDM policy TVL)
- [x] **FB-022** Create `src/lib/providers/mock.ts` — re-export existing mock data functions as a provider interface
- [x] **FB-023** Create `src/lib/providers/index.ts` — factory that returns mock or live provider based on `DATA_MODE`
- [x] **FB-024** Refactor `/api/tvl/route.ts` to call provider factory instead of importing mock data directly
- [x] **FB-025** Refactor `/api/utilization/route.ts` to use provider factory
- [x] **FB-026** Refactor `/api/incentives/route.ts` to use provider factory
- [x] **FB-027** Refactor `/api/blog/route.ts` to use provider factory (blog stays mock for now)
- [x] **FB-028** Add `refetchInterval` option to TanStack hooks (configurable, default 5 min in live mode)
- [x] **FB-029** Stub `src/lib/providers/fluid.ts` for future Fluid API integration
- [x] **FB-030** Document provider pattern in README and `.agent/system/architecture.md`

---

## Sprint 2 — P1: Feature Enhancements (Medium Priority)

### 2A: Boost Calculator / Incentive Simulator

- [x] **FB-040** Create `src/components/incentives/BoostCalculator.tsx` — client component with inputs: position size ($), hold duration (days), selected boost
- [x] **FB-041** Add calculation logic: estimated bonus yield = base rate × boost multiplier × (duration / 365)
- [x] **FB-042** Add visual output: projected earnings card with breakdown
- [x] **FB-043** Add gaming prevention timeline: progress bar showing 30-day hold requirement vs. user input
- [x] **FB-044** Add eligibility status indicator to each `IncentiveCard` (eligible / not yet / ineligible)
- [x] **FB-045** Wire `BoostCalculator` into `/incentives` page below the grid
- [x] **FB-046** Test: calculator renders and produces correct output for sample inputs

### 2B: Coming Soon Teasers

- [x] **FB-050** Create `src/components/shared/ComingSoonCard.tsx` — reusable teaser card (title, description, "Coming Soon" badge, optional icon)
- [x] **FB-051** Add teaser data to `mockData.ts`: Flip App, Strike integration, institutional RWA pitch
- [x] **FB-052** Add Coming Soon section to `/incentives` page (Flip App, future campaigns)
- [x] **FB-053** Add Coming Soon section to `/entities` page (Strike, potential partners)
- [x] **FB-054** Create `/institutional` stub page — RWA into Cardano narrative, oracle comparison placeholder

### 2C: Guides — Richer Media & Content

- [x] **FB-060** Create `src/components/shared/EmbedPlaceholder.tsx` — thumbnail + title + "Watch" CTA, accepts `type` (video/diagram/checklist)
- [x] **FB-061** Replace `mediaLabel` text in `GuideAccordion` with `EmbedPlaceholder` component
- [x] **FB-062** Expand "fGLD Flow" guide steps: "Buy gold on NBX → custodial wallet → lend on Fluid" with granular sub-steps
- [x] **FB-063** Expand "Mint to Fluid Journey" guide with diagram placeholder and detailed walkthrough
- [x] **FB-064** Add DCA (Dollar Cost Averaging) guide entry to `guidesCatalog` in mock data
- [x] **FB-065** Update guide `GuideEntry` type to include optional `mediaType` and `mediaUrl` fields

### 2D: Phases Infographic / "14 Days of USDM"

- [x] **FB-070** Create `src/components/blog/PhasesInfographic.tsx` — Recharts-based visual timeline (horizontal bar or milestone chart)
- [x] **FB-071** Add phase progress indicators (progress bar per phase based on current date vs. start/end)
- [x] **FB-072** Create `src/components/blog/FourteenDaysRecap.tsx` — "14 Days of USDM" recap component with milestone cards, icons, and metric callouts
- [x] **FB-073** Wire infographic into `/blog` page alongside existing `DeFiPulseTimeline`
- [x] **FB-074** Add recap data to `mockData.ts` — daily highlights for Days 1-14

---

## Sprint 3 — P2: Polish & Hardening (Low Priority)

### 3A: Accessibility & Performance Audit

- [x] **FB-080** Add skip-to-content link in `layout.tsx` (hidden, visible on focus)
- [x] **FB-081** Add `aria-label` or descriptive text alternatives to all Recharts charts
- [x] **FB-082** Convert entity logo placeholders to `next/image` with proper sizing
- [ ] **FB-083** Run Lighthouse audit on all pages — document scores
- [ ] **FB-084** Fix any Lighthouse a11y issues (contrast, labels, heading order)
- [ ] **FB-085** Fix any Lighthouse performance issues (LCP, CLS, FID)
- [ ] **FB-086** Keyboard navigation test: verify all interactive elements are reachable and operable via keyboard
- [ ] **FB-087** Add `loading="lazy"` or Suspense boundaries to heavy sections not yet deferred

### 3B: Security Hardening

- [x] **FB-090** Add rate limiting to API routes (in-memory token bucket or `next-rate-limit`)
- [x] **FB-091** Add CORS headers to API routes (configurable allowed origins)
- [x] **FB-092** Add Content Security Policy headers in `next.config.js`
- [x] **FB-093** Add basic auth middleware stub for future `/admin` route
- [ ] **FB-094** Run `npm audit` and fix any reported vulnerabilities
- [x] **FB-095** Verify `.env.local` is in `.gitignore` and no secrets are exposed

### 3C: README & Documentation Polish

- [ ] **FB-100** Take 2-3 dashboard screenshots → save to `public/images/screenshots/`
- [ ] **FB-101** Add screenshots to README (dashboard hero, blog list, heatmap)
- [ ] **FB-102** Add Vercel deploy button badge to README
- [ ] **FB-103** Add `.agent/` explanation section to README — what it contains, how it supports AI-assisted dev and commit formatting
- [ ] **FB-104** Create OG social preview image for link sharing (`public/images/og-preview.png`)
- [ ] **FB-105** Verify content ownership footer text (PRD §9.3) renders on all pages

---

## Sprint 4 — P3: Backlog (Future)

### 4A: CMS Integration

- [ ] **FB-110** Evaluate Sanity vs. Git-based markdown workflow for blog content
- [ ] **FB-111** Implement chosen CMS integration for blog posts
- [ ] **FB-112** Add entity content ownership model (who owns content + removal rights)
- [ ] **FB-113** Create `/admin` route stub behind basic auth for content preview

### 4B: Deployment & Community

- [ ] **FB-120** Deploy to Vercel production
- [ ] **FB-121** Add live demo URL to README
- [ ] **FB-122** Set up Vercel preview branches for coalition PR feedback
- [ ] **FB-123** Consider Sentry integration for error monitoring

### 4C: Advanced Data Features

- [ ] **FB-130** Integrate Cardano explorer API for velocity/transaction metrics
- [ ] **FB-131** Add oracle comparison component (Finest vs. USDM per coalition notes)
- [ ] **FB-132** Add time-series heatmap with date range picker (F-022 from PRD)
- [ ] **FB-133** Add live incentive tracking with user eligibility checks (F-024 from PRD)

---

## Cross-Cutting Concerns

These apply to every sprint:

- [x] **FB-X01** Run `npm run lint` after each sprint — zero warnings
- [x] **FB-X02** Run `npm test -- --runInBand` after each sprint — all pass
- [x] **FB-X03** Run `npm run build` after each sprint — clean production build
- [x] **FB-X04** Commit after each task group using Conventional Commits (`feat[scope]: ...`, `fix[scope]: ...`, `docs[scope]: ...`)
- [x] **FB-X05** Update `.agent/tasks/lessons.md` with any corrections or learnings

---

## Sprint Sequencing

| Sprint | Focus | Estimated Sessions | Dependencies |
|--------|-------|-------------------|--------------|
| **Sprint 1** | Theme, heatmap, data toggle | 3-4 | None |
| **Sprint 2** | Calculator, teasers, guides, infographic | 3-4 | Sprint 1 (provider pattern for calculator) |
| **Sprint 3** | A11y, security, docs | 2-3 | Sprint 1-2 (audit after features land) |
| **Sprint 4** | CMS, deploy, advanced data | 3+ | Sprint 1 (live data provider) |
