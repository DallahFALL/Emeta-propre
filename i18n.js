/* * FICHIER : i18n.js 
 * PROJET : e-META LABS — Master SN-2026
 * DESCRIPTION : Traduction intégrale (4 langues) avec gestion dynamique de la souveraineté.
 */

const translations = {
    fr: {
        subtitle: "Excellence Stratégique & Haute Précision IA",
        btn_reset: "Réinitialiser",
        ai_calculating: "Intelligence Stratégique en Cours...",
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        lbl_email: "Email Professionnel",
        lbl_phone: "Numéro WhatsApp",
        btn_next: "Suivant",
        ph_company: "ex: Groupe MetaStrat SN...",
        ph_email: "contact@domaine.com",
        ph_phone: "+221...",
        step2_title: "02. Matrice Stratégique",
        lbl_sector: "Secteur d'Activité",
        sec_genai: "GenAI & Robotics",
        sec_fintech: "FinTech & DeFi",
        sec_green: "GreenTech & Énergie",
        sec_mine: "Mines & Hydrocarbures",
        sec_agri: "AgriTech & FoodSec",
        sec_health: "Santé & BioTech",
        sec_infra: "Smart Infra & Logistique",
        sec_gov: "GovTech & Public",
        sec_immo: "Immo & Smart City",
        sec_edu: "EduTech & Savoir",
        lbl_geo: "Hub Stratégique",
        opt_geo_def: "-- Sélectionner une zone --",
        grp_africa: "Afrique / MENA",
        grp_intl: "International",
        opt_dakar: "Dakar Hub (Sénégal)",
        opt_casa: "Casablanca Finance City",
        opt_dubai: "Dubai (Middle East)",
        opt_lagos: "Lagos Hub",
        opt_nairobi: "Nairobi (Silicon Savannah)",
        opt_paris: "Paris (Europe)",
        opt_usa: "Silicon Valley / NY",
        opt_singapore: "Singapour (Asia)",
        opt_global: "Global / Multi-sites",
        lbl_expertise: "Expertises Requises",
        exp_sov: "IA Souveraine",
        exp_cyber: "Cybersécurité",
        exp_ma: "M&A / Levée",
        exp_legal: "Légal / OHADA",
        exp_digital: "Transfo. Digitale",
        exp_esg: "ESG & Impact",
        exp_lobby: "Affaires Publiques",
        exp_supply: "Supply Chain",
        btn_prev: "Retour",
        btn_next_matrice: "Suivant",
        step3_title: "03. Analyse & Restitution",
        lbl_context: "Contexte Opérationnel",
        ph_context: "Décrivez vos enjeux stratégiques (marché, conformité, crise)...",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        btn_submit: "Lancer l'Analyse IA",
        stats_live: "Live Intelligence",
        stat_ai: "Analyses IA",
        stat_pdf: "PDF Certifiés",
        lbl_support: "Support Technique :",
        lbl_commercial: "Informations :",
        footer_unit: "Strategic Intelligence Unit • Dakar - Paris - Dubai",
        footer_rights: "Tous droits réservés.",
        modal_title: "Politique de Confidentialité & Souveraineté",
        btn_close: "Fermer",
        result_title: "Diagnostic Stratégique",
        btn_pdf: "TÉLÉCHARGER PDF",
        btn_new: "NOUVELLE ANALYSE",
        priv_content: `
            <div class="privacy-block">
                <h4>1. Souveraineté des Données</h4>
                <p>e-META LABS garantit que vos données stratégiques ne sont <strong>jamais revendues</strong> ni exploitées par des tiers.</p>
                <h4>2. Intelligence Souveraine Partagée</h4>
                <p>Vos problématiques ne servent pas à l'entraînement de modèles d'IA publics. Le traitement est isolé, sécurisé et éphémère.</p>
                <h4>3. Certification Blockchain</h4>
                <p>Chaque diagnostic fait l'objet d'un ancrage cryptographique garantissant l'intégrité et l'antériorité de vos analyses.</p>
                <h4>4. Contact Unité de Support</h4>
                <p>Pour toute question : <strong>support@e-metalabs.com</strong></p>
            </div>`
    },
    en: {
        subtitle: "Strategic Excellence & High Precision AI",
        btn_reset: "Reset",
        ai_calculating: "Strategic Analysis in Progress...",
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        lbl_email: "Professional Email",
        lbl_phone: "WhatsApp Number",
        btn_next: "Next",
        ph_company: "e.g. MetaStrat Group...",
        ph_email: "contact@domain.com",
        ph_phone: "+221...",
        step2_title: "02. Strategic Matrix",
        lbl_sector: "Industry Sector",
        sec_genai: "GenAI & Robotics",
        sec_fintech: "FinTech & DeFi",
        sec_green: "GreenTech & Energy",
        sec_mine: "Mining & Oil/Gas",
        sec_agri: "AgriTech & FoodSec",
        sec_health: "Health & BioTech",
        sec_infra: "Smart Infra & Logistics",
        sec_gov: "GovTech & Public",
        sec_immo: "Real Estate & Smart City",
        sec_edu: "EduTech & Knowledge",
        lbl_geo: "Strategic Hub",
        opt_geo_def: "-- Select a zone --",
        grp_africa: "Africa / MENA",
        grp_intl: "International",
        opt_dakar: "Dakar Hub (Senegal)",
        opt_casa: "Casablanca Finance City",
        opt_dubai: "Dubai (Middle East)",
        opt_lagos: "Lagos Hub",
        opt_nairobi: "Nairobi (Silicon Savannah)",
        opt_paris: "Paris (Europe)",
        opt_usa: "Silicon Valley / NY",
        opt_singapore: "Singapore (Asia)",
        opt_global: "Global / Multi-sites",
        lbl_expertise: "Required Expertise",
        exp_sov: "Sovereign AI",
        exp_cyber: "Cybersecurity",
        exp_ma: "M&A / Fundraising",
        exp_legal: "Legal / OHADA",
        exp_digital: "Digital Transfo.",
        exp_esg: "ESG & Impact",
        exp_lobby: "Public Affairs",
        exp_supply: "Supply Chain",
        btn_prev: "Back",
        btn_next_matrice: "Next",
        step3_title: "03. Analysis & Output",
        lbl_context: "Operational Context",
        ph_context: "Describe your strategic challenges (market, compliance, crisis)...",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        btn_submit: "Launch AI Analysis",
        stats_live: "Live Intelligence",
        stat_ai: "AI Analyses",
        stat_pdf: "Certified PDFs",
        lbl_support: "Tech Support:",
        lbl_commercial: "Inquiries:",
        footer_unit: "Strategic Intelligence Unit • Dakar - Paris - Dubai",
        footer_rights: "All rights reserved.",
        modal_title: "Privacy & Data Sovereignty",
        btn_close: "Close",
        result_title: "Strategic Diagnostic",
        btn_pdf: "DOWNLOAD PDF",
        btn_new: "NEW ANALYSIS",
        priv_content: `
            <div class="privacy-block">
                <h4>1. Data Sovereignty</h4>
                <p>e-META LABS ensures your strategic data is <strong>never sold</strong> or exploited by third parties.</p>
                <h4>2. Sovereign Shared Intelligence</h4>
                <p>Your inputs are not used to train public AI models. Processing is isolated, secure, and transient.</p>
                <h4>3. Blockchain Certification</h4>
                <p>Every diagnostic is cryptographically anchored to ensure the integrity of your strategic analysis.</p>
                <h4>4. Support Unit Contact</h4>
                <p>Questions? <strong>support@e-metalabs.com</strong></p>
            </div>`
    },
    es: {
        subtitle: "Excelencia Estratégica e IA de Alta Precisión",
        btn_reset: "Reiniciar",
        ai_calculating: "Análisis Estratégico en Curso...",
        step1_title: "01. Identificación",
        lbl_company: "Empresa / Entidad",
        lbl_email: "Correo Profesional",
        lbl_phone: "Número WhatsApp",
        btn_next: "Siguiente",
        ph_company: "ej: Grupo MetaStrat...",
        ph_email: "contacto@dominio.com",
        ph_phone: "+221...",
        step2_title: "02. Matriz Estratégica",
        lbl_sector: "Sector de Actividad",
        sec_genai: "GenAI y Robótica",
        sec_fintech: "FinTech y DeFi",
        sec_green: "GreenTech y Energía",
        sec_mine: "Minería e Hidrocarburos",
        sec_agri: "AgriTech y Alimentación",
        sec_health: "Salud y BioTech",
        sec_infra: "Smart Infra y Logística",
        sec_gov: "GovTech y Público",
        sec_immo: "Inmobiliaria y Smart City",
        sec_edu: "EduTech y Conocimiento",
        lbl_geo: "Hub Estratégico",
        opt_geo_def: "-- Seleccionar zona --",
        grp_africa: "África / MENA",
        grp_intl: "Internacional",
        opt_dakar: "Dakar Hub (Senegal)",
        opt_casa: "Casablanca Finance City",
        opt_dubai: "Dubai (Middle East)",
        lbl_expertise: "Experiencia Requerida",
        exp_sov: "IA Soberana",
        exp_cyber: "Ciberseguridad",
        exp_ma: "M&A / Inversión",
        exp_legal: "Legal / OHADA",
        exp_digital: "Transf. Digital",
        exp_esg: "ESG e Impacto",
        exp_lobby: "Asuntos Públicos",
        exp_supply: "Supply Chain",
        btn_prev: "Atrás",
        btn_next_matrice: "Siguiente",
        step3_title: "03. Análisis y Resultado",
        lbl_context: "Contexto Operativo",
        ph_context: "Describa sus desafíos estratégicos...",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad",
        btn_submit: "Iniciar Análisis IA",
        stats_live: "Inteligencia en Vivo",
        stat_ai: "Análisis IA",
        stat_pdf: "PDF Certificados",
        lbl_support: "Soporte Técnico:",
        lbl_commercial: "Información:",
        footer_unit: "Unidad de Inteligencia • Dakar - París - Dubái",
        footer_rights: "Todos los derechos reservados.",
        modal_title: "Privacidad y Soberanía de Datos",
        btn_close: "Cerrar",
        result_title: "Diagnóstico Estratégico",
        btn_pdf: "DESCARGAR PDF",
        btn_new: "NUEVO ANÁLISIS",
        priv_content: `
            priv_content: `
    <div class="privacy-block">
        <h4>1. Soberanía de Datos</h4>
        <p>e-META LABS garantiza que sus datos estratégicos <strong>nunca se venden</strong>.</p>
        <h4>2. Inteligencia Soberana Compartida</h4>
        <p>Sus datos no se utilizan para entrenar modelos de IA públicos. El procesamiento es aislado y seguro.</p>
        <h4>3. Certificación Blockchain</h4>
        <p>Informes anclados mediante protocolo Woleet para garantizar la integridad.</p>
        <h4>4. Contacto Unidad de Soporte</h4>
        <p>Para cualquier duda: <strong>support@e-metalabs.com</strong></p>
    </div>`
    },
   ar: {
        subtitle: "التميز الاستراتيجي والذكاء الاصطناعي عالي الدقة",
        btn_reset: "إعادة تعيين",
        ai_calculating: "جارٍ التحليل الاستراتيجي...",
        
        // ÉTAPE 1
        step1_title: "01. الهوية",
        lbl_company: "الشركة / الكيان",
        lbl_email: "البريد الإلكتروني المهني",
        lbl_phone: "رقم الواتساب",
        btn_next: "التالي",
        ph_company: "مثال: مجموعة ميتا سترات...",
        ph_email: "contact@domain.com",
        ph_phone: "+221...",
        
        // ÉTAPE 2
        step2_title: "02. المصفوفة الاستراتيجية",
        lbl_sector: "قطاع النشاط",
        sec_genai: "الذكاء الاصطناعي التوليدي والروبوتات",
        sec_fintech: "التكنولوجيا المالية",
        sec_green: "التكنولوجيا الخضراء والطاقة",
        sec_mine: "المعادن والمحروقات",
        sec_agri: "التكنولوجيا الزراعية",
        sec_health: "الصحة والتكنولوجيا الحيوية",
        sec_infra: "البنية التحتية الذكية",
        sec_gov: "التكنولوجيا الحكومية",
        sec_immo: "العقارات والمدن الذكية",
        sec_edu: "تكنولوجيا التعليم",
        
        // HUB GÉOGRAPHIQUE (CORRIGÉ & COMPLET)
        lbl_geo: "المحور الاستراتيجي",
        opt_geo_def: "-- اختر المنطقة --",
        grp_africa: "أفريقيا / الشرق الأوسط",
        opt_dakar: "محور داكار (السنغال)",
        opt_casa: "الدار البيضاء (قطب مالي)",
        opt_dubai: "دبي (الشرق الأوسط)",
        opt_lagos: "محور لاغوس (نيجيريا)",
        opt_nairobi: "نيروبي (سافانا السيليكون)",
        
        grp_intl: "دولي",
        opt_paris: "باريس (أوروبا)",
        opt_usa: "وادي السيليكون / نيويورك",
        opt_singapore: "سنغافورة (آسيا)",
        opt_global: "عالمي / مواقع متعددة",
        
        lbl_expertise: "الخبرات المطلوبة",
        exp_sov: "الذكاء الاصطناعي السيادي",
        exp_cyber: "الأمن السيبراني",
        exp_ma: "الاندماج والاستحواذ",
        exp_legal: "قانوني / OHADA",
        exp_digital: "التحول الرقمي",
        exp_esg: "الحوكمة والبيئة",
        exp_lobby: "الشؤون العامة",
        exp_supply: "سلاسل التوريد",
        
        btn_prev: "رجوع",
        btn_next_matrice: "التالي",
        
        // ÉTAPE 3
        step3_title: "03. التحليل والنتائج",
        lbl_context: "السياق العملياتي",
        ph_context: "صف تحدياتك الاستراتيجية...",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية",
        btn_submit: "بدء تحليل الذكاء الاصطناعي",
        
        // STATS & FOOTER
        stats_live: "ذكاء مباشر",
        stat_ai: "تحليلات الذكاء الاصطناعي",
        stat_pdf: "ملفات PDF معتمدة",
        lbl_support: "الدعم الفني:",
        lbl_commercial: "المعلومات:",
        footer_unit: "وحدة الاستخبارات الاستراتيجية • داكار - باريس - دبي",
        footer_rights: "جميع الحقوق محفوظة.",
        
        // MODALS
        modal_title: "سياسة الخصوصية وسيادة البيانات",
        btn_close: "إغلاق",
        result_title: "التشخيص الاستراتيجي",
        btn_pdf: "تحميل PDF",
        btn_new: "تحليل جديد",
        
        priv_content: `
            <div class="privacy-block">
              priv_content: `
    <div class="privacy-block">
        <h4>1. سيادة البيانات</h4>
        <p>تضمن e-META LABS <strong>عدم بيع</strong> بياناتكم الاستراتيجية أبدًا.</p>
        <h4>2. الذكاء السيادي المشترك</h4>
        <p>لا تُستخدم مدخلاتكم لتدريب نماذج الذكاء الاصطناعي العامة. المعالجة معزولة وآمنة.</p>
        <h4>3. توثيق البلوكشين</h4>
        <p>كل تشخيص موثق لضمان سلامة تحليلاتكم.</p>
        <h4>4. الاتصال بوحدة الدعم</h4>
        <p>لأي استفسار: <strong>support@e-metalabs.com</strong></p>
    </div>`  
    }
};

/* --- LOGIQUE DU MOTEUR DE TRADUCTION --- */

window.setLanguage = function(lang) {
    // 1. Mise à jour des attributs HTML
    document.documentElement.lang = lang;
    document.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // 2. Gestion visuelle des boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    // 3. Traduction des éléments avec l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Utilisation de innerHTML pour le contenu de la modal (politique)
            if (key === 'priv_content') {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // 4. Traduction des étiquettes de groupes (Optgroups)
    document.querySelectorAll('[data-i18n-label]').forEach(element => {
        const key = element.getAttribute('data-i18n-label');
        if (translations[lang] && translations[lang][key]) {
            element.label = translations[lang][key];
        }
    });

    // 5. Mise à jour des Placeholders des champs
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
    
    // 6. Sauvegarde de la préférence (optionnel)
    localStorage.setItem('preferredLang', lang);
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    window.setLanguage(savedLang);
});
