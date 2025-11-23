import { ContentLayout } from '@/components'
import { CustomLayoutProps } from '@/types'
import React from 'react'

const Layout = ({ children }: CustomLayoutProps) => {

  return <ContentLayout
    sidebarProps={{
      title:"Rubriques",
      sections:[
        {
          label: "Quoi de neuf SION ?",
          link: '/blogs/quoi-de-neuf-sion'
        },
        {
          label: "Conseils De La Semaine",
          link: '/blogs/weekly-advice'
        }
      ]
    }}
    contentHeroProps={{
      title: "Nos Rubriques",
      description: "Suivez nous au quotidien afin de profiter de nos revues, publications, et conseils santés quotidiens.",
      images: [""]
    }}
  >
    {children}
  </ContentLayout>
}

export default Layout