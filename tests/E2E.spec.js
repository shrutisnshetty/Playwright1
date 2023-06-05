import{test,expect} from '@playwright/test'
const clientdata=JSON.parse(JSON.stringify(require('../utils/ClientData.json')))

// test.beforeEach(async({page,chromium})=>
// {
// await page.goto('https://rahulshettyacademy.com/client/')
// })

test('TC',async({page})=>
{
  //test.slow(browserName === 'chromium', 'This feature is slow on chromium');
await page.goto('https://rahulshettyacademy.com/client/')
const UN=page.getByPlaceholder('email@example.com')
const PW=page.locator('#userPassword')
const loginbtn=page.locator('#login')

await UN.fill(clientdata.UserName)
await PW.fill(clientdata.Password)

await loginbtn.click()
await page.waitForLoadState('networkidle')
const cartlocator=page.locator("//button[@routerlink='/dashboard/cart']")
await page.locator("text=Add To Cart").nth(0).click();
await page.locator("text=Add To Cart").nth(1).click();
console.log("BeforeCount:" +await cartlocator.count());

const allprodlocator=page.locator(".card-body")
const count=await allprodlocator.count();
const ProductNeeded="adidas original"
for(let i=0;i<count;++i)
{
const title=await allprodlocator.nth(i).locator("b").textContent()
console.log(title);
// if(await allprodlocator.nth(i).locator("b").textContent()===ProductNeeded)
// {
 
//   await allprodlocator.nth(i).locator("text=Add To Cart").click();
//   break;
// }
}

console.log("AfterCount:" + await cartlocator.count());
await cartlocator.click()
await page.locator('div ul li').nth(0).waitFor()
const availabiltycheck=await page.locator("h3:has-text('adidas original')").isVisible()
expect(availabiltycheck).toBeTruthy()
const checkoutloc=page.locator("li[class='totalRow'] button[type='button']")
//enter ger
await checkoutloc.click()
const countrytextbox=page.getByPlaceholder('Select Country').type('ger',{delay:100})
const dropdownlist=page.locator('.ta-results.list-group.ng-star-inserted')
await dropdownlist.waitFor()
const dropdowncount=await dropdownlist.locator("button").count()
for (let i=0;i<dropdowncount;++i)
{
  const country=await dropdownlist.locator("button").nth(i).textContent();
  //if(country?.trim()=== "Germany")
  if(country?.includes("Germany"))
  {
    await dropdownlist.locator("button").nth(i).click();
    break;
  }
}
await page.locator('.btnn.action__submit.ng-star-inserted').click()
const thankuTextloc=page.locator('.hero-primary');
console.log("TextOnLastPage" +await thankuTextloc.textContent());
await expect(thankuTextloc).toContainText('Thankyou for the order. ')
const OrderIDs=await page.locator("tr[class='ng-star-inserted'] .ng-star-inserted").allTextContents();
console.log("Order IDs: " +OrderIDs);

const ordersLoc=page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']")
await ordersLoc.click()
await page.locator('tbody').waitFor()

const orderIdLoc=page.locator('tbody tr')
const orderIdcount=await orderIdLoc.count()
for(let i=0;i<orderIdcount;++i)
{
  const IDs=await orderIdLoc.nth(i).locator('th').textContent()
  console.log(IDs);
  
}



})