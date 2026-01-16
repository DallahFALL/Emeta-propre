/* =====================================================
   e-META — script.js FINAL PRO
   Stable • Unifié • Compatible style.css & index.html
===================================================== */

(function () {
  "use strict";

  /* ================== CONFIG ================== */
  const STORAGE_KEY = "emeta_lang";
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

  /* ================== LANG ================== */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setDirection(lang) {
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
    localStorage.setItem(STORAGE_KEY, lang);
    setDirection(lang);
    applyI18n(lang);
    syncHelpLinks(lang);

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ================== UI ================== */
  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function initBurgerMenu() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("open")
      );
    });
  }

  /* ================== SUBMIT LOGIC ================== */
  function updateSubmitState() {
    const title = document.getElementById("decisionTitle");
    const problem = document.getElementById("problem");
    const consent = document.getElementById("consent");
    const submitBtn = document.querySelector(".btn-submit");

    if (!title || !problem || !consent || !submitBtn) return;

    const isValid =
      title.value.trim().length >= 5 &&
      problem.value.trim().length >= 20 &&
      consent.checked;

    submitBtn.disabled = !isValid;
  }

  /* ================== DOM READY ================== */
  document.addEventListener("DOMContentLoaded", () => {

    /* Langue initiale */
    setLang(getLang());

    /* Changement langue */
    document
      .getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    /* Burger */
    initBurgerMenu();

    /* CTA scroll */
    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    /* Validation submit */
    ["decisionTitle", "problem"].forEach(id => {
      document.getElementById(id)
        ?.addEventListener("input", updateSubmitState);
    });

    document
      .getElementById("consent")
      ?.addEventListener("change", updateSubmitState);

    updateSubmitState();

    /* Sécurité submit */
    document
      .getElementById("emetaForm")
      ?.addEventListener("submit", e => {
        if (document.querySelector(".btn-submit")?.disabled) {
          e.preventDefault();
        }
      });
  });

})();
