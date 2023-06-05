import { test, expect } from '@playwright/test'
//import { LoginPageObject } from '../PageObjects/LoginPageObject'
import { POM } from '../PageObjects/POM'
const loginDataSet = JSON.parse(JSON.stringify(require('../utils/LoginPageTestData.json')))

test('Loginto HRM', async ({ browser }) => {
    //browser context creation and newpage
    const context = await browser.newContext()
    const page = await context.newPage()

    //creating object of Pageobject manager class
    const pom = new POM(page, expect)

    //Using object of pom ,call Loginpage object
    const LP = pom.getLoginPage()

    //Using object of loginpage call methods present in loginpageobject
    await LP.launchurl()
    await LP.ValidateLogo()
    await LP.validLogin(loginDataSet.HRMUsername, loginDataSet.HRMPassword)


}
)