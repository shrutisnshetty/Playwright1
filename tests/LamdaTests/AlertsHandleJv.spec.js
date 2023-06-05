import{test,expect} from '@playwright/test'

// test.use({
// browserName:"firefox"

// })
//test.describe.configure({mode:"serial"})


test('JS ALERT-JAVA Aleter-has OK btn',async({page})=>
{

await page.goto('https://www.LambdaTest.com/selenium-playground/javascript-alert-box-demo');
//alert or use dialog its user defined name-acts a event listener
page.on('dialog',async(alert)=>{
    //below 2 lines to get the text on pop up
    const text=alert.message();
    console.log(text);
    await alert.accept(); //this clicks on ok
})
  await page.locator("button:has-text('Click Me')").nth(0).click()
  await page.waitForTimeout(2000)
})


test('CONFIRM BOX_OK and CANCEL btn',async({page})=>
{

await page.goto('https://www.LambdaTest.com/selenium-playground/javascript-alert-box-demo');
//alert or use dialog its user defined name-acts a event listener
page.on('dialog',async(alert)=>{
    //below 2 lines to get the text on pop up
    const text=alert.message();
    console.log(text);
  //  await alert.accept(); //this clicks on ok
    await alert.dismiss();   //To cancel
})
  await page.locator("button:has-text('Click Me')").nth(1).click()
//await expect(page.locator("#confirm-demo")).toContainText('OK!')
await expect(page.locator("#confirm-demo")).toContainText('Cancel!')
})

// test('PROMPT BOX_OK and CANCEL btn-On popup Enter some text',async({page})=>
// {
// await page.goto('https://www.LambdaTest.com/selenium-playground/javascript-alert-box-demo');
// //alert or use dialog its user defined name-acts a event listener
// page.on('dialog',async(alert)=>{
//     //below 2 lines to get the text on pop up
//     const text=alert.defaultValue();
//     console.log(text);
//   await alert.accept("SHRUTI"); //this clicks on ok->You have to enter TEXT then perfrom ok or cancel
//   //  await alert.dismiss();   //To cancel
// })
//   await page.locator("button:has-text('Click Me')").nth(2).click()
//   await expect(page.locator("prompt-demo")).toContainText("You have entered")

// })

test('Modal alters-boot strap',async({page})=>
{//These alerts are mot java alerts, can be inspected
//cancel and save changes btns
await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo')
await page.locator("//button[@data-target='#myModal']").click()
await page.locator(" //div[@id='myModal']//button[@type='button'][normalize-space()='Save Changes']").click()
//page.locator("//button[text()='Save Changes'])[1]")
await expect(page.locator("//h4[normalize-space()='Modal Title']")).toContainText('Modal')
await console.log(await page.locator("//h4[normalize-space()='Modal Title']").textContent())
//console.log(await page.locator("div[id='myModal'] p").textContent());


})
//})