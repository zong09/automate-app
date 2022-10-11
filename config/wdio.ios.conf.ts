import * as path from 'path';
import * as sharedConfig from './wdio.shared.conf';

const config = sharedConfig.config;

//
// ====================
// Runner Configuration
// ====================
config.port = 4723;

//
// ==================
// Specify Test Files
// ==================
config.specs = ['./test/specs/ios/*.ts'];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'ios',
    'appium:platformVersion': '15.5',
    'appium:deviceName': 'iPhone 13 Pro',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app'),
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

//
// ============
// Capabilities
// ============
// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
// time. Depending on the number of capabilities, WebdriverIO launches several test
// sessions. Within your capabilities you can overwrite the spec and exclude options in
// order to group specific specs to a specific capability.
//
// First, you can define how many instances should be started at the same time. Let's
// say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
// set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
// files and you set maxInstances to 10, all spec files will get tested at the same time
// and 30 processes will get spawned. The property handles how many capabilities
// from the same test should run tests.
//
config.maxInstances = 1;

exports.config = config;
