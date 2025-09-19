# Automation Test Nutaclaud

A comprehensive Playwright automation testing framework for end-to-end testing of web applications.

## Features

- **Cross-browser testing**: Supports Chromium, Firefox, and WebKit
- **Mobile testing**: Includes mobile viewport configurations
- **Parallel execution**: Tests run in parallel for faster execution
- **Rich reporting**: HTML reports with screenshots and videos on failure
- **TypeScript support**: Full TypeScript configuration for better development experience
- **CI/CD ready**: GitHub Actions workflow included

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yulius98/automation-test-nutaclaud.git
cd automation-test-nutaclaud
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npm run test:install
# or
npx playwright install
```

## Running Tests

### Basic test execution:
```bash
npm test
```

### Run tests with browser UI (headed mode):
```bash
npm run test:headed
```

### Debug tests:
```bash
npm run test:debug
```

### Interactive UI mode:
```bash
npm run test:ui
```

### View test reports:
```bash
npm run test:report
```

## Test Structure

The project includes several example test suites:

- **`example.spec.ts`**: Basic navigation and element interaction tests
- **`search.spec.ts`**: Search functionality testing with DuckDuckGo
- **`forms.spec.ts`**: Form interaction and validation tests

## Configuration

The Playwright configuration is defined in `playwright.config.ts` and includes:

- **Test directory**: `./tests`
- **Parallel execution**: Enabled for faster test runs
- **Retry logic**: 2 retries on CI, 0 locally
- **Reporters**: HTML reporter with traces and screenshots
- **Browser projects**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari

## Writing Tests

Example test structure:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Tests', () => {
  test('should perform action', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

## CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

- Runs on push and pull requests
- Installs dependencies and browsers
- Executes all tests
- Uploads test reports as artifacts

## File Structure

```
automation-test-nutaclaud/
├── .github/
│   └── workflows/
│       └── playwright.yml      # GitHub Actions workflow
├── tests/
│   ├── example.spec.ts         # Basic example tests
│   ├── search.spec.ts          # Search functionality tests
│   └── forms.spec.ts           # Form interaction tests
├── playwright.config.ts        # Playwright configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## Browser Support

- **Chromium** (Desktop Chrome simulation)
- **Firefox** (Desktop Firefox simulation)
- **WebKit** (Desktop Safari simulation)
- **Mobile Chrome** (Pixel 5 simulation)
- **Mobile Safari** (iPhone 12 simulation)

## Best Practices

1. **Page Object Model**: Consider implementing page objects for complex applications
2. **Test Data Management**: Use fixtures or data files for test data
3. **Assertions**: Use Playwright's built-in assertions for better error messages
4. **Waits**: Use auto-waiting features instead of manual timeouts
5. **Selectors**: Prefer semantic selectors (text, role) over CSS/XPath when possible

## Troubleshooting

### Browser Installation Issues
If browser installation fails, try:
```bash
npx playwright install --force
# or install specific browsers
npx playwright install chromium
```

### Test Failures
- Check the HTML report: `npm run test:report`
- Run in headed mode to see browser: `npm run test:headed`
- Use debug mode for step-by-step execution: `npm run test:debug`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

ISC License