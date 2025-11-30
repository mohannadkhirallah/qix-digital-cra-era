import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="relative overflow-hidden bg-primary py-16 lg:py-24"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect fill="url(#hero-grid)" width="100%" height="100%" />
        </svg>
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className={cn(
          "absolute top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent",
          isRTL ? "right-0" : "left-0"
        )} />
        <div className={cn(
          "absolute top-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent",
          isRTL ? "left-0" : "right-0"
        )} />
        <div className={cn(
          "absolute top-3/4 h-px w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent",
          isRTL ? "right-1/4" : "left-1/4"
        )} />
      </div>

      <div className="section-container relative">
        <div className={cn(
          "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
          isRTL && "lg:grid-flow-dense"
        )}>
          {/* Content Column */}
          <div className={cn("text-center lg:text-start", isRTL && "lg:col-start-2 lg:text-end")}>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm animate-fade-in">
              <Network className="h-4 w-4" aria-hidden="true" />
              <span>{t('home.hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 
              id="hero-title"
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {t('home.hero.title')}
              <span className="block text-secondary">({t('home.hero.titleAbbr')})</span>
            </h1>

            {/* Description */}
            <p 
              className="mb-8 max-w-xl text-lg leading-relaxed text-white/85 animate-slide-up mx-auto lg:mx-0"
              style={{ animationDelay: '0.2s' }}
            >
              {t('home.hero.description')}
            </p>

            {/* CTAs */}
            <div 
              className={cn(
                "flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start animate-slide-up",
                isRTL && "lg:justify-end sm:flex-row-reverse"
              )}
              style={{ animationDelay: '0.3s' }}
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/connect">
                  {t('home.hero.cta.connect')}
                  <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/participants">
                  {t('home.hero.cta.participants')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Illustration Column */}
          <div 
            className={cn(
              "relative hidden lg:flex lg:items-center lg:justify-center",
              isRTL && "lg:col-start-1"
            )}
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md">
              {/* Network Illustration */}
              <svg 
                viewBox="0 0 400 400" 
                className="h-auto w-full text-white"
                role="img"
                aria-label={t('a11y.networkIllustration')}
              >
                {/* Central Hub */}
                <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                <circle cx="200" cy="200" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
                <circle cx="200" cy="200" r="12" fill="currentColor" opacity="0.9" />
                
                {/* Outer Ring */}
                <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" opacity="0.2" />
                
                {/* Node Points */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 200 + 120 * Math.cos(rad);
                  const y = 200 + 120 * Math.sin(rad);
                  return (
                    <g key={angle}>
                      <line 
                        x1="200" y1="200" 
                        x2={x} y2={y} 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        opacity="0.4"
                      />
                      <circle 
                        cx={x} cy={y} r="8" 
                        fill="currentColor" 
                        opacity={0.5 + (i % 3) * 0.2}
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </g>
                  );
                })}
                
                {/* QIX Label */}
                <text 
                  x="200" y="205" 
                  textAnchor="middle" 
                  fill="currentColor" 
                  fontSize="14" 
                  fontWeight="bold"
                  opacity="0.9"
                >
                  QIX
                </text>
                
                {/* Secondary nodes on outer ring */}
                {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 200 + 160 * Math.cos(rad);
                  const y = 200 + 160 * Math.sin(rad);
                  return (
                    <circle 
                      key={angle}
                      cx={x} cy={y} r="4" 
                      fill="currentColor" 
                      opacity="0.25"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" 
        aria-hidden="true"
      />
    </section>
  );
};
