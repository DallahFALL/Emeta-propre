// =====================================================
// e-META — script.js FINAL COMPATIBLE
// - i18n FR / EN / ES / AR
// - RTL automatique
// - Compatible index.html & privacy.html
// - Aucun crash si éléments absents
// =====================================================

(function () {
  "use strict";

  /* ================= CONFIG ================= */

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const LANG_SELECT_ID = "langSelect";

  /* ================= UTIL ================= */

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setHtmlLangDir(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) {
      rtl.disabled = (lang !== "ar");
    }
  }

  /* ================= I18N CORE ================= */
function applyI18n(lang) {
  if (!window.I18N || typeof window.I18N !== "object") {
    console.error("❌ I18N global manquant ou invalide");
    return;
  }

  const dict = window.I18N[lang];
  if (!dict) {
    console.error("❌ I18N dictionnaire manquant pour :", lang);
    return;
  }

  // Textes
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
}

  /* ================= LANG MANAGEMENT ================= */

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setHtmlLangDir(lang);
    applyI18n(lang);
    syncLangSelect(lang);
  }

  function bindLangSelect() {
    const select = document.getElementById(LANG_SELECT_ID);
    if (!select) {
      // Page sans sélecteur (ex: privacy.html)
      return;
    }

    select.addEventListener("change", () => {
      const lang = select.value;
      setLang(lang);
    });
  }

  function syncLangSelect(lang) {
    const select = document.getElementById(LANG_SELECT_ID);
    if (select && select.value !== lang) {
      select.value = lang;
    }
  }

  /* ================= UI ================= */

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

    setLang(lang);

    bindLangSelect();
    bindBurger();
    bindFormConsent();
  });

})();
