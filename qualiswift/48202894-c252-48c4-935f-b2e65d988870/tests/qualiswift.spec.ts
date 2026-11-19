import { test, expect, Page } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#user-name';
  readonly passwordInput = '#password';
  readonly loginButton = '#login-button';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async passwordFieldType() {
    return await this.page.getAttribute(this.passwordInput, 'type');
  }
}

class ProductsPage {
  readonly page: Page;
  readonly productsTitle = '.title'; // Must locate the Products page title

  constructor(page: Page) {
    this.page = page;
  }

  async isDisplayed() {
    return await this.page.isVisible(this.productsTitle);
  }

  async getTitleText() {
    return await this.page.textContent(this.productsTitle);
  }
}

// 1. Successful Login with Valid Username and Password

test('1. Successful Login with Valid Username and Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // Assert URL is base URL (login page)
  expect(page.url()).toMatch(/https:\/\/www\.saucedemo\.com\/\/?$/);

  // Password field type attribute check for masked input
  const passwordTypeBefore = await loginPage.passwordFieldType();
  expect(passwordTypeBefore).toBe('password');

  // Enter credentials
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();

  // Products page
  const productsPage = new ProductsPage(page);

  // Wait for navigation and verify URL changed away from login
  await page.waitForURL('**/inventory.html');
  expect(page.url()).toContain('/inventory.html');

  // Verify Products page title is visible and text is "Products"
  expect(await productsPage.isDisplayed()).toBe(true);
  expect(await productsPage.getTitleText()).toBe('Products');

  // Verify user session remains active by navigating away and back
  await page.goto('/inventory.html');
  expect(await productsPage.isDisplayed()).toBe(true);

  // optional: reload and verify still logged in
  await page.reload();
  expect(await productsPage.isDisplayed()).toBe(true);
});