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
  'nav.about': { en: 'About', ar: 'من نحن' },
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

  // Why Peer Page
  'whyPeer.title': { en: 'Why Peer at QIX', ar: 'لماذا التبادل مع QIX' },
  'whyPeer.subtitle': { en: 'Discover why ISPs, mobile operators, cloud providers, CDNs, government networks, and enterprises choose to peer at Qatar Internet Exchange instead of relying solely on IP transit.', ar: 'اكتشف لماذا يختار مزودو خدمة الإنترنت ومشغلو الهاتف المحمول ومزودو السحابة و CDN والشبكات الحكومية والشركات التبادل مع QIX بدلاً من الاعتماد فقط على عبور IP.' },
  'whyPeer.breadcrumb.whyPeer': { en: 'Why Peer at QIX', ar: 'لماذا التبادل مع QIX' },

  // Why Peer - What is Peering
  'whyPeer.peering.badge': { en: 'Understanding Peering', ar: 'فهم التبادل' },
  'whyPeer.peering.title': { en: 'What is Internet Peering?', ar: 'ما هو تبادل الإنترنت؟' },
  'whyPeer.peering.p1': { en: 'Internet peering is the direct exchange of traffic between two networks at an Internet Exchange Point (IXP). Instead of routing traffic through third-party transit providers across international links, peering allows networks to exchange data directly and locally.', ar: 'تبادل الإنترنت هو التبادل المباشر لحركة المرور بين شبكتين في نقطة تبادل الإنترنت (IXP). بدلاً من توجيه حركة المرور عبر مزودي العبور من طرف ثالث عبر الروابط الدولية، يسمح التبادل للشبكات بتبادل البيانات مباشرة ومحلياً.' },
  'whyPeer.peering.p2': { en: 'By connecting to QIX, networks in Qatar can establish direct peering relationships with other local and regional participants, improving performance while reducing costs and dependency on upstream transit.', ar: 'من خلال الاتصال بـ QIX، يمكن للشبكات في قطر إنشاء علاقات تبادل مباشرة مع المشاركين المحليين والإقليميين الآخرين، مما يحسن الأداء مع تقليل التكاليف والاعتماد على عبور المنبع.' },
  'whyPeer.peering.point1': { en: 'Exchange traffic locally within Qatar', ar: 'تبادل حركة المرور محلياً داخل قطر' },
  'whyPeer.peering.point2': { en: 'Improve routes and reduce latency', ar: 'تحسين المسارات وتقليل زمن الوصول' },
  'whyPeer.peering.point3': { en: 'Reduce international transit costs', ar: 'تقليل تكاليف العبور الدولية' },
  'whyPeer.peering.visual': { en: 'Networks connect directly at QIX instead of routing through international transit', ar: 'تتصل الشبكات مباشرة في QIX بدلاً من التوجيه عبر العبور الدولي' },

  // Why Peer - Benefits
  'whyPeer.benefits.badge': { en: 'Key Benefits', ar: 'الفوائد الرئيسية' },
  'whyPeer.benefits.title': { en: 'Benefits of Peering at QIX', ar: 'فوائد التبادل مع QIX' },
  'whyPeer.benefits.subtitle': { en: 'Realize tangible business and technical advantages by connecting to Qatar\'s national Internet Exchange Point', ar: 'حقق مزايا تجارية وتقنية ملموسة من خلال الاتصال بنقطة تبادل الإنترنت الوطنية في قطر' },
  'whyPeer.benefits.latency.title': { en: 'Lower Latency for Local Users', ar: 'زمن استجابة أقل للمستخدمين المحليين' },
  'whyPeer.benefits.latency.desc': { en: 'Direct local peering eliminates international round-trips, delivering sub-millisecond response times for Qatar-to-Qatar traffic.', ar: 'التبادل المحلي المباشر يلغي الرحلات الدولية، ويوفر أوقات استجابة أقل من ميلي ثانية لحركة المرور داخل قطر.' },
  'whyPeer.benefits.cost.title': { en: 'Reduced IP Transit Costs', ar: 'تقليل تكاليف عبور IP' },
  'whyPeer.benefits.cost.desc': { en: 'Lower your international transit expenses by exchanging traffic locally with other network participants at QIX.', ar: 'قلل نفقات العبور الدولية عن طريق تبادل حركة المرور محلياً مع المشاركين الآخرين في الشبكة في QIX.' },
  'whyPeer.benefits.local.title': { en: 'Local Traffic Stays Within Qatar', ar: 'حركة المرور المحلية تبقى داخل قطر' },
  'whyPeer.benefits.local.desc': { en: 'Keep Qatar-to-Qatar internet traffic within the country, improving user experience and supporting data sovereignty.', ar: 'احتفظ بحركة الإنترنت من قطر إلى قطر داخل البلاد، مما يحسن تجربة المستخدم ويدعم سيادة البيانات.' },
  'whyPeer.benefits.resilience.title': { en: 'Improved Redundancy & Resilience', ar: 'تحسين التكرار والمرونة' },
  'whyPeer.benefits.resilience.desc': { en: 'Multiple interconnection paths ensure network redundancy and protection against international cable failures.', ar: 'مسارات الربط المتعددة تضمن احتياطي الشبكة والحماية من أعطال الكابلات الدولية.' },
  'whyPeer.benefits.experience.title': { en: 'Better User Experience', ar: 'تجربة مستخدم أفضل' },
  'whyPeer.benefits.experience.desc': { en: 'Enhanced performance for streaming, cloud applications, online gaming, and business services through optimized local routing.', ar: 'أداء محسّن للبث والتطبيقات السحابية والألعاب عبر الإنترنت وخدمات الأعمال من خلال التوجيه المحلي الأمثل.' },
  'whyPeer.benefits.sovereignty.title': { en: 'Support Digital Sovereignty', ar: 'دعم السيادة الرقمية' },
  'whyPeer.benefits.sovereignty.desc': { en: 'Align with Qatar\'s national digital strategy and Vision 2030 by strengthening local internet infrastructure.', ar: 'التوافق مع استراتيجية قطر الرقمية الوطنية ورؤية 2030 من خلال تعزيز البنية التحتية المحلية للإنترنت.' },

  // Why Peer - Audience
  'whyPeer.audience.badge': { en: 'Target Participants', ar: 'المشاركون المستهدفون' },
  'whyPeer.audience.title': { en: 'Who Should Peer at QIX?', ar: 'من يجب أن يتبادل مع QIX؟' },
  'whyPeer.audience.subtitle': { en: 'QIX welcomes a diverse range of network operators and organizations looking to enhance their connectivity in Qatar', ar: 'ترحب QIX بمجموعة متنوعة من مشغلي الشبكات والمنظمات التي تتطلع إلى تعزيز اتصالها في قطر' },
  'whyPeer.audience.isp.title': { en: 'Internet Service Providers', ar: 'مزودو خدمة الإنترنت' },
  'whyPeer.audience.isp.desc': { en: 'Improve service quality for subscribers by peering locally and reducing reliance on expensive international transit.', ar: 'تحسين جودة الخدمة للمشتركين من خلال التبادل المحلي وتقليل الاعتماد على العبور الدولي المكلف.' },
  'whyPeer.audience.mno.title': { en: 'Mobile Network Operators', ar: 'مشغلو شبكات الهاتف المحمول' },
  'whyPeer.audience.mno.desc': { en: 'Enhance mobile data performance for millions of users with direct access to local content and services.', ar: 'تعزيز أداء بيانات الهاتف المحمول لملايين المستخدمين مع الوصول المباشر إلى المحتوى والخدمات المحلية.' },
  'whyPeer.audience.government.title': { en: 'Government & Public Sector', ar: 'القطاع الحكومي والعام' },
  'whyPeer.audience.government.desc': { en: 'Exchange traffic securely between government entities and improve access to e-government services.', ar: 'تبادل حركة المرور بشكل آمن بين الجهات الحكومية وتحسين الوصول إلى خدمات الحكومة الإلكترونية.' },
  'whyPeer.audience.cloud.title': { en: 'Cloud & CDN Providers', ar: 'مزودو السحابة و CDN' },
  'whyPeer.audience.cloud.desc': { en: 'Serve content closer to Qatar users, reducing latency and improving performance for cloud and streaming services.', ar: 'تقديم المحتوى بالقرب من مستخدمي قطر، مما يقلل زمن الوصول ويحسن أداء الخدمات السحابية والبث.' },
  'whyPeer.audience.enterprise.title': { en: 'Large Enterprises', ar: 'الشركات الكبرى' },
  'whyPeer.audience.enterprise.desc': { en: 'Leverage direct peering for mission-critical applications, financial services, and media operations.', ar: 'الاستفادة من التبادل المباشر للتطبيقات الحرجة والخدمات المالية والعمليات الإعلامية.' },
  'whyPeer.audience.carrier.title': { en: 'International Carriers', ar: 'الناقلون الدوليون' },
  'whyPeer.audience.carrier.desc': { en: 'Expand regional presence and offer enhanced connectivity to customers operating in Qatar.', ar: 'توسيع الحضور الإقليمي وتقديم اتصال محسّن للعملاء العاملين في قطر.' },

  // Why Peer - Value
  'whyPeer.value.badge': { en: 'Value Proposition', ar: 'عرض القيمة' },
  'whyPeer.value.title': { en: 'Business and Technical Value', ar: 'القيمة التجارية والتقنية' },
  'whyPeer.value.subtitle': { en: 'QIX delivers measurable benefits across both business operations and technical infrastructure', ar: 'تقدم QIX فوائد قابلة للقياس عبر كل من العمليات التجارية والبنية التحتية التقنية' },
  'whyPeer.value.business.title': { en: 'Business Benefits', ar: 'الفوائد التجارية' },
  'whyPeer.value.business.item1': { en: 'Significant cost efficiency through reduced international transit fees', ar: 'كفاءة كبيرة في التكلفة من خلال تقليل رسوم العبور الدولية' },
  'whyPeer.value.business.item2': { en: 'Competitive advantage with superior local network performance', ar: 'ميزة تنافسية مع أداء شبكة محلية متفوق' },
  'whyPeer.value.business.item3': { en: 'Improved Quality of Service (QoS) for end users', ar: 'تحسين جودة الخدمة (QoS) للمستخدمين النهائيين' },
  'whyPeer.value.business.item4': { en: 'Enhanced customer satisfaction and retention', ar: 'تعزيز رضا العملاء والاحتفاظ بهم' },
  'whyPeer.value.technical.title': { en: 'Technical Benefits', ar: 'الفوائد التقنية' },
  'whyPeer.value.technical.item1': { en: 'Shorter AS paths for optimal routing efficiency', ar: 'مسارات AS أقصر لكفاءة التوجيه الأمثل' },
  'whyPeer.value.technical.item2': { en: 'Lower round-trip times (RTT) for local traffic', ar: 'أوقات ذهاب وإياب أقل (RTT) لحركة المرور المحلية' },
  'whyPeer.value.technical.item3': { en: 'Local routing keeps traffic within Qatar\'s borders', ar: 'التوجيه المحلي يحافظ على حركة المرور داخل حدود قطر' },
  'whyPeer.value.technical.item4': { en: 'Network redundancy through multiple peering paths', ar: 'احتياطي الشبكة من خلال مسارات تبادل متعددة' },
  'whyPeer.value.technical.item5': { en: 'Full IPv4 and IPv6 dual-stack support', ar: 'دعم كامل للمكدس المزدوج IPv4 و IPv6' },

  // Why Peer - Use Cases
  'whyPeer.useCases.badge': { en: 'Real-World Scenarios', ar: 'سيناريوهات واقعية' },
  'whyPeer.useCases.title': { en: 'Typical Use Cases', ar: 'حالات الاستخدام النموذجية' },
  'whyPeer.useCases.subtitle': { en: 'See how different organizations benefit from peering at QIX', ar: 'شاهد كيف تستفيد المنظمات المختلفة من التبادل مع QIX' },
  'whyPeer.useCases.isp.title': { en: 'National ISP Improves Streaming', ar: 'مزود خدمة الإنترنت الوطني يحسن البث' },
  'whyPeer.useCases.isp.desc': { en: 'A major Qatari ISP connects to QIX and peers with local content providers. Their subscribers now enjoy buffer-free streaming and faster downloads as traffic no longer routes through international links. Customer complaints drop significantly.', ar: 'يتصل مزود خدمة إنترنت قطري كبير بـ QIX ويتبادل مع مزودي المحتوى المحليين. يستمتع المشتركون الآن بالبث بدون تخزين مؤقت وتنزيلات أسرع حيث لم تعد حركة المرور تمر عبر الروابط الدولية. تنخفض شكاوى العملاء بشكل كبير.' },
  'whyPeer.useCases.government.title': { en: 'Government Network Exchange', ar: 'تبادل الشبكة الحكومية' },
  'whyPeer.useCases.government.desc': { en: 'Multiple government ministries connect to QIX to exchange traffic directly. Inter-agency applications and data sharing become faster and more reliable, while sensitive government traffic stays entirely within Qatar.', ar: 'تتصل وزارات حكومية متعددة بـ QIX لتبادل حركة المرور مباشرة. تصبح التطبيقات بين الوكالات ومشاركة البيانات أسرع وأكثر موثوقية، بينما تبقى حركة المرور الحكومية الحساسة بالكامل داخل قطر.' },
  'whyPeer.useCases.cdn.title': { en: 'CDN Serves Local Content', ar: 'CDN يقدم المحتوى المحلي' },
  'whyPeer.useCases.cdn.desc': { en: 'A global CDN provider establishes presence at QIX, caching popular content locally. Qatar users experience dramatically improved load times for websites, video streaming, and software downloads.', ar: 'يؤسس مزود CDN عالمي حضوره في QIX، ويخزن المحتوى الشائع محلياً. يختبر مستخدمو قطر تحسناً كبيراً في أوقات التحميل لمواقع الويب وبث الفيديو وتنزيلات البرامج.' },
  'whyPeer.useCases.enterprise.title': { en: 'Enterprise Cloud Optimization', ar: 'تحسين سحابة المؤسسات' },
  'whyPeer.useCases.enterprise.desc': { en: 'A large financial institution connects to QIX and gains direct access to cloud providers also present at the exchange. Their trading systems and SaaS applications now operate with minimal latency.', ar: 'تتصل مؤسسة مالية كبيرة بـ QIX وتحصل على وصول مباشر إلى مزودي السحابة الموجودين أيضاً في التبادل. تعمل أنظمة التداول وتطبيقات SaaS الخاصة بهم الآن بأقل زمن وصول.' },

  // Why Peer - CTA
  'whyPeer.cta.title': { en: 'Ready to realize the benefits of peering at QIX?', ar: 'هل أنت مستعد لتحقيق فوائد التبادل مع QIX؟' },
  'whyPeer.cta.subtitle': { en: 'Join Qatar\'s premier Internet Exchange Point and transform your network\'s performance, reduce costs, and enhance resilience.', ar: 'انضم إلى نقطة تبادل الإنترنت الرائدة في قطر وحوّل أداء شبكتك وقلل التكاليف وعزز المرونة.' },
  'whyPeer.cta.connect': { en: 'How to Connect', ar: 'كيفية الاتصال' },
  'whyPeer.cta.participants': { en: 'View Participants', ar: 'عرض المشاركين' },

  // Participants Page
  'participants.title': { en: 'Participants', ar: 'المشاركون' },
  'participants.subtitle': { en: 'Browse the networks connected to Qatar Internet Exchange. Our ecosystem includes Internet Service Providers, Mobile Network Operators, Government entities, Cloud and CDN providers, and Enterprises.', ar: 'تصفح الشبكات المتصلة بنقطة قطر لتبادل الإنترنت. يشمل نظامنا البيئي مزودي خدمة الإنترنت ومشغلي شبكات الهاتف المحمول والجهات الحكومية ومزودي السحابة و CDN والشركات.' },
  'participants.breadcrumb.participants': { en: 'Participants', ar: 'المشاركون' },

  // Participants - Stats
  'participants.stats.label': { en: 'Participant statistics', ar: 'إحصائيات المشاركين' },
  'participants.stats.total': { en: 'Total Participants', ar: 'إجمالي المشاركين' },
  'participants.stats.categories': { en: 'Categories', ar: 'الفئات' },
  'participants.stats.ipv6': { en: 'IPv6 Enabled', ar: 'مفعّل IPv6' },

  // Participants - Filters
  'participants.filter.heading': { en: 'Search and filter participants', ar: 'البحث وتصفية المشاركين' },
  'participants.filter.searchLabel': { en: 'Search by name or ASN', ar: 'البحث بالاسم أو ASN' },
  'participants.filter.searchPlaceholder': { en: 'Type participant name or ASN...', ar: 'اكتب اسم المشارك أو ASN...' },
  'participants.filter.categoryLabel': { en: 'Filter by category', ar: 'تصفية حسب الفئة' },
  'participants.filter.all': { en: 'All', ar: 'الكل' },

  // Participants - Categories
  'participants.category.isp': { en: 'ISP', ar: 'مزود إنترنت' },
  'participants.category.mno': { en: 'Mobile Operator', ar: 'مشغل محمول' },
  'participants.category.government': { en: 'Government', ar: 'حكومي' },
  'participants.category.cloud': { en: 'Cloud / CDN', ar: 'سحابة / CDN' },
  'participants.category.enterprise': { en: 'Enterprise', ar: 'مؤسسة' },
  'participants.category.other': { en: 'Other', ar: 'أخرى' },

  // Participants - Directory
  'participants.directory.title': { en: 'Participants Directory', ar: 'دليل المشاركين' },
  'participants.directory.caption': { en: 'List of networks connected to Qatar Internet Exchange (QIX)', ar: 'قائمة الشبكات المتصلة بنقطة قطر لتبادل الإنترنت (QIX)' },
  'participants.directory.showing': { en: 'Showing', ar: 'عرض' },
  'participants.directory.of': { en: 'of', ar: 'من' },
  'participants.directory.participants': { en: 'participants', ar: 'مشاركين' },
  'participants.directory.noResults': { en: 'No participants found matching your criteria.', ar: 'لم يتم العثور على مشاركين يطابقون معاييرك.' },

  // Participants - Table Headers
  'participants.table.organization': { en: 'Organization', ar: 'المنظمة' },
  'participants.table.asn': { en: 'ASN', ar: 'ASN' },
  'participants.table.category': { en: 'Category', ar: 'الفئة' },
  'participants.table.ipv4': { en: 'IPv4', ar: 'IPv4' },
  'participants.table.ipv6': { en: 'IPv6', ar: 'IPv6' },
  'participants.table.status': { en: 'Status', ar: 'الحالة' },
  'participants.table.supported': { en: 'Supported', ar: 'مدعوم' },
  'participants.table.notSupported': { en: 'Not supported', ar: 'غير مدعوم' },

  // Participants - Status
  'participants.status.connected': { en: 'Connected', ar: 'متصل' },
  'participants.status.implementing': { en: 'Implementing', ar: 'قيد التنفيذ' },

  // Participants - Legend
  'participants.legend.title': { en: 'Category Definitions', ar: 'تعريفات الفئات' },
  'participants.legend.subtitle': { en: 'Understanding the different types of organizations in our ecosystem', ar: 'فهم أنواع المنظمات المختلفة في نظامنا البيئي' },
  'participants.legend.isp': { en: 'Internet Service Providers offering connectivity to end users and businesses in Qatar.', ar: 'مزودو خدمة الإنترنت الذين يقدمون الاتصال للمستخدمين النهائيين والشركات في قطر.' },
  'participants.legend.mno': { en: 'Mobile Network Operators providing cellular and mobile data services.', ar: 'مشغلو شبكات الهاتف المحمول الذين يقدمون خدمات الهاتف الخلوي والبيانات المحمولة.' },
  'participants.legend.government': { en: 'Public sector networks including ministries, agencies, and state entities.', ar: 'شبكات القطاع العام بما في ذلك الوزارات والهيئات والجهات الحكومية.' },
  'participants.legend.cloud': { en: 'Cloud providers and Content Delivery Networks serving content closer to users.', ar: 'مزودو السحابة وشبكات توصيل المحتوى التي تقدم المحتوى بالقرب من المستخدمين.' },
  'participants.legend.enterprise': { en: 'Large enterprises, educational institutions, and major organizations.', ar: 'الشركات الكبيرة والمؤسسات التعليمية والمنظمات الكبرى.' },

  // Participants - CTA
  'participants.cta.title': { en: 'Want to see your network listed here?', ar: 'هل تريد رؤية شبكتك مدرجة هنا؟' },
  'participants.cta.subtitle': { en: 'Join Qatar\'s premier Internet Exchange Point and become part of the growing ecosystem of connected networks.', ar: 'انضم إلى نقطة تبادل الإنترنت الرائدة في قطر وكن جزءاً من النظام البيئي المتنامي للشبكات المتصلة.' },
  'participants.cta.connect': { en: 'How to Connect', ar: 'كيفية الاتصال' },
  'participants.cta.contact': { en: 'Contact QIX', ar: 'اتصل بـ QIX' },

  // How to Connect Page
  'connect.title': { en: 'How to Connect to QIX', ar: 'كيفية الاتصال بـ QIX' },
  'connect.subtitle': { en: 'This guide describes the process and requirements for connecting your network—whether you\'re an ISP, Mobile Operator, Government entity, Cloud provider, or Enterprise—to Qatar Internet Exchange.', ar: 'يصف هذا الدليل عملية ومتطلبات توصيل شبكتك - سواء كنت مزود خدمة إنترنت أو مشغل هاتف محمول أو جهة حكومية أو مزود سحابة أو مؤسسة - بنقطة قطر لتبادل الإنترنت.' },
  'connect.breadcrumb.connect': { en: 'How to Connect', ar: 'كيفية الاتصال' },

  // Connect - Steps
  'connect.steps.badge': { en: 'Connection Process', ar: 'عملية الاتصال' },
  'connect.steps.title': { en: 'Four Steps to Connect', ar: 'أربع خطوات للاتصال' },
  'connect.steps.subtitle': { en: 'Follow our streamlined onboarding process to become a QIX participant', ar: 'اتبع عملية التسجيل المبسطة لدينا لتصبح مشاركاً في QIX' },
  'connect.steps.nav': { en: 'Connection steps navigation', ar: 'التنقل في خطوات الاتصال' },
  'connect.steps.step1.title': { en: 'Review Policies & Requirements', ar: 'مراجعة السياسات والمتطلبات' },
  'connect.steps.step1.desc': { en: 'Review QIX peering policies, technical requirements, and ensure your network meets the eligibility criteria.', ar: 'راجع سياسات التبادل في QIX والمتطلبات التقنية وتأكد من أن شبكتك تستوفي معايير الأهلية.' },
  'connect.steps.step2.title': { en: 'Submit Application', ar: 'تقديم الطلب' },
  'connect.steps.step2.desc': { en: 'Complete and submit the QIX membership/peering application form with your organization and technical details.', ar: 'أكمل وقدم نموذج طلب العضوية/التبادل في QIX مع تفاصيل مؤسستك والتفاصيل التقنية.' },
  'connect.steps.step3.title': { en: 'Technical Coordination', ar: 'التنسيق التقني' },
  'connect.steps.step3.desc': { en: 'Work with QIX NOC to arrange physical connectivity, configure BGP sessions, and complete testing.', ar: 'اعمل مع NOC في QIX لترتيب الاتصال المادي وتكوين جلسات BGP وإكمال الاختبار.' },
  'connect.steps.step4.title': { en: 'Go Live on QIX', ar: 'ابدأ العمل على QIX' },
  'connect.steps.step4.desc': { en: 'Once testing is complete, your network goes live and you can start exchanging traffic with other participants.', ar: 'بمجرد اكتمال الاختبار، تصبح شبكتك جاهزة ويمكنك البدء في تبادل حركة المرور مع المشاركين الآخرين.' },

  // Connect - Requirements
  'connect.requirements.badge': { en: 'Prerequisites', ar: 'المتطلبات المسبقة' },
  'connect.requirements.title': { en: 'Technical Requirements', ar: 'المتطلبات التقنية' },
  'connect.requirements.subtitle': { en: 'Ensure your network meets these requirements before applying to connect to QIX', ar: 'تأكد من أن شبكتك تستوفي هذه المتطلبات قبل التقدم للاتصال بـ QIX' },
  'connect.requirements.asn.title': { en: 'Public ASN', ar: 'ASN عام' },
  'connect.requirements.asn.desc': { en: 'A publicly registered Autonomous System Number (ASN) from a Regional Internet Registry (RIR).', ar: 'رقم نظام مستقل (ASN) مسجل علنياً من سجل إنترنت إقليمي (RIR).' },
  'connect.requirements.ip.title': { en: 'IP Addressing', ar: 'عنونة IP' },
  'connect.requirements.ip.desc': { en: 'Routable IPv4 and/or IPv6 address prefixes that you intend to announce at QIX.', ar: 'بادئات عناوين IPv4 و/أو IPv6 قابلة للتوجيه التي تنوي الإعلان عنها في QIX.' },
  'connect.requirements.bgp.title': { en: 'BGP Capability', ar: 'قدرة BGP' },
  'connect.requirements.bgp.desc': { en: 'Ability to establish BGP sessions with QIX route servers and/or bilateral peers.', ar: 'القدرة على إنشاء جلسات BGP مع خوادم مسارات QIX و/أو النظراء الثنائيين.' },
  'connect.requirements.physical.title': { en: 'Physical Connectivity', ar: 'الاتصال المادي' },
  'connect.requirements.physical.desc': { en: 'Ability to establish a cross-connect to the QIX switch at our datacenter facility.', ar: 'القدرة على إنشاء اتصال متقاطع إلى مفتاح QIX في منشأة مركز البيانات لدينا.' },
  'connect.requirements.interface.title': { en: 'Interface Standards', ar: 'معايير الواجهة' },
  'connect.requirements.interface.desc': { en: 'Standard Ethernet interfaces (1GbE, 10GbE, or 100GbE) with appropriate optics.', ar: 'واجهات إيثرنت قياسية (1GbE أو 10GbE أو 100GbE) مع البصريات المناسبة.' },
  'connect.requirements.policy.title': { en: 'Routing Policy', ar: 'سياسة التوجيه' },
  'connect.requirements.policy.desc': { en: 'Documented routing policy and willingness to adhere to QIX peering guidelines.', ar: 'سياسة توجيه موثقة واستعداد للالتزام بإرشادات التبادل في QIX.' },

  // Connect - Ports
  'connect.ports.title': { en: 'Available Port Speeds', ar: 'سرعات المنافذ المتاحة' },
  'connect.ports.1g': { en: 'Entry-level connectivity', ar: 'اتصال مستوى الدخول' },
  'connect.ports.10g': { en: 'Standard connectivity', ar: 'اتصال قياسي' },
  'connect.ports.100g': { en: 'High-capacity connectivity', ar: 'اتصال عالي السعة' },

  // Connect - Documents
  'connect.documents.badge': { en: 'Downloads', ar: 'التنزيلات' },
  'connect.documents.title': { en: 'Documents & Policies', ar: 'المستندات والسياسات' },
  'connect.documents.subtitle': { en: 'Review and download the required documents for connecting to QIX', ar: 'راجع وحمّل المستندات المطلوبة للاتصال بـ QIX' },
  'connect.documents.download': { en: 'Download', ar: 'تحميل' },
  'connect.documents.policy.title': { en: 'QIX Peering Policy', ar: 'سياسة التبادل في QIX' },
  'connect.documents.policy.desc': { en: 'Official peering policy document outlining terms, conditions, and operational guidelines for QIX participants.', ar: 'وثيقة سياسة التبادل الرسمية التي تحدد الشروط والأحكام والإرشادات التشغيلية للمشاركين في QIX.' },
  'connect.documents.application.title': { en: 'Membership Application Form', ar: 'نموذج طلب العضوية' },
  'connect.documents.application.desc': { en: 'Complete this form to apply for QIX membership. Includes organization details and technical information requirements.', ar: 'أكمل هذا النموذج للتقدم بطلب عضوية QIX. يتضمن تفاصيل المنظمة ومتطلبات المعلومات التقنية.' },
  'connect.documents.technical.title': { en: 'Technical Guide', ar: 'الدليل التقني' },
  'connect.documents.technical.desc': { en: 'Detailed technical specifications, BGP configuration examples, and best practices for connecting to QIX.', ar: 'المواصفات التقنية المفصلة وأمثلة تكوين BGP وأفضل الممارسات للاتصال بـ QIX.' },

  // Connect - Coordination
  'connect.coordination.badge': { en: 'Timeline', ar: 'الجدول الزمني' },
  'connect.coordination.title': { en: 'Coordination & Lead Times', ar: 'التنسيق والمهل الزمنية' },
  'connect.coordination.p1': { en: 'Once your application is approved, the QIX operations team will coordinate with you to establish physical connectivity. This includes arranging cross-connects at the datacenter and scheduling configuration and testing windows.', ar: 'بمجرد الموافقة على طلبك، سيقوم فريق عمليات QIX بالتنسيق معك لإنشاء الاتصال المادي. يشمل ذلك ترتيب الاتصالات المتقاطعة في مركز البيانات وجدولة نوافذ التكوين والاختبار.' },
  'connect.coordination.p2': { en: 'Lead times may vary depending on cross-connect provisioning and your internal readiness. The QIX NOC team is available to assist throughout the process.', ar: 'قد تختلف المهل الزمنية حسب توفير الاتصال المتقاطع وجاهزيتك الداخلية. فريق NOC في QIX متاح للمساعدة طوال العملية.' },
  'connect.coordination.timeline1': { en: 'Application Review', ar: 'مراجعة الطلب' },
  'connect.coordination.timeline1Value': { en: '3-5 business days', ar: '3-5 أيام عمل' },
  'connect.coordination.timeline2': { en: 'Cross-Connect Setup', ar: 'إعداد الاتصال المتقاطع' },
  'connect.coordination.timeline2Value': { en: '1-2 weeks', ar: '1-2 أسابيع' },
  'connect.coordination.timeline3': { en: 'Testing & Go-Live', ar: 'الاختبار والتشغيل' },
  'connect.coordination.timeline3Value': { en: '1-3 business days', ar: '1-3 أيام عمل' },
  'connect.coordination.support.title': { en: 'Dedicated Support', ar: 'دعم مخصص' },
  'connect.coordination.support.desc': { en: 'Our experienced operations team will guide you through every step of the connection process.', ar: 'سيرشدك فريق العمليات ذو الخبرة لدينا خلال كل خطوة من عملية الاتصال.' },
  'connect.coordination.support.item1': { en: 'Assigned technical contact for your connection', ar: 'جهة اتصال تقنية معينة لاتصالك' },
  'connect.coordination.support.item2': { en: '24/7 NOC availability for urgent issues', ar: 'توفر NOC على مدار الساعة للمشكلات العاجلة' },
  'connect.coordination.support.item3': { en: 'Comprehensive onboarding documentation', ar: 'وثائق تأهيل شاملة' },

  // Connect - Support
  'connect.support.title': { en: 'Need Help With Your Connection?', ar: 'هل تحتاج مساعدة في اتصالك؟' },
  'connect.support.subtitle': { en: 'Our team is ready to answer your questions and guide you through the connection process', ar: 'فريقنا مستعد للإجابة على أسئلتك وإرشادك خلال عملية الاتصال' },
  'connect.support.general.title': { en: 'General Enquiries', ar: 'استفسارات عامة' },
  'connect.support.general.desc': { en: 'For questions about membership, eligibility, and the application process.', ar: 'للأسئلة حول العضوية والأهلية وعملية التقديم.' },
  'connect.support.noc.title': { en: 'Technical / NOC Support', ar: 'الدعم التقني / NOC' },
  'connect.support.noc.desc': { en: 'For technical questions, connectivity issues, and BGP configuration support.', ar: 'للأسئلة التقنية ومشكلات الاتصال ودعم تكوين BGP.' },

  // Connect - CTA
  'connect.cta.title': { en: 'Ready to start your connection journey?', ar: 'هل أنت مستعد لبدء رحلة اتصالك؟' },
  'connect.cta.subtitle': { en: 'See who\'s already connected and join the growing QIX ecosystem today.', ar: 'شاهد من هو متصل بالفعل وانضم إلى نظام QIX البيئي المتنامي اليوم.' },
  'connect.cta.participants': { en: 'View Participants', ar: 'عرض المشاركين' },
  'connect.cta.contact': { en: 'Contact QIX', ar: 'اتصل بـ QIX' },

  // Policies & Documents Page
  'policies.title': { en: 'Policies & Documents', ar: 'السياسات والمستندات' },
  'policies.subtitle': { en: 'Access the central repository of QIX peering policies, acceptable use policies, technical guidelines, operational documents, and application forms.', ar: 'الوصول إلى المستودع المركزي لسياسات التبادل في QIX وسياسات الاستخدام المقبول والإرشادات التقنية والوثائق التشغيلية ونماذج الطلبات.' },
  'policies.breadcrumb.policies': { en: 'Policies & Documents', ar: 'السياسات والمستندات' },

  // Policies - Key Documents
  'policies.key.badge': { en: 'Essential Reading', ar: 'قراءة أساسية' },
  'policies.key.title': { en: 'Key Policies', ar: 'السياسات الرئيسية' },
  'policies.key.subtitle': { en: 'The most important documents for understanding QIX membership and operations', ar: 'أهم المستندات لفهم عضوية QIX وعملياتها' },
  'policies.key.essential': { en: 'Essential', ar: 'أساسي' },

  // Policies - Filters
  'policies.filter.heading': { en: 'Search and filter documents', ar: 'البحث وتصفية المستندات' },
  'policies.filter.searchLabel': { en: 'Search documents', ar: 'البحث في المستندات' },
  'policies.filter.searchPlaceholder': { en: 'Search by title or keyword...', ar: 'البحث بالعنوان أو الكلمة المفتاحية...' },
  'policies.filter.categoryLabel': { en: 'Filter by category', ar: 'تصفية حسب الفئة' },
  'policies.filter.all': { en: 'All', ar: 'الكل' },

  // Policies - Categories
  'policies.category.peering': { en: 'Peering Policy', ar: 'سياسة التبادل' },
  'policies.category.acceptableUse': { en: 'Acceptable Use', ar: 'الاستخدام المقبول' },
  'policies.category.technical': { en: 'Technical', ar: 'تقني' },
  'policies.category.operational': { en: 'Operational', ar: 'تشغيلي' },
  'policies.category.forms': { en: 'Forms', ar: 'نماذج' },

  // Policies - Library
  'policies.library.title': { en: 'QIX Document Library', ar: 'مكتبة مستندات QIX' },
  'policies.library.showing': { en: 'Showing', ar: 'عرض' },
  'policies.library.of': { en: 'of', ar: 'من' },
  'policies.library.documents': { en: 'documents', ar: 'مستندات' },
  'policies.library.noResults': { en: 'No documents found matching your criteria.', ar: 'لم يتم العثور على مستندات تطابق معاييرك.' },
  'policies.download': { en: 'Download', ar: 'تحميل' },

  // Policies - Document Titles & Descriptions
  'policies.docs.peeringPolicy.title': { en: 'QIX Peering Policy', ar: 'سياسة التبادل في QIX' },
  'policies.docs.peeringPolicy.desc': { en: 'Official peering policy document outlining terms, conditions, and operational guidelines for all QIX participants. Required reading before membership.', ar: 'وثيقة سياسة التبادل الرسمية التي تحدد الشروط والأحكام والإرشادات التشغيلية لجميع المشاركين في QIX. قراءة مطلوبة قبل العضوية.' },
  'policies.docs.aup.title': { en: 'Acceptable Use Policy', ar: 'سياسة الاستخدام المقبول' },
  'policies.docs.aup.desc': { en: 'Defines acceptable use of QIX infrastructure, prohibited activities, and participant responsibilities for maintaining network integrity.', ar: 'تحدد الاستخدام المقبول للبنية التحتية لـ QIX والأنشطة المحظورة ومسؤوليات المشاركين للحفاظ على سلامة الشبكة.' },
  'policies.docs.technicalGuide.title': { en: 'Technical & Routing Guidelines', ar: 'الإرشادات التقنية والتوجيه' },
  'policies.docs.technicalGuide.desc': { en: 'Detailed technical specifications, BGP configuration examples, route server usage, and best practices for connecting to QIX.', ar: 'المواصفات التقنية المفصلة وأمثلة تكوين BGP واستخدام خادم المسارات وأفضل الممارسات للاتصال بـ QIX.' },
  'policies.docs.routingPolicy.title': { en: 'Routing Policy Document', ar: 'وثيقة سياسة التوجيه' },
  'policies.docs.routingPolicy.desc': { en: 'Defines routing policies, prefix filtering, and BGP community usage standards for QIX participants.', ar: 'تحدد سياسات التوجيه وتصفية البادئات ومعايير استخدام مجتمع BGP للمشاركين في QIX.' },
  'policies.docs.membershipApp.title': { en: 'Membership Application Form', ar: 'نموذج طلب العضوية' },
  'policies.docs.membershipApp.desc': { en: 'Complete this form to apply for QIX membership. Includes organization details and technical information requirements.', ar: 'أكمل هذا النموذج للتقدم بطلب عضوية QIX. يتضمن تفاصيل المنظمة ومتطلبات المعلومات التقنية.' },
  'policies.docs.portRequest.title': { en: 'Port Request Form', ar: 'نموذج طلب المنفذ' },
  'policies.docs.portRequest.desc': { en: 'Form for requesting additional ports or port upgrades for existing QIX participants.', ar: 'نموذج لطلب منافذ إضافية أو ترقيات المنافذ للمشاركين الحاليين في QIX.' },
  'policies.docs.nocProcedures.title': { en: 'NOC Procedures Manual', ar: 'دليل إجراءات NOC' },
  'policies.docs.nocProcedures.desc': { en: 'Standard operating procedures for QIX Network Operations Center including incident response and escalation paths.', ar: 'إجراءات التشغيل القياسية لمركز عمليات شبكة QIX بما في ذلك الاستجابة للحوادث ومسارات التصعيد.' },
  'policies.docs.escalationMatrix.title': { en: 'Escalation Matrix', ar: 'مصفوفة التصعيد' },
  'policies.docs.escalationMatrix.desc': { en: 'Contact points and escalation procedures for technical issues and emergencies at QIX.', ar: 'نقاط الاتصال وإجراءات التصعيد للمشكلات التقنية وحالات الطوارئ في QIX.' },
  'policies.docs.bgpCommunities.title': { en: 'BGP Communities Reference', ar: 'مرجع مجتمعات BGP' },
  'policies.docs.bgpCommunities.desc': { en: 'Complete reference of BGP communities supported by QIX route servers for traffic engineering.', ar: 'مرجع كامل لمجتمعات BGP المدعومة من خوادم مسارات QIX لهندسة حركة المرور.' },
  'policies.docs.ipAllocation.title': { en: 'IP Allocation Guidelines', ar: 'إرشادات تخصيص IP' },
  'policies.docs.ipAllocation.desc': { en: 'Guidelines for IP address allocation on the QIX peering LAN for both IPv4 and IPv6.', ar: 'إرشادات تخصيص عنوان IP على شبكة LAN للتبادل في QIX لكل من IPv4 و IPv6.' },

  // Policies - Compliance
  'policies.compliance.badge': { en: 'Compliance', ar: 'الامتثال' },
  'policies.compliance.title': { en: 'Operational & Compliance Notes', ar: 'ملاحظات التشغيل والامتثال' },
  'policies.compliance.p1': { en: 'All QIX participants are expected to review, understand, and comply with the policies and guidelines published on this page. These documents represent the operational framework under which QIX operates.', ar: 'يُتوقع من جميع المشاركين في QIX مراجعة وفهم والامتثال للسياسات والإرشادات المنشورة في هذه الصفحة. تمثل هذه المستندات الإطار التشغيلي الذي تعمل بموجبه QIX.' },
  'policies.compliance.p2': { en: 'QIX policies are developed in alignment with broader telecommunications regulations and guidelines established by the Communications Regulatory Authority (CRA) of Qatar. We maintain consistency with national digital infrastructure standards.', ar: 'تم تطوير سياسات QIX بما يتماشى مع لوائح وإرشادات الاتصالات الأوسع التي وضعتها هيئة تنظيم الاتصالات في قطر. نحافظ على الاتساق مع معايير البنية التحتية الرقمية الوطنية.' },
  'policies.compliance.p3': { en: 'Policy updates are communicated to all participants via official channels. Participants are responsible for staying informed of any changes that may affect their operations.', ar: 'يتم إبلاغ تحديثات السياسات لجميع المشاركين عبر القنوات الرسمية. المشاركون مسؤولون عن البقاء على اطلاع بأي تغييرات قد تؤثر على عملياتهم.' },
  'policies.compliance.summary.title': { en: 'Key Compliance Points', ar: 'نقاط الامتثال الرئيسية' },
  'policies.compliance.summary.item1': { en: 'Review and accept the Peering Policy before membership', ar: 'مراجعة وقبول سياسة التبادل قبل العضوية' },
  'policies.compliance.summary.item2': { en: 'Maintain compliance with Acceptable Use Policy at all times', ar: 'الحفاظ على الامتثال لسياسة الاستخدام المقبول في جميع الأوقات' },
  'policies.compliance.summary.item3': { en: 'Follow technical guidelines for BGP and routing configuration', ar: 'اتباع الإرشادات التقنية لتكوين BGP والتوجيه' },
  'policies.compliance.summary.item4': { en: 'Stay informed of policy updates via official communications', ar: 'البقاء على اطلاع بتحديثات السياسات عبر الاتصالات الرسمية' },

  // Policies - FAQ
  'policies.faq.badge': { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  'policies.faq.title': { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
  'policies.faq.subtitle': { en: 'Common questions about QIX policies and documentation', ar: 'أسئلة شائعة حول سياسات ووثائق QIX' },
  'policies.faq.q1': { en: 'Which policies must be signed before connecting to QIX?', ar: 'ما هي السياسات التي يجب التوقيع عليها قبل الاتصال بـ QIX؟' },
  'policies.faq.a1': { en: 'All prospective participants must review and acknowledge acceptance of the QIX Peering Policy and Acceptable Use Policy as part of the membership application process. The Technical Guidelines should also be reviewed to ensure your network meets the requirements.', ar: 'يجب على جميع المشاركين المحتملين مراجعة والإقرار بقبول سياسة التبادل في QIX وسياسة الاستخدام المقبول كجزء من عملية طلب العضوية. يجب أيضًا مراجعة الإرشادات التقنية للتأكد من أن شبكتك تستوفي المتطلبات.' },
  'policies.faq.q2': { en: 'How are policy updates communicated to participants?', ar: 'كيف يتم إبلاغ تحديثات السياسات للمشاركين؟' },
  'policies.faq.a2': { en: 'Policy updates are communicated through official email notifications to all registered participants, announcements on the QIX website, and direct communication for significant changes. We recommend subscribing to our mailing list for timely updates.', ar: 'يتم إبلاغ تحديثات السياسات من خلال إشعارات البريد الإلكتروني الرسمية لجميع المشاركين المسجلين والإعلانات على موقع QIX والاتصال المباشر للتغييرات الهامة. نوصي بالاشتراك في قائمتنا البريدية للحصول على التحديثات في الوقت المناسب.' },
  'policies.faq.q3': { en: 'Are documents available in both English and Arabic?', ar: 'هل المستندات متاحة باللغتين الإنجليزية والعربية؟' },
  'policies.faq.a3': { en: 'Most core policy documents are available in both English and Arabic. Some technical reference documents may only be available in English. The language availability is indicated on each document card.', ar: 'معظم وثائق السياسات الأساسية متاحة باللغتين الإنجليزية والعربية. قد تكون بعض الوثائق المرجعية التقنية متاحة باللغة الإنجليزية فقط. يتم الإشارة إلى توفر اللغة على بطاقة كل مستند.' },
  'policies.faq.q4': { en: 'Who should I contact for clarification on policies?', ar: 'بمن يجب أن أتصل لتوضيح السياسات؟' },
  'policies.faq.a4': { en: 'For general policy questions, contact us at info@qix.qa. For technical policy clarifications, reach out to our NOC at noc@qix.qa. We aim to respond to all inquiries within 2-3 business days.', ar: 'للأسئلة العامة حول السياسات، اتصل بنا على info@qix.qa. لتوضيحات السياسات التقنية، تواصل مع NOC لدينا على noc@qix.qa. نهدف للرد على جميع الاستفسارات خلال 2-3 أيام عمل.' },

  // Policies - CTA
  'policies.cta.title': { en: 'Need Help Understanding Our Policies?', ar: 'هل تحتاج مساعدة في فهم سياساتنا؟' },
  'policies.cta.subtitle': { en: 'Our team is ready to clarify any policy questions and guide you through the documentation.', ar: 'فريقنا مستعد لتوضيح أي أسئلة حول السياسات وإرشادك خلال الوثائق.' },
  'policies.cta.contact': { en: 'Contact QIX', ar: 'اتصل بـ QIX' },
  'policies.cta.connect': { en: 'How to Connect', ar: 'كيفية الاتصال' },

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
