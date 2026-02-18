# USDM DeFi Coalition Dashboard — Proof of Growth

Public-facing DeFi coalition dashboard for USDM growth on Cardano.

This project ships as a Next.js App Router application with query-backed UI sections, typed API routes, and reusable dashboard/content components.

---

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- TanStack Query v5
- Recharts
- Radix UI primitives
- Zustand
- React Markdown + remark-gfm
- Jest + React Testing Library

---

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: `http://localhost:3000`

---

## Environment Variables

Defined in `.env.example`:

- `BLOCKFROST_API_KEY=`
  - Server-only, optional in MVP
  - Reserved for future live chain integrations
- `NEXT_PUBLIC_APP_URL=http://localhost:3000`
  - Public app origin for links/metadata contexts

---

## Scripts

```bash
npm run dev        # start development server
npm run build      # production build
npm run start      # serve built app
npm run lint       # run ESLint
npm test           # run Jest tests
npm run test:watch # run Jest in watch mode
```

---

## App Routes

- `/` — Dashboard
- `/blog` — DeFi Pulse (posts + timeline)
- `/blog/[slug]` — Blog detail page
- `/guides` — How-To Library
- `/entities` — Coalition entities
- `/incentives` — Incentive mechanics
- `/comms` — Communications hub

---

## API Routes (MVP)

All API routes currently return typed mock-backed responses from `src/lib/mockData.ts` and include structured error payloads.

- `GET /api/tvl`
- `GET /api/utilization`
- `GET /api/incentives`
- `GET /api/blog`
- `GET /api/blog/[slug]`
- `GET /api/entities`
- `GET /api/comms`
- `GET /api/guides`

---

## Data Flow Pattern

1. API route returns typed JSON
2. `src/lib/api.ts` fetch helper consumes route
3. TanStack hook in `src/lib/hooks/*` wraps query config
4. `*DataSection` component handles loading/error/retry
5. Presentational component renders filtered/interactive UI

This pattern is used across dashboard/blog/entities/incentives/comms/guides sections.

---

## Project Structure

```text
src/
  app/               # pages + API routes
  components/        # UI and data-section components
  lib/               # api helpers, hooks, constants, mock data
  store/             # zustand stores
  types/             # domain and API types
  __tests__/         # component tests
public/
  logos/
.agent/              # agent docs, workflows, SOPs, skills
```

---

## Quality Gates

Before shipping:

```bash
npm run lint
npm test -- --runInBand
npm run build
```

---

## Deployment

Primary target: Vercel.

Typical flow:

1. Push to `main`
2. Vercel build runs
3. Verify `/api/*` and page routes in preview/production

Detailed deployment and workflow docs:

- `.agent/workflows/deploy.md`
- `.agent/workflows/build.md`
- `.agent/workflows/test.md`

---

## Commit Convention

This repository uses Conventional Commits for task-level changes.

- Reference: `.agent/skills/git-commit-formatter/SKILL.md`
- Optional local hook setup: `.agent/workflows/enable-hooks.md`
