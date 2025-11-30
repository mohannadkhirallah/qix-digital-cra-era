import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
}) => {
  const { isRTL } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="header-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect fill="url(#header-grid)" width="100%" height="100%" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/20 to-transparent rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" aria-hidden="true" />

      <div className="section-container relative">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
            <ol className={cn(
              "flex items-center gap-2 text-sm text-white/70",
              isRTL && "flex-row-reverse"
            )}>
              <li>
                <Link 
                  to="/" 
                  className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                >
                  <Home className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                  <ChevronRight className={cn("h-4 w-4 text-white/40", isRTL && "rotate-180")} aria-hidden="true" />
                  {crumb.href ? (
                    <Link 
                      to={crumb.href}
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-up stagger-1">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl leading-relaxed animate-fade-up stagger-2">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L80 52.5C160 45 320 30 480 25C640 20 800 25 960 30C1120 35 1280 40 1360 42.5L1440 45V60H1360C1280 60 1120 60 960 60C800 60 640 60 480 60C320 60 160 60 80 60H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
