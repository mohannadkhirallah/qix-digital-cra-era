import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

export const CtaSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-bounce-subtle" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-bounce-subtle stagger-3" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce-subtle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            {isRTL ? 'ابدأ رحلتك معنا' : 'Start Your Journey'}
          </div>

          {/* Title */}
          <h2 
            id="cta-title" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-up stagger-1"
          >
            {t('home.cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-2">
            {t('home.cta.subtitle')}
          </p>

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3",
            isRTL && "sm:flex-row-reverse"
          )}>
            <Button asChild variant="hero" size="xl" className="group shadow-gold-glow">
              <Link to="/connect">
                {t('home.cta.connect')}
                <ArrowRight className={cn(
                  "h-5 w-5 transition-transform group-hover:translate-x-1",
                  isRTL && "rotate-180 group-hover:-translate-x-1"
                )} aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="group">
              <Link to="/contact">
                <Mail className="h-5 w-5" aria-hidden="true" />
                {t('home.cta.contact')}
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-up stagger-4">
            <p className="text-sm text-white/60 mb-4">
              {isRTL ? 'تحت إشراف هيئة تنظيم الاتصالات - دولة قطر' : 'Regulated by the Communications Regulatory Authority - State of Qatar'}
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold">CRA</span>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold">QIX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
