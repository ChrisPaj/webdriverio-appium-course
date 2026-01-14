describe('iOS find Element', () => {
  it('find element by accessibility id', async () => {
    await $('~Alert Views').click()
    await $('~Simple').click()
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
  })
})