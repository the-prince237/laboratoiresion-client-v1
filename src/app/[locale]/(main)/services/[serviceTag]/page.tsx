import { ServiceContent, ServiceHero } from '@/components'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col w-screen'>
      <ServiceHero />
      <ServiceContent />
    </main>
  )
}

export default page