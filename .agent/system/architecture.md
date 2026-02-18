# System Architecture — USDM DeFi Coalition Dashboard

> **Version:** 1.0 | **Last Updated:** 2026-02-18

---

## 1. High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                      Vercel Edge                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Next.js 14+ (App Router)              │  │
│  │                                                     │  │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │  │
│  │  │  Pages   │  │   API    │  │  Static Assets │  │  │
│  │  │ (SSR/SSG)│  │  Routes  │  │   (public/)    │  │  │
│  │  └────┬─────┘  └────┬─────┘  └────────────────┘  │  │
│  │       │              │                              │  │
│  │  ┌────▼──────────────▼──────────────────────────┐  │  │
│  │  │            Component Layer                     │  │
│  │  │  ┌─────────┐ ┌──────────┐ ┌───────────────┐  │  │
│  │  │  │ Layout  │ │Dashboard │ │  Feature       │  │  │
│  │  │  │Components│ │Components│ │  Components    │  │  │
│  │  │  └─────────┘ └──────────┘ └───────────────┘  │  │
│  │  └──────────────────┬───────────────────────────┘  │  │
│  │                     │                               │  │
│  │  ┌──────────────────▼───────────────────────────┐  │  │
│  │  │              Data Layer                        │  │
│  │  │  ┌───────────┐  ┌────────┐  ┌─────────────┐  │  │
│  │  │  │ TanStack  │  │Zustand │  │  Mock Data   │  │  │
│  │  │  │  Query    │  │ Store  │  │  (/lib/)     │  │  │
│  │  │  └─────┬─────┘  └────────┘  └──────┬──────┘  │  │
│  │  └────────┼────────────────────────────┼────────┘  │  │
│  │           │                            │            │  │
│  │  ┌────────▼────────────────────────────▼────────┐  │  │
│  │  │          API Route Handlers                    │  │
│  │  │  /api/tvl  /api/utilization  /api/blog  ...   │  │
│  │  └───────────────────┬──────────────────────────┘  │  │
│  └──────────────────────┼──────────────────────────┘  │
└─────────────────────────┼──────────────────────────────┘
                          │ (Phase 2: replace mock)
                          ▼
              ┌──────────────────────┐
              │  External APIs       │
              │  - Blockfrost        │
              │  - Fluid API         │
              │  - NBX API           │
              │  - Custom endpoints  │
              └──────────────────────┘
```

---

## 2. Module Architecture

### 2.1 App Router Pages

Each page is a **Server Component** by default. Client interactivity is pushed to leaf components with `"use client"`.

```
app/
├── layout.tsx          → Root layout: Navbar, Sidebar, Footer, Providers
├── page.tsx            → Dashboard (SSR with Suspense)
├── blog/
│   ├── page.tsx        → Blog list (SSR)
│   └── [slug]/page.tsx → Blog detail (SSG with generateStaticParams)
├── guides/page.tsx     → How-to library (SSG)
├── entities/page.tsx   → Entity profiles (SSG)
├── incentives/page.tsx → Incentive details (SSR)
├── comms/page.tsx      → Communications (SSG)
├── not-found.tsx       → 404 page
└── api/                → Route handlers (serverless)
```

**Rendering strategy:**
- `/` (Dashboard) — SSR with revalidation (ISR, 5-min)
- `/blog` — SSR (list) + SSG (individual posts)
- `/guides`, `/entities`, `/comms` — SSG (static content)
- `/incentives` — SSR (may change frequently)

### 2.2 Component Hierarchy

```
RootLayout
├── Providers (QueryClient + Theme)
│   ├── Navbar
│   │   ├── Logo
│   │   ├── NavLinks
│   │   ├── ThemeToggle
│   │   └── MobileMenu (Sheet)
│   ├── Sidebar (collapsible)
│   │   ├── QuickMetric (Total TVL)
│   │   ├── QuickMetric (Active Entities)
│   │   └── QuickMetric (Active Campaigns)
│   ├── Main Content (page-specific)
│   └── Footer
```

### 2.3 State Management

| Store | Technology | Purpose |
|-------|-----------|---------|
| **Server state** | TanStack Query v5 | API data caching, auto-refetch, optimistic updates |
| **Client state** | Zustand | Theme preference, sidebar state, UI filters |
| **URL state** | Next.js searchParams | Blog filters, date ranges (Phase 2) |

**Zustand store shape:**
```typescript
interface AppState {
  theme: 'dark' | 'light';
  sidebarOpen: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}
```

**TanStack Query configuration:**
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 minutes
      gcTime: 10 * 60 * 1000,         // 10 minutes garbage collection
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});
```

---

## 3. Data Flow

### 3.1 MVP Data Flow (Sprint 1 Updated)

```
mockData.ts / live provider stub → API Route → TanStack Query Hook → Component → Recharts/UI
```

1. API route handler calls `getDataProvider()` from `src/lib/providers/index.ts`.
2. Provider is selected by `NEXT_PUBLIC_DATA_MODE` (`mock` or `live`).
3. Provider returns normalized payload shape for route response.
4. TanStack Query hook fetches from API route and caches result.
5. In `live` mode, hooks enable 5-minute polling via `QUERY_REFETCH_INTERVAL_MS`.
6. Component reads from hook, passes to chart/table/card.
7. Zustand handles UI-only state (theme, sidebar).

Provider modules:

- `src/lib/providers/mock.ts` — current mock-backed implementation
- `src/lib/providers/blockfrost.ts` — live-mode stub (health check + contract-preserving fallback)
- `src/lib/providers/fluid.ts` — reserved stub for future incentives integration

### 3.2 Phase 2 Data Flow

```
External API → Provider (transform) → API Route → TanStack Query → Component → Recharts/UI
```

Only provider internals should change as live integrations land. Frontend hooks and route response contracts stay stable.

---

## 4. Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 14+ App Router | SSR/SSG flexibility, API routes, Vercel deployment |
| Styling | Tailwind CSS | Rapid prototyping, responsive utilities, dark mode |
| UI Kit | shadcn/ui | Accessible, composable, no vendor lock-in |
| Charts | Recharts | React-native, composable, good heatmap support |
| State (server) | TanStack Query v5 | Caching, auto-refetch, devtools |
| State (client) | Zustand | Minimal boilerplate, no providers needed |
| Markdown | react-markdown + remark-gfm | Lightweight, supports GFM tables/links |
| Icons | Lucide React | Tree-shakeable, consistent style |
| Testing | Jest + RTL | Standard React testing, snapshots |
| Deployment | Vercel | Zero-config Next.js, preview deploys |

---

## 5. Performance Strategy

- **Code splitting:** Each page is automatically code-split by Next.js App Router.
- **Lazy loading:** Recharts components wrapped in `dynamic(() => import(...), { ssr: false })` to avoid SSR overhead.
- **Image optimization:** Use `next/image` for all logos and static images.
- **Suspense boundaries:** Each dashboard section wrapped in `<Suspense>` with skeleton fallbacks.
- **Font optimization:** Use `next/font` for Inter and JetBrains Mono.
- **Bundle analysis:** Use `@next/bundle-analyzer` in dev to monitor chunk sizes.

---

## 6. Error Handling Strategy

```
Component renders
  ├── Data loading → <Suspense fallback={<Skeleton />}>
  ├── Data error → <ErrorFallback onRetry={refetch} />
  ├── No data → <EmptyState message="..." />
  └── Success → Render content
```

- **API route errors:** Return appropriate HTTP status + error JSON. Never expose internal details.
- **Client errors:** TanStack Query `onError` → show toast or inline error.
- **Route errors:** `error.tsx` boundary per route segment catches rendering errors.
- **404:** `not-found.tsx` for missing pages/posts.

---

## 7. Security

- API keys in `.env.local` only — never in client components.
- API routes validate query params with Zod (Phase 2).
- `next.config.ts` enforces baseline security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy).
- API routes now apply route-level in-memory rate limiting and CORS response headers via `src/lib/security/*` helpers.
- `src/middleware.ts` includes a basic-auth guard stub for `/admin` routes, controlled by env flags.
- No user auth in MVP — all routes public.
- Content sanitization: `react-markdown` with `rehype-sanitize` for blog content.
