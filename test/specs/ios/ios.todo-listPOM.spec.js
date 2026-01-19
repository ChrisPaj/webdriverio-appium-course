// const ListScreen = require('../../screenobjects/ios/list.screen').default
// const ItemScreen = require('../../screenobjects/ios/item.screen').default

import ListScreen from '../../screenobjects/ios/list.screen'
import ItemScreen from '../../screenobjects/ios/item.screen'

describe('Todo List', () => {
  before(async () => {
    // Create a Todo List
    await ListScreen.createListBtn.click()
    await ListScreen.listNameInput.setValue('Generic Todo List')
    await ListScreen.createBtn.click()
    await expect(await ListScreen.listNameField('Generic Todo List')).toBeDisplayed()
    await ListScreen.openItem.click()
  })

  // it('Create and open a Todo List', async () => {
  //   await ListScreen.createListBtn.click()
  //   await ListScreen.listNameInput.setValue('My First Todo List')
  //   await ListScreen.createBtn.click()
  //   await expect(await ListScreen.listNameField('My First Todo List')).toBeDisplayed()
  //   await ListScreen.openItem.click()
  // })

  it.only('Create Todo List with Item(s)', async () => {
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