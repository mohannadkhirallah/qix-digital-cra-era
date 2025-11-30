import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

export const CtaSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section 
      className="bg-primary py-16 lg:py-20"
      aria-labelledby="cta-title"
    >
      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <h2 
            id="cta-title" 
            className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl"
          >
            {t('home.cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-white/80 leading-relaxed">
            {t('home.cta.subtitle')}
          </p>

          {/* CTAs */}
          <div className={cn(
            "flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
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
                <Mail className="h-5 w-5" aria-hidden="true" />
                {t('home.cta.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
