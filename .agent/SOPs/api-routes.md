# SOP: Creating API Routes

## When to Use
When creating or modifying Next.js API route handlers.

## File Location
```
/app/api/<resource>/route.ts         → Collection endpoints
/app/api/<resource>/[param]/route.ts → Individual resource endpoints
```

## Template

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mockDataExport } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  try {
    // Parse query params if needed
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get('filter');

    // Get data (mock for MVP, replace with external API in Phase 2)
    let data = mockDataExport;
    
    // Apply filters
    if (filter) {
      data = data.filter(item => item.field === filter);
    }

    return NextResponse.json({
      data,
      meta: {
        timestamp: new Date().toISOString(),
        source: 'mock' as const,
        cacheHit: false,
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        error: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred',
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}
```

## Rules

1. **Always wrap in try/catch** — Never let unhandled errors reach the client.
2. **Use the standard response wrapper** — `{ data, meta }` for success, `{ error, message, statusCode }` for errors.
3. **Validate query params** — Check types and ranges. Return 400 for invalid input.
4. **No sensitive data in responses** — API keys, internal paths, etc. stay server-side.
5. **Document in api-endpoints.md** — Update `.agent/system/api-endpoints.md` when adding/changing endpoints.

## Phase 2 Pattern

```typescript
// Replace mock data import with:
async function fetchFromBlockfrost() {
  const res = await fetch('https://cardano-mainnet.blockfrost.io/api/v0/...', {
    headers: { 'project_id': process.env.BLOCKFROST_API_KEY! },
    next: { revalidate: 300 }, // 5-min ISR cache
  });
  if (!res.ok) throw new Error(`Blockfrost error: ${res.status}`);
  return res.json();
}
```

## Common Pitfalls
- Forgetting to export the HTTP method function (must be named `GET`, `POST`, etc.)
- Not handling the case where external API is down (fall back to mock data)
- Exposing `.env` variables in response payloads
