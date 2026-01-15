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

  it.only('find element by predicate string', async () => {
    // const alertText = 'label == "Alert Views"'

    // high amount of flexibility:
    // https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
    const alertText = 'value BEGINSWITH[c] "alert"'
    await $(`-ios predicate string:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })
})