module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    fallbackLng: 'en', // ✅ Move this here
  },
  localePath: './public/locales',
  react: { useSuspense: false }, // ✅ Optional: recommended for SSR
};
