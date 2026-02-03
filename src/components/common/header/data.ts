import { blogSections } from '@/app/blogs/data';
import { Building, Dna, Gift, List, ListFilter, Newspaper, Package, Phone, PlusCircle, PlusSquare, Scan, SearchX } from 'lucide-react';
import { BiHealth } from 'react-icons/bi';
import { GiDoctorFace } from 'react-icons/gi';

export const navigationItems = [
  // {
  //   title: 'Rencontrer Nos Médecins Partenaires',
  //   link: '/partners/prescribers',
  //   Icon: FaUserDoctor,
  // }, TO DO : handle Partners Page
  {
    Icon: List,
    title: 'Services',
    links: [
      {
        title: 'Analyses Biologiques',
        link: '/services/biological-analyses',
        Icon: Dna,
      },
      {
        title: 'Imagerie Médicale',
        link: '/services/medical-imaging',
        Icon: Scan,
      },
      {
        title: 'Exploration Fonctionnelle',
        link: '/services/functional-exploration',
        Icon: SearchX,
      }
    ],
  },
  {
    title: "Espace Patient",
    Icon: BiHealth,
    links: [
      {
        title: 'Conseil De La Semaine',
        link: '/blogs/weekly-advice',
        Icon: Package,
      },
      {
        title: 'Préparer Ma Visite',
        link: '/our-agencies',
        Icon: ListFilter,
      },
    ],
  },
  {
    title: "Espace Pro",
    Icon: PlusSquare,
    links: [
      {
        title: 'Devenir Partenaire',
        link: '#contacts',
        Icon: PlusCircle,
      },
      {
        title: "Manuel De Prélèvements",
        link: '/exams',
        Icon: Gift,
      },
      {
        title: 'Quoi de Neuf SION ?',
        link: '/blogs/quoi-de-neuf-sion',
        Icon: Newspaper,
      }
    ]
  },
  {
    title: "Blog",
    Icon: Newspaper,
    links: blogSections.map(({label, tag, Icon}) => ({
      title: label,
      link: `/blogs/${tag}`,
      Icon
    }))
  },
  {
    title: "Nox Examens",
    Icon: GiDoctorFace,
    link: "/exams"
  },
  {
    title: "Nos Agences",
    Icon: Building,
    link: '/our-agencies'
  },
  {
    title: "Contactez Nous",
    Icon: Phone,
    link: '#contacts'
  },
  // {
  //   title: "Notre Histoire",
  //   Icon: Menu,
  //   link: '/about'
  // } TO DO : WORK ON OUR STORY SECTION
];
