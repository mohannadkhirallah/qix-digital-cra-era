export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About QIX', ar: 'عن QIX' },
  'nav.whyPeer': { en: 'Why Peer With QIX', ar: 'لماذا التبادل مع QIX' },
  'nav.participants': { en: 'Participants & Partners', ar: 'المشاركون والشركاء' },
  'nav.connect': { en: 'How to Connect', ar: 'كيفية الاتصال' },
  'nav.policies': { en: 'Policies & Governance', ar: 'السياسات والحوكمة' },
  'nav.resources': { en: 'Resources', ar: 'الموارد' },
  'nav.contact': { en: 'Contact & NOC', ar: 'اتصل بنا' },

  // Header
  'header.skipToContent': { en: 'Skip to main content', ar: 'انتقل إلى المحتوى الرئيسي' },
  'header.languageSwitch': { en: 'العربية', ar: 'English' },
  'header.stateOfQatar': { en: 'State of Qatar', ar: 'دولة قطر' },

  // Footer
  'footer.copyright': { en: '© 2024 Qatar Internet Exchange. All rights reserved.', ar: '© 2024 نقطة تبادل الإنترنت القطرية. جميع الحقوق محفوظة.' },
  'footer.regulatedBy': { en: 'Regulated by Communications Regulatory Authority', ar: 'تحت إشراف هيئة تنظيم الاتصالات' },
  'footer.privacy': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  'footer.terms': { en: 'Terms of Use', ar: 'شروط الاستخدام' },
  'footer.accessibility': { en: 'Accessibility', ar: 'إمكانية الوصول' },
  'footer.quickLinks': { en: 'Quick Links', ar: 'روابط سريعة' },
  'footer.connect': { en: 'Connect With Us', ar: 'تواصل معنا' },
  'footer.contact': { en: 'Contact Information', ar: 'معلومات الاتصال' },
  'footer.generalEmail': { en: 'General Inquiries', ar: 'استفسارات عامة' },
  'footer.technicalEmail': { en: 'Technical Support', ar: 'الدعم الفني' },

  // Home Page
  'home.hero.badge': { en: 'Qatar\'s National Internet Exchange Point', ar: 'نقطة تبادل الإنترنت الوطنية في قطر' },
  'home.hero.title': { en: 'Qatar Internet Exchange', ar: 'نقطة قطر لتبادل الإنترنت' },
  'home.hero.titleAbbr': { en: 'QIX', ar: 'QIX' },
  'home.hero.description': { en: 'The Qatar Internet Exchange (QIX) is a carrier-neutral Layer 2 switching fabric enabling local and international bandwidth exchange between Internet networks. We enhance connectivity, reduce latency, and promote digital resilience for Qatar and the region.', ar: 'نقطة قطر لتبادل الإنترنت (QIX) هي منصة تبديل محايدة من الطبقة الثانية تتيح تبادل النطاق الترددي المحلي والدولي بين شبكات الإنترنت. نحن نعزز الاتصال، ونقلل زمن الوصول، ونعزز المرونة الرقمية لقطر والمنطقة.' },
  'home.hero.cta.connect': { en: 'Connect to QIX', ar: 'الاتصال بـ QIX' },
  'home.hero.cta.participants': { en: 'View Participants', ar: 'عرض المشاركين' },
  'home.why.title': { en: 'Why QIX Exists', ar: 'لماذا توجد QIX' },
  'home.why.subtitle': { en: 'Building a stronger, faster, and more resilient internet infrastructure for Qatar', ar: 'بناء بنية تحتية للإنترنت أقوى وأسرع وأكثر مرونة لقطر' },
  'home.why.latency.title': { en: 'Lower Latency', ar: 'زمن استجابة أقل' },
  'home.why.latency.desc': { en: 'Direct local peering eliminates international round-trips, delivering sub-millisecond response times for local traffic.', ar: 'التبادل المحلي المباشر يلغي الرحلات الدولية، ويوفر أوقات استجابة أقل من ميلي ثانية لحركة المرور المحلية.' },
  'home.why.local.title': { en: 'Local Traffic Stays Local', ar: 'حركة المرور المحلية تبقى محلية' },
  'home.why.local.desc': { en: 'Keep Qatar-to-Qatar internet traffic within the country, improving user experience and data sovereignty.', ar: 'الحفاظ على حركة الإنترنت من قطر إلى قطر داخل البلاد، مما يحسن تجربة المستخدم وسيادة البيانات.' },
  'home.why.cost.title': { en: 'Reduced Transit Costs', ar: 'تقليل تكاليف العبور' },
  'home.why.cost.desc': { en: 'Lower international transit expenses by exchanging traffic locally with other network participants.', ar: 'تقليل نفقات العبور الدولية من خلال تبادل حركة المرور محلياً مع المشاركين الآخرين في الشبكة.' },
  'home.why.resilience.title': { en: 'Increased Resilience', ar: 'زيادة المرونة' },
  'home.why.resilience.desc': { en: 'Multiple interconnection paths ensure network redundancy and protection against international cable failures.', ar: 'مسارات الربط المتعددة تضمن احتياطي الشبكة والحماية من أعطال الكابلات الدولية.' },
  'home.why.sovereignty.title': { en: 'Digital Sovereignty', ar: 'السيادة الرقمية' },
  'home.why.sovereignty.desc': { en: 'Support national digital independence by establishing a robust local internet infrastructure.', ar: 'دعم الاستقلال الرقمي الوطني من خلال إنشاء بنية تحتية قوية للإنترنت المحلي.' },
  'home.why.growth.title': { en: 'Ecosystem Growth', ar: 'نمو النظام البيئي' },
  'home.why.growth.desc': { en: 'Attract global content providers and encourage local content development within Qatar.', ar: 'جذب مزودي المحتوى العالميين وتشجيع تطوير المحتوى المحلي داخل قطر.' },
  'home.glance.title': { en: 'QIX at a Glance', ar: 'QIX في لمحة' },
  'home.glance.subtitle': { en: 'Key facts about Qatar\'s premier Internet Exchange Point', ar: 'حقائق رئيسية عن نقطة تبادل الإنترنت الرائدة في قطر' },
  'home.glance.participants.value': { en: '15+', ar: '+١٥' },
  'home.glance.participants.label': { en: 'Connected Participants', ar: 'مشارك متصل' },
  'home.glance.participants.desc': { en: 'ISPs, mobile operators, enterprises, and content providers exchanging traffic', ar: 'مزودي خدمة الإنترنت ومشغلي الهاتف المحمول والشركات ومزودي المحتوى يتبادلون حركة المرور' },
  'home.glance.protocol.value': { en: 'IPv4 & IPv6', ar: 'IPv4 و IPv6' },
  'home.glance.protocol.label': { en: 'Dual-Stack Peering', ar: 'التبادل المزدوج' },
  'home.glance.protocol.desc': { en: 'Full support for both IPv4 and IPv6 address families on the exchange fabric', ar: 'دعم كامل لعائلتي عناوين IPv4 و IPv6 على منصة التبادل' },
  'home.glance.location.value': { en: 'Carrier-Grade', ar: 'فئة الناقل' },
  'home.glance.location.label': { en: 'Datacenter Facilities', ar: 'مرافق مركز البيانات' },
  'home.glance.location.desc': { en: 'Hosted in secure, redundant datacenter facilities with 24/7 NOC support', ar: 'مستضافة في مرافق مركز بيانات آمنة ومكررة مع دعم NOC على مدار الساعة' },
  'home.ecosystem.title': { en: 'Who Connects to QIX', ar: 'من يتصل بـ QIX' },
  'home.ecosystem.subtitle': { en: 'A diverse ecosystem of networks building Qatar\'s digital future together', ar: 'نظام بيئي متنوع من الشبكات يبني معاً المستقبل الرقمي لقطر' },
  'home.ecosystem.description': { en: 'QIX connects a broad range of participants including Internet Service Providers, mobile network operators, cloud and CDN providers, enterprise networks, and government entities. Together, these networks form the backbone of Qatar\'s digital infrastructure.', ar: 'تربط QIX مجموعة واسعة من المشاركين بما في ذلك مزودي خدمة الإنترنت ومشغلي شبكات الهاتف المحمول ومزودي السحابة و CDN وشبكات المؤسسات والجهات الحكومية. معاً، تشكل هذه الشبكات العمود الفقري للبنية التحتية الرقمية لقطر.' },
  'home.ecosystem.isp': { en: 'Internet Service Provider', ar: 'مزود خدمة الإنترنت' },
  'home.ecosystem.mobile': { en: 'Mobile Operator', ar: 'مشغل الهاتف المحمول' },
  'home.ecosystem.cdn': { en: 'Cloud / CDN Provider', ar: 'مزود السحابة / CDN' },
  'home.ecosystem.government': { en: 'Government Entity', ar: 'جهة حكومية' },
  'home.ecosystem.enterprise': { en: 'Enterprise Network', ar: 'شبكة المؤسسات' },
  'home.ecosystem.content': { en: 'Content Provider', ar: 'مزود المحتوى' },
  'home.cta.title': { en: 'Ready to peer with QIX and keep your traffic local?', ar: 'هل أنت مستعد للتبادل مع QIX والحفاظ على حركة المرور محلياً؟' },
  'home.cta.subtitle': { en: 'Join Qatar\'s premier Internet Exchange Point and enhance your network\'s performance, resilience, and reach.', ar: 'انضم إلى نقطة تبادل الإنترنت الرائدة في قطر وعزز أداء شبكتك ومرونتها وانتشارها.' },
  'home.cta.connect': { en: 'How to Connect', ar: 'كيفية الاتصال' },
  'home.cta.contact': { en: 'Contact QIX', ar: 'اتصل بـ QIX' },

  // About Page
  'about.title': { en: 'About Qatar Internet Exchange', ar: 'عن نقطة قطر لتبادل الإنترنت' },
  'about.subtitle': { en: 'Qatar\'s national neutral Internet Exchange Point, enabling local traffic exchange and strengthening the country\'s digital resilience.', ar: 'نقطة تبادل الإنترنت الوطنية المحايدة في قطر، تمكّن تبادل حركة المرور المحلية وتعزز المرونة الرقمية للبلاد.' },
  'about.breadcrumb.home': { en: 'Home', ar: 'الرئيسية' },
  'about.breadcrumb.about': { en: 'About QIX', ar: 'عن QIX' },

  // About - Who We Are
  'about.whoWeAre.title': { en: 'Who We Are', ar: 'من نحن' },
  'about.whoWeAre.subtitle': { en: 'Understanding QIX\'s role in Qatar\'s digital ecosystem', ar: 'فهم دور QIX في النظام البيئي الرقمي لقطر' },
  'about.whoWeAre.p1': { en: 'The Qatar Internet Exchange (QIX) is Qatar\'s national Internet Exchange Point (IXP), established to create a neutral, carrier-grade platform where networks can interconnect and exchange traffic directly within the country.', ar: 'نقطة قطر لتبادل الإنترنت (QIX) هي نقطة تبادل الإنترنت الوطنية في قطر، تأسست لإنشاء منصة محايدة من فئة الناقل حيث يمكن للشبكات الترابط وتبادل حركة المرور مباشرة داخل البلاد.' },
  'about.whoWeAre.p2': { en: 'Operating as an OSI Layer 2 switching fabric, QIX provides a non-discriminatory environment where Internet Service Providers, mobile operators, government entities, enterprises, and content providers can peer with each other efficiently.', ar: 'تعمل QIX كمنصة تبديل من الطبقة الثانية OSI، وتوفر بيئة غير تمييزية حيث يمكن لمزودي خدمة الإنترنت ومشغلي الهاتف المحمول والجهات الحكومية والشركات ومزودي المحتوى التبادل مع بعضهم البعض بكفاءة.' },
  'about.whoWeAre.p3': { en: 'By keeping local Internet traffic within Qatar, QIX reduces dependency on international connectivity, lowers latency, and enhances the overall quality of Internet services for users across the nation.', ar: 'من خلال الحفاظ على حركة الإنترنت المحلية داخل قطر، تقلل QIX الاعتماد على الاتصال الدولي، وتخفض زمن الوصول، وتعزز الجودة الشاملة لخدمات الإنترنت للمستخدمين في جميع أنحاء البلاد.' },
  'about.whoWeAre.established': { en: 'Established', ar: 'تأسست' },
  'about.whoWeAre.establishedValue': { en: 'National IXP', ar: 'نقطة تبادل وطنية' },
  'about.whoWeAre.type': { en: 'Exchange Type', ar: 'نوع التبادل' },
  'about.whoWeAre.typeValue': { en: 'Layer 2 Fabric', ar: 'منصة الطبقة الثانية' },
  'about.whoWeAre.coverage': { en: 'Coverage', ar: 'التغطية' },
  'about.whoWeAre.coverageValue': { en: 'Qatar & MENA', ar: 'قطر والشرق الأوسط' },

  // About - Mission & Role
  'about.mission.title': { en: 'Mission & Role', ar: 'الرسالة والدور' },
  'about.mission.subtitle': { en: 'Our commitment to Qatar\'s digital infrastructure', ar: 'التزامنا بالبنية التحتية الرقمية لقطر' },
  'about.mission.neutral.title': { en: 'Neutral Peering Platform', ar: 'منصة تبادل محايدة' },
  'about.mission.neutral.desc': { en: 'Provide a carrier-neutral, non-discriminatory platform where all eligible participants can interconnect on equal terms.', ar: 'توفير منصة محايدة وغير تمييزية حيث يمكن لجميع المشاركين المؤهلين الترابط بشروط متساوية.' },
  'about.mission.performance.title': { en: 'Enhanced Performance', ar: 'أداء محسّن' },
  'about.mission.performance.desc': { en: 'Improve Internet experience for end users by enabling direct local peering, reducing latency and packet loss.', ar: 'تحسين تجربة الإنترنت للمستخدمين النهائيين من خلال تمكين التبادل المحلي المباشر، وتقليل زمن الوصول وفقدان الحزم.' },
  'about.mission.digital.title': { en: 'Digital Transformation', ar: 'التحول الرقمي' },
  'about.mission.digital.desc': { en: 'Support Qatar\'s national digital transformation goals and contribute to the Qatar National Vision 2030.', ar: 'دعم أهداف التحول الرقمي الوطني لقطر والمساهمة في رؤية قطر الوطنية 2030.' },
  'about.mission.resilience.title': { en: 'Infrastructure Resilience', ar: 'مرونة البنية التحتية' },
  'about.mission.resilience.desc': { en: 'Strengthen the resilience of Qatar\'s Internet infrastructure through redundant local interconnection paths.', ar: 'تعزيز مرونة البنية التحتية للإنترنت في قطر من خلال مسارات الربط المحلية المتكررة.' },

  // About - Governance & Neutrality
  'about.governance.title': { en: 'Governance & Neutrality', ar: 'الحوكمة والحياد' },
  'about.governance.subtitle': { en: 'Transparent, fair, and regulatory-aligned operations', ar: 'عمليات شفافة وعادلة ومتوافقة مع اللوائح' },
  'about.governance.intro': { en: 'QIX operates under the regulatory framework established by the Communications Regulatory Authority (CRA) of Qatar, ensuring alignment with national telecommunications policies and international best practices for Internet Exchange Points.', ar: 'تعمل QIX ضمن الإطار التنظيمي الذي وضعته هيئة تنظيم الاتصالات في قطر، مما يضمن التوافق مع سياسات الاتصالات الوطنية والممارسات الدولية الفضلى لنقاط تبادل الإنترنت.' },
  'about.governance.principle1': { en: 'Non-discriminatory access for all eligible participants', ar: 'وصول غير تمييزي لجميع المشاركين المؤهلين' },
  'about.governance.principle2': { en: 'Transparent pricing and service terms', ar: 'تسعير شفاف وشروط خدمة واضحة' },
  'about.governance.principle3': { en: 'Equal treatment regardless of participant size', ar: 'معاملة متساوية بغض النظر عن حجم المشارك' },
  'about.governance.principle4': { en: 'Regulatory compliance with CRA guidelines', ar: 'الامتثال التنظيمي لإرشادات هيئة تنظيم الاتصالات' },
  'about.governance.principle5': { en: 'Open and fair peering policies', ar: 'سياسات تبادل مفتوحة وعادلة' },

  // About - Infrastructure
  'about.infrastructure.title': { en: 'Infrastructure & Location', ar: 'البنية التحتية والموقع' },
  'about.infrastructure.subtitle': { en: 'World-class facilities powering Qatar\'s digital exchange', ar: 'مرافق عالمية المستوى تدعم التبادل الرقمي في قطر' },
  'about.infrastructure.intro': { en: 'QIX is hosted in carrier-grade datacenter facilities in Qatar, providing participants with secure, redundant, and highly available infrastructure for their peering connections.', ar: 'تستضاف QIX في مرافق مركز بيانات من فئة الناقل في قطر، مما يوفر للمشاركين بنية تحتية آمنة ومتكررة وعالية التوفر لاتصالات التبادل الخاصة بهم.' },
  'about.infrastructure.feature1.title': { en: 'Carrier-Grade Datacenter', ar: 'مركز بيانات من فئة الناقل' },
  'about.infrastructure.feature1.desc': { en: 'Tier III+ equivalent facilities with redundant power, cooling, and physical security.', ar: 'مرافق معادلة للمستوى الثالث+ مع طاقة متكررة وتبريد وأمن مادي.' },
  'about.infrastructure.feature2.title': { en: '24/7 NOC Support', ar: 'دعم NOC على مدار الساعة' },
  'about.infrastructure.feature2.desc': { en: 'Round-the-clock Network Operations Center monitoring and technical support.', ar: 'مركز عمليات الشبكة يراقب ويقدم الدعم الفني على مدار الساعة.' },
  'about.infrastructure.feature3.title': { en: 'High-Capacity Switching', ar: 'تبديل عالي السعة' },
  'about.infrastructure.feature3.desc': { en: 'Modern switching infrastructure supporting 1G, 10G, and 100G port connections.', ar: 'بنية تحتية حديثة للتبديل تدعم اتصالات المنافذ 1G و 10G و 100G.' },
  'about.infrastructure.feature4.title': { en: 'IPv4 & IPv6 Ready', ar: 'جاهز لـ IPv4 و IPv6' },
  'about.infrastructure.feature4.desc': { en: 'Full dual-stack support for both IPv4 and IPv6 address families.', ar: 'دعم كامل للمكدس المزدوج لعائلتي عناوين IPv4 و IPv6.' },

  // About - CTA
  'about.cta.title': { en: 'Ready to Connect?', ar: 'هل أنت مستعد للاتصال؟' },
  'about.cta.desc': { en: 'Learn more about becoming a QIX participant and join Qatar\'s growing Internet exchange ecosystem.', ar: 'تعرف على المزيد حول أن تصبح مشاركاً في QIX وانضم إلى نظام تبادل الإنترنت المتنامي في قطر.' },

  // Common
  'common.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },
  'common.readMore': { en: 'Read More', ar: 'قراءة المزيد' },
  'common.viewAll': { en: 'View All', ar: 'عرض الكل' },
  'common.download': { en: 'Download', ar: 'تحميل' },
  'common.submit': { en: 'Submit', ar: 'إرسال' },
  'common.cancel': { en: 'Cancel', ar: 'إلغاء' },

  // Accessibility
  'a11y.newWindow': { en: 'Opens in a new window', ar: 'يفتح في نافذة جديدة' },
  'a11y.externalLink': { en: 'External link', ar: 'رابط خارجي' },
  'a11y.menuOpen': { en: 'Open menu', ar: 'فتح القائمة' },
  'a11y.menuClose': { en: 'Close menu', ar: 'إغلاق القائمة' },
  'a11y.networkIllustration': { en: 'Abstract illustration representing network connectivity and data exchange', ar: 'رسم توضيحي تجريدي يمثل اتصال الشبكة وتبادل البيانات' },
};
