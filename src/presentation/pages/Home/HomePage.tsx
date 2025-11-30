import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Shield, Zap, Globe, Users, Server } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Zap,
    titleEn: 'Lower Latency',
    titleAr: 'زمن استجابة أقل',
    descEn: 'Direct local peering reduces round-trip times significantly.',
    descAr: 'التبادل المحلي المباشر يقلل أوقات الذهاب والإياب بشكل ملحوظ.',
  },
  {
    icon: Shield,
    titleEn: 'Enhanced Resilience',
    titleAr: 'مرونة معززة',
    descEn: 'Multiple interconnection paths ensure network redundancy.',
    descAr: 'مسارات ربط متعددة تضمن احتياطي الشبكة.',
  },
  {
    icon: Network,
    titleEn: 'Cost Efficiency',
    titleAr: 'كفاءة التكلفة',
    descEn: 'Keep local traffic local and reduce transit costs.',
    descAr: 'حافظ على حركة المرور المحلية محلياً وقلل تكاليف العبور.',
  },
  {
    icon: Globe,
    titleEn: 'Regional Hub',
    titleAr: 'مركز إقليمي',
    descEn: 'Strategic position connecting MENA networks.',
    descAr: 'موقع استراتيجي يربط شبكات الشرق الأوسط وشمال أفريقيا.',
  },
];

const stats = [
  { valueEn: '50+', valueAr: '+٥٠', labelEn: 'Connected Networks', labelAr: 'شبكة متصلة' },
  { valueEn: '100Gbps', valueAr: 'جيجابت/ث ١٠٠', labelEn: 'Peak Traffic', labelAr: 'ذروة حركة البيانات' },
  { valueEn: '99.99%', valueAr: '٪٩٩.٩٩', labelEn: 'Uptime', labelAr: 'وقت التشغيل' },
  { valueEn: '<1ms', valueAr: 'مللي ثانية >١', labelEn: 'Local Latency', labelAr: 'زمن الاستجابة المحلي' },
];

export const HomePage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <article>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-32" aria-labelledby="hero-title">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect fill="url(#hero-pattern)" width="100%" height="100%" />
          </svg>
        </div>

        <div className="section-container relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm animate-fade-in">
              <Server className="h-4 w-4" aria-hidden="true" />
              <span>{language === 'ar' ? 'البنية التحتية الرقمية لقطر' : 'Qatar\'s Digital Infrastructure'}</span>
            </div>

            {/* Title */}
            <h1 
              id="hero-title" 
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p 
              className="mb-8 text-lg text-white/90 sm:text-xl lg:text-2xl animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              {t('home.hero.description')}
            </p>

            {/* CTAs */}
            <div 
              className={cn(
                "flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-slide-up",
                isRTL && "sm:flex-row-reverse"
              )}
              style={{ animationDelay: '0.3s' }}
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/connect">
                  {t('home.hero.cta.primary')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/about">
                  {t('home.hero.cta.secondary')}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" 
          aria-hidden="true"
        />
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 pb-16" aria-label="Key statistics">
        <div className="section-container">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-lg transition-transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-2 text-3xl font-bold text-primary lg:text-4xl">
                  {language === 'ar' ? stat.valueAr : stat.valueEn}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {language === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 lg:py-24" aria-labelledby="features-title">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="features-title" className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {language === 'ar' ? 'لماذا التبادل مع QIX؟' : 'Why Peer With QIX?'}
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              {language === 'ar'
                ? 'انضم إلى البوابة الرائدة لتبادل الإنترنت في قطر واستمتع بمزايا لا مثيل لها.'
                : 'Join Qatar\'s premier Internet Exchange Point and enjoy unmatched benefits.'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {language === 'ar' ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'ar' ? feature.descAr : feature.descEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/why-peer">
                {t('common.learnMore')}
                <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="section-container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-8 text-center shadow-xl lg:p-12">
            <Users className="mx-auto mb-6 h-12 w-12 text-secondary" aria-hidden="true" />
            <h2 id="cta-title" className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
              {language === 'ar' 
                ? 'هل أنت مستعد للانضمام إلى شبكة QIX؟' 
                : 'Ready to Join the QIX Network?'}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {language === 'ar'
                ? 'تواصل معنا اليوم لمعرفة كيف يمكن لـ QIX تعزيز اتصال شبكتك.'
                : 'Contact us today to learn how QIX can enhance your network connectivity.'}
            </p>
            <div className={cn(
              "flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="lg">
                <Link to="/connect">
                  {t('home.hero.cta.primary')}
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  {t('nav.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
