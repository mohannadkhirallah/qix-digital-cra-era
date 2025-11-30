import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const quickLinks = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.whyPeer', href: '/why-peer' },
  { key: 'nav.participants', href: '/participants' },
  { key: 'nav.connect', href: '/connect' },
];

const resourceLinks = [
  { key: 'nav.policies', href: '/policies' },
  { key: 'nav.resources', href: '/resources' },
  { key: 'nav.contact', href: '/contact' },
];

const legalLinks = [
  { key: 'footer.privacy', href: '/privacy' },
  { key: 'footer.terms', href: '/terms' },
  { key: 'footer.accessibility', href: '/accessibility' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

export const Footer: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* Main footer content */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary font-bold text-xl">
                QIX
              </div>
              <div>
                <div className="text-lg font-bold">Qatar Internet Exchange</div>
                <div className="text-sm text-white/70">
                  {language === 'ar' ? 'نقطة قطر لتبادل الإنترنت' : 'National IXP of Qatar'}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {t('footer.regulatedBy')}
            </p>
            {/* Social links */}
            <nav aria-label={isRTL ? 'روابط التواصل الاجتماعي' : 'Social media links'}>
              <ul className="flex gap-3 pt-2" role="list">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors",
                        "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
                      )}
                      aria-label={`${social.name} (${t('a11y.newWindow')})`}
                    >
                      <social.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">{t('footer.quickLinks')}</h2>
            <nav aria-label={isRTL ? 'روابط سريعة' : 'Quick links'}>
              <ul className="space-y-2" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={cn(
                        "text-sm text-white/80 transition-colors",
                        "hover:text-white hover:underline",
                        "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={cn(
                        "text-sm text-white/80 transition-colors",
                        "hover:text-white hover:underline",
                        "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">{t('footer.contact')}</h2>
            <address className="not-italic">
              <ul className="space-y-4" role="list">
                <li className={cn("flex items-start gap-3", isRTL && "flex-row-reverse text-right")}>
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <span className="text-sm text-white/80">
                    {language === 'ar' 
                      ? 'الدوحة، قطر' 
                      : 'Doha, Qatar'}
                  </span>
                </li>
                <li className={cn("flex items-start gap-3", isRTL && "flex-row-reverse text-right")}>
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div>
                    <a 
                      href="tel:+97444069999" 
                      className={cn(
                        "text-sm text-white/80 hover:text-white hover:underline",
                        "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                      )}
                    >
                      +974 4406 9999
                    </a>
                  </div>
                </li>
                <li className={cn("flex items-start gap-3", isRTL && "flex-row-reverse text-right")}>
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <div className="space-y-1">
                    <div>
                      <span className="text-xs text-white/60 block">{t('footer.generalEmail')}</span>
                      <a 
                        href="mailto:info@qix.qa" 
                        className={cn(
                          "text-sm text-white/80 hover:text-white hover:underline",
                          "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                        )}
                      >
                        info@qix.qa
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">{t('footer.technicalEmail')}</span>
                      <a 
                        href="mailto:noc@qix.qa" 
                        className={cn(
                          "text-sm text-white/80 hover:text-white hover:underline",
                          "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                        )}
                      >
                        noc@qix.qa
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </address>
          </div>

          {/* Connect CTA */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">{t('footer.connect')}</h2>
            <p className="mb-4 text-sm text-white/80 leading-relaxed">
              {language === 'ar'
                ? 'انضم إلى شبكة QIX وساهم في تعزيز البنية التحتية الرقمية لقطر.'
                : 'Join the QIX network and help strengthen Qatar\'s digital infrastructure.'}
            </p>
            <Link
              to="/connect"
              className={cn(
                "inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-all",
                "hover:bg-secondary/90 hover:shadow-lg",
                "focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary"
              )}
            >
              {t('home.hero.cta.connect')}
            </Link>
            
            {/* CRA Reference */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="https://www.cra.gov.qa"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-xs text-white/60 transition-colors",
                  "hover:text-white/80",
                  "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                )}
              >
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                <span>Communications Regulatory Authority</span>
                <span className="sr-only">({t('a11y.newWindow')})</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-white/70">
            {t('footer.copyright')}
          </p>
          <nav aria-label={isRTL ? 'روابط قانونية' : 'Legal links'}>
            <ul className={cn("flex flex-wrap justify-center gap-4 md:gap-6", isRTL && "flex-row-reverse")} role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm text-white/70 transition-colors",
                      "hover:text-white hover:underline",
                      "focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
