import { EnvironmentUtil } from './../test/utils/environment.util';
import * as sharedConfig from './wdio.shared.conf';

const config = sharedConfig.config;

config.user = EnvironmentUtil.BROWSERSTACK_USERNAME;
config.key = EnvironmentUtil.BROWSERSTACK_ACCESS_KEY;
//
// ==================
// Specify Test Files
// ==================
config.specs = ['./test/specs/android/*.ts'];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'Android',
    'appium:platformVersion': '12.0',
    'appium:deviceName': 'Google Pixel 5',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'bs://0a3f2645980f2d42c616d96b385e7d901fddcaf5',
    'appium:autoGrantPermissions': true,
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

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
config.maxInstances = 5;

exports.config = config;
