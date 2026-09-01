'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Clock, Shield, Zap, Lock, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib';

interface Agency {
  id: string;
  name: string;
  address: string;
  phone: string[];
  email: string;
  services: string[];
  badges?: string[];
  coordinates?: { lat: number; lng: number };
}

interface CityAgencies {
  city: string;
  agencies: Agency[];
}

export const agenciesData: CityAgencies[] = [
  {
    city: 'Yaoundé',
    agencies: [
      {
        id: 'yao-melen',
        name: 'Laboratoire SION – Melen',
        address: 'En face de la GP Melen, Immeuble Palais des Verres, 4e étage, Yaoundé',
        phone: ['+237 658 557 918', '+237 682 233 250'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques', 'Échographie'],
        badges: ['Imagerie Disponible'],
        coordinates: { lat: 3.8483, lng: 11.4971 }
      },
      {
        id: 'yao-mvogmbi',
        name: 'Laboratoire SION – Mvog-Mbi',
        address: 'Mvog-Mbi, Immeuble Afriland First Bank, Yaoundé',
        phone: ['+237 657 203 842', '+237 676 734 261'],
        email: 'contact@laboratoiresion.org',
        services: [
          'Analyses Biologiques',
          'Imagerie Médicale',
          'Explorations Fonctionnelles'
        ],
        badges: ['Plateau Technique Complet'],
        coordinates: { lat: 3.8619, lng: 11.5186 }
      },
      {
        id: 'yao-ngousso',
        name: 'Laboratoire SION – Ngousso',
        address: 'Fabrique Ngousso, Immeuble RENAPROV, Yaoundé',
        phone: ['+237 658 787 905', '+237 672 671 192'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques', 'Imagerie Médicale'],
        coordinates: { lat: 3.8931, lng: 11.5254 }
      }
    ]
  },
  {
    city: 'Douala',
    agencies: [
      {
        id: 'dla-village',
        name: 'Laboratoire SION – Village',
        address: 'Village, au-dessus de la Pharmacie Le Temps, Douala',
        phone: ['+237 690 760 381', '+237 651 358 274'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques', 'Imagerie Médicale'],
        coordinates: { lat: 4.0622, lng: 9.7085 }
      },
      {
        id: 'dla-bessengue',
        name: 'Laboratoire SION – Bessengue',
        address: 'Bessengue, Feu Rouge, à côté d’Afriland First Bank, Douala',
        phone: ['+237 697 466 151', '+237 671 908 920'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques', 'Imagerie Médicale'],
        badges: ['Service 24h/24 – 7j/7'],
        coordinates: { lat: 4.0469, lng: 9.7264 }
      },
      {
        id: 'dla-bonaberi',
        name: 'Laboratoire SION – Bonabéri',
        address: 'Bonassama, Mobile Bonabéri (SODIPROVET SARL), Douala',
        phone: ['+237 678 432 934', '+237 659 786 448'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques'],
        coordinates: { lat: 4.0906, lng: 9.6432 }
      },
      {
        id: 'dla-beedi',
        name: 'Laboratoire SION – Beedi',
        address: 'En face de la Boulangerie Malangue, Douala',
        phone: ['+237 670 522 162', '+237 659 158 673'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques'],
        coordinates: { lat: 4.0348, lng: 9.7512 }
      }
    ]
  },
  {
    city: 'Bafoussam',
    agencies: [
      {
        id: 'baf-biao',
        name: 'Laboratoire SION – Biao',
        address: 'Rond-point Biao, Bafoussam',
        phone: ['+237 698 823 897'],
        email: 'contact@laboratoiresion.org',
        services: ['Analyses Biologiques', 'Imagerie Médicale'],
        badges: ['Plateau Technique Moderne'],
        coordinates: { lat: 5.4786, lng: 10.4173 }
      }
    ]
  }
];


const trustFeatures = [
  { icon: Shield, key: 'certified' },
  { icon: Zap, key: 'fast' },
  { icon: Lock, key: 'confidential' }
] as const;

// Correspondance entre les libellés (données en dur) et les clés de traduction.
const serviceKeys: Record<string, string> = {
  'Analyses Biologiques': 'biology',
  'Imagerie Médicale': 'imaging',
  'Échographie': 'ultrasound',
  'Explorations Fonctionnelles': 'functional'
};

const badgeKeys: Record<string, string> = {
  'Imagerie Disponible': 'imagingAvailable',
  'Plateau Technique Complet': 'fullTechnicalPlatform',
  'Service 24h/24 – 7j/7': 'service247',
  'Plateau Technique Moderne': 'modernTechnicalPlatform'
};

const AgencyCard: React.FC<{ agency: Agency }> = ({ agency }) => {
  const t = useTranslations('agencies');
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-border bg-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl text-foreground mb-2">{agency.name}</CardTitle>
            <CardDescription className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
              <span>{t(`addresses.${agency.id}`)}</span>
            </CardDescription>
          </div>
        </div>
        {agency.badges && agency.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {agency.badges.map((badge, idx) => (
              <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/50">
                {badge === 'Service 24h/24 et 7j/7' && <Clock className="w-3 h-3 mr-1" />}
                {badgeKeys[badge] ? t(`badges.${badgeKeys[badge]}`) : badge}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">{t('card.contactDetails')}</h4>
            <div className="space-y-2">
              {agency.phone.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary/60 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phone}</span>
                </a>
              ))}
              <a
                href={`mailto:${agency.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary/60 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{agency.email}</span>
              </a>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">{t('card.availableServices')}</h4>
            <div className="flex flex-wrap gap-2">
              {agency.services.map((service, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {serviceKeys[service] ? t(`services.${serviceKeys[service]}`) : service}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              size="sm"
              className="bg-primary/80 hover:bg-primary text-white"
              onClick={() => window.open(`tel:${agency.phone[0]}`, '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('card.call')}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-teal-600 text-primary/60 hover:bg-teal-50"
              onClick={() => window.open(`mailto:${agency.email}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              {t('card.email')}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agency.address)}`,
                  '_blank'
                )
              }
            >
              <MapPin className="w-4 h-4 mr-2" />
              {t('card.directions')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const scrollToAgencies = () => {
  document.getElementById('agencies-section')?.scrollIntoView({ behavior: 'smooth' });
};


const AgenciesSection: React.FC = () => {
  const t = useTranslations('agencies');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionsRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const buttonsRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -80% 0px', // Trigger when section is at center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
        if (!entry.isIntersecting) {
          setActiveSection(null);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const element = sectionsRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  const filteredData = selectedCity === 'all' 
    ? agenciesData 
    : agenciesData.filter(city => city.city === selectedCity);

  {/* Section Agences */}
  return (
      <section ref={sectionsRef} id="agencies-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('locations.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('locations.description')}
              </p>
            </div>

            <Tabs value={selectedCity} onValueChange={setSelectedCity} className="w-full gap-12">
              <div onClick={scrollToAgencies} ref={buttonsRef} className={cn('w-full flex justify-center', 
                {
                  'fixed bottom-0 bg-[#f7f7f7] py-3 items-center md:py-6 z-50 left-0 px-4': activeSection === 'agencies-section',
                  'relative bottom-0': activeSection !== 'agencies-section',
                },)}>
                <TabsList className={cn("grid w-full max-w-2xl mx-auto grid-cols-4")}>
                  <TabsTrigger value="all">{t('locations.all')}</TabsTrigger>
                  {agenciesData.map((cityData) => (
                    <TabsTrigger key={cityData.city} value={cityData.city}>
                      {cityData.city}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value={selectedCity} className="space-y-12">
                {filteredData.map((cityData) => (
                  <div key={cityData.city}>
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {cityData.city}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('locations.available', { count: cityData.agencies.length })}
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cityData.agencies.map((agency) => (
                        <AgencyCard key={agency.id} agency={agency} />
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

  )
}

const LaboratoireSionSites: React.FC = () => {
  const t = useTranslations('agencies');
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Section Hero */}
      <section className="relative border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/50">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            <Button
              size="lg"
              className="bg-primary/80 hover:bg-primary text-white text-lg px-8"
              onClick={scrollToAgencies}
            >
              {t('hero.cta')}
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section Confiance et Crédibilité */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('trust.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('trust.description')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {trustFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="text-center border-border hover:border-teal-200 transition-colors">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary/60" />
                      </div>
                      <CardTitle className="text-xl mb-2">{t(`trust.features.${feature.key}.title`)}</CardTitle>
                      <CardDescription>{t(`trust.features.${feature.key}.description`)}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <AgenciesSection />
    </div>
  );
};

export default LaboratoireSionSites;