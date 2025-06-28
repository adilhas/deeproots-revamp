import { TFunction } from 'next-i18next';

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
