import{test,expect} from '@playwright/test'


test('Date',async({page})=>
{
let date="1992-08-04"
await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
await page.locator("#birthday").fill(date)
await page.waitForEvent(2000)
})

test.only('calendar using movement',async({page})=>
{
let date="1992-08-04"
await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
await page.locator(" //input[@placeholder='Start date']")
const ddmm=page.locator("//input[contains(@placeholder,'Start date')]")
const prevbtn=page.locator("div[class='datepicker-days'] th[class='prev']")
const nextbtn=page.locator("div[class='datepicker-days'] th[class='next']")

await ddmm.click()
await page.locator("//td[@class='day'][text()='4']").click()

//await page.waitForEvent(2000)
})