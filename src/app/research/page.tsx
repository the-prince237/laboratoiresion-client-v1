import { navigationItems } from '@/components/common/header/data'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'La Recherche Médicale | Laboratoire Sion',
  description: "Le Département de Recherche du Laboratoire Sion se prépare à devenir un centre d'excellence en biologie médicale et imagerie en Afrique centrale. Bientôt disponible.",
  keywords: ['recherche médicale', 'laboratoire sion', 'examens médicaux', 'services de santé', 'informations médicales', 'moteur de recherche santé', 'analyses médicales', 'imagerie médicale', 'diagnostic médical', 'santé et bien-être', 'technologie médicale', "medical research",
  "Sion Laboratory",
  "medical examinations",
  "health services",
  "medical information",
  "health search engine",
  "medical analyses",
  "medical imaging",
  "medical diagnosis",
  "health and well-being",
  "medical technology"],
  authors: [{ name: 'Laboratoire Sion', url: 'https://laboratoiresion.org' }],

  // Open Graph / Facebook
  openGraph: {
    title: 'La Recherche Médicale | Laboratoire Sion',
    description: "Le Département de Recherche du Laboratoire Sion se prépare à devenir un centre d'excellence en biologie médicale et imagerie en Afrique centrale. Bientôt disponible.",
    url: 'https://laboratoiresion.org/research',
    siteName: 'Laboratoire Sion',
    images: [
      {
        url: 'https://www.laboratoiresion.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2ca32a69.png&w=640&q=75',
        width: 800,
        height: 600,
        alt: 'La Recherche Médicale | Laboratoire Sion',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

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
          <p className='max-w-xl text-xl text-gray-200 font-extralight'>Le département de recherche du Laboratoire Sion regroupera des <b className='font-extrabold'>scientifiques, biologistes et radiologues</b> engagés dans la production de <b className='font-extrabold'>connaissances utiles à la pratique médicale,</b>, à la <b className='font-extrabold'>prévention,</b> et à <b className='font-extrabold'>l’amélioration continue de la qualité des analyses.</b></p>

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