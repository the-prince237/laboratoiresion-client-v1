import { PDFReader } from '@/components'
import { CustomPageProps } from '@/types'
import React from 'react'
import { getBlogSections } from '@/data/blogs';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';


const page = async ({ params }: CustomPageProps<{ blogSectionTag: string; blogArticleTag : string }>) => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('blogs')
  const blogSectionTag = (await params)?.blogSectionTag
  const blogArticleTag = (await params)?.blogArticleTag
  const blogSectionArticles = getBlogSections(locale).find(( { tag }) => tag === blogSectionTag)?.articles
  const article = blogSectionArticles?.find(({ tag }) => tag === blogArticleTag)
  if(!article || !article.pdfPath) {
    return <div className='page padded'>
      <h2 className='text-2xl font-bold mb-6'>{t('articleNotFoundTitle')}</h2>
      <p>{t('articleNotFoundDescription')}</p>
    </div>
  }

  return (
    <PDFReader
      pdfPath={article.pdfPath}
      title={article.title}
    />
  )
}

export default page
