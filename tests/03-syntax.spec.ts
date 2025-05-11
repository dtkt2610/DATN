import {test} from "@playwright/test";
import { profile } from "console";

const registerPageUrl = "https://material.playwrightvn.com/01-xpath-register-page.html";
test('date picker, slider, color picker', async({page})=>{
    await page.goto(registerPageUrl);

    await page.locator("//input[@id='dob']").fill("2003-10-26");
    await page.locator("//input[@id='rating']").fill("3");
    await page.locator("//input[@id='favcolor']").fill("#0000ff");
});

test('file, hover', async({page})=>{
    await page.goto(registerPageUrl);
    await page.locator("//input[@type='file']").setInputFiles("profile.txt");
    await page.locator("//div[@class='tooltip']").hover();
});