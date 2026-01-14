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
})