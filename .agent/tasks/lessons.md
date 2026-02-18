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

<!-- Example format:
### 2026-02-18 — [Context]
**What happened:** ...
**Root cause:** ...
**Rule:** Always do X instead of Y when Z.
-->
