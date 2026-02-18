# SOP: TanStack Query Hooks

## When to Use
When creating data-fetching hooks for any API endpoint.

## File Location
```
/lib/hooks/use<Resource>.ts
```

## Template

```typescript
"use client";

import { useQuery } from '@tanstack/react-query';
import { fetchResource } from '@/lib/api';
import type { ResourceType } from '@/types';

export function useResource(options?: { filter?: string }) {
  return useQuery({
    queryKey: ['resource', options],
    queryFn: () => fetchResource(options),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

## Corresponding API Helper (`/lib/api.ts`)

```typescript
import type { ApiResponse, ResourceType } from '@/types';

export async function fetchResource(options?: { filter?: string }): Promise<ResourceType> {
  const params = new URLSearchParams();
  if (options?.filter) params.set('filter', options.filter);
  
  const res = await fetch(`/api/resource?${params}`);
  if (!res.ok) throw new Error(`Failed to fetch resource: ${res.status}`);
  
  const json: ApiResponse<ResourceType> = await res.json();
  return json.data;
}
```

## Rules

1. **Query keys must be deterministic** — Include all variables that affect the result.
2. **Stale time guidelines:**
   - Dashboard metrics: 5 minutes
   - Incentives: 10 minutes
   - Blog posts: 30 minutes
   - Static content (entities, guides): 60 minutes
3. **Always type the return** — Use the interfaces from `/types/`.
4. **Handle loading/error in components**, not in hooks:
   ```typescript
   const { data, isLoading, error } = useResource();
   if (isLoading) return <Skeleton />;
   if (error) return <ErrorFallback />;
   ```
5. **Keep hooks thin** — Fetching + caching only. No UI logic.

## Common Pitfalls
- Forgetting `"use client"` on the hook file (TanStack Query uses React context)
- Using unstable query keys (objects without stable reference → infinite re-fetches)
- Not wrapping the app in `QueryClientProvider`
