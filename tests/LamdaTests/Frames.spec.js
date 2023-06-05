import{test,expect} from '@playwright/test'


test('Frames',async({page})=>
{

await page.goto('https://letcode.in/frame');
const allframes=page.frames()
console.log("Frames: " +allframes.length);
const frame1=page.frameLocator('#firstFr')
const fname="shruti"
const lname="shetty"
await frame1.locator(" input[placeholder='Enter name']").fill(fname)
await frame1.locator(" input[placeholder='Enter email']").fill(lname)
const text=await frame1.locator(".title.has-text-info").textContent()
console.log(text);
expect(text).toContain(fname)

//Nested Frames
const nestedframe=frame1.frameLocator("iframe[src='innerFrame']")
await nestedframe.locator(" input[placeholder='Enter email']").fill(lname)

console.log(await nestedframe.locator(" input[placeholder='Enter email']").inputValue());

//go back to frame and enter fname
await frame1.locator(" input[placeholder='Enter name']").fill("preeti")
console.log(await frame1.locator(" input[placeholder='Enter email']").inputValue());

})