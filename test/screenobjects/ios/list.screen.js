class ListScreen {
  get createListBtn() {
    const createListButton  = 'name == "Create list" AND label == "Create list" AND value == "Create list"'
    return $(`-ios predicate string:${createListButton}`)
  }

  get listNameInput() {
    return $('//*[@value="List Name"]')
  }

  get createBtn() {
    return $('~Create')
  }

  listNameField(name) {
    return $(`~${name}`)
  }

}

export default new ListScreen();