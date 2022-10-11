import { FeedsPage, LoginPage, SettingPage } from '../../pages';
import { EnvironmentUtil } from '../../utils';

describe('Login and Logout', () => {
  const loginPage = new LoginPage();
  const feedsPage = new FeedsPage();
  const settingPage = new SettingPage();

  it('Should login with user collectly', async () => {
    await driver.pause(EnvironmentUtil.APP_WAIT_TIME);
    await feedsPage.menuButton.click();
    await loginPage.emailText.setValue(EnvironmentUtil.E2E_TEST_USER);
    await loginPage.passwordText.setValue(EnvironmentUtil.E2E_TEST_PASSWORD);
    await loginPage.loginButton.click();
    const avatar = feedsPage.avatarButton;
    await expect(avatar).toExist();
  });

  it('Should logout with user collectly', async () => {
    await feedsPage.menuButton.click();
    await settingPage.logoutButton.click();
    const avatar = feedsPage.avatarButton;
    await expect(avatar).not.toExist();
  });
});
