export class DeleteUserPage {
  get titleText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvToolbarTitle"]',
    );
  }

  get deleteButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btNext"]',
    );
  }

  get passwordText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/etTextInputPrimary"]',
    );
  }

  get nextButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btNext"]',
    );
  }

  get confirmDeleteText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvChangePasswrdTitle"]',
    );
  }

  get passwordErrorText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvTextInputError"]',
    );
  }
}
