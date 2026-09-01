'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from '../logo';

interface FooterLink {
	title: string;
	href: string;
	/** Ancre ou lien externe : rendu via <a>, sans réécriture de locale. */
	anchor?: boolean;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

export function Footer() {
	const t = useTranslations('footer');

	const footerLinks: FooterSection[] = [
		{
			label: t('sections.services.label'),
			links: [
				{ title: t('sections.services.biologicalAnalyses'), href: '/services/biological-analyses' },
				{ title: t('sections.services.medicalImaging'), href: '/services/medical-imaging' },
				{ title: t('sections.services.functionalExploration'), href: '/services/functional-exploration' },
			],
		},
		{
			label: t('sections.resources.label'),
			links: [
				{ title: t('sections.resources.exams'), href: '/exams' },
				{ title: t('sections.resources.whatsNew'), href: '/blogs/quoi-de-neuf-sion' },
				{ title: t('sections.resources.weeklyAdvice'), href: '/blogs/weekly-advice' },
				{ title: t('sections.resources.research'), href: '/research' },
			],
		},
		{
			label: t('sections.laboratory.label'),
			links: [
				{ title: t('sections.laboratory.ourAgencies'), href: '/our-agencies' },
				{ title: t('sections.laboratory.visitUs'), href: '/visit-us' },
				{ title: t('sections.laboratory.contactUs'), href: '#contacts', anchor: true },
			],
		},
		{
			label: t('sections.social.label'),
			links: [
				{ title: 'Facebook', href: '#', anchor: true, icon: FacebookIcon },
				{ title: 'Instagram', href: '#', anchor: true, icon: InstagramIcon },
				{ title: 'Youtube', href: '#', anchor: true, icon: YoutubeIcon },
				{ title: 'LinkedIn', href: '#', anchor: true, icon: LinkedinIcon },
			],
		},
	];

	return (
      <footer className="relative w-full mx-auto flex flex-col items-center justify-center border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
        <div className="bg-black absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="space-y-4">
            <Logo />
            <p className="text-muted-foreground mt-8 text-sm md:mt-0">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
          </AnimatedContainer>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs">{section.label}</h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        {link.anchor ? (
                          <a
                            href={link.href}
                            className="hover:text-foreground inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="hover:text-foreground inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </footer>

	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
