/* =====================================================
   e-META — script.js FINAL PRO (CLEAN & STABLE)
   - i18n FR / EN / ES / AR
   - RTL automatique
   - Menu mobile
   - CTA scroll
   - Autosave local
   - Submit sécurisé
   - Compatible index.html & privacy.html
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */
  const STORAGE_LANG = "emeta_lang";
  const STORAGE_AUTOSAVE = "emeta_form_autosave";
  const DEFAULT_LANG = "fr";

  const GUIDE_PDF = {
    fr: "pdf/eMETA_Guide_Formulaire_FR.pdf",
    en: "pdf/eMETA_Guide_Formulaire_EN.pdf",
    es: "pdf/eMETA_Guide_Formulaire_ES.pdf",
    ar: "pdf/eMETA_Guide_Formulaire_AR.pdf"
  };

  const PRIVACY_PDF = {
    fr: "pdf/eMETA_Privacy_CGU_FR.pdf",
    en: "pdf/eMETA_Privacy_CGU_EN.pdf",
    es: "pdf/eMETA_Privacy_CGU_ES.pdf",
    ar: "pdf/eMETA_Privacy_CGU_AR.pdf"
  };

  /* ================= LANG ================= */
  function getLang() {
    return localStorage.getItem(STORAGE_LANG) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    const rtlCss = document.getElementById("rtlStylesheet");
    if (rtlCss) rtlCss.disabled = lang !== "ar";
  }

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

  function syncHelpLinks(lang) {
    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");
    if (guide) guide.href = GUIDE_PDF[lang] || GUIDE_PDF.fr;
    if (privacy) privacy.href = PRIVACY_PDF[lang] || PRIVACY_PDF.fr;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_LANG, lang);
    setRtl(lang);
    applyI18n(lang);
    syncHelpLinks(lang);
    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ================= AUTOSAVE ================= */
  function saveFormState(form) {
    const data = {};
    form.querySelectorAll("input, textarea, select").forEach(el => {
      if (!el.name) return;
      data[el.name] = el.type === "checkbox" ? el.checked : el.value;
    });
    localStorage.setItem(STORAGE_AUTOSAVE, JSON.stringify(data));
  }

  function restoreFormState(form) {
    const raw = localStorage.getItem(STORAGE_AUTOSAVE);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      form.querySelectorAll("input, textarea, select").forEach(el => {
        if (el.name in data) {
          el.type === "checkbox"
            ? (el.checked = data[el.name])
            : (el.value = data[el.name]);
        }
      });
    } catch {}
  }

  /* ================= SCROLL ================= */
  function scrollToForm() {
    document.getElementById("emetaForm")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  /* ================= DOM READY ================= */
  document.addEventListener("DOMContentLoaded", () => {

    /* LANG INIT (TOUTES PAGES) */
    setLang(getLang());
    document.getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    /* CTA HERO */
    document.querySelectorAll("[data-scroll-form]")
      .forEach(btn => btn.addEventListener("click", scrollToForm));

    /* FORM (si présent) */
    const form = document.getElementById("emetaForm");
    if (!form) return;

    restoreFormState(form);
    form.addEventListener("input", () => saveFormState(form));
    form.addEventListener("change", () => saveFormState(form));

    /* SUBMIT UX LOCK */
    const confirmBtn = document.getElementById("confirmSummaryBtn");
    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        confirmBtn.disabled = true;
        confirmBtn.textContent = "Analyse en cours…";
        form.submit();
      });
    }

  });

  /* ================= I18N PAGES SECONDAIRES ================= */
  (function applyLangEverywhere() {
    const lang = getLang();
    setRtl(lang);
    applyI18n(lang);
  })();

})();
