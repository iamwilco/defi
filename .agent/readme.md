# USDM DeFi Coalition Dashboard — Agent Documentation Index

> **For AI Agents:** Read this file first to understand available documentation and when to reference each resource.

This folder contains all documentation needed for AI agents to autonomously develop the USDM DeFi Coalition Dashboard. Use this index to navigate to the relevant docs for your current task.

---

## Quick Navigation

| Folder | Purpose | When to Read |
|--------|---------|--------------|
| [`/system`](./system/) | Architecture, data models, API endpoints | **First**, for any architectural decisions or understanding system design |
| [`/tasks`](./tasks/) | PRD, task list, lessons learned | When starting work, picking tasks, or after corrections |
| [`/SOPs`](./SOPs/) | Standard Operating Procedures | When creating components, mock data, API routes, or hooks |
| [`/skills`](./skills/) | Reusable patterns and playbooks | When working with Recharts, shadcn/ui, or specific technologies |
| [`/workflows`](./workflows/) | Step-by-step development workflows | When executing setup, build, test, deploy, or adding features |

---

## Folder Details

### `/system` — Architecture & Data Models

**The source of truth for all technical decisions.**

| File | Contents |
|------|----------|
| `architecture.md` | System overview, module architecture, state management, data flow, rendering strategy, performance & error handling |
| `data-models.md` | All TypeScript interfaces (Coalition, Blog, Incentives, Guides, Comms, API wrappers) |
| `api-endpoints.md` | REST endpoint contracts, request/response formats, query keys, stale times |

---

### `/tasks` — PRD & Task Management

| File | Contents |
|------|----------|
| `prd.md` | Full Product Requirements Document — scope, features (F-001 to F-035), phases, design specs, governance, risks |
| `todo.md` | Master task list with ~170 checkable items across 15 phases (T-001 to T-212) |
| `lessons.md` | Lessons learned log — update after every correction |

**Workflow:**
1. Read `prd.md` for context on any feature
2. Pick next unchecked task from `todo.md`
3. Follow the `/workflows/add-feature.md` workflow
4. Mark task complete in `todo.md`
5. Log any lessons in `lessons.md`

---

### `/SOPs` — Standard Operating Procedures

| SOP | When to Use |
|-----|-------------|
| `component-creation.md` | Creating any new React component |
| `mock-data.md` | Adding or modifying mock data |
| `api-routes.md` | Creating Next.js API route handlers |
| `tanstack-query-hooks.md` | Creating data-fetching hooks |

---

### `/skills` — Agent Skills

| Skill | Description |
|-------|-------------|
| [`git-commit-formatter`](./skills/git-commit-formatter/SKILL.md) | Conventional Commits formatter for task-level commits |
| [`recharts-patterns`](./skills/recharts-patterns/SKILL.md) | Dynamic imports, responsive charts, heatmaps, theming, tooltips |
| [`shadcn-ui-patterns`](./skills/shadcn-ui-patterns/SKILL.md) | Component usage, compositions, theming, loading states |

---

### `/workflows` — Development Workflows

| Workflow | Description | Trigger |
|----------|-------------|---------|
| [`setup.md`](./workflows/setup.md) | Initialize project with all dependencies | `/setup` |
| [`enable-hooks.md`](./workflows/enable-hooks.md) | Enable local git hooks for Conventional Commits | `/enable-hooks` |
| [`build.md`](./workflows/build.md) | Production build and verification | `/build` |
| [`test.md`](./workflows/test.md) | Run test suite | `/test` |
| [`commit.md`](./workflows/commit.md) | Create task-level commits with Conventional Commits | `/commit` |
| [`deploy.md`](./workflows/deploy.md) | Deploy to Vercel | `/deploy` |
| [`add-feature.md`](./workflows/add-feature.md) | End-to-end feature implementation | `/add-feature` |
| [`add-entity.md`](./workflows/add-entity.md) | Add a new coalition entity | `/add-entity` |

---

## Project Overview

**USDM DeFi Coalition Dashboard** — "Proof of Growth" — is a public-facing Next.js web application showcasing growth metrics, contributions, incentives, and educational content for the USDM DeFi coalition on Cardano.

**Repository:** `git@github.com:iamwilco/defi.git`

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14+ (App Router), React 18+, TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui (Radix UI) |
| **Charts** | Recharts |
| **State** | Zustand (client), TanStack Query v5 (server) |
| **Icons** | Lucide React |
| **Content** | React Markdown + remark-gfm |
| **Testing** | Jest + React Testing Library |
| **Deployment** | Vercel |

### Coalition Entities

| Entity | Role |
|--------|------|
| **Moneta/W3I** | USDM Issuer |
| **NBX** | Exchange, minting gateway, fGLD |
| **Fluid** | Lending/borrowing protocol |
| **Wave Capital** | Institutional capital |
| **LenFI** | DeFi lending, proof of reserves |

---

## Quick Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build & Test
npm run build        # Production build
npm run lint         # Run ESLint
npm test             # Run Jest tests
npm test -- --watch  # Tests in watch mode

# Git hook setup (one-time per clone)
cp .agent/git-hooks/commit-msg .git/hooks/commit-msg && chmod +x .git/hooks/commit-msg

# Deployment
git push origin main # Auto-deploys via Vercel
```

---

## Agent Operating Rules

1. **Plan First** — Write plan to `tasks/todo.md` before starting multi-step work
2. **Track Progress** — Mark items complete in `todo.md` as you go
3. **Verify Before Done** — Run `npm run build` and `npm test` before marking a phase complete
4. **Capture Lessons** — Update `tasks/lessons.md` after any correction
5. **Follow SOPs** — Use the SOP templates for components, data, API routes, hooks
6. **Simplicity First** — Minimal code, minimal impact, no over-engineering
7. **Fix Root Causes** — No temporary fixes, no band-aids
8. **Autonomous Bugs** — When given a bug, just fix it — logs, errors, tests, resolve
9. **Commit After Each Task** — After completing each task, create a commit using `skills/git-commit-formatter/SKILL.md` (`<type>[scope]: <description>`)