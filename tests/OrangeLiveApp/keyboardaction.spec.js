import{test,expect} from '@playwright/test'

test('Ele Visibility',async({page})=>
{
await page.goto('https://ecommerce-playground.lambdatest.io/')
console.log(await page.getByRole('link', { name: 'Poco Electro' }).textContent())
//const searchbar= 
await page.getByRole('textbox', { name: 'Search For Products' }).focus()
await page.keyboard.type('phone')
//await page.keyboard.press('Enter')
//select the context and backspace
//await page.keyboard.press('Control+A')
await page.keyboard.press('Control+A')
//await page.screenshot({ path: 'selecAll.png' });

//await page.screenshot({ path: 'Backspace.png' });
await page.keyboard.press('Control+C')
await page.keyboard.press('Backspace')
await page.keyboard.press('Control+V')
await page.screenshot({ path: 'paste.png' });
await page.keyboard.press("ArrowLeft")
await page.keyboard.down('Shift')
for(let i=0;i<2;i++)
{
    await page.keyboard.press('ArrowLeft')
}
await page.keyboard.up('Shift')
await page.keyboard.press('Backspace')
const text=await page.getByRole('textbox', { name: 'Search For Products' }).inputValue()
console.log(text);

})