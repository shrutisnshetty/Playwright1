const {test,expect} =require('@playwright/test')
const Items=[
    "hi",
    "hello",
    "namaste"
]

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

test.describe('Add ITMES', () => {
    test('1st item', async ({ page }) => {

        const inputTextBox=page.locator("input[placeholder='What needs to be done?']")
        await inputTextBox.fill(Items[0])
        console.log(await inputTextBox.inputValue());
        await inputTextBox.press('Enter');
        const title=page.getByTestId('todo-title')
        await expect(title).toHaveText([Items[0]])
    })

    test('second item', async ({ page }) => {
        const inputTextBox=page.locator("input[placeholder='What needs to be done?']")
        await inputTextBox.fill(Items[1])
        console.log(await inputTextBox.inputValue());
        await inputTextBox.press('Enter');
        const title=page.getByTestId('todo-title')
        await expect(title).toHaveText([Items[1]])
        

      //  await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0]]);
    
})
})