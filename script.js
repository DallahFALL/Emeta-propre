// script.js — e-META vNext (stable)
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* =========================
     LANG HELPERS
  ========================= */

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }

  function applyI18n(lang) {
    const dict = (window.I18N && window.I18N[lang]) ? window.I18N[lang] : null;
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
  }

  /* =========================
     PDF LINKS (UNIQUE)
  ========================= */

  function updatePdfLinks(lang) {
    const map = {
      fr: "pdf/e-META_Guide_Privacy_CGU_FR.pdf",
      en: "pdf/e-META_Guide_Privacy_CGU_EN.pdf",
      es: "pdf/e-META_Guide_Privacy_CGU_ES.pdf",
      ar: "pdf/e-META_Guide_Privacy_CGU_AR.pdf"
    };

    const link = document.getElementById("pdfGuideLink");
    if (link && map[lang]) {
      link.href = map[lang];
    }
  }

  /* =========================
     MAIN LANG SWITCHER
  ========================= */

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);

    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  /* =========================
     UI HELPERS
  ========================= */

  function scrollToForm() {
    const form = document.getElementById("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* =========================
     DOM READY
  ========================= */

  document.addEventListener("DOMContentLoaded", () => {

    // Init langue globale (index + privacy + PDFs)
    setLang(getLang());

    // Sélecteur de langue
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        setLang(e.target.value);
      });
    }

    // Menu burger
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("open");
        burger.setAttribute(
          "aria-expanded",
          nav.classList.contains("open") ? "true" : "false"
        );
      });
    }

    // CTA vers formulaire
    const startBtn = document.getElementById("startBtn");
    const customBtn = document.getElementById("customBtn");
    if (startBtn) startBtn.addEventListener("click", scrollToForm);
    if (customBtn) customBtn.addEventListener("click", scrollToForm);

    // Validation légère du consentement
    const form = document.getElementById("emetaForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        const consent = document.getElementById("consent");
        if (consent && !consent.checked) {
          e.preventDefault();
          consent.focus();
        }
      });
    }
  });

})();
