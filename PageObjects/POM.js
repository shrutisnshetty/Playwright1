import { LoginPageObject } from "./LoginPageObject";

export class POM
{
    constructor(page,expect)
    {
        this.page=page;
        this.expect=expect;
        this.loginPage=new LoginPageObject(this.page,this.expect);
    }
   
    getLoginPage()
    {
        return this.loginPage;
    }
}