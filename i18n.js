/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : i18n.js (Gestion Multilingue Complète)
 */

const translations = {
    fr: {
        subtitle: "Excellence Stratégique & Haute Précision IA",
        btn_reset: "↻ Reset",
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        lbl_email: "Email Professionnel",
        lbl_phone: "Numéro WhatsApp",
        btn_next: "Suivant",
        
        step2_title: "02. Matrice Stratégique",
        lbl_sector: "Secteur Stratégique",
        sec_fintech: "FinTech & DeFi",
        sec_agri: "AgriTech & Food Security",
        sec_green: "GreenTech & Énergies",
        sec_gov: "GovTech & Smart Cities",
        sec_health: "Santé & BioTech",
        sec_log: "Logistique & Supply Chain",
        sec_mine: "Mines, Pétrole & Gaz",
        sec_btp: "Immobilier & PropTech",
        
        lbl_geo: "Zone d'Intervention",
        opt_geo_def: "Sélectionner une zone d'intervention...",
        
        lbl_expertise: "Expertise Requise",
        exp_ai: "GenAI & Data Science",
        exp_cyber: "Cybersécurité & Résilience",
        exp_esg: "Ingénierie ESG & Climat",
        exp_ma: "M&A & Levée de Fonds",
        exp_web3: "Web3 & Blockchain (Woleet)",
        exp_sov: "Souveraineté Numérique",
        exp_ohada: "Conformité (OHADA / Int.)",
        exp_pubaff: "Affaires Publiques",
        
        btn_prev: "Retour",
        btn_next_matrice: "Ouvrir Matrice Analyse",
        
        step3_title: "03. Matrice Analyse & Restitution",
        lbl_context: "Contexte Opérationnel",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité",
        btn_submit: "Lancer l'Analyse IA",
        
        footer_rights: "Tous droits réservés.",
        
        // Modal Privacy
        modal_title: "Politique de Confidentialité & Mentions Légales",
        priv_t1: "1. Identité et Opérations",
        priv_c1: "e-META LABS SASU est une unité d'intelligence stratégique opérant depuis ses hubs (Dakar, Paris, Dubai). Les données collectées sont strictement limitées au périmètre du diagnostic B2B.",
        priv_t2: "2. Souveraineté des Données",
        priv_c2: "Les informations soumises à notre moteur IA (Google Gemini Pro/Flash) sont traitées de manière éphémère. Aucun modèle d'apprentissage public n'est entraîné avec vos données stratégiques.",
        priv_t3: "3. Certification Blockchain",
        priv_c3: "Tout fichier téléversé est instantanément haché (SHA-256) et ancré sur la blockchain Bitcoin via l'API Woleet. Cela vous garantit une preuve d'antériorité et protège votre propriété intellectuelle sans que nous ne stockions le fichier d'origine à long terme.",
        priv_t4: "4. Non-Substitution",
        priv_c4: "Les rapports générés par l'IA d'e-META LABS constituent un outil d'aide à la décision stratégique de haut niveau. Ils ne se substituent pas à une consultation juridique ou financière certifiée.",
        btn_close: "Fermer",
        
        msg_reset_confirm: "Voulez-vous vraiment recommencer ?"
    },
    en: {
        subtitle: "Strategic Excellence & High Precision AI",
        btn_reset: "↻ Reset",
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        lbl_email: "Corporate Email",
        lbl_phone: "WhatsApp Number",
        btn_next: "Next",
        
        step2_title: "02. Strategic Matrix",
        lbl_sector: "Strategic Sector",
        sec_fintech: "FinTech & DeFi",
        sec_agri: "AgriTech & Food Security",
        sec_green: "GreenTech & Energy",
        sec_gov: "GovTech & Smart Cities",
        sec_health: "Healthcare & BioTech",
        sec_log: "Logistics & Supply Chain",
        sec_mine: "Mining, Oil & Gas",
        sec_btp: "Real Estate & PropTech",
        
        lbl_geo: "Area of Operation",
        opt_geo_def: "Select an area of operation...",
        
        lbl_expertise: "Required Expertise",
        exp_ai: "GenAI & Data Science",
        exp_cyber: "Cybersecurity & Resilience",
        exp_esg: "ESG Engineering & Climate",
        exp_ma: "M&A & Fundraising",
        exp_web3: "Web3 & Blockchain (Woleet)",
        exp_sov: "Digital Sovereignty",
        exp_ohada: "Compliance (OHADA / Int.)",
        exp_pubaff: "Public Affairs",
        
        btn_prev: "Back",
        btn_next_matrice: "Open Analysis Matrix",
        
        step3_title: "03. Analysis & Delivery Matrix",
        lbl_context: "Operational Context",
        legal_consent: "I accept the",
        link_privacy: "Privacy Policy",
        btn_submit: "Launch AI Analysis",
        
        footer_rights: "All Rights Reserved.",
        
        modal_title: "Privacy Policy & Legal Notice",
        priv_t1: "1. Identity and Operations",
        priv_c1: "e-META LABS SASU is a strategic intelligence unit operating from its hubs (Dakar, Paris, Dubai). Data collected is strictly limited to the scope of B2B diagnostics.",
        priv_t2: "2. Data Sovereignty",
        priv_c2: "Information submitted to our AI engine (Google Gemini Pro/Flash) is processed ephemerally. No public learning models are trained using your strategic data.",
        priv_t3: "3. Blockchain Certification",
        priv_c3: "Any uploaded file is instantly hashed (SHA-256) and anchored on the Bitcoin blockchain via the Woleet API. This guarantees proof of existence and protects your IP without long-term storage of the original file.",
        priv_t4: "4. Non-Substitution",
        priv_c4: "Reports generated by e-META LABS AI are high-level strategic decision-support tools. They do not replace certified legal or financial consultations.",
        btn_close: "Close",
        
        msg_reset_confirm: "Do you really want to restart?"
    },
    es: {
        subtitle: "Excelencia Estratégica y Alta Precisión IA",
        btn_reset: "↻ Reiniciar",
        step1_title: "01. Identificación",
        lbl_company: "Empresa / Entidad",
        lbl_email: "Correo Profesional",
        lbl_phone: "Número WhatsApp",
        btn_next: "Siguiente",
        
        step2_title: "02. Matriz Estratégica",
        lbl_sector: "Sector Estratégico",
        sec_fintech: "FinTech y DeFi",
        sec_agri: "AgriTech y Seguridad Alimentaria",
        sec_green: "GreenTech y Energía",
        sec_gov: "GovTech y Smart Cities",
        sec_health: "Salud y BioTech",
        sec_log: "Logística y Cadena de Suministro",
        sec_mine: "Minería, Petróleo y Gas",
        sec_btp: "Bienes Raíces y PropTech",
        
        lbl_geo: "Zona de Intervención",
        opt_geo_def: "Seleccione una zona de intervención...",
        
        lbl_expertise: "Experiencia Requerida",
        exp_ai: "GenAI y Data Science",
        exp_cyber: "Ciberseguridad y Resiliencia",
        exp_esg: "Ingeniería ESG y Clima",
        exp_ma: "M&A y Recaudación de Fondos",
        exp_web3: "Web3 y Blockchain (Woleet)",
        exp_sov: "Soberanía Digital",
        exp_ohada: "Cumplimiento (OHADA / Int.)",
        exp_pubaff: "Asuntos Públicos",
        
        btn_prev: "Volver",
        btn_next_matrice: "Abrir Matriz de Análisis",
        
        step3_title: "03. Matriz de Análisis y Entrega",
        lbl_context: "Contexto Operativo",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad",
        btn_submit: "Lanzar Análisis IA",
        
        footer_rights: "Todos los derechos reservados.",
        
        modal_title: "Política de Privacidad",
        priv_t1: "1. Identidad",
        priv_c1: "e-META LABS SASU opera a nivel global. Sus datos B2B se utilizan estrictamente para auditorías estratégicas.",
        priv_t2: "2. Soberanía",
        priv_c2: "Sus datos no entrenan modelos de IA públicos. El procesamiento es confidencial y efímero.",
        priv_t3: "3. Certificación",
        priv_c3: "Sus archivos están protegidos mediante hash y anclados en la blockchain a través de Woleet para garantizar su propiedad intelectual.",
        priv_t4: "4. No Sustitución",
        priv_c4: "La IA proporciona apoyo en la toma de decisiones, no asesoramiento legal o financiero certificado.",
        btn_close: "Cerrar",
        
        msg_reset_confirm: "¿Estás seguro de que deseas reiniciar?"
    },
    ar: {
        subtitle: "التميز الاستراتيجي والذكاء الاصطناعي عالي الدقة",
        btn_reset: "↻ إعادة تعيين",
        step1_title: "01. تحديد الهوية",
        lbl_company: "الشركة / المؤسسة",
        lbl_email: "البريد الإلكتروني المهني",
        lbl_phone: "رقم الواتساب",
        btn_next: "التالي",
        
        step2_title: "02. المصفوفة الاستراتيجية",
        lbl_sector: "القطاع الاستراتيجي",
        sec_fintech: "التكنولوجيا المالية والتمويل اللامركزي",
        sec_agri: "التكنولوجيا الزراعية والأمن الغذائي",
        sec_green: "التكنولوجيا الخضراء والطاقة",
        sec_gov: "تكنولوجيا الحكومة والمدن الذكية",
        sec_health: "الصحة والتكنولوجيا الحيوية",
        sec_log: "الخدمات اللوجستية وسلسلة التوريد",
        sec_mine: "التعدين والنفط والغاز",
        sec_btp: "العقارات وتكنولوجيا العقارات",
        
        lbl_geo: "منطقة التدخل",
        opt_geo_def: "اختر منطقة التدخل...",
        
        lbl_expertise: "الخبرة المطلوبة",
        exp_ai: "الذكاء الاصطناعي التوليدي وعلوم البيانات",
        exp_cyber: "الأمن السيبراني والمرونة",
        exp_esg: "الهندسة البيئية والاجتماعية والمناخ",
        exp_ma: "الاندماج والاستحواذ وجمع الأموال",
        exp_web3: "الويب 3 والبلوكشين (Woleet)",
        exp_sov: "السيادة الرقمية",
        exp_ohada: "الامتثال (أوهادا / دولي)",
        exp_pubaff: "الشؤون العامة",
        
        btn_prev: "رجوع",
        btn_next_matrice: "فتح مصفوفة التحليل",
        
        step3_title: "03. مصفوفة التحليل والتسليم",
        lbl_context: "السياق التشغيلي",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية",
        btn_submit: "بدء تحليل الذكاء الاصطنا
