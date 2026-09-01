import type { Locale } from '@/i18n/routing';
import * as fr from './fr';
import * as en from './en';

export const getBlogSections = (locale: Locale) =>
  (locale === 'en' ? en : fr).blogSections;
