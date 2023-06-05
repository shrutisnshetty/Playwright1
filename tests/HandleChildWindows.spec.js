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
const linklocator=page.locator("a[href*='documents-request']")


const pagePromise=context.waitForEvent('page')
await linklocator.click();  //open in new tab
const newPage1=await pagePromise;

//Another wayvto handle it
/*const [newPage1] =await Promise.all([
    context.waitForEvent('page'),
    await linklocator.click(),
]) */

console.log("TextFROMChildWindow: " +await newPage1.locator("//p[@class='im-para red']").textContent());
//or 
const textlocator=newPage1.locator("//p[@class='im-para red']")
const textmsg=await textlocator.textContent()
console.log("TextFROMChildWindow: " +textmsg);

// const completeemail= textmsg?.split('@')[1].split(" ")[0].split('.')[0]
// console.log("ExtractedEmailID: " +completeemail);



await usernamelocator.type("rahulshettyacademy");
await passwordlocator.fill("learning")
console.log(await passwordlocator.inputValue());

await signinlocator.click()


}
)