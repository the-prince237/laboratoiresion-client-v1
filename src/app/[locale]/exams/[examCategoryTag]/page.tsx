import React from 'react'
import type { CustomPageProps } from '@/types';
import { Metadata } from 'next';
import { getExamsByCategories, getMetaImages } from '@/data/exams';
import ExamsPage from '../page';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type ExamCategoryPageProps = CustomPageProps<{ examCategoryTag: string }>;

export const generateMetadata = async ({ params }: ExamCategoryPageProps): Promise<Metadata> => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('exams')
  const metaImages = getMetaImages(locale)
  const examCategoryTag = (await params).examCategoryTag
  const exam = getExamsByCategories(locale).find((exam) => exam.tag === examCategoryTag);
  if (!exam) {
    return {
      title: t('categoryMeta.notFoundTitle'),
      description: t('categoryMeta.notFoundDescription'),
    };
  }

  const title = t('categoryMeta.title', { label: exam.label, tag: exam.tag });
  const description = t('categoryMeta.description', { label: exam.label, tag: exam.tag });
  const keywords = [
    exam.label,
    exam.tag,
    ...(t.raw('categoryMeta.keywords') as string[]),
  ];

  const openGraph = {
    title,
    description,
    type: "website",
    url: `https://www.laboratoiresion.com${locale === 'en' ? '/en' : ''}/exams/${exam.tag.toLowerCase()}/${exam.label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`,
    siteName: t('meta.siteName'),
    images: metaImages,
  };

  const twitter = {
    card: "summary_large_image",
    title,
    description,
  };

  return {
    title,
    description,
    keywords,
    openGraph,
    twitter,
  };
};


const page = () => {
  return <ExamsPage />

}

export default page
