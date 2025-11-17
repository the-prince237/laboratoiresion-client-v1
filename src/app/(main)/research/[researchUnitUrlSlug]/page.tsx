import Image from 'next/image'
import React from 'react'
import { researchUnits } from '../data';
import { notFound } from 'next/navigation';
import { Contacts, Title1 } from '@/components';
import { Metadata } from 'next';
import { logo } from '../../../../../public';
import type { PageProps } from '@/types';

type ResearchUnitPageProps = PageProps<{ researchUnitUrlSlug: string }>;

export async function generateMetadata(
  { params }: ResearchUnitPageProps,
): Promise<Metadata> {
  const urlSlug = (await params).researchUnitUrlSlug;
  const unit = researchUnits.find(u => u.urlSlug === urlSlug )

  if (!unit) {
    return {
      title: 'Unité de recherche | Laboratoire Sion',
      description:
        'Découvrez les unités de recherche du Laboratoire Sion : biologie médicale, imagerie et innovation scientifique en Afrique centrale.',
      openGraph: {
        title: 'Unité de recherche | Laboratoire Sion',
        description:
          'Découvrez les unités de recherche du Laboratoire Sion : biologie médicale, imagerie et innovation scientifique en Afrique centrale.',
        url: `https://laboratoiresion.org/recherche`,
        siteName: 'Laboratoire Sion',
        images: [
          {
            url: 'https://www.laboratoiresion.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2ca32a69.png&w=640&q=75',
            width: 800,
            height: 600,
            alt: 'Laboratoire Sion',
          },
        ],
        locale: 'fr_FR',
        type: 'website',
      },
    }
  }

  const baseUrl = 'https://laboratoiresion.org/research'
  const url = `${baseUrl}/${urlSlug}`

  return {
    title: `${unit.title} | Laboratoire Sion`,
    description: unit.description,
    keywords: [
      unit.title,
      'laboratoire sion',
      'recherche médicale',
      'biologie médicale',
      'innovation scientifique',
      'diagnostic médical',
      'imagerie médicale',
      'Afrique centrale',
    ],
    authors: [{ name: 'Laboratoire Sion', url: 'https://laboratoiresion.org' }],
    openGraph: {
      title: `${unit.title} | Laboratoire Sion`,
      description: unit.description,
      url,
      siteName: 'Laboratoire Sion',
      images: [
        {
          url: unit.image,
          width: 1200,
          height: 630,
          alt: `${unit.title} | Laboratoire Sion`,
        },
      ],
      locale: 'fr_FR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${unit.title} | Laboratoire Sion`,
      description: unit.description,
      images: [unit.image],
      creator: '@LaboratoireSion',
    },
    other: {
      // JSON-LD structured data for Google & research indexing
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ResearchProject',
        name: unit.title,
        description: unit.description,
        url,
        image: unit.image,
        inLanguage: 'fr',
        funder: {
          '@type': 'Organization',
          name: 'Laboratoire Sion',
          url: 'https://laboratoiresion.org',
          logo: logo.src,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Laboratoire Sion',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61580940000675',
          ],
        },
        keywords: [
          unit.title,
          'medical research',
          'biological sciences',
          'laboratoire sion',
          'africa medical research',
        ],
      }),
    },
  }
}

const ResearchUnitPage = async ({ params }: ResearchUnitPageProps) => {
    const { researchUnitUrlSlug } = await params;
    const researchUnit = researchUnits.find((item) => item.urlSlug === researchUnitUrlSlug)

    if(!researchUnit){
      return notFound()
    }

    const { title, image, imageAlt, short, description, Icon } = researchUnit

    return (
      <div className='page'>
        <div className='relative h-[60vh] w-full'>
          <Image
            alt={imageAlt}
            src={image}
            width={10000}
            height={10000}
            className='absolute h-full w-full object-cover brightness-70'
          />
          <div className='w-full h-[200px] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent' />
          <div className='padded-x gap-4 text-white relative flex h-full w-full flex-col justify-end py-10'>
            <Icon size={72} />
            <Title1>{title}</Title1>
          </div>
        </div>

        <div className='padded-x padded-y'>
          <div className='flex flex-col gap-10 w-full lg:items-center lg:text-center'>
            <h2 className='font-bold text-2xl max-w-xl'>{short}</h2>
            <p className='font-light lg:text-xl max-w-4xl'>{description}</p>
          </div>
        </div>

        <Contacts />
      </div>
    )
}

export default ResearchUnitPage