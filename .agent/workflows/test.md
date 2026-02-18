---
description: Run the test suite and verify component behavior
---

# Test Workflow

## Steps

// turbo
1. **Run all tests**
```bash
npm test
```

// turbo
2. **Run tests in watch mode** (for development)
```bash
npm test -- --watch
```

3. **Run specific test file**
```bash
npm test -- __tests__/components/DashboardCard.test.tsx
```

4. **Run with coverage**
```bash
npm test -- --coverage
```

## Test Categories

### Unit Tests (`__tests__/components/`)
- Component rendering tests (DashboardCard, TvlChart, BlogCard, EntityCard, IncentiveCard)
- Verify correct props rendering
- Verify conditional display logic

### Utility Tests (`__tests__/lib/`)
- Formatting functions (currency, percentage, date, number abbreviation)
- Mock data structure validation

### Hook Tests (`__tests__/lib/hooks/`)
- Query hooks return expected data shapes
- Error states handled correctly

## Writing New Tests

Template:
```typescript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ComponentName } from '@/components/path/ComponentName';

describe('ComponentName', () => {
  it('renders without crashing', () => {
    render(<ComponentName {...mockProps} />);
    expect(screen.getByText('expected text')).toBeInTheDocument();
  });
});
```

## Validation
- [ ] All tests pass
- [ ] No console errors during test runs
- [ ] Coverage meets minimum threshold (aim for 70%+ on components)
