import{test,expect} from '@playwright/test'
const clientdata=JSON.parse(JSON.stringify(require('../utils/ClientData.json')))
let webContext;
test.beforeEach(async({browser})=>
{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://rahulshettyacademy.com/client/')
    const UN=page.getByPlaceholder('email@example.com')
    const PW=page.locator('#userPassword')
    const loginbtn=page.locator('#login')
    await UN.fill(clientdata.UserName)
    await PW.fill(clientdata.Password)
    await loginbtn.click()
    await page.waitForLoadState('networkidle')
    const allprodlocator=page.locator(".card-body b")
    console.log(await allprodlocator.nth(0).textContent())
    const cartlocator=page.locator("//button[@routerlink='/dashboard/cart']")
    await page.locator("text=Add To Cart").nth(0).click();
    await page.locator("text=Add To Cart").nth(1).click();
    //stateSTorage
    await context.storageState({path:'states.json'});
    webContext=await browser.newContext({storageState:'states.json'})

})

test('stateStorage TC', async()=>
{
    const page=await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/')
    const allprodlocator=page.locator(".card-body b")
    //await allprodlocator.nth(0).waitFor();
   // await page1.waitForTimeout()
    console.log(await allprodlocator.nth(0).textContent())
    const cartlocator=page.locator("//button[@routerlink='/dashboard/cart']")
    await page.locator("text=Add To Cart").nth(0).click();
    await page.locator("text=Add To Cart").nth(1).click();

})