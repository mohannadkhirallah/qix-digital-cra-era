import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Smartphone, 
  Cloud, 
  Landmark, 
  Building, 
  FileText,
  ArrowRight,
  Network
} from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

const participantTypes = [
  { icon: Wifi, labelKey: 'home.ecosystem.isp', color: 'bg-blue-500' },
  { icon: Smartphone, labelKey: 'home.ecosystem.mobile', color: 'bg-purple-500' },
  { icon: Cloud, labelKey: 'home.ecosystem.cdn', color: 'bg-cyan-500' },
  { icon: Landmark, labelKey: 'home.ecosystem.government', color: 'bg-amber-500' },
  { icon: Building, labelKey: 'home.ecosystem.enterprise', color: 'bg-emerald-500' },
  { icon: FileText, labelKey: 'home.ecosystem.content', color: 'bg-rose-500' },
];

export const EcosystemSection: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="ecosystem-title"
    >
      <div className="section-container">
        <div className={cn(
          "grid lg:grid-cols-2 gap-16 items-center",
          isRTL && "lg:grid-flow-dense"
        )}>
          {/* Content */}
          <div className={cn(isRTL && "lg:col-start-2")}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Network className="w-4 h-4" />
              {language === 'ar' ? 'النظام البيئي' : 'The Ecosystem'}
            </div>
            <h2 
              id="ecosystem-title" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up stagger-1"
            >
              {t('home.ecosystem.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up stagger-2">
              {t('home.ecosystem.description')}
            </p>

            {/* Participant Types */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {participantTypes.map((type, index) => (
                <div
                  key={type.labelKey}
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 transition-all duration-300",
                    "hover:border-primary/30 hover:bg-card hover:shadow-lg",
                    "animate-fade-up"
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:scale-110",
                    type.color
                  )}>
                    <type.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {t(type.labelKey)}
                  </span>
                </div>
              ))}
            </div>

            <Button asChild variant="default" size="lg" className="animate-fade-up stagger-6">
              <Link to="/participants" className="group">
                {t('home.hero.cta.participants')}
                <ArrowRight className={cn(
                  "h-5 w-5 transition-transform group-hover:translate-x-1",
                  isRTL && "rotate-180 group-hover:-translate-x-1"
                )} />
              </Link>
            </Button>
          </div>

          {/* Visual - Network Map */}
          <div className={cn(
            "relative hidden lg:block",
            isRTL && "lg:col-start-1"
          )}>
            <div className="relative aspect-square max-w-md mx-auto animate-fade-up stagger-2">
              {/* Central map visualization */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border overflow-hidden">
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%" className="text-primary">
                    <defs>
                      <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#map-grid)" />
                  </svg>
                </div>

                {/* Floating participant nodes */}
                {participantTypes.map((type, i) => {
                  const positions = [
                    { top: '15%', left: '20%' },
                    { top: '25%', left: '70%' },
                    { top: '45%', left: '15%' },
                    { top: '55%', left: '80%' },
                    { top: '75%', left: '25%' },
                    { top: '70%', left: '65%' },
                  ];
                  return (
                    <div
                      key={type.labelKey}
                      className={cn(
                        "absolute flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-125 animate-bounce-subtle",
                        type.color
                      )}
                      style={{
                        ...positions[i],
                        animationDelay: `${i * 0.3}s`,
                      }}
                    >
                      <type.icon className="h-6 w-6" />
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: 'currentColor' }} />
                    </div>
                  );
                })}

                {/* Central QIX hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow-lg">
                    <span className="text-2xl font-bold text-white">QIX</span>
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {participantTypes.map((_, i) => {
                    const positions = [
                      { x: 20, y: 15 },
                      { x: 70, y: 25 },
                      { x: 15, y: 45 },
                      { x: 80, y: 55 },
                      { x: 25, y: 75 },
                      { x: 65, y: 70 },
                    ];
                    return (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${positions[i].x}%`}
                        y2={`${positions[i].y}%`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
