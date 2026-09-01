import { getTranslations } from 'next-intl/server'
import React from 'react'

const page = async () => {
  const t = await getTranslations('pages')

  return (
    <div className='page padded'>{t('prescribers.title')}</div>
  )
}

export default page
