import { test,expect } from '@playwright/test';
import { openAsBlob } from 'fs';
test('Basic action', async ({ page }) => {
    // Navigate
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    // Click
    //1 click
    await page.locator("//div[@id='clickArea']").click();
    // 2 click
    await page.locator("//div[@id='clickArea']").dblclick();

    // click right mouse
    await page.locator("//div[@id='clickArea']").click({
        button: 'right'
    });
    // click left mouse
    await page.locator("//div[@id='clickArea']").click({
        button: 'left'
    });

    // click different button
    await page.locator("//div[@id='clickArea']").click({
        modifiers: ["Shift"]
    });
});

test ('Basic Input', async({page})=>{
    await page.goto("https://material.playwrightvn.com/index.html");
    await page.getByRole("link", {name: 'Bài học 1: Register Page (có đủ các element)'}).click();
    await page.locator("//input[@id='username']").pressSequentially("Kim Thỏa", {delay: 90});

    // check radio button
    await page.locator("//input[@id='female']").check();

    // check checkbox
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//input[@id='reading']").check();

    //uncheck
    await page.locator("//input[@id='traveling']").uncheck();

    // Get Check status
    const isCheck = await page.locator("//input[@id='male']").isChecked();

    console.log(isCheck);
});

test ('select', async({page})=> {
    await page.goto("https://material.playwrightvn.com/index.html");
    await page.getByRole("link", {name: 'Bài học 1: Register Page (có đủ các element)'}).click();
    //select 1 option
    await page.locator("//select[@id='country']").selectOption("Canada");

    // select more option
    await page.locator("//select[@id='interests']").selectOption(["Technology", "Art"]);
});

test ('date', async({page})=> {
    await page.goto("https://material.playwrightvn.com/index.html");
    await page.getByRole("link", {name: 'Bài học 1: Register Page (có đủ các element)'}).click();
    // fill date
    await page.locator("//input[@id='dob']").fill("2025-01-25");
})
