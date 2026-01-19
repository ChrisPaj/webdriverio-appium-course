const path = require('path')
const { config } = require('./wdio.shared.conf')

// ====================
// Runner Configuration
// ====================

config.port = 4724

// ==================
// Specs
// ==================

config.specs = [
    '../test/specs/ios/ios.todo-listPOM.spec.js'
]

// ==================
// Capabilities
// ==================

config.capabilities = [{
    platformName: "ios",
    "appium:platformVersion": "18.1",
    "appium:deviceName": "iPhone 15 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "./app/ios/MVCTodo.app"),
}]

exports.config = config