/* 
 * ==============================================================================
 * PROJET : e-META LABS SASU
 * FICHIER : i18n.js
 * VERSION : Référentiel Exécutif Édition Octobre 2026
 * FONCTIONNALITÉS : Traduction 4 Langues (FR, EN, ES, AR) + Tri-Devises (EUR, USD, XOF)
 *                   + Mémoire Locale + Support RTL + Textes Régaliens & Juridiques
 * ==============================================================================
 */

const translations = {
    fr: {
        // --- BARRE SUPÉRIEURE & NAVIGATION ---
        top_badge: "Référentiel Exécutif Octobre 2026",
        top_subtext: "Systèmes d'Analyse, de Gouvernance & de Pilotage Stratégique",
        nav_manifesto: "Manifeste",
        nav_pillars: "Piliers",
        nav_sectors: "10 Secteurs",
        nav_tiers: "Protocoles (3 Paliers)",
        nav_proof: "Chaîne de Preuve",
        nav_start: "Démarrer une Mission",
        nav_tracker: "Cockpit Tracker",
        nav_desk: "Portail Expert",
        nav_verify: "Vérification SHA-256",

        // --- SECTION HÉROS ---
        hero_kicker: "Cabinet d'Arbitrage Stratégique Augmenté",
        hero_title_1: "Strategic Intelligence,",
        hero_title_2: "Audit Décisionnel & Strategic Engine",
        hero_subtitle: "e-META LABS conçoit des systèmes d'analyse, de gouvernance et de pilotage stratégique pour transformer les données en décisions rapides, fiables et créatrices de valeur par l'alliance souveraine de l'intelligence algorithmique, de la cryptographie probatoire et du jugement expert de terrain.",
        hero_cta_start: "Démarrer une Saisine",
        hero_cta_verify: "Vérifier un Scellement SHA-256",
        metric_roi: "ROI Prévu",
        metric_precision: "Précision d'Analyse",
        metric_time: "Temps de Décision",
        metric_efficiency: "Gain d'Efficacité",

        // --- LES 3 PILIERS FONDAMENTAUX ---
        manifesto_doctrine: "Doctrine & Méthode",
        manifesto_title: "Le Manifeste Souverain e-META LABS",
        manifesto_desc: "La transformation ne se décrète pas au moyen d’un outil. Elle se conduit à partir d’une compréhension exacte du terrain, d’une analyse disciplinée des faits et d’arbitrages assumés par les personnes responsables.",
        
        pillar1_title: "Intelligence Algorithmique (CORTEX_03)",
        pillar1_desc: "Organisation et analyse à distance des éléments transmis, identification des incohérences, comparaison de scénarios et préparation des pistes d'orientation par notre moteur algorithmique.",
        pillar1_item1: "Distinctions faits / hypothèses",
        pillar1_item2: "Modélisation de scénarios",
        pillar1_item3: "Traçabilité des sources",

        pillar2_title: "Cryptographie Probatoire",
        pillar2_desc: "Calcul d'une empreinte cryptographique SHA-256 à partir du jeu de données de la mission, couplé à un horodatage OpenTimestamps pour attester techniquement de l'intégrité et de l'antériorité.",
        pillar2_item1: "Empreinte SHA-256 immuable",
        pillar2_item2: "Horodatage OpenTimestamps",
        pillar2_item3: "Opposabilité contractuelle",

        pillar3_title: "Arbitrage Humain — Desk Exécutif",
        pillar3_desc: "Option B : Immersion contradictoire sur site par un Expert accrédité pour la levée des doutes topographiques, thermiques, hydrauliques, des sols et de la logistique du froid.",
        pillar3_item1: "Vérification des 5 points critiques",
        pillar3_item2: "Contreseing par Expert Senior",
        pillar3_item3: "Verrouillage SLA 2h",

        // --- CHAPITRE 19 (OPTION B) ---
        ch19_kicker: "Chapitre 19 — Levée Contradictoire sur Site (Option B)",
        ch19_title: "Les 5 Familles de Points Critiques Audités",
        ch19_desc: "Dès qu'une réserve exige la vérification des conditions réelles sur le terrain, notre Desk Exécutif déploie un expert pour confronter les hypothèses aux réalités physiques de l'infrastructure.",
        ch19_pt1_title: "1. Sols", ch19_pt1_sub: "Nature & prélèvements",
        ch19_pt2_title: "2. Hydraulique", ch19_pt2_sub: "Ressources & drainage",
        ch19_pt3_title: "3. Thermique", ch19_pt3_sub: "Seuils & procédés",
        ch19_pt4_title: "4. Chaîne du Froid", ch19_pt4_sub: "Stockage & transport",
        ch19_pt5_title: "5. Topographie & Infrastructures", ch19_pt5_sub: "Accessibilité & équipements critiques",

        // --- MATRICE DES 10 SECTEURS D'EXCELLENCE ---
        sectors_kicker: "Expertise Sectorielle",
        sectors_title: "La Matrice des 10 Secteurs d'Excellence",
        sectors_desc: "Doctrine d'arbitrage méthodologique adaptée aux enjeux critiques de chaque industrie. Cliquez sur un secteur pour consulter sa grille d'audit et ses stress-tests associés.",
        sec_1: "Agro-industrie et souveraineté",
        sec_2: "Banque, FinTech et assurance",
        sec_3: "Énergie et mines",
        sec_4: "Logistique, ports et supply chain",
        sec_5: "Santé, pharmacie et biotechnologies",
        sec_6: "Télécommunications, cloud et infrastructures",
        sec_7: "BTP, immobilier et foncier",
        sec_8: "Industrie manufacturière",
        sec_9: "Secteur public et parapublic",
        sec_10: "Retail, distribution et négoce",
        sectors_card_cta: "Explorer grille",

        // --- PROTOCOLE D'AUDIT EN 3 PALIERS ---
        tiers_kicker: "Parcours & Livrables",
        tiers_title: "Le Protocole d'Audit en 3 Paliers",
        tiers_desc: "Du diagnostic d'urgence à l'accompagnement exécutif permanent, découvrez nos formats d'intervention calibrés selon la criticité de vos décisions.",
        
        tier1_name: "Diagnostic Découverte",
        tier1_pages: "3 à 5 pages",
        tier1_price_eur: "0 €", tier1_price_usd: "$0", tier1_price_xof: "0 FCFA",
        tier1_period: "/ Offert",
        tier1_desc: "Orientation d'urgence et premier cadrage pour faire ressortir les principaux sujets nécessitant une décision ou une investigation complémentaire.",
        tier1_f1: "Synthèse de la situation décrite",
        tier1_f2: "Jusqu'à 3 failles ou points de vigilance prioritaires",
        tier1_f3: "Premier score de maturité sectorielle",
        tier1_f4: "Recommandations immédiates hiérarchisées",
        tier1_btn: "Commander le Palier 1 (Offert)",

        tier2_badge: "Standard Gouvernance",
        tier2_name: "Mandat Certifié",
        tier2_pages: "15 à 25 pages",
        tier2_price_eur: "350 €", tier2_price_usd: "$380", tier2_price_xof: "230 000 FCFA",
        tier2_period: "/ Mandat",
        tier2_desc: "Approfondissement stratégique et opérationnel avec application des grilles sectorielles, stress-tests, modélisation financière et empreinte SHA-256 incluse.",
        tier2_f1: "Manifeste exécutif & matrice de maturité",
        tier2_f2: "Scénarios de résistance financière & opérationnelle",
        tier2_f3: "Plan d'action opérationnel (30 / 60 / 90 jours)",
        tier2_f4: "Scellement SHA-256 & OpenTimestamps",
        tier2_btn: "Commander le Mandat Certifié",

        tier3_name: "Chambre Exécutive",
        tier3_pages: "25 à 45 pages+",
        tier3_price_eur: "1 450 €", tier3_price_usd: "$1,550", tier3_price_xof: "950 000 FCFA",
        tier3_period: "/ mois",
        tier3_desc: "Accompagnement stratégique permanent ou récurrent pour les comités de direction, groupes, filiales ou institutions majeures.",
        tier3_f1: "Vision consolidée groupe & filiales",
        tier3_f2: "Anticipation macroéconomique & géopolitique",
        tier3_f3: "Arbitrages d'investissement & allocation du capital",
        tier3_f4: "Revue périodique des risques & décisions",
        tier3_btn: "Engager la Chambre Exécutive",

        // --- VÉRIFICATION DE SCELLEMENT SHA-256 ---
        verify_kicker: "Registre NocoDB & Cockpit Tracker",
        verify_title: "Vérification de Scellement & Suivi de Mission",
        verify_desc: "Entrez votre référence de mission (ex: MIS-2026-0842) pour interroger en temps réel le registre d'intégrité et l'état de l'arbitrage terrain (Option B).",
        verify_placeholder: "Ex: MIS-2026-0842 ou Hash SHA-256...",
        verify_btn: "Interroger",
        verify_quick: "Exemples rapides :",
        verify_lbl_status: "Statut Mission",
        verify_lbl_sector: "Secteur d'Excellence",
        verify_lbl_optionb: "Option B (Arbitrage Terrain)",
        verify_lbl_hash: "Empreinte Cryptographique SHA-256",
        verify_badge_ots: "Ancré OpenTimestamps",

        // --- MODALE SAISINE (« DÉMARRER UNE MISSION ») ---
        modal_saisine_kicker: "Saisine Exécutive",
        modal_saisine_title: "Démarrer une Mission",
        modal_saisine_desc: "Renseignez vos coordonnées, le pays, l'email professionnel, le numéro WhatsApp (sans '+') et joignez vos documents pour l'analyse RAG et le scellement SHA-256 (T+0).",
        form_lbl_company: "Nom de l'Entreprise / Institution",
        form_ph_company: "Ex: Compagnie Minière de l'Ouest",
        form_lbl_country: "Pays / Région d'Implantation",
        form_ph_country: "Ex: Sénégal, France, Côte d'Ivoire...",
        form_lbl_email: "Email Professionnel",
        form_ph_email: "dirigeant@institution.com",
        form_lbl_whatsapp: "WhatsApp (chiffres seuls sans '+')",
        form_ph_whatsapp: "221770000000",
        form_lbl_sector: "Secteur d'Excellence",
        form_lbl_tier: "Palier d'Intervention",
        form_lbl_gateway: "Passerelle de Paiement Sécurisée",
        gw_paytech: "PayTech (Zone UEMOA / Mobile Money / Carte)",
        gw_paydunya: "PayDunya (Passerelle Régionale & Marchands)",
        gw_stripe: "Stripe / International (Cartes & Corporate)",
        form_lbl_file: "Pièce jointe / Données d'audit (PDF, Excel, TXT)",
        form_file_hint: "Sert de support pour le calcul SHA-256 initial et l'analyse RAG Qdrant.",
        form_lbl_decision: "Décision à Éclairer ou Problématique Critique",
        form_ph_decision: "Décrivez succinctement les frictions ou arbitrages attendus...",
        form_btn_submit: "Générer la Référence & Sceller la Saisine (T+0)",

        // --- FOOTER & DROITS ---
        footer_brand_desc: "Systèmes d'analyse, de gouvernance et de pilotage stratégique. Cabinet d'arbitrage exécutif augmenté.",
        footer_address_title: "E-META LABS SASU",
        footer_address_sub: "Face Débarcadère, Rosso, Sénégal",
        footer_nav_title: "Navigation",
        footer_sovereignty_title: "Souveraineté",
        footer_contact_title: "Contact Institutionnel",
        footer_rights: "© 2026 E-META LABS SASU. Tous droits réservés. Référentiel Exécutif Édition Octobre 2026."
    },

    en: {
        // --- TOP BAR & NAVIGATION ---
        top_badge: "Executive Reference October 2026",
        top_subtext: "Systems of Analysis, Governance & Strategic Steering",
        nav_manifesto: "Manifesto",
        nav_pillars: "Pillars",
        nav_sectors: "10 Sectors",
        nav_tiers: "Protocols (3 Tiers)",
        nav_proof: "Chain of Custody",
        nav_start: "Initiate Mission",
        nav_tracker: "Cockpit Tracker",
        nav_desk: "Expert Portal",
        nav_verify: "SHA-256 Verification",

        // --- HERO SECTION ---
        hero_kicker: "Augmented Strategic Arbitrage Advisory",
        hero_title_1: "Strategic Intelligence,",
        hero_title_2: "Decision Audit & Strategic Engine",
        hero_subtitle: "e-META LABS designs analysis, governance, and strategic steering systems to turn data into fast, reliable, and value-generating decisions through the sovereign alliance of algorithmic intelligence, probative cryptography, and expert field judgment.",
        hero_cta_start: "Initiate a Mandate",
        hero_cta_verify: "Verify SHA-256 Anchoring",
        metric_roi: "Projected ROI",
        metric_precision: "Analytical Accuracy",
        metric_time: "Decision Turnaround",
        metric_efficiency: "Efficiency Gain",

        // --- THE 3 PILLARS ---
        manifesto_doctrine: "Doctrine & Methodology",
        manifesto_title: "The Sovereign e-META LABS Manifesto",
        manifesto_desc: "Transformation is not decreed through a mere software tool. It is executed through rigorous factual analysis, deep field comprehension, and definitive executive arbitrations.",
        
        pillar1_title: "Algorithmic Intelligence (CORTEX_03)",
        pillar1_desc: "Remote organization and examination of transmitted materials, inconsistency discovery, scenario modeling, and orientation roadmaps by our proprietary algorithmic engine.",
        pillar1_item1: "Fact vs. hypothesis demarcation",
        pillar1_item2: "Multi-scenario stress testing",
        pillar1_item3: "Full source traceability",

        pillar2_title: "Probative Cryptography",
        pillar2_desc: "Cryptographic SHA-256 digest computation on mission datasets, sealed via OpenTimestamps for immutable proof of integrity and antecedent existence.",
        pillar2_item1: "Immutable SHA-256 hash",
        pillar2_item2: "Bitcoin OpenTimestamps anchoring",
        pillar2_item3: "Contractual enforceability",

        pillar3_title: "Human Field Judgment — Executive Desk",
        pillar3_desc: "Option B: Mandatory adversarial onsite deployment by an accredited Expert to clear critical uncertainties across topography, thermal thresholds, hydraulics, soils, and cold storage logistics.",
        pillar3_item1: "Audit of the 5 critical families",
        pillar3_item2: "Senior Expert countersignature",
        pillar3_item3: "Strict 2-hour SLA claim lock",

        // --- CHAPTER 19 (OPTION B) ---
        ch19_kicker: "Chapter 19 — Adversarial Onsite Clearance (Option B)",
        ch19_title: "The 5 Critical Audit Checkpoint Families",
        ch19_desc: "Whenever a caveat demands real-world verification, our Executive Desk deploys a field specialist to confront algorithmic assumptions with physical on-ground realities.",
        ch19_pt1_title: "1. Soils", ch19_pt1_sub: "Nature & soil samplings",
        ch19_pt2_title: "2. Hydraulics", ch19_pt2_sub: "Flows, drainage & resources",
        ch19_pt3_title: "3. Thermal", ch19_pt3_sub: "Operating heat & tolerances",
        ch19_pt4_title: "4. Cold Chain", ch19_pt4_sub: "Refrigerated transport & storage",
        ch19_pt5_title: "5. Topography & Infrastructure", ch19_pt5_sub: "Site accessibility & critical assets",

        // --- 10 SECTORS ---
        sectors_kicker: "Sectoral Authority",
        sectors_title: "The 10 Industry Excellence Matrices",
        sectors_desc: "Tailored methodological arbitration doctrines engineered for mission-critical industries. Select a sector to inspect its audit guidelines and stress tests.",
        sec_1: "Agribusiness & Food Sovereignty",
        sec_2: "Banking, FinTech & Insurance",
        sec_3: "Energy, Oil & Mining",
        sec_4: "Logistics, Ports & Supply Chain",
        sec_5: "Healthcare & Biotechnology",
        sec_6: "Telecommunications & Cloud",
        sec_7: "Real Estate & Infrastructure",
        sec_8: "Heavy Manufacturing & Industry",
        sec_9: "Public Sector & State Governance",
        sec_10: "Retail, Wholesale & Distribution",
        sectors_card_cta: "Inspect matrix",

        // --- 3 TIERS ---
        tiers_kicker: "Engagements & Deliverables",
        tiers_title: "The 3-Tier Audit Protocol",
        tiers_desc: "From rapid flash diagnostic to permanent sovereign chamber advisory, explore calibrated intervention tiers matching your institutional risk profile.",
        
        tier1_name: "Discovery Diagnostic",
        tier1_pages: "3 to 5 pages",
        tier1_price_eur: "0 €", tier1_price_usd: "$0", tier1_price_xof: "0 FCFA",
        tier1_period: "/ Complimentary",
        tier1_desc: "Emergency orientation and initial scoping to uncover critical flaws requiring executive arbitration or further on-site scrutiny.",
        tier1_f1: "Executive situational summary",
        tier1_f2: "Up to 3 high-priority vulnerabilities",
        tier1_f3: "Baseline sectoral maturity score",
        tier1_f4: "Prioritized immediate remediation",
        tier1_btn: "Order Tier 1 (Free)",

        tier2_badge: "Governance Standard",
        tier2_name: "Certified Mandate",
        tier2_pages: "15 to 25 pages",
        tier2_price_eur: "350 €", tier2_price_usd: "$380", tier2_price_xof: "230,000 FCFA",
        tier2_period: "/ Mandate",
        tier2_desc: "In-depth strategic investigation incorporating sector matrix stress testing, financial modeling, and cryptographic SHA-256 seal.",
        tier2_f1: "Executive manifesto & maturity matrix",
        tier2_f2: "Operational & financial stress tests",
        tier2_f3: "Actionable 30/60/90-day roadmap",
        tier2_f4: "SHA-256 & OpenTimestamps proof",
        tier2_btn: "Order Certified Mandate",

        tier3_name: "Executive Chamber",
        tier3_pages: "25 to 45 pages+",
        tier3_price_eur: "1,450 €", tier3_price_usd: "$1,550", tier3_price_xof: "950,000 FCFA",
        tier3_period: "/ month",
        tier3_desc: "Continuous strategic accompaniment and executive advisory for boards of directors, state entities, and international holdings.",
        tier3_f1: "Consolidated group & subsidiary oversight",
        tier3_f2: "Geopolitical & macroeconomic modeling",
        tier3_f3: "Capital allocation & investment arbitration",
        tier3_f4: "Periodic review of decisions & risks",
        tier3_btn: "Retain Executive Chamber",

        // --- VERIFICATION ---
        verify_kicker: "NocoDB Ledger & Mission Cockpit",
        verify_title: "Seal Verification & Mandate Tracker",
        verify_desc: "Enter your canonical mission code (e.g., MIS-2026-0842) to query the cryptographic ledger and onsite Option B status in real time.",
        verify_placeholder: "e.g., MIS-2026-0842 or SHA-256 digest...",
        verify_btn: "Query",
        verify_quick: "Quick samples:",
        verify_lbl_status: "Mission Status",
        verify_lbl_sector: "Excellence Sector",
        verify_lbl_optionb: "Option B (Field Clearance)",
        verify_lbl_hash: "Cryptographic SHA-256 Digest",
        verify_badge_ots: "OpenTimestamps Anchored",

        // --- SAISINE MODAL ---
        modal_saisine_kicker: "Executive Mandate Saisine",
        modal_saisine_title: "Initiate a Mission",
        modal_saisine_desc: "Provide your institutional details, country, corporate email, WhatsApp number (digits only), and upload audit data to initiate RAG synthesis and T+0 SHA-256 sealing.",
        form_lbl_company: "Entity / Institution Name",
        form_ph_company: "e.g., Western Mining Corporation",
        form_lbl_country: "Country / Operational Region",
        form_ph_country: "e.g., Senegal, France, Ivory Coast...",
        form_lbl_email: "Corporate Email",
        form_ph_email: "executive@institution.com",
        form_lbl_whatsapp: "WhatsApp Line (digits without '+')",
        form_ph_whatsapp: "221770000000",
        form_lbl_sector: "Sector of Excellence",
        form_lbl_tier: "Intervention Tier",
        form_lbl_gateway: "Secure Payment Gateway",
        gw_paytech: "PayTech (West Africa / Mobile Money / Cards)",
        gw_paydunya: "PayDunya (Regional Gateway & Corporate)",
        gw_stripe: "Stripe / International (Cards & Corporate)",
        form_lbl_file: "Audit Attachments / Raw Datasets (PDF, Excel, TXT)",
        form_file_hint: "Used for initial SHA-256 hash generation and Qdrant RAG processing.",
        form_lbl_decision: "Critical Challenge / Key Decision to Clarify",
        form_ph_decision: "Summarize existing frictions, bottleneck hypotheses, or required arbitrations...",
        form_btn_submit: "Generate Reference & Seal Mandate (T+0)",

        // --- FOOTER ---
        footer_brand_desc: "Strategic intelligence, sovereign governance and operational decision systems. Augmented executive arbitration advisory.",
        footer_address_title: "E-META LABS SASU",
        footer_address_sub: "Face Débarcadère, Rosso, Senegal",
        footer_nav_title: "Navigation",
        footer_sovereignty_title: "Sovereignty & Legal",
        footer_contact_title: "Diplomatic Inquiries",
        footer_rights: "© 2026 E-META LABS SASU. All rights reserved. Executive Reference Framework October 2026."
    },

    es: {
        top_badge: "Marco Ejecutivo Octubre 2026",
        top_subtext: "Sistemas de Análisis, Gobernanza y Arbitraje Estratégico",
        nav_manifesto: "Manifiesto",
        nav_pillars: "Pilares",
        nav_sectors: "10 Sectores",
        nav_tiers: "Protocolos (3 Niveles)",
        nav_proof: "Cadena de Custodia",
        nav_start: "Iniciar Misión",
        nav_tracker: "Cockpit Tracker",
        nav_desk: "Portal de Expertos",
        nav_verify: "Verificación SHA-256",

        hero_kicker: "Gabinete de Arbitraje Estratégico Aumentado",
        hero_title_1: "Strategic Intelligence,",
        hero_title_2: "Auditoría Decisional & Strategic Engine",
        hero_subtitle: "e-META LABS concibe sistemas de análisis, gobernanza y dirección estratégica para transformar datos en decisiones veloces, fiables y creadoras de valor mediante la alianza soberana de inteligencia algorítmica, criptografía probatoria y arbitraje humano en el terreno.",
        hero_cta_start: "Iniciar una Misión",
        hero_cta_verify: "Verificar Sellado SHA-256",
        metric_roi: "ROI Estimado",
        metric_precision: "Precisión Analítica",
        metric_time: "Tiempo Decisional",
        metric_efficiency: "Aumento de Eficiencia",

        manifesto_doctrine: "Doctrina y Método",
        manifesto_title: "El Manifiesto Soberano e-META LABS",
        manifesto_desc: "La transformación no se decreta mediante una herramienta de software. Se conduce a partir del conocimiento riguroso del terreno y de hechos auditados.",

        pillar1_title: "Inteligencia Algorítmica (CORTEX_03)",
        pillar1_desc: "Organización y análisis remoto de los datos proporcionados, detección de incoherencias y modelado de escenarios mediante motor algorítmico.",
        pillar1_item1: "Distingo hechos / hipótesis",
        pillar1_item2: "Modelado de escenarios críticos",
        pillar1_item3: "Trazabilidad completa de fuentes",

        pillar2_title: "Criptografía Probatoria",
        pillar2_desc: "Cálculo de huella criptográfica SHA-256 acoplado al sellado temporal OpenTimestamps para asegurar la integridad e inmutabilidad temporal.",
        pillar2_item1: "Huella SHA-256 inmutable",
        pillar2_item2: "Sellado OpenTimestamps",
        pillar2_item3: "Oponibilidad contractual",

        pillar3_title: "Arbitraje Humano — Desk Ejecutivo",
        pillar3_desc: "Opción B: Despliegue contradictorio en sitio por un Experto acreditado para despejar incertidumbres críticas en suelos, térmica, hidráulica y frío.",
        pillar3_item1: "Inspección de los 5 puntos críticos",
        pillar3_item2: "Firma y visado de Experto Senior",
        pillar3_item3: "Bloqueo estricto SLA de 2 horas",

        ch19_kicker: "Capítulo 19 — Inspección Contradictoria en Sitio (Opción B)",
        ch19_title: "Las 5 Familias de Puntos Críticos Auditados",
        ch19_desc: "Cuando una reserva exige verificación real, nuestro Desk Ejecutivo despliega un especialista para confrontar hipótesis con la realidad física.",
        ch19_pt1_title: "1. Suelos", ch19_pt1_sub: "Naturaleza y muestras",
        ch19_pt2_title: "2. Hidráulica", ch19_pt2_sub: "Flujos, drenaje y fuentes",
        ch19_pt3_title: "3. Térmica", ch19_pt3_sub: "Umbrales y procesos",
        ch19_pt4_title: "4. Cadena de Frío", ch19_pt4_sub: "Transporte y almacenaje",
        ch19_pt5_title: "5. Topografía e Infraestructura", ch19_pt5_sub: "Accesos y activos críticos",

        sectors_kicker: "Autoridad Sectorial",
        sectors_title: "La Matriz de los 10 Sectores de Excelencia",
        sectors_desc: "Doctrina de arbitraje metodológico adaptada a las complejidades de cada industria estratégica.",
        sec_1: "Agroindustria y Soberanía Alimentaria",
        sec_2: "Banca, FinTech y Seguros",
        sec_3: "Energía, Minería y Petróleo",
        sec_4: "Logística, Puertos y Cadena de Suministro",
        sec_5: "Salud, Farmacia y Biotecnología",
        sec_6: "Telecomunicaciones y Nube",
        sec_7: "Construcción, Bienes Raíces y Suelos",
        sec_8: "Industria Manufacturera y Transformación",
        sec_9: "Sector Público y Gobernanza Estatal",
        sec_10: "Distribución, Retail y Comercio Mayorista",
        sectors_card_cta: "Examinar matriz",

        tiers_kicker: "Formatos y Entregables",
        tiers_title: "Protocolo de Auditoría en 3 Niveles",
        tiers_desc: "Desde el diagnóstico de emergencia hasta el acompañamiento directivo continuo.",

        tier1_name: "Diagnóstico Descubrimiento",
        tier1_pages: "3 a 5 páginas",
        tier1_price_eur: "0 €", tier1_price_usd: "$0", tier1_price_xof: "0 FCFA",
        tier1_period: "/ Gratuito",
        tier1_desc: "Orientación de urgencia y encuadre inicial para revelar los focos que requieren arbitraje directivo.",
        tier1_f1: "Resumen ejecutivo de situación",
        tier1_f2: "Hasta 3 fallas prioritarias",
        tier1_f3: "Puntaje inicial de madurez",
        tier1_f4: "Recomendaciones inmediatas",
        tier1_btn: "Solicitar Nivel 1 (Gratis)",

        tier2_badge: "Estándar Gobernanza",
        tier2_name: "Mandato Certificado",
        tier2_pages: "15 a 25 páginas",
        tier2_price_eur: "350 €", tier2_price_usd: "$380", tier2_price_xof: "230.000 FCFA",
        tier2_period: "/ Mandato",
        tier2_desc: "Profundización estratégica con pruebas de estrés sectoriales, modelado financiero y huella SHA-256.",
        tier2_f1: "Manifiesto y matriz de madurez",
        tier2_f2: "Pruebas de estrés operacional",
        tier2_f3: "Plan de acción a 30/60/90 días",
        tier2_f4: "Sellado SHA-256 y OpenTimestamps",
        tier2_btn: "Contratar Mandato Certificado",

        tier3_name: "Cámara Ejecutiva",
        tier3_pages: "25 a 45 páginas+",
        tier3_price_eur: "1.450 €", tier3_price_usd: "$1.550", tier3_price_xof: "950.000 FCFA",
        tier3_period: "/ mes",
        tier3_desc: "Asesoramiento permanente para comités de dirección, grupos multinacionales o ministerios.",
        tier3_f1: "Visión consolidada holding y filiales",
        tier3_f2: "Anticipación geopolítica y macro",
        tier3_f3: "Arbitraje de inversión y capital",
        tier3_f4: "Revisión periódica de riesgos",
        tier3_btn: "Vincular Cámara Ejecutiva",

        verify_kicker: "Registro NocoDB & Cockpit Tracker",
        verify_title: "Verificación de Sellado y Seguimiento",
        verify_desc: "Introduzca su código de misión (ej. MIS-2026-0842) para consultar el registro criptográfico.",
        verify_placeholder: "Ej: MIS-2026-0842 o Hash SHA-256...",
        verify_btn: "Consultar",
        verify_quick: "Ejemplos rápidos:",
        verify_lbl_status: "Estado de la Misión",
        verify_lbl_sector: "Sector de Excelencia",
        verify_lbl_optionb: "Opción B (Inspección Terreno)",
        verify_lbl_hash: "Huella Criptográfica SHA-256",
        verify_badge_ots: "Anclado OpenTimestamps",

        modal_saisine_kicker: "Saisine Ejecutiva",
        modal_saisine_title: "Iniciar una Misión",
        modal_saisine_desc: "Indique los datos de su entidad, país, email profesional, WhatsApp (solo números) y adjunte documentos para el análisis RAG y sellado SHA-256 en T+0.",
        form_lbl_company: "Nombre de la Empresa o Entidad",
        form_ph_company: "Ej: Compañía Minera del Oeste",
        form_lbl_country: "País / Región",
        form_ph_country: "Ej: Senegal, España, México...",
        form_lbl_email: "Correo Profesional",
        form_ph_email: "director@institucion.com",
        form_lbl_whatsapp: "WhatsApp (solo números sin '+')",
        form_ph_whatsapp: "34600000000",
        form_lbl_sector: "Sector Estratégico",
        form_lbl_tier: "Nivel de Intervención",
        form_lbl_gateway: "Pasarela de Pago Segura",
        gw_paytech: "PayTech (África UEMOA / Dinero Móvil / Tarjeta)",
        gw_paydunya: "PayDunya (Pasarela Regional & Empresas)",
        gw_stripe: "Stripe / Internacional (Tarjetas y Corporativo)",
        form_lbl_file: "Documentos de Auditoría (PDF, Excel, TXT)",
        form_file_hint: "Utilizado para el hash SHA-256 y la síntesis IA Qdrant.",
        form_lbl_decision: "Decisión o Problemática a Resolver",
        form_ph_decision: "Describa brevemente las fricciones o arbitrajes requeridos...",
        form_btn_submit: "Generar Código y Sellar Misión (T+0)",

        footer_brand_desc: "Sistemas de análisis, gobernanza y dirección estratégica. Gabinete de arbitraje ejecutivo aumentado.",
        footer_address_title: "E-META LABS SASU",
        footer_address_sub: "Face Débarcadère, Rosso, Senegal",
        footer_nav_title: "Navegación",
        footer_sovereignty_title: "Soberanía Legal",
        footer_contact_title: "Canales Diplomáticos",
        footer_rights: "© 2026 E-META LABS SASU. Todos los derechos reservados. Marco Metodológico Octubre 2026."
    },

    ar: {
        top_badge: "المرجع التنفيذي أكتوبر 2026",
        top_subtext: "أنظمة التحليل والحوكمة والقيادة الاستراتيجية السيادية",
        nav_manifesto: "البيان الاستراتيجي",
        nav_pillars: "الركائز",
        nav_sectors: "القطاعات العشرة",
        nav_tiers: "البروتوكولات (3 مستويات)",
        nav_proof: "سلسلة الإثبات",
        nav_start: "بدء مهمة",
        nav_tracker: "قمرة التتبع",
        nav_desk: "بوابة الخبراء",
        nav_verify: "التحقق من SHA-256",

        hero_kicker: "مكتب التحكيم الاستراتيجي المعزز بالذكاء الاصطناعي",
        hero_title_1: "الذكاء الاستراتيجي السيادي،",
        hero_title_2: "التدقيق القراري والمحرك الاستراتيجي",
        hero_subtitle: "تصمم إي-ميتا لابز أنظمة تدقيق وحوكمة وقيادة استراتيجية لتحويل البيانات المعقدة إلى قرارات تنفيذية سريعة وموثوقة، عبر التحالف السيادي بين الذكاء الخوارزمي والإثبات التشفيري والتحكيم البشري الميداني.",
        hero_cta_start: "بدء إحالة استراتيجية",
        hero_cta_verify: "التحقق من بصمة SHA-256",
        metric_roi: "العائد الاستثماري المتوقع",
        metric_precision: "دقة التحليل القراري",
        metric_time: "تقليص زمن القرار",
        metric_efficiency: "مكاسب الكفاءة التشغيلية",

        manifesto_doctrine: "العقيدة والمنهجية",
        manifesto_title: "بيان السيادة لإي-ميتا لابز",
        manifesto_desc: "التحول لا يُفرض بمجرد برمجية عابرة، بل يقاد عبر الفهم الميداني الصارم والتحليل المنضبط للحقائق.",

        pillar1_title: "الذكاء الخوارزمي (CORTEX_03)",
        pillar1_desc: "تنظيم وتحليل البيانات المرسلة عن بُعد، ورصد التناقضات، ونمذجة سيناريوهات الصمود عبر محركنا الخوارزمي المتقدم.",
        pillar1_item1: "التمييز الصارم بين الحقائق والفرضيات",
        pillar1_item2: "نمذجة سيناريوهات المقاومة",
        pillar1_item3: "التتبع الكامل لمصادر البيانات",

        pillar2_title: "التشفير الإثباتي السيادي",
        pillar2_desc: "توليد بصمة تشفيرية SHA-256 لبيانات المهمة وتوثيقها بختم زمني OpenTimestamps لإثبات سلامة المستندات وأسبقيتها التاريخية.",
        pillar2_item1: "بصمة رقمية SHA-256 غير قابلة للتغيير",
        pillar2_item2: "توثيق بالبلوكشين عبر OpenTimestamps",
        pillar2_item3: "حجية قانونية وتعاقدية معززة",

        pillar3_title: "التحكيم البشري الميداني — المكتب التنفيذي",
        pillar3_desc: "الخيار ب (Option B): نزول ميداني حضوري من قبل خبير معتمد لرفع الشكوك حول التضاريس والحرارة والتحمل الهيدروليكي وسلسلة التبريد.",
        pillar3_item1: "فحص العائلات الخمس الحرجة",
        pillar3_item2: "توقيع ومصادقة خبير تنفيذي رفيع",
        pillar3_item3: "قفل زمني صارم لاتفاقية مستوى الخدمة (ساعتان)",

        ch19_kicker: "الفصل 19 — المعاينة الميدانية التواجهية (الخيار ب)",
        ch19_title: "عائلات الفحص الخمس للنقاط الحرجة",
        ch19_desc: "حينما يتطلب الأمر التحقق من الشروط الواقعية، يرسل المكتب التنفيذي خبيراً معتمداً لمقارنة الفرضيات الخوارزمية بالبنية المادية.",
        ch19_pt1_title: "1. التربة", ch19_pt1_sub: "طبيعة الأرض والعينات",
        ch19_pt2_title: "2. الهيدروليكا", ch19_pt2_sub: "الموارد وتصريف المياه",
        ch19_pt3_title: "3. المقاومة الحرارية", ch19_pt3_sub: "عتبات الحرارة والعمليات",
        ch19_pt4_title: "4. سلسلة التبريد", ch19_pt4_sub: "النقل والتخزين المبرد",
        ch19_pt5_title: "5. التضاريس والبنية", ch19_pt5_sub: "الوصول والمعدات الحيوية",

        sectors_kicker: "الخبرة القطاعية",
        sectors_title: "مصفوفة القطاعات العشرة الاستراتيجية",
        sectors_desc: "عقيدة تحكيم منهجية مصممة خصيصاً للتحديات الحرجة في كل قطاع حيوي.",
        sec_1: "الصناعات الزراعية والسيادة الغذائية",
        sec_2: "البنوك والتكنولوجيا المالية والتأمين",
        sec_3: "الطاقة والتعدين والنفط",
        sec_4: "اللوجستيات والموانئ وسلاسل الإمداد",
        sec_5: "الصحة والصيدلة والتكنولوجيا الحيوية",
        sec_6: "الاتصالات والبنية التحتية السحابية",
        sec_7: "البناء والأشغال العامة والأراضي",
        sec_8: "الصناعات التحويلية والإنتاج",
        sec_9: "القطاع الحكومي والسيادي",
        sec_10: "التجزئة والتوزيع والتجارة الكبرى",
        sectors_card_cta: "استكشاف المصفوفة",

        tiers_kicker: "المسارات والمخرجات",
        tiers_title: "بروتوكول التدقيق عبر 3 مستويات",
        tiers_desc: "من التشخيص الاستعجالي الأولي إلى المرافقة الاستراتيجية الدائمة في الغرفة التنفيذية.",

        tier1_name: "تشخيص الاكتشاف الاستعجالي",
        tier1_pages: "3 إلى 5 صفحات",
        tier1_price_eur: "0 €", tier1_price_usd: "$0", tier1_price_xof: "0 FCFA",
        tier1_period: "/ مجاناً",
        tier1_desc: "توجيه أولي وتأطير عاجل لكشف أهم الثغرات التي تتطلب قراراً سيادياً فورياً.",
        tier1_f1: "ملخص تنفيذي للموقف الحالي",
        tier1_f2: "رصد أهم 3 ثغرات ذات أولوية",
        tier1_f3: "مؤشر النضج القطاعي الأولي",
        tier1_f4: "توصيات استعجالية مرتبة",
        tier1_btn: "طلب المستوى الأول (مجاناً)",

        tier2_badge: "معيار الحوكمة المؤسسية",
        tier2_name: "التفويض المعتمد المصادق",
        tier2_pages: "15 إلى 25 صفحة",
        tier2_price_eur: "350 €", tier2_price_usd: "$380", tier2_price_xof: "230,000 FCFA",
        tier2_period: "/ للمهمة",
        tier2_desc: "تدقيق استراتيجي معمق يتضمن اختبارات صمود قطاعية ونمذجة مالية وختماً تشفيرياً SHA-256.",
        tier2_f1: "البيان التنفيذي ومصفوفة النضج",
        tier2_f2: "اختبارات مقاومة مالية وتشغيلية",
        tier2_f3: "خطة عمل تنفيذية لـ 30 / 60 / 90 يوماً",
        tier2_f4: "توثيق SHA-256 و OpenTimestamps",
        tier2_btn: "طلب التفويض المعتمد",

        tier3_name: "الغرفة التنفيذية الدائمة",
        tier3_pages: "25 إلى أكثر من 45 صفحة",
        tier3_price_eur: "1,450 €", tier3_price_usd: "$1,550", tier3_price_xof: "950,000 FCFA",
        tier3_period: "/ شهرياً",
        tier3_desc: "مرافقة استراتيجية دائمة لمجالس الإدارة والشركات القابضة والمؤسسات الحكومية.",
        tier3_f1: "رؤية موحدة للمجموعة والشركات التابعة",
        tier3_f2: "استشراف جيوسياسي واقتصادي كلي",
        tier3_f3: "تحكيم الاستثمارات وتوزيع رأس المال",
        tier3_f4: "مراجعة دورية للمخاطر والقرارات",
        tier3_btn: "التعاقد مع الغرفة التنفيذية",

        verify_kicker: "سجل NocoDB وقمرة التتبع",
        verify_title: "التحقق من التوثيق وتتبع المهمة",
        verify_desc: "أدخل المرجع القانوني للمهمة (مثال: MIS-2026-0842) للتحقق المباشر من سجل التشفير وحالة المعاينة الميدانية.",
        verify_placeholder: "مثال: MIS-2026-0842 أو بصمة SHA-256...",
        verify_btn: "استعلام",
        verify_quick: "أمثلة سريعة:",
        verify_lbl_status: "حالة المهمة",
        verify_lbl_sector: "القطاع الاستراتيجي",
        verify_lbl_optionb: "الخيار ب (المعاينة الميدانية)",
        verify_lbl_hash: "البصمة التشفيرية SHA-256",
        verify_badge_ots: "موثق بواسطة OpenTimestamps",

        modal_saisine_kicker: "الإحالة التنفيذية",
        modal_saisine_title: "بدء مهمة تدقيق سيادي",
        modal_saisine_desc: "أدخل معلومات مؤسستك، البلد، البريد الإلكتروني المهني، رقم الواتساب (أرقام فقط بدون +)، وأرفق ملفات التدقيق لبدء التحليل بالذكاء الاصطناعي والتوثيق الفوري T+0.",
        form_lbl_company: "اسم الشركة / الهيئة",
        form_ph_company: "مثال: شركة التعدين الغربية",
        form_lbl_country: "البلد / المنطقة",
        form_ph_country: "مثال: السنغال، الإمارات، فرنسا...",
        form_lbl_email: "البريد الإلكتروني المهني",
        form_ph_email: "executive@institution.com",
        form_lbl_whatsapp: "رقم الواتساب (أرقام فقط بدون '+')",
        form_ph_whatsapp: "221770000000",
        form_lbl_sector: "القطاع الاستراتيجي",
        form_lbl_tier: "مستوى التدخل",
        form_lbl_gateway: "بوابة الدفع الآمنة",
        gw_paytech: "باي تيك (غرب أفريقيا / أموال الهاتف / بطاقات)",
        gw_paydunya: "باي دونيا (بوابة إقليمية للشركات)",
        gw_stripe: "سترايب الدولي (بطاقات دولية وحسابات كبرى)",
        form_lbl_file: "ملفات التدقيق المرفقة (PDF, Excel, TXT)",
        form_file_hint: "تستخدم لحساب البصمة الرقمية والتحليل المعرفي عبر محرك Qdrant.",
        form_lbl_decision: "القرار الحرج أو المشكلة الاستراتيجية",
        form_ph_decision: "صف بإيجاز نقاط الاختناق أو القرارات المطلوبة...",
        form_btn_submit: "توليد المرجع وتوثيق المهمة (T+0)",

        footer_brand_desc: "أنظمة التحليل والحوكمة والقيادة الاستراتيجية. مكتب التحكيم الاستراتيجي المعزز.",
        footer_address_title: "E-META LABS SASU",
        footer_address_sub: "Face Débarcadère، روصو، السنغال",
        footer_nav_title: "التنقل السريع",
        footer_sovereignty_title: "السيادة والوثائق القانونية",
        footer_contact_title: "القنوات الدبلوماسية والمؤسسية",
        footer_rights: "© 2026 E-META LABS SASU. جميع الحقوق محفوظة. المرجع التنفيذي إصدار أكتوبر 2026."
    }
};

// ==============================================================================
// GESTIONNAIRE DYNAMIQUE : LANGUES, DEVISES & PERSISTANCE
// ==============================================================================

/**
 * Applique la langue sur l'ensemble des balises contenant l'attribut [data-i18n]
 * Gère le sens d'écriture (LTR / RTL pour l'Arabe) et la persistance.
 */
function setLanguage(lang) {
    if (!translations[lang]) lang = 'fr';
    
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // Sauvegarde de la préférence utilisateur
    localStorage.setItem('emeta_lang', lang);

    // Mise à jour de l'état actif des boutons de langue
    ['fr', 'en', 'es', 'ar'].forEach(l => {
        const btn = document.getElementById('lang' + l.toUpperCase());
        if (btn) {
            btn.className = (l === lang) ? 'underline font-bold text-gold' : 'hover:underline text-slate-400';
        }
    });

    // Remplacement des textes dans le DOM
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTGROUP') {
                el.label = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Maintien du paramètre de langue dans les liens inter-pages
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            const cleanHref = href.split('?')[0];
            link.href = cleanHref + '?lang=' + lang;
        }
    });
}

// Alias direct utilisable par les attributs onclick="setLang('en')"
window.setLang = function(lang) {
    setLanguage(lang);
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang;
    window.history.pushState({ path: newUrl }, '', newUrl);
};

/**
 * Gestionnaire du convertisseur de devises (EUR, USD, XOF Frs CFA)
 */
window.setCurrency = function(curr) {
    localStorage.setItem('emeta_currency', curr);

    ['EUR', 'USD', 'XOF'].forEach(c => {
        const btn = document.getElementById('curr' + c);
        if (btn) {
            btn.className = (c === curr) ? 'underline font-bold text-gold' : 'hover:underline text-slate-400';
        }
    });

    document.querySelectorAll('.price-tag').forEach(el => {
        if (curr === 'EUR' && el.dataset.eur) el.innerHTML = el.dataset.eur;
        if (curr === 'USD' && el.dataset.usd) el.innerHTML = el.dataset.usd;
        if (curr === 'XOF' && el.dataset.xof) el.innerHTML = el.dataset.xof;
    });
};

// ==============================================================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ==============================================================================
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Détermination de la langue active
    const activeLang = urlParams.get('lang') || localStorage.getItem('emeta_lang') || 'fr';
    setLanguage(activeLang);

    // Détermination de la devise active
    const activeCurrency = localStorage.getItem('emeta_currency') || 'EUR';
    setCurrency(activeCurrency);
});