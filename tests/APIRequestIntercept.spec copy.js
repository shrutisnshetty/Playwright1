import{test,expect,request} from '@playwright/test'

const fakePayLoadOrders = {data:[],message:"No Orders"};

test('ResponseIntercept',async({browser})=>
{
   const context= await browser.newContext()
   const page=await context.newPage()
    await page.goto('https://rahulshettyacademy.com/client/')
    const UN=page.getByPlaceholder('email@example.com')
const PW=page.locator('#userPassword')
const loginbtn=page.locator('#login')
await UN.fill('shrutishetty4892@gmail.com')
await PW.fill('abc123')
await loginbtn.click()
await page.locator("button[routerlink*='myorders']").click();
await page.waitForSelector("tbody tr").nth(0)




})