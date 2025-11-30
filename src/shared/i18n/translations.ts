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
  'footer.generalEmail': {
    en: 'General Inquiries',
    ar: 'استفسارات عامة',
  },
  'footer.technicalEmail': {
    en: 'Technical Support',
    ar: 'الدعم الفني',
  },

  // Home Page - Hero Section
  'home.hero.badge': {
    en: 'Qatar\'s National Internet Exchange Point',
    ar: 'نقطة تبادل الإنترنت الوطنية في قطر',
  },
  'home.hero.title': {
    en: 'Qatar Internet Exchange',
    ar: 'نقطة قطر لتبادل الإنترنت',
  },
  'home.hero.titleAbbr': {
    en: 'QIX',
    ar: 'QIX',
  },
  'home.hero.description': {
    en: 'The Qatar Internet Exchange (QIX) is a carrier-neutral Layer 2 switching fabric enabling local and international bandwidth exchange between Internet networks. We enhance connectivity, reduce latency, and promote digital resilience for Qatar and the region.',
    ar: 'نقطة قطر لتبادل الإنترنت (QIX) هي منصة تبديل محايدة من الطبقة الثانية تتيح تبادل النطاق الترددي المحلي والدولي بين شبكات الإنترنت. نحن نعزز الاتصال، ونقلل زمن الوصول، ونعزز المرونة الرقمية لقطر والمنطقة.',
  },
  'home.hero.cta.connect': {
    en: 'Connect to QIX',
    ar: 'الاتصال بـ QIX',
  },
  'home.hero.cta.participants': {
    en: 'View Participants',
    ar: 'عرض المشاركين',
  },

  // Home Page - Why QIX Section
  'home.why.title': {
    en: 'Why QIX Exists',
    ar: 'لماذا توجد QIX',
  },
  'home.why.subtitle': {
    en: 'Building a stronger, faster, and more resilient internet infrastructure for Qatar',
    ar: 'بناء بنية تحتية للإنترنت أقوى وأسرع وأكثر مرونة لقطر',
  },
  'home.why.latency.title': {
    en: 'Lower Latency',
    ar: 'زمن استجابة أقل',
  },
  'home.why.latency.desc': {
    en: 'Direct local peering eliminates international round-trips, delivering sub-millisecond response times for local traffic.',
    ar: 'التبادل المحلي المباشر يلغي الرحلات الدولية، ويوفر أوقات استجابة أقل من ميلي ثانية لحركة المرور المحلية.',
  },
  'home.why.local.title': {
    en: 'Local Traffic Stays Local',
    ar: 'حركة المرور المحلية تبقى محلية',
  },
  'home.why.local.desc': {
    en: 'Keep Qatar-to-Qatar internet traffic within the country, improving user experience and data sovereignty.',
    ar: 'الحفاظ على حركة الإنترنت من قطر إلى قطر داخل البلاد، مما يحسن تجربة المستخدم وسيادة البيانات.',
  },
  'home.why.cost.title': {
    en: 'Reduced Transit Costs',
    ar: 'تقليل تكاليف العبور',
  },
  'home.why.cost.desc': {
    en: 'Lower international transit expenses by exchanging traffic locally with other network participants.',
    ar: 'تقليل نفقات العبور الدولية من خلال تبادل حركة المرور محلياً مع المشاركين الآخرين في الشبكة.',
  },
  'home.why.resilience.title': {
    en: 'Increased Resilience',
    ar: 'زيادة المرونة',
  },
  'home.why.resilience.desc': {
    en: 'Multiple interconnection paths ensure network redundancy and protection against international cable failures.',
    ar: 'مسارات الربط المتعددة تضمن احتياطي الشبكة والحماية من أعطال الكابلات الدولية.',
  },
  'home.why.sovereignty.title': {
    en: 'Digital Sovereignty',
    ar: 'السيادة الرقمية',
  },
  'home.why.sovereignty.desc': {
    en: 'Support national digital independence by establishing a robust local internet infrastructure.',
    ar: 'دعم الاستقلال الرقمي الوطني من خلال إنشاء بنية تحتية قوية للإنترنت المحلي.',
  },
  'home.why.growth.title': {
    en: 'Ecosystem Growth',
    ar: 'نمو النظام البيئي',
  },
  'home.why.growth.desc': {
    en: 'Attract global content providers and encourage local content development within Qatar.',
    ar: 'جذب مزودي المحتوى العالميين وتشجيع تطوير المحتوى المحلي داخل قطر.',
  },

  // Home Page - At a Glance Section
  'home.glance.title': {
    en: 'QIX at a Glance',
    ar: 'QIX في لمحة',
  },
  'home.glance.subtitle': {
    en: 'Key facts about Qatar\'s premier Internet Exchange Point',
    ar: 'حقائق رئيسية عن نقطة تبادل الإنترنت الرائدة في قطر',
  },
  'home.glance.participants.value': {
    en: '15+',
    ar: '+١٥',
  },
  'home.glance.participants.label': {
    en: 'Connected Participants',
    ar: 'مشارك متصل',
  },
  'home.glance.participants.desc': {
    en: 'ISPs, mobile operators, enterprises, and content providers exchanging traffic',
    ar: 'مزودي خدمة الإنترنت ومشغلي الهاتف المحمول والشركات ومزودي المحتوى يتبادلون حركة المرور',
  },
  'home.glance.protocol.value': {
    en: 'IPv4 & IPv6',
    ar: 'IPv4 و IPv6',
  },
  'home.glance.protocol.label': {
    en: 'Dual-Stack Peering',
    ar: 'التبادل المزدوج',
  },
  'home.glance.protocol.desc': {
    en: 'Full support for both IPv4 and IPv6 address families on the exchange fabric',
    ar: 'دعم كامل لعائلتي عناوين IPv4 و IPv6 على منصة التبادل',
  },
  'home.glance.location.value': {
    en: 'Carrier-Grade',
    ar: 'فئة الناقل',
  },
  'home.glance.location.label': {
    en: 'Datacenter Facilities',
    ar: 'مرافق مركز البيانات',
  },
  'home.glance.location.desc': {
    en: 'Hosted in secure, redundant datacenter facilities with 24/7 NOC support',
    ar: 'مستضافة في مرافق مركز بيانات آمنة ومكررة مع دعم NOC على مدار الساعة',
  },

  // Home Page - Who Connects Section
  'home.ecosystem.title': {
    en: 'Who Connects to QIX',
    ar: 'من يتصل بـ QIX',
  },
  'home.ecosystem.subtitle': {
    en: 'A diverse ecosystem of networks building Qatar\'s digital future together',
    ar: 'نظام بيئي متنوع من الشبكات يبني معاً المستقبل الرقمي لقطر',
  },
  'home.ecosystem.description': {
    en: 'QIX connects a broad range of participants including Internet Service Providers, mobile network operators, cloud and CDN providers, enterprise networks, and government entities. Together, these networks form the backbone of Qatar\'s digital infrastructure.',
    ar: 'تربط QIX مجموعة واسعة من المشاركين بما في ذلك مزودي خدمة الإنترنت ومشغلي شبكات الهاتف المحمول ومزودي السحابة و CDN وشبكات المؤسسات والجهات الحكومية. معاً، تشكل هذه الشبكات العمود الفقري للبنية التحتية الرقمية لقطر.',
  },
  'home.ecosystem.isp': {
    en: 'Internet Service Provider',
    ar: 'مزود خدمة الإنترنت',
  },
  'home.ecosystem.mobile': {
    en: 'Mobile Operator',
    ar: 'مشغل الهاتف المحمول',
  },
  'home.ecosystem.cdn': {
    en: 'Cloud / CDN Provider',
    ar: 'مزود السحابة / CDN',
  },
  'home.ecosystem.government': {
    en: 'Government Entity',
    ar: 'جهة حكومية',
  },
  'home.ecosystem.enterprise': {
    en: 'Enterprise Network',
    ar: 'شبكة المؤسسات',
  },
  'home.ecosystem.content': {
    en: 'Content Provider',
    ar: 'مزود المحتوى',
  },

  // Home Page - CTA Section
  'home.cta.title': {
    en: 'Ready to peer with QIX and keep your traffic local?',
    ar: 'هل أنت مستعد للتبادل مع QIX والحفاظ على حركة المرور محلياً؟',
  },
  'home.cta.subtitle': {
    en: 'Join Qatar\'s premier Internet Exchange Point and enhance your network\'s performance, resilience, and reach.',
    ar: 'انضم إلى نقطة تبادل الإنترنت الرائدة في قطر وعزز أداء شبكتك ومرونتها وانتشارها.',
  },
  'home.cta.connect': {
    en: 'How to Connect',
    ar: 'كيفية الاتصال',
  },
  'home.cta.contact': {
    en: 'Contact QIX',
    ar: 'اتصل بـ QIX',
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
  'a11y.networkIllustration': {
    en: 'Abstract illustration representing network connectivity and data exchange',
    ar: 'رسم توضيحي تجريدي يمثل اتصال الشبكة وتبادل البيانات',
  },
};
