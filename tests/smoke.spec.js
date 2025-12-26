const { test, expect } = require('@playwright/test');

test('Check if Portfolio Loads', async ({ page }) => {
  await page.goto('https://694e2633d57c3cbb131fb357--tourmaline-croquembouche-7a448b.netlify.app'); 

  await expect(page).toHaveTitle(/Adnan/);

  // Check if your main heading is visible
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});