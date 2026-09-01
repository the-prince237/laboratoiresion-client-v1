import { ContentLayout } from '@/components'
import { CustomLayoutProps } from '@/types'
import React from 'react'
import { getBlogSections } from '@/data/blogs'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/routing'

const Layout = async ({ children }: CustomLayoutProps) => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('blogs')

  const sections = getBlogSections(locale).map(({ label, tag }) => ({ label, link: `/blogs/${tag}` }))

  return <ContentLayout
    sidebarProps={{
      title: t('sidebarTitle'),
      sections
    }}
    contentHeroProps={{
      title: t('heroTitle'),
      description: t('heroDescription'),
      images: [""]
    }}
    showHero={false}
  >
    {children}
  </ContentLayout>
}

export default Layout
