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
    
  })
})