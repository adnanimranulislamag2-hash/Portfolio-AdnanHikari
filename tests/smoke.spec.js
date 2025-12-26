import { test, expect } from '@playwright/test';

test('Check if Portfolio Loads', async ({ page }) => {
  // Use your main Netlify URL here
  await page.goto('https://tourmaline-croquembouche-7a448b.netlify.app'); 

  // This checks if your name is in the website title
  await expect(page).toHaveTitle(/Adnan/);

  // This checks if your main heading (h1) is visible
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});