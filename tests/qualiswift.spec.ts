import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login Functionality Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Precondition: Navigate to OrangeHRM Login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  // AC-01: Verify Login Page Elements
  test('AC-01: Verify Login Page Fields and Button', async ({ page }) => {
    const usernameField = page.locator('input[name="username"]');
    const passwordField = page.locator('input[name="password"]');
    const loginButton = page.locator('button[type="submit"]');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();
  });

  // AC-02: Login with Valid Credentials
  test('AC-02: Successful Login with Valid Credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    // Verify redirection to Dashboard
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toContainText('Dashboard');
  });

  // AC-03: Login with Invalid Credentials
  test('AC-03: Unsuccessful Login with Invalid Credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('InvalidUser');
    await page.locator('input[name="password"]').fill('WrongPassword123');
    await page.locator('button[type="submit"]').click();

    // Verify error message for invalid credentials
    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid credentials');
  });

  // AC-04: Login with Empty Fields
  test('AC-04: Validation Messages for Empty Fields', async ({ page }) => {
    // Click login without entering any credentials
    await page.locator('button[type="submit"]').click();

    // Verify required field validation messages appear under inputs
    const validationMessages = page.locator('.oxd-input-field-error-message');
    await expect(validationMessages.first()).toBeVisible();
    
    // Check specific count or text of required messages
    const count = await validationMessages.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  // Additional Test 5: Verify Password Characters are Masked
  test('AC-05: Verify Password Field Masks Characters', async ({ page }) => {
    const passwordField = page.locator('input[name="password"]');
    await expect(passwordField).toHaveAttribute('type', 'password');
  });

});
