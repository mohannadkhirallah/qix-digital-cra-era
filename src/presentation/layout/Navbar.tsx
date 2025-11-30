import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavItem {
  key: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.whyPeer', href: '/why-peer' },
  { key: 'nav.participants', href: '/participants' },
  { key: 'nav.connect', href: '/connect' },
  { key: 'nav.policies', href: '/policies' },
  { key: 'nav.resources', href: '/resources' },
  { key: 'nav.contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="section-container flex h-10 items-center justify-between text-sm">
          <span className="font-medium">{t('header.stateOfQatar')}</span>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-md px-3 py-1 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span>{t('header.languageSwitch')}</span>
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Qatar Internet Exchange - Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl lg:h-12 lg:w-12">
                QIX
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-foreground lg:text-xl">
                  Qatar Internet Exchange
                </div>
                <div className="text-xs text-muted-foreground lg:text-sm">
                  {language === 'ar' ? 'نقطة تبادل الإنترنت القطرية' : 'Digital Infrastructure Portal'}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "hover:bg-muted hover:text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    isActive(item.href)
                      ? "bg-accent text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? t('a11y.menuClose') : t('a11y.menuOpen')}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden border-t border-border bg-background",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="section-container py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary",
                  isActive(item.href)
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
