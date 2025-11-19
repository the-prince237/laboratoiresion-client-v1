import React from 'react'
import { Contacts, ExamsContent, ExamsSidebar, Footer, Header, MobileSidebarDrawer } from '@/components'

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <MobileSidebarDrawer />
      <ExamsSidebar />
      <Header />
      <main className="flex-1">
        {children}
        <ExamsContent />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}

export default Layout