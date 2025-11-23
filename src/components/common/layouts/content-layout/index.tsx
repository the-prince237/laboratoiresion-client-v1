import { Contacts } from '@/components/home'
import React from 'react'
import { Footer } from '../../footer'
import { Header } from '../../header'
import { ResponsiveSidebarDrawer } from './responsive-sidebar-drawer'
import { ContentLayoutProps, CustomLayoutProps, SidebarProps } from '@/types'
import { ContentLayoutHero } from './content-layout-hero'

export const ContentLayout = ({ sidebarProps, contentHeroProps, children  }: { sidebarProps: SidebarProps, contentHeroProps: ContentLayoutProps } & CustomLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ResponsiveSidebarDrawer {...sidebarProps} />
      <Header />
      <main className="flex-1">
        <div className="space-y-16 pb-40">
          <ContentLayoutHero {...contentHeroProps} />
          {children}
        </div>
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}