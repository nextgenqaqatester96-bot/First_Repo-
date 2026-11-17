import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login Functionality Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  test('Verify Login Page Elements Visibility', async ({ page }) => {
    const usernameField = page.locator('input[name="username"]');
    const passwordField = page.locator('input[name="password"]');
    const loginButton = page.locator('button[type="submit"]');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();
  });

  test('Login with Valid Credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toContainText('Dashboard');
  });

  test('Login with Invalid Username and Password', async ({ page }) => {
    await page.locator('input[name="username"]').fill('InvalidUser');
    await page.locator('input[name="password"]').fill('WrongPassword123');
    await page.locator('button[type="submit"]').click();

    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid credentials');
  });

  test('Login with Empty Username and Password Fields', async ({ page }) => {
    await page.locator('button[type="submit"]').click();

    const validationMessages = page.locator('.oxd-input-field-error-message');
    await expect(validationMessages.first()).toBeVisible();
    
    const count = await validationMessages.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('Verify Password Field Masking', async ({ page }) => {
    const passwordField = page.locator('input[name="password"]');
    await expect(passwordField).toHaveAttribute('type', 'password');
  });

});
