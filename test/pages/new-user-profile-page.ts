export class NewUserProfilePage {
  get headerText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvToolbarTitle"]',
    );
  }

  get castcleIdText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itInCastcleId"]',
    );
  }

  get displayNameText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itInDisplayName"]',
    );
  }

  get addCoverButton() {
    return $(
      '//android.widget.ImageView[@resource-id="ccom.castcle.android.dev:id/ivEditCover"]',
    );
  }

  get addAvatarButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivAddAvatar"]',
    );
  }

  get nextButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btNext"]',
    );
  }

  get backButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivToolbarLogoButton"]',
    );
  }

  get skipButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvToolbarTitleAction"]',
    );
  }

  get castcleIdErrorText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvErrorMessage"]',
    );
  }

  get overviewText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itOverView"]',
    );
  }

  get birthdayButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvBirthdayDescription"]',
    );
  }

  get facebookText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itLinkFacebook"]',
    );
  }

  get twitterText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itLinkTwitter"]',
    );
  }

  get youtubeText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itLinkYouTube"]',
    );
  }

  get mediumText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itLinkMedium"]',
    );
  }

  get websiteText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itLinkWeb"]',
    );
  }

  get confirmButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btDone"]',
    );
  }
}
