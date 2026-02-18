---
description: Create a commit after each completed task using Conventional Commits
---

# Commit Workflow

## Required Skill
Read and follow:
- `.agent/skills/git-commit-formatter/SKILL.md`

## Rule
After each completed task, create a task-level commit.

## Steps

1. **Review changes for the completed task**
```bash
git status
```

2. **Stage only relevant files for that task**
```bash
git add <file1> <file2> ...
```

3. **Write commit message using Conventional Commits**
Format:
```text
<type>[optional scope]: <description>
```

Allowed types:
- `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

Examples:
- `feat(dashboard): add coalition TVL bar chart`
- `fix(api): handle missing blog slug with 404`
- `docs(agent): add commit workflow and formatter rules`

4. **Create commit**
```bash
git commit -m "<type>[optional scope]: <description>"
```

5. **Repeat after the next completed task**
Do not batch unrelated tasks into one commit.

## Checklist
- [ ] Commit message follows Conventional Commits
- [ ] Commit scope matches changed area
- [ ] Commit only includes files related to one completed task
- [ ] No unrelated files staged
