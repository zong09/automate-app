export class SettingPage {
  get titleText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvToolbarTitle"]',
    );
  }

  get acceptButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/layoutNotification"]',
    );
  }

  get addPageButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvAddPage"]',
    );
  }

  get logoutButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btContinue"]',
    );
  }

  get accountButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvHeader" and @text="Account"]',
    );
  }
}
