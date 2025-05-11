import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://localhost:44390/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Double 2T-2Q Sneaker/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://localhost:44390/');

  // Click the get started link.
  
  await page.getByRole('navigation').getByRole('link', { name: 'Sản phẩm' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Sản phẩm', exact:true })).toBeVisible();
});