import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("City Services Portal");
});

test('has a heading', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Expect a heading
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.getByTestId('cs-login-submit')).toBeVisible()
});