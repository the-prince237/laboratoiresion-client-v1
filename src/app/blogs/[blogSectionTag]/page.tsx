import { blogSections } from '../data';
import { CustomPageProps } from '@/types';
import { BlogSection } from '@/components';

export default async function BlogSectionPage({ params }: CustomPageProps<{ blogSectionTag: string }>) {
  const blogSectionTag = (await params).blogSectionTag
  const blogSection = blogSections.find(({ tag }) => tag === blogSectionTag);

  return <div className='page padded'>
    <BlogSection blogSection={blogSection} />
  </div>
}