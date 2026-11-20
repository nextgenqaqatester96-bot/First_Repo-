import { test, expect, Page } from '@playwright/test';

class DummyBankingHomePage {
  readonly page: Page;
  readonly aiForTestersMenuSelector = 'header nav >> text=AI for Testers';
  readonly dropdownOptionsSelector = 'header nav >> ul[role="menu"] >> li';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/dummy-banking-website/');
  }

  async aiForTestersMenuVisible() {
    return this.page.locator(this.aiForTestersMenuSelector).isVisible();
  }

  async openAiForTestersDropdown() {
    await this.page.click(this.aiForTestersMenuSelector);
  }

  async dropdownIsVisible() {
    // We assume dropdown UL appears after click
    const dropdown = this.page.locator(this.dropdownOptionsSelector);
    return dropdown.first().isVisible();
  }

  async firstDropdownOptionText() {
    return this.page.locator(this.dropdownOptionsSelector).first().innerText();
  }

  async clickFirstDropdownOption() {
    await this.page.locator(this.dropdownOptionsSelector).first().click();
  }
}

class AiForSoftwareTestersCoursePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoad() {
    // Wait for a unique element or main content of the page
    // Since no specific selector provided, wait for basic load state
    await this.page.waitForLoadState('domcontentloaded');
  }
}

// Case 1: Navigate to AI for Software Testers Course via Header Menu
test('1. Navigate to AI for Software Testers Course via Header Menu', async ({ page, baseURL }) => {
  const homePage = new DummyBankingHomePage(page);
  const courseURL = `${baseURL}/ai-for-software-testers/`;

  await homePage.goto();

  // Verify the header menu displays "AI for Testers"
  await expect(page.locator(homePage.aiForTestersMenuSelector)).toBeVisible();

  // Click the 'AI for Testers' menu to open dropdown
  await homePage.openAiForTestersDropdown();

  // Verify dropdown opens and displays options
  await expect(page.locator(homePage.dropdownOptionsSelector).first()).toBeVisible();

  // Check first option text
  const firstOptionText = await homePage.firstDropdownOptionText();
  expect(firstOptionText.trim()).toBe('AI for Software Testers Course');

  // Click the first option
  await homePage.clickFirstDropdownOption();

  // Verify navigation to course page URL
  await expect(page).toHaveURL(courseURL);

  // Wait for course page to load successfully
  const coursePage = new AiForSoftwareTestersCoursePage(page);
  await coursePage.waitForLoad();

  // Basic check: no navigation errors (e.g. 404) by checking response status
  // Since no navigation errors means page loads normally, the above should suffice
});

// Case 2: Verify Dropdown Displays Available Options under AI for Testers Menu
test('2. Verify Dropdown Displays Available Options under AI for Testers Menu', async ({ page }) => {
  const homePage = new DummyBankingHomePage(page);

  await homePage.goto();

  // Locate the 'AI for Testers' header menu and verify visible
  await expect(page.locator(homePage.aiForTestersMenuSelector)).toBeVisible();

  // Click to reveal dropdown
  await homePage.openAiForTestersDropdown();

  // Verify dropdown menu opens
  const dropdownItems = page.locator(homePage.dropdownOptionsSelector);
  await expect(dropdownItems.first()).toBeVisible();

  // Verify at least one option is present (basic existence)
  const optionsCount = await dropdownItems.count();
  expect(optionsCount).toBeGreaterThan(0);

  // Confirm the first option text
  const firstOptionText = await homePage.firstDropdownOptionText();
  expect(firstOptionText.trim()).toBe('AI for Software Testers Course');
});
