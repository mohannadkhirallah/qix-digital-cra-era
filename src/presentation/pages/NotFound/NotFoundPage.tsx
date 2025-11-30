import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

export const NotFoundPage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const location = useLocation();

  React.useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="section-container text-center">
        <div className="mx-auto max-w-md">
          <div className="mb-6 text-8xl font-bold text-primary opacity-30">404</div>
          <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>
          <p className="mb-8 text-muted-foreground">
            {language === 'ar'
              ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
              : 'Sorry, the page you are looking for does not exist or has been moved.'}
          </p>
          <div className={cn(
            "flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
            isRTL && "sm:flex-row-reverse"
          )}>
            <Button asChild variant="default" size="lg">
              <Link to="/">
                <Home className="h-5 w-5" aria-hidden="true" />
                {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
              <button type="button">
                <ArrowLeft className={cn("h-5 w-5", isRTL && "rotate-180")} aria-hidden="true" />
                {language === 'ar' ? 'الرجوع' : 'Go Back'}
              </button>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
