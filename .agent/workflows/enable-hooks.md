---
description: Enable local git hooks to enforce Conventional Commits
---

# Enable Git Hooks Workflow

## Purpose
Enable a local `commit-msg` hook so every commit message is validated against Conventional Commits.

## Required Files
- `.agent/git-hooks/commit-msg`
- `.agent/skills/git-commit-formatter/SKILL.md`

## Steps

1. **Install the hook**
```bash
cp .agent/git-hooks/commit-msg .git/hooks/commit-msg
chmod +x .git/hooks/commit-msg
```

2. **Verify hook is executable**
```bash
ls -l .git/hooks/commit-msg
```
Expected output includes executable permissions (e.g., `-rwxr-xr-x`).

3. **Test invalid commit message (should fail)**
```bash
git commit --allow-empty -m "invalid message"
```

4. **Test valid commit message (should pass)**
```bash
git commit --allow-empty -m "chore(repo): verify commit hook"
```

5. **Optional cleanup test commits**
```bash
git reset --soft HEAD~1
```

## Notes
- Hooks are local to your clone and are not shared automatically.
- Re-run this workflow after cloning on a new machine.
- If commit is blocked, use `.agent/skills/git-commit-formatter/SKILL.md` to format correctly.
