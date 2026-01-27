// script.js — e-META vNext (FINAL LOCK)
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
    const dict = window.I18N && window.I18N[lang];
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
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Sync all language selects (header + menu, etc.)
    document.querySelectorAll("select.langSelect").forEach(sel => {
      if (sel.value !== lang) sel.value = lang;
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

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);
  }

  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // 1) Init language ONCE
    const lang = getLang();
    setLang(lang);

    // 2) Prevent “EN saute” caused by late render/layout
    requestAnimationFrame(() => applyI18n(lang));
    setTimeout(() => applyI18n(lang), 80);

    // 3) One event handler for ALL selects (no double listeners)
    document.addEventListener("change", (e) => {
      const t = e.target;
      if (t && t.matches("select.langSelect")) {
        setLang(t.value);
      }
    });

    // Burger
    document.getElementById("burgerBtn")?.addEventListener("click", () => {
      document.getElementById("mainNav")?.classList.toggle("open");
      // re-apply in case menu was injected/hidden
      applyI18n(getLang());
    });

    // CTAs
    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    // Consent
    document.getElementById("emetaForm")?.addEventListener("submit", (e) => {
      if (!document.getElementById("consent")?.checked) e.preventDefault();
    });
  });
})();
