# Skill: shadcn/ui Patterns

## When to Use
When using any shadcn/ui component in the dashboard.

## Installed Components

After setup, these should be available in `/components/ui/`:
- `button.tsx`
- `card.tsx` (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- `badge.tsx`
- `tooltip.tsx` (Tooltip, TooltipTrigger, TooltipContent, TooltipProvider)
- `accordion.tsx` (Accordion, AccordionItem, AccordionTrigger, AccordionContent)
- `sheet.tsx` (Sheet, SheetTrigger, SheetContent — for mobile menu)
- `dialog.tsx`
- `tabs.tsx` (Tabs, TabsList, TabsTrigger, TabsContent)
- `separator.tsx`
- `skeleton.tsx`

## Import Pattern

```typescript
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
```

## Common Compositions

### Dashboard Card
```tsx
<Card className="bg-card/50 backdrop-blur border-border/50">
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-sm font-medium text-muted-foreground">
      {title}
    </CardTitle>
    <Icon className="h-4 w-4 text-muted-foreground" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">{value}</div>
    <p className="text-xs text-muted-foreground">{subtitle}</p>
  </CardContent>
</Card>
```

### Entity Badge
```tsx
<Badge variant={entity.active ? "default" : "secondary"}>
  {entity.roleLabel}
</Badge>
```

### Loading State
```tsx
<Card>
  <CardHeader>
    <Skeleton className="h-4 w-[200px]" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-8 w-[100px]" />
    <Skeleton className="h-3 w-[150px] mt-2" />
  </CardContent>
</Card>
```

## Theming

shadcn/ui uses CSS variables. These are defined in `globals.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  /* ... etc */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... etc */
}
```

Override these to match the PRD color palette (navy, blue, gold).

## Rules
- Never modify files in `/components/ui/` directly — they're managed by shadcn CLI
- Use `cn()` from `/lib/utils.ts` for conditional class merging
- Always wrap Tooltip usage in `<TooltipProvider>`
