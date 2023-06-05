const{test,expect}=require('@playwright/test')

const LoginDetails=
{
    ValidUsername:"Admin",
    ValidPassword:"admin123",
    InvalidUsername:"abc",
    InvalidPassword:"xyz"
}
// test.beforeEach(async({page})=>
// {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// })

test.describe('Test Suite',async()=>
{
test('Invalid Login',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.getByPlaceholder('Username')).toHaveAttribute('name','username')
    await page.getByPlaceholder('Username').fill(LoginDetails.InvalidUsername)
    await page.getByPlaceholder('Password').fill(LoginDetails.InvalidPassword)
    //Negative Test
    //await expect(ErrorMsgLoc).toBeVisible()
    await page.locator(" button[type='submit']").click()
    const ErrorMsgLoc=page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
    
    await expect(ErrorMsgLoc).toBeVisible()
    const ErrorMsg=await ErrorMsgLoc.textContent()
     console.log(ErrorMsg);
    await expect(ErrorMsgLoc).toContainText('Invalid')
    await expect(ErrorMsgLoc).toHaveText('Invalid credentials')
    })

test('ENable DIsbale',async({page})=>
{
    await page.goto('https://demo.nopcommerce.com/register/')
    const searchLoc=page.getByPlaceholder('Search store')
   await expect(searchLoc).toBeEnabled()
   //Negative
   //await expect(searchLoc).toBeDisabled()
   await page.searchLoc.fill("")
   
})
    
test.only('Checked',async({page})=>
{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Fsearch%3Fq%3Dcomputer')
   
   const maleRadiobtn=page.locator('#gender-male')
   console.log(await maleRadiobtn.isChecked());
   await maleRadiobtn.screenshot({path:'tests/ss/onlyradiobtn.png'})
   const a=maleRadiobtn.isChecked()
  expect(await a).toBeFalsy()
   //negative
   //expect(await a).toBeTruthy()
   await maleRadiobtn.check()
   await page.screenshot({path:'tests/ss/pageradiobtn.png'})
   console.log(await maleRadiobtn.isChecked());
   expect(await maleRadiobtn.isChecked()).toBeTruthy()

})
test('Valid Login',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill(LoginDetails.ValidUsername)
    await page.getByPlaceholder('Password').fill(LoginDetails.ValidPassword)
    await page.locator(" button[type='submit']").click()
    await page.waitForLoadState('networkidle')
    console.log(page.url());
    console.log(await page.title());
    await expect(page).toHaveURL(/index/)
    await expect(page).toHaveTitle(/Orange/)
})
})