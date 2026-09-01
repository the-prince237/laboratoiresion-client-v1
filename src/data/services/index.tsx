import type { Locale } from '@/i18n/routing';
import * as fr from './fr';
import * as en from './en';

export type {
  ExamItem,
  ChildSection,
  FaqItem,
  ExamensSection,
  ServiceTag,
} from './fr';

export const getServices = (locale: Locale) =>
  (locale === 'en' ? en : fr).services;
