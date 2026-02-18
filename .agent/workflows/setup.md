---
description: Initialize the Next.js project with all dependencies and configuration
---

# Project Setup Workflow

## Prerequisites
- Node.js 18+ installed
- npm or pnpm available

## Steps

1. **Initialize Next.js project**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

2. **Install core dependencies**
```bash
npm install recharts zustand @tanstack/react-query @tanstack/react-query-devtools lucide-react react-markdown remark-gfm axios
```

3. **Install shadcn/ui**
```bash
npx shadcn@latest init
```
When prompted:
- Style: Default
- Base color: Slate
- CSS variables: Yes

4. **Install shadcn/ui components**
```bash
npx shadcn@latest add button card badge tooltip accordion sheet dialog tabs separator skeleton
```

5. **Install dev dependencies**
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @types/jest
```

6. **Create folder structure**
```bash
mkdir -p components/{layout,dashboard,blog,guides,entities,incentives,comms,shared}
mkdir -p lib/hooks
mkdir -p store
mkdir -p types
mkdir -p public/{logos,images}
mkdir -p __tests__/{components,lib}
```

7. **Create environment file**
Copy `.env.example` to `.env.local` and fill in values.

8. **Configure Tailwind theme**
Update `tailwind.config.ts` with custom colors from PRD §7.1:
- Deep navy: `#0A0E27`
- Electric blue: `#3B82F6`
- Gold: `#F59E0B`
- Success green: `#10B981`
- Error red: `#EF4444`

9. **Configure path aliases**
Ensure `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

10. **Verify setup**
```bash
npm run dev
```
Confirm app loads at `http://localhost:3000`.

## Validation
- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes
- [ ] Dev server starts successfully
- [ ] Tailwind classes apply correctly
- [ ] shadcn/ui components import without error
