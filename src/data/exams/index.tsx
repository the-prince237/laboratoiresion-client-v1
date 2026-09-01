import type { Locale } from '@/i18n/routing';
import * as fr from './fr';
import * as en from './en';

// Les images du carrousel sont identiques dans les deux langues.
export { examsSlideImages } from './fr';

export const getExamsByCategories = (locale: Locale) =>
  (locale === 'en' ? en : fr).examsByCategories;

export const getExamList = (locale: Locale) =>
  (locale === 'en' ? en : fr).examList;

export const getMetaImages = (locale: Locale) =>
  (locale === 'en' ? en : fr).metaImages;
