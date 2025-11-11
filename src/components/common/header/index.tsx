'use client';
import React, { useState } from 'react';
import { Navigator } from './Navigator';
import Link from 'next/link';
import { ChevronDown, Dna, Menu, X } from 'lucide-react';
import { navigationItems } from './data';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';
import Logo from '../logo';

export const Header = () => {
  const [opened, setOpened] = useState(false);
  const [openedSubMenu, setOpenenedSubMenu] = useState<null | string>(null);
  const router = useRouter();
  return (
    <header className='fixed z-[1000] m-auto flex h-fit w-full flex-col items-end font-sans'>
      <div className='z-100 relative flex min-h-16 w-full items-center justify-between bg-white/50 px-5 py-4 border-gray-200 border-0 border-b-[1px] border-solid backdrop-blur-lg'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='hidden items-center gap-5 xl:flex'>
          <Navigator />
          <div className='h-5 w-0.5 bg-black/50' />
          <div className='flex gap-3'>
            <Link href='/research'>
              <Button className='gap-3 text-lg font-extralight'><Dna /> La <u>Recherche</u> <span className='font-bold'>Scientifique</span> </Button>
            </Link>
          </div>
        </div>
        <div className='relative xl:hidden'>
          <div
            onClick={() => setOpened((o) => !o)}
            className='flex size-16 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300'
          >
            <Menu className={cn({ 'opacity-0': opened })} />
            <X className={cn('absolute', { 'opacity-0': !opened })} />
          </div>
        </div>
      </div>

      {opened && <div className='w-screen h-screen absolute left-0 bg-black/20' onClick={() => setOpened(false)} />}
      <div
        className={cn(
          'padded-x absolute top-30 w-screen md:w-auto max-h-[80vh] md:right-5 z-50 m-auto flex flex-1 -translate-y-[200vh] flex-col overflow-hidden  md:rounded-2xl bg-white/70 py-5 pt-10 shadow-2xl backdrop-blur-2xl xl:hidden',
          { 'translate-y-0': opened },
        )}
      >
        {navigationItems.map(({ title, link, Icon, links }, index) => {
          return (
            <div
              key={index}
              className='hover:text-primary cursor-pointer'
              onClick={() =>{
                if(link) {
                  router.push(link);
                  setOpened(false)
                } else {
                  setOpenenedSubMenu((osm) => (osm !== title ? title : null))
                }
              }}
            >
              <div
                className={cn(
                  'flex justify-between border-b-[1px] border-solid border-gray-200 px-3 py-5 hover:bg-gray-100/70',
                )}
              >
                <div className='flex gap-6'>
                  <Icon />
                  <span>{title}</span>
                </div>
                {links && links.length > 0 && (
                  <ChevronDown className={cn({ 'rotate-180': openedSubMenu === title })} />
                )}
              </div>
              {links && links.length > 0 && (
                <div
                  className={cn(`flex h-[${56 * links.length}px] flex-col overflow-hidden pl-5`, {
                    'h-0': openedSubMenu !== title,
                  })}
                >
                  {links.map(({ title: linkTitle, Icon: LinkIcon, link: linkLink }) => {
                    return (
                      <Link
                        href={linkLink}
                        key={linkTitle}
                        onClick={() => setOpened(false)}
                        className='flex items-center gap-3 border-l-[1px] border-solid border-gray-200 px-3 py-4 hover:bg-gray-100/70'
                      >
                        <LinkIcon />
                        <span>{linkTitle}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div className='flex gap-3 w-full py-5'>
          <Link onClick={() => setOpened(false)} href='/research' className='w-full'>
            <Button className='gap-3 w-full font-extralight sm:text-lg'><Dna /> La <u>Recherche</u> <span className='font-bold'>Scientifique</span> </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
