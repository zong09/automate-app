export class LoginPage {
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

  get loginButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btLogin"]',
    );
  }

  get closeButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivClose"]',
    );
  }

  get forgotButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvForgetPass"]',
    );
  }

  get signUpButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvCastcle"]',
    );
  }
}
