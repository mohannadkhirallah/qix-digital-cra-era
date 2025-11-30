import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Filter,
  Globe,
  Smartphone,
  Building2,
  Cloud,
  Briefcase,
  Network,
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Wifi
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { PageHeader } from '@/presentation/components/ui/PageHeader';
import { Button } from '@/presentation/components/ui/Button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Category types
type ParticipantCategory = 'isp' | 'mno' | 'government' | 'cloud' | 'enterprise' | 'other';

// Participant interface
interface Participant {
  id: number;
  name: string;
  nameAr: string;
  asn: string;
  category: ParticipantCategory;
  ipv4: boolean;
  ipv6: boolean;
  status: 'connected' | 'implementing';
  note?: string;
  noteAr?: string;
}

// Mock participants data
const participantsData: Participant[] = [
  { id: 1, name: 'Ooredoo Qatar', nameAr: 'أوريدو قطر', asn: 'AS8781', category: 'isp', ipv4: true, ipv6: true, status: 'connected', note: 'National ISP', noteAr: 'مزود خدمة إنترنت وطني' },
  { id: 2, name: 'Vodafone Qatar', nameAr: 'فودافون قطر', asn: 'AS42298', category: 'mno', ipv4: true, ipv6: true, status: 'connected', note: 'Mobile Operator', noteAr: 'مشغل هاتف محمول' },
  { id: 3, name: 'Ministry of Communications', nameAr: 'وزارة المواصلات والاتصالات', asn: 'AS197293', category: 'government', ipv4: true, ipv6: false, status: 'connected', note: 'Government Network', noteAr: 'شبكة حكومية' },
  { id: 4, name: 'Qatar Foundation', nameAr: 'مؤسسة قطر', asn: 'AS39386', category: 'enterprise', ipv4: true, ipv6: true, status: 'connected', note: 'Education & Research', noteAr: 'تعليم وبحث' },
  { id: 5, name: 'Cloudflare', nameAr: 'كلاود فلير', asn: 'AS13335', category: 'cloud', ipv4: true, ipv6: true, status: 'connected', note: 'Global CDN', noteAr: 'CDN عالمي' },
  { id: 6, name: 'Google LLC', nameAr: 'جوجل', asn: 'AS15169', category: 'cloud', ipv4: true, ipv6: true, status: 'connected', note: 'Cloud & Content', noteAr: 'سحابة ومحتوى' },
  { id: 7, name: 'Qatar National Bank', nameAr: 'بنك قطر الوطني', asn: 'AS51684', category: 'enterprise', ipv4: true, ipv6: false, status: 'connected', note: 'Financial Services', noteAr: 'خدمات مالية' },
  { id: 8, name: 'Ministry of Interior', nameAr: 'وزارة الداخلية', asn: 'AS199524', category: 'government', ipv4: true, ipv6: true, status: 'connected', note: 'Government Network', noteAr: 'شبكة حكومية' },
  { id: 9, name: 'Akamai Technologies', nameAr: 'أكاماي', asn: 'AS20940', category: 'cloud', ipv4: true, ipv6: true, status: 'connected', note: 'Global CDN', noteAr: 'CDN عالمي' },
  { id: 10, name: 'Microsoft Azure', nameAr: 'مايكروسوفت أزور', asn: 'AS8075', category: 'cloud', ipv4: true, ipv6: true, status: 'implementing', note: 'Cloud Provider', noteAr: 'مزود سحابة' },
  { id: 11, name: 'Qatar Airways', nameAr: 'الخطوط الجوية القطرية', asn: 'AS60045', category: 'enterprise', ipv4: true, ipv6: false, status: 'connected', note: 'Airline', noteAr: 'خطوط جوية' },
  { id: 12, name: 'Qatar University', nameAr: 'جامعة قطر', asn: 'AS51401', category: 'enterprise', ipv4: true, ipv6: true, status: 'connected', note: 'Education', noteAr: 'تعليم' },
  { id: 13, name: 'Qatar Petroleum', nameAr: 'قطر للبترول', asn: 'AS51702', category: 'enterprise', ipv4: true, ipv6: false, status: 'connected', note: 'Energy Sector', noteAr: 'قطاع الطاقة' },
  { id: 14, name: 'Al Jazeera Media Network', nameAr: 'شبكة الجزيرة الإعلامية', asn: 'AS39891', category: 'enterprise', ipv4: true, ipv6: true, status: 'connected', note: 'Media', noteAr: 'إعلام' },
  { id: 15, name: 'Amazon Web Services', nameAr: 'أمازون ويب سيرفيسز', asn: 'AS16509', category: 'cloud', ipv4: true, ipv6: true, status: 'implementing', note: 'Cloud Provider', noteAr: 'مزود سحابة' },
];

// Category configuration
const categoryConfig: Record<ParticipantCategory, { icon: React.ElementType; color: string; labelKey: string }> = {
  isp: { icon: Globe, color: 'bg-blue-100 text-blue-700 border-blue-200', labelKey: 'participants.category.isp' },
  mno: { icon: Smartphone, color: 'bg-purple-100 text-purple-700 border-purple-200', labelKey: 'participants.category.mno' },
  government: { icon: Building2, color: 'bg-emerald-100 text-emerald-700 border-emerald-200', labelKey: 'participants.category.government' },
  cloud: { icon: Cloud, color: 'bg-orange-100 text-orange-700 border-orange-200', labelKey: 'participants.category.cloud' },
  enterprise: { icon: Briefcase, color: 'bg-primary/10 text-primary border-primary/20', labelKey: 'participants.category.enterprise' },
  other: { icon: Network, color: 'bg-gray-100 text-gray-700 border-gray-200', labelKey: 'participants.category.other' },
};

// Category filter options
const categoryFilters: { value: ParticipantCategory | 'all'; labelKey: string }[] = [
  { value: 'all', labelKey: 'participants.filter.all' },
  { value: 'isp', labelKey: 'participants.category.isp' },
  { value: 'mno', labelKey: 'participants.category.mno' },
  { value: 'government', labelKey: 'participants.category.government' },
  { value: 'cloud', labelKey: 'participants.category.cloud' },
  { value: 'enterprise', labelKey: 'participants.category.enterprise' },
];

// Category legend items
const categoryLegend = [
  { category: 'isp' as ParticipantCategory, descKey: 'participants.legend.isp' },
  { category: 'mno' as ParticipantCategory, descKey: 'participants.legend.mno' },
  { category: 'government' as ParticipantCategory, descKey: 'participants.legend.government' },
  { category: 'cloud' as ParticipantCategory, descKey: 'participants.legend.cloud' },
  { category: 'enterprise' as ParticipantCategory, descKey: 'participants.legend.enterprise' },
];

export const ParticipantsPage: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ParticipantCategory | 'all'>('all');

  // Filtered participants
  const filteredParticipants = useMemo(() => {
    return participantsData.filter((participant) => {
      const name = language === 'ar' ? participant.nameAr : participant.name;
      const matchesSearch = searchQuery === '' || 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        participant.asn.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || participant.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, language]);

  // Stats
  const stats = useMemo(() => ({
    total: participantsData.length,
    categories: new Set(participantsData.map(p => p.category)).size,
    ipv6: participantsData.filter(p => p.ipv6).length,
  }), []);

  return (
    <article>
      {/* Page Header */}
      <PageHeader
        title={t('participants.title')}
        subtitle={t('participants.subtitle')}
        breadcrumbs={[
          { label: t('participants.breadcrumb.participants') }
        ]}
      />

      {/* Stats Strip */}
      <section className="py-8 bg-muted/30 border-b border-border" aria-label={t('participants.stats.label')}>
        <div className="section-container">
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            <div className="text-center animate-fade-up">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">{stats.total}</span>
              </div>
              <span className="text-sm text-muted-foreground">{t('participants.stats.total')}</span>
            </div>
            <div className="text-center animate-fade-up stagger-1">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Layers className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">{stats.categories}</span>
              </div>
              <span className="text-sm text-muted-foreground">{t('participants.stats.categories')}</span>
            </div>
            <div className="text-center animate-fade-up stagger-2">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Wifi className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">{stats.ipv6}</span>
              </div>
              <span className="text-sm text-muted-foreground">{t('participants.stats.ipv6')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b border-border" aria-labelledby="filter-heading">
        <div className="section-container">
          <h2 id="filter-heading" className="sr-only">{t('participants.filter.heading')}</h2>
          
          <div className={cn(
            "flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between",
            isRTL && "lg:flex-row-reverse"
          )}>
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="participant-search" className="sr-only">
                {t('participants.filter.searchLabel')}
              </label>
              <Search className={cn(
                "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                isRTL ? "right-3" : "left-3"
              )} aria-hidden="true" />
              <Input
                id="participant-search"
                type="search"
                placeholder={t('participants.filter.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "h-12 bg-muted/50 border-border focus:border-primary",
                  isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                )}
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label={t('participants.filter.categoryLabel')}>
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

      {/* Participants Directory Table */}
      <section className="py-12 lg:py-16" aria-labelledby="directory-title">
        <div className="section-container">
          <h2 id="directory-title" className="sr-only">{t('participants.directory.title')}</h2>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6 animate-fade-up">
            {t('participants.directory.showing')} <strong>{filteredParticipants.length}</strong> {t('participants.directory.of')} <strong>{participantsData.length}</strong> {t('participants.directory.participants')}
          </p>

          {/* Table Container */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm animate-fade-up stagger-1">
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">{t('participants.directory.caption')}</caption>
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th scope="col" className={cn(
                      "px-6 py-4 text-sm font-semibold text-foreground",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {t('participants.table.organization')}
                    </th>
                    <th scope="col" className={cn(
                      "px-6 py-4 text-sm font-semibold text-foreground",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {t('participants.table.asn')}
                    </th>
                    <th scope="col" className={cn(
                      "px-6 py-4 text-sm font-semibold text-foreground",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {t('participants.table.category')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-foreground text-center">
                      {t('participants.table.ipv4')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold text-foreground text-center">
                      {t('participants.table.ipv6')}
                    </th>
                    <th scope="col" className={cn(
                      "px-6 py-4 text-sm font-semibold text-foreground",
                      isRTL ? "text-right" : "text-left"
                    )}>
                      {t('participants.table.status')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParticipants.map((participant, index) => {
                    const config = categoryConfig[participant.category];
                    const CategoryIcon = config.icon;
                    
                    return (
                      <tr 
                        key={participant.id}
                        className={cn(
                          "border-b border-border last:border-b-0 transition-colors hover:bg-muted/30",
                          index % 2 === 0 ? "bg-background" : "bg-muted/10"
                        )}
                      >
                        <td className={cn("px-6 py-4", isRTL ? "text-right" : "text-left")}>
                          <div className="flex flex-col">
                            <span className="font-medium text-foreground">
                              {language === 'ar' ? participant.nameAr : participant.name}
                            </span>
                            {participant.note && (
                              <span className="text-xs text-muted-foreground mt-0.5">
                                {language === 'ar' ? participant.noteAr : participant.note}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className={cn("px-6 py-4", isRTL ? "text-right" : "text-left")}>
                          <code className="px-2 py-1 rounded bg-muted text-sm font-mono text-foreground">
                            {participant.asn}
                          </code>
                        </td>
                        <td className={cn("px-6 py-4", isRTL ? "text-right" : "text-left")}>
                          <span className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
                            config.color
                          )}>
                            <CategoryIcon className="w-3.5 h-3.5" aria-hidden="true" />
                            {t(config.labelKey)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {participant.ipv4 ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" aria-label={t('participants.table.supported')} />
                          ) : (
                            <span className="text-muted-foreground" aria-label={t('participants.table.notSupported')}>—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {participant.ipv6 ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" aria-label={t('participants.table.supported')} />
                          ) : (
                            <span className="text-muted-foreground" aria-label={t('participants.table.notSupported')}>—</span>
                          )}
                        </td>
                        <td className={cn("px-6 py-4", isRTL ? "text-right" : "text-left")}>
                          <span className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
                            participant.status === 'connected' 
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                              : "bg-amber-100 text-amber-700 border border-amber-200"
                          )}>
                            <span className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              participant.status === 'connected' ? "bg-emerald-500" : "bg-amber-500"
                            )} aria-hidden="true" />
                            {t(`participants.status.${participant.status}`)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Empty state */}
            {filteredParticipants.length === 0 && (
              <div className="py-12 text-center">
                <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" aria-hidden="true" />
                <p className="text-muted-foreground">{t('participants.directory.noResults')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category Legend */}
      <section className="py-12 lg:py-16 bg-muted/50" aria-labelledby="legend-title">
        <div className="section-container">
          <header className="text-center mb-10">
            <h2 id="legend-title" className="text-2xl lg:text-3xl font-bold text-foreground mb-3 animate-fade-up">
              {t('participants.legend.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-up stagger-1">
              {t('participants.legend.subtitle')}
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryLegend.map((item, index) => {
              const config = categoryConfig[item.category];
              const CategoryIcon = config.icon;
              
              return (
                <div
                  key={item.category}
                  className={cn(
                    "flex items-start gap-4 p-5 rounded-xl bg-card border border-border",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    config.color.replace('text-', 'bg-').split(' ')[0]
                  )}>
                    <CategoryIcon className={cn("w-5 h-5", config.color.split(' ')[1])} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t(config.labelKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                  </div>
                </div>
              );
            })}
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
              {t('participants.cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8 animate-fade-up stagger-1">
              {t('participants.cta.subtitle')}
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="lg">
                <Link to="/connect">
                  {t('participants.cta.connect')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  {t('participants.cta.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};