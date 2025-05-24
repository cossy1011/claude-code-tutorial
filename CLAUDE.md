# Claude Code Configuration

## Project Overview
This is a React Todo App built with Vite, TypeScript, and tested with Playwright.

## Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run Playwright tests with UI

## UI Testing with Playwright
The project includes Playwright for E2E testing. When running in Claude Code Actions:

1. The application is built and served on `http://localhost:4173`
2. Playwright browsers are pre-installed and available
3. You can use Playwright commands to interact with the UI:
   - Take screenshots: `npx playwright screenshot`
   - Run specific tests: `npx playwright test --grep "test-name"`
   - Generate test reports: `npx playwright show-report`

## UI Verification Commands
For UI verification in Claude Code Actions, you can use:

```bash
# Take a screenshot of the homepage
npx playwright screenshot --url http://localhost:4173 --path screenshot.png

# Run UI tests and generate report
npm run test:e2e

# Check if specific elements are visible
npx playwright test --grep "homepage loads"
```

## Environment
- Node.js LTS
- Playwright browsers installed with dependencies
- Application served on port 4173 (preview mode)
- Wait-on utility available for server readiness checks