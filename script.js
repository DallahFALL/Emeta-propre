// script.js — e-META vNext (FINAL • stable • desktop & mobile)
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ================= CORE ================= */

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }

  /* ================= I18N ================= */

  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) {
      console.warn("i18n: language not found →", lang);
      return;
    }

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Sync ALL language selectors (desktop + mobile)
    document.querySelectorAll(".langSelect").forEach(sel => {
      sel.value = lang;
    });
  }

  /* ================= PDF LINKS ================= */

  function updatePdfLinks(lang) {
    const guideMap = {
      fr: "pdf/eMETA_Guide_Formulaire_FR.pdf",
      en: "pdf/eMETA_Guide_Formulaire_EN.pdf",
      es: "pdf/eMETA_Guide_Formulaire_ES.pdf",
      ar: "pdf/eMETA_Guide_Formulaire_AR.pdf"
    };

    const privacyMap = {
      fr: "pdf/eMETA_Privacy_CGU_FR.pdf",
      en: "pdf/eMETA_Privacy_CGU_EN.pdf",
      es: "pdf/eMETA_Privacy_CGU_ES.pdf",
      ar: "pdf/eMETA_Privacy_CGU_AR.pdf"
    };

    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");

    if (guide) guide.href = guideMap[lang] || guideMap.fr;
    if (privacy) privacy.href = privacyMap[lang] || privacyMap.fr;
  }

  /* ================= LANGUAGE SWITCH ================= */

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);

    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);

    // Desktop reflow fix (menus / header sticky)
    requestAnimationFrame(() => applyI18n(lang));
    setTimeout(() => applyI18n(lang), 50);
  }

  /* ================= UX ================= */

  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* ================= INIT ================= */

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();

    // Initial apply
    setLang(lang);

    // Language selectors (ALL)
    document.querySelectorAll(".langSelect").forEach(sel => {
      sel.addEventListener("change", e => setLang(e.target.value));
    });

    // Burger menu
    document.getElementById("burgerBtn")
      ?.addEventListener("click", () =>
        document.getElementById("mainNav")?.classList.toggle("open")
      );

    // CTA scroll
    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    // Consent check
    document.getElementById("emetaForm")
      ?.addEventListener("submit", e => {
        if (!document.getElementById("consent")?.checked) {
          e.preventDefault();
        }
      });
  });

})();
