import { Title1 } from '@/components'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const VisitUs = async () => {
  const t = await getTranslations('pages')

  return (
    <div className='page padded-x padded-y'>
      <Title1 className='text-center'>{t('visitUs.title')}</Title1>
    </div>
  )
}

export default VisitUs
