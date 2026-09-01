import React from 'react';
import { Activity, Users, Award, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';

interface StatisticCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  description?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ 
  icon, 
  value, 
  label, 
  trend, 
  description 
}) => {
  return (
    <Card className="relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              {icon}
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-foreground">{value}</h3>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            {description && (
              <p className="text-xs text-muted-foreground/70 mt-2">{description}</p>
            )}
          </div>
        </div>
        {trend && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-semibold">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full" />
    </Card>
  );
};

interface MedicalLabStatisticsProps {
  stats?: Array<{
    icon: React.ReactNode;
    value: string;
    label: string;
    trend?: string;
    description?: string;
  }>;
  title?: string;
  subtitle?: string;
}

const MedicalLabStatistics: React.FC<MedicalLabStatisticsProps> = ({
  stats,
  title,
  subtitle
}) => {
  const t = useTranslations('home.stats');
  const defaultStats = [
    {
      icon: <Activity className="w-6 h-6" />,
      value: '50,000+',
      label: t('items.tests.label'),
      trend: '+12%',
      description: t('items.tests.description')
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '25,000+',
      label: t('items.patients.label'),
      trend: '+18%',
      description: t('items.patients.description')
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '99.8%',
      label: t('items.accuracy.label'),
      description: t('items.accuracy.description')
    },
    {
      icon: <Activity className="w-6 h-6" />,
      value: '24/7',
      label: t('items.emergency.label'),
      description: t('items.emergency.description')
    }
  ];
  const resolvedStats = stats ?? defaultStats;
  const resolvedTitle = title ?? t('title');
  const resolvedSubtitle = subtitle ?? t('subtitle');
  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t('badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            {resolvedTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {resolvedSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resolvedStats.map((stat, index) => (
            <StatisticCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              trend={stat.trend}
              description={stat.description}
            />
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t('ctaTitle')}
              </h3>
              <p className="text-muted-foreground">
                {t('ctaSubtitle')}
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-secondary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                {t('bookNow')}
              </button>
              <button className="px-6 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-accent transition-colors">
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function HomeStats() {
  return <MedicalLabStatistics />;
}
