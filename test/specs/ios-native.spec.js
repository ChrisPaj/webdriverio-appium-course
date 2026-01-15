describe('iOS Native Features', () => {
  it('Working with alert box', async () => {
    await $('~Alert Views').click()
    await $('~Okay / Cancel').click()

    // by accessibility id  
    // await $('~OK').click()

    console.log('AlertBoxTexts >>>>>>>: ', await driver.getAlertText());

    // by accept/dismiss alert
    await driver.dismissAlert()

    await expect($('~OK')).not.toExist()
  })

  it.only('Working with Scrollable elements', async () => {
    // easy way - scroll whole screen
    // await driver.execute('mobile: scroll', { direction: 'down' })
    // await driver.execute('mobile: scroll', { direction: 'up' })

    // little more komplex: scroll inside element
    await $('~Picker View').click()

    const redPicker = await $('~Red color component value')
    const bluePicker = await $('~Blue color component value')

    await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: 'down' })
    await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: 'down' })
  })
})