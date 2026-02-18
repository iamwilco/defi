# Sprint 3 Audit Notes

> Date: 2026-02-18

## 1) npm audit

Command run:

```bash
npm audit --json
```

Result summary:

- Total vulnerabilities: **10**
- Severity: **moderate only**
- Scope: ESLint toolchain transitive dependencies (`eslint`, `eslint-config-next`, `@typescript-eslint/*`, `ajv`)

Observations:

- Suggested fixes from npm require semver-major dependency shifts (including invalid downgrade suggestions in this project context).
- No production runtime vulnerability was reported in app runtime dependencies.

Action:

- Keep `FB-094` pending for controlled dependency upgrade pass (separate compatibility sprint).

## 2) Lighthouse

Attempted command:

```bash
npx lighthouse http://localhost:3000 --quiet --chrome-flags="--headless" --output=json --output-path=./lighthouse-home.json
```

Result:

- Failed with: **No Chrome installations found**.

Action:

- Lighthouse items `FB-083` to `FB-086` remain pending until Chrome is available in the environment.
- Recommended local rerun once Chrome is installed.

## 3) Performance Deferral Follow-up

Completed in-repo optimization:

- Added client-side deferred loading wrapper for blog phase chart:
  - `src/components/blog/ClientPhasesInfographic.tsx`
  - `src/app/blog/page.tsx` now uses this wrapper

Result:

- `FB-087` can be considered complete for currently identified heavy chart sections.
