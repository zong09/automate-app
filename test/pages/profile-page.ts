export class ProfilePage {
  get profileNameText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvProfileName"]',
    );
  }

  get castcleIdText() {
    return $(
      '//android.widget.EditText[@resource-id="com.castcle.android.dev:id/tvProfileCastcleId"]',
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

  get followingCountText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvFollowingCount"]',
    );
  }

  get followersCountText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvFollowersCount"]',
    );
  }

  get editProfileButton() {
    return $(
      '//android.widget.Button[@resource-id="com.castcle.android.dev:id/btViewProfile"]',
    );
  }

  get backButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivToolbarLogoButton"]',
    );
  }

  get feedContentTextList() {
    return $$(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvFeedContent"]',
    );
  }
}
