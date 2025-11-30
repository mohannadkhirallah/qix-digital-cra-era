import React from 'react';
import { 
  Wifi, 
  Smartphone, 
  Cloud, 
  Landmark, 
  Building, 
  FileText 
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const participantTypes = [
  {
    icon: Wifi,
    labelKey: 'home.ecosystem.isp',
    examples: ['Ooredoo', 'Vodafone Qatar'],
  },
  {
    icon: Smartphone,
    labelKey: 'home.ecosystem.mobile',
    examples: ['Mobile Networks'],
  },
  {
    icon: Cloud,
    labelKey: 'home.ecosystem.cdn',
    examples: ['Cloud Providers', 'CDN Services'],
  },
  {
    icon: Landmark,
    labelKey: 'home.ecosystem.government',
    examples: ['Government Networks'],
  },
  {
    icon: Building,
    labelKey: 'home.ecosystem.enterprise',
    examples: ['Enterprise Networks'],
  },
  {
    icon: FileText,
    labelKey: 'home.ecosystem.content',
    examples: ['Content Providers'],
  },
];

export const EcosystemSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="bg-muted py-16 lg:py-24"
      aria-labelledby="ecosystem-title"
    >
      <div className="section-container">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center mb-8 lg:mb-12">
          <h2 
            id="ecosystem-title" 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
          >
            {t('home.ecosystem.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('home.ecosystem.subtitle')}
          </p>
        </header>

        {/* Description */}
        <div className={cn(
          "mx-auto max-w-4xl mb-12 text-center",
          isRTL && "text-center"
        )}>
          <p className="text-muted-foreground leading-relaxed">
            {t('home.ecosystem.description')}
          </p>
        </div>

        {/* Participant Types Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {participantTypes.map((type, index) => (
            <div
              key={type.labelKey}
              className={cn(
                "group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300",
                "hover:border-primary/30 hover:shadow-md",
                "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              )}
              tabIndex={0}
              role="article"
              aria-label={t(type.labelKey)}
            >
              {/* Icon Container */}
              <div 
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-lg",
                  "bg-primary/10 text-primary transition-colors duration-300",
                  "group-hover:bg-primary group-hover:text-primary-foreground"
                )}
                aria-hidden="true"
              >
                <type.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground">
                  {t(type.labelKey)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground truncate">
                  {type.examples.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Logos Section */}
        <div className="mt-12 rounded-xl border border-border bg-card p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            {isRTL ? 'شبكات مشاركة في QIX' : 'Networks Participating in QIX'}
          </h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "flex h-20 items-center justify-center rounded-lg border-2 border-dashed border-border",
                  "bg-muted/50 text-muted-foreground transition-colors",
                  "hover:border-primary/30 hover:bg-muted"
                )}
                aria-label={`${isRTL ? 'شعار المشارك' : 'Participant logo'} ${i + 1}`}
              >
                <span className="text-xs font-medium opacity-60">
                  {isRTL ? 'الشعار' : 'Logo'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
