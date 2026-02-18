---
description: How to add a new feature to the dashboard
---

# Add Feature Workflow

## Steps

1. **Check PRD**
   Read `.agent/tasks/prd.md` to confirm the feature is in scope and understand requirements.

2. **Check task list**
   Read `.agent/tasks/todo.md` to find the relevant task IDs.

3. **Read architecture**
   Read `.agent/system/architecture.md` for rendering strategy and component hierarchy.

4. **Read data models**
   Read `.agent/system/data-models.md` for type definitions. If new types are needed, add them here first.

5. **Implement in order:**
   a. **Types** — Add/update interfaces in `/types/`
   b. **Mock data** — Add test data in `/lib/mockData.ts`
   c. **API route** — Create/update route in `/app/api/`
   d. **Hook** — Create/update TanStack Query hook in `/lib/hooks/`
   e. **Component** — Build component in `/components/<feature>/`
   f. **Page** — Wire component into page in `/app/<route>/page.tsx`

6. **Add tests**
   Write at least one render test in `__tests__/components/`.

7. **Verify**
   - Run `npm run build` (no errors)
   - Run `npm test` (all pass)
   - Visual check in browser (both dark/light themes)
   - Check mobile responsiveness

8. **Update task list**
   Mark completed tasks in `.agent/tasks/todo.md`.

9. **Commit task changes**
   Run `.agent/workflows/commit.md` and format the commit message using `.agent/skills/git-commit-formatter/SKILL.md`.

10. **Update documentation if needed**
   - New API endpoint → update `.agent/system/api-endpoints.md`
   - New data model → update `.agent/system/data-models.md`
   - Architecture change → update `.agent/system/architecture.md`

## Checklist
- [ ] Types defined
- [ ] Mock data added
- [ ] API route working
- [ ] Hook created
- [ ] Component renders correctly
- [ ] Page wired up
- [ ] Tests written
- [ ] Build passes
- [ ] Mobile responsive
- [ ] Both themes work
- [ ] Conventional Commit created for this task
- [ ] Docs updated
- [ ] Task marked complete
