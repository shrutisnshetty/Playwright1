import { expect } from '@playwright/test'

export class LoginPageObject {


  constructor(page, expect) {
    //Class variables
    this.page = page;
    this.expect = expect;
    // Locators
    this.username = page.getByPlaceholder('username');
    this.password = page.getByPlaceholder('password');
    this.logintbn = page.locator("button[type='submit']")
    this.logo = page.getByAltText("company-branding");
  }

  async launchurl() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  }

  async ValidateLogo() {
    await this.expect(this.logo).toBeVisible()
    // console.log(await (this.logo).textContent());
  }

  async validLogin(username, password) {
    await this.username.type(username)
    //print the value entererd in username textbox

    console.log(await (this.username).inputValue());
    await this.password.type(password)
    await this.logintbn.click()
  
    await this.page.waitForLoadState('networkidle')
    await this.page.screenshot({path:'./Screenshots/HomePage.png'})
    //await this.page.screenshot({path:'HomePage.png'})
  
  }
}