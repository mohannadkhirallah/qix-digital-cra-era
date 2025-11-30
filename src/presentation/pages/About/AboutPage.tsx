import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Zap, 
  Globe, 
  Shield, 
  CheckCircle2, 
  Building2, 
  Headphones, 
  Server, 
  Network,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { PageHeader } from '@/presentation/components/ui/PageHeader';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

// Mission cards data
const missionCards = [
  { icon: Scale, titleKey: 'about.mission.neutral.title', descKey: 'about.mission.neutral.desc', color: 'from-blue-500 to-indigo-600' },
  { icon: Zap, titleKey: 'about.mission.performance.title', descKey: 'about.mission.performance.desc', color: 'from-amber-500 to-orange-600' },
  { icon: Globe, titleKey: 'about.mission.digital.title', descKey: 'about.mission.digital.desc', color: 'from-emerald-500 to-teal-600' },
  { icon: Shield, titleKey: 'about.mission.resilience.title', descKey: 'about.mission.resilience.desc', color: 'from-purple-500 to-violet-600' },
];

// Infrastructure features
const infrastructureFeatures = [
  { icon: Building2, titleKey: 'about.infrastructure.feature1.title', descKey: 'about.infrastructure.feature1.desc' },
  { icon: Headphones, titleKey: 'about.infrastructure.feature2.title', descKey: 'about.infrastructure.feature2.desc' },
  { icon: Server, titleKey: 'about.infrastructure.feature3.title', descKey: 'about.infrastructure.feature3.desc' },
  { icon: Network, titleKey: 'about.infrastructure.feature4.title', descKey: 'about.infrastructure.feature4.desc' },
];

// Governance principles
const governancePrinciples = [
  'about.governance.principle1',
  'about.governance.principle2',
  'about.governance.principle3',
  'about.governance.principle4',
  'about.governance.principle5',
];

export const AboutPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <article>
      {/* Page Header */}
      <PageHeader
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        breadcrumbs={[
          { label: t('about.breadcrumb.about') }
        ]}
      />

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24" aria-labelledby="who-we-are-title">
        <div className="section-container">
          <div className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Content */}
            <div className={cn(isRTL && "lg:col-start-2")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                <Network className="w-4 h-4" />
                {t('about.whoWeAre.title')}
              </div>
              <h2 id="who-we-are-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-up stagger-1">
                {t('about.whoWeAre.subtitle')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up stagger-2">
                <p>{t('about.whoWeAre.p1')}</p>
                <p>{t('about.whoWeAre.p2')}</p>
                <p>{t('about.whoWeAre.p3')}</p>
              </div>
            </div>

            {/* Stats Card */}
            <div className={cn(
              "relative",
              isRTL && "lg:col-start-1"
            )}>
              <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border p-8 lg:p-10 animate-fade-up stagger-3">
                {/* Decorative */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" aria-hidden="true" />
                
                <div className="relative grid grid-cols-1 gap-8">
                  {[
                    { label: t('about.whoWeAre.established'), value: t('about.whoWeAre.establishedValue') },
                    { label: t('about.whoWeAre.type'), value: t('about.whoWeAre.typeValue') },
                    { label: t('about.whoWeAre.coverage'), value: t('about.whoWeAre.coverageValue') },
                  ].map((stat, index) => (
                    <div key={index} className={cn(
                      "flex items-center gap-4 p-4 rounded-xl bg-background/80 border border-border",
                      index < 2 && "border-b-0 rounded-b-none",
                      index > 0 && "border-t-0 rounded-t-none"
                    )}>
                      <div className="w-2 h-12 rounded-full bg-gradient-to-b from-primary to-secondary" />
                      <div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* QIX Badge */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow">
                  <span className="text-2xl font-bold text-white">QIX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Role Section */}
      <section className="py-16 lg:py-24 bg-muted/50" aria-labelledby="mission-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Globe className="w-4 h-4" />
              {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
            </div>
            <h2 id="mission-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('about.mission.subtitle')}
            </p>
          </header>

          {/* Mission Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionCards.map((card, index) => (
              <article
                key={card.titleKey}
                className={cn(
                  "group relative rounded-2xl bg-card border border-border p-6 transition-all duration-500",
                  "hover:border-primary/30 hover:shadow-xl hover:-translate-y-2",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className={cn(
                  "inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br mb-5 transition-transform duration-500 group-hover:scale-110",
                  card.color
                )}>
                  <card.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(card.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(card.descKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Neutrality Section */}
      <section className="py-16 lg:py-24" aria-labelledby="governance-title">
        <div className="section-container">
          <div className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Principles Card */}
            <div className={cn(isRTL && "lg:col-start-2")}>
              <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10 text-white animate-fade-up">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Scale className="h-6 w-6 text-secondary" />
                  {language === 'ar' ? 'مبادئ الحياد' : 'Neutrality Principles'}
                </h3>
                <ul className="space-y-4">
                  {governancePrinciples.map((principle, index) => (
                    <li 
                      key={index} 
                      className={cn(
                        "flex items-start gap-3",
                        isRTL && "flex-row-reverse text-right"
                      )}
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-white/90">{t(principle)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className={cn(isRTL && "lg:col-start-1")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                <Shield className="w-4 h-4" />
                {language === 'ar' ? 'الحوكمة' : 'Governance'}
              </div>
              <h2 id="governance-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-up stagger-1">
                {t('about.governance.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-up stagger-2">
                {t('about.governance.subtitle')}
              </p>
              <p className="text-muted-foreground leading-relaxed animate-fade-up stagger-3">
                {t('about.governance.intro')}
              </p>
              
              {/* CRA Link */}
              <a
                href="https://www.cra.gov.qa"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline transition-all animate-fade-up stagger-4",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50 rounded",
                  isRTL && "flex-row-reverse"
                )}
              >
                {language === 'ar' ? 'زيارة موقع هيئة تنظيم الاتصالات' : 'Visit CRA Website'}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 lg:py-24 bg-muted/50" aria-labelledby="infrastructure-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Building2 className="w-4 h-4" />
              {language === 'ar' ? 'البنية التحتية' : 'Infrastructure'}
            </div>
            <h2 id="infrastructure-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('about.infrastructure.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('about.infrastructure.subtitle')}
            </p>
          </header>

          {/* Intro text */}
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up stagger-3">
            {t('about.infrastructure.intro')}
          </p>

          {/* Infrastructure Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <article
                key={feature.titleKey}
                className={cn(
                  "group relative rounded-2xl bg-card border border-border p-6 text-center transition-all duration-500",
                  "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-foreground mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary" aria-labelledby="about-cta-title">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="about-cta-title" className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-up">
              {t('about.cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up stagger-1">
              {t('about.cta.desc')}
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="lg">
                <Link to="/connect">
                  {t('home.cta.connect')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  {t('home.cta.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
