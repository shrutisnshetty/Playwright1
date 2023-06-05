

//import{test,expect} from '@playwright/test'

const{test,expect}=require('@playwright/test')
test('TC',async({browser})=>
{
  //test.slow(browserName === 'chromium', 'This feature is slow on chromium');
  const context=await browser.newContext()
  const page=await context.newPage()
await page.goto('https://demo.nopcommerce.com/register')
const UN=page.getByPlaceholder('email@example.com')
const PW=page.locator('#userPassword')
const loginbtn=page.locator('#login')
await un

const page1=await context.newPage()
await page1.goto('https://demo.nopcommerce.com/register')

})
