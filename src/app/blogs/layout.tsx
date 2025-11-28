import { ContentLayout } from '@/components'
import { CustomLayoutProps } from '@/types'
import React from 'react'
import { blogSections } from './data'

const Layout = ({ children }: CustomLayoutProps) => {

  const sections = blogSections.map(({ label, tag }) => ({ label, link: `/blogs/${tag}` }))

  return <ContentLayout
    sidebarProps={{
      title:"Rubriques",
      sections
    }}
    contentHeroProps={{
      title: "Nos Rubriques",
      description: "Suivez nous au quotidien afin de profiter de nos revues, publications, et conseils santés quotidiens.",
      images: [""]
    }}
    showHero={false}
  >
    {children}
  </ContentLayout>
}

export default Layout