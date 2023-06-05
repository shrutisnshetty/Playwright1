import{test,expect,request} from '@playwright/test'
const loginDataSet = JSON.parse(JSON.stringify(require('../utils/LoginPageTestData.json')))



test('NetworkcallAbort for .css',async({browser})=>
{
   const context= await browser.newContext()
   const page=await context.newPage()
   //ROUTE,ABORT
   //block all network whose extension is .css: **/* indicates any url
   page.route('**/*.css',route=>route.abort());
   //Block the n/w calls having extesnion .jpg,.png,.jpeg
   page.route('**/*.{jpeg,png,jpg}',route=>route.abort());
   const usernamelocator=page.locator('#username')
const passwordlocator=page.locator('#password')
const signinlocator=page.locator('#signInBtn')

    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/')
 
    //any url ends with .css
    
await usernamelocator.fill(loginDataSet.validUsername)

await passwordlocator.fill(loginDataSet.validPassword)
await signinlocator.click();
await page.pause()

})