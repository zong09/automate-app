export class RegisterEmailPage {
  get headerText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvWelcome"]',
    );
  }

  get emailText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/ieInEmail"]',
    );
  }

  get passwordText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/etInPassword"]',
    );
  }

  get passwordConfirmText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/etInConfirmPassword"]',
    );
  }

  get acceptButton() {
    return $(
      '//android.widget.CheckBox[@resource-id="com.castcle.android.dev:id/cbAccept"]',
    );
  }

  get nextButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btContinue"]',
    );
  }

  get backButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivBack"]',
    );
  }

  get backToLoginButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvAlreadyAccount"]',
    );
  }

  get emailErrorText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvErrorMessage"]',
    );
  }

  get passwordErrorText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvErrorCharacters"]',
    );
  }

  get passwordConfirmErrorText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvRetryPassError"]',
    );
  }
}
