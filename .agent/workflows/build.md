---
description: Build and verify the production bundle
---

# Build Workflow

## Steps

// turbo
1. **Run production build**
```bash
npm run build
```

2. **Check for TypeScript errors**
If build fails, check output for TS errors. Fix type issues before proceeding.

// turbo
3. **Run linter**
```bash
npm run lint
```

4. **Check bundle size** (optional)
```bash
ANALYZE=true npm run build
```
Requires `@next/bundle-analyzer` in `next.config.js`.

5. **Test production locally**
```bash
npm run start
```
Verify at `http://localhost:3000`.

## Validation
- [ ] Build completes with 0 errors
- [ ] No TypeScript errors
- [ ] No lint warnings
- [ ] Pages load correctly in production mode
