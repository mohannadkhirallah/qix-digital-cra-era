import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

export const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient pt-32 lg:pt-36"
      aria-labelledby="hero-title"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-bounce-subtle" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-bounce-subtle stagger-2" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
          isRTL && "lg:grid-flow-dense"
        )}>
          {/* Content */}
          <div className={cn(
            "text-center lg:text-start",
            isRTL && "lg:col-start-2 lg:text-end"
          )}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              {t('home.hero.badge')}
            </div>

            {/* Title */}
            <h1 
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-up stagger-1"
            >
              {t('home.hero.title')}
              <span className="block mt-2 text-secondary">{t('home.hero.titleAbbr')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up stagger-2">
              {t('home.hero.description')}
            </p>

            {/* CTAs */}
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3",
              isRTL && "lg:justify-end sm:flex-row-reverse"
            )}>
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/connect">
                  {t('home.hero.cta.connect')}
                  <ArrowRight className={cn(
                    "h-5 w-5 transition-transform group-hover:translate-x-1",
                    isRTL && "rotate-180 group-hover:-translate-x-1"
                  )} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/participants">
                  {t('home.hero.cta.participants')}
                </Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className={cn(
              "grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-up stagger-4",
              isRTL && "text-end"
            )}>
              {[
                { value: '15+', label: isRTL ? 'مشارك' : 'Participants' },
                { value: '<1ms', label: isRTL ? 'زمن الاستجابة' : 'Latency' },
                { value: '99.9%', label: isRTL ? 'وقت التشغيل' : 'Uptime' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-start">
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={cn(
            "relative hidden lg:block",
            isRTL && "lg:col-start-1"
          )}>
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-fade-up stagger-3">
              {/* Main network visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer rotating ring */}
                <div className="absolute w-full h-full rounded-full border border-white/10 animate-rotate-slow" />
                <div className="absolute w-[85%] h-[85%] rounded-full border border-white/10 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                
                {/* Node points */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 42 * Math.cos(rad);
                  const y = 50 + 42 * Math.sin(rad);
                  return (
                    <div
                      key={angle}
                      className="absolute w-4 h-4 rounded-full bg-white/80 shadow-lg animate-bounce-subtle"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
                    </div>
                  );
                })}

                {/* Central hub */}
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-glow">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-gold-glow">
                    <span className="text-2xl font-bold text-secondary-foreground">QIX</span>
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + 42 * Math.cos(rad);
                    const y = 50 + 42 * Math.sin(rad);
                    return (
                      <line
                        key={angle}
                        x1="50" y1="50"
                        x2={x} y2={y}
                        stroke="white"
                        strokeWidth="0.3"
                        strokeOpacity="0.3"
                        strokeDasharray="2 2"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Feature badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2 text-white text-sm animate-bounce-subtle">
                <Zap className="w-4 h-4 text-secondary" />
                <span>{isRTL ? 'سرعة فائقة' : 'Ultra Fast'}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2 text-white text-sm animate-bounce-subtle stagger-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>{isRTL ? 'آمن' : 'Secure'}</span>
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2 text-white text-sm animate-bounce-subtle stagger-3">
                <Globe className="w-4 h-4 text-secondary" />
                <span>{isRTL ? 'إقليمي' : 'Regional'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
