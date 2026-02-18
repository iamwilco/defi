# SOP: Creating a New Component

## When to Use
When building any new React component for the dashboard.

## Steps

1. **Determine component type**
   - **Server Component** (default): No `"use client"`, can fetch data directly, no hooks/state.
   - **Client Component**: Needs `"use client"` if it uses hooks, state, event handlers, browser APIs, or Recharts.

2. **Choose the right directory**
   ```
   /components/layout/     → Navbar, Sidebar, Footer
   /components/dashboard/  → Dashboard-specific (charts, tables, hero)
   /components/blog/       → Blog list, cards, timeline
   /components/guides/     → Accordion, guide renderers
   /components/entities/   → Entity cards
   /components/incentives/ → Incentive cards
   /components/comms/      → Media embeds, banners
   /components/shared/     → Reusable across pages (DashboardCard, ThemeToggle, LoadingSpinner)
   ```

3. **File structure**
   ```typescript
   // components/feature/ComponentName.tsx
   "use client"; // only if needed
   
   import { ... } from "...";
   
   interface ComponentNameProps {
     // Always define props interface
   }
   
   export function ComponentName({ ... }: ComponentNameProps) {
     return ( ... );
   }
   ```

4. **Naming conventions**
   - PascalCase for component files and exports
   - Props interface: `ComponentNameProps`
   - One component per file (primary export)
   - Named exports only (no default exports)

5. **Styling**
   - Use Tailwind utility classes
   - Use `cn()` helper from `/lib/utils.ts` for conditional classes
   - Follow theme variables from `globals.css`
   - Always handle dark/light mode variants

6. **Accessibility**
   - Add `aria-label` to interactive elements
   - Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
   - Ensure keyboard navigation works
   - Add `role` attributes where HTML semantics are insufficient

7. **Write test**
   ```
   __tests__/components/ComponentName.test.tsx
   ```
   At minimum: renders without crashing + displays expected content.

## Common Pitfalls
- Forgetting `"use client"` when using hooks → build error
- Importing Recharts in server components → use `dynamic()` with `ssr: false`
- Not handling loading/error states
- Hardcoding colors instead of using theme variables
