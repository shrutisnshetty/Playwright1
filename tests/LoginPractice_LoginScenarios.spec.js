import {test,expect} from '@playwright/test'
//const dataset=JSON.parse(JSON.stringify(require('../utils/LoginPractice_LoginScenarios_Data.json')))
const loginDataSet = JSON.parse(JSON.stringify(require('../utils/LoginPageTestData.json')))

test.beforeEach(async({page})=>
{

await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/")
//print the url of the
console.log("page url: " +page.url());
//print the title of the page
console.log("page title: " +await page.title());
//valdiate page url,accepts partial /text/
await expect(page).toHaveURL(/loginpagePractise/);
//validate page title,accepts partial /text/
await expect(page).toHaveTitle(/LoginPage Practise/)
const usernamelocator=page.locator('#username')
const passwordlocator=page.locator('#password')
const signinlocator=page.locator('#signInBtn')
await usernamelocator.fill(loginDataSet.validUsername)
await passwordlocator.fill(loginDataSet.validPassword)
//await signinlocator.click()
})

test('Validate DOM Attribute',async({page})=>
{
//validate class attribute has "blinkingText" or not
const linklocator=page.locator("a[href*='documents-request']")
//await page.waitForTimeout(10000)
await expect(linklocator).toHaveAttribute("class","blinkingText")
console.log("Blinking text msg: " + await (linklocator).textContent());
})

test('Invalid Login',async({page})=>
{
const Invalidusername="abc"
const Invalidpasssword="xyz"
const usernamelocator=page.locator('#username')
const passwordlocator=page.locator('#password')
const signinlocator=page.locator('#signInBtn')
const errmsglocator=page.locator("[style*='block']")
await usernamelocator.fill(loginDataSet.InvalidUsername);
await passwordlocator.fill(loginDataSet.InvalidPassword);
await signinlocator.click();
//get error msg
 const errmsg=await errmsglocator.textContent();
 console.log("Invalid Login Error msg:" +errmsg);
 //.toContainText -validates partial text
 await expect(errmsglocator).toContainText('Incorrect');
 //.toHaveText-validates complete text
 await expect (errmsglocator).toHaveText('Incorrect username/password.')
})

test('Valid Login',async({page})=>
{
const usernamelocator=page.locator('#username')
const passwordlocator=page.locator('#password')
const signinlocator=page.locator('#signInBtn')
await usernamelocator.fill(loginDataSet.validUsername)
await passwordlocator.fill(loginDataSet.validPassword)
//Alert before click operation
//await page.waitForSelector("//b[normalize-space()='zara coat 3']")
//await page.locator('.card-body a').first().waitFor()
await signinlocator.click()
const titles= page.locator('.card-body a')
console.log("first ele:" +await titles.first().textContent());
console.log("second ele:" +await titles.nth(1).textContent()); 
//nth(0)=first, nth(1)=second ele,first(),last()
const cardTitles=await titles.allTextContents();
console.log("all the elements:" +cardTitles);
await expect(titles.first()).toHaveText('iphone X');
})


test('RadiobtnCheckbox Validation',async({page})=>
{
const staticdd=page.locator("select[class='form-control']");
await staticdd.selectOption('Consultant');
console.log("selected dropdown value:" +await staticdd.inputValue())
//page.waitForTimeout(50000)
//user radio button
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked()
console.log(await page.locator(".radiotextsty").last().isChecked());
//another way of assertion
expect(await page.locator(".radiotextsty").last().isChecked()).toBeTruthy();
await page.locator("#terms").check()
console.log(await page.locator("#terms").isChecked());
await expect(page.locator("#terms")).toBeChecked()
await page.locator("#terms").uncheck()
//there is no 'toBeUnChecked' to validate so follow below line
expect(await page.locator('#terms').isChecked()).toBeFalsy()
})

