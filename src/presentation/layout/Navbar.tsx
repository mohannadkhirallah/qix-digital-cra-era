import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Languages } from 'lucide-react';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { Button } from '@/presentation/components/ui/Button';
import { cn } from '@/lib/utils';
interface NavItem {
  key: string;
  href: string;
}
const navItems: NavItem[] = [{
  key: 'nav.home',
  href: '/'
}, {
  key: 'nav.about',
  href: '/about'
}, {
  key: 'nav.whyPeer',
  href: '/why-peer'
}, {
  key: 'nav.participants',
  href: '/participants'
}, {
  key: 'nav.connect',
  href: '/connect'
}, {
  key: 'nav.policies',
  href: '/policies'
}];
export const Navbar: React.FC = () => {
  const {
    t,
    language,
    setLanguage,
    isRTL
  } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out", scrolled ? "bg-white/90 dark:bg-background/90 backdrop-blur-2xl shadow-xl" : "bg-transparent")}>
      <nav className="section-container" aria-label="Main navigation">
        <div className={cn("flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20")}>
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl" aria-label="Qatar Internet Exchange - Home">
            <div className={cn("relative flex items-center justify-center rounded-xl font-bold text-lg overflow-hidden transition-all duration-500", "bg-gradient-to-br from-primary via-primary to-primary-dark text-white", scrolled ? "h-10 w-10" : "h-12 w-12", "shadow-lg group-hover:shadow-glow group-hover:scale-105")}>
              <span className="relative z-10">QIX</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className={cn("hidden sm:block transition-all duration-500", scrolled ? "opacity-100" : "opacity-100")}>
              <div className={cn("font-bold transition-all duration-500", scrolled ? "text-base text-foreground" : "text-lg text-white")}>
                Qatar Internet Exchange
              </div>
              <div className={cn("text-xs transition-all duration-500", scrolled ? "text-muted-foreground" : "text-white/70")}>
                {language === 'ar' ? 'نقطة قطر لتبادل الإنترنت' : 'National IXP of Qatar'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <Link key={item.href} to={item.href} className={cn("relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group", "focus:outline-none focus:ring-2 focus:ring-primary/50", isActive(item.href) ? scrolled ? "text-primary bg-primary/10" : "text-white bg-white/20" : scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-white/80 hover:text-white hover:bg-white/10")} aria-current={isActive(item.href) ? 'page' : undefined}>rPolicies & Governance{t(item.key)}
                {/* Active indicator */}
                <span className={cn("absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300", isActive(item.href) ? "w-4 bg-secondary" : "w-0 bg-transparent group-hover:w-2 group-hover:bg-secondary/50")} />
              </Link>)}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button onClick={toggleLanguage} className={cn("relative flex items-center gap-2 h-10 px-4 rounded-xl font-semibold text-sm transition-all duration-500 overflow-hidden group", "focus:outline-none focus:ring-2 focus:ring-primary/50", scrolled ? "bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-glow" : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30")} aria-label={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}>
              <Languages className="h-4 w-4" />
              <span className="relative">
                {language === 'en' ? 'عربي' : 'EN'}
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>

            {/* Contact CTA - Desktop */}
            <Button asChild variant={scrolled ? "default" : "hero"} size="sm" className="hidden lg:flex">
              <Link to="/contact">
                {t('nav.contact')}
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button type="button" className={cn("lg:hidden flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-300", "focus:outline-none focus:ring-2 focus:ring-primary/50", scrolled ? "bg-muted text-foreground hover:bg-muted/80" : "bg-white/20 text-white hover:bg-white/30")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" aria-label={mobileMenuOpen ? t('a11y.menuClose') : t('a11y.menuOpen')}>
              <div className="relative w-5 h-5">
                <span className={cn("absolute left-0 block h-0.5 w-5 bg-current rounded transition-all duration-300", mobileMenuOpen ? "top-2.5 rotate-45" : "top-1")} />
                <span className={cn("absolute left-0 top-2.5 block h-0.5 bg-current rounded transition-all duration-300", mobileMenuOpen ? "w-0 opacity-0" : "w-3 opacity-100")} />
                <span className={cn("absolute left-0 block h-0.5 w-5 bg-current rounded transition-all duration-300", mobileMenuOpen ? "top-2.5 -rotate-45" : "top-4")} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      <div id="mobile-menu" className={cn("lg:hidden fixed inset-0 z-50 transition-all duration-500", mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none")}>
        {/* Backdrop */}
        <div className={cn("absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500", mobileMenuOpen ? "opacity-100" : "opacity-0")} onClick={() => setMobileMenuOpen(false)} />
        
        {/* Panel */}
        <div className={cn("absolute top-0 right-0 h-full w-full max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full", isRTL && "right-auto left-0", isRTL && (mobileMenuOpen ? "translate-x-0" : "-translate-x-full"))}>
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
                QIX
              </div>
              <span className="font-bold text-foreground">Menu</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label={t('a11y.menuClose')}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Panel Content */}
          <div className="p-6 space-y-2 overflow-y-auto" style={{
          maxHeight: 'calc(100vh - 180px)'
        }}>
            {navItems.map((item, index) => <Link key={item.href} to={item.href} className={cn("flex items-center justify-between p-4 rounded-xl text-base font-medium transition-all duration-300", "focus:outline-none focus:ring-2 focus:ring-primary/50", isActive(item.href) ? "bg-primary text-white" : "text-foreground hover:bg-muted")} onClick={() => setMobileMenuOpen(false)} aria-current={isActive(item.href) ? 'page' : undefined} style={{
            transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
            transform: mobileMenuOpen ? 'translateX(0)' : `translateX(${isRTL ? '-' : ''}20px)`,
            opacity: mobileMenuOpen ? 1 : 0
          }}>
                <span>{t(item.key)}</span>
                <ArrowRight className={cn("h-4 w-4", isRTL && "rotate-180")} />
              </Link>)}
          </div>

          {/* Panel Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background">
            <Button asChild variant="default" size="lg" className="w-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                {t('nav.contact')}
                <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>;
};