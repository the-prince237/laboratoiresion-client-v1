'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Clock, Shield, Zap, Lock, ChevronDown } from 'lucide-react';

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

const agenciesData: CityAgencies[] = [
  {
    city: 'Yaoundé',
    agencies: [
      {
        id: 'yao-1',
        name: 'Laboratoire SION - Centre Ville',
        address: 'Avenue Kennedy, Quartier Administratif, Yaoundé',
        phone: ['+237 222 123 456', '+237 222 123 457'],
        email: 'yaounde.centre@labsion.cm',
        services: ['Blood Tests', 'Imaging', 'Microbiology', 'Biochemistry'],
        badges: ['24/7 Service', 'Imaging Available'],
        coordinates: { lat: 3.848, lng: 11.502 }
      },
      {
        id: 'yao-2',
        name: 'Laboratoire SION - Bastos',
        address: 'Rue 1.750, Bastos, Yaoundé',
        phone: ['+237 222 234 567'],
        email: 'yaounde.bastos@labsion.cm',
        services: ['Blood Tests', 'Pathology', 'Immunology'],
        badges: ['Express Results'],
        coordinates: { lat: 3.876, lng: 11.518 }
      },
      {
        id: 'yao-3',
        name: 'Laboratoire SION - Mvan',
        address: 'Carrefour Mvan, Yaoundé',
        phone: ['+237 222 345 678'],
        email: 'yaounde.mvan@labsion.cm',
        services: ['Blood Tests', 'Biochemistry', 'Hematology'],
        badges: [],
        coordinates: { lat: 3.856, lng: 11.512 }
      }
    ]
  },
  {
    city: 'Douala',
    agencies: [
      {
        id: 'dla-1',
        name: 'Laboratoire SION - Akwa',
        address: 'Boulevard de la Liberté, Akwa, Douala',
        phone: ['+237 233 123 456', '+237 233 123 457'],
        email: 'douala.akwa@labsion.cm',
        services: ['Blood Tests', 'Imaging', 'Radiology', 'Biochemistry'],
        badges: ['24/7 Service', 'Imaging Available'],
        coordinates: { lat: 4.051, lng: 9.767 }
      },
      {
        id: 'dla-2',
        name: 'Laboratoire SION - Bonanjo',
        address: 'Rue Joffre, Bonanjo, Douala',
        phone: ['+237 233 234 567'],
        email: 'douala.bonanjo@labsion.cm',
        services: ['Blood Tests', 'Microbiology', 'Serology'],
        badges: ['Express Results'],
        coordinates: { lat: 4.049, lng: 9.704 }
      }
    ]
  },
  {
    city: 'Bafoussam',
    agencies: [
      {
        id: 'baf-1',
        name: 'Laboratoire SION - Centre',
        address: 'Avenue de Gaulle, Centre Ville, Bafoussam',
        phone: ['+237 233 345 678'],
        email: 'bafoussam@labsion.cm',
        services: ['Blood Tests', 'Biochemistry', 'Hematology', 'Parasitology'],
        badges: ['Modern Equipment'],
        coordinates: { lat: 5.478, lng: 10.418 }
      }
    ]
  },
  {
    city: 'Bamenda',
    agencies: [
      {
        id: 'bam-1',
        name: 'Laboratoire SION - Commercial Avenue',
        address: 'Commercial Avenue, Bamenda',
        phone: ['+237 233 456 789'],
        email: 'bamenda@labsion.cm',
        services: ['Blood Tests', 'Immunology', 'Biochemistry'],
        badges: [],
        coordinates: { lat: 5.959, lng: 10.149 }
      }
    ]
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: 'Certified Laboratory',
    description: 'Accredited by national and international health authorities'
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'Express processing available with accurate diagnostics'
  },
  {
    icon: Lock,
    title: 'Confidential',
    description: 'Your medical data is protected with highest security standards'
  }
];

const AgencyCard: React.FC<{ agency: Agency }> = ({ agency }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-border bg-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl text-foreground mb-2">{agency.name}</CardTitle>
            <CardDescription className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/60" />
              <span>{agency.address}</span>
            </CardDescription>
          </div>
        </div>
        {agency.badges && agency.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {agency.badges.map((badge, idx) => (
              <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/50">
                {badge === '24/7 Service' && <Clock className="w-3 h-3 mr-1" />}
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Contact Information</h4>
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
            <h4 className="text-sm font-semibold text-foreground mb-2">Services Available</h4>
            <div className="flex flex-wrap gap-2">
              {agency.services.map((service, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {service}
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
              Call
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-teal-600 text-primary/60 hover:bg-teal-50"
              onClick={() => window.open(`mailto:${agency.email}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
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
              Directions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LaboratoireSionSites: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const scrollToAgencies = () => {
    document.getElementById('agencies-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredData = selectedCity === 'all' 
    ? agenciesData 
    : agenciesData.filter(city => city.city === selectedCity);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-background to-teal-50/30 border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/50">
              Medical Diagnostics Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Laboratory Sites Across Cameroon
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find the nearest Laboratoire SION agency and access reliable medical diagnostics with certified professionals and modern equipment.
            </p>
            <Button
              size="lg"
              className="bg-primary/80 hover:bg-primary text-white text-lg px-8"
              onClick={scrollToAgencies}
            >
              Find an Agency
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Laboratoire SION?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of patients across Cameroon for accurate, fast, and confidential medical diagnostics.
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
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Agencies Section */}
      <section id="agencies-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Locations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Select a city to view our laboratory sites and find the one nearest to you.
              </p>
            </div>

            <Tabs value={selectedCity} onValueChange={setSelectedCity} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
                <TabsTrigger value="all">All Cities</TabsTrigger>
                {agenciesData.map((cityData) => (
                  <TabsTrigger key={cityData.city} value={cityData.city}>
                    {cityData.city}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCity} className="space-y-12">
                {filteredData.map((cityData) => (
                  <div key={cityData.city}>
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {cityData.city}
                      </h3>
                      <p className="text-muted-foreground">
                        {cityData.agencies.length} {cityData.agencies.length === 1 ? 'location' : 'locations'} available
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

      
    </div>
  );
};

export default LaboratoireSionSites;