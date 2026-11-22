import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Expect a "Dashboard" element.
  await page.locator('input[type="email"]').fill('john@example.com');
  await page.locator('input[type="password"]').fill('password123');
  page.locator('type="submit').click;
  //await expect(page.getByTestId('cs-nav-dashboard')).toBeVisible();
  //await expect(page.getByTestId('cs-nav-dashboard')).toBeEnabled;
  await expect(page).toHaveURL("http://localhost:5173/dashboard");
  expect(page.locator('div[class="MuiBox-root css-52love" h1]')).toBeVisible;
});

