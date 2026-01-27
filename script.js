// script.js — e-META vNext (stable desktop + multi-select)
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

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
    const dict = window.I18N?.[lang];
    if (!dict) {
      console.warn("i18n: language not found →", lang);
      return;
    }

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
  }

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

  function syncLangSelects(lang) {
    // 🔥 Synchronise TOUS les selects (header + flottant desktop)
    document.querySelectorAll("select[data-lang-select]").forEach(sel => {
      sel.value = lang;
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);
    syncLangSelects(lang);
  }

  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);

    // ✅ branchement robuste: tous les selects
    document.querySelectorAll("select[data-lang-select]").forEach(sel => {
      sel.addEventListener("change", e => setLang(e.target.value));
    });

    document.getElementById("burgerBtn")?.addEventListener("click", () => {
      document.getElementById("mainNav")?.classList.toggle("open");
    });

    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    document.getElementById("emetaForm")?.addEventListener("submit", e => {
      if (!document.getElementById("consent")?.checked) e.preventDefault();
    });

    // 🩹 Anti “desktop jump” (fonts/layout repaint)
    requestAnimationFrame(() => applyI18n(getLang()));
    setTimeout(() => applyI18n(getLang()), 80);
  });
})();
