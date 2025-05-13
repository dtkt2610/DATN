import { test, expect } from '@playwright/test';

test('getlogin', async({page})=>{
  await page.goto('/');
  await page.getByRole("link", {name: ' Tài khoản '}).hover();
  const hoverText = page.locator("//ul[@class = 'account_selection']");
  await expect(hoverText).toBeVisible();
  await page.locator("//a[@href = '/account/login']").click();
});