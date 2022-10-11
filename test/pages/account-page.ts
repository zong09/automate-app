export class AccountPage {
  get titleText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvToolbarTitle"]',
    );
  }

  get deleteAccountButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvHeader" and @text="Delete Account"]',
    );
  }
}
