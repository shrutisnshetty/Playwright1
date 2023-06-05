import{test,example, expect} from '@playwright/test'

test.use({viewport:{ width: 1536, height: 864 }})

test('extra',async({page})=>
{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//await expect(page).toHaveTitle('OrangeHRM')

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.locator(" button[type='submit']").click()
await page.waitForLoadState('networkidle')
console.log(await page.url());
console.log(await page.title());
const logo=page.locator(" img[alt='client brand banner']")
await expect(logo).toBeVisible()
const logovisibility=page.locator(" img[alt='client brand banner']").isVisible()
console.log(await logovisibility);
 expect(await logovisibility).toBeTruthy()

 console.log(await page.viewportSize().height);
 console.log(await page.viewportSize().width);
})