import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '@/shared/i18n/LanguageContext';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        {t('header.skipToContent')}
      </a>

      <Navbar />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
