import { test, expect } from '@playwright/test';

test('Check if Portfolio Loads', async ({ page }) => {
  // Use your Netlify URL
  await page.goto('https://tourmaline-croquembouche-7a448b.netlify.app'); 

  // Check the title of the browser tab
  await expect(page).toHaveTitle(/Adnan/);

  // FIX: Instead of any 'h1', look for the specific one with your name
  const mainHeading = page.getByRole('heading', { name: 'Adnan Hikari' });
  await expect(mainHeading).toBeVisible();

});