---
description: Run Lighthouse and keyboard accessibility audit for Sprint 3
---

# Lighthouse + Keyboard A11y Audit Workflow

## Prerequisites

- A Chromium browser installed locally (Google Chrome or Chromium)
- Dev server running (`npm run dev`)
- Project dependencies installed (`npm install`)

## Steps

1. **Set Chrome path (macOS example)**

```bash
export CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

2. **Run Lighthouse on key routes**

```bash
npx lighthouse http://localhost:3000 --quiet --chrome-flags="--headless" --output=json --output-path=./lighthouse-home.json
npx lighthouse http://localhost:3000/blog --quiet --chrome-flags="--headless" --output=json --output-path=./lighthouse-blog.json
npx lighthouse http://localhost:3000/incentives --quiet --chrome-flags="--headless" --output=json --output-path=./lighthouse-incentives.json
```

3. **Capture score summary**

Record category scores in `.agent/tasks/sprint3-audit-notes.md` for:
- Performance
- Accessibility
- Best Practices
- SEO

4. **Keyboard navigation verification**

Manual checklist:
- Use `Tab`/`Shift+Tab` from top of page.
- Verify skip link appears and moves focus to main content.
- Verify all nav links, buttons, and form controls are reachable.
- Verify menu toggle works without mouse on mobile viewport.
- Verify focus indicator is visible on interactive elements.

5. **Document findings and fixes**

- For each failure, add file + line references.
- Implement fixes.
- Rerun `npm run lint`, `npm test -- --runInBand`, `npm run build`.
