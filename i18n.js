* * FICHIER : i18n.js (Version Ultimate - Contacts Officiels) */

const translations = {
    fr: {
        subtitle: "Excellence Stratégique & Haute Précision IA",
        btn_reset: "Réinitialiser",
        ai_calculating: "Intelligence Stratégique en Cours...",
        
        // --- FORMULAIRE ---
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        lbl_email: "Email Professionnel",
        lbl_phone: "Numéro WhatsApp (Recommandé)",
        btn_next: "Suivant",
        
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
        ph_context: "Décrivez vos enjeux stratégiques (ex: entrée marché, conformité, crise, levée de fonds)...",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        btn_submit: "Lancer l'Analyse IA",
        
        // --- WIDGET & FOOTER ---
        stats_live: "Live Intelligence",
        stat_ai: "Analyses IA",
        stat_pdf: "PDF Certifiés",
        
        // NOUVEAUX CHAMPS FOOTER
        lbl_support: "Support Technique :",
        lbl_commercial: "Commercial :",
        footer_unit: "Strategic Intelligence Unit • Dakar - Paris - Dubai",
        footer_rights: "Tous droits réservés.",
        
        // --- MODALS ---
        modal_title: "Politique de Confidentialité & Souveraineté",
        btn_close: "Fermer",
        result_title: "Diagnostic Stratégique",
        btn_pdf: "TÉLÉCHARGER PDF",
        btn_new: "NOUVELLE ANALYSE",
        
        // --- CONTENU JURIDIQUE ---
        priv_content: `
            <div class="privacy-block">
                <h4>1. Souveraineté des Données</h4>
                <p>e-META LABS garantit que les données soumises ne sont <strong>jamais revendues</strong>. Le traitement est effectué dans un environnement cloisonné.</p>
                <h4>2. Non-Usage pour Entraînement</h4>
                <p>Vos problématiques stratégiques ne sont <strong>pas utilisées</strong> pour l'entraînement des modèles publics (LLM).</p>
                <h4>3. Certification Blockchain</h4>
                <p>Chaque rapport généré fait l'objet d'un horodatage numérique garantissant son intégrité via le protocole Woleet.</p>
                <h4>4. Responsabilité & Support</h4>
                <p>Les diagnostics constituent une aide à la décision. Pour toute question relative à vos données : <br><strong>support@e-metalabs.com</strong></p>
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
        lbl_phone: "WhatsApp Number",
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
        ph_context: "Describe your strategic challenges...",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        btn_submit: "Launch AI Analysis",
        stats_live: "Live Intelligence",
        stat_ai: "AI Analyses",
        stat_pdf: "Certified PDFs",
        
        lbl_support: "Tech Support:",
        lbl_commercial: "Commercial:",
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
                <p>e-META LABS guarantees that data is <strong>never sold</strong>. Processing is siloed.</p>
                <h4>2. No Training Usage</h4>
                <p>Your inputs are <strong>not used</strong> to train public models.</p>
                <h4>3. Blockchain Certification</h4>
                <p>Reports are timestamped via Woleet.</p>
                <h4>4. Liability & Support</h4>
                <p>For any data-related questions: <br><strong>support@e-metalabs.com</strong></p>
            </div>
        `
    },
    // (Conservez ES et AR avec la même logique de traduction pour les nouveaux champs)
    es: {
        // ... (Traductions existantes) ...
        lbl_support: "Soporte Técnico:",
        lbl_commercial: "Comercial:",
        // ...
        priv_content: `
            <div class="privacy-block">
                <h4>1. Soberanía de Datos</h4>
                <p>Garantizamos que los datos nunca se venden.</p>
                <h4>4. Responsabilidad y Soporte</h4>
                <p>Contacto de datos: <strong>support@e-metalabs.com</strong></p>
            </div>
        `
    },
    ar: {
        // ... (Traductions existantes) ...
        lbl_support: "الدعم الفني:",
        lbl_commercial: "التواصل التجاري:",
        // ...
        priv_content: `
            <div class="privacy-block">
                <h4>1. سيادة البيانات</h4>
                <p>تضمن e-META LABS أن البيانات لا تباع أبداً.</p>
                <h4>4. المسؤولية والدعم</h4>
                <p>للاستفسارات حول البيانات: <strong>support@e-metalabs.com</strong></p>
            </div>
        `
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    if (lang === 'ar') { document.documentElement.setAttribute('dir', 'rtl'); } 
    else { document.documentElement.setAttribute('dir', 'ltr'); }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'priv_content') element.innerHTML = translations[lang][key];
            else element.innerText = translations[lang][key];
        }
    });

    const contextArea = document.getElementById('context');
    if (contextArea && translations[lang]['ph_context']) {
        contextArea.placeholder = translations[lang]['ph_context'];
    }
}

document.addEventListener('DOMContentLoaded', () => setLanguage('fr'));
3. Fichier style.css (Mise en forme des Contacts Footer)
Ajoutez ceci à la fin de votre CSS pour que les emails s'affichent proprement (alignés et avec la couleur Or).

CSS
/* --- FOOTER CONTACTS OPTIMISÉ --- */
.footer {
    text-align: center;
    padding: 2rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(10, 25, 47, 0.95);
    margin-top: auto;
}

.footer-contacts {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 15px 0;
    flex-wrap: wrap;
}

.contact-item {
    font-size: 0.85rem;
    color: var(--slate);
}

.contact-item span {
    display: inline-block;
    margin-right: 5px;
    opacity: 0.8;
}

.gold-link {
    color: var(--gold);
    text-decoration: none;
    border-bottom: 1px dotted rgba(212, 175, 55, 0.5);
    transition: all 0.3s ease;
}

.gold-link:hover {
    color: #fff;
    border-bottom-color: #fff;
}

.unit-loc {
    margin-top: 15px;
    font-size: 0.75rem;
    letter-spacing: 1px;
    opacity: 0.6;
    color: var(--slate);
    text-transform: uppercase;
}

/* Ajustement Mobile */
@media (max-width: 768px) {
    .footer-contacts {
        flex-direction: column;
        gap: 10px;
    }
}
