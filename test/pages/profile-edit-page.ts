export class ProfileEditPage {
  get headerText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvToolbarTitle"]',
    );
  }

  get castcleIdText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itCastcleId"]',
    );
  }

  get displayNameText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/itDisplayName"]',
    );
  }

  get addCoverButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivAddCover"]',
    );
  }

  get addAvatarButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivAddAvatar"]',
    );
  }

  get castcleIdWarningText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/ivCastcleIdWarning"]',
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

  get backButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivToolbarLogoButton"]',
    );
  }
}
