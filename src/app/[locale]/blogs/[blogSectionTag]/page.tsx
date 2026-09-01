import { getBlogSections } from '@/data/blogs';
import { CustomPageProps } from '@/types';
import { BlogSection } from '@/components';
import { getLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export default async function BlogSectionPage({ params }: CustomPageProps<{ blogSectionTag: string }>) {
  const locale = (await getLocale()) as Locale
  const blogSectionTag = (await params).blogSectionTag
  const blogSection = getBlogSections(locale).find(({ tag }) => tag === blogSectionTag);

  return <div className='page padded'>
    <BlogSection blogSection={blogSection} />
  </div>
}
