import React from 'react';
import { Users, Globe, Building2, TrendingUp } from 'lucide-react';
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
  const { t, language } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden"
      aria-labelledby="glance-title"
    >
      {/* Background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
            <TrendingUp className="w-4 h-4" />
            {language === 'ar' ? 'الأرقام' : 'By The Numbers'}
          </div>
          <h2 
            id="glance-title" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up stagger-1"
          >
            {t('home.glance.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
            {t('home.glance.subtitle')}
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.valueKey}
              className={cn(
                "group relative rounded-3xl bg-card border border-border p-10 text-center transition-all duration-500",
                "hover:shadow-glow hover:-translate-y-2 hover:border-primary/30",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <stat.icon className="h-10 w-10 text-white" aria-hidden="true" />
              </div>

              {/* Value */}
              <div className="relative mb-2">
                <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t(stat.valueKey)}
                </span>
              </div>

              {/* Label */}
              <div className="relative text-xl font-semibold text-foreground mb-4">
                {t(stat.labelKey)}
              </div>

              {/* Description */}
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {t(stat.descKey)}
              </p>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
