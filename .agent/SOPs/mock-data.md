# SOP: Working with Mock Data

## When to Use
When adding or modifying mock data for any feature.

## Architecture

All mock data lives in `/lib/mockData.ts`. This is the single source of truth for MVP data.

## Rules

1. **Always match type definitions** from `/types/`. Import the interface and type-check your mock data:
   ```typescript
   import { CoalitionContribution } from '@/types/coalition';
   
   export const coalitionContributions: CoalitionContribution[] = [
     { ... } // TypeScript will enforce shape
   ];
   ```

2. **Use realistic values**
   - TVL should sum to ~$100K for MVP
   - Dates should be in ISO 8601 format
   - Percentages should be 0-100
   - Slugs should be URL-friendly (lowercase, hyphens)

3. **Keep data consistent**
   - Entity IDs must match across contributions, blog posts, guides
   - Asset names must be consistent (always "USDM", not "usdm" or "Usdm")
   - Dates should follow the Phase timeline (Phase 1: Days 1-8, Phase 2: Days 10-14)

4. **Naming convention**
   - Export arrays with plural names: `coalitionContributions`, `blogPosts`, `incentives`
   - Export summary objects with descriptive names: `tvlSummary`, `utilizationSummary`

## Adding New Mock Data

1. Define the type in `/types/`
2. Add data to `/lib/mockData.ts`
3. Create/update API route in `/app/api/` to serve it
4. Create/update TanStack Query hook in `/lib/hooks/`

## Phase 2 Migration

When replacing mock data with live API data:
- Only change the API route handler internals
- Mock data remains as fallback for errors
- Frontend hooks stay unchanged
