import{test,expect,request} from '@playwright/test'
const loginPayload={userEmail:"shrutishetty4892@gmail.com",userPassword:"abc123"};
let token;

test('tc',async()=>
{
    const ApiContext=await request.newContext();
    const loginResponse=await ApiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login/",
    {
        data:loginPayload
    })

//expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson=await loginResponse.json();
const token=await loginResponseJson.token;
console.log(token);

});