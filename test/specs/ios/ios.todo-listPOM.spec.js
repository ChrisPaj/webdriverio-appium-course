const ListScreen = require('../../screenobjects/ios/list.screen')

describe('Todo List', () => {
  it('Create a Todo List', async () => {
    await ListScreen.createListBtn.click()
    await ListScreen.listNameInput.setValue('My First Todo List')
    await ListScreen.createBtn.click()
    await expect(await ListScreen.listNameField('My First Todo List')).toBeDisplayed()
  })
})