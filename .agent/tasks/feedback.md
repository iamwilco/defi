# Feedback & Improvement Areas — USDM DeFi Coalition Dashboard

> **Version:** 1.0
> **Date:** 2026-02-18
> **Status:** Actionable
> **Coverage Estimate:** MVP is ~90% complete; this document captures the remaining 10% plus Phase 2+ enhancements.

---

## 1. Live Data Integration

### Current State

All data is mocked via `src/lib/mockData.ts` → API routes → TanStack hooks. The architecture is designed for swap-in (API route internals change, frontend stays the same).

### Gaps

| Area | Detail | Priority |
|------|--------|----------|
| **Mock/Live toggle** | No `NEXT_PUBLIC_DATA_MODE` env var to switch between mock and live sources | High |
| **Blockfrost integration** | No real Cardano TVL fetch in `/api/tvl` | High |
| **Fluid endpoints** | No live incentives/rewards data from Fluid | Medium |
| **Velocity/transactions** | `tvlHistory` has a `transactions` field but no real chain source; consider Cardano explorer APIs | Medium |
| **Refresh intervals** | TanStack stale time is 5 min (via `revalidate: 300`), but no configurable refresh or polling for "real-time" feel | Low |
| **Oracle comparison** | Notes mention Finest vs. USDM — no data source or display component | Low |

### Recommendations

1. Add `NEXT_PUBLIC_DATA_MODE=mock|live` to `.env.example` and `.env.local`.
2. Create `src/lib/providers/blockfrost.ts` — typed Blockfrost client with `BLOCKFROST_API_KEY`.
3. In each API route, branch on `DATA_MODE`: return mock data or call the live provider.
4. Add TanStack `refetchInterval` (e.g., 5-10 min) to hooks for polling when in live mode.
5. Stub a `src/lib/providers/fluid.ts` for future Fluid API integration.

---

## 2. Feature Gaps from PRD / Prompt

### 2.1 Heatmap & Charts

**Current:** `UtilizationHeatmap` is a static CSS-grid of colored cards. No Recharts interactivity, no tooltips, no filtering.

**Needed:**
- Convert to a Recharts `ScatterChart` or custom SVG heatmap with interactive tooltips showing exact intensity values.
- Add asset/metric filter controls (e.g., toggle specific assets on/off).
- Color scale legend.

### 2.2 Incentives Logic — Simulator / Calculator

**Current:** Cards display boost details + a "Gaming Prevention" text section with 30-day hold rule.

**Needed:**
- **Boost calculator component**: Input position size + hold duration → estimated bonus yield.
- **Gaming prevention simulation**: Show visually how the 30-day hold affects eligibility (e.g., a timeline/progress bar).
- **Eligibility status indicator** per incentive card.

### 2.3 Coming Soon / Teasers

**Current:** No teaser stubs for Flip App, Strike integration, or institutional RWA pitches.

**Needed:**
- "Coming Soon" cards on `/incentives` for Flip App and Strike.
- Institutional pitch section or separate `/institutional` route (RWA into Cardano narrative).
- Teaser banner component reusable across pages.

### 2.4 Guides — Richer Content & Media

**Current:** `GuideAccordion` has steps + a `mediaLabel` text placeholder. No embedded video frames or expanded step content.

**Needed:**
- Replace `mediaLabel` text with an actual embed-ready video placeholder (`<iframe>` stub or thumbnail with play button).
- Expand "fGLD Flow" guide with granular steps: "Buy gold on NBX → custodial wallet → lend on Fluid."
- Add a "Mint to Fluid Journey" diagram/visual.
- Consider an `EmbedPlaceholder` shared component (thumbnail + title + "Watch" CTA).

### 2.5 Admin / Content Management

**Current:** No CMS. Blog posts are hardcoded in `mockData.ts`.

**Needed (Phase 2+):**
- Evaluate Sanity CMS or Git-based markdown workflow for blog content.
- Entity content ownership model: "who owns content" + removal rights per PRD §9.
- Admin route stub (`/admin`) behind basic auth for content preview.

### 2.6 Phases Infographic

**Current:** `DeFiPulseTimeline` is a vertical text-based timeline with date-range filters.

**Needed:**
- Recharts-based visual timeline or infographic component.
- "14 Days of USDM" recap visual (milestone cards with icons, metrics callouts).
- Phase progress indicators (e.g., progress bar per phase).

---

## 3. Polish & Quality

### 3.1 Dark/Light Theme

**Current:** `ThemeToggle` exists in Navbar, Zustand store tracks `darkMode`, `document.documentElement.classList.toggle("dark")` is called. However, Tailwind classes are hardcoded to dark palette (`bg-slate-950`, `text-slate-100`, etc.) — toggling has no visible effect.

**Needed:**
- Implement Tailwind `dark:` variant classes throughout all components, OR
- Use CSS custom properties (already partially stubbed in `globals.css`) that swap with the class toggle.
- Persist theme preference in `localStorage` via Zustand middleware.

### 3.2 Accessibility & Performance

**Current:** ARIA attributes added to filters, error states, date inputs. Radix handles accordion a11y.

**Needed:**
- Run Lighthouse audit and fix any a11y/SEO/perf issues.
- Lazy load images with `next/image` (currently no images beyond SVG logo placeholders).
- Ensure all charts have `aria-label` or descriptive text alternatives.
- Add skip-to-content link in layout.
- Keyboard navigation testing for all interactive elements.

### 3.3 Error Handling & Security

**Current:** API routes have `try/catch` with structured error JSON. `ErrorFallback` with retry.

**Needed:**
- Rate limiting middleware for API routes (e.g., simple in-memory or `next-rate-limit`).
- CORS headers if going public beyond Vercel same-origin.
- Basic auth middleware stub for potential sensitive admin sections.
- CSP headers in `next.config.js`.

### 3.4 Hosting & Integration

**Current:** README documents Vercel deployment. No preview URL, no demo link.

**Needed:**
- Deploy to Vercel and add demo URL to README.
- Test preview branches for coalition feedback workflow.
- Consider embed strategy (Webflow embed or standalone — prompt prioritized standalone).

### 3.5 Community & Visibility

**Current:** Repo exists but no demo link, no screenshots in README.

**Needed:**
- Add dashboard screenshots to `public/images/` and reference in README.
- Add Vercel deploy button badge to README.
- Consider social preview image (OG image for link sharing).

---

## 4. Minor Nitpicks

| Item | Detail | Effort |
|------|--------|--------|
| **README screenshots** | Add 2-3 screenshots (dashboard, blog, heatmap) | Small |
| **`.agent/` docs** | Clarify in README how `.agent/` ties into auto-deploys and commit formatting | Small |
| **`npm audit`** | Run and fix any dependency vulnerabilities | Small |
| **React 19 compat** | Watch for ecosystem issues (Recharts, Radix, Testing Library) | Ongoing |
| **Content ownership footer** | PRD §9.3 footer text exists but verify it renders on all pages | Small |

---

## 5. Summary — Priority Matrix

| Priority | Area | Estimated Effort |
|----------|------|-----------------|
| **P0 — High** | Mock/live data toggle + Blockfrost stub | 1-2 sessions |
| **P0 — High** | Interactive heatmap with Recharts + tooltips | 1 session |
| **P0 — High** | Dark/light theme actually working | 1 session |
| **P1 — Medium** | Boost calculator / incentive simulator | 1 session |
| **P1 — Medium** | Coming Soon teasers (Flip App, Strike, institutional) | 1 session |
| **P1 — Medium** | Guides media embeds + expanded steps | 1 session |
| **P1 — Medium** | Phases infographic / "14 Days" recap visual | 1 session |
| **P2 — Low** | Lighthouse audit + perf fixes | 1 session |
| **P2 — Low** | Rate limiting + CORS + CSP headers | 1 session |
| **P2 — Low** | README screenshots + deploy badge + .agent docs | < 1 session |
| **P3 — Backlog** | CMS integration (Sanity / Git-based) | Multi-session |
| **P3 — Backlog** | Admin auth stub | 1 session |
| **P3 — Backlog** | Vercel deploy + demo link | < 1 session |
