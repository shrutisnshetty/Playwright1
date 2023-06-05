import{test,expect} from '@playwright/test'

test('Ele Visibility',async({browser})=>
{

  const conext=  await browser.newContext()
  const page=await conext.newPage()
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //await expect(page).toHaveTitle('OrangeHRM')
  
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.locator(" button[type='submit']").click()
  await page.waitForLoadState('networkidle')
  console.log(await page.url());

 const page1=await conext.newPage()
 await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 await page1.waitForTimeout(1000)

 const conext1=  await browser.newContext()
  const page2=await conext1.newPage()
  await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page2.waitForTimeout(1000)

})

test.only('Ele ',async({browser})=>
{

  const conext=  await browser.newContext()
  const page=await conext.newPage()
  await page.goto('https://www.google.com/')
  await page.getByRole('button', { name: 'Alle ablehnen' }).click()
  await page.getByRole('link', { name: 'English' }).click()

  await page.waitForTimeout(1000)
page.waitForEvent('')
  //const navigationPromise=page.waitForNavigation
//click on ..await navigationPromise
  //await expect(page).toHaveTitle('OrangeHRM')
})