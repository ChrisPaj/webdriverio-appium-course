describe('Todo List', () => {
  it('Create a Todo List', async () => {
    const createListPredicate = 'name == "Create list" AND label == "Create list" AND value == "Create list"'
    // predicate string
    await $(`-ios predicate string:${createListPredicate}`).click()
    // short form of xpath syntax
    await $('//*[@value="List Name"]').setValue('My First Todo List')
    // accessibility id
    await $('~Create').click()
    await expect(await $('~My First Todo List')).toBeDisplayed()
  })

  it.only('Create Todo List with Item(s)', async () => {
    const createListPredicate = 'name == "Create list" AND label == "Create list" AND value == "Create list"'
    // predicate string
    await $(`-ios predicate string:${createListPredicate}`).click()
    // short form of xpath syntax
    await $('//*[@value="List Name"]').setValue('My Second Todo List')
    // accessibility id
    await $('~Create').click()
    await expect(await $('~My Second Todo List')).toBeDisplayed()

    await $('//*[@name="My Second Todo List"]').click()
    await $('//*[@name="Create item"]').click()
    await $('//*[@value="Title"]').setValue('Walk the dog')
    await $('//*[@value="Due"]').click()
    await $('~DatePicker.NextMonth').click()
    await $('~15').click()
    await $('~Done').click()
    await $('~Create').click()

    // Assertions

    const day = 15
    const date = new Date()
    date.setMonth(date.getMonth() + 1)
    const year = date.getFullYear()
    const monthName = date.toLocaleString('en-US', { month: 'long' })

    const expectedDueText = `Due ${day}. ${monthName} ${year}`
    await expect(await $('~Walk the dog')).toBeDisplayed()
    await expect(await $(`~${expectedDueText}`)).toBeDisplayed()
  })
})