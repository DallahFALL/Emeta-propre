const WEBHOOK_N8N_URL = "https://automation.e-metalabs.com/webhook/482700d1-501d-4237-b5a7-fc6ee6afdf45";
const AUTHORIZATION_KEY = "CORTEX2026";
const MIN_CONTEXT_LENGTH = 150;
const sectors = {
    agro: {
        name: "Agro-industrie & Souveraineté",
        metrics: [["RENDEMENT", "+24%"], ["PERTES STOCKAGE", "-18%"], ["CHAÎNE DU FROID", "99,8%"]],
        curve: [244, 222, 225, 183, 190, 153, 139]
    },
    energy: {
        name: "Énergie, Mines & Transition",
        metrics: [["PRODUCTION", "+17%"], ["COÛTS OPÉRATIONNELS", "-12%"], ["DISPONIBILITÉ", "94%"]],
        curve: [252, 224, 232, 186, 171, 148, 123]
    },
    banking: {
        name: "Banque, FinTech & Assurance",
        metrics: [["DÉCISION CRÉDIT", "+31%"], ["EXPOSITION RISQUE", "-22%"], ["CONFORMITÉ", "99,2%"]],
        curve: [249, 237, 204, 210, 157, 130, 96]
    },
    logistics: {
        name: "Logistique & Supply Chain",
        metrics: [["ROTATION DES FLUX", "+28%"], ["DÉLAIS PORTUAIRES", "-16%"], ["TRAÇABILITÉ", "97%"]],
        curve: [255, 223, 216, 188, 174, 126, 103]
    },
    health: {
        name: "Santé & Biotechnologies",
        metrics: [["DISPONIBILITÉ SOINS", "+19%"], ["RUPTURES DE STOCK", "-14%"], ["CONFORMITÉ", "99,5%"]],
        curve: [250, 230, 208, 212, 168, 151, 118]
    },
    telecom: {
        name: "Télécoms & Infrastructures",
        metrics: [["DISPONIBILITÉ RÉSEAU", "+35%"], ["INCIDENTS", "-23%"], ["CONTINUITÉ", "99,99%"]],
        curve: [255, 239, 211, 187, 156, 121, 82]
    },
    property: {
        name: "Immobilier & BTP",
        metrics: [["MAÎTRISE DES COÛTS", "+21%"], ["DÉRIVES PLANNING", "-17%"], ["AVANCEMENT", "96%"]],
        curve: [250, 230, 236, 191, 186, 142, 112]
    },
    public: {
        name: "Secteur Public & Para-public",
        metrics: [["EFFICACITÉ SERVICE", "+26%"], ["DÉLAIS TRAITEMENT", "-20%"], ["TRAÇABILITÉ", "98%"]],
        curve: [252, 226, 221, 176, 162, 143, 101]
    },
    retail: {
        name: "E-commerce & Retail",
        metrics: [["CONVERSION", "+29%"], ["RUPTURES DE STOCK", "-15%"], ["MARGE SUIVIE", "96%"]],
        curve: [253, 228, 214, 192, 153, 131, 97]
    },
    saas: {
        name: "SaaS & Éditeurs Cloud",
        metrics: [["RÉTENTION CLIENT", "+33%"], ["COÛTS INFRA", "-19%"], ["DISPONIBILITÉ", "99,9%"]],
        curve: [255, 235, 210, 194, 153, 113, 86]
    }
};

const uiDict = {
    fr: {
        counter: "Diagnostics Sécurisés & Scellés Cryptographiquement",
        heroTitle: "L'Intelligence Algorithmique & L'Arbitrage de l'Expert Humain",
        heroSubtitle: "L'alliance absolue de la Data, de la Cryptographie et de l'Arbitrage Terrain.",
        sovereignty: "<strong>Souveraineté Absolue :</strong> Vos mandats sont scellés par preuve d'antériorité immuable via <a href=\"https://opentimestamps.org/\" target=\"_blank\" rel=\"noopener noreferrer\">OpenTimestamps.org</a> et horodatés sur la Blockchain.",
        offerTitle: "Niveaux d'accréditation",
        offerIntro: "Retenez un niveau de mandat pour initialiser le registre d'ingestion décisionnelle.",
        discovery: "Diagnostic préliminaire de maturité et d'alignement sectoriel.",
        discoveryItems: ["Diagnostic flash préliminaire", "Score d'alignement sur 3 axes critiques", "Rapport d'orientation synthétique (3 pages)", "Horodatage serveur standard"],
        recommended: "RECOMMANDÉ DIRECTION",
        certified: "Investigation décisionnelle approfondie et rapport certifié de 15 à 25 pages.",
        certifiedItems: ["Rapport d'audit exhaustif (15 à 25 pages)", "Stress-tests financiers & matrice des risques", "Scellement probatoire OpenTimestamps", "Référence souveraine type MIS-2026-xxx"],
        executive: "Due diligence stratégique globale, arbitrage filiales et comités de direction.",
        executiveItems: ["Audit multidimensionnel filiales & holdings", "Modélisation prédictive des chocs exogènes", "Ancrage cryptographique renforcé", "Restitution privée avec le collège d'experts"],
        terminalTitle: "Terminal d'ingestion décisionnelle",
        terminalIntro: "Registre sécurisé de recevabilité des mandats et d'initialisation des audits stratégiques.",
        lockTitle: "TERMINAL EN ATTENTE D'ACCRÉDITATION",
        lockDesc: "Veuillez retenir un palier d'accréditation ci-dessus pour initialiser le registre d'ingestion.",
        missionLabel: "NOM DE L'ENTITÉ & SECTEUR D'ACTIVITÉ",
        contextLabel: "PROBLÉMATIQUE, EXPOSÉ DES ENJEUX & VULNÉRABILITÉS",
        fileLabel: "Joindre une pièce justificative ou trame comptable",
        placeholderMission: "Ex. : Société / groupe et domaine d'activité",
        placeholderContext: "Exposez le contexte, les enjeux, les outils et les vulnérabilités identifiés (150 caractères minimum).",
        fileNone: "Aucun fichier sélectionné",
        characterPrompt: "caractères minimum",
        characterReady: "Condition formelle de recevabilité du mandat",
        chooseStarter: "SÉLECTIONNER CE PALIER",
        choosePro: "RETENIR CE MANDAT",
        chooseExpert: "MANDATER LA CHAMBRE",
        modalTitle: "🛡️ Canal Sécurisé de Restitution",
        modalDescription: "Indiquez les coordonnées professionnelles de réception du rapport certifié.",
        emailLabel: "Email Professionnel",
        phoneLabel: "Ligne WhatsApp Directe",
        submit: "SCELLER & TRANSMETTRE AU PIPELINE n8n",
        sending: "SCELLEMENT & TRANSMISSION EN COURS…",
        contextError: "Le nom de l'entité et un exposé d'au moins 150 caractères sont requis.",
        contactError: "Veuillez renseigner un email professionnel et une ligne WhatsApp.",
        cryptoError: "Le scellement cryptographique nécessite un navigateur sécurisé (HTTPS) compatible Web Crypto.",
        success: "Mandat transmis au pipeline. Votre référence souveraine est ",
        transmissionError: "La transmission a échoué. Le mandat reste dans le terminal ; vérifiez votre connexion ou réessayez.",
        resetConfirm: "Réinitialiser le terminal et fermer la session d'habilitation ?",
        unlockError: "Clé d'habilitation invalide. Accès refusé."
    },
    en: {
        counter: "Secure Diagnostics & Cryptographically Sealed",
        heroTitle: "Algorithmic Intelligence & Human Expert Arbitration",
        heroSubtitle: "The absolute alliance of Data, Cryptography and Field Arbitration.",
        sovereignty: "<strong>Absolute Sovereignty:</strong> Mandates are sealed with immutable proof of existence via <a href=\"https://opentimestamps.org/\" target=\"_blank\" rel=\"noopener noreferrer\">OpenTimestamps.org</a> and timestamped on the Blockchain.",
        offerTitle: "Accreditation levels",
        offerIntro: "Select a mandate level to initialize the decision-ingestion register.",
        discovery: "Preliminary maturity and sector alignment diagnostic.",
        discoveryItems: ["Preliminary rapid diagnostic", "Alignment score across 3 critical axes", "Concise orientation report (3 pages)", "Standard server timestamp"],
        recommended: "RECOMMENDED FOR LEADERSHIP",
        certified: "In-depth decision investigation and certified 15–25-page report.",
        certifiedItems: ["Comprehensive audit report (15–25 pages)", "Financial stress tests & risk matrix", "OpenTimestamps evidentiary seal", "Sovereign reference such as MIS-2026-xxx"],
        executive: "Global strategic due diligence, subsidiary arbitration and executive committees.",
        executiveItems: ["Multidimensional subsidiary & holding audit", "Predictive modelling of exogenous shocks", "Enhanced cryptographic anchoring", "Private presentation to the expert panel"],
        terminalTitle: "Decision ingestion terminal",
        terminalIntro: "Secure mandate admissibility register and strategic audit initiation.",
        lockTitle: "TERMINAL AWAITING ACCREDITATION",
        lockDesc: "Select an accreditation tier above to initialize the ingestion register.",
        missionLabel: "ENTITY NAME & BUSINESS SECTOR",
        contextLabel: "PROBLEM, KEY ISSUES & VULNERABILITIES",
        fileLabel: "Attach supporting document or accounting records",
        placeholderMission: "E.g. company / group and business sector",
        placeholderContext: "Describe the context, issues, tools and identified vulnerabilities (150 characters minimum).",
        fileNone: "No file selected",
        characterPrompt: "characters minimum",
        characterReady: "Formal mandate admissibility requirement",
        chooseStarter: "SELECT THIS TIER",
        choosePro: "RETAIN THIS MANDATE",
        chooseExpert: "APPOINT THE CHAMBER",
        modalTitle: "🛡️ Secure Delivery Channel",
        modalDescription: "Provide professional contact details for delivery of the certified report.",
        emailLabel: "Professional email",
        phoneLabel: "Direct WhatsApp line",
        submit: "SEAL & TRANSMIT TO n8n PIPELINE",
        sending: "SEALING & TRANSMITTING…",
        contextError: "Entity name and a statement of at least 150 characters are required.",
        contactError: "Enter a professional email address and WhatsApp line.",
        cryptoError: "Cryptographic sealing requires a secure (HTTPS) browser with Web Crypto support.",
        success: "Mandate sent to the pipeline. Your sovereign reference is ",
        transmissionError: "Transmission failed. Your mandate remains in the terminal; check your connection or retry.",
        resetConfirm: "Reset the terminal and end the authorization session?",
        unlockError: "Invalid authorization key. Access denied."
    },
    es: {
        counter: "Diagnósticos Seguros y Sellados Criptográficamente",
        heroTitle: "Inteligencia Algorítmica y Arbitraje del Experto Humano",
        heroSubtitle: "La alianza absoluta de Datos, Criptografía y Arbitraje sobre el Terreno.",
        sovereignty: "<strong>Soberanía Absoluta:</strong> Los mandatos se sellan con prueba inmutable de anterioridad mediante <a href=\"https://opentimestamps.org/\" target=\"_blank\" rel=\"noopener noreferrer\">OpenTimestamps.org</a> y marca temporal en Blockchain.",
        offerTitle: "Niveles de acreditación",
        offerIntro: "Seleccione un nivel de mandato para iniciar el registro de ingestión decisional.",
        discovery: "Diagnóstico preliminar de madurez y alineación sectorial.",
        discoveryItems: ["Diagnóstico rápido preliminar", "Puntuación de alineación en 3 ejes críticos", "Informe sintético de orientación (3 páginas)", "Marca temporal estándar del servidor"],
        recommended: "RECOMENDADO PARA DIRECCIÓN",
        certified: "Investigación decisional exhaustiva e informe certificado de 15 a 25 páginas.",
        certifiedItems: ["Informe de auditoría exhaustivo (15 a 25 páginas)", "Pruebas financieras de estrés y matriz de riesgos", "Sellado probatorio OpenTimestamps", "Referencia soberana tipo MIS-2026-xxx"],
        executive: "Due diligence estratégica global, arbitraje de filiales y comités de dirección.",
        executiveItems: ["Auditoría multidimensional de filiales y holdings", "Modelización predictiva de impactos exógenos", "Anclaje criptográfico reforzado", "Presentación privada ante el colegio de expertos"],
        terminalTitle: "Terminal de ingestión decisional",
        terminalIntro: "Registro seguro de admisibilidad e inicialización de auditorías estratégicas.",
        lockTitle: "TERMINAL A LA ESPERA DE ACREDITACIÓN",
        lockDesc: "Seleccione un nivel de acreditación para iniciar el registro de ingestión.",
        missionLabel: "NOMBRE DE LA ENTIDAD Y SECTOR DE ACTIVIDAD",
        contextLabel: "PROBLEMÁTICA, CUESTIONES CLAVE Y VULNERABILIDADES",
        fileLabel: "Adjuntar justificante o documentación contable",
        placeholderMission: "Ej.: empresa / grupo y sector de actividad",
        placeholderContext: "Describa el contexto, los retos y las vulnerabilidades identificadas (mínimo 150 caracteres).",
        fileNone: "Ningún archivo seleccionado",
        characterPrompt: "caracteres mínimos",
        characterReady: "Requisito formal de admisibilidad del mandato",
        chooseStarter: "SELECCIONAR ESTE NIVEL",
        choosePro: "RETENER ESTE MANDATO",
        chooseExpert: "ENCARGAR A LA CÁMARA",
        modalTitle: "🛡️ Canal Seguro de Entrega",
        modalDescription: "Indique los datos profesionales para recibir el informe certificado.",
        emailLabel: "Correo profesional",
        phoneLabel: "Línea directa de WhatsApp",
        submit: "SELLAR Y TRANSMITIR AL PIPELINE n8n",
        sending: "SELLANDO Y TRANSMITIENDO…",
        contextError: "Se requiere el nombre de la entidad y una descripción de al menos 150 caracteres.",
        contactError: "Introduzca un correo profesional y un número de WhatsApp.",
        cryptoError: "El sellado criptográfico requiere un navegador seguro (HTTPS) compatible con Web Crypto.",
        success: "Mandato transmitido al pipeline. Su referencia soberana es ",
        transmissionError: "La transmisión falló. El mandato permanece en el terminal; compruebe la conexión o inténtelo de nuevo.",
        resetConfirm: "¿Restablecer el terminal y cerrar la sesión de autorización?",
        unlockError: "Clave de autorización no válida. Acceso denegado."
    },
    ar: {
        counter: "تشخيصات آمنة ومختومة تشفيرياً",
        heroTitle: "الذكاء الخوارزمي وتحكيم الخبير البشري",
        heroSubtitle: "تحالف البيانات والتشفير والتحكيم الميداني.",
        sovereignty: "<strong>سيادة مطلقة:</strong> تُختم التفويضات بإثبات أسبقية غير قابل للتغيير عبر <a href=\"https://opentimestamps.org/\" target=\"_blank\" rel=\"noopener noreferrer\">OpenTimestamps.org</a> وتُؤرشف على سلسلة الكتل.",
        offerTitle: "مستويات الاعتماد",
        offerIntro: "اختر مستوى التفويض لبدء سجل الإدخال واتخاذ القرار.",
        discovery: "تشخيص أولي للنضج والمواءمة القطاعية.",
        discoveryItems: ["تشخيص أولي سريع", "درجة المواءمة عبر 3 محاور أساسية", "تقرير توجيهي موجز (3 صفحات)", "ختم زمني قياسي للخادم"],
        recommended: "موصى به للإدارة",
        certified: "تحقيق معمق لاتخاذ القرار وتقرير معتمد من 15 إلى 25 صفحة.",
        certifiedItems: ["تقرير تدقيق شامل (15 إلى 25 صفحة)", "اختبارات ضغط مالية ومصفوفة مخاطر", "ختم إثبات OpenTimestamps", "مرجع سيادي من نوع MIS-2026-xxx"],
        executive: "عناية استراتيجية شاملة وتحكيم الشركات التابعة ولجان الإدارة.",
        executiveItems: ["تدقيق متعدد الأبعاد للشركات القابضة والتابعة", "نمذجة تنبؤية للصدمات الخارجية", "تعزيز التثبيت التشفيري", "عرض خاص أمام هيئة الخبراء"],
        terminalTitle: "محطة الإدخال واتخاذ القرار",
        terminalIntro: "سجل آمن لقبول التفويضات وبدء التدقيق الاستراتيجي.",
        lockTitle: "المحطة بانتظار الاعتماد",
        lockDesc: "يرجى اختيار مستوى اعتماد أعلاه لبدء سجل الإدخال.",
        missionLabel: "اسم الكيان والقطاع الاقتصادي",
        contextLabel: "المشكلة والقضايا الرئيسية ومواطن الضعف",
        fileLabel: "إرفاق مستند داعم أو سجلات محاسبية",
        placeholderMission: "مثال: الشركة / المجموعة والقطاع الاقتصادي",
        placeholderContext: "اشرح السياق والقضايا ومواطن الضعف المحددة (150 حرفاً على الأقل).",
        fileNone: "لم يتم اختيار ملف",
        characterPrompt: "حرفاً كحد أدنى",
        characterReady: "شرط رسمي لقبول التفويض",
        chooseStarter: "اختيار هذا المستوى",
        choosePro: "اعتماد هذا التفويض",
        chooseExpert: "تكليف الغرفة",
        modalTitle: "🛡️ قناة تسليم آمنة",
        modalDescription: "أدخل بيانات الاتصال المهنية لتسليم التقرير المعتمد.",
        emailLabel: "البريد الإلكتروني المهني",
        phoneLabel: "رقم واتساب مباشر",
        submit: "ختم وإرسال إلى مسار n8n",
        sending: "جارٍ الختم والإرسال…",
        contextError: "اسم الكيان ووصف لا يقل عن 150 حرفاً مطلوبان.",
        contactError: "يرجى إدخال بريد مهني ورقم واتساب.",
        cryptoError: "يتطلب الختم التشفيري متصفحاً آمناً (HTTPS) يدعم Web Crypto.",
        success: "تم إرسال التفويض إلى مسار المعالجة. المرجع السيادي هو ",
        transmissionError: "فشل الإرسال. لا يزال التفويض محفوظاً في المحطة؛ تحقق من الاتصال أو أعد المحاولة.",
        resetConfirm: "إعادة ضبط المحطة وإنهاء جلسة الاعتماد؟",
        unlockError: "مفتاح اعتماد غير صالح. تم رفض الوصول."
    }
};

let currentLang = "fr";
let activePricingPlan = "";
let activeMandateReference = "";
let activeModalId = "";
let activeSectorId = "agro";

function setText(id, text) {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
}

function setHtml(id, html) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
}

function applyListTranslations(ids, values) {
    ids.forEach((id, index) => setText(id, values[index]));
}

function switchLang(lang) {
    if (!Object.prototype.hasOwnProperty.call(uiDict, lang)) return;
    currentLang = lang;
    try {
        localStorage.setItem("emeta_lang", lang);
    } catch (error) {
        console.warn("La préférence de langue ne peut pas être mémorisée.", error);
    }

    const t = uiDict[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setText("ui-lbl-counter", t.counter);
    setHtml("ui-banner-ots", `<span aria-hidden="true">🛡️</span><p>${t.sovereignty}</p>`);
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    setText("ui-hero-subtitle", t.heroSubtitle);
    setText("ui-title-01", t.offerTitle);
    setText("ui-offer-intro", t.offerIntro);
    setText("ui-starter-desc", t.discovery);
    setText("ui-pro-badge", t.recommended);
    setText("ui-pro-desc", t.certified);
    setText("ui-expert-desc", t.executive);
    applyListTranslations(["ui-st-1", "ui-st-2", "ui-st-3", "ui-st-4"], t.discoveryItems);
    applyListTranslations(["ui-pr-1", "ui-pr-2", "ui-pr-3", "ui-pr-4"], t.certifiedItems);
    applyListTranslations(["ui-ex-1", "ui-ex-2", "ui-ex-3", "ui-ex-4"], t.executiveItems);
    setText("ui-btn-starter", t.chooseStarter);
    setText("ui-btn-pro", t.choosePro);
    setText("ui-btn-expert", t.chooseExpert);
    setText("ui-terminal-title", t.terminalTitle);
    setText("ui-terminal-desc", t.terminalIntro);
    setText("ui-lock-title", t.lockTitle);
    setText("ui-lock-desc", t.lockDesc);
    setText("ui-lbl-mission", `${t.missionLabel} *`);
    setText("ui-lbl-contexte", `${t.contextLabel} * (MIN. ${MIN_CONTEXT_LENGTH} CARACTÈRES)`);
    setText("ui-lbl-file", t.fileLabel);
    const missionInput = document.getElementById("mission_nom");
    const contextInput = document.getElementById("mission_contexte");
    if (missionInput) missionInput.placeholder = t.placeholderMission;
    if (contextInput) contextInput.placeholder = t.placeholderContext;
    setText("ui-modal-secure-title", t.modalTitle);
    setText("ui-modal-secure-desc", t.modalDescription);
    setText("ui-lbl-email", `${t.emailLabel} *`);
    setText("ui-lbl-phone", `${t.phoneLabel} *`);
    setText("btn-fire-ia", t.submit);
    setText("ui-footer-rights", lang === "fr"
        ? "© 2026 E-META LABS SASU. Tous droits réservés."
        : lang === "en"
            ? "© 2026 E-META LABS SASU. All rights reserved."
            : lang === "es"
                ? "© 2026 E-META LABS SASU. Todos los derechos reservados."
                : "© 2026 E-META LABS SASU. جميع الحقوق محفوظة.");
    document.querySelectorAll(".lang-switch button").forEach((button) => {
        const selected = button.dataset.lang === lang;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    updateContextCounter();
}

function buildSectorCurve(values) {
    const xStep = 600 / (values.length - 1);
    const points = values.map((y, index) => [Math.round(index * xStep), y]);
    let line = `M${points[0][0]} ${points[0][1]}`;
    for (let index = 1; index < points.length; index += 1) {
        const previous = points[index - 1];
        const current = points[index];
        const middleX = Math.round((previous[0] + current[0]) / 2);
        line += ` Q${middleX} ${previous[1]} ${current[0]} ${current[1]}`;
    }
    return { line, area: `${line} L600 300 L0 300 Z` };
}

function selectSector(sectorId) {
    const sector = sectors[sectorId];
    if (!sector) return;
    activeSectorId = sectorId;
    document.querySelectorAll(".sector-badge").forEach((button) => {
        const selected = button.dataset.sector === sectorId;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    sector.metrics.forEach(([label, value], index) => {
        setText(`metric-label-${index + 1}`, label);
        setText(`metric-value-${index + 1}`, value);
    });
    const { line, area } = buildSectorCurve(sector.curve);
    const chartLine = document.getElementById("performance-line");
    const chartArea = document.getElementById("performance-area");
    if (chartLine) chartLine.setAttribute("d", line);
    if (chartArea) chartArea.setAttribute("d", area);
    const chart = document.querySelector(".performance-chart");
    if (chart) chart.setAttribute("aria-label", `Graphique de performance — ${sector.name}`);
    setText("chart-rise", sector.metrics[0][1]);

    const missionInput = document.getElementById("mission_nom");
    if (missionInput) {
        missionInput.value = sector.name;
        missionInput.placeholder = `${sector.name} — nom de l'entité`;
    }
    setStatus("terminal-status", "");
}

function createMandateReference() {
    const digits = new Uint32Array(1);
    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(digits);
    } else {
        digits[0] = Math.floor(Math.random() * 10000);
    }
    return `MIS-2026-${String(digits[0] % 10000).padStart(4, "0")}`;
}

function unlockTerminal(planName, price) {
    activePricingPlan = `${planName} — ${price}`;
    activeMandateReference = createMandateReference();
    setText("mandate-reference", activeMandateReference);
    setText("badge-plan-selected", `${planName} · ${price}`);

    const shell = document.getElementById("terminal-container");
    const overlay = document.getElementById("terminal-lock-overlay");
    const badge = document.getElementById("badge-plan-selected");
    if (overlay) {
        overlay.style.opacity = "0";
        window.setTimeout(() => { overlay.hidden = true; }, 360);
    }
    if (shell) {
        shell.classList.add("is-accredited");
        shell.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (badge) badge.hidden = false;
    updateContextCounter();
    window.setTimeout(() => document.getElementById("mission_nom")?.focus(), 400);
}

function lockApplication() {
    document.getElementById("application").hidden = true;
    document.getElementById("authorization-screen").hidden = false;
    const input = document.getElementById("authorization-key");
    input.value = "";
    input.focus();
    setText("authorization-error", "");
}

function resetTerminal() {
    if (!window.confirm(uiDict[currentLang].resetConfirm)) return;
    document.getElementById("authorization-form").reset();
    document.getElementById("mission_nom").value = "";
    document.getElementById("mission_contexte").value = "";
    document.getElementById("user-file").value = "";
    document.getElementById("auto-email").value = "";
    document.getElementById("auto-phone").value = "";
    activePricingPlan = "";
    activeMandateReference = "";
    activeSectorId = "agro";
    selectSector("agro");
    const overlay = document.getElementById("terminal-lock-overlay");
    overlay.hidden = false;
    overlay.style.display = "";
    overlay.style.opacity = "1";
    document.getElementById("terminal-container").classList.remove("is-accredited");
    document.getElementById("badge-plan-selected").hidden = true;
    document.getElementById("mandate-reference").textContent = "À GÉNÉRER APRÈS ACCRÉDITATION";
    setText("file-name", uiDict[currentLang].fileNone);
    setStatus("terminal-status", "");
    setStatus("modal-status", "");
    const submitButton = document.getElementById("ui-btn-analyse");
    if (submitButton) submitButton.disabled = true;
    closeModal(activeModalId);
    updateContextCounter();
    lockApplication();
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    activeModalId = modalId;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const focusTarget = modal.querySelector("input, button");
    if (focusTarget) focusTarget.focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (activeModalId === modalId) activeModalId = "";
    if (!document.querySelector(".modal-overlay.is-open")) document.body.classList.remove("modal-open");
}

function setStatus(id, message, type = "") {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = message;
    element.classList.remove("error", "success");
    if (type) element.classList.add(type);
}

function updateContextCounter() {
    const context = document.getElementById("mission_contexte");
    const counter = document.getElementById("context-counter");
    const meter = counter?.closest(".character-meter");
    const submit = document.getElementById("ui-btn-analyse");
    if (!context || !counter || !submit) return;
    const length = context.value.trim().length;
    const ready = length >= MIN_CONTEXT_LENGTH;
    counter.textContent = `${length} / ${MIN_CONTEXT_LENGTH} ${uiDict[currentLang].characterPrompt}`;
    if (meter) meter.classList.toggle("valid", ready);
    submit.disabled = !ready || !activePricingPlan;
}

function triggerSniperCapture() {
    const missionName = document.getElementById("mission_nom").value.trim();
    const context = document.getElementById("mission_contexte").value.trim();
    if (!activePricingPlan) {
        setStatus("terminal-status", uiDict[currentLang].lockDesc, "error");
        return;
    }
    if (!missionName || context.length < MIN_CONTEXT_LENGTH) {
        setStatus("terminal-status", uiDict[currentLang].contextError, "error");
        updateContextCounter();
        return;
    }
    setStatus("terminal-status", "");
    setStatus("modal-status", "");
    openModal("autoDetectModal");
}

function fileAsDataUrl(file) {
    if (!file) return Promise.resolve(null);
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            name: file.name,
            type: file.type,
            data: reader.result
        });
        reader.onerror = () => reject(new Error("Impossible de lire le fichier joint."));
        reader.readAsDataURL(file);
    });
}

async function createMandateFingerprint(payload, attachment) {
    if (!window.crypto?.subtle || !window.TextEncoder) {
        throw new Error(uiDict[currentLang].cryptoError);
    }
    const fileBytes = attachment ? await (await fetch(attachment.data)).arrayBuffer() : new ArrayBuffer(0);
    const mandateBytes = new TextEncoder().encode([
        payload.reference,
        payload.mission_nom,
        payload.mission_contexte,
        payload.plan_choisi
    ].join("\n"));
    const combined = new Uint8Array(mandateBytes.length + fileBytes.byteLength);
    combined.set(mandateBytes);
    combined.set(new Uint8Array(fileBytes), mandateBytes.length);
    const digest = await window.crypto.subtle.digest("SHA-256", combined);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function fireAutoDetection() {
    const email = document.getElementById("auto-email").value.trim();
    const phone = document.getElementById("auto-phone").value.trim();
    const missionName = document.getElementById("mission_nom").value.trim();
    const context = document.getElementById("mission_contexte").value.trim();
    const file = document.getElementById("user-file").files[0] || null;
    const button = document.getElementById("btn-fire-ia");
    const t = uiDict[currentLang];

    if (!email || !phone) {
        setStatus("modal-status", t.contactError, "error");
        return;
    }
    if (!missionName || context.length < MIN_CONTEXT_LENGTH || !activePricingPlan || !activeMandateReference) {
        closeModal("autoDetectModal");
        setStatus("terminal-status", t.contextError, "error");
        return;
    }

    button.disabled = true;
    setText("btn-fire-ia", t.sending);
    setStatus("modal-status", "");
    try {
        const attachment = await fileAsDataUrl(file);
        const payload = {
            source: "e-META LABS — Mandat décisionnel certifié",
            date: new Date().toISOString(),
            reference: activeMandateReference,
            email_client: email,
            telephone_client: phone,
            mission_nom: missionName,
            mission_contexte: context,
            langue: currentLang,
            plan_choisi: activePricingPlan,
            secteur_selectionne: sectors[activeSectorId].name,
            piece_justificative: attachment
        };
        payload.empreinte_sha256 = await createMandateFingerprint(payload, attachment);

        const response = await fetch(WEBHOOK_N8N_URL, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error(`Réponse du pipeline : ${response.status}`);

        let responseData = {};
        const responseText = await response.text();
        if (responseText) {
            try {
                responseData = JSON.parse(responseText);
            } catch (error) {
                console.warn("Réponse non JSON du pipeline.", error);
            }
        }
        const reference = responseData.reference || responseData.ref || activeMandateReference;
        closeModal("autoDetectModal");
        setStatus("terminal-status", `${t.success}${reference}`, "success");
        window.setTimeout(() => {
            window.location.href = `tracker.html?ref=${encodeURIComponent(reference)}`;
        }, 1400);
    } catch (error) {
        console.error("Erreur de scellement ou de transmission du mandat :", error);
        setStatus("modal-status", error.message === t.cryptoError ? t.cryptoError : t.transmissionError, "error");
        button.disabled = false;
        setText("btn-fire-ia", t.submit);
    }
}

function initializeAuthorization() {
    const form = document.getElementById("authorization-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const enteredKey = document.getElementById("authorization-key").value;
        if (enteredKey !== AUTHORIZATION_KEY) {
            setText("authorization-error", uiDict[currentLang].unlockError);
            document.getElementById("authorization-key").select();
            return;
        }
        setText("authorization-error", "");
        document.getElementById("authorization-screen").hidden = true;
        document.getElementById("application").hidden = false;
        document.getElementById("mission_nom").focus({ preventScroll: true });
    });
}

function initializeTerminal() {
    document.getElementById("mission_contexte").addEventListener("input", updateContextCounter);
    document.getElementById("user-file").addEventListener("change", (event) => {
        const file = event.target.files[0];
        setText("file-name", file ? file.name : uiDict[currentLang].fileNone);
    });
    document.querySelectorAll(".modal-overlay").forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeModal(modal.id);
        });
        document.querySelectorAll(".sector-badge").forEach((button) => {
            button.addEventListener("click", () => selectSector(button.dataset.sector));
        });
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && activeModalId) closeModal(activeModalId);
    });

    let savedLang = "fr";
    try {
        const requestedLang = new URLSearchParams(window.location.search).get("lang");
        savedLang = requestedLang || localStorage.getItem("emeta_lang") || "fr";
    } catch (error) {
        console.warn("La langue mémorisée est inaccessible ; la langue française est utilisée.", error);
    }
    switchLang(savedLang);
    selectSector(activeSectorId);
    initializeAuthorization();
    updateContextCounter();
}

document.addEventListener("DOMContentLoaded", initializeTerminal);
