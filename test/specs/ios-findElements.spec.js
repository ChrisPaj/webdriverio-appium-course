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

  it.only('find element xpath', async () => {
    // general xpath syntax: (//tagname[@attribute=value])
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
    await $('//XCUIElementTypeStaticText[@label="Simple"]').click()

    // unspecific xpath
    // await $('//*[@name="Alert Views"]').click()
    // await $('//*[@label="Simple"]').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })
})