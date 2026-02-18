# Skill: Recharts Patterns for DeFi Dashboard

## When to Use
When creating any chart or visualization component.

## Key Patterns

### 1. Dynamic Import (Required for SSR)

Recharts uses browser APIs. Always use dynamic import in Next.js:

```typescript
"use client";

import dynamic from 'next/dynamic';

const BarChart = dynamic(
  () => import('recharts').then(mod => mod.BarChart),
  { ssr: false }
);
// Repeat for each Recharts component used
```

**Or wrap entire chart component:**
```typescript
// components/dashboard/TvlChart.tsx
"use client";
// ... chart implementation with direct recharts imports

// In the page:
const TvlChart = dynamic(() => import('@/components/dashboard/TvlChart'), {
  ssr: false,
  loading: () => <Skeleton className="h-[300px]" />,
});
```

### 2. Responsive Charts

Always use `ResponsiveContainer`:
```tsx
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    ...
  </BarChart>
</ResponsiveContainer>
```

### 3. Theme-Aware Colors

Use CSS variables or pass theme from Zustand:
```tsx
const theme = useAppStore(s => s.theme);
const colors = theme === 'dark' 
  ? { bg: '#0A0E27', text: '#E2E8F0', grid: '#1E293B' }
  : { bg: '#FFFFFF', text: '#0F172A', grid: '#E2E8F0' };
```

### 4. Custom Tooltip

```tsx
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload) return null;
  return (
    <div className="bg-card border rounded-lg p-3 shadow-lg">
      <p className="font-medium">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} style={{ color: entry.color }}>
          {entry.name}: {formatCurrency(entry.value)}
        </p>
      ))}
    </div>
  );
}
```

### 5. Heatmap (Custom via ScatterChart)

Recharts doesn't have a native heatmap. Use ScatterChart with custom shape:
```tsx
<ScatterChart>
  <XAxis dataKey="asset" type="category" />
  <YAxis dataKey="metric" type="category" />
  <Scatter data={heatmapData} shape={<HeatmapCell />} />
</ScatterChart>
```

With custom cell renderer that maps `intensity` to a color scale.

### 6. Color Palettes

```typescript
export const CHART_COLORS = {
  entities: ['#3B82F6', '#F59E0B', '#10B981', '#8B5CF6', '#EF4444'],
  assets: ['#3B82F6', '#F59E0B', '#10B981', '#EC4899'],
  heatmap: {
    low: '#1E3A5F',
    mid: '#3B82F6',
    high: '#F59E0B',
  },
};
```
