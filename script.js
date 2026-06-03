// ==========================================
// CONFIGURATION GLOBALE
// ==========================================
// ⚠️ REMPLACEZ CETTE URL PAR VOTRE TEST URL n8n !
const WEBHOOK_N8N_URL = "https://automation.e-metalabs.com/webhook-test/matrice-auto-detection"; 

// ==========================================
// DICTIONNAIRE MULTILINGUE (UI)
// ==========================================
const uiDict = {
    fr: {
        counter: "Diagnostics Sécurisés & Ancrés",
        hero1: "Excellence Stratégique",
        hero2: "& Haute Précision IA",
        sloganTech: "Conçu pour la Tech. Bâti pour l'absolu.",
        termTitle: "TERMINAL DE DÉTECTION IA",
        termDesc: "Oubliez les formulaires statiques. Exposez simplement votre problématique stratégique ou technologique brute. L'Agent e-META analysera votre contexte et générera l'audit approprié.",
        promptPh: "Ex : Nous souhaitons automatiser notre processus culinaire traditionnel via une machine connectée, mais nous bloquons sur l'étude de faisabilité...",
        btnAnalyse: "LANCER L'ANALYSE SÉMANTIQUE",
        linkMatrice: "Consulter la matrice de nos 20 expertises sectorielles couvertes par l'IA",
        modalSecTitle: "Canal Sécurisé Requis",
        modalSecDesc: "Où l'Agent e-META doit-il vous transmettre les résultats de son analyse sectorielle ?",
        lblEmail: "Votre Email (Pour le rapport PDF)",
        lblPhone: "Votre Numéro WhatsApp (Pour l'échange en direct)",
        btnFire: "CONFIRMER ET TRANSMETTRE",
        alertEmpty: "⚠️ Veuillez détailler un peu plus votre problématique pour permettre à l'IA d'effectuer une analyse pertinente.",
        alertMiss: "Veuillez renseigner votre email et numéro WhatsApp pour sécuriser le canal.",
        alertSuccess: "✅ Données sécurisées reçues. L'Agent e-META est en train d'analyser votre contexte. Surveillez votre application WhatsApp !",
        alertError: "❌ Une erreur de connexion au serveur souverain est survenue. Vérifiez que votre URL Webhook est correcte dans script.js et que le CORS est autorisé sur n8n."
    },
    en: {
        counter: "Secured & Anchored Diagnostics",
        hero1: "Strategic Excellence",
        hero2: "& High Precision AI",
        sloganTech: "Built for Tech. Forged for the Absolute.",
        termTitle: "AI DETECTION TERMINAL",
        termDesc: "Forget static forms. Simply expose your raw strategic or technological problem. The e-META Agent will analyze your context and generate the appropriate audit.",
        promptPh: "Ex: We want to automate our traditional culinary process via a connected machine, but we are stuck on the feasibility study...",
        btnAnalyse: "LAUNCH SEMANTIC ANALYSIS",
        linkMatrice: "Consult the matrix of our 20 AI-covered sector expertises",
        modalSecTitle: "Secure Channel Required",
        modalSecDesc: "Where should the e-META Agent transmit the results of its sectoral analysis?",
        lblEmail: "Your Email (For the PDF report)",
        lblPhone: "Your WhatsApp Number (For direct exchange)",
        btnFire: "CONFIRM AND TRANSMIT",
        alertEmpty: "⚠️ Please detail your problem a bit more to allow the AI to perform a relevant analysis.",
        alertMiss: "Please provide your email and WhatsApp number to secure the channel.",
        alertSuccess: "✅ Secured data received. The e-META Agent is analyzing your context. Monitor your WhatsApp app!",
        alertError: "❌ A connection error to the sovereign server occurred. Please check your Webhook URL."
    },
    es: {
        counter: "Diagnósticos Seguros y Anclados",
        hero1: "Excelencia Estratégica",
        hero2: "& Alta Precisión de IA",
        sloganTech: "Diseñado para la Tecnología. Forjado para lo Absoluto.",
        termTitle: "TERMINAL DE DETECCIÓN IA",
        termDesc: "Olvídese de los formularios estáticos. Simplemente exponga su problema estratégico bruto. El Agente e-META analizará su contexto y generará la auditoría adecuada.",
        promptPh: "Ej: Queremos automatizar nuestro proceso culinario tradicional a través de una máquina conectada...",
        btnAnalyse: "LANZAR ANÁLISIS SEMÁNTICO",
        linkMatrice: "Consulte la matriz de nuestras 20 experiencias sectoriales cubiertas por IA",
        modalSecTitle: "Canal Seguro Requerido",
        modalSecDesc: "¿Dónde debe el Agente e-META transmitirle los resultados de su análisis sectorial?",
        lblEmail: "Su Correo Electrónico (Para el informe PDF)",
        lblPhone: "Su Número de WhatsApp (Para el intercambio directo)",
        btnFire: "CONFIRMAR Y TRANSMITIR",
        alertEmpty: "⚠️ Detalle un poco más su problema para permitir que la IA realice un análisis pertinente.",
        alertMiss: "Por favor, proporcione su correo y número de WhatsApp para asegurar el canal.",
        alertSuccess: "✅ Datos seguros recibidos. El Agente e-META está analizando su contexto. ¡Revise su WhatsApp!",
        alertError: "❌ Ocurrió un error de conexión con el servidor soberano. Verifique la URL de su Webhook."
    },
    ar: {
        counter: "التشخيصات الآمنة والمثبتة",
        hero1: "التميز الاستراتيجي",
        hero2: "ودقة الذكاء الاصطناعي العالية",
        sloganTech: "مصمم للتكنولوجيا. مبني للمطلق.",
        termTitle: "محطة الكشف بالذكاء الاصطناعي",
        termDesc: "انسَ النماذج الثابتة. ما عليك سوى عرض مشكلتك الاستراتيجية أو التكنولوجية. سيقوم وكيل e-META بتحليل السياق وإنشاء التدقيق المناسب.",
        promptPh: "مثال: نريد أتمتة عملية الطهي التقليدية لدينا عبر آلة متصلة...",
        btnAnalyse: "إطلاق التحليل الدلالي",
        linkMatrice: "استشر مصفوفة خبراتنا القطاعية العشرين التي يغطيها الذكاء الاصطناعي",
        modalSecTitle: "قناة آمنة مطلوبة",
        modalSecDesc: "أين يجب أن ينقل وكيل e-META نتائج تحليله القطاعي؟",
        lblEmail: "بريدك الإلكتروني (لتقرير PDF)",
        lblPhone: "رقم الواتساب الخاص بك (للتبادل المباشر)",
        btnFire: "تأكيد وإرسال",
        alertEmpty: "⚠️ يرجى تفصيل مشكلتك أكثر قليلاً للسماح للذكاء الاصطناعي بإجراء تحليل ذي صلة.",
        alertMiss: "يرجى تقديم بريدك الإلكتروني ورقم الواتساب لتأمين القناة.",
        alertSuccess: "✅ تم استلام البيانات الآمنة. يقوم وكيل e-META بتحليل السياق الخاص بك. راقب تطبيق الواتساب الخاص بك!",
        alertError: "❌ حدث خطأ في الاتصال بالخادم. يرجى التحقق من رابط Webhook الخاص بك."
    }
};

let currentLang = 'fr';

function switchLang(lang) {
    currentLang = lang;
    const t = uiDict[lang];
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update UI elements
    document.getElementById('ui-lbl-counter').innerText = t.counter;
    document.getElementById('ui-hero-1').innerText = t.hero1;
    document.getElementById('ui-hero-2').innerText = t.hero2;
    document.getElementById('ui-slogan-tech').innerText = t.sloganTech;
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

    // Update active button styling
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-switch button[data-lang="${lang}"]`).classList.add('active');
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
        "langue": currentLang
    };

    const btn = document.getElementById('btn-fire-ia');
    btn.innerHTML = "Transmission... ⏳";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // LE TIR VERS N8N
    fetch(WEBHOOK_N8N_URL, {
        method: 'POST',
        mode: 'cors', // Crucial pour éviter les blocages de navigateur
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error("Erreur serveur n8n");
        closeModal('autoDetectModal');
        document.getElementById('user-raw-prompt').value = '';
        btn.innerHTML = t.btnFire;
        btn.style.opacity = "1";
        btn.disabled = false;
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
// COMPTEUR LIVE (Design)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('live-counter-top');
    if (counterElement) {
        let currentCount = 1380; const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++; counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) clearInterval(interval);
        }, 30); 
    }
});
