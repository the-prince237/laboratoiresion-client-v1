import React from 'react'
import { ContentLayout } from '@/components'
import { getExamList, getExamsByCategories, examsSlideImages, getMetaImages } from "@/data/exams";
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export const generateMetadata = async () => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('exams')
  const examList = getExamList(locale)
  const metaImages = getMetaImages(locale)
  const keywords = t.raw('meta.keywords') as string[]

  return ({
  title: t('meta.title'),
  description: t('meta.description'),
  keywords: [
    ...keywords,
    ...examList,
  ],
  openGraph: {
    title: t('meta.title'),
    description: t('meta.description'),
    type: "website",
    url: `https://www.laboratoiresion.com${locale === 'en' ? '/en' : ''}/exams`,
    siteName: t('meta.siteName'),
    images: metaImages,
  },
  twitter: {
    card: "summary_large_image",
    title: t('meta.title'),
    description: t('meta.description'),
  },
})
};

const Layout = async ({ children }: { children: React.ReactNode}) => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('exams')
  const examsByCategories = getExamsByCategories(locale)
  return (
    <ContentLayout
      sidebarProps={{ title: t('layout.sidebarTitle'), sections: examsByCategories.map(({ label, tag }) => ({
        label, link: `/exams/${tag}#${tag}`
      }))}}
      contentHeroProps={{
        images: examsSlideImages,
        title: t('layout.heroTitle'),
        description: t('layout.heroDescription'),
      }}
    >
      {children}
    </ContentLayout>
  )
}

export default Layout
