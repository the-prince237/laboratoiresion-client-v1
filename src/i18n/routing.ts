import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  // Le français reste sans préfixe (/), l'anglais vit sous /en
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
