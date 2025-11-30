import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText,
  Search,
  Filter,
  Download,
  Shield,
  Scale,
  Server,
  FileCheck,
  ClipboardList,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  Globe,
  BookOpen,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { PageHeader } from '@/presentation/components/ui/PageHeader';
import { Button } from '@/presentation/components/ui/Button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

// Document category types
type DocumentCategory = 'peering' | 'acceptable-use' | 'technical' | 'operational' | 'forms';

// Document interface
interface PolicyDocument {
  id: number;
  titleKey: string;
  descKey: string;
  category: DocumentCategory;
  fileType: 'PDF' | 'DOCX';
  fileSize: string;
  languages: ('en' | 'ar')[];
  isKey?: boolean;
}

// Mock documents data
const documentsData: PolicyDocument[] = [
  {
    id: 1,
    titleKey: 'policies.docs.peeringPolicy.title',
    descKey: 'policies.docs.peeringPolicy.desc',
    category: 'peering',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    languages: ['en', 'ar'],
    isKey: true,
  },
  {
    id: 2,
    titleKey: 'policies.docs.aup.title',
    descKey: 'policies.docs.aup.desc',
    category: 'acceptable-use',
    fileType: 'PDF',
    fileSize: '890 KB',
    languages: ['en', 'ar'],
    isKey: true,
  },
  {
    id: 3,
    titleKey: 'policies.docs.technicalGuide.title',
    descKey: 'policies.docs.technicalGuide.desc',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    languages: ['en', 'ar'],
    isKey: true,
  },
  {
    id: 4,
    titleKey: 'policies.docs.routingPolicy.title',
    descKey: 'policies.docs.routingPolicy.desc',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '1.1 MB',
    languages: ['en', 'ar'],
  },
  {
    id: 5,
    titleKey: 'policies.docs.membershipApp.title',
    descKey: 'policies.docs.membershipApp.desc',
    category: 'forms',
    fileType: 'PDF',
    fileSize: '450 KB',
    languages: ['en', 'ar'],
  },
  {
    id: 6,
    titleKey: 'policies.docs.portRequest.title',
    descKey: 'policies.docs.portRequest.desc',
    category: 'forms',
    fileType: 'PDF',
    fileSize: '320 KB',
    languages: ['en', 'ar'],
  },
  {
    id: 7,
    titleKey: 'policies.docs.nocProcedures.title',
    descKey: 'policies.docs.nocProcedures.desc',
    category: 'operational',
    fileType: 'PDF',
    fileSize: '980 KB',
    languages: ['en'],
  },
  {
    id: 8,
    titleKey: 'policies.docs.escalationMatrix.title',
    descKey: 'policies.docs.escalationMatrix.desc',
    category: 'operational',
    fileType: 'PDF',
    fileSize: '420 KB',
    languages: ['en', 'ar'],
  },
  {
    id: 9,
    titleKey: 'policies.docs.bgpCommunities.title',
    descKey: 'policies.docs.bgpCommunities.desc',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '680 KB',
    languages: ['en'],
  },
  {
    id: 10,
    titleKey: 'policies.docs.ipAllocation.title',
    descKey: 'policies.docs.ipAllocation.desc',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '540 KB',
    languages: ['en', 'ar'],
  },
];

// Category configuration
const categoryConfig: Record<DocumentCategory, { icon: React.ElementType; color: string; labelKey: string }> = {
  'peering': { icon: Scale, color: 'bg-primary/10 text-primary border-primary/20', labelKey: 'policies.category.peering' },
  'acceptable-use': { icon: Shield, color: 'bg-emerald-100 text-emerald-700 border-emerald-200', labelKey: 'policies.category.acceptableUse' },
  'technical': { icon: Server, color: 'bg-blue-100 text-blue-700 border-blue-200', labelKey: 'policies.category.technical' },
  'operational': { icon: ClipboardList, color: 'bg-amber-100 text-amber-700 border-amber-200', labelKey: 'policies.category.operational' },
  'forms': { icon: FileCheck, color: 'bg-purple-100 text-purple-700 border-purple-200', labelKey: 'policies.category.forms' },
};

// Category filter options
const categoryFilters: { value: DocumentCategory | 'all'; labelKey: string }[] = [
  { value: 'all', labelKey: 'policies.filter.all' },
  { value: 'peering', labelKey: 'policies.category.peering' },
  { value: 'acceptable-use', labelKey: 'policies.category.acceptableUse' },
  { value: 'technical', labelKey: 'policies.category.technical' },
  { value: 'operational', labelKey: 'policies.category.operational' },
  { value: 'forms', labelKey: 'policies.category.forms' },
];

// FAQ items
const faqItems = [
  { questionKey: 'policies.faq.q1', answerKey: 'policies.faq.a1' },
  { questionKey: 'policies.faq.q2', answerKey: 'policies.faq.a2' },
  { questionKey: 'policies.faq.q3', answerKey: 'policies.faq.a3' },
  { questionKey: 'policies.faq.q4', answerKey: 'policies.faq.a4' },
];

export const PoliciesPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory | 'all'>('all');

  // Filtered documents
  const filteredDocuments = useMemo(() => {
    return documentsData.filter((doc) => {
      const title = t(doc.titleKey).toLowerCase();
      const desc = t(doc.descKey).toLowerCase();
      const matchesSearch = searchQuery === '' || 
        title.includes(searchQuery.toLowerCase()) ||
        desc.includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, t]);

  // Key documents
  const keyDocuments = documentsData.filter(doc => doc.isKey);

  return (
    <article>
      {/* Page Header */}
      <PageHeader
        title={t('policies.title')}
        subtitle={t('policies.subtitle')}
        breadcrumbs={[
          { label: t('policies.breadcrumb.policies') }
        ]}
      />

      {/* Key Policies Highlight */}
      <section className="py-12 lg:py-16 bg-muted/30" aria-labelledby="key-policies-title">
        <div className="section-container">
          <header className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
              <Shield className="w-4 h-4" aria-hidden="true" />
              {t('policies.key.badge')}
            </div>
            <h2 id="key-policies-title" className="text-2xl lg:text-3xl font-bold text-foreground mb-3 animate-fade-up stagger-1">
              {t('policies.key.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-up stagger-2">
              {t('policies.key.subtitle')}
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {keyDocuments.map((doc, index) => {
              const config = categoryConfig[doc.category];
              const CategoryIcon = config.icon;
              
              return (
                <article
                  key={doc.id}
                  className={cn(
                    "group relative rounded-2xl bg-card border-2 border-primary/20 p-6 transition-all duration-500",
                    "hover:border-primary/40 hover:shadow-xl hover:-translate-y-2",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Key Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                      {t('policies.key.essential')}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mt-4 mb-5 transition-transform duration-500 group-hover:scale-110">
                    <CategoryIcon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(doc.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {t(doc.descKey)}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-5 text-xs text-muted-foreground">
                    <span className="px-2 py-1 rounded bg-muted">{doc.fileType}</span>
                    <span>{doc.fileSize}</span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" aria-hidden="true" />
                      {doc.languages.map(l => l.toUpperCase()).join(' / ')}
                    </span>
                  </div>

                  {/* Download Button */}
                  <Button
                    variant="default"
                    size="sm"
                    className={cn("w-full gap-2", isRTL && "flex-row-reverse")}
                    aria-label={`${t('policies.download')} ${t(doc.titleKey)} (${doc.fileType})`}
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    {t('policies.download')}
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b border-border" aria-labelledby="filter-heading">
        <div className="section-container">
          <h2 id="filter-heading" className="sr-only">{t('policies.filter.heading')}</h2>
          
          <div className={cn(
            "flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between",
            isRTL && "lg:flex-row-reverse"
          )}>
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="document-search" className="sr-only">
                {t('policies.filter.searchLabel')}
              </label>
              <Search className={cn(
                "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                isRTL ? "right-3" : "left-3"
              )} aria-hidden="true" />
              <Input
                id="document-search"
                type="search"
                placeholder={t('policies.filter.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "h-12 bg-muted/50 border-border focus:border-primary",
                  isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                )}
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label={t('policies.filter.categoryLabel')}>
              <Filter className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
              {categoryFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedCategory(filter.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
                    selectedCategory === filter.value
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                  aria-pressed={selectedCategory === filter.value}
                >
                  {t(filter.labelKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Library */}
      <section className="py-12 lg:py-16" aria-labelledby="library-title">
        <div className="section-container">
          <header className="mb-8">
            <h2 id="library-title" className="text-2xl lg:text-3xl font-bold text-foreground mb-2 animate-fade-up">
              {t('policies.library.title')}
            </h2>
            <p className="text-sm text-muted-foreground animate-fade-up stagger-1">
              {t('policies.library.showing')} <strong>{filteredDocuments.length}</strong> {t('policies.library.of')} <strong>{documentsData.length}</strong> {t('policies.library.documents')}
            </p>
          </header>

          {/* Documents Grid */}
          <ul className="grid md:grid-cols-2 gap-6" role="list">
            {filteredDocuments.map((doc, index) => {
              const config = categoryConfig[doc.category];
              const CategoryIcon = config.icon;
              
              return (
                <li
                  key={doc.id}
                  className={cn(
                    "group rounded-2xl bg-card border border-border p-6 transition-all duration-300",
                    "hover:border-primary/30 hover:shadow-lg",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <article className={cn("flex gap-5", isRTL && "flex-row-reverse")}>
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      config.color.split(' ')[0]
                    )}>
                      <CategoryIcon className={cn("h-6 w-6", config.color.split(' ')[1])} aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className={cn("flex-1 min-w-0", isRTL && "text-right")}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {t(doc.titleKey)}
                        </h3>
                        <span className={cn(
                          "shrink-0 px-2 py-0.5 rounded text-xs font-medium border",
                          config.color
                        )}>
                          {t(config.labelKey)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {t(doc.descKey)}
                      </p>

                      {/* Meta & Download */}
                      <div className={cn(
                        "flex items-center justify-between gap-4",
                        isRTL && "flex-row-reverse"
                      )}>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="px-2 py-1 rounded bg-muted">{doc.fileType}</span>
                          <span>{doc.fileSize}</span>
                          <span className="flex items-center gap-1">
                            <Globe className="w-3 h-3" aria-hidden="true" />
                            {doc.languages.map(l => l.toUpperCase()).join(' / ')}
                          </span>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn("gap-1.5 text-primary hover:text-primary", isRTL && "flex-row-reverse")}
                          aria-label={`${t('policies.download')} ${t(doc.titleKey)} (${doc.fileType}, ${doc.languages.map(l => l.toUpperCase()).join('/')})`}
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                          {t('policies.download')}
                        </Button>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* Empty state */}
          {filteredDocuments.length === 0 && (
            <div className="py-12 text-center">
              <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" aria-hidden="true" />
              <p className="text-muted-foreground">{t('policies.library.noResults')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Operational & Compliance Notes */}
      <section className="py-12 lg:py-16 bg-muted/50" aria-labelledby="compliance-title">
        <div className="section-container">
          <div className={cn(
            "grid lg:grid-cols-2 gap-12 items-center",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Content */}
            <div className={cn(isRTL && "lg:col-start-2")}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                {t('policies.compliance.badge')}
              </div>
              <h2 id="compliance-title" className="text-2xl lg:text-3xl font-bold text-foreground mb-6 animate-fade-up stagger-1">
                {t('policies.compliance.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed animate-fade-up stagger-2">
                <p>{t('policies.compliance.p1')}</p>
                <p>{t('policies.compliance.p2')}</p>
                <p>{t('policies.compliance.p3')}</p>
              </div>
            </div>

            {/* Info Card */}
            <div className={cn(isRTL && "lg:col-start-1")}>
              <div className="rounded-2xl bg-card border border-border p-6 lg:p-8 animate-fade-up stagger-3">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                  {t('policies.compliance.summary.title')}
                </h3>
                <ul className="space-y-3">
                  {[
                    'policies.compliance.summary.item1',
                    'policies.compliance.summary.item2',
                    'policies.compliance.summary.item3',
                    'policies.compliance.summary.item4',
                  ].map((item, index) => (
                    <li 
                      key={index} 
                      className={cn(
                        "flex items-start gap-3 text-sm",
                        isRTL && "flex-row-reverse text-right"
                      )}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                      <span className="text-muted-foreground">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16" aria-labelledby="faq-title">
        <div className="section-container max-w-3xl">
          <header className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4 animate-fade-up">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              {t('policies.faq.badge')}
            </div>
            <h2 id="faq-title" className="text-2xl lg:text-3xl font-bold text-foreground mb-3 animate-fade-up stagger-1">
              {t('policies.faq.title')}
            </h2>
            <p className="text-muted-foreground animate-fade-up stagger-2">
              {t('policies.faq.subtitle')}
            </p>
          </header>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-up stagger-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className={cn(
                  "text-left font-semibold hover:no-underline py-5",
                  isRTL && "text-right flex-row-reverse"
                )}>
                  {t(item.questionKey)}
                </AccordionTrigger>
                <AccordionContent className={cn(
                  "text-muted-foreground pb-5 leading-relaxed",
                  isRTL && "text-right"
                )}>
                  {t(item.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary" aria-labelledby="cta-title">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-bounce-subtle" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-bounce-subtle" style={{ animationDelay: '1s' }} />
            </div>

            <h2 id="cta-title" className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-up">
              {t('policies.cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up stagger-1">
              {t('policies.cta.subtitle')}
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  {t('policies.cta.contact')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/connect">
                  {t('policies.cta.connect')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};