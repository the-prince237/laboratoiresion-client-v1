import React from 'react'
import { getBlogSections } from '@/data/blogs'
import { BlogSection } from '@/components'
import { getLocale } from 'next-intl/server'
import type { Locale } from '@/i18n/routing'

const Blogs = async () => {
  const locale = (await getLocale()) as Locale
  const blogSections = getBlogSections(locale)

  return (
    <div className='pages padded flex flex-col gap-20'>
      {blogSections.map((section, index) => (
        <React.Fragment key={section.tag}>
          <BlogSection blogSection={section} />
          {index < blogSections.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Blogs
