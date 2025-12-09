/* ======================================================
   e-META — SCRIPT JS V6.1 (Mobile + i18n + RTL + Form)
   ====================================================== */

/* Utility to safely select elements */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ================================
   1. MOBILE MENU
================================= */

const burgerBtn = $("#burgerBtn");
const mainNav = $("#mainNav");

if (burgerBtn && mainNav) {
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        mainNav.classList.toggle("open");
    });
}

/* ================================
   2. LANGUAGE SWITCHER
================================= */

const langToggle = $("#langToggle");
const langMenu = $("#langMenu");
const currentLangBtn = $("#currentLang");
const langSelect = $("#langSelect");

const htmlRoot = document.documentElement;
let currentLang = localStorage.getItem("emeta-lang") || "fr";

function applyRTL(lang) {
    if (lang === "ar") {
        htmlRoot.setAttribute("dir", "rtl");
        document.body.classList.add("rtl");
    } else {
        htmlRoot.removeAttribute("dir");
        document.body.classList.remove("rtl");
    }
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("emeta-lang", lang);

    if (currentLangBtn) currentLangBtn.textContent = lang.toUpperCase();

    applyRTL(lang);

    // Apply translations
    if (i18n[lang]) {
        $$("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (i18n[lang][key]) el.textContent = i18n[lang][key];
        });
    }

    // Update placeholders
    if (placeholders[lang]) {
        Object.entries(placeholders[lang]).forEach(([id, text]) => {
            const el = $("#" + id);
            if (el) el.placeholder = text;
        });
    }

    // Update SELECT options
    populateDomains(lang);
    populateCurrencies(lang);
}

/* Toggle menu on click */
if (langToggle && langMenu) {
    langToggle.addEventListener("click", () => {
        langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("li").forEach((item) => {
        item.addEventListener("click", () => {
            const lang = item.dataset.lang;
            updateLanguage(lang);
            langMenu.classList.remove("show");
        });
    });
}

/* ================================
   3. TRANSLATIONS
================================= */

const i18n = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_faq: "FAQ",
        nav_contact: "Contact",

        hero_badge: "IA décisionnelle",
        hero_title: "e-META — L’assistant IA pluridisciplinaire",
        hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",

        form_title: "Requête décisionnelle e-META",

        label_fullname: "Nom complet",
        label_phone: "WhatsApp (optionnel)",
        label_lang: "Langue",
        label_domain: "Domaine / Thème",
        label_title: "Titre court de la décision",
        label_context: "Contexte détaillé",
        label_objectives: "Objectifs recherchés",
        label_budget: "Budget",
        label_currency: "Devise",
        label_deadline: "Délai souhaité",
        label_urgency: "Urgence (1–5)",
        label_delivery: "Mode de restitution",
        label_file: "Lien fichier (optionnel)",
        label_consent: "J’autorise e-META à analyser mes données.",
        privacy_link: "Voir la politique de confidentialité",

        delivery_auto: "Automatique",
        delivery_email: "Email",
        delivery_whatsapp: "WhatsApp",
        delivery_display: "Affichage direct",

        btn_reset: "Réinitialiser",
        btn_send: "Envoyer"
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_faq: "FAQ",
        nav_contact: "Contact",

        hero_badge: "AI decision",
        hero_title: "e-META — The multidisciplinary AI assistant",
        hero_sub: "Smart decision form to analyse, diagnose and recommend tailored solutions.",

        form_title: "e-META decision request",

        label_fullname: "Full name",
        label_phone: "WhatsApp (optional)",
        label_lang: "Language",
        label_domain: "Domain / Theme",
        label_title: "Decision short title",
        label_context: "Detailed context",
        label_objectives: "Expected objectives",
        label_budget: "Budget",
        label_currency: "Currency",
        label_deadline: "Desired deadline",
        label_urgency: "Urgency (1–5)",
        label_delivery: "Delivery mode",
        label_file: "File link (optional)",
        label_consent: "I authorize e-META to analyze my data.",
        privacy_link: "View privacy policy",

        delivery_auto: "Automatic",
        delivery_email: "Email",
        delivery_whatsapp: "WhatsApp",
        delivery_display: "On-screen display",

        btn_reset: "Reset",
        btn_send: "Send"
    },

    es: {
        nav_home: "Inicio",
        nav_about: "Acerca",
        nav_faq: "FAQ",
        nav_contact: "Contacto",

        hero_badge: "IA decisional",
        hero_title: "e-META — El asistente IA multidisciplinario",
        hero_sub: "Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",

        form_title: "Solicitud decisional e-META",

        label_fullname: "Nombre completo",
        label_phone: "WhatsApp (opcional)",
        label_lang: "Idioma",
        label_domain: "Dominio / Tema",
        label_title: "Título corto de la decisión",
        label_context: "Contexto detallado",
        label_objectives: "Objetivos buscados",
        label_budget: "Presupuesto",
        label_currency: "Moneda",
        label_deadline: "Plazo deseado",
        label_urgency: "Urgencia (1–5)",
        label_delivery: "Modo de entrega",
        label_file: "Enlace de archivo (opcional)",
        label_consent: "Autorizo a e-META a analizar mis datos.",
        privacy_link: "Ver política de privacidad",

        delivery_auto: "Automático",
        delivery_email: "Correo",
        delivery_whatsapp: "WhatsApp",
        delivery_display: "Visualización",

        btn_reset: "Reiniciar",
        btn_send: "Enviar"
    },

    ar: {
        nav_home: "الرئيسية",
        nav_about: "حول",
        nav_faq: "الأسئلة",
        nav_contact: "اتصال",

        hero_badge: "ذكاء اصطناعي تحليلي",
        hero_title: "e-META — المساعد الذكي متعدد التخصصات",
        hero_sub: "نموذج ذكي لتحليل وتشخيص وتقديم حلول مناسبة.",

        form_title: "طلب قرار e-META",

        label_fullname: "الاسم الكامل",
        label_phone: "واتساب (اختياري)",
        label_lang: "اللغة",
        label_domain: "المجال / الموضوع",
        label_title: "عنوان القرار",
        label_context: "السياق بالتفصيل",
        label_objectives: "الأهداف المطلوبة",
        label_budget: "الميزانية",
        label_currency: "العملة",
        label_deadline: "المدة المطلوبة",
        label_urgency: "درجة الاستعجال (1–5)",
        label_delivery: "طريقة الإرسال",
        label_file: "رابط الملف (اختياري)",
        label_consent: "أوافق على تحليل بياناتي.",
        privacy_link: "عرض سياسة الخصوصية",

        delivery_auto: "تلقائي",
        delivery_email: "البريد الإلكتروني",
        delivery_whatsapp: "واتساب",
        delivery_display: "عرض مباشر",

        btn_reset: "إعادة ضبط",
        btn_send: "إرسال"
    }
};

/* ================================
   4. PLACEHOLDERS PAR LANGUE
================================= */

const placeholders = {
    fr: {
        fullname: "Votre nom complet",
        email: "exemple@mail.com",
        phone: "+221…",
        title: "Ex : lancement d’une station-service",
        context: "Décrivez la situation actuelle...",
        objectives: "Quels résultats souhaitez-vous obtenir ?",
        deadline: "Ex : 3 mois",
        attachment: "URL d’un fichier (Google Drive, PDF...)"
    },

    en: {
        fullname: "Your full name",
        email: "example@mail.com",
        phone: "+1...",
        title: "Ex: Launching a service station",
        context: "Describe the current situation...",
        objectives: "What outcome do you expect?",
        deadline: "Ex: 3 months",
        attachment: "File URL (Google Drive, PDF...)"
    },

    es: {
        fullname: "Nombre completo",
        email: "ejemplo@mail.com",
        phone: "+34...",
        title: "Ej: apertura de una estación",
        context: "Describa la situación actual...",
        objectives: "¿Qué resultado espera?",
        deadline: "Ej: 3 meses",
        attachment: "URL del archivo"
    },

    ar: {
        fullname: "الاسم الكامل",
        email: "example@mail.com",
        phone: "+966...",
        title: "مثال: افتتاح محطة خدمات",
        context: "صف الوضع الحالي...",
        objectives: "ما النتيجة التي ترغب بها؟",
        deadline: "مثال: ٣ أشهر",
        attachment: "رابط الملف"
    }
};

/* ================================
   5. DOMAINES & DEVISES MULTILINGUES
================================= */

const domains = {
    fr: ["Agriculture", "Énergie", "Finances & Banque", "Immobilier", "Industrie", "Transport", "Technologie", "Santé", "Éducation", "Gouvernance", "ONG", "Autre"],
    en: ["Agriculture", "Energy", "Finance & Banking", "Real Estate", "Industry", "Transport", "Technology", "Health", "Education", "Governance", "NGO", "Other"],
    es: ["Agricultura", "Energía", "Finanzas", "Inmobiliario", "Industria", "Transporte", "Tecnología", "Salud", "Educación", "Gobernanza", "ONG", "Otro"],
    ar: ["الزراعة", "الطاقة", "المالية", "العقارات", "الصناعة", "النقل", "التكنولوجيا", "الصحة", "التعليم", "الحوكمة", "المنظمات", "أخرى"]
};

const currencies = ["XOF", "EUR", "USD", "GBP", "CAD", "CNY", "JPY", "AED", "SAR"];

/* Populate domain field */
function populateDomains(lang) {
    const select = $("#domainSelect");
    if (!select) return;

    select.innerHTML = "";
    domains[lang].forEach((d) => {
        const opt = document.createElement("option");
        opt.textContent = d;
        select.appendChild(opt);
    });
}

/* Populate currency list */
function populateCurrencies(lang) {
    const select = $("#currencySelect");
    if (!select) return;

    select.innerHTML = "";
    currencies.forEach((cur) => {
        const opt = document.createElement("option");
        opt.textContent = cur;
        select.appendChild(opt);
    });
}

/* ================================
   6. INITIAL LOAD
================================= */

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);
});

/* ================================
   7. FORM SUBMISSION (Make webhook)
================================= */

const form = $("#emetaForm");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            fullname: $("#fullname")?.value || "",
            email: $("#email")?.value || "",
            phone: $("#phone")?.value || "",
            lang: currentLang,
            domain: $("#domainSelect")?.value || "",
            title: $("#title")?.value || "",
            context: $("#context")?.value || "",
            objectives: $("#objectives")?.value || "",
            budget: $("#budget")?.value || "",
            currency: $("#currencySelect")?.value || "",
            deadline: $("#deadline")?.value || "",
            urgency: $("#urgency")?.value || "",
            attachment: $("#attachment")?.value || "",
            delivery: document.querySelector("input[name='delivery']:checked")?.value || "auto",
            consent: $("#consent")?.checked ? true : false
        };

        try {
            await fetch("YOUR_WEBHOOK_URL_HERE", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            alert("Votre requête a été envoyée !");
        } catch (err) {
            alert("Erreur réseau. Réessayez.");
        }
    });
}
