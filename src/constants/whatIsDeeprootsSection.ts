import { TFunction } from 'next-i18next';

// TODO: to be removed
// export const deeprootsCards = [
//   {
//     icon: '/landing/office-chair.svg',
//     title: 'A Movement, Not Just a Blockchain',
//     text: 'Deep Roots represents a shift from centralized systems to open, decentralized collaboration empowering people, not platforms.',
//   },
//   {
//     icon: '/landing/shield-check.svg',
//     title: 'DeWorld: The Decentralized Internet',
//     text: 'A new internet built for users, powered by blockchain and AI ensuring privacy, interoperability, and community ownership.',
//   },
//   {
//     icon: '/landing/lightning.svg',
//     title: 'Built for Impact',
//     text: 'Deep Roots powers 20+ real Web3 products across DeFi, GameFi, identity, education, and more delivering real-world utility and global access.',
//   },
//   {
//     icon: '/landing/gavel.svg',
//     title: 'Vision-Driven Ecosystem',
//     text: 'Designed to decentralize power, enable daily earning and learning, and build tools that last for generations — all rooted in trust, freedom, and innovation.',
//   },
// ];

export const getDeeprootsCards = (t: TFunction) => [
  {
    icon: '/landing/office-chair.svg',
    title: t('what_is_deeproots_section.deeproots_cards.card_1.title'),
    text: t('what_is_deeproots_section.deeproots_cards.card_1.text'),
  },
  {
    icon: '/landing/shield-check.svg',
    title: t('what_is_deeproots_section.deeproots_cards.card_2.title'),
    text: t('what_is_deeproots_section.deeproots_cards.card_2.text'),
  },
  {
    icon: '/landing/lightning.svg',
    title: t('what_is_deeproots_section.deeproots_cards.card_3.title'),
    text: t('what_is_deeproots_section.deeproots_cards.card_3.text'),
  },
  {
    icon: '/landing/gavel.svg',
    title: t('what_is_deeproots_section.deeproots_cards.card_4.title'),
    text: t('what_is_deeproots_section.deeproots_cards.card_4.text'),
  },
];
