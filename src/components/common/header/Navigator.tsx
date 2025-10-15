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
import { navigationItems } from './data';

export const Navigator = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item, index) => {
          return (
            <NavigationMenuItem key={`${item.title}-${index}`}>
              {item.link ? (
                <NavigationMenuLink
                  className='flex min-w-fit flex-row items-center gap-3 font-semibold'
                  href={item.link}
                >
                  {item.title}
                </NavigationMenuLink>
              ) : (
                <NavigationMenuTrigger className='bg-none'>{item.title}</NavigationMenuTrigger>
              )}
              {item.links && (
                <NavigationMenuContent className='min-w-2xs' asChild>
                  <div className='flex w-full flex-col gap-2'>
                    {item.links.map(({ title, Icon, link }, x) => (
                      <NavigationMenuLink
                        key={`${title}-${x}`}
                        className='flex min-w-fit flex-row items-center gap-3'
                        href={link}
                      >
                        <Icon size={18} className='min-w-[18px]' />
                        <span className='min-w-fit'>{title}</span>
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
