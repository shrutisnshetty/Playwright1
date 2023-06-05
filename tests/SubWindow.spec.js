import {test,expect} from '@playwright/test'
import { log } from 'console'

test('ChildWindowHandle',async({browser})=>
{

const context=await browser.newContext()
const page=await context.newPage()
const usernamelocator=page.locator('#username')
const passwordlocator=page.locator('#password')
const signinlocator=page.locator('#signInBtn')

await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/")

console.log("page1url" +page.url());

const linklocator=page.locator("a[href*='documents-request']")

//Another wayvto handle it
const [newPagen1] =await Promise.all([
    context.waitForEvent('page'),
    await linklocator.click(),
]) 

console.log("page2url" +newPagen1.url());
const textlocator=newPagen1.locator("//p[@class='im-para red']")
const textmsg=await textlocator.textContent()
console.log("TextFROMChildWindow: " +textmsg);

const completeemail= textmsg?.split('@')[1].split(" ")[0].split('.')[0]
const joinlocator=newPagen1.locator("div[class='form-group text-center'] a[class='theme-btn']")
/*ANother activity on child window
await joinlocator.click()
await newPagen1.waitForTimeout(5000)
console.log("jointourl :" +newPagen1.url());  */


await usernamelocator.type("rahulshettyacademy");
//await usernamelocator.type(completeemail);
await passwordlocator.fill("learning")
console.log(await passwordlocator.inputValue());

const navigationPromise = page.waitForNavigation();
await signinlocator.click()
await navigationPromise;


console.log("page title: " +await page.title());
console.log("page1url" +page.url());
const parentloc=page.locator("app-card-list[class='row'] h4")
const count=await parentloc.count();
console.log("count of products: " +count);







}
)