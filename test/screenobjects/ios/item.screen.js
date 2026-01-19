class ItemScreen {

  get createItemButton() {
    return $('//*[@name="Create item"]')
  }

  get title() {
    return $('//*[@value="Title"]')
  }

  get due() {
    return $('//*[@value="Due"]')
  }
  
  get datePicker() {
    return $('~DatePicker.NextMonth')
  }

  get dateDayOfMonth() {
    return $('~15')
  }
  
  get donePicker() {
    return $('~Done')
  }

get createItem() {
    return $('~Create')
  }

itemTextField(text) {
    return $(`~${text}`)
  }

itemDueDateField(dueText) {
    return $(`~${dueText}`)
  }

}

export default new ItemScreen();