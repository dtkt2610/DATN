import { test, expect } from '@playwright/test';
 const HomepageURL = "http://localhost:44390/";

test('getlogin', async({page})=>{
  await page.goto(HomepageURL);
  await page.getByRole("link", {name: ' Tài khoản '}).hover();
  const hoverText = page.locator("//ul[@class = 'account_selection']");
  await expect(hoverText).toBeVisible();
  await page.locator("//a[@href = '/account/login']").click();
});