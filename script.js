/* =====================================================
   e-META — script.js
   Version PRO internationale — CLEAN & MAINTENABLE
   -----------------------------------------------------
   ✔ i18n FR / EN / ES / AR
   ✔ RTL automatique
   ✔ Menu mobile stable
   ✔ CTA scroll
   ✔ Langue persistée
===================================================== */

(() => {
  "use strict";

  /* =========================
     CONFIGURATION
  ========================= */
  const CONFIG = {
    defaultLang: "fr",
    storageKey: "emeta_lang",
    rtlLangs: ["ar"]
  };

  /* =========================
     DOM HELPERS
  ========================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* =========================
     I18N DICTIONARY
     (SOURCE UNIQUE)
  ========================= */
  const I18N = {
    fr: {
      "meta.title": "e-META",
      tagline: "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",
      "btn.custom": "Requête personnalisée",
      "cta.start": "Démarrer une analyse stratégique",
      "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
      "footer.privacy": "Politique de confidentialité"
    },

    en: {
      "meta.title": "e-META",
      tagline: "Multilingual AI decision intelligence assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",
      "btn.custom": "Custom request",
      "cta.start": "Start a strategic analysis",
      "footer.text": "e-META © 2025 — Strategic decision AI assistant",
      "footer.privacy": "Privacy policy"
    },

    es: {
      "meta.title": "e-META",
      tagline: "Asistente multilingüe de IA para decisiones",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",
      "btn.custom": "Solicitud personalizada",
      "cta.start": "Iniciar un análisis estratégico",
      "footer.text": "e-META © 2025 — Asistente IA para decisiones estratégicas",
      "footer.privacy": "Política de privacidad"
    },

    ar: {
      "meta.title": "e-META",
      tagline: "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",
      "btn.custom": "طلب مخصص",
      "cta.start": "بدء تحليل استراتيجي",
      "footer.text": "© e-META 2025 — مساعد ذكاء اصطناعي لاتخاذ القرار",
      "footer.privacy": "سياسة الخصوصية"
    }
  };

  /* =========================
     RTL MANAGEMENT
  ========================= */
  function applyRTL(lang) {
    const isRTL = CONFIG.rtlLangs.includes(lang);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    const rtlCss = $("#rtlStylesheet");
    if (rtlCss) rtlCss.disabled = !isRTL;
  }

  /* =========================
     APPLY TRANSLATIONS
  ========================= */
  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N[CONFIG.defaultLang];

    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    $$("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  /* =========================
     LANGUAGE SWITCH
  ========================= */
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    applyRTL(lang);
    applyTranslations(lang);
    localStorage.setItem(CONFIG.storageKey, lang);

    const switcher = $("#languageSwitcher");
    if (switcher) switcher.value = lang;
  }

  /* =========================
     MOBILE MENU
  ========================= */
  function initMobileMenu() {
    const burger = $("#burgerBtn");
    const nav = $("#mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", e => {
      e.stopPropagation();
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });

    $$("a", nav).forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", e => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  /* =========================
     CTA SCROLL
  ========================= */
  function initCTA() {
    const scrollToForm = () => {
      const target = $("#form");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const ctaHero = $("#ctaStart");
    const ctaHeader = $("#btnCustomRequest");

    if (ctaHero) ctaHero.addEventListener("click", scrollToForm);
    if (ctaHeader) ctaHeader.addEventListener("click", scrollToForm);
  }

  /* =========================
     INIT
  ========================= */
  function init() {
    initMobileMenu();
    initCTA();

    const switcher = $("#languageSwitcher");
    if (switcher) {
      switcher.addEventListener("change", e => setLanguage(e.target.value));
    }

    const savedLang =
      localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLang;

    setLanguage(savedLang);
  }

  document.addEventListener("DOMContentLoaded", init);

})();
