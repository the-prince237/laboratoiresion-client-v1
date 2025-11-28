import { PDFReader } from '@/components'
import { CustomPageProps } from '@/types'
import React from 'react'
import { blogSections } from '../../data';


const page = async ({ params }: CustomPageProps<{ blogSectionTag: string; blogArticleTag : string }>) => {
  const blogSectionTag = (await params)?.blogSectionTag
  const blogArticleTag = (await params)?.blogArticleTag
  const blogSectionArticles = blogSections.find(( { tag }) => tag === blogSectionTag)?.articles
  const article = blogSectionArticles?.find(({ tag }) => tag === blogArticleTag)
  console.log({ article })
  if(!article || !article.pdfPath) {
    return <div className='page padded'>
      <h2 className='text-2xl font-bold mb-6'>Article non trouvé</h2>
      <p>{"L'article que vous recherchez est introuvable ou n'a pas de PDF associé."}</p>
    </div>
  }
  
  return (
    <PDFReader
      pdfPath={article.pdfPath}
      title={article.title}
    />
  )
}

export default page