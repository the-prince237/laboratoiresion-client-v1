'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components';
import React from 'react';
import { getNavigationItems } from './data';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export const Navigator = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations('header');
  const navigationItems = getNavigationItems(locale, t);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item, index) => {
          return (
            <NavigationMenuItem key={`${item.title}-${index}`}>
              {item.link ? (
                <NavigationMenuLink
                  asChild
                  className='flex min-w-fit flex-row items-center gap-3 font-semibold'
                >
                  <Link href={item.link}>{item.title}</Link>
                </NavigationMenuLink>
              ) : (
                <NavigationMenuTrigger className='bg-transparent'>{item.title}</NavigationMenuTrigger>
              )}
              {item.links && (
                <NavigationMenuContent className='min-w-md' asChild>
                  <div className='flex w-full min-w-fit flex-col gap-2'>
                    {item.links.map(({ title, Icon, link }, x) => (
                      <NavigationMenuLink
                        key={`${title}-${x}`}
                        asChild
                        className='flex min-w-fit flex-row items-center gap-3'
                      >
                        <Link href={link}>
                          <Icon size={18} className='min-w-4.5' />
                          <span className='min-w-fit'>{title}</span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
