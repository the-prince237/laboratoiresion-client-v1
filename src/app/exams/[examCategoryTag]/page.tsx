import React from 'react'
import type { PageProps } from '@/types';

type ExamCategoryPageProps = PageProps<{ examCategoryTag: string }>;


const page = async ({params}: ExamCategoryPageProps) => {
  const examCategoryTag = (await params).examCategoryTag;

  return <a href={`#${examCategoryTag}`} className="hidden">scroll</a>;

}

export default page