'use client';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

/**
 * Sélecteur de langue FR / EN : renvoie vers la même page dans l'autre
 * locale via le Link de '@/i18n/navigation' (préfixe /en géré automatiquement).
 */
export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('header');
  return (
    <div
      role='group'
      aria-label={t('language.label')}
      className={cn('flex items-center gap-1 rounded-full bg-gray-100 p-1', className)}
    >
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          aria-label={t(`language.${locale}`)}
          aria-current={locale === currentLocale ? 'true' : undefined}
          className={cn(
            'rounded-full px-2.5 py-1 text-xs font-bold uppercase transition-colors',
            locale === currentLocale
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-500 hover:text-black',
          )}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
