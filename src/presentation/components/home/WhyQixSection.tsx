import React from 'react';
import { 
  Zap, 
  MapPin, 
  TrendingDown, 
  Shield, 
  Flag, 
  Sprout 
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Zap,
    titleKey: 'home.why.latency.title',
    descKey: 'home.why.latency.desc',
  },
  {
    icon: MapPin,
    titleKey: 'home.why.local.title',
    descKey: 'home.why.local.desc',
  },
  {
    icon: TrendingDown,
    titleKey: 'home.why.cost.title',
    descKey: 'home.why.cost.desc',
  },
  {
    icon: Shield,
    titleKey: 'home.why.resilience.title',
    descKey: 'home.why.resilience.desc',
  },
  {
    icon: Flag,
    titleKey: 'home.why.sovereignty.title',
    descKey: 'home.why.sovereignty.desc',
  },
  {
    icon: Sprout,
    titleKey: 'home.why.growth.title',
    descKey: 'home.why.growth.desc',
  },
];

export const WhyQixSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="bg-muted py-16 lg:py-24"
      aria-labelledby="why-qix-title"
    >
      <div className="section-container">
        {/* Section Header */}
        <header className={cn("mx-auto max-w-3xl text-center mb-12 lg:mb-16", isRTL && "text-center")}>
          <h2 
            id="why-qix-title" 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
          >
            {t('home.why.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('home.why.subtitle')}
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.titleKey}
              className={cn(
                "group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300",
                "hover:border-primary/30 hover:shadow-md hover:-translate-y-1",
                "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div 
                className={cn(
                  "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
                  "bg-primary/10 text-primary transition-colors duration-300",
                  "group-hover:bg-primary group-hover:text-primary-foreground"
                )}
                aria-hidden="true"
              >
                <benefit.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(benefit.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
