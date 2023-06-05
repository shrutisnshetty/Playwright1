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
/*

//Fake the response before clicking orders button,becz we need to modify the response coming after orders click
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6442e0c1568c3e9fb158f9cd",
async route=>
{
    //intercepting the response
//once API gives response->|fake the response,PW|||->send the response to browser->front end
//page.request indicates its API mode not browser mode,its a helper
//route ll have complete info like request,response,headers.cookies
//fetch(route.request)-we are fetching only request becz we have passed only request url in the route as 1st argument
const response=await page.request.fetch(route.request());  //this ll have the real response
//fullfill send sthe response to browser->render to front end, but while sending we shld fake it else as it original ll be sent
let body=fakeOrdersPlayload;
route.fulfill(
{
    response, //this is orginal response
    body, 
//body has fake response, it will override the body to response.Now response var ll have 
//fake response wat we passed in the body var

});

});
*/
//FAKE
//wen u recive this URL, reroute to ->fake body injecting to it
//REQUEST,ROUTE,FULLFILL and BODY
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/62026f4edfa52b09e0a20b18",
async route=>
{
  const response =  await page.request.fetch(route.request());
  let body =fakePayLoadOrders;
   route.fulfill(
      {
        response,
        body,

      });
    //intercepting response - APi response->{ playwright fakeresponse}->browser->render data on front end
});

await page.locator("button[routerlink*='myorders']").click();
//await page.pause();
console.log(await page.locator(".mt-4").textContent());

});



