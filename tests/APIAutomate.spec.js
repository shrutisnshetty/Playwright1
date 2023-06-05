import{test,expect,request} from '@playwright/test'
const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderPayload={orders: [{country: "Germany", productOrderedId: "6262e95ae26b7e1a10e89bf0"}]};

let token;

test('Login API',async()=>
{
    //loginAPI
    //create new context using 'request' its a API helper
    //instead of creating context using browser ,create using request
    //instead of using context.page, use context.post()
    const ApiContext=await request.newContext();
    const loginResponse=await ApiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login/",
    {
        data:loginPayLoad
    })
//expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson=await loginResponse.json();
console.log("login Response:" +loginResponseJson);
console.log(loginResponseJson);
const token=await loginResponseJson.token;
console.log(token);
//create order API
const orderResponse=await ApiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
{
    data:orderPayload,
    headers:
    {
    'Authorization':token,
    'Content-Type':'application/json'
 },
})
const orderResponseJson=await orderResponse.json();
console.log(orderResponseJson);
const orderID=await orderResponseJson.orders[0];
console.log(orderID);

})

test('Order API',async()=>
{ //create order API
    const ApiContext1=await request.newContext();

const orderResponse=await ApiContext1.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
{
    data:orderPayload,
    headers:
    {
    'Authorization':token,
    'Content-Type':'application/json'
 },
})
const orderResponseJson=await orderResponse.json();
console.log(orderResponseJson);
const orderID=await orderResponseJson.orders[0];
console.log(orderID);

})



test('Injecting Tokrn',async({page})=>{

    page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    }, token );


await page.goto("https://rahulshettyacademy.com/client/");
//print the title of the page
console.log("page title: " +await page.title());
console.log("page url: " +await page.url());

const products=page.locator(".card-body")
console.log(await page.locator(".card-body b").nth(0).textContent());
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);
//console.log(await allprod.nth(0).textContent());

//await page.waitForLoadState('networkidle')
// const cartlocator=page.locator("//button[@routerlink='/dashboard/cart']")
// await page.locator("text=Add To Cart").nth(0).click();
// await page.locator("text=Add To Cart").nth(1).click();
// console.log("BeforeCount:" +await cartlocator.count());

// const allprodlocator=page.locator(".card-body")
// const count=await allprodlocator.count();
// const ProductNeeded="adidas original"
// for(let i=0;i<count;++i)
// {
// const title=await allprodlocator.nth(i).locator("b").textContent()
// console.log(title);
// // if(await allprodlocator.nth(i).locator("b").textContent()===ProductNeeded)
// // {
 
// //   await allprodlocator.nth(i).locator("text=Add To Cart").click();
// //   break;
// // }
// }

// console.log("AfterCount:" + await cartlocator.count());
// await cartlocator.click()
// await page.locator('div ul li').nth(0).waitFor()
// const availabiltycheck=await page.locator("h3:has-text('adidas original')").isVisible()
// expect(availabiltycheck).toBeTruthy()
// const checkoutloc=page.locator("li[class='totalRow'] button[type='button']")
// //enter ger
// await checkoutloc.click()
// const countrytextbox=page.getByPlaceholder('Select Country').type('ger',{delay:100})
// const dropdownlist=page.locator('.ta-results.list-group.ng-star-inserted')
// await dropdownlist.waitFor()
// const dropdowncount=await dropdownlist.locator("button").count()
// for (let i=0;i<dropdowncount;++i)
// {
//   const country=await dropdownlist.locator("button").nth(i).textContent();
//   //if(country?.trim()=== "Germany")
//   if(country?.includes("Germany"))
//   {
//     await dropdownlist.locator("button").nth(i).click();
//     break;
//   }
// }
// await page.locator('.btnn.action__submit.ng-star-inserted').click()
// const thankuTextloc=page.locator('.hero-primary');
// console.log("TextOnLastPage" +await thankuTextloc.textContent());
// await expect(thankuTextloc).toContainText('Thankyou for the order. ')
// const OrderIDs=await page.locator("tr[class='ng-star-inserted'] .ng-star-inserted").allTextContents();
// console.log("Order IDs: " +OrderIDs);

// const ordersLoc=page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']")
// await ordersLoc.click()
// await page.locator('tbody').waitFor()

// const orderIdLoc=page.locator('tbody tr')
// const orderIdcount=await orderIdLoc.count()
// for(let i=0;i<orderIdcount;++i)
// {
//   const IDs=await orderIdLoc.nth(i).locator('th').textContent()
//   console.log(IDs);
  
// }



})