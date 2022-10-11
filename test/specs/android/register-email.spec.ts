import {
  AccountPage,
  DeleteUserPage,
  FeedsPage,
  LoginPage,
  NewUserProfilePage,
  ProfilePage,
  RegisterEmailPage,
  SettingPage,
} from '../../pages';
import { CommonUtil, EnvironmentUtil } from '../../utils';

describe('Register with email', () => {
  const loginPage = new LoginPage();
  const feedsPage = new FeedsPage();
  const registerPage = new RegisterEmailPage();
  const newUserPage = new NewUserProfilePage();
  const profilePage = new ProfilePage();
  const settingPage = new SettingPage();
  const accountPage = new AccountPage();
  const deleteUserPage = new DeleteUserPage();
  const generateId = CommonUtil.makeid(5);
  const mockUserEmail = `mock_appium_${generateId}@castcle.com`;

  it('Should navigate to register page collectly', async () => {
    await driver.pause(EnvironmentUtil.APP_WAIT_TIME);
    await feedsPage.menuButton.click();
    await loginPage.signUpButton.click();
    const headerText = await registerPage.headerText.getText();
    expect(headerText).toEqual('Welcome to Castcle');
  });

  it('Should show error message when input wrong infomation', async () => {
    await registerPage.emailText.setValue('abc');
    await registerPage.passwordText.setValue('123');
    await registerPage.passwordConfirmText.setValue('456');
    const emailErrorText = await registerPage.emailErrorText.getText();
    const passwordErrorText = await registerPage.passwordErrorText.getText();
    await registerPage.passwordText.setValue(EnvironmentUtil.E2E_TEST_PASSWORD);
    const passwordConfirmErrorText =
      await registerPage.passwordConfirmErrorText.getText();
    expect(emailErrorText).toEqual('email must be an email');
    expect(passwordErrorText).toEqual('Use at least 6 characters');
    expect(passwordConfirmErrorText).toEqual('Password did not match');
  });

  it('Should fill register information collectly', async () => {
    await registerPage.emailText.setValue(mockUserEmail);
    await registerPage.passwordText.setValue(EnvironmentUtil.E2E_TEST_PASSWORD);
    await registerPage.passwordConfirmText.setValue(
      EnvironmentUtil.E2E_TEST_PASSWORD,
    );
    await registerPage.acceptButton.click();
    await registerPage.nextButton.click();
    const headerText = await newUserPage.headerText.getText();
    expect(headerText).toEqual('New User Profile');
  });

  // it('Should show error message when input duplicate castcle id', async () => {
  //   await newUserPage.castcleIdText.setValue(
  //     EnvironmentUtil.E2E_TEST_CASTCLE_ID,
  //   );
  //   const castcleIdErrorText = await newUserPage.castcleIdErrorText.getText();
  //   expect(castcleIdErrorText).toEqual('Castcle ID has been taken.');
  // });

  // it('Should show error message when input wrong castcle id', async () => {
  //   await newUserPage.castcleIdText.setValue('abc_def ijk');
  //   await driver.pause(1000);
  //   const castcleIdErrorText = await newUserPage.castcleIdErrorText.getText();
  //   expect(castcleIdErrorText).toEqual(
  //     'Castcle ID cannot contain special characters',
  //   );
  // });

  it('Should fill castcle id collectly', async () => {
    await newUserPage.castcleIdText.setValue(`@mockappium${generateId}`);
    await newUserPage.displayNameText.setValue(`mockappium_${generateId}`);
    await newUserPage.nextButton.click();
  });

  it('Should fill profile image collectly', async () => {
    await driver.pause(35000);
    await newUserPage.nextButton.click();
  });

  it('Should skip profile detail collectly', async () => {
    await newUserPage.overviewText.setValue('appium test E2E');
    // await newUserPage.facebookText.setValue(`www.facebook.com/${generateId}`);
    // await newUserPage.twitterText.setValue(`www.twitter.com/${generateId}`);
    // await newUserPage.youtubeText.setValue(`www.youtube.com/${generateId}`);
    await newUserPage.confirmButton.click();
    const profileName = await profilePage.profileNameText.getText();
    expect(profileName).toEqual(`mockappium_${generateId}`);
  });

  it('Should navigate to delete user page collectly', async () => {
    await profilePage.backButton.click();
    await feedsPage.menuButton.click();
    await settingPage.accountButton.click();
    await accountPage.deleteAccountButton.click();
    const headerText = await deleteUserPage.titleText.getText();
    expect(headerText).toEqual('Delete Account');
    await deleteUserPage.nextButton.click();
  });

  it('Should show error message when wrong password', async () => {
    await deleteUserPage.nextButton.click();
    await deleteUserPage.passwordText.setValue('abc_def');
    await deleteUserPage.nextButton.click();
    const passwordErrorText = await deleteUserPage.passwordErrorText.getText();
    expect(passwordErrorText).toEqual('Incorrect password. Please try again.');
  });

  it('Should input password collectly', async () => {
    await deleteUserPage.nextButton.click();
    await deleteUserPage.passwordText.setValue(
      EnvironmentUtil.E2E_TEST_PASSWORD,
    );
    await deleteUserPage.nextButton.click();
    const confirmDelete = await deleteUserPage.confirmDeleteText.getText();
    expect(confirmDelete).toEqual('Your Account has been permanently deleted.');
    await deleteUserPage.nextButton.click();
  });

  it('Should display as guest user collectly', async () => {
    const avatar = feedsPage.avatarButton;
    await expect(avatar).not.toExist();
  });
});
