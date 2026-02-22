/* * PROJET : e-META LABS
 * FICHIER : i18n.js (Dictionnaire Multilingue Intégral & Alertes)
 */

const translations = {
    fr: {
        subtitle: "EXCELLENCE STRATÉGIQUE & HAUTE PRÉCISION IA",
        btn_reset: "↻ Réinitialiser",
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        ph_company: "ex: Groupe MetaStrat SN...",
        lbl_email: "Email Professionnel",
        ph_email: "contact@domaine.com",
        lbl_phone: "Numéro WhatsApp",
        ph_phone: "+221...",
        btn_next: "Suivant",
        step2_title: "02. Matrice Stratégique",
        lbl_sector: "Secteur Stratégique",
        sec_genai: "GenAI & Robotics",
        sec_green: "Énergies & GreenTech",
        sec_fintech: "FinTech & Banque",
        sec_health: "Santé & BioTech",
        sec_log: "Logistique & Infra",
        sec_mine: "Mines, Pétrole & Gaz",
        sec_btp: "Immobilier & BTP",
        sec_retail: "Commerce & Retail",
        sec_public: "Secteur Public",
        sec_edu: "Éducation & EdTech",
        lbl_geo: "Zone d'Intervention / Statut",
        opt_geo_def: "Sélectionner une zone...",
        opt_dakar: "Sénégal (Dakar Hub)",
        opt_abidjan: "Côte d'Ivoire (Abidjan Hub)",
        opt_lagos: "Nigeria (Lagos)",
        opt_casa: "Maroc (Casablanca)",
        opt_dubai: "UAE (Dubai - Middle East)",
        opt_paris: "France (Europe)",
        opt_global: "Statut International / Global",
        lbl_expertise: "Expertise Requise",
        exp_sov: "Souveraineté IA",
        exp_digital: "Transformation Digitale",
        exp_ma: "M&A & Levée de Fonds",
        exp_ohada: "Conformité OHADA",
        exp_esg: "Ingénierie ESG",
        exp_cyber: "Cybersécurité",
        exp_supply: "Supply Chain & Ops",
        exp_pubaff: "Affaires Publiques",
        btn_prev: "Retour",
        btn_next_matrice: "Suivant",
        step3_title: "03. Analyse & Restitution",
        lbl_context: "Contexte Opérationnel",
        ph_context: "Décrivez vos enjeux stratégiques...",
        lbl_delivery: "Mode de réception souhaité",
        opt_del_wa: "WhatsApp (Recommandé & Rapide)",
        opt_del_email: "Email / Affichage PDF direct",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        optin_whatsapp: "J'accepte de recevoir mon analyse stratégique par <strong style='color:#25D366;'>WhatsApp</strong>.",
        btn_submit: "Lancer l'Analyse IA",
        stats_live: "LIVE INTELLIGENCE",
        stat_ai: "Analyses IA",
        stat_pdf: "PDF Certifiés",
        stat_footer: "Mise à jour :",
        footer_rights: "Tous droits réservés.",
        footer_support: "Support Technique :",
        footer_contact: "Informations :",
        modal_title: "Politique de Confidentialité",
        btn_close: "Fermer",
        loading_text: "Analyse IA en cours...",
        alert_empty: "Veuillez remplir les champs obligatoires (Société, Email, Téléphone) pour continuer.",
        alert_wa: "Veuillez accepter l'Opt-in WhatsApp ou choisir la réception par Email.",
        alert_error: "Erreur réseau. Veuillez réessayer.",
        priv_content: `
            <h4 style="color:#d4af37; margin-top: 15px;">1. Identité & RGPD</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">E-META LABS SASU s'engage à protéger vos données. Les informations collectées servent uniquement à l'analyse stratégique demandée et ne sont jamais revendues.</p>
            <h4 style="color:#d4af37; margin-top: 15px;">2. Restitution & WhatsApp (Meta)</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">Si vous choisissez l'option WhatsApp, vous acceptez de recevoir votre rapport via l'API officielle. Vous pouvez stopper la communication en répondant "STOP" à tout moment.</p>
            <h4 style="color:#d4af37; margin-top: 15px;">3. Hébergement Souverain</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">Infrastructure sécurisée par SSL/TLS 256-bits. Données cryptées de bout en bout.</p>`
    },
    en: {
        subtitle: "STRATEGIC EXCELLENCE & HIGH PRECISION AI",
        btn_reset: "↻ Reset",
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        ph_company: "e.g. MetaStrat Group...",
        lbl_email: "Professional Email",
        ph_email: "contact@domain.com",
        lbl_phone: "WhatsApp Number",
        ph_phone: "+221...",
        btn_next: "Next",
        step2_title: "02. Strategic Matrix",
        lbl_sector: "Strategic Sector",
        sec_genai: "GenAI & Robotics",
        sec_green: "Energy & GreenTech",
        sec_fintech: "FinTech & Banking",
        sec_health: "Health & BioTech",
        sec_log: "Logistics & Infra",
        sec_mine: "Mining, Oil & Gas",
        sec_btp: "Real Estate & Construction",
        sec_retail: "Retail & FMCG",
        sec_public: "Public Sector",
        sec_edu: "Education & EdTech",
        lbl_geo: "Intervention Zone / Status",
        opt_geo_def: "Select a zone...",
        opt_dakar: "Senegal (Dakar Hub)",
        opt_abidjan: "Ivory Coast (Abidjan Hub)",
        opt_lagos: "Nigeria (Lagos)",
        opt_casa: "Morocco (Casablanca)",
        opt_dubai: "UAE (Dubai - Middle East)",
        opt_paris: "France (Europe)",
        opt_global: "International / Global Status",
        lbl_expertise: "Required Expertise",
        exp_sov: "AI Sovereignty",
        exp_digital: "Digital Transformation",
        exp_ma: "M&A & Fundraising",
        exp_ohada: "OHADA Compliance",
        exp_esg: "ESG Engineering",
        exp_cyber: "Cybersecurity",
        exp_supply: "Supply Chain & Ops",
        exp_pubaff: "Public Affairs",
        btn_prev: "Back",
        btn_next_matrice: "Next",
        step3_title: "03. Analysis & Restitution",
        lbl_context: "Operational Context",
        ph_context: "Describe your strategic challenges...",
        lbl_delivery: "Preferred delivery method",
        opt_del_wa: "WhatsApp (Recommended & Fast)",
        opt_del_email: "Email / Direct PDF View",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        optin_whatsapp: "I agree to receive my strategic analysis via <strong style='color:#25D366;'>WhatsApp</strong>.",
        btn_submit: "Launch AI Analysis",
        stats_live: "LIVE INTELLIGENCE",
        stat_ai: "AI Analyses",
        stat_pdf: "Certified PDFs",
        stat_footer: "Last update :",
        footer_rights: "All rights reserved.",
        footer_support: "Technical Support :",
        footer_contact: "Information :",
        modal_title: "Privacy Policy",
        btn_close: "Close",
        loading_text: "AI Analysis in progress...",
        alert_empty: "Please fill in the required fields (Company, Email, Phone) to continue.",
        alert_wa: "Please accept the WhatsApp Opt-in or choose Email delivery.",
        alert_error: "Network error. Please try again.",
        priv_content: `
            <h4 style="color:#d4af37; margin-top: 15px;">1. Identity & GDPR</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">E-META LABS SASU is committed to protecting your data. Information collected is used solely for strategic analysis and is never sold.</p>
            <h4 style="color:#d4af37; margin-top: 15px;">2. Delivery & WhatsApp (Meta)</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">If you select WhatsApp, you agree to receive your report via the official API. You can stop communication by replying "STOP" at any time.</p>
            <h4 style="color:#d4af37; margin-top: 15px;">3. Sovereign Hosting</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">Infrastructure secured by 256-bit SSL/TLS. End-to-end encrypted data.</p>`
    },
    es: {
        subtitle: "EXCELENCIA ESTRATÉGICA Y ALTA PRECISIÓN IA",
        btn_reset: "↻ Reiniciar",
        step1_title: "01. Identificación",
        lbl_company: "Empresa / Entidad",
        ph_company: "ej: Grupo MetaStrat...",
        lbl_email: "Correo Profesional",
        ph_email: "contacto@dominio.com",
        lbl_phone: "Número de WhatsApp",
        ph_phone: "+221...",
        btn_next: "Siguiente",
        step2_title: "02. Matriz Estratégica",
        lbl_sector: "Sector Estratégico",
        sec_genai: "GenAI & Robótica",
        sec_green: "Energía & GreenTech",
        sec_fintech: "FinTech & Banca",
        sec_health: "Salud & BioTech",
        sec_log: "Logística & Infraestructura",
        sec_mine: "Minería, Petróleo & Gas",
        sec_btp: "Inmobiliaria & Construcción",
        sec_retail: "Comercio & Retail",
        sec_public: "Sector Público",
        sec_edu: "Educación & EdTech",
        lbl_geo: "Zona de Intervención / Estado",
        opt_geo_def: "Seleccione una zona...",
        opt_dakar: "Senegal (Dakar Hub)",
        opt_abidjan: "Costa de Marfil (Abidjan Hub)",
        opt_lagos: "Nigeria (Lagos)",
        opt_casa: "Marruecos (Casablanca)",
        opt_dubai: "EAU (Dubai - Middle East)",
        opt_paris: "Francia (Europa)",
        opt_global: "Estado Internacional / Global",
        lbl_expertise: "Experiencia Requerida",
        exp_sov: "Soberanía IA",
        exp_digital: "Transformación Digital",
        exp_ma: "M&A & Recaudación",
        exp_ohada: "Cumplimiento OHADA",
        exp_esg: "Ingeniería ESG",
        exp_cyber: "Ciberseguridad",
        exp_supply: "Cadena de Suministro",
        exp_pubaff: "Asuntos Públicos",
        btn_prev: "Atrás",
        btn_next_matrice: "Siguiente",
        step3_title: "03. Análisis y Restitución",
        lbl_context: "Contexto Operacional",
        ph_context: "Describa sus desafíos estratégicos...",
        lbl_delivery: "Método de entrega preferido",
        opt_del_wa: "WhatsApp (Recomendado y Rápido)",
        opt_del_email: "Email / Vista PDF directa",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad",
        optin_whatsapp: "Acepto recibir mi análisis estratégico por <strong style='color:#25D366;'>WhatsApp</strong>.",
        btn_submit: "Iniciar Análisis IA",
        stats_live: "INTELIGENCIA EN VIVO",
        stat_ai: "Análisis IA",
        stat_pdf: "PDF Certificados",
        stat_footer: "Última actualización :",
        footer_rights: "Todos los derechos reservados.",
        footer_support: "Soporte Técnico :",
        footer_contact: "Información :",
        modal_title: "Política de Privacidad",
        btn_close: "Cerrar",
        loading_text: "Análisis IA en curso...",
        alert_empty: "Por favor, complete los campos obligatorios (Empresa, Email, Teléfono) para continuar.",
        alert_wa: "Acepte el Opt-in de WhatsApp o elija la entrega por Email.",
        alert_error: "Error de red. Inténtalo de nuevo.",
        priv_content: `
            <h4 style="color:#d4af37; margin-top: 15px;">1. Identidad y RGPD</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">E-META LABS SASU se compromete a proteger sus datos. La información se utiliza únicamente para el análisis y nunca se vende.</p>
            <h4 style="color:#d4af37; margin-top: 15px;">2. Entrega y WhatsApp (Meta)</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">Si elige WhatsApp, acepta recibir su informe a través de la API oficial. Puede detener la comunicación respondiendo "STOP".</p>
            <h4 style="color:#d4af37; margin-top: 15px;">3. Alojamiento Soberano</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">Infraestructura asegurada por SSL/TLS de 256 bits. Datos encriptados de extremo a extremo.</p>`
    },
    ar: {
        subtitle: "التميز الاستراتيجي والذكاء الاصطناعي عالي الدقة",
        btn_reset: "↻ إعادة ضبط",
        step1_title: "01. تحديد الهوية",
        lbl_company: "الشركة / الكيان",
        ph_company: "مثال: مجموعة ميتا سترات...",
        lbl_email: "البريد المهني",
        ph_email: "contact@domain.com",
        lbl_phone: "رقم واتساب",
        ph_phone: "+221...",
        btn_next: "التالي",
        step2_title: "02. المصفوفة الاستراتيجية",
        lbl_sector: "القطاع الاستراتيجي",
        sec_genai: "الذكاء الاصطناعي والروبوتات",
        sec_green: "الطاقة والتكنولوجيا الخضراء",
        sec_fintech: "التكنولوجيا المالية والبنوك",
        sec_health: "الصحة والتكنولوجيا الحيوية",
        sec_log: "الخدمات اللوجستية والبنية التحتية",
        sec_mine: "التعدين والنفط والغاز",
        sec_btp: "العقارات والبناء",
        sec_retail: "التجارة والتجزئة",
        sec_public: "القطاع العام",
        sec_edu: "التعليم وتكنولوجيا التعليم",
        lbl_geo: "منطقة التدخل / الحالة",
        opt_geo_def: "اختر منطقة...",
        opt_dakar: "السنغال (محور داكار)",
        opt_abidjan: "ساحل العاج (محور أبيدجان)",
        opt_lagos: "نيجيريا (لاغوس)",
        opt_casa: "المغرب (الدار البيضاء)",
        opt_dubai: "الإمارات (دبي)",
        opt_paris: "فرنسا (أوروبا)",
        opt_global: "الوضع الدولي / العالمي",
        lbl_expertise: "الخبرة المطلوبة",
        exp_sov: "سيادة الذكاء الاصطناعي",
        exp_digital: "التحول الرقمي",
        exp_ma: "الاندماج والاستحواذ",
        exp_ohada: "الامتثال لقانون أوهادا",
        exp_esg: "هندسة الحوكمة البيئية",
        exp_cyber: "الأمن السيبراني",
        exp_supply: "سلسلة التوريد",
        exp_pubaff: "الشؤون العامة",
        btn_prev: "رجوع",
        btn_next_matrice: "التالي",
        step3_title: "03. التحليل والاسترداد",
        lbl_context: "السياق التشغيلي",
        ph_context: "صف التحديات الاستراتيجية الخاصة بك...",
        lbl_delivery: "طريقة الاستلام المفضلة",
        opt_del_wa: "واتساب (موصى به وسريع)",
        opt_del_email: "البريد الإلكتروني / عرض PDF",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية",
        optin_whatsapp: "أوافق على تلقي تحليلي الاستراتيجي عبر <strong style='color:#25D366;'>واتساب</strong>.",
        btn_submit: "بدء تحليل الذكاء الاصطناعي",
        stats_live: "الذكاء المباشر",
        stat_ai: "تحليلات الذكاء الاصطناعي",
        stat_pdf: "ملفات PDF المعتمدة",
        stat_footer: "آخر تحديث :",
        footer_rights: "كل الحقوق محفوظة.",
        footer_support: "الدعم الفني :",
        footer_contact: "معلومات :",
        modal_title: "سياسة الخصوصية",
        btn_close: "إغلاق",
        loading_text: "جاري تحليل الذكاء الاصطناعي...",
        alert_empty: "يرجى ملء الحقول المطلوبة (الشركة، البريد، الهاتف) للمتابعة.",
        alert_wa: "يرجى قبول خيار واتساب أو اختيار الاستلام عبر البريد الإلكتروني.",
        alert_error: "خطأ في الشبكة. يرجى المحاولة مرة أخرى.",
        priv_content: `
            <h4 style="color:#d4af37; margin-top: 15px;">1. الهوية وحماية البيانات</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">تلتزم E-META LABS بحماية بياناتك. تُستخدم المعلومات فقط للتحليل ولا تُباع أبدًا.</p>
            <h4 style="color:#d4af37; margin-top: 15px;">2. واتساب والتسليم</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">إذا اخترت واتساب، فأنت توافق على تلقي التقرير عبر واجهة برمجة التطبيقات الرسمية. يمكنك إيقاف التواصل بالرد بكلمة "STOP".</p>
            <h4 style="color:#d4af37; margin-top: 15px;">3. الاستضافة السيادية</h4>
            <p style="font-size:0.9rem; line-height: 1.6; color: #e6f1ff;">بنية تحتية آمنة ببيانات مشفرة بالكامل.</p>`
    }
};

window.changeLanguage = function(lang) {
    document.documentElement.lang = lang;
    
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }

    // Traduction des textes HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Traduction des Placeholders
    const mapPlaceholders = {
        'company': 'ph_company',
        'email': 'ph_email',
        'phone': 'ph_phone',
        'context': 'ph_context'
    };
    for (const [id, key] of Object.entries(mapPlaceholders)) {
        const input = document.getElementById(id);
        if (input && translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    }

    // Gestion visuelle des boutons
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    window.changeLanguage('fr');
});
