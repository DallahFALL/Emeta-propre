// script.js — e-META vNext (PRO • Stable • i18n + PDF par langue)
(function () {
  "use strict";

  /* ============================
     CONFIG
  ============================ */
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ============================
     LANG MANAGEMENT
  ============================ */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtlStylesheet = document.getElementById("rtlStylesheet");
    if (rtlStylesheet) {
      rtlStylesheet.disabled = (lang !== "ar");
    }
  }

  /* ============================
     I18N APPLY
  ============================ */
  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });
  }

  /* ============================
     PDF LINKS (PRO par langue)
  ============================ */
  function syncHelpLinks(lang) {
    const guideMap = {
      fr: "/pdf/eMETA_Guide_Formulaire_FR.pdf",
      en: "/pdf/eMETA_Guide_Formulaire_EN.pdf",
      es: "/pdf/eMETA_Guide_Formulaire_ES.pdf",
      ar: "/pdf/eMETA_Guide_Formulaire_AR.pdf"
    };

    const privacyMap = {
      fr: "/pdf/eMETA_Privacy_CGU_FR.pdf",
      en: "/pdf/eMETA_Privacy_CGU_EN.pdf",
      es: "/pdf/eMETA_Privacy_CGU_ES.pdf",
      ar: "/pdf/eMETA_Privacy_CGU_AR.pdf"
    };

    const guideBtn = document.getElementById("pdfGuideLink");
    const privacyBtn = document.getElementById("pdfPrivacyLink");

    if (guideBtn) {
      guideBtn.href = guideMap[lang] || guideMap.fr;
      guideBtn.setAttribute("target", "_blank");
      guideBtn.setAttribute("rel", "noopener");
    }

    if (privacyBtn) {
      privacyBtn.href = privacyMap[lang] || privacyMap.fr;
      privacyBtn.setAttribute("target", "_blank");
      privacyBtn.setAttribute("rel", "noopener");
    }
  }

  /* ============================
     SET LANGUAGE (CENTRAL)
  ============================ */
  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    syncHelpLinks(lang);

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ============================
     UX HELPERS
  ============================ */
  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  /* ============================
     INIT
  ============================ */
  document.addEventListener("DOMContentLoaded", () => {
    setLang(getLang());

    document.getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    document.getElementById("burgerBtn")
      ?.addEventListener("click", () =>
        document.getElementById("mainNav")?.classList.toggle("open")
      );

    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    document.getElementById("emetaForm")
      ?.addEventListener("submit", e => {
        const consent = document.getElementById("consent");
        if (consent && !consent.checked) {
          e.preventDefault();
          consent.focus();
        }
      });
  });
})();
