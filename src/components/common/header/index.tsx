'use client';
import React, { useState } from 'react';
import { Navigator } from './Navigator';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
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
    <header className='fixed z-50 m-auto flex h-fit w-full flex-col items-end font-sans'>
      <div className='z-50 flex min-h-20 w-full items-center justify-between bg-white/50 px-5 py-4 border-gray-200 border-0 border-b-[1px] border-solid backdrop-blur-lg'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='hidden items-center gap-5 xl:flex'>
          <Navigator />
          <div className='h-5 w-0.5 bg-black/50' />
          <div className='flex gap-3'>
            <Link href='/auth/login'>
              <Button>Connexion</Button>
            </Link>
            <Link href='/auth/signup' className='hidden 2xl:block'>
              <Button variant='outline'>Créer un compte</Button>
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

      <div
        className={cn(
          'padded-x absolute top-40 z-50 m-auto flex flex-1 -translate-y-[200vh] flex-col overflow-hidden rounded-2xl bg-white/70 py-5 pt-10 shadow-2xl backdrop-blur-2xl xl:hidden',
          { 'translate-y-0': opened },
        )}
      >
        {navigationItems.map(({ title, link, Icon, links }, index) => {
          return (
            <div
              key={index}
              className='hover:text-primary cursor-pointer'
              onClick={() =>
                link
                  ? router.push(link)
                  : setOpenenedSubMenu((osm) => (osm !== title ? title : null))
              }
            >
              <div
                key={title}
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

        <div className='mt-5 flex w-full justify-center gap-5'>
          <Link href='/auth/login'>
            <Button>Connexion</Button>
          </Link>
          <Link href='/auth/signup'>
            <Button variant='outline'>Créer un compte</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
