import{test,expect} from '@playwright/test'

test('Ele Visibility',async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const iframeID= page.frameLocator('#courses-iframe')
    await iframeID.locator('li a[href*="lifetime-access"]:visible').click()

  
   const completeText=await iframeID.locator("div[class='text'] h2").textContent()
   await console.log(completeText);
   const requiredNumber=completeText.split(" ")[1]
   console.log(requiredNumber);






})