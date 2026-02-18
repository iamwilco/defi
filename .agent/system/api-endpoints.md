# API Endpoints — USDM DeFi Coalition Dashboard

> **Version:** 1.0 | **Last Updated:** 2026-02-18
> **All endpoints return JSON. MVP serves mock data; Phase 2 swaps to live sources.**

---

## Base URL

- **Local:** `http://localhost:3000/api`
- **Production:** `https://<domain>/api`

---

## Response Format

All successful responses wrap data in:
```json
{
  "data": { ... },
  "meta": {
    "timestamp": "2026-02-18T14:00:00Z",
    "source": "mock",
    "cacheHit": false
  }
}
```

Error responses:
```json
{
  "error": "NOT_FOUND",
  "message": "Blog post not found",
  "statusCode": 404
}
```

---

## Endpoints

### 1. TVL Data

#### `GET /api/tvl`

Returns total coalition TVL and per-entity contributions.

**Query params:** None (MVP)

**Response:**
```typescript
{
  data: {
    total: 102500,
    change24h: 2.5,
    change7d: 15.3,
    contributions: CoalitionContribution[],
    lastUpdated: "2026-02-18T14:00:00Z"
  }
}
```

**TanStack Query key:** `['tvl']`
**Stale time:** 5 minutes

---

### 2. Utilization Data

#### `GET /api/utilization`

Returns asset utilization breakdown and heatmap grid data.

**Query params:** None (MVP)

**Response:**
```typescript
{
  data: {
    assets: AssetUtilization[],
    heatmap: HeatmapCell[]
  }
}
```

**TanStack Query key:** `['utilization']`
**Stale time:** 5 minutes

---

### 3. Incentives

#### `GET /api/incentives`

Returns all incentives grouped by status.

**Query params:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `status` | string | `all` | Filter: `active`, `upcoming`, `ended`, `all` |

**Response:**
```typescript
{
  data: {
    active: Incentive[],
    upcoming: Incentive[],
    ended: Incentive[]
  }
}
```

**TanStack Query key:** `['incentives', { status }]`
**Stale time:** 10 minutes

---

### 4. Blog Posts

#### `GET /api/blog`

Returns list of blog posts, optionally filtered.

**Query params:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `phase` | number | — | Filter by phase (1, 2, 3) |
| `tag` | string | — | Filter by tag |
| `entity` | string | — | Filter by entity ID |
| `featured` | boolean | — | Only featured posts |
| `limit` | number | 20 | Max results |
| `offset` | number | 0 | Pagination offset |

**Response:**
```typescript
{
  data: {
    posts: BlogPost[],
    total: number,
    hasMore: boolean
  }
}
```

**TanStack Query key:** `['blog', filters]`
**Stale time:** 5 minutes

---

#### `GET /api/blog/[slug]`

Returns a single blog post by slug.

**Path params:**
| Param | Type | Description |
|-------|------|-------------|
| `slug` | string | URL-friendly post slug |

**Response:**
```typescript
{
  data: BlogPost
}
```

**Error (404):**
```json
{
  "error": "NOT_FOUND",
  "message": "Blog post with slug 'xyz' not found",
  "statusCode": 404
}
```

**TanStack Query key:** `['blog', slug]`
**Stale time:** 30 minutes (individual posts change rarely)

---

### 5. Entities

#### `GET /api/entities`

Returns all coalition entities.

**Query params:** None

**Response:**
```typescript
{
  data: {
    entities: CoalitionEntity[],
    totalActive: number
  }
}
```

**TanStack Query key:** `['entities']`
**Stale time:** 30 minutes

---

### 6. Guides

#### `GET /api/guides`

Returns all how-to guides.

**Query params:** None

**Response:**
```typescript
{
  data: {
    guides: Guide[]
  }
}
```

**TanStack Query key:** `['guides']`
**Stale time:** 60 minutes (static content)

---

### 7. Communications

#### `GET /api/comms`

Returns media items and banners.

**Query params:** None

**Response:**
```typescript
{
  data: {
    media: MediaItem[],
    banners: Banner[]
  }
}
```

**TanStack Query key:** `['comms']`
**Stale time:** 30 minutes

---

## Phase 2 Endpoints (Planned)

| Endpoint | Description | External Source |
|----------|-------------|----------------|
| `GET /api/velocity` | Transaction counts, volumes over time | Blockfrost |
| `GET /api/reserves` | Proof of reserve data | Custom API |
| `GET /api/tvl/history` | Historical TVL with date range | Blockfrost + cache |
| `POST /api/admin/blog` | Create/update blog post | Auth-gated |

---

## Rate Limiting (Phase 2)

- Public endpoints: 100 req/min per IP
- Admin endpoints: 20 req/min per authenticated user

---

## CORS

- MVP: Same-origin only (served from same Next.js app)
- Phase 2: Allow specific partner origins for widget embedding
