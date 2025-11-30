import React from 'react';
import { 
  Zap, 
  MapPin, 
  TrendingDown, 
  Shield, 
  Flag, 
  Sprout,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: Zap,
    titleKey: 'home.why.latency.title',
    descKey: 'home.why.latency.desc',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: MapPin,
    titleKey: 'home.why.local.title',
    descKey: 'home.why.local.desc',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: TrendingDown,
    titleKey: 'home.why.cost.title',
    descKey: 'home.why.cost.desc',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Shield,
    titleKey: 'home.why.resilience.title',
    descKey: 'home.why.resilience.desc',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Flag,
    titleKey: 'home.why.sovereignty.title',
    descKey: 'home.why.sovereignty.desc',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Sprout,
    titleKey: 'home.why.growth.title',
    descKey: 'home.why.growth.desc',
    color: 'from-cyan-500 to-blue-600',
  },
];

export const WhyQixSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="why-qix-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" aria-hidden="true" />

      <div className="section-container relative">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {language === 'ar' ? 'المزايا الرئيسية' : 'Key Benefits'}
          </div>
          <h2 
            id="why-qix-title" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up stagger-1"
          >
            {t('home.why.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
            {t('home.why.subtitle')}
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.titleKey}
              className={cn(
                "group relative rounded-2xl bg-card border border-border p-8 transition-all duration-500",
                "hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className={cn(
                "relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br mb-6 transition-transform duration-500 group-hover:scale-110",
                benefit.color
              )}>
                <benefit.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {t(benefit.titleKey)}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {t(benefit.descKey)}
              </p>

              {/* Arrow indicator */}
              <div className={cn(
                "absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2",
                isRTL ? "left-8 group-hover:-translate-x-2" : "right-8"
              )}>
                <ArrowRight className={cn("h-5 w-5 text-primary", isRTL && "rotate-180")} />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/why-peer"
            className={cn(
              "inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all",
              isRTL && "flex-row-reverse"
            )}
          >
            {language === 'ar' ? 'اكتشف المزيد من المزايا' : 'Discover more benefits'}
            <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
          </Link>
        </div>
      </div>
    </section>
  );
};
