import{test,expect} from '@playwright/test'
const clientdata=JSON.parse(JSON.stringify(require('../utils/ClientData.json')))

test.beforeEach(async({page})=>
{
await page.goto('https://rahulshettyacademy.com/client/')
})

test('TC',async({page})=>
{
const UN=page.getByPlaceholder('email@example.com')
const PW=page.locator('#userPassword')
const loginbtn=page.locator('#login')

await UN.fill(clientdata.UserName)
await PW.fill(clientdata.Password)
await loginbtn.click()
await page.waitForLoadState('networkidle')
//Using $$ ,Iterative thru products and display all products titles
// const allprods=await page.$$('div h5 b')
// for(let prod of allprods)
// {
//   const prodtitle=await prod.textContent()
//   console.log("Iterate using $$: " +prodtitle);
// }

//Another of Iterating
const prods=page.locator('div h5 b')
console.log("last prod name: " +await prods.last().textContent())  //Last ele
console.log("all prods array :" +await prods.allTextContents())  //ALl contains
//nth(0)=first, nth(1)=second ele, first(),last()

for(let i=0;i<prods.count;++i)
{
  const requiredprod=prods.nth(i).textContent()
    if(await requiredprod.includes('zara coat'))
    {
      await prods.nth(i).filter({hasText:' Add To Cart'}).click()
    }
}


})