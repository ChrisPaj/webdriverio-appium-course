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

  it('Working with Scrollable elements', async () => {
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

  it.only('Working with Picker view', async () => {
    await $('~Picker View').click();

    const redPicker = await $('~Red color component value');
    const greenPicker = await $('~Green color component value');
    const bluePicker = await $('~Blue color component value');

    // set purple color (125, 0, 125)
    await redPicker.addValue('125')
    await greenPicker.addValue('0')
    await bluePicker.addValue('125')

    await driver.pause(2000)
  });
})