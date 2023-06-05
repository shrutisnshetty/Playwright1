import{test,example, expect} from '@playwright/test'

test('extra',async({page})=>
{
await page.goto('https://freelance-learn-automation.vercel.app/signup')
await page.waitForTimeout(5000)
//await expect(page).toHaveTitle('OrangeHRM')


// let allele=await state.$$("option")
// for(let i=0;i<allele.lenght;i++)
// {
//     let element=allele[i]
//     let value=await element.textContent()
//     console.log(value)

// }

let allele1= page.locator('#state option')
console.log(await allele1.allTextContents());
//console.log(await allele1.nth(0).textContent());

let count=await allele1.count()
for(let i=0;i<count;i++)
{
    console.log(await allele1.nth(i).textContent())

}
let allele2= await page.$$('#state option')
for(const ele of allele2)
{
    console.log(await ele.textContent())
}
})


test.only('loop',async({page})=>
{
await page.goto('https://google.com')
//await page.waitForTimeout(5000)
const search=page.locator('#APjFqb')
await page.getByRole('button', { name: 'Alle ablehnen' }).click()
await page.getByRole('link', { name: 'English' }).click()
await page.getByRole('combobox', { name: 'Search' }).type("playwright")
//await page.keyboard.press('Enter')
await page.waitForSelector("li[role='presentation']");
const ele1=await page.$$("li[role='presentation']")
for(let i=0;i<ele1.length;i++)
{
   const text=await ele1[i].textContent()
   console.log(text);
if(text.includes('git'))
{
await ele1[i].click()
console.log(await search.inputValue())
break
}
}

})