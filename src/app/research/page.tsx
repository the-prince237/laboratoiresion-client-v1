import { navigationItems } from '@/components/common/header/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const servicesLinks = navigationItems.find(item => item.title.toLowerCase() === 'services')?.links
  return (
    <div className='page relative flex'>
      <div className='w-full relative flex brightness-20 h-full'>
        <Image alt='research-bg' src="https://images.unsplash.com/photo-1656331797721-b593b8f00297?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" className='w-1/2 object-cover h-screen' width={1000} height={1000} />
        <Image alt='research-bg' src="https://images.unsplash.com/photo-1583607264434-2d8e199b3a17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" className='w-1/2 object-cover h-screen' width={1000} height={1000} />
        </div>
        <div className='w-full gap-7 absolute top-0 left-0 padded-x text-white text-center flex-col h-full flex items-center justify-center'>
          <h1 className='font-extrabold text-4xl'>🔍 La recherche médicale <span className='font-extralight'>arrive bientôt <br /> chez</span> Sion.</h1>
          <p className='max-w-xl text-xl text-gray-200 font-extralight'>Notre équipe met actuellement en place un <b className='font-extrabold'> moteur de recherche intelligent</b> qui vous permettra très bientôt de trouver, en un clic, les <b className='font-extrabold'>examens, services médicaux</b>, et <b className='font-extrabold'>informations de santé</b> dont vous avez besoin.</p>

          {servicesLinks && (
            <div className='flex flex-wrap justify-center gap-4 mt-5'>
              {servicesLinks.map(({ title, link, Icon }, index) => (
                <Link
                  key={index}
                  href={link}
                  className='rounded-full bg-white/20 flex gap-4 hover:bg-white/30 transition px-5 py-2 text-sm font-medium'
                >
                  <Icon />
                  {title}
                </Link>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default page