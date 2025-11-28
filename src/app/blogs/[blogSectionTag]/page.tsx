import { Calendar, FileText, Clock } from 'lucide-react';
import { blogSections } from '../data';
import Link from 'next/link';
import { CustomPageProps } from '@/types';
import { Title1 } from '@/components';

export default async function PatientBlog({ params }: CustomPageProps<{ blogSectionTag: string }>) {
  const blogSectionTag = (await params).blogSectionTag
  const blogSection = blogSections.find(({ tag }) => tag === blogSectionTag);
  const articles = blogSection?.articles || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
      <div className='page padded'>
        <Title1 className='text-2xl font-bold mb-6'>{blogSection?.label}</Title1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={`/blogs/${blogSectionTag}/${article.tag}`}
              className='border cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'
            >
              <div className='relative'>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className='w-full h-48 object-cover' 
                />
                <div className='absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded'>
                  N°{article.number}
                </div>
              </div>
              
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2 line-clamp-2'>{article.title}</h3>
                <p className='text-gray-600 mb-4 line-clamp-3 text-sm'>{article.resume}</p>
                
                <div className='flex flex-wrap gap-3 text-sm text-gray-500'>
                  <div className='flex items-center gap-1'>
                    <Calendar className='w-4 h-4' />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  
                  <div className='flex items-center gap-1'>
                    <FileText className='w-4 h-4' />
                    <span>{article.pages} pages</span>
                  </div>
                  
                  <div className='flex items-center gap-1'>
                    <Clock className='w-4 h-4' />
                    <span>{article.timeToRead}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <div className='text-center py-12 text-gray-500'>
            Aucun article disponible pour le moment.
          </div>
        )}
      </div>
  );
}