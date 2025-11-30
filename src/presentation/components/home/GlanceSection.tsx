import React from 'react';
import { Users, Globe, Building2 } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: Users,
    valueKey: 'home.glance.participants.value',
    labelKey: 'home.glance.participants.label',
    descKey: 'home.glance.participants.desc',
  },
  {
    icon: Globe,
    valueKey: 'home.glance.protocol.value',
    labelKey: 'home.glance.protocol.label',
    descKey: 'home.glance.protocol.desc',
  },
  {
    icon: Building2,
    valueKey: 'home.glance.location.value',
    labelKey: 'home.glance.location.label',
    descKey: 'home.glance.location.desc',
  },
];

export const GlanceSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="py-16 lg:py-24"
      aria-labelledby="glance-title"
    >
      <div className="section-container">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <h2 
            id="glance-title" 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
          >
            {t('home.glance.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('home.glance.subtitle')}
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.valueKey}
              className={cn(
                "relative overflow-hidden rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300",
                "hover:shadow-lg hover:border-primary/20"
              )}
            >
              {/* Background decoration */}
              <div 
                className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5"
                aria-hidden="true"
              />
              
              {/* Icon */}
              <div 
                className={cn(
                  "relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full",
                  "bg-accent text-primary"
                )}
                aria-hidden="true"
              >
                <stat.icon className="h-7 w-7" />
              </div>

              {/* Value */}
              <div className="relative mb-2 text-3xl font-bold text-primary lg:text-4xl">
                {t(stat.valueKey)}
              </div>

              {/* Label */}
              <div className="mb-3 text-lg font-semibold text-foreground">
                {t(stat.labelKey)}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(stat.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
