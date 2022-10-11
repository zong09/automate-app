export class PrivacyPage {
  get titleText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvTitle"]',
    );
  }

  get acceptButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btAccept"]',
    );
  }
}
