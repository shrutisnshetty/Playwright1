import{test,expect} from '@playwright/test'
import { log } from 'console';


test('childwindow',async({page})=>
{


await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

const [page1]=await Promise.all([
page.waitForEvent('popup'),
page.locator(" a[title='Follow @Lambdatesting on Twitter']").click()
])

console.log(page1.url());
})


test('Multiple windows',async({page})=>
{
await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
const [mutiplepages]=await Promise.all([
page.waitForEvent('popup'),
page.locator("#followboth").click()
])

console.log("childurl: " +mutiplepages.url);
//waits untill all pages gets loaded
await mutiplepages.waitForLoadState()
//get the no of pages opened
const NoOfPages=mutiplepages.context().pages();
console.log(NoOfPages.length);

//Using for each since its array,print the urls of windows
NoOfPages.forEach(async singlepage=>{
console.log("page urls: " +singlepage.url());

//output is 2, there are 2 urls opened
//if u want to inetratct with 1st url,u need to knw the url
let fbPage;
for(let i=0;i<NoOfPages.length;i++)
{
    const url=NoOfPages[i].url()
    if(url==="https://www.facebook.com/lambdatest/")
    {
        fbPage=NoOfPages[i];
    }
}
// const text= await fbPage("//h1").text
//const text=await fbpage.textContent("//h1")
// console.log(text);
 })
})