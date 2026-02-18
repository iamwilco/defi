---
description: How to add a new coalition entity to the dashboard
---

# Add Coalition Entity Workflow

## Steps

1. **Prepare entity info**
   - Name, tagline, description
   - Logo file (SVG preferred, place in `/public/logos/<entity-id>.svg`)
   - Website URL
   - Role in coalition: `issuer` | `exchange` | `protocol` | `capital` | `lending`
   - Join date

2. **Add entity to mock data**
   Edit `/lib/mockData.ts` → `coalitionEntities` array:
   ```typescript
   {
     id: 'entity-id',
     name: 'Entity Name',
     logo: '/logos/entity-id.svg',
     tagline: 'Short tagline',
     description: 'Full description...',
     website: 'https://...',
     role: 'protocol',
     roleLabel: 'DeFi Protocol',
     joinedDate: '2026-02-01',
     active: true,
   }
   ```

3. **Add contribution data**
   Edit `/lib/mockData.ts` → `coalitionContributions` array. Add entries for each asset the entity contributes to.

4. **Add logo placeholder**
   Place an SVG or PNG in `/public/logos/entity-id.svg`.

5. **Verify**
   - Entity appears on `/entities` page
   - Contributions appear on dashboard
   - Logo renders correctly

6. **Commit task changes**
   Run `.agent/workflows/commit.md` and format the commit message using `.agent/skills/git-commit-formatter/SKILL.md`.

## Notes
- Entity governance rules are in PRD §9
- Leaving entities: set `active: false`, data remains as historical
