import {
  FeedsPage,
  LoginPage,
  ProfileEditPage,
  ProfilePage,
} from '../../pages';
import { CommonUtil, EnvironmentUtil } from '../../utils';

describe('User Profile', () => {
  const loginPage = new LoginPage();
  const feedsPage = new FeedsPage();
  const profilePage = new ProfilePage();
  const profileEditPage = new ProfileEditPage();

  it('Should login with user collectly', async () => {
    await driver.pause(EnvironmentUtil.APP_WAIT_TIME);
    await feedsPage.menuButton.click();
    await loginPage.emailText.setValue(EnvironmentUtil.E2E_TEST_USER);
    await loginPage.passwordText.setValue(EnvironmentUtil.E2E_TEST_PASSWORD);
    await loginPage.loginButton.click();
    const avatar = feedsPage.avatarButton;
    await expect(avatar).toExist();
  });

  it('Should navigate to edit profile collectly', async () => {
    await feedsPage.avatarButton.click();
    await profilePage.editProfileButton.click();
    const displayName = profileEditPage.displayNameText;
    await expect(displayName).toExist();
  });

  it('Should edit profile collectly', async () => {
    const newDisplayName = `${
      EnvironmentUtil.E2E_TEST_CASTCLE_ID
    }-${CommonUtil.makeid(3)}`;
    await profileEditPage.displayNameText.setValue(newDisplayName);
    await profileEditPage.confirmButton.click();
    await profileEditPage.backButton.click();
    const dispalyText = await profilePage.profileNameText.getText();
    await expect(dispalyText).toEqual(dispalyText);
  });
});
