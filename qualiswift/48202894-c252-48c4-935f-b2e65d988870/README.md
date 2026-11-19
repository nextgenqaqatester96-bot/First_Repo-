# SauceDemo Playwright Test Suite

This is a Playwright test suite for the SauceDemo application login feature.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set the `BASE_URL` environment variable to `https://www.saucedemo.com`

3. Run tests:
```bash
npx playwright test
```

## Notes
- Tests use `process.env.BASE_URL` for the application URL.
- Screenshots and videos are recorded only on failure.
