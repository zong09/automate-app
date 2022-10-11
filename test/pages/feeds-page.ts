export class FeedsPage {
  get menuButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivToolbarProfileButton"]',
    );
  }

  get logoButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivToolbarLogoButton"]',
    );
  }

  get avatarButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivAvatar"]',
    );
  }

  get likeButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvLiked"]',
    );
  }

  get commentButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvCommented"]',
    );
  }

  get recastButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvReCasted"]',
    );
  }

  get farmButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvFarm"]',
    );
  }

  get followButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvStatusFollow"]',
    );
  }

  get optionButton() {
    return $(
      '//android.widget.ImageView[@resource-id="com.castcle.android.dev:id/ivOptional"]',
    );
  }

  get walletButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvAirdropButton"]',
    );
  }

  get wathYouMindText() {
    return $(
      '//android.widget.TextView[@resource-id="com.castcle.android.dev:id/tvWathYouMind"]',
    );
  }
}
