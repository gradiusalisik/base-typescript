enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;

console.log(membership); // 1 по умолчанию показыавет индекс.

const membershipReverse = Membership[2];
console.log(membershipReverse); // Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // INSTAGRAM
