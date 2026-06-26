// ==========================================
// CONFIGURATION GLOBALE
// ==========================================
const WEBHOOK_N8N_URL = "https://automation.e-metalabs.com/webhook/reception-emeta"; 

// ==========================================
// DICTIONNAIRE MULTILINGUE (UI)
// ==========================================
const uiDict = {
    fr: {
        counter: "Diagnostics Sécurisés & Ancrés",
        hero1: "Excellence Stratégique",
        hero2: "& Haute Précision IA",
        sloganTech: "Conçu pour la Tech. Bâti pour l'absolu.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>Souveraineté Absolue :</strong> Vos requêtes sont cryptées et ancrées sur la Blockchain (Proof of Existence) via <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. SÉLECTIONNEZ VOTRE NIVEAU D'ACCRÉDITATION",
        title02: "02. SOUMISSION DES DONNÉES",
        
        badgeBeta: "🚀 Tarifs Early Adopter - Phase Beta",
        priceStarter: "0 €",
        pricePro: "25 €",
        priceExpert: "49 €",
        stDesc: "Pour tester la puissance analytique d'e-META LABS.",
        st1: "✓ 2 Diagnostics foudroyants", st2: "✓ Identification du risque majeur", st3: "✓ Format texte (Email)", st4: "⚠️ Plan d'action non inclus",
        btnAct: "ACTIVER CE PLAN",
        proBadge: "LE PLUS POPULAIRE",
        proDesc: "Un pack de <strong>3 audits stratégiques</strong> complets et sans concession.",
        pr1: "<strong style='color: #d4af37;'>✓ 3 Rapports complets</strong>", pr2: "✓ Diagnostic financier & KPI", pr3: "✓ Stratégies de disruption", pr4: "✓ Rapports PDF Premium + Ancrage",
        exDesc: "Votre cellule de prospective disponible 24/7.",
        ex1: "✓ Jusqu'à 10 Audits / mois", ex2: "✓ Veille Data en temps réel", ex3: "✓ Protocole d'action sur 7 jours", ex4: "✓ Livraison VIP (WhatsApp)",
        
        lockTitle: "TERMINAL EN ATTENTE",
        lockDesc: "Veuillez sélectionner un plan ci-dessus pour déverrouiller l'Agent e-META.",
        termTitle: "TERMINAL DE DÉTECTION IA",
        termDesc: "Exposez simplement votre problématique stratégique ou technologique brute. L'Agent e-META analysera votre contexte et générera l'audit approprié.",
        promptPh: "Ex : Nous souhaitons automatiser notre processus culinaire traditionnel via une machine connectée...",
        btnAnalyse: "LANCER L'ANALYSE ET L'ANCRAGE OPENTIMESTAMPS",
        linkMatrice: "Consulter la matrice de nos 20 expertises sectorielles couvertes par l'IA",
        
        modalSecTitle: "Canal Sécurisé Requis",
        modalSecDesc: "Où l'Agent e-META doit-il vous transmettre les résultats de son analyse sectorielle ?",
        lblEmail: "Votre Email (Pour le rapport PDF)",
        lblPhone: "Votre Numéro WhatsApp (Pour l'échange en direct)",
        btnFire: "CONFIRMER ET TRANSMETTRE",
        
        alertEmpty: "⚠️ Veuillez détailler un peu plus votre problématique pour permettre à l'IA d'effectuer une analyse pertinente.",
        alertMiss: "Veuillez renseigner votre email et numéro WhatsApp pour sécuriser le canal.",
        alertSuccess: "✅ Données sécurisées reçues. L'Agent e-META est en train d'analyser votre contexte. Surveillez votre application WhatsApp !",
        alertError: "❌ Une erreur de connexion au serveur souverain est survenue.",

        linkMentions: "Mentions Légales",
        linkCgv: "CGV",
        linkConf: "Confidentialité",
        linkRemb: "Remboursement",
        footerRights: "&copy; 2026 E-META LABS SASU. Tous droits réservés.",
        footerUnit: "Strategic Intelligence Unit • Rosso - Dakar - Paris - Dubai - Shanghai - New York"
    },
    en: {
        counter: "Secured & Anchored Diagnostics",
        hero1: "Strategic Excellence",
        hero2: "& High Precision AI",
        sloganTech: "Built for Tech. Forged for the Absolute.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>Absolute Sovereignty:</strong> Your requests are encrypted and anchored on the Blockchain (Proof of Existence) via <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. SELECT YOUR ACCREDITATION LEVEL",
        title02: "02. DATA SUBMISSION",
        
        badgeBeta: "🚀 Early Adopter Pricing - Beta Phase",
        priceStarter: "$0",
        pricePro: "$25",
        priceExpert: "$49",
        stDesc: "To test the analytical power of e-META LABS.",
        st1: "✓ 2 Lightning Diagnostics", st2: "✓ Major risk identification", st3: "✓ Text format (Email)", st4: "⚠️ Action plan not included",
        btnAct: "ACTIVATE THIS PLAN",
        proBadge: "MOST POPULAR",
        proDesc: "A pack of <strong>3 complete strategic audits</strong> without compromise.",
        pr1: "<strong style='color: #d4af37;'>✓ 3 Complete Reports</strong>", pr2: "✓ Financial diagnosis & KPI", pr3: "✓ Disruption strategies", pr4: "✓ Premium PDF Reports + Anchoring",
        exDesc: "Your foresight unit available 24/7.",
        ex1: "✓ Up to 10 Audits / month", ex2: "✓ Real-time Data Watch", ex3: "✓ 7-day Action Protocol", ex4: "✓ VIP Delivery (WhatsApp)",

        lockTitle: "TERMINAL ON STANDBY",
        lockDesc: "Please select a plan above to unlock the e-META Agent.",
        termTitle: "AI DETECTION TERMINAL",
        termDesc: "Simply expose your raw strategic or technological problem. The e-META Agent will analyze your context.",
        promptPh: "Ex: We want to automate our traditional culinary process via a connected machine...",
        btnAnalyse: "LAUNCH ANALYSIS AND OPENTIMESTAMPS ANCHORING",
        linkMatrice: "Consult the matrix of our 20 AI-covered sector expertises",
        
        modalSecTitle: "Secure Channel Required",
        modalSecDesc: "Where should the e-META Agent transmit the results of its sectoral analysis?",
        lblEmail: "Your Email (For the PDF report)",
        lblPhone: "Your WhatsApp Number (For direct exchange)",
        btnFire: "CONFIRM AND TRANSMIT",
        
        alertEmpty: "⚠️ Please detail your problem a bit more.",
        alertMiss: "Please provide your email and WhatsApp number.",
        alertSuccess: "✅ Secured data received. The e-META Agent is analyzing your context. Monitor your WhatsApp!",
        alertError: "❌ A connection error occurred.",

        linkMentions: "Legal Notice",
        linkCgv: "Terms of Service",
        linkConf: "Privacy Policy",
        linkRemb: "Refund Policy",
        footerRights: "&copy; 2026 E-META LABS SASU. All rights reserved.",
        footerUnit: "Strategic Intelligence Unit • Rosso - Dakar - Paris - Dubai - Shanghai - New York"
    },
    es: {
        counter: "Diagnósticos Seguros y Anclados",
        hero1: "Excelencia Estratégica",
        hero2: "& Alta Precisión de IA",
        sloganTech: "Diseñado para la Tecnología. Forjado para lo Absoluto.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>Soberanía Absoluta:</strong> Sus solicitudes están encriptadas y ancladas en la Blockchain a través de <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. SELECCIONE SU NIVEL DE ACREDITACIÓN",
        title02: "02. ENVÍO DE DATOS",
        
        badgeBeta: "🚀 Precios Early Adopter - Fase Beta",
        priceStarter: "$0",
        pricePro: "$25",
        priceExpert: "$49",
        stDesc: "Para probar el poder analítico de e-META LABS.",
        st1: "✓ 2 Diagnósticos relámpago", st2: "✓ Identificación de riesgo principal", st3: "✓ Formato texto (Email)", st4: "⚠️ Plan de acción no incluido",
        btnAct: "ACTIVAR ESTE PLAN",
        proBadge: "MÁS POPULAR",
        proDesc: "Un pack de <strong>3 auditorías estratégicas completas</strong>.",
        pr1: "<strong style='color: #d4af37;'>✓ 3 Informes completos</strong>", pr2: "✓ Diagnóstico financiero y KPI", pr3: "✓ Estrategias de disrupción", pr4: "✓ Informes PDF Premium",
        exDesc: "Su unidad de prospectiva disponible 24/7.",
        ex1: "✓ Hasta 10 Auditorías / mes", ex2: "✓ Vigilancia de datos en tiempo real", ex3: "✓ Protocolo de acción (7 días)", ex4: "✓ Entrega VIP (WhatsApp)",

        lockTitle: "TERMINAL EN ESPERA",
        lockDesc: "Seleccione un plan arriba para desbloquear el Agente e-META.",
        termTitle: "TERMINAL DE DETECCIÓN IA",
        termDesc: "Simplemente exponga su problema estratégico bruto. El Agente e-META analizará su contexto.",
        promptPh: "Ej: Queremos automatizar nuestro proceso culinario tradicional...",
        btnAnalyse: "LANZAR ANÁLISIS Y ANCLAJE OPENTIMESTAMPS",
        linkMatrice: "Consulte la matriz de nuestras 20 experiencias sectoriales",
        
        modalSecTitle: "Canal Seguro Requerido",
        modalSecDesc: "¿Dónde debe el Agente e-META transmitirle los resultados?",
        lblEmail: "Su Correo (Para el informe PDF)",
        lblPhone: "Su Número de WhatsApp (Para intercambio directo)",
        btnFire: "CONFIRMAR Y TRANSMITIR",
        
        alertEmpty: "⚠️ Detalle un poco más su problema.",
        alertMiss: "Proporcione su correo y número de WhatsApp.",
        alertSuccess: "✅ Datos seguros recibidos. ¡Revise su WhatsApp!",
        alertError: "❌ Ocurrió un error de conexión.",

        linkMentions: "Aviso Legal",
        linkCgv: "Términos y Condiciones",
        linkConf: "Política de Privacidad",
        linkRemb: "Política de Reembolso",
        footerRights: "&copy; 2026 E-META LABS SASU. Todos los derechos reservados.",
        footerUnit: "Strategic Intelligence Unit • Rosso - Dakar - Paris - Dubai - Shanghai - New York"
    },
    ar: {
        counter: "التشخيصات الآمنة والمثبتة",
        hero1: "التميز الاستراتيجي",
        hero2: "ودقة الذكاء الاصطناعي العالية",
        sloganTech: "مصمم للتكنولوجيا. مبني للمطلق.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>السيادة المطلقة:</strong> طلباتك مشفرة ومثبتة على البلوكشين عبر <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. حدد مستوى الاعتماد الخاص بك",
        title02: "02. تقديم البيانات",
        
        badgeBeta: "🚀 أسعار المتبنين الأوائل - المرحلة التجريبية",
        priceStarter: "<span dir='ltr'>$0</span>",
        pricePro: "<span dir='ltr'>$25</span>",
        priceExpert: "<span dir='ltr'>$49</span>",
        
        stDesc: "لاختبار القوة التحليلية لـ e-META LABS.",
        st1: "&#x200F;✓ 2 تشخيصات سريعة", 
        st2: "&#x200F;✓ تحديد المخاطر الرئيسية", 
        st3: "&#x200F;✓ تنسيق النص (البريد الإلكتروني)", 
        st4: "&#x200F;⚠️ خطة العمل غير مشمولة",
        
        btnAct: "تفعيل هذه الخطة",
        proBadge: "الأكثر شعبية",
        proDesc: "مجموعة من <strong>3 عمليات تدقيق استراتيجية كاملة</strong>.",
        pr1: "<strong style='color: #d4af37;'>&#x200F;✓ 3 تقارير كاملة</strong>", 
        pr2: "&#x200F;✓ التشخيص المالي ومؤشرات الأداء", 
        pr3: "&#x200F;✓ استراتيجيات الابتكار", 
        pr4: "&#x200F;✓ تقارير PDF مميزة",
        
        exDesc: "وحدة الاستشراف الخاصة بك متاحة 24/7.",
        ex1: "&#x200F;✓ حتى 10 تدقيقات / شهر", 
        ex2: "&#x200F;✓ مراقبة البيانات في الوقت الفعلي", 
        ex3: "&#x200F;✓ بروتوكول عمل لمدة 7 أيام", 
        ex4: "&#x200F;✓ تسليم VIP (واتساب)",

        lockTitle: "المحطة في وضع الانتظار",
        lockDesc: "يرجى تحديد خطة أعلاه لفتح وكيل e-META.",
        termTitle: "محطة الكشف بالذكاء الاصطناعي",
        termDesc: "ما عليك سوى عرض مشكلتك الاستراتيجية. سيقوم وكيل e-META بتحليل السياق.",
        promptPh: "مثال: نريد أتمتة عملية الطهي التقليدية لدينا...",
        btnAnalyse: "إطلاق التحليل وتثبيت OPENTIMESTAMPS",
        linkMatrice: "استشر مصفوفة خبراتنا القطاعية العشرين",
        
        modalSecTitle: "قناة آمنة مطلوبة",
        modalSecDesc: "أين يجب أن ينقل وكيل e-META نتائج تحليله؟",
        lblEmail: "بريدك الإلكتروني (لتقرير PDF)",
        lblPhone: "رقم الواتساب الخاص بك (للتبادل المباشر)",
        btnFire: "تأكيد وإرسال",
        
        alertEmpty: "⚠️ يرجى تفصيل مشكلتك أكثر قليلاً.",
        alertMiss: "يرجى تقديم بريدك الإلكتروني ورقم الواتساب.",
        alertSuccess: "✅ تم استلام البيانات الآمنة. راقب تطبيق الواتساب الخاص بك!",
        alertError: "❌ حدث خطأ في الاتصال.",

        linkMentions: "إشعار قانوني",
        linkCgv: "شروط الخدمة",
        linkConf: "سياسة الخصوصية",
        linkRemb: "سياسة الاسترداد",
        footerRights: "&copy; 2026 E-META LABS SASU. كل الحقوق محفوظة.",
        footerUnit: "وحدة الاستخبارات الاستراتيجية • روسو - داكار - باريس - دبي - شنغهاي - نيويورك"
    }
};

let currentLang = 'fr';
let activePricingPlan = "Non sélectionné";

// FONCTIONS "FAIL-SAFE"
function safeText(id, text, isHTML = false) {
    const el = document.getElementById(id);
    if (el) {
        if (isHTML) el.innerHTML = text;
        else el.innerText = text;
    }
}
function safePlaceholder(id, text) {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
}

function switchLang(lang) {
    currentLang = lang;
    
    // MÉMOIRE PERSISTANTE : Sauvegarde le choix pour la navigation
    localStorage.setItem('emeta_lang', lang);
    const urlSuffix = `?lang=${lang}`;

    const t = uiDict[lang];
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // UI Globale
    safeText('ui-lbl-counter', t.counter);
    safeText('ui-hero-1', t.hero1);
    safeText('ui-hero-2', t.hero2);
    safeText('ui-slogan-tech', t.sloganTech);
    safeText('ui-banner-ots', t.bannerOts, true);
    safeText('ui-title-01', t.title01);
    safeText('ui-title-02', t.title02);
    
    safeText('ui-badge-beta', t.badgeBeta); // <-- Intégration du Badge Beta
    
    // Devises Dynamiques
    safeText('ui-price-starter', t.priceStarter, true);
    safeText('ui-price-pro', t.pricePro, true);
    safeText('ui-price-expert', t.priceExpert, true);

    // Pricing Texts
    safeText('ui-starter-desc', t.stDesc);
    safeText('ui-st-1', t.st1, true);
    safeText('ui-st-2', t.st2, true);
    safeText('ui-st-3', t.st3, true);
    safeText('ui-st-4', t.st4, true);
    safeText('ui-btn-starter', t.btnAct);

    safeText('ui-pro-badge', t.proBadge);
    safeText('ui-pro-desc', t.proDesc, true);
    safeText('ui-pr-1', t.pr1, true);
    safeText('ui-pr-2', t.pr2, true);
    safeText('ui-pr-3', t.pr3, true);
    safeText('ui-pr-4', t.pr4, true);
    safeText('ui-btn-pro', t.btnAct);

    safeText('ui-expert-desc', t.exDesc);
    safeText('ui-ex-1', t.ex1, true);
    safeText('ui-ex-2', t.ex2, true);
    safeText('ui-ex-3', t.ex3, true);
    safeText('ui-ex-4', t.ex4, true);
    safeText('ui-btn-expert', t.btnAct);

    // Terminal & Modal
    safeText('ui-lock-title', t.lockTitle);
    safeText('ui-lock-desc', t.lockDesc);
    safeText('ui-terminal-title', t.termTitle);
    safeText('ui-terminal-desc', t.termDesc);
    safePlaceholder('user-raw-prompt', t.promptPh);
    safeText('ui-btn-analyse', t.btnAnalyse);
    safeText('ui-link-matrice', t.linkMatrice);
    
    safeText('ui-modal-secure-title', t.modalSecTitle);
    safeText('ui-modal-secure-desc', t.modalSecDesc);
    safeText('ui-lbl-email', t.lblEmail);
    safeText('ui-lbl-phone', t.lblPhone);
    safeText('btn-fire-ia', t.btnFire);

    // Footer - Transmission de la langue dans l'URL
    safeText('ui-link-mentions', t.linkMentions);
    const linkMentionsEl = document.getElementById('ui-link-mentions');
    if(linkMentionsEl) linkMentionsEl.href = `mentions-legales.html${urlSuffix}`;

    safeText('ui-link-cgv', t.linkCgv);
    const linkCgvEl = document.getElementById('ui-link-cgv');
    if(linkCgvEl) linkCgvEl.href = `cgv.html${urlSuffix}`;

    safeText('ui-link-conf', t.linkConf);
    const linkConfEl = document.getElementById('ui-link-conf');
    if(linkConfEl) linkConfEl.href = `confidentialite.html${urlSuffix}`;

    safeText('ui-link-remb', t.linkRemb);
    const linkRembEl = document.getElementById('ui-link-remb');
    if(linkRembEl) linkRembEl.href = `remboursement.html${urlSuffix}`;

    safeText('ui-footer-rights', t.footerRights, true);
    safeText('ui-footer-unit', t.footerUnit);

    // Activation CSS des boutons
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-switch button[data-lang="${lang}"]`).classList.add('active');
}

// ==========================================
// LOGIQUE DU FUNNEL
// ==========================================
function unlockTerminal(planName) {
    activePricingPlan = planName;
    const container = document.getElementById('terminal-container');
    const overlay = document.getElementById('terminal-lock-overlay');
    const badge = document.getElementById('badge-plan-selected');
    
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 500);
    }
    if (container) {
        container.style.borderColor = 'rgba(37, 211, 102, 0.5)';
        container.style.boxShadow = '0 0 40px rgba(37, 211, 102, 0.15)';
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (badge) {
        badge.innerText = "MODE " + planName;
        badge.style.display = 'inline-block';
    }
    setTimeout(() => {
        const promptEl = document.getElementById('user-raw-prompt');
        if (promptEl) promptEl.focus();
    }, 800);
}

function resetTerminal() {
    const confirmMsg = currentLang === 'fr' ? "Voulez-vous réinitialiser le terminal ?" : 
                       currentLang === 'en' ? "Reset the terminal?" : 
                       currentLang === 'es' ? "¿Restablecer el terminal?" : "إعادة ضبط المحطة؟";
                       
    if(confirm(confirmMsg)) {
        const promptEl = document.getElementById('user-raw-prompt');
        const emailEl = document.getElementById('auto-email');
        const phoneEl = document.getElementById('auto-phone');
        
        if (promptEl) promptEl.value = '';
        if (emailEl) emailEl.value = '';
        if (phoneEl) phoneEl.value = '';
        
        activePricingPlan = "Non sélectionné";
        
        const overlay = document.getElementById('terminal-lock-overlay');
        const container = document.getElementById('terminal-container');
        const badge = document.getElementById('badge-plan-selected');
        
        if (overlay) { overlay.style.display = 'flex'; overlay.style.opacity = '1'; }
        if (container) { container.style.borderColor = 'rgba(136, 146, 176, 0.2)'; container.style.boxShadow = 'none'; }
        if (badge) badge.style.display = 'none';
        
        const hero = document.querySelector('.hero-sublime');
        if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// FONCTIONS DE LA MODALE & FETCH
// ==========================================
function openModal(modalId) { 
    const m = document.getElementById(modalId);
    if (m) m.style.display = 'flex'; 
}
function closeModal(modalId) { 
    const m = document.getElementById(modalId);
    if (m) m.style.display = 'none'; 
}

function triggerSniperCapture() {
    const promptEl = document.getElementById('user-raw-prompt');
    if (!promptEl) return;
    const rawPrompt = promptEl.value.trim();
    const t = uiDict[currentLang];
    
    if(!rawPrompt || rawPrompt.length < 15) { alert(t.alertEmpty); return; }
    openModal('autoDetectModal');
}

function fireAutoDetection() {
    const emailEl = document.getElementById('auto-email');
    const phoneEl = document.getElementById('auto-phone');
    const promptEl = document.getElementById('user-raw-prompt');
    
    if (!emailEl || !phoneEl || !promptEl) return;
    
    const email = emailEl.value.trim();
    const phone = phoneEl.value.trim();
    const rawPrompt = promptEl.value.trim();
    const t = uiDict[currentLang];

    if(!email || !phone) { alert(t.alertMiss); return; }

    const payload = {
        "source": "Web Chat Sniper",
        "date": new Date().toISOString(),
        "email_client": email,
        "telephone_client": phone,
        "problematique_brute": rawPrompt,
        "langue": currentLang,
        "plan_choisi": activePricingPlan
    };

    const btn = document.getElementById('btn-fire-ia');
    if (btn) {
        btn.innerHTML = "Transmission... ⏳";
        btn.style.opacity = "0.7";
        btn.disabled = true;
    }

    fetch(WEBHOOK_N8N_URL, {
        method: 'POST', mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error("Erreur serveur n8n");
        closeModal('autoDetectModal');
        promptEl.value = '';
        if (btn) { btn.innerHTML = t.btnFire; btn.style.opacity = "1"; btn.disabled = false; }
        
        activePricingPlan = "Non sélectionné";
        const overlay = document.getElementById('terminal-lock-overlay');
        const container = document.getElementById('terminal-container');
        const badge = document.getElementById('badge-plan-selected');
        
        if (overlay) { overlay.style.display = 'flex'; overlay.style.opacity = '1'; }
        if (container) { container.style.borderColor = 'rgba(136, 146, 176, 0.2)'; container.style.boxShadow = 'none'; }
        if (badge) badge.style.display = 'none';

        alert(t.alertSuccess);
    })
    .catch(error => {
        console.error("Erreur de transmission:", error);
        alert(t.alertError);
        if (btn) { btn.innerHTML = t.btnFire; btn.style.opacity = "1"; btn.disabled = false; }
    });
}

// ==========================================
// INITIALISATION INTELLIGENTE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Le script lit l'URL ou la mémoire, sinon il force le Français.
    const urlParams = new URLSearchParams(window.location.search);
    let savedLang = urlParams.get('lang') || localStorage.getItem('emeta_lang') || 'fr';
    
    // Sécurité au cas où la valeur serait corrompue
    if (!['fr', 'en', 'es', 'ar'].includes(savedLang)) savedLang = 'fr';
    
    switchLang(savedLang);
    
    const counterElement = document.getElementById('live-counter-top');
    if (counterElement) {
        let currentCount = 1380; const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++; counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) clearInterval(interval);
        }, 30); 
    }
});
