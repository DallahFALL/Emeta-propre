// script.js — e-META vNext (PRO stable + PDFs by language)
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  const PDF_MAP = {
    guide: {
      fr: "pdf/eMETA_Guide_Formulaire_FR.pdf",
      en: "pdf/eMETA_Guide_Formulaire_EN.pdf",
      es: "pdf/eMETA_Guide_Formulaire_ES.pdf",
      ar: "pdf/eMETA_Guide_Formulaire_AR.pdf",
    },
    privacy: {
      fr: "pdf/eMETA_Privacy_CGU_FR.pdf",
      en: "pdf/eMETA_Privacy_CGU_EN.pdf",
      es: "pdf/eMETA_Privacy_CGU_ES.pdf",
      ar: "pdf/eMETA_Privacy_CGU_AR.pdf",
    },
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";
  }

  function applyI18n(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  // ✅ PRO: sync all help links (privacy page + PDF links)
  function syncHelpLinks(lang) {
    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");

    if (guide) guide.href = PDF_MAP.guide[lang] || PDF_MAP.guide[DEFAULT_LANG];
    if (privacy) privacy.href = PDF_MAP.privacy[lang] || PDF_MAP.privacy[DEFAULT_LANG];
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);

    setRtl(lang);
    applyI18n(lang);
    syncHelpLinks(lang);

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function scrollToForm() {
    const form = document.getElementById("form");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function initBurger() {
    const btn = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLang(getLang());

    const langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.addEventListener("change", (e) => setLang(e.target.value));

    initBurger();

    const startBtn = document.getElementById("startBtn");
    const customBtn = document.getElementById("customBtn");
    if (startBtn) startBtn.addEventListener("click", scrollToForm);
    if (customBtn) customBtn.addEventListener("click", scrollToForm);

    const form = document.getElementById("emetaForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        const consent = document.getElementById("consent");
        if (consent && !consent.checked) e.preventDefault();
      });
    }
  });
})();
