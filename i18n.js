/* * PROJET : e-META LABS
 * FICHIER : i18n.js (Moteur de Traduction & Contenu)
 */

const translations = {
    fr: {
        subtitle: "Excellence Stratégique & Haute Précision IA",
        btn_reset: "Réinitialiser",
        ai_calculating: "Intelligence Stratégique en Cours...",
        
        // ÉTAPE 1 : IDENTIFICATION
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        lbl_email: "Email Professionnel",
        lbl_phone: "Numéro WhatsApp (Recommandé)",
        btn_next: "Suivant",
        
        // ÉTAPE 2 : MATRICE
        step2_title: "02. Matrice Stratégique",
        lbl_sector: "Secteur d'Activité",
        // Secteurs
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
        // Géo
        lbl_geo: "Hub Stratégique",
        opt_geo_def: "-- Sélectionner une zone --",
        // Expertises
        lbl_expertise: "Expertises Requises",
        exp_sov: "IA Souveraine",
        exp_cyber: "Cybersécurité",
        exp_ma: "M&A / Levée",
        exp_legal: "Légal / OHADA",
        exp_digital: "Transfo. Digitale",
        exp_esg: "ESG & Impact",
        exp_lobby: "Affaires Publiques",
        exp_supply: "Supply Chain",
        // Nav
        btn_prev: "Retour",
        btn_next_matrice: "Suivant",
        
        // ÉTAPE 3 : ANALYSE
        step3_title: "03. Analyse & Restitution",
        lbl_context: "Contexte Opérationnel",
        ph_context: "Décrivez vos enjeux stratégiques (ex: entrée marché, conformité, crise, levée de fonds)...",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        btn_submit: "Lancer l'Analyse IA",
        
        // WIDGET & FOOTER
        stats_live: "Live Intelligence",
        stat_ai: "Analyses IA",
        stat_pdf: "PDF Certifiés",
        footer_unit: "Strategic Intelligence Unit • Dakar - Paris - Dubai",
        footer_rights: "Tous droits réservés.",
        
        // MODALS & RÉSULTATS
        modal_title: "Politique de Confidentialité & Souveraineté",
        btn_close: "Fermer",
        result_title: "Diagnostic Stratégique",
        btn_pdf: "TÉLÉCHARGER PDF",
        btn_new: "NOUVELLE ANALYSE",
        
        // CONTENU JURIDIQUE (HTML pour le style CSS .privacy-block h4)
        priv_content: `
            <div class="privacy-block">
                <h4>1. Souveraineté des Données</h4>
                <p>e-META LABS garantit que les données soumises ne sont <strong>jamais revendues</strong> ni partagées. Le traitement est effectué dans un environnement cloisonné.</p>
                <h4>2. Non-Usage pour Entraînement</h4>
                <p>Vos problématiques stratégiques ne sont <strong>pas utilisées</strong> pour l'entraînement des modèles publics (LLM).</p>
                <h4>3. Certification Blockchain</h4>
                <p>Chaque rapport généré fait l'objet d'un horodatage numérique garantissant son intégrité via le protocole Woleet.</p>
                <h4>4. Responsabilité</h4>
                <p>Les diagnostics constituent une aide technologique à la décision et ne remplacent pas le conseil juridique réglementé.</p>
            </div>
        `
    },
    en: {
        subtitle: "Strategic Excellence & High Precision AI",
        btn_reset: "Reset",
        ai_calculating: "Strategic Analysis in Progress...",
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        lbl_email: "Professional Email",
        lbl_phone: "WhatsApp Number (Recommended)",
        btn_next: "Next",
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
        opt_geo_def: "-- Select Zone --",
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
        ph_context: "Describe your strategic challenges (e.g., market entry, compliance, crisis, fundraising)...",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        btn_submit: "Launch AI Analysis",
        stats_live: "Live Intelligence",
        stat_ai: "AI Analyses",
        stat_pdf: "Certified PDFs",
        footer_unit: "Strategic Intelligence Unit • Dakar - Paris - Dubai",
        footer_rights: "All rights reserved.",
        modal_title: "Privacy Policy & Sovereignty",
        btn_close: "Close",
        result_title: "Strategic Diagnostic",
        btn_pdf: "DOWNLOAD PDF",
        btn_new: "NEW ANALYSIS",
        priv_content: `
            <div class="privacy-block">
                <h4>1. Data Sovereignty</h4>
                <p>e-META LABS guarantees that data is <strong>never sold</strong> nor shared. Processing is performed in a siloed environment.</p>
                <h4>2. No Training Usage</h4>
                <p>Your strategic issues are <strong>not used</strong> to train public models (LLMs).</p>
                <h4>3. Blockchain Certification</h4>
                <p>Each report is digitally timestamped to ensure integrity via the Woleet protocol.</p>
                <h4>4. Liability</h4>
                <p>Provided diagnostics constitute technological decision support and do not replace regulated legal advice.</p>
            </div>
        `
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
        step2_title: "02. Matriz Estratégica",
        lbl_sector: "Sector de Actividad",
        sec_genai: "GenAI y Robótica",
        sec_fintech: "FinTech y DeFi",
        sec_green: "GreenTech y Energía",
        sec_mine: "Minería e Hidrocarburos",
        sec_agri: "AgriTech y Alimentos",
        sec_health: "Salud y BioTech",
        sec_infra: "Infraestructura y Logística",
        sec_gov: "GovTech y Público",
        sec_immo: "Inmobiliaria y Smart City",
        sec_edu: "EduTech y Saber",
        lbl_geo: "Hub Estratégico",
        opt_geo_def: "-- Seleccionar Zona --",
        lbl_expertise: "Experiencia Requerida",
        exp_sov: "IA Soberana",
        exp_cyber: "Ciberseguridad",
        exp_ma: "M&A / Recaudación",
        exp_legal: "Legal / OHADA",
        exp_digital: "Transfo. Digital",
        exp_esg: "ESG e Impacto",
        exp_lobby: "Asuntos Públicos",
        exp_supply: "Cadena de Suministro",
        btn_prev: "Atrás",
        btn_next_matrice: "Siguiente",
        step3_title: "03. Análisis y Resultados",
        lbl_context: "Contexto Operativo",
        ph_context: "Describa sus desafíos estratégicos (ej: entrada al mercado, cumplimiento, crisis)...",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad",
        btn_submit: "Iniciar Análisis IA",
        stats_live: "Inteligencia en Vivo",
        stat_ai: "Análisis IA",
        stat_pdf: "PDF Certificados",
        footer_unit: "Unidad de Inteligencia Estratégica • Dakar - París - Dubái",
        footer_rights: "Todos los derechos reservados.",
        modal_title: "Política de Privacidad y Soberanía",
        btn_close: "Cerrar",
        result_title: "Diagnóstico Estratégico",
        btn_pdf: "DESCARGAR PDF",
        btn_new: "NUEVO ANÁLISIS",
        priv_content: `
            <div class="privacy-block">
                <h4>1. Soberanía de Datos</h4>
                <p>e-META LABS garantiza que los datos <strong>nunca se venden</strong>. El procesamiento es aislado.</p>
                <h4>2. Sin Uso para Entrenamiento</h4>
                <p>Sus problemas estratégicos <strong>no se utilizan</strong> para entrenar modelos públicos.</p>
                <h4>3. Certificación Blockchain</h4>
                <p>Cada informe está sellado digitalmente para garantizar su integridad.</p>
                <h4>4. Responsabilidad</h4>
                <p>Los diagnósticos no sustituyen el asesoramiento legal regulado.</p>
            </div>
        `
    },
    ar: {
        subtitle: "التميز الاستراتيجي والذكاء الاصطناعي عالي الدقة",
        btn_reset: "إعادة تعيين",
        ai_calculating: "جارٍ التحليل الاستراتيجي...",
        step1_title: "01. الهوية",
        lbl_company: "الشركة / الهيئة",
        lbl_email: "البريد الإلكتروني المهني",
        lbl_phone: "رقم واتساب (موصى به)",
        btn_next: "التالي",
        step2_title: "02. المصفوفة الاستراتيجية",
        lbl_sector: "قطاع النشاط",
        sec_genai: "الذكاء الاصطناعي والروبوتات",
        sec_fintech: "التكنولوجيا المالية (FinTech)",
        sec_green: "التكنولوجيا الخضراء والطاقة",
        sec_mine: "التعدين والنفط والغاز",
        sec_agri: "التكنولوجيا الزراعية والأمن الغذائي",
        sec_health: "الصحة والتكنولوجيا الحيوية",
        sec_infra: "البنية التحتية الذكية واللوجستيات",
        sec_gov: "التكنولوجيا الحكومية والقطاع العام",
        sec_immo: "العقارات والمدن الذكية",
        sec_edu: "تكنولوجيا التعليم والمعرفة",
        lbl_geo: "المحور الاستراتيجي",
        opt_geo_def: "-- اختر المنطقة --",
        lbl_expertise: "الخبرات المطلوبة",
        exp_sov: "الذكاء الاصطناعي السيادي",
        exp_cyber: "الأمن السيبراني",
        exp_ma: "الاندماج والاستحواذ / التمويل",
        exp_legal: "القانون / OHADA",
        exp_digital: "التحول الرقمي",
        exp_esg: "الحوكمة البيئية والاجتماعية",
        exp_lobby: "الشؤون العامة",
        exp_supply: "سلسلة التوريد",
        btn_prev: "سابق",
        btn_next_matrice: "التالي",
        step3_title: "03. التحليل والنتائج",
        lbl_context: "السياق التشغيلي",
        ph_context: "صف تحدياتك الاستراتيجية (مثل: دخول السوق، الامتثال، الأزمات)...",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية",
        btn_submit: "بدء التحليل",
        stats_live: "ذكاء مباشر",
        stat_ai: "تحليلات IA",
        stat_pdf: "PDF معتمد",
        footer_unit: "وحدة الاستخبارات الاستراتيجية • داكار - باريس - دبي",
        footer_rights: "جميع الحقوق محفوظة.",
        modal_title: "سياسة الخصوصية والسيادة",
        btn_close: "إغلاق",
        result_title: "التشخيص الاستراتيجي",
        btn_pdf: "تحميل PDF",
        btn_new: "تحليل جديد",
        priv_content: `
            <div class="privacy-block">
                <h4>1. سيادة البيانات</h4>
                <p>تضمن e-META LABS أن البيانات <strong>لا تُباع أبدًا</strong>. تتم المعالجة في بيئة معزولة.</p>
                <h4>2. عدم الاستخدام للتدريب</h4>
                <p>لا تُستخدم مشكلاتك الاستراتيجية لتدريب النماذج العامة.</p>
                <h4>3. شهادة Blockchain</h4>
                <p>كل تقرير يتم ختمه رقميًا لضمان نزاهته عبر بروتوكول Woleet.</p>
                <h4>4. مسؤولية</h4>
                <p>التشخيصات لا تحل محل المشورة القانونية المنظمة.</p>
            </div>
        `
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Gestion RTL (Right-to-Left) pour l'Arabe
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Mise à jour de l'état des boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    // Injection des textes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Si c'est le contenu de la politique, on utilise innerHTML (pour les balises)
            // Sinon, on utilise innerText pour la sécurité
            if (key === 'priv_content') {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // Mise à jour du Placeholder
    const contextArea = document.getElementById('context');
    if (contextArea && translations[lang]['ph_context']) {
        contextArea.placeholder = translations[lang]['ph_context'];
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => setLanguage('fr'));
