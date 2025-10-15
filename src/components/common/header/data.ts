import { Building, Dna, Gift, List, ListFilter, Menu, Newspaper, Package, Phone, PlusCircle, PlusSquare, Scan, SearchX } from 'lucide-react';
import { BiHealth } from 'react-icons/bi';
import { FaUserDoctor } from 'react-icons/fa6';

export const navigationItems = [
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
        link: '/servcies/medical-imaging',
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
        title: 'Rencontrer Nos Médecins Partenaires',
        link: '/doctors',
        Icon: FaUserDoctor,
      },
      {
        title: 'Conseil De La Semaine',
        link: '/blogs/weekly-advice/latest',
        Icon: Package,
      },
      {
        title: 'Préparer Ma Visite',
        link: '/patient/visit-us',
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
        link: '/professionals/become-a-partner',
        Icon: PlusCircle,
      },
      {
        title: "Manuel De Prélèvements",
        link: '/professionals/sampling-manual',
        Icon: Gift,
      },
      {
        title: 'Quoi de Neuf SION ?',
        link: '/blogs/quoi-de-neuf-sion/latest',
        Icon: Newspaper,
      }
    ]
  },
  {
    title: "Nos Agences",
    Icon: Building,
    link: '/our-agencies'
  },
  {
    title: "Actualités",
    Icon: Newspaper,
    link: '/blogs/news'
  },
  {
    title: "Contactez Nous",
    Icon: Phone,
    link: '/contacts'
  },
  {
    title: "À Propos",
    Icon: Menu,
    link: '/about'
  }
];
