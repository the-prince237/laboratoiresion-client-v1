'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Minus, PlusIcon } from 'lucide-react';

import { line } from '../../../public';
import { FaqItem } from '../../app/(main)/services/data';

const FAQ = ({ faqs }: { faqs: FaqItem[]}) => {
  const [opened, setOpened] = useState<number | null>(0);
  return (
    <div className='py-40 flex w-full flex-col gap-10 items-center'>
      <div className='flex flex-col gap-5'>
        <h3 className='text-3xl font-black'>FAQ</h3>
        <p>Bienvenue dans notre section FAQ dédiée à répondre à vos questions les plus fréquentes concernant nos services de laboratoire d’analyse médicale. Trouvez ici des réponses à vos interrogations sur les prélèvements, les délais d’attente, les types d’analyses disponibles, la confidentialité des résultats et bien plus encore.</p>
      </div>

      <div className='grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20'>
        {faqs.map(({ question, answer, Icon }, index) => (
          <div
            key={index}
            className={cn(
              'relative flex max-h-fit cursor-pointer items-start justify-between gap-4 px-2.5 py-5 lg:px-6 lg:py-6 xl:gap-6 xl:px-[34px] xl:py-[34px]',
              { 'items-center': opened === index },
            )}
            onClick={() => setOpened((o) => (o === index ? null : index))}
          >
            <div className='bg-black--12 flex min-h-[46px] min-w-[44px] items-center justify-center rounded-[10px] text-[16px] font-semibold lg:min-h-[54px] lg:min-w-[52px] xl:min-h-[67px] xl:min-w-[62px] xl:text-xl'>
              {index < 9 && '0'}
              {index + 1}
            </div>

            <div className='flex w-full flex-col gap-3 lg:gap-3.5 xl:gap-5'>
              <h3 className='flex items-center gap-4 text-lg font-medium lg:text-xl xl:text-[22px]'>
                <Icon />
                {question}
              </h3>
              {opened === index && <p>{answer}</p>}
            </div>

            <div className='relative h-5 min-w-5 cursor-pointer'>
              <PlusIcon className={cn('absolute size-5', { 'scale-0': opened === index })} />
              <Minus
                className={cn('absolute size-5', {
                  'scale-0': opened !== index,
                })}
              />
            </div>

            <Image src={line} alt='line' className='absolute bottom-0 w-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
