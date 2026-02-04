/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : i18n.js
 * OBJECTIF : Gestionnaire de traduction (FR/EN/ES/AR) + Support RTL
 */

const translations = {
    fr: {
        // STEP 1
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        ph_company: "ex: Groupe Alpha...",
        lbl_email: "Email Professionnel",
        ph_email: "contact@domaine.com",
        
        // STEP 2
        step2_title: "02. Matrice Stratégique",
        lbl_sector: "Secteur Clé",
        sec_green: "Énergies Vertes",
        sec_blue: "Blue Economy",
        sec_health: "HealthTech",
        sec_agro: "Agrobusiness",
        sec_log: "Logistique",
        
        // NOUVEAU : GEO
        lbl_geo: "Zone d'Intervention",
        opt_geo_def: "Sélectionner une zone cible...",

        lbl_expertise: "Expertise Requise",
        exp_sov: "Souveraineté IA",
        exp_esg: "Ingénierie ESG",
        exp_ma: "M&A",
        exp_ohada: "Optimisation OHADA",
        exp_cyber: "Crise Cyber",
        
        // STEP 3
        step3_title: "03. Analyse & Envoi",
        lbl_context: "Contexte Opérationnel",
        ph_context: "Décrivez vos enjeux stratégiques (ex: entrée marché, conformité, crise...)",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        btn_submit: "Lancer l'Analyse IA",
        
        // NAV
        btn_next: "Suivant",
        btn_prev: "Retour",
        
        // FOOTER
        footer_rights: "Tous droits réservés.",
        modal_title: "Politique de Confidentialité & RGPD",
        modal_text_1: "Les données collectées via le Master Diagnostic Form sont strictement confidentielles.",
        modal_text_2: "e-META LABS s'engage à une protection 'Zéro Défaut' de vos informations stratégiques.",
        btn_close: "Fermer"
    },
    en: {
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        ph_company: "ex: Alpha Group...",
        lbl_email: "Business Email",
        ph_email: "contact@domain.com",
        
        step2_title: "02. Strategic Matrix",
        lbl_sector: "Key Sector",
        sec_green: "Green Energy",
        sec_blue: "Blue Economy",
        sec_health: "HealthTech",
        sec_agro: "Agrobusiness",
        sec_log: "Logistics",
        
        lbl_geo: "Target Geography",
        opt_geo_def: "Select target zone...",

        lbl_expertise: "Required Expertise",
        exp_sov: "AI Sovereignty",
        exp_esg: "ESG Engineering",
        exp_ma: "M&A",
        exp_ohada: "OHADA Optimization",
        exp_cyber: "Cyber Crisis",
        
        step3_title: "03. Analysis & Submit",
        lbl_context: "Operational Context",
        ph_context: "Describe your strategic challenges...",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        btn_submit: "Launch AI Analysis",
        
        btn_next: "Next",
        btn_prev: "Back",
        
        footer_rights: "All Rights Reserved.",
        modal_title: "Privacy Policy & GDPR",
        modal_text_1: "Data collected is strictly confidential.",
        modal_text_2: "e-META LABS is committed to 'Zero Defect' protection.",
        btn_close: "Close"
    },
    es: {
        step1_title: "01. Identificación",
        lbl_company: "Empresa / Entidad",
        ph_company: "ej: Grupo Alpha...",
        lbl_email: "Correo Corporativo",
        ph_email: "contacto@dominio.com",
        
        step2_title: "02. Matriz Estratégica",
        lbl_sector: "Sector Clave",
        sec_green: "Energías Verdes",
        sec_blue: "Economía Azul",
        sec_health: "HealthTech",
        sec_agro: "Agrobusiness",
        sec_log: "Logística",
        
        lbl_geo: "Zona de Intervención",
        opt_geo_def: "Seleccionar zona...",

        lbl_expertise: "Experiencia Requerida",
        exp_sov: "Soberanía IA",
        exp_esg: "Ingeniería ESG",
        exp_ma: "Fusiones y Adquisiciones",
        exp_ohada: "Optimización OHADA",
        exp_cyber: "Crisis Cibernética",
        
        step3_title: "03. Análisis y Envío",
        lbl_context: "Contexto Operativo",
        ph_context: "Describa sus desafíos estratégicos...",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad",
        btn_submit: "Iniciar Análisis IA",
        
        btn_next: "Siguiente",
        btn_prev: "Atrás",
        
        footer_rights: "Todos los derechos reservados.",
        modal_title: "Política de Privacidad y RGPD",
        modal_text_1: "Los datos recopilados son confidenciales.",
        modal_text_2: "e-META LABS se compromete a una protección total.",
        btn_close: "Cerrar"
    },
    ar: {
        step1_title: "01. الهوية",
        lbl_company: "الشركة / الهيئة",
        ph_company: "مثال: مجموعة ألفا...",
        lbl_email: "البريد المهني",
        ph_email: "contact@domain.com",
        
        step2_title: "02. المصفوفة الاستراتيجية",
        lbl_sector: "القطاع الرئيسي",
        sec_green: "الطاقة الخضراء",
        sec_blue: "الاقتصاد الأزرق",
        sec_health: "التكنولوجيا الصحية",
        sec_agro: "الأعمال الزراعية",
        sec_log: "اللوجستيات",
        
        lbl_geo: "منطقة التدخل",
        opt_geo_def: "...اختر المنطقة",

        lbl_expertise: "الخبرة المطلوبة",
        exp_sov: "سيادة الذكاء الاصطناعي",
        exp_esg: "هندسة ESG",
        exp_ma: "الاندماج والاستحواذ",
        exp_ohada: "تحسين OHADA",
        exp_cyber: "الأزمات السيبرانية",
        
        step3_title: "03. التحليل والإرسال",
        lbl_context: "السياق التشغيلي",
        ph_context: "صف التحديات الاستراتيجية الخاصة بك...",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية",
        btn_submit: "بدء تحليل الذكاء الاصطناعي",
        
        btn_next: "التالي",
        btn_prev: "سابق",
        
        footer_rights: "جميع الحقوق محفوظة.",
        modal_title: "سياسة الخصوصية وحماية البيانات",
        modal_text_1: "البيانات التي تم جمعها سرية للغاية.",
        modal_text_2: "تلتزم e-META LABS بحماية معلوماتك الاستراتيجية.",
        btn_close: "إغلاق"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-switch button');
    setLanguage('fr');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

function setLanguage(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.style.textAlign = 'right';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.style.textAlign = 'left';
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    updatePlaceholder('company', translations[lang].ph_company);
    updatePlaceholder('email', translations[lang].ph_email);
    updatePlaceholder('context', translations[lang].ph_context);
}

function updatePlaceholder(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.placeholder = text;
    }
}
