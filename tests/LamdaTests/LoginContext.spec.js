import{test,expect, chromium} from '@playwright/test'
import { checkPrime } from 'crypto'

test('Lamda Login and COntext',async()=>
{

    const browser=await chromium.launch(
        {

            headless:false
        }
    )
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']").hover()
 await page.locator("text=Login").click()
    //or
   // await page.locator("'Login'").click()
  
   await page.getByPlaceholder('E-Mail Address').fill('shrutishetty4892@gmail.com')
   await page.getByPlaceholder('Password').fill('P@@44shrua1')
   await page.getByRole('button', { name: 'Login' }).click()
   await page.waitForTimeout(2000)
   console.log(page.url());

//Using same context create one more page then launch same url again=>you will be logged into account
//same Browserw window=>old Context=>New TAB
const page1=await context.newPage()      //Old window //New page(tab)
await page1.goto('https://ecommerce-playground.lambdatest.io/')
console.log(page1.url());

//Now create one more context,using new context create new page then launch same url=>You wont be logged in
//Different Window=>Fresh browser->No cookies
const context2=await browser.newContext()  //New window
const page2=await context2.newPage()     //New page(tab)
await page2.goto('https://ecommerce-playground.lambdatest.io/')
console.log(page2.url());
await page.waitForTimeout(3000);

}
)