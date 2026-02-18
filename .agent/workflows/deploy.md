---
description: Deploy the application to Vercel
---

# Deploy Workflow

## Prerequisites
- Vercel account connected
- Environment variables set in Vercel dashboard
- All tests passing (`/test` workflow)
- Build succeeds (`/build` workflow)

## Steps

1. **Pre-deploy checks**
   - Run `/build` workflow
   - Run `/test` workflow
   - Run `/commit` workflow for any uncommitted completed tasks
   - Verify no uncommitted changes: `git status`

2. **Push to main branch**
```bash
git add .
git commit -m "<type>[optional scope]: <description>"
git push origin main
```
Vercel auto-deploys from `main`.

Commit messages must follow `.agent/skills/git-commit-formatter/SKILL.md`.

3. **Monitor deployment**
   - Check Vercel dashboard for build status
   - Verify preview URL works

4. **Post-deploy verification**
   - Visit production URL
   - Check all pages load
   - Verify API routes return data
   - Test mobile responsiveness
   - Check dark/light theme toggle

## Environment Variables (Vercel Dashboard)

| Variable | Description | Required |
|----------|-------------|----------|
| `BLOCKFROST_API_KEY` | Blockfrost API key (Phase 2) | No (MVP) |
| `NEXT_PUBLIC_APP_URL` | Production URL | Yes |

## Rollback

If issues found post-deploy:
1. Go to Vercel dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
