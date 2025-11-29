import React from 'react'
import { blogSections } from './data'
import { BlogSection } from '@/components'

const Blogs = () => {
  return (
    <div className='pages padded flex flex-col gap-20'>
      {blogSections.map((section, index) => (
        <>
          <BlogSection key={section.tag} blogSection={section} />
          {index < blogSections.length - 1 && <hr />}
        </>
      ))}
    </div>
  )
}

export default Blogs