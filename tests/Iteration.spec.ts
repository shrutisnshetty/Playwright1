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

await usernamelocator.type("rahulshettyacademy");
//await usernamelocator.type(completeemail);
await passwordlocator.fill("learning")
const navigationPromise = page.waitForNavigation();
await signinlocator.click()
await navigationPromise;
//await page.waitForTimeout(5000)

console.log("page title: " +await page.title());
console.log("page1url" +page.url());
const alltitlelocator=page.locator("div h4 a")
const titles=await alltitlelocator.allTextContents()
console.log("All titles: " +titles)
const reqruiredTitle="Samsung Note 8";
const Titlecount=await alltitlelocator.count()

// for (let i=0;i<Titlecount;++i)
// {
//    const LoopTitles= alltitlelocator.nth(i).textContent()
//  console.log("Loop Iteration: " +await alltitlelocator.nth(i).textContent());
 
//    if(await LoopTitles===reqruiredTitle)
//    {

//     await alltitlelocator.nth(i).locator()
//     break;
//    }

// }

const countofprod=page.locator(".nav-link.btn.btn-primary")
console.log("count: " +await countofprod.count());




// const parentloc=page.locator("app-card-list[class='row'] h4")
// const count=await parentloc.count();
// console.log("count of products: " +count);








}
)