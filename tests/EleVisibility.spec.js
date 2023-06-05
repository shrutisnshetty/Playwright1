import{test,expect} from '@playwright/test'

test('Ele Visibility',async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const hideshowTextBox=page.locator('#displayed-text')
    const hideBtn=page.locator('#hide-textbox')
    const showBtn=page.locator('#show-textbox')
    const javapopup=page.locator('#confirmbtn')
    const mousehover=page.locator('#mousehover')
    // page.on('dialog',dialog=>dialog.accept());
    //page.on('dialog',dialog=>dialog.dismiss());
    await expect(hideshowTextBox).toBeVisible()
    //anotherway
    const visible=await hideshowTextBox.isVisible()
     expect(visible).toBeTruthy()
    await hideBtn.click()
    await expect(hideshowTextBox).toBeHidden()
      //anotherway
    const visible2=await hideshowTextBox.isVisible()
    console.log(visible2);
    expect(visible2).toBeFalsy()
    await showBtn.click()
    await expect(hideshowTextBox).toBeVisible()
      //anotherway
      const visible3=await hideshowTextBox.isVisible()
      console.log(visible3);
      expect(visible3).toBeTruthy()
      await javapopup.click()
      await hideBtn.click()
      await page.pause()
      await expect(hideshowTextBox).toBeHidden()
      await showBtn.click()
      await mousehover.hover()
      //await page.waitForTimeout(20000)
      const mouseoptions=page.locator('div.mouse-hover-content a')
        console.log(await mouseoptions.allTextContents())
    }
)