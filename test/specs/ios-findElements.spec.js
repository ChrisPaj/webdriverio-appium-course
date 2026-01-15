describe('iOS find Element', () => {
  it('find element by accessibility id', async () => {
    await $('~Alert Views').click()
    await $('~Simple').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })

  it('find by tag name', async () => {
    // single element text (because first element)
    console.log(await $('XCUIElementTypeStaticText').getText());

    // multiple elements
    const textElements = await $$('XCUIElementTypeStaticText');

    for (const element of textElements) {
      console.log(await element.getText());
    }
  })

  it('find element xpath', async () => {
    // general xpath syntax: (//tagname[@attribute=value])
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click()

    // unspecific xpath
    // await $('//*[@name="Alert Views"]').click()
    // await $('//*[@label="Simple"]').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })

  it('find element by class chain', async () => {
    // class chain: **/XCUIElementTypeStaticText[`name == "Alert Views"`]
    // const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]'

    // high amount of flexibility_
    // https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
    const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
    await $(`-ios class chain:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })

  it('find element by predicate string', async () => {
    // const alertText = 'label == "Alert Views"'

    // high amount of flexibility:
    // https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
    const alertText = 'value BEGINSWITH[c] "alert"'
    await $(`-ios predicate string:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })

  it.only('Exercise: Enter text in the search field', async () => {
    await $('~Search').click()
    await $('~Default').click()

    const text = 'type == "XCUIElementTypeSearchField"'
    await $(`-ios predicate string:${text}`).addValue("I love this course!")
    await expect($(`-ios predicate string:${text}`)).toHaveAttr("value", "I love this course!")

    // const clearButton = 'name == "Cancel" AND label == "Cancel" AND value == "Cancel"'
    // await $(`-ios predicate string:${clearButton}`).click()
    // await expect($(`-ios predicate string:${text}`)).not.toHaveAttr("value")
    await $('~Clear text').click();
    await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");
  })
})