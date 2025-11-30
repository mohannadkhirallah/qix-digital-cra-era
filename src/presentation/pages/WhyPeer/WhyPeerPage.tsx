import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  DollarSign, 
  MapPin, 
  Shield, 
  Tv, 
  Flag,
  Globe,
  Smartphone,
  Building2,
  Cloud,
  Briefcase,
  Network,
  ArrowRight,
  CheckCircle2,
  Users,
  Server,
  BarChart3,
  Workflow
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { PageHeader } from '@/presentation/components/ui/PageHeader';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

// Benefits data
const benefits = [
  { icon: Zap, titleKey: 'whyPeer.benefits.latency.title', descKey: 'whyPeer.benefits.latency.desc', color: 'from-amber-500 to-orange-600' },
  { icon: DollarSign, titleKey: 'whyPeer.benefits.cost.title', descKey: 'whyPeer.benefits.cost.desc', color: 'from-emerald-500 to-teal-600' },
  { icon: MapPin, titleKey: 'whyPeer.benefits.local.title', descKey: 'whyPeer.benefits.local.desc', color: 'from-blue-500 to-indigo-600' },
  { icon: Shield, titleKey: 'whyPeer.benefits.resilience.title', descKey: 'whyPeer.benefits.resilience.desc', color: 'from-purple-500 to-violet-600' },
  { icon: Tv, titleKey: 'whyPeer.benefits.experience.title', descKey: 'whyPeer.benefits.experience.desc', color: 'from-pink-500 to-rose-600' },
  { icon: Flag, titleKey: 'whyPeer.benefits.sovereignty.title', descKey: 'whyPeer.benefits.sovereignty.desc', color: 'from-primary to-primary-dark' },
];

// Audience segments
const audienceSegments = [
  { icon: Globe, titleKey: 'whyPeer.audience.isp.title', descKey: 'whyPeer.audience.isp.desc' },
  { icon: Smartphone, titleKey: 'whyPeer.audience.mno.title', descKey: 'whyPeer.audience.mno.desc' },
  { icon: Building2, titleKey: 'whyPeer.audience.government.title', descKey: 'whyPeer.audience.government.desc' },
  { icon: Cloud, titleKey: 'whyPeer.audience.cloud.title', descKey: 'whyPeer.audience.cloud.desc' },
  { icon: Briefcase, titleKey: 'whyPeer.audience.enterprise.title', descKey: 'whyPeer.audience.enterprise.desc' },
  { icon: Network, titleKey: 'whyPeer.audience.carrier.title', descKey: 'whyPeer.audience.carrier.desc' },
];

// Business benefits
const businessBenefits = [
  'whyPeer.value.business.item1',
  'whyPeer.value.business.item2',
  'whyPeer.value.business.item3',
  'whyPeer.value.business.item4',
];

// Technical benefits
const technicalBenefits = [
  'whyPeer.value.technical.item1',
  'whyPeer.value.technical.item2',
  'whyPeer.value.technical.item3',
  'whyPeer.value.technical.item4',
  'whyPeer.value.technical.item5',
];

// Use cases
const useCases = [
  { icon: Globe, titleKey: 'whyPeer.useCases.isp.title', descKey: 'whyPeer.useCases.isp.desc' },
  { icon: Building2, titleKey: 'whyPeer.useCases.government.title', descKey: 'whyPeer.useCases.government.desc' },
  { icon: Cloud, titleKey: 'whyPeer.useCases.cdn.title', descKey: 'whyPeer.useCases.cdn.desc' },
  { icon: Briefcase, titleKey: 'whyPeer.useCases.enterprise.title', descKey: 'whyPeer.useCases.enterprise.desc' },
];

// Peering explainer points
const peeringPoints = [
  'whyPeer.peering.point1',
  'whyPeer.peering.point2',
  'whyPeer.peering.point3',
];

export const WhyPeerPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <article>
      {/* Page Header */}
      <PageHeader
        title={t('whyPeer.title')}
        subtitle={t('whyPeer.subtitle')}
        breadcrumbs={[
          { label: t('whyPeer.breadcrumb.whyPeer') }
        ]}
      />

      {/* What is Peering Section */}
      <section className="py-16 lg:py-24" aria-labelledby="peering-title">
        <div className="section-container">
          <div className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Content */}
            <div className={cn(isRTL && "lg:col-start-2")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                <Workflow className="w-4 h-4" aria-hidden="true" />
                {t('whyPeer.peering.badge')}
              </div>
              <h2 id="peering-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-up stagger-1">
                {t('whyPeer.peering.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up stagger-2">
                <p>{t('whyPeer.peering.p1')}</p>
                <p>{t('whyPeer.peering.p2')}</p>
              </div>

              {/* Key Points */}
              <ul className="mt-8 space-y-3 animate-fade-up stagger-3" role="list">
                {peeringPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className={cn(
                      "flex items-start gap-3",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground font-medium">{t(point)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className={cn(
              "relative",
              isRTL && "lg:col-start-1"
            )}>
              <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border p-8 lg:p-10 animate-fade-up stagger-3">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" aria-hidden="true" />
                
                {/* Peering Illustration */}
                <div className="relative flex flex-col items-center justify-center py-8">
                  {/* Network nodes */}
                  <div className="flex items-center justify-center gap-8 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-2">
                        <Globe className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">Network A</span>
                    </div>
                    
                    {/* Connection line */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse" />
                      <div className="w-12 h-12 -mt-6 rounded-xl bg-gradient-to-br from-secondary to-gold flex items-center justify-center">
                        <span className="text-xs font-bold text-white">QIX</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-2">
                        <Server className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">Network B</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-center text-sm text-muted-foreground max-w-xs">
                    {t('whyPeer.peering.visual')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/50" aria-labelledby="benefits-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <BarChart3 className="w-4 h-4" aria-hidden="true" />
              {t('whyPeer.benefits.badge')}
            </div>
            <h2 id="benefits-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('whyPeer.benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('whyPeer.benefits.subtitle')}
            </p>
          </header>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.titleKey}
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
                  benefit.color
                )}>
                  <benefit.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(benefit.descKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Peer Section */}
      <section className="py-16 lg:py-24" aria-labelledby="audience-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Users className="w-4 h-4" aria-hidden="true" />
              {t('whyPeer.audience.badge')}
            </div>
            <h2 id="audience-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('whyPeer.audience.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('whyPeer.audience.subtitle')}
            </p>
          </header>

          {/* Audience Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceSegments.map((segment, index) => (
              <article
                key={segment.titleKey}
                className={cn(
                  "group relative rounded-2xl border border-border p-6 transition-all duration-500 bg-gradient-to-br from-background to-muted/30",
                  "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                  <segment.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(segment.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(segment.descKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business & Technical Value Section */}
      <section className="py-16 lg:py-24 bg-muted/50" aria-labelledby="value-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <BarChart3 className="w-4 h-4" aria-hidden="true" />
              {t('whyPeer.value.badge')}
            </div>
            <h2 id="value-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('whyPeer.value.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('whyPeer.value.subtitle')}
            </p>
          </header>

          {/* Two Column Layout */}
          <div className={cn(
            "grid lg:grid-cols-2 gap-8",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Business Benefits */}
            <div className={cn(
              "rounded-3xl bg-card border border-border p-8 animate-fade-up stagger-2",
              isRTL && "lg:col-start-2"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('whyPeer.value.business.title')}
                </h3>
              </div>
              <ul className="space-y-3" role="list">
                {businessBenefits.map((item, index) => (
                  <li 
                    key={index} 
                    className={cn(
                      "flex items-start gap-3",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Benefits */}
            <div className={cn(
              "rounded-3xl bg-card border border-border p-8 animate-fade-up stagger-3",
              isRTL && "lg:col-start-1"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('whyPeer.value.technical.title')}
                </h3>
              </div>
              <ul className="space-y-3" role="list">
                {technicalBenefits.map((item, index) => (
                  <li 
                    key={index} 
                    className={cn(
                      "flex items-start gap-3",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24" aria-labelledby="usecases-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Workflow className="w-4 h-4" aria-hidden="true" />
              {t('whyPeer.useCases.badge')}
            </div>
            <h2 id="usecases-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('whyPeer.useCases.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('whyPeer.useCases.subtitle')}
            </p>
          </header>

          {/* Use Cases Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <article
                key={useCase.titleKey}
                className={cn(
                  "group relative rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border p-8 transition-all duration-500",
                  "hover:border-primary/30 hover:shadow-xl",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-2xl" aria-hidden="true" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                  <useCase.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(useCase.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(useCase.descKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary" aria-labelledby="cta-title">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-bounce-subtle" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-bounce-subtle" style={{ animationDelay: '1s' }} />
            </div>

            <h2 id="cta-title" className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-up">
              {t('whyPeer.cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up stagger-1">
              {t('whyPeer.cta.subtitle')}
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="lg">
                <Link to="/connect">
                  {t('whyPeer.cta.connect')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/participants">
                  {t('whyPeer.cta.participants')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};