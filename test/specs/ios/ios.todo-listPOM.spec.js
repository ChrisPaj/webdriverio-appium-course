const ListScreen = require('../../screenobjects/ios/list.screen')
const ItemScreen = require('../../screenobjects/ios/item.screen')

describe('Todo List', () => {
  it('Create a Todo List', async () => {
    await ListScreen.createListBtn.click()
    await ListScreen.listNameInput.setValue('My First Todo List')
    await ListScreen.createBtn.click()
    await expect(await ListScreen.listNameField('My First Todo List')).toBeDisplayed()
  })

  it.only('Create Todo List with Item(s)', async () => {
    await ListScreen.createListBtn.click()
    await ListScreen.listNameInput.setValue('My Second Todo List')
    await ListScreen.createBtn.click()
    await expect(await ListScreen.listNameField('My Second Todo List')).toBeDisplayed()

    await ItemScreen.startItem.click()
    await ItemScreen.createItemButton.click()
    await ItemScreen.title.setValue('Walk the dog')
    await ItemScreen.due.click()
    await ItemScreen.datePicker.click()
    await ItemScreen.dateDayOfMonth.click()
    await ItemScreen.donePicker.click()
    await ItemScreen.createItem.click()

    // Assertions

    const day = 15
    const date = new Date()
    date.setMonth(date.getMonth() + 1)
    const year = date.getFullYear()
    const monthName = date.toLocaleString('en-US', { month: 'long' })

    const expectedDueText = `Due ${day}. ${monthName} ${year}`
    await expect(await ItemScreen.itemTextField('Walk the dog')).toBeDisplayed()
    await expect(await ItemScreen.itemDueDateField(expectedDueText)).toBeDisplayed()
  })
})