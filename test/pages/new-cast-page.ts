export class NewCastPage {
  get castText() {
    return $(
      '//android.widget.MultiAutoCompleteTextView[@resource-id="com.castcle.android.dev:id/etInputMessage"]',
    );
  }

  get backButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivToolbarLogoButton"]',
    );
  }

  get castButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/btCast"]',
    );
  }

  get addImageButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/tvAddImage"]',
    );
  }
}
