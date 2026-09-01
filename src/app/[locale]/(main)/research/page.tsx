import { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation';
import React from 'react'
import { getResearchUnits } from '@/data/research'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'research' })
  const researchUnits = getResearchUnits(locale as Locale)
  const prefix = locale === 'en' ? '/en' : ''
  const brand = locale === 'en' ? 'SION Laboratories' : 'Laboratoire Sion'

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: [
      'recherche médicale',
      'laboratoire sion',
      'examens médicaux',
      'services de santé',
      'informations médicales',
      'moteur de recherche santé',
      'analyses médicales',
      'imagerie médicale',
      'diagnostic médical',
      'santé et bien-être',
      'technologie médicale',
      'medical research',
      'Sion Laboratory',
      'medical examinations',
      'health services',
      'medical information',
      'health search engine',
      'medical analyses',
      'medical imaging',
      'medical diagnosis',
      'health and well-being',
      'medical technology',
    ],
    authors: [{ name: 'Laboratoire Sion', url: 'https://laboratoiresion.org' }],

    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: `https://laboratoiresion.org${prefix}/research`,
      siteName: brand,
      images: [
        {
          url: 'https://www.laboratoiresion.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2ca32a69.png&w=640&q=75',
          width: 800,
          height: 600,
          alt: t('metadata.title'),
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
    },

    other: {
      // 🔬 Structured Data (JSON-LD) for research units
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ResearchOrganization',
        name: 'Laboratoire Sion',
        url: 'https://laboratoiresion.org',
        logo: 'https://www.laboratoiresion.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2ca32a69.png&w=640&q=75',
        description: t('intro'),
        department: researchUnits.map(({ title, short, urlSlug, image }) => ({
           '@type': 'ResearchProject',
            name: title,
            description: short,
            url: `https://laboratoiresion.org${prefix}/research/${urlSlug}`,
            image,
        })) ,
        sameAs: [
          'https://facebook.com/laboratoiresion',
          'https://linkedin.com/company/laboratoiresion',
        ],
      }),
    },
  }
}

const page = async () => {
  const locale = (await getLocale()) as Locale
  const t = await getTranslations('research')
  const localizedResearchUnits = getResearchUnits(locale)
  return (
    <div className='page relative flex flex-col'>
      <div id="units" className='padded-x padded-y flex flex-col items-center'>
        <div className='flex flex-col gap-10 lg:gap-20'>
          <div className='flex m-auto flex-col gap-5 items-center text-center'>
            <h2 className='text-3xl font-extralight'>{t.rich('heading', { b: (chunks) => <span className='font-black'>{chunks}</span> })}</h2>
            <p className='font-light text-lg max-w-2xl text-gray-500'>{t('intro')}</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {
              localizedResearchUnits.map(({
                urlSlug,
                title,
                short,
                Icon,
                route,
                image,
                imageAlt,}) => {
                return (
                  <Link href={route} key={urlSlug}>
                    <div className='relative h-full overflow-hidden rounded-2xl border border-slate-700/50  p-4 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-slate-600/50 lg:p-8'>
                      <Image
                        src={image}
                        alt={imageAlt}
                        className='absolute top-[calc(50%-100px)] left-[calc(50%-150px)] rounded-xl object-cover object-top opacity-0 blur-[30px] transition-opacity duration-500 group-hover:opacity-70'
                        width={300}
                        height={300}
                      />

                      {/* Content */}
                      <div className='relative z-10 flex flex-col gap-4'>
                        {/* Icon Container */}

                        <div className='relative h-[150px] w-full'>
                          <Image
                            src={image}
                            alt={imageAlt}
                            className='absolute top-0 left-0 h-full w-full rounded-xl object-cover object-center'
                            width={500}
                            height={300}
                          />
                          <div className='absolute h-full w-full rounded-xl bg-black/50 group-hover:bg-black/40' />
                          <div className='relative flex h-full w-full flex-col items-start justify-center gap-3 p-5'>
                            <div
                              className={`inline-flex rounded-xl bg-gradient-to-br p-3 transform text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                            >
                              <Icon size={32} />
                            </div>
                            <h3 className='text-lg font-semibold text-white transition-colors duration-300'>
                              {title}
                            </h3>
                          </div>
                        </div>

                        <div className='flex w-full flex-col items-end justify-between gap-5 overflow-visible rounded-xl px-3 py-4 pl-0 group-hover:bg-radial group-hover:from-black group-hover:to-transparent lg:flex-row'>
                          {/* Text */}
                          <p className='border-0 border-l-[1px] border-solid border-gray-500 pl-4 text-lg text-gray-500 transition-colors duration-300 group-hover:text-gray-400'>
                            {short}
                          </p>

                          {/* Arrow Icon */}
                          <div className='flex items-center text-gray-600 transition-all duration-300 group-hover:text-white'>
                            <span className='text-sm font-medium transition-all duration-300 group-hover:translate-x-0'>
                              {t('discover')}
                            </span>
                            <svg
                              className='ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Shimmer Effect */}
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
