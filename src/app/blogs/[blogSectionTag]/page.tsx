import React from 'react'
import type { CustomPageProps } from '@/types'

const PatientBlog = async ({ params }: CustomPageProps<{ blogSectionTag : string }>) => {
  const blogSectionTag = (await params).blogSectionTag

  return (
    <div className='page padded'>{blogSectionTag}</div>
  )
}

export default PatientBlog