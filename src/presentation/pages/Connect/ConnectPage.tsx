import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText,
  CheckCircle2,
  Server,
  Network,
  Globe,
  Settings,
  Zap,
  Download,
  Mail,
  Headphones,
  Clock,
  ArrowRight,
  FileCheck,
  Users,
  Cable,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { PageHeader } from '@/presentation/components/ui/PageHeader';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

// Connection steps data
const connectionSteps = [
  {
    number: 1,
    titleKey: 'connect.steps.step1.title',
    descKey: 'connect.steps.step1.desc',
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: 2,
    titleKey: 'connect.steps.step2.title',
    descKey: 'connect.steps.step2.desc',
    icon: FileCheck,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: 3,
    titleKey: 'connect.steps.step3.title',
    descKey: 'connect.steps.step3.desc',
    icon: Settings,
    color: 'from-amber-500 to-orange-600',
  },
  {
    number: 4,
    titleKey: 'connect.steps.step4.title',
    descKey: 'connect.steps.step4.desc',
    icon: Zap,
    color: 'from-primary to-primary-dark',
  },
];

// Technical requirements data
const technicalRequirements = [
  { icon: Globe, titleKey: 'connect.requirements.asn.title', descKey: 'connect.requirements.asn.desc' },
  { icon: Network, titleKey: 'connect.requirements.ip.title', descKey: 'connect.requirements.ip.desc' },
  { icon: Server, titleKey: 'connect.requirements.bgp.title', descKey: 'connect.requirements.bgp.desc' },
  { icon: Cable, titleKey: 'connect.requirements.physical.title', descKey: 'connect.requirements.physical.desc' },
  { icon: Settings, titleKey: 'connect.requirements.interface.title', descKey: 'connect.requirements.interface.desc' },
  { icon: Shield, titleKey: 'connect.requirements.policy.title', descKey: 'connect.requirements.policy.desc' },
];

// Documents data
const documents = [
  {
    titleKey: 'connect.documents.policy.title',
    descKey: 'connect.documents.policy.desc',
    type: 'PDF',
    icon: FileText,
  },
  {
    titleKey: 'connect.documents.application.title',
    descKey: 'connect.documents.application.desc',
    type: 'PDF',
    icon: FileCheck,
  },
  {
    titleKey: 'connect.documents.technical.title',
    descKey: 'connect.documents.technical.desc',
    type: 'PDF',
    icon: Server,
  },
];

// Port options
const portOptions = [
  { speed: '1 GbE', descKey: 'connect.ports.1g' },
  { speed: '10 GbE', descKey: 'connect.ports.10g' },
  { speed: '100 GbE', descKey: 'connect.ports.100g' },
];

export const ConnectPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <article>
      {/* Page Header */}
      <PageHeader
        title={t('connect.title')}
        subtitle={t('connect.subtitle')}
        breadcrumbs={[
          { label: t('connect.breadcrumb.connect') }
        ]}
      />

      {/* Connection Process Steps */}
      <section className="py-16 lg:py-24" aria-labelledby="process-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              {t('connect.steps.badge')}
            </div>
            <h2 id="process-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('connect.steps.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('connect.steps.subtitle')}
            </p>
          </header>

          {/* Stepper */}
          <nav aria-label={t('connect.steps.nav')} className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
            </div>

            <ol className="grid lg:grid-cols-4 gap-8 relative">
              {connectionSteps.map((step, index) => (
                <li
                  key={step.number}
                  className={cn(
                    "relative animate-fade-up",
                    isRTL && "lg:order-last"
                  )}
                  style={{ animationDelay: `${0.1 * index}s`, order: isRTL ? 4 - index : index }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className={cn(
                      "relative w-32 h-32 rounded-3xl bg-gradient-to-br flex items-center justify-center mb-6 transition-transform duration-500 hover:scale-105",
                      step.color
                    )}>
                      <step.icon className="w-12 h-12 text-white" aria-hidden="true" />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Connector Arrow - Mobile */}
                  {index < connectionSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4" aria-hidden="true">
                      <ArrowRight className={cn(
                        "w-6 h-6 text-primary rotate-90",
                        isRTL && "-rotate-90"
                      )} />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 lg:py-24 bg-muted/50" aria-labelledby="requirements-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Server className="w-4 h-4" aria-hidden="true" />
              {t('connect.requirements.badge')}
            </div>
            <h2 id="requirements-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('connect.requirements.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('connect.requirements.subtitle')}
            </p>
          </header>

          {/* Requirements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalRequirements.map((req, index) => (
              <article
                key={req.titleKey}
                className={cn(
                  "group relative rounded-2xl bg-card border border-border p-6 transition-all duration-500",
                  "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                  <req.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(req.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(req.descKey)}
                </p>
              </article>
            ))}
          </div>

          {/* Port Options */}
          <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-card border border-border animate-fade-up">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Cable className="w-6 h-6 text-primary" aria-hidden="true" />
              {t('connect.ports.title')}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {portOptions.map((port) => (
                <div
                  key={port.speed}
                  className="p-4 rounded-xl bg-muted/50 border border-border text-center hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{port.speed}</div>
                  <p className="text-sm text-muted-foreground">{t(port.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Policies */}
      <section className="py-16 lg:py-24" aria-labelledby="documents-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <FileText className="w-4 h-4" aria-hidden="true" />
              {t('connect.documents.badge')}
            </div>
            <h2 id="documents-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up stagger-1">
              {t('connect.documents.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
              {t('connect.documents.subtitle')}
            </p>
          </header>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <article
                key={doc.titleKey}
                className={cn(
                  "group relative rounded-2xl bg-card border border-border p-6 transition-all duration-500",
                  "hover:border-primary/30 hover:shadow-xl hover:-translate-y-2",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Document Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                    {doc.type}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                  <doc.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(doc.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {t(doc.descKey)}
                </p>

                {/* Download Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-full gap-2",
                    isRTL && "flex-row-reverse"
                  )}
                  aria-label={`${t('connect.documents.download')} ${t(doc.titleKey)}`}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  {t('connect.documents.download')}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coordination & Lead Times */}
      <section className="py-16 lg:py-24 bg-muted/50" aria-labelledby="coordination-title">
        <div className="section-container">
          <div className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Content */}
            <div className={cn(isRTL && "lg:col-start-2")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {t('connect.coordination.badge')}
              </div>
              <h2 id="coordination-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-up stagger-1">
                {t('connect.coordination.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up stagger-2">
                <p>{t('connect.coordination.p1')}</p>
                <p>{t('connect.coordination.p2')}</p>
              </div>

              {/* Timeline highlights */}
              <div className="mt-8 space-y-4 animate-fade-up stagger-3">
                {[
                  { labelKey: 'connect.coordination.timeline1', valueKey: 'connect.coordination.timeline1Value' },
                  { labelKey: 'connect.coordination.timeline2', valueKey: 'connect.coordination.timeline2Value' },
                  { labelKey: 'connect.coordination.timeline3', valueKey: 'connect.coordination.timeline3Value' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl bg-card border border-border",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div className="w-2 h-10 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" />
                    <div className={cn(isRTL && "text-right")}>
                      <div className="text-sm text-muted-foreground">{t(item.labelKey)}</div>
                      <div className="font-semibold text-foreground">{t(item.valueKey)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual / Info Card */}
            <div className={cn(
              "relative",
              isRTL && "lg:col-start-1"
            )}>
              <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-10 text-white animate-fade-up stagger-3">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
                
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-secondary" aria-hidden="true" />
                  {t('connect.coordination.support.title')}
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  {t('connect.coordination.support.desc')}
                </p>

                {/* Key Features */}
                <ul className="space-y-3">
                  {[
                    'connect.coordination.support.item1',
                    'connect.coordination.support.item2',
                    'connect.coordination.support.item3',
                  ].map((item, index) => (
                    <li 
                      key={index} 
                      className={cn(
                        "flex items-center gap-3",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" aria-hidden="true" />
                      <span className="text-white/90">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-16 lg:py-24" aria-labelledby="support-title">
        <div className="section-container">
          {/* Header */}
          <header className="text-center mb-12">
            <h2 id="support-title" className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up">
              {t('connect.support.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-1">
              {t('connect.support.subtitle')}
            </p>
          </header>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* General Enquiries */}
            <article className="rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all animate-fade-up stagger-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t('connect.support.general.title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('connect.support.general.desc')}
              </p>
              <a 
                href="mailto:info@qix.qa"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
              >
                info@qix.qa
              </a>
            </article>

            {/* Technical / NOC */}
            <article className="rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all animate-fade-up stagger-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mx-auto mb-5">
                <Headphones className="h-7 w-7 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {t('connect.support.noc.title')}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('connect.support.noc.desc')}
              </p>
              <a 
                href="mailto:noc@qix.qa"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded"
              >
                noc@qix.qa
              </a>
            </article>
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
              {t('connect.cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up stagger-1">
              {t('connect.cta.subtitle')}
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="lg">
                <Link to="/participants">
                  {t('connect.cta.participants')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  {t('connect.cta.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};