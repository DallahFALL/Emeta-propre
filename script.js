// script.js — e-META vNext (stable)
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

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

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
        if (!document.getElementById("consent")?.checked) {
          e.preventDefault();
        }
      });
  });
})();
