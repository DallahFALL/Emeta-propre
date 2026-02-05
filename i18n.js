/* 
 * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : i18n.js (Version MASTER - Zéro Défaut)
 * OBJECTIF : Gestionnaire de traduction complet (FR/EN/ES/AR)
 */

const translations = {
    fr: {
        // --- GENERAL & HEADER ---
        subtitle: "L'Excellence Stratégique & Souveraineté IA",
        btn_reset: "↻ Réinitialiser",
        msg_reset_confirm: "Voulez-vous vraiment effacer le formulaire et recommencer ?",
        
        // --- STEP 1 : IDENTIFICATION ---
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        ph_company: "ex: Groupe Alpha...",
        lbl_email: "Email Professionnel",
        ph_email: "contact@domaine.com",
        
        // --- STEP 2 : SECTEURS & MATRICE ---
        step2_title: "02. Matrice Stratégique",
        lbl_sector: "Secteur Stratégique",
        
        // Liste des Secteurs (Global Trends 2026)
        sec_genai: "GenAI & Robotics",
        sec_green: "Énergies & GreenTech",
        sec_fintech: "Banque, Finance & Fintech",
        sec_health: "Santé, BioTech & Pharma",
        sec_log: "Logistique & Infrastructures",
        sec_mine: "Mines, Pétrole & Gaz",
        sec_btp: "Immobilier & BTP",
        sec_retail: "Commerce & Grande Distribution",
        sec_public: "Secteur Public & Gouvernement",
        sec_edu: "Éducation & EdTech",

        // Zone Géographique
        lbl_geo: "Zone d'Intervention",
        opt_geo_def: "Sélectionner une zone...",
        
        // Expertises (Liste Enrichie)
        lbl_expertise: "Expertise Requise",
        exp_sov: "Souveraineté IA",
        exp_digital: "Transformation Digitale",
        exp_ma: "M&A & Levée de Fonds",
        exp_ohada: "Conformité OHADA / Tax",
        exp_esg: "Ingénierie ESG & RSE",
        exp_cyber: "Cybersécurité & Risques",
        exp_supply: "Supply Chain & Ops",
        exp_pubaff: "Affaires Publiques & Lobbying",

        // Navigation Spécifique
        btn_prev: "Retour",
        btn_next_matrice: "Ouvrir Matrice Analyse", // CORRECTION IMPORTANTE
        
        // --- STEP 3 : ANALYSE ---
        step3_title: "03. Matrice Analyse & Restitution", // CORRECTION IMPORTANTE
        lbl_context: "Contexte Opérationnel",
        ph_context: "Décrivez vos enjeux stratégiques (ex: entrée marché, conformité, crise...)",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        btn_submit: "Lancer l'Analyse IA",
        
        // --- FOOTER & MODALS ---
        footer_rights: "Tous droits réservés.",
        modal_title: "Politique de Confidentialité",
        btn_close: "Fermer"
    },
    en: {
        subtitle: "Strategic Excellence & AI Sovereignty",
        btn_reset: "↻ Reset",
        msg_reset_confirm: "Do you really want to clear the form and restart?",
        
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        ph_company: "ex: Alpha Group...",
        lbl_email: "Business Email",
        ph_email: "contact@domain.com",
        
        step2_title: "02. Strategic Matrix",
        lbl_sector: "Key Sector",
        
        sec_genai: "GenAI & Robotics",
        sec_green: "Energy & GreenTech",
        sec_fintech: "Banking, Finance & Fintech",
        sec_health: "Health, BioTech & Pharma",
        sec_log: "Logistics & Infrastructure",
        sec_mine: "Mining, Oil & Gas",
        sec_btp: "Real Estate & Construction",
        sec_retail: "Retail & Consumer Goods",
        sec_public: "Public Sector & Gov",
        sec_edu: "Education & EdTech",

        lbl_geo: "Target Geography",
        opt_geo_def: "Select target zone...",
        
        lbl_expertise: "Required Expertise",
        exp_sov: "AI Sovereignty",
        exp_digital: "Digital Transformation",
        exp_ma: "M&A & Fundraising",
        exp_ohada: "Legal OHADA / Tax",
        exp_esg: "ESG & CSR Engineering",
        exp_cyber: "Cybersecurity & Risk",
        exp_supply: "Supply Chain & Ops",
        exp_pubaff: "Public Affairs & Lobbying",

        btn_prev: "Back",
        btn_next_matrice: "Open Analysis Matrix",
        
        step3_title: "03. Analysis Matrix & Restitution",
        lbl_context: "Operational Context",
        ph_context: "Describe your strategic challenges...",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        btn_submit: "Launch AI Analysis",
        
        footer_rights: "All Rights Reserved.",
        modal_title: "Privacy Policy",
        btn_close: "Close"
    },
    es: {
        subtitle: "Excelencia Estratégica y Soberanía IA",
        btn_reset: "↻ Reiniciar",
        msg_reset_confirm: "¿Realmente desea borrar el formulario y reiniciar?",
        
        step1_title: "01. Identificación",
        lbl_company: "Empresa / Entidad",
        ph_company: "ej: Grupo Alpha...",
        lbl_email: "Correo Corporativo",
        ph_email: "contacto@dominio.com",
        
        step2_title: "02. Matriz Estratégica",
        lbl_sector: "Sector Clave",
        
        sec_genai: "GenAI y Robótica",
        sec_green: "Energía y GreenTech",
        sec_fintech: "Banca, Finanzas y Fintech",
        sec_health: "Salud y BioTech",
        sec_log: "Logística e Infraestructura",
        sec_mine: "Minería, Petróleo y Gas",
        sec_btp: "Inmobiliaria y Construcción",
        sec_retail: "Comercio y Retail",
        sec_public: "Sector Público y Gobierno",
        sec_edu: "Educación y EdTech",

        lbl_geo: "Zona de Intervención",
        opt_geo_def: "Seleccionar zona...",
        
        lbl_expertise: "Experiencia Requerida",
        exp_sov: "Soberanía IA",
        exp_digital: "Transformación Digital",
        exp_ma: "M&A y Recaudación",
        exp_ohada: "Legal OHADA / Fiscal",
        exp_esg: "Ingeniería ESG",
        exp_cyber: "Ciberseguridad y Riesgo",
        exp_supply: "Cadena de Suministro",
        exp_pubaff: "Asuntos Públicos",

        btn_prev: "Atrás",
        btn_next_matrice: "Abrir Matriz de Análisis",
        
        step3_title: "03. Matriz de Análisis y Restitución",
        lbl_context: "Contexto Operativo",
        ph_context: "Describa sus desafíos estratégicos...",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad",
        btn_submit: "Iniciar Análisis IA",
        
        footer_rights: "Todos los derechos reservados.",
        modal_title: "Política de Privacidad",
        btn_close: "Cerrar"
    },
    ar: {
        subtitle: "التميز الاستراتيجي وسيادة الذكاء الاصطناعي",
        btn_reset: "↻ إعادة تعيين",
        msg_reset_confirm: "هل تريد حقًا مسح النموذج والبدء من جديد؟",
        
        step1_title: "01. الهوية",
        lbl_company: "الشركة / الهيئة",
        ph_company: "مثال: مجموعة ألفا...",
        lbl_email: "البريد المهني",
        ph_email: "contact@domain.com",
        
        step2_title: "02. المصفوفة الاستراتيجية",
        lbl_sector: "القطاع الاستراتيجي",
        
        sec_genai: "الذكاء الاصطناعي والروبوتات",
        sec_green: "الطاقة والتكنولوجيا الخضراء",
        sec_fintech: "البنوك والتكنولوجيا المالية",
        sec_health: "الصحة والتكنولوجيا الحيوية",
        sec_log: "اللوجستيات والبنية التحتية",
        sec_mine: "التعدين والنفط والغاز",
        sec_btp: "العقارات والبناء",
        sec_retail: "التجارة والتجزئة",
        sec_public: "القطاع العام والحكومة",
        sec_edu: "التعليم وتكنولوجيا التعليم",

        lbl_geo: "منطقة التدخل",
        opt_geo_def: "...اختر المنطقة",
        
        lbl_expertise: "الخبرة المطلوبة",
        exp_sov: "سيادة الذكاء الاصطناعي",
        exp_digital: "التحول الرقمي",
        exp_ma: "الاندماج والاستحواذ",
        exp_ohada: "القانون و OHADA",
        exp_esg: "هندسة ESG",
        exp_cyber: "الأمن السيبراني",
        exp_supply: "سلسلة التوريد",
        exp_pubaff: "الشؤون العامة",

        btn_prev: "سابق",
        btn_next_matrice: "فتح مصفوفة التحليل",
        
        step3_title: "03. مصفوفة التحليل والنتائج",
        lbl_context: "السياق التشغيلي",
        ph_context: "صف التحديات الاستراتيجية الخاصة بك...",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية",
        btn_submit: "بدء تحليل الذكاء الاصطناعي",
        
        footer_rights: "جميع الحقوق محفوظة.",
        modal_title: "سياسة الخصوصية",
        btn_close: "إغلاق"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-switch button');
    
    // Langue par défaut
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
    // 1. CORRECTION DU BUG : Mise à jour de l'attribut HTML pour le script Reset
    document.documentElement.lang = lang; 

    // 2. Direction (RTL/LTR)
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.style.textAlign = 'right';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.style.textAlign = 'left';
    }

    // 3. Textes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // 4. Placeholders
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
