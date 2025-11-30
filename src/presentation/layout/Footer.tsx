import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const quickLinks = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.whyPeer', href: '/why-peer' },
  { key: 'nav.participants', href: '/participants' },
  { key: 'nav.connect', href: '/connect' },
  { key: 'nav.policies', href: '/policies' },
  { key: 'nav.resources', href: '/resources' },
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
  const { t, language } = useLanguage();

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
                  {language === 'ar' ? 'نقطة تبادل الإنترنت القطرية' : 'Digital Infrastructure Portal'}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {t('footer.regulatedBy')}
            </p>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={`${social.name} (${t('a11y.newWindow')})`}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">{t('footer.quickLinks')}</h2>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">{t('footer.contact')}</h2>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <span className="text-sm text-white/80">
                  {language === 'ar' 
                    ? 'الدوحة، قطر' 
                    : 'Doha, Qatar'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <a 
                  href="tel:+97444069999" 
                  className="text-sm text-white/80 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                >
                  +974 4406 9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <a 
                  href="mailto:noc@qix.qa" 
                  className="text-sm text-white/80 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                >
                  noc@qix.qa
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">{t('footer.connect')}</h2>
            <p className="mb-4 text-sm text-white/80">
              {language === 'ar'
                ? 'انضم إلى شبكة QIX وساهم في تعزيز البنية التحتية الرقمية لقطر.'
                : 'Join the QIX network and help strengthen Qatar\'s digital infrastructure.'}
            </p>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {t('home.hero.cta.primary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-white/70">
            {t('footer.copyright')}
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
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
