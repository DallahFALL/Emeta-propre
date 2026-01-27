// =====================================================
// e-META — script.js FINAL STABLE
// - i18n FR / EN / ES / AR
// - Desktop + Mobile SAFE
// - Lang select flottant corrigé
// - RTL auto (AR)
// =====================================================
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  /* ================= UTIL ================= */

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

  /* ================= I18N ================= */

  function applyI18n(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) {
      console.warn("i18n: language not found →", lang);
      return;
    }

    // Text content
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });
  }

  /* ================= LANG SELECT ================= */

  function syncLangSelect(lang) {
    const select = document.getElementById("langSelect");
    if (select && select.value !== lang) {
      select.value = lang;
    }
  }

  function bindLangSelect() {
    const select = document.getElementById("langSelect");
    if (!select) return;

    // ⚠️ Un seul listener, une seule fois
    select.addEventListener("change", e => {
      setLang(e.target.value);
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

    if (guide && guideMap[lang]) guide.href = guideMap[lang];
    if (privacy && privacyMap[lang]) privacy.href = privacyMap[lang];
  }

  /* ================= CORE ================= */

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);

    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);
    syncLangSelect(lang);
  }

  /* ================= UI ================= */

  function scrollToForm() {
    const form = document.getElementById("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function bindBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  function bindFormConsent() {
    const form = document.getElementById("emetaForm");
    const consent = document.getElementById("consent");

    if (!form || !consent) return;

    form.addEventListener("submit", e => {
      if (!consent.checked) {
        e.preventDefault();
        consent.focus();
      }
    });
  }

  /* ================= INIT ================= */

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();

    // 1️⃣ Bind UI (UNE FOIS)
    bindLangSelect();
    bindBurger();
    bindFormConsent();

    // 2️⃣ Apply language (UNE FOIS)
    setLang(lang);

    // 3️⃣ Sécurité repaint desktop (fonts/layout)
    requestAnimationFrame(() => {
      applyI18n(lang);
    });
  });

})();
