// ==========================================
// CONFIGURATION GLOBALE
// ==========================================
// URL DE PRODUCTION N8N
const WEBHOOK_N8N_URL = "https://automation.e-metalabs.com/webhook/matrice-auto-detection"; 

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
        
        // Pricing Texts
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
        alertError: "❌ Une erreur de connexion au serveur souverain est survenue."
    },
    en: {
        counter: "Secured & Anchored Diagnostics",
        hero1: "Strategic Excellence",
        hero2: "& High Precision AI",
        sloganTech: "Built for Tech. Forged for the Absolute.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>Absolute Sovereignty:</strong> Your requests are encrypted and anchored on the Blockchain (Proof of Existence) via <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. SELECT YOUR ACCREDITATION LEVEL",
        title02: "02. DATA SUBMISSION",
        
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
        alertError: "❌ A connection error occurred."
    },
    es: {
        counter: "Diagnósticos Seguros y Anclados",
        hero1: "Excelencia Estratégica",
        hero2: "& Alta Precisión de IA",
        sloganTech: "Diseñado para la Tecnología. Forjado para lo Absoluto.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>Soberanía Absoluta:</strong> Sus solicitudes están encriptadas y ancladas en la Blockchain a través de <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. SELECCIONE SU NIVEL DE ACREDITACIÓN",
        title02: "02. ENVÍO DE DATOS",
        
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
        alertError: "❌ Ocurrió un error de conexión."
    },
    ar: {
        counter: "التشخيصات الآمنة والمثبتة",
        hero1: "التميز الاستراتيجي",
        hero2: "ودقة الذكاء الاصطناعي العالية",
        sloganTech: "مصمم للتكنولوجيا. مبني للمطلق.",
        bannerOts: "🛡️ <strong style='font-weight: 600;'>السيادة المطلقة:</strong> طلباتك مشفرة ومثبتة على البلوكشين عبر <em style='text-shadow: 0 0 8px rgba(37, 211, 102, 0.5);'>OpenTimestamps.org</em>",
        title01: "01. حدد مستوى الاعتماد الخاص بك",
        title02: "02. تقديم البيانات",
        
        stDesc: "لاختبار القوة التحليلية لـ e-META LABS.",
        st1: "✓ 2 تشخيصات سريعة", st2: "✓ تحديد المخاطر الرئيسية", st3: "✓ تنسيق النص", st4: "⚠️ خطة العمل غير مشمولة",
        btnAct: "تفعيل هذه الخطة",
        proBadge: "الأكثر شعبية",
        proDesc: "مجموعة من <strong>3 عمليات تدقيق استراتيجية كاملة</strong>.",
        pr1: "<strong style='color: #d4af37;'>✓ 3 تقارير كاملة</strong>", pr2: "✓ التشخيص المالي", pr3: "✓ استراتيجيات الابتكار", pr4: "✓ تقارير PDF مميزة",
        exDesc: "وحدة الاستشراف الخاصة بك متاحة 24/7.",
        ex1: "✓ حتى 10 تدقيقات / شهر", ex2: "✓ مراقبة البيانات", ex3: "✓ بروتوكول عمل لمدة 7 أيام", ex4: "✓ تسليم VIP (واتساب)",

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
        alertError: "❌ حدث خطأ في الاتصال."
    }
};

let currentLang = 'fr';
let activePricingPlan = "Non sélectionné";

function switchLang(lang) {
    currentLang = lang;
    const t = uiDict[lang];
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Mise à jour de l'UI
    document.getElementById('ui-lbl-counter').innerText = t.counter;
    document.getElementById('ui-hero-1').innerText = t.hero1;
    document.getElementById('ui-hero-2').innerText = t.hero2;
    document.getElementById('ui-slogan-tech').innerText = t.sloganTech;
    document.getElementById('ui-banner-ots').innerHTML = t.bannerOts; 
    document.getElementById('ui-title-01').innerText = t.title01;
    document.getElementById('ui-title-02').innerText = t.title02;
    
    document.getElementById('ui-starter-desc').innerText = t.stDesc;
    document.getElementById('ui-st-1').innerText = t.st1;
    document.getElementById('ui-st-2').innerText = t.st2;
    document.getElementById('ui-st-3').innerText = t.st3;
    document.getElementById('ui-st-4').innerText = t.st4;
    document.getElementById('ui-btn-starter').innerText = t.btnAct;

    const proBadge = document.getElementById('ui-pro-badge');
    if(proBadge) proBadge.innerText = t.proBadge;
    document.getElementById('ui-pro-desc').innerHTML = t.proDesc;
    document.getElementById('ui-pr-1').innerHTML = t.pr1;
    document.getElementById('ui-pr-2').innerText = t.pr2;
    document.getElementById('ui-pr-3').innerText = t.pr3;
    document.getElementById('ui-pr-4').innerText = t.pr4;
    document.getElementById('ui-btn-pro').innerText = t.btnAct;

    document.getElementById('ui-expert-desc').innerText = t.exDesc;
    document.getElementById('ui-ex-1').innerText = t.ex1;
    document.getElementById('ui-ex-2').innerText = t.ex2;
    document.getElementById('ui-ex-3').innerText = t.ex3;
    document.getElementById('ui-ex-4').innerText = t.ex4;
    document.getElementById('ui-btn-expert').innerText = t.btnAct;

    document.getElementById('ui-lock-title').innerText = t.lockTitle;
    document.getElementById('ui-lock-desc').innerText = t.lockDesc;
    document.getElementById('ui-terminal-title').innerText = t.termTitle;
    document.getElementById('ui-terminal-desc').innerText = t.termDesc;
    document.getElementById('user-raw-prompt').placeholder = t.promptPh;
    document.getElementById('ui-btn-analyse').innerText = t.btnAnalyse;
    document.getElementById('ui-link-matrice').innerText = t.linkMatrice;
    
    document.getElementById('ui-modal-secure-title').innerText = t.modalSecTitle;
    document.getElementById('ui-modal-secure-desc').innerText = t.modalSecDesc;
    document.getElementById('ui-lbl-email').innerText = t.lblEmail;
    document.getElementById('ui-lbl-phone').innerText = t.lblPhone;
    document.getElementById('btn-fire-ia').innerText = t.btnFire;

    // Mise à jour du style des boutons de langue
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-switch button[data-lang="${lang}"]`).classList.add('active');
}

// ==========================================
// LOGIQUE DU FUNNEL (VERROUILLAGE / DÉVERROUILLAGE)
// ==========================================

function unlockTerminal(planName) {
    activePricingPlan = planName;
    
    const container = document.getElementById('terminal-container');
    const overlay = document.getElementById('terminal-lock-overlay');
    const badge = document.getElementById('badge-plan-selected');
    
    // Animation de déverrouillage
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);

    // Changement cosmétique du terminal (Passe du gris au Vert)
    container.style.borderColor = 'rgba(37, 211, 102, 0.5)';
    container.style.boxShadow = '0 0 40px rgba(37, 211, 102, 0.15)';
    
    // Mise à jour du badge
    badge.innerText = "MODE " + planName;
    badge.style.display = 'inline-block';
    
    // Scrolling fluide vers le terminal
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Focus automatique
    setTimeout(() => {
        document.getElementById('user-raw-prompt').focus();
    }, 800);
}

function resetTerminal() {
    const confirmMsg = currentLang === 'fr' ? "Voulez-vous réinitialiser le terminal ?" : 
                       currentLang === 'en' ? "Reset the terminal?" : 
                       currentLang === 'es' ? "¿Restablecer el terminal?" : "إعادة ضبط المحطة؟";
                       
    if(confirm(confirmMsg)) {
        document.getElementById('user-raw-prompt').value = '';
        document.getElementById('auto-email').value = '';
        document.getElementById('auto-phone').value = '';
        
        // Revérouillage
        activePricingPlan = "Non sélectionné";
        document.getElementById('terminal-lock-overlay').style.display = 'flex';
        document.getElementById('terminal-lock-overlay').style.opacity = '1';
        document.getElementById('terminal-container').style.borderColor = 'rgba(136, 146, 176, 0.2)';
        document.getElementById('terminal-container').style.boxShadow = 'none';
        document.getElementById('badge-plan-selected').style.display = 'none';
        
        document.querySelector('.hero-sublime').scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// FONCTIONS DE LA MODALE
// ==========================================

function openModal(modalId) { 
    document.getElementById(modalId).style.display = 'flex'; 
}

function closeModal(modalId) { 
    document.getElementById(modalId).style.display = 'none'; 
}

// ==========================================
// LOGIQUE DU WEB CHAT SNIPER (TIR FETCH)
// ==========================================

function triggerSniperCapture() {
    const rawPrompt = document.getElementById('user-raw-prompt').value.trim();
    const t = uiDict[currentLang];
    
    if(!rawPrompt || rawPrompt.length < 15) {
        alert(t.alertEmpty);
        return;
    }
    openModal('autoDetectModal');
}

function fireAutoDetection() {
    const email = document.getElementById('auto-email').value.trim();
    const phone = document.getElementById('auto-phone').value.trim();
    const rawPrompt = document.getElementById('user-raw-prompt').value.trim();
    const t = uiDict[currentLang];

    if(!email || !phone) {
        alert(t.alertMiss);
        return;
    }

    const payload = {
        "source": "Web Chat Sniper",
        "date": new Date().toISOString(),
        "email_client": email,
        "telephone_client": phone,
        "problematique_brute": rawPrompt,
        "langue": currentLang,
        "plan_choisi": activePricingPlan // On envoie le plan choisi à l'IA !
    };

    const btn = document.getElementById('btn-fire-ia');
    btn.innerHTML = "Transmission... ⏳";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // LE TIR VERS N8N
    fetch(WEBHOOK_N8N_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error("Erreur serveur n8n");
        closeModal('autoDetectModal');
        
        // Nettoyage et reset
        document.getElementById('user-raw-prompt').value = '';
        btn.innerHTML = t.btnFire;
        btn.style.opacity = "1";
        btn.disabled = false;
        
        // Re-verrouiller le terminal pour la prochaine session
        activePricingPlan = "Non sélectionné";
        document.getElementById('terminal-lock-overlay').style.display = 'flex';
        document.getElementById('terminal-lock-overlay').style.opacity = '1';
        document.getElementById('terminal-container').style.borderColor = 'rgba(136, 146, 176, 0.2)';
        document.getElementById('terminal-container').style.boxShadow = 'none';
        document.getElementById('badge-plan-selected').style.display = 'none';

        alert(t.alertSuccess);
    })
    .catch(error => {
        console.error("Erreur de transmission:", error);
        alert(t.alertError);
        btn.innerHTML = t.btnFire;
        btn.style.opacity = "1";
        btn.disabled = false;
    });
}

// ==========================================
// INITIALISATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Forcer la langue initiale
    switchLang('fr');
    
    // Compteur Live
    const counterElement = document.getElementById('live-counter-top');
    if (counterElement) {
        let currentCount = 1380; const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++; counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) clearInterval(interval);
        }, 30); 
    }
});
