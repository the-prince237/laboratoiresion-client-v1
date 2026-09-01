import { getBlogSections } from '@/data/blogs';
import type { Locale } from '@/i18n/routing';
import { Building, Dna, Gift, List, ListFilter, Newspaper, Package, Phone, PlusCircle, PlusSquare, Scan, SearchX } from 'lucide-react';
import { BiHealth } from 'react-icons/bi';
import { GiDoctorFace } from 'react-icons/gi';

/**
 * `t` est la fonction de traduction du namespace "header"
 * (useTranslations('header') côté client).
 */
export const getNavigationItems = (locale: Locale, t: (key: string) => string) => [
  // {
  //   title: 'Rencontrer Nos Médecins Partenaires',
  //   link: '/partners/prescribers',
  //   Icon: FaUserDoctor,
  // }, TO DO : handle Partners Page
  {
    Icon: List,
    title: t('nav.services'),
    links: [
      {
        title: t('nav.biologicalAnalyses'),
        link: '/services/biological-analyses',
        Icon: Dna,
      },
      {
        title: t('nav.medicalImaging'),
        link: '/services/medical-imaging',
        Icon: Scan,
      },
      {
        title: t('nav.functionalExploration'),
        link: '/services/functional-exploration',
        Icon: SearchX,
      }
    ],
  },
  {
    title: t('nav.patientArea'),
    Icon: BiHealth,
    links: [
      {
        title: t('nav.weeklyAdvice'),
        link: '/blogs/weekly-advice',
        Icon: Package,
      },
      {
        title: t('nav.prepareMyVisit'),
        link: '/our-agencies#agencies-section',
        Icon: ListFilter,
      },
    ],
  },
  {
    title: t('nav.proArea'),
    Icon: PlusSquare,
    links: [
      {
        title: t('nav.becomePartner'),
        link: '#contacts',
        Icon: PlusCircle,
      },
      {
        title: t('nav.samplingManual'),
        link: '/exams',
        Icon: Gift,
      },
      {
        title: t('nav.whatsNewSion'),
        link: '/blogs/quoi-de-neuf-sion',
        Icon: Newspaper,
      }
    ]
  },
  {
    title: t('nav.blog'),
    Icon: Newspaper,
    links: getBlogSections(locale).map(({label, tag, Icon}) => ({
      title: label,
      link: `/blogs/${tag}`,
      Icon
    }))
  },
  {
    title: t('nav.ourExams'),
    Icon: GiDoctorFace,
    link: "/exams"
  },
  {
    title: t('nav.ourAgencies'),
    Icon: Building,
    link: '/our-agencies'
  },
  {
    title: t('nav.contactUs'),
    Icon: Phone,
    link: '#contacts'
  },
  // {
  //   title: "Notre Histoire",
  //   Icon: Menu,
  //   link: '/about'
  // } TO DO : WORK ON OUR STORY SECTION
];
