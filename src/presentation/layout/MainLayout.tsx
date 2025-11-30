import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '@/shared/i18n/LanguageContext';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { t, language, isRTL } = useLanguage();

  return (
    <div 
      className="flex min-h-screen flex-col"
      lang={language}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Skip to main content link for accessibility - Mada compliant */}
      <a
        href="#main-content"
        className="skip-to-content focus-enhanced"
        aria-label={t('header.skipToContent')}
      >
        {t('header.skipToContent')}
      </a>

      <Navbar />

      {/* Main content area with proper ARIA landmark */}
      <main 
        id="main-content" 
        className="flex-1" 
        tabIndex={-1}
        role="main"
        aria-label={t('header.skipToContent')}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};
