import {test,expect} from '@playwright/test'


test('FileUpload from local system',async({page})=>
{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("/Users/shrut/Desktop/uploadfile1.docx")

await page.locator('#file-submit').click()
const textmsg=page.locator('h3')
console.log(await textmsg.textContent())

})

test.only('FileUpload from VScode',async({page})=>
{
await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("#file-upload").setInputFiles("./FileUpload/textboxss.png")

await page.locator('#file-submit').click()
const textmsg=page.locator('h3')
console.log(await textmsg.textContent())

})