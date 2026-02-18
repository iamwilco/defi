# USDM DeFi Coalition Dashboard - Proof of Growth

Public-facing coalition dashboard for USDM growth on Cardano, built with Next.js + React + TypeScript.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Recharts
- TanStack Query
- Zustand
- Radix UI primitives
- React Markdown
- Jest + React Testing Library

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev        # local dev
npm run build      # production build
npm run start      # run production server
npm run lint       # lint checks
npm test           # run tests
npm run test:watch # watch tests
```

## Environment

Copy and configure:

```bash
cp .env.example .env.local
```

Variables:

- `BLOCKFROST_API_KEY` (optional for MVP, used for future live chain data)
- `NEXT_PUBLIC_APP_URL`

## Routes

- `/` Dashboard
- `/blog` DeFi Pulse + blog list
- `/blog/[slug]` Blog detail
- `/guides` How-To Library
- `/entities` Coalition entities
- `/incentives` Incentive mechanics
- `/comms` Communications hub
- `/api/*` Mock API endpoints for MVP metrics

## Project Structure

```text
src/
  app/
  components/
  lib/
  store/
  types/
  __tests__/
public/
  logos/
.agent/
  tasks/
  system/
  workflows/
  SOPs/
  skills/
```

## Notes

- MVP currently serves mock data from `src/lib/mockData.ts`.
- API routes are designed to swap to live data providers later (e.g., Blockfrost).
- Commit messages follow Conventional Commits via `.agent/skills/git-commit-formatter/SKILL.md`.
