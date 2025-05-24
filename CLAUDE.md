# Claude Code Configuration

## Project Overview
This is a React Todo App built with Vite, TypeScript, and tested with Playwright.

## Available Commands
**Note**: Bash commands are not available in Claude Code Actions. Use the available tools instead:

- Read files to inspect code changes
- Edit files to modify implementation
- Glob/Grep to search for patterns
- Use existing test files to verify functionality

## Local Development Commands
For local development, you can use:
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run Playwright tests with UI

## UI Verification in Claude Code Actions
Since bash commands are restricted, UI verification should be done through:

1. **Code Review**: Inspect CSS/HTML changes in components
2. **Test Analysis**: Review existing test files for UI validation
3. **Component Structure**: Analyze React component hierarchy and styling

## Screenshot Functionality
To request screenshots in issues or PRs:

### Method 1: Use `/screenshot` command
Comment `/screenshot` in any issue or PR to trigger automatic screenshot capture.

### Method 2: Mention "スクリーンショット" or "screenshot"
When mentioning "スクリーンショット" or "screenshot" in issue/PR comments with `@claude`, 
screenshots will be automatically captured after Claude Code Actions completes.

### Method 3: Manual trigger
Use the "Simple Screenshot" workflow manually from the Actions tab.

## Key Files for UI Verification
- `src/App.tsx` - Main application component
- `src/App.css` - Application styling and animations
- `src/index.css` - Global styles
- `tests/example.spec.ts` - E2E test for UI validation

## Testing Approach
To verify UI changes in Claude Code Actions:
1. Review the modified CSS and component files
2. Check that test files are updated accordingly
3. Ensure responsive design considerations are maintained
4. Validate accessibility and semantic HTML structure

## Manual Testing Instructions
For local UI verification after changes:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build and preview
npm run build && npm run preview

# Run E2E tests
npm run test:e2e
```