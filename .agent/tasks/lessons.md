# Lessons Learned — USDM DeFi Coalition Dashboard

> **Purpose:** After ANY correction from the user, log the pattern here. Review at session start.
> **Format:** Date | Context | Lesson | Rule to follow

---

## Patterns

### 2026-02-18 — Sprint Execution Discipline
**What happened:** User asked to begin immediate implementation and explicitly requested commits after each sprint with documentation updates.
**Root cause:** Sprint close-out requirements were not being treated as first-class deliverables.
**Rule:** For every sprint, include three mandatory close-out steps: (1) docs update, (2) quality gate run, (3) Conventional Commit.

### 2026-02-18 — Live Data Migration Safety
**What happened:** Needed to introduce live data plumbing without breaking existing frontend contracts.
**Root cause:** Direct mock imports in API routes make phased migration harder and increase regression risk.
**Rule:** Route handlers should resolve data via provider interfaces so mock/live source changes remain isolated from hooks and UI.

### 2026-02-18 — Feature Slice Delivery for UI Expansions
**What happened:** Sprint 2 required multiple cross-page enhancements (incentives, guides, blog, entities) under one delivery window.
**Root cause:** Scattered component-only edits risk missing associated data/types/routes/tests updates.
**Rule:** Ship feature slices end-to-end: update types + mock data + UI components + page wiring + regression tests + docs in one pass.

### 2026-02-18 — API Hardening Consistency
**What happened:** Security hardening touched every API route (rate limit, CORS, OPTIONS).
**Root cause:** One-off route edits drift quickly and create inconsistent behavior across endpoints.
**Rule:** Keep shared security behavior in `src/lib/security/*` utilities and apply uniformly across all route handlers.

### 2026-02-18 — Content Governance During CMS Migration
**What happened:** While moving blog content to Git markdown, ownership/removal responsibilities also needed to be explicit.
**Root cause:** Content source migration without governance metadata leaves policy ambiguous across entities.
**Rule:** Pair any CMS/content-source migration with a typed ownership model and a visible admin/policy surface.

### 2026-02-18 — Design System Overhaul Across Existing Codebase
**What happened:** Full aesthetic overhaul required touching every page/component while keeping existing data flow and tests intact.
**Root cause:** Design tokens were scattered as inline classes; no centralized design system utilities.
**Rule:** Centralize design primitives (glassmorphism, glow, accents) in globals.css as reusable utilities. Use dynamic imports + client wrappers for heavy 3D/animation libs to avoid SSR issues. Add IntersectionObserver polyfill to jest.setup when introducing Framer Motion `whileInView`.

<!-- Example format:
### 2026-02-18 — [Context]
**What happened:** ...
**Root cause:** ...
**Rule:** Always do X instead of Y when Z.
-->
