# FB-110 — CMS Evaluation: Sanity vs Git-based Markdown

## Decision Summary

**Recommended approach: Git-based Markdown (selected for Sprint 4).**

Rationale: the project already ships from a Git workflow, content volume is currently low, and we need predictable, reviewable changes with minimal operational overhead.

---

## Comparison Matrix

| Criteria | Sanity CMS | Git Markdown |
|---|---|---|
| Setup complexity | Medium/High (schemas, studio, hosting, tokens) | Low (files + parser) |
| Editorial UX | Strong non-technical editor UI | Basic (PR + markdown editing) |
| DevOps/infra overhead | Higher (external service dependency) | Very low |
| Versioning/audit trail | Good (history in CMS) | Excellent (Git-native history + PR review) |
| Build/deploy coupling | Requires API availability/config | Fully repo-local content |
| Security surface | API keys/tokens/webhooks | Minimal |
| Fit for current team workflow | Medium | High |

---

## Why this fits now

1. Current blog content is small and engineering-owned.
2. Team already enforces review and commit conventions.
3. Repo-local markdown keeps content and code in the same release pipeline.
4. Easier rollback and reproducibility during sprint delivery.

---

## Migration plan if editorial demand increases

When non-technical publishing velocity becomes a bottleneck:

1. Introduce a `contentProvider` abstraction (Git source + CMS source).
2. Add Sanity provider behind environment flag.
3. Preserve existing `BlogPost` shape and API contracts.
4. Migrate content gradually post-validation.
