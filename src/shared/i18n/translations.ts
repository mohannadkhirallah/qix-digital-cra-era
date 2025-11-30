export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ar: 'الرئيسية',
  },
  'nav.about': {
    en: 'About QIX',
    ar: 'عن QIX',
  },
  'nav.whyPeer': {
    en: 'Why Peer With QIX',
    ar: 'لماذا التبادل مع QIX',
  },
  'nav.participants': {
    en: 'Participants & Partners',
    ar: 'المشاركون والشركاء',
  },
  'nav.connect': {
    en: 'How to Connect',
    ar: 'كيفية الاتصال',
  },
  'nav.policies': {
    en: 'Policies & Governance',
    ar: 'السياسات والحوكمة',
  },
  'nav.resources': {
    en: 'Resources',
    ar: 'الموارد',
  },
  'nav.contact': {
    en: 'Contact & NOC',
    ar: 'اتصل بنا',
  },

  // Header
  'header.skipToContent': {
    en: 'Skip to main content',
    ar: 'انتقل إلى المحتوى الرئيسي',
  },
  'header.languageSwitch': {
    en: 'العربية',
    ar: 'English',
  },
  'header.stateOfQatar': {
    en: 'State of Qatar',
    ar: 'دولة قطر',
  },

  // Footer
  'footer.copyright': {
    en: '© 2024 Qatar Internet Exchange. All rights reserved.',
    ar: '© 2024 نقطة تبادل الإنترنت القطرية. جميع الحقوق محفوظة.',
  },
  'footer.regulatedBy': {
    en: 'Regulated by Communications Regulatory Authority',
    ar: 'تحت إشراف هيئة تنظيم الاتصالات',
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية',
  },
  'footer.terms': {
    en: 'Terms of Use',
    ar: 'شروط الاستخدام',
  },
  'footer.accessibility': {
    en: 'Accessibility',
    ar: 'إمكانية الوصول',
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    ar: 'روابط سريعة',
  },
  'footer.connect': {
    en: 'Connect With Us',
    ar: 'تواصل معنا',
  },
  'footer.contact': {
    en: 'Contact Information',
    ar: 'معلومات الاتصال',
  },

  // Home Page
  'home.hero.title': {
    en: 'Qatar Internet Exchange',
    ar: 'نقطة تبادل الإنترنت القطرية',
  },
  'home.hero.subtitle': {
    en: 'Powering Qatar\'s Digital Infrastructure',
    ar: 'تمكين البنية التحتية الرقمية لقطر',
  },
  'home.hero.description': {
    en: 'Connecting networks, enabling faster and more resilient internet for Qatar and the region.',
    ar: 'ربط الشبكات، وتمكين إنترنت أسرع وأكثر مرونة لقطر والمنطقة.',
  },
  'home.hero.cta.primary': {
    en: 'Become a Participant',
    ar: 'انضم كمشارك',
  },
  'home.hero.cta.secondary': {
    en: 'Learn More',
    ar: 'اعرف المزيد',
  },

  // Common
  'common.learnMore': {
    en: 'Learn More',
    ar: 'اعرف المزيد',
  },
  'common.readMore': {
    en: 'Read More',
    ar: 'قراءة المزيد',
  },
  'common.viewAll': {
    en: 'View All',
    ar: 'عرض الكل',
  },
  'common.download': {
    en: 'Download',
    ar: 'تحميل',
  },
  'common.submit': {
    en: 'Submit',
    ar: 'إرسال',
  },
  'common.cancel': {
    en: 'Cancel',
    ar: 'إلغاء',
  },

  // Accessibility
  'a11y.newWindow': {
    en: 'Opens in a new window',
    ar: 'يفتح في نافذة جديدة',
  },
  'a11y.externalLink': {
    en: 'External link',
    ar: 'رابط خارجي',
  },
  'a11y.menuOpen': {
    en: 'Open menu',
    ar: 'فتح القائمة',
  },
  'a11y.menuClose': {
    en: 'Close menu',
    ar: 'إغلاق القائمة',
  },
};
