import { test, expect } from '@playwright/test'
//import {customtest} from '../utils/test-base'
const {customtest} = require('../utils/test-base');
import { POM } from '../PageObjects/POM'


customtest('Loginto HRM', async ({ browser,LoginDataset1 }) => {
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
    await LP.validLogin(LoginDataset1.HRMUsername, LoginDataset1.HRMPassword)


}
)
