import{test,expect} from '@playwright/test'
import { log } from 'console';


test('UploadFIles',async({page})=>
{

await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');
await page.locator(' #file').setInputFiles("./FileUpload/textboxss.png")
console.log( page.url());

})

test('Only DOwnlaod not storing the file',async({page})=>
{
//Download and path are given by PW
await page.goto('https://www.lambdatest.com/selenium-playground/download-file-demo');
const[Download]=await Promise.all([
    page.waitForEvent("download"),
    page.locator("//button[normalize-space()='Download File']").click()
])
const pathofdownloadedfile=await Download.path()
console.log("path:" +pathofdownloadedfile);
console.log( page.url());
})

test('DOwnlaod and save the file',async({page})=>
{

//second way changes from 1st one is [] ary and cas Downlaod to download
await page.goto('https://www.lambdatest.com/selenium-playground/download-file-demo');
const download=await Promise.all([
    page.waitForEvent("download"),
    page.locator("//button[normalize-space()='Download File']").click()
])

const pathofdownloadedfile=await download[0].path()
console.log("path:" +pathofdownloadedfile);
console.log( page.url());
//once the browser closes, downloaded file gets delete so write below 2 lines of code to save the file:
const fileName=download[0].suggestedFilename();
await download[0].saveAs(fileName)
})

// test.skip('Upload FIle-File chooser/Local',async({page})=>
// {

// //second way changes from 1st one is [] ary and cas Downlaod to download
// await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');
// const [UploadFIles]=await Promise.all([
//     page.waitForEvent('filechooser'),
//     page.locator("//input[@id='file']").click()
// ])
// const ismultiple= UploadFIles.isMultiple()
// console.log(ismultiple);
// UploadFIles.setFiles(
//     ["/Users/shrut/Desktop/uploadItems/abc.pdf","/Users/shrut/Desktop/uploadItems/xyz.pdf"])


// })
