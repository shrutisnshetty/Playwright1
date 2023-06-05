import{test,expect} from '@playwright/test'

test('Screenshots', async({page})=>
{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const hideshowTextBox=page.locator('#displayed-text')
    const hideBtn=page.locator('#hide-textbox')
    const showBtn=page.locator('#show-textbox')
    const javapopup=page.locator('#confirmbtn')
    const mousehover=page.locator('#mousehover')

// await hideBtn.screenshot({path:'tests/ss/textboxss.png'})
// await mousehover.hover();
// await page.screenshot({path:'tests/ss/completepage.png'})


await hideBtn.screenshot({path:'textboxss.png'})
await mousehover.hover();
await page.screenshot({path:'completepage.png'})

})

test.only('Visual Testing', async({page})=>
{

    await page.goto('https://selectorshub.com/xpath-practice-page/')
    await page.waitForTimeout(10000)
    expect (await page.screenshot()).toMatchSnapshot('matchss.png')

})