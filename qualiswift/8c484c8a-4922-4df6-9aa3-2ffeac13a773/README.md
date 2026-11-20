# QualiSwift Playwright Test Suite

This project contains Playwright tests in TypeScript to verify navigation and dropdown menu functionality on the dummy banking website.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Set the base URL environment variable when running tests or configure in the Playwright config.

3. Run tests:
```bash
npx playwright test
```

## Notes
- Tests use `process.env.BASE_URL` as the base URL. Set this to `https://sqatools.in` for running these tests.
- Browser artifacts (screenshots, videos, traces) are retained only on test failures.
- No login is required to access tested pages.
