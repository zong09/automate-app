import { FeedsPage, LoginPage, NewCastPage, ProfilePage } from '../../pages';
import { CommonUtil, EnvironmentUtil } from '../../utils';

describe('User Activity', () => {
  const loginPage = new LoginPage();
  const feedsPage = new FeedsPage();
  const profilePage = new ProfilePage();
  const newCastPage = new NewCastPage();
  const generateText = `Hi E2E test ${CommonUtil.makeid(10)}`;

  it('Should login with user collectly', async () => {
    await driver.pause(EnvironmentUtil.APP_WAIT_TIME);
    await feedsPage.menuButton.click();
    await loginPage.emailText.setValue(EnvironmentUtil.E2E_TEST_USER);
    await loginPage.passwordText.setValue(EnvironmentUtil.E2E_TEST_PASSWORD);
    await loginPage.loginButton.click();
    const avatar = feedsPage.avatarButton;
    await expect(avatar).toExist();
  });

  it('Should post new cast collectly', async () => {
    await feedsPage.wathYouMindText.click();
    await newCastPage.castText.setValue(generateText);
    await newCastPage.castButton.click();
    await driver.pause(1000);
    await feedsPage.avatarButton.click();
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,10)',
    );
    const contentTexts = await profilePage.feedContentTextList;
    let foundContent = false;
    for (const content of contentTexts) {
      const txt = await content.getText();
      if (txt === generateText) foundContent = true;
    }
    expect(foundContent).toEqual(true);
  });
});
