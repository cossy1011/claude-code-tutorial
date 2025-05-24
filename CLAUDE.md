# Claude Code Configuration

## Project Overview
This is a React Todo App built with Vite, TypeScript, and tested with Playwright.

## Available Tools in Claude Code Actions
Claude has access to the following tools when running in GitHub Actions:

### File Operations
- `View` - Read file contents
- `Edit` - Modify files
- `MultiEdit` - Edit multiple parts of a file
- `Write` - Create new files
- `GlobTool` - Find files by pattern
- `GrepTool` - Search file contents

### Build & Test Commands
- `npm run build` - Build the application
- `npm run preview &` - Start preview server in background
- `npm run test:e2e` - Run Playwright E2E tests
- `npm ci` - Install dependencies

### Screenshot & UI Tools
- `npx playwright screenshot --url http://localhost:4173 --path screenshot.png` - Take desktop screenshot
- `npx playwright screenshot --url http://localhost:4173 --path mobile-screenshot.png --viewport 375x667` - Take mobile screenshot
- `npx wait-on http://localhost:4173 --timeout 30000` - Wait for server to be ready
- `pkill -f 'vite preview'` - Stop preview server
- `ls -la *.png` - List screenshot files
- `base64 -i screenshot.png` - Encode screenshots for display

### Git Commands
- `git status` - Check repository status
- `git diff` - Show changes
- `git log --oneline -5` - Show recent commits

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