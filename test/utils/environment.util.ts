import * as dotenv from 'dotenv';

dotenv.config();

export class EnvironmentUtil {
  static E2E_TEST_USER = process.env.E2E_TEST_USER || 'e2e_test_2@castcle.com';
  static E2E_TEST_CASTCLE_ID = process.env.E2E_TEST_CASTCLE_ID || 'e2ecastcle2';
  static E2E_TEST_PASSWORD = process.env.E2E_TEST_PASSWORD || 'Abcd1@34$';
  static APP_WAIT_TIME = Number(process.env.APP_WAIT_TIME) || 9000;
  static BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
  static BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;
}
