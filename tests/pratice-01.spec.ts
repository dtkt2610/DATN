import {test, expect} from "@playwright/test";
import { todo } from "node:test";

const HomePageUrl = "https://material.playwrightvn.com/index.html";


test("test 1", async({page})=>{
    const username = "Kim Thỏa"; // làm tương tự như các field khác 
    await page.goto(HomePageUrl);
    await page.click("//a[@href='01-xpath-register-page.html']");

    // Input Information 
    //user name
    await page.locator("//input[@id='username']").pressSequentially("Kim Thỏa", {
        delay: 100
    });
    // Email
    await page.locator("//input[@id='email']").pressSequentially("thoadinh000@yopmail.com",{
        delay: 100
    });
    // Gender
    await page.locator("//input[@id='female']").check();
    // Hobbies
    await page.locator("//input[@id='cooking']").check();
    await page.locator("//input[@id='traveling']").check();
    //Interests
    await page.locator("//select[@id='interests']").selectOption(["Technology", "Music"]);
    // Country
    await page.locator("//select[@id='country']").selectOption("Canada");
    // DOB
    await page.locator("//input[@id='dob']").fill("2003-10-26");
    //Profile
    await page.locator("//input[@id='profile']").setInputFiles("profile.txt");
    //Bio
    await page.locator("//textarea[@id='bio']").fill("Tester");
    // Rate
    await page.locator("//input[@id='rating']").fill('7');
    // FavColor
    await page.locator("//input[@id='favcolor']").fill('#0000ff');
    //Hover
    await page.locator("//div[@class='tooltip']").hover();
    //enable Feature
    await page.locator("//span[@class='slider round']").click();
    //star rate
    //await page.locator("//div[@id='starRating']").innerText();
    //const ratingValue = await page.locator('#starRatingValue').innerText();
    //expect(ratingValue).toBe('4.0');

    //register button
    await page.click("//button[@type='submit']");
});

test("test 2", async({page})=>{
    //Cách 1:
    await page.goto(HomePageUrl);
    await page.click("//a[@href='02-xpath-product-page.html']");
    /*await page.dblclick("//button[@data-product-id='1']");
    await page.dblclick("//button[@data-product-id='2']");
    await page.click("//button[@data-product-id='2']");
    await page.click("//button[@data-product-id='3']");*/

    // Cách 2: 
    await page.locator("//button[@data-product-id='1']").click({clickCount:2});
    await page.locator("//button[@data-product-id='2']").click({clickCount:3});
    await page.locator("//button[@data-product-id='3']").click({clickCount:1});
});
test("test 3a", async({page})=>{
    await page.goto(HomePageUrl);
    await page.click("//a[@href='03-xpath-todo-list.html']");
    
    for(let i = 1; i <= 100; i++){
        await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
        await page.waitForTimeout(50);
        await page.locator("//button[@id='add-task']").click();
    }
});
test("test 3b", async({page})=>{
    await page.goto(HomePageUrl);
    await page.click("//a[@href='03-xpath-todo-list.html']");
    let i;
    for( i = 1; i <= 100; i++){
        await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
        await page.locator("//button[@id='add-task']").click();
    }

    page.on('dialog', async dialog => dialog.accept());
    for (i=99; i>=0; i--){
        if((i+1)%2!==0){
            await page.click(`//button[@onclick="deleteTask(${i})"]`);
        }
    }
});
test("test 4", async({page})=> {
   let titles, contents;
   await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", { waitUntil: 'domcontentloaded' });

   const articles = await page.locator('//article[@class="item-news item-news-common"]');

   titles = await articles.locator('//h4[@class="title-news"]/a').allTextContents();
    contents = await articles.locator('//p[@class="description"]/a').allTextContents();

   await page.goto(HomePageUrl);
   await page.locator('//a[@href = "04-xpath-personal-notes.html"]').click();

   for (let i = 0; i < 6; i++) {
    await page.locator("//input[@id = 'note-title']").fill(titles[i]);
    await page.locator("//textarea[@id = 'note-content']").fill(contents[i]);
    await page.locator("//button[@id ='add-note']").click();
   }

   await page.locator("//input[@id ='search']").fill("ngắn");
});