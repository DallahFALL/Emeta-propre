// =====================================================
// e-META — script.js FINAL STABLE (FIXED)
// i18n FR / EN / ES / AR
// Select langue UNIQUE (#langSelect)
// RTL auto
// =====================================================

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const LANG_SELECT_ID = "langSelect";

  /* ================= UTIL ================= */

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
    const dict = window.I18N && window.I18N[lang];
    if (!dict) {
      console.error("❌ I18N dictionnaire manquant pour :", lang);
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      } else {
        console.warn("⚠️ Clé i18n manquante :", key);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });
  }

  /* ================= LANG SELECT ================= */

  function bindLangSelect() {
    const select = document.getElementById(LANG_SELECT_ID);
    if (!select) {
      console.error("❌ Select langue introuvable (#langSelect)");
      return;
    }

    select.addEventListener("change", () => {
      const lang = select.value;
      console.log("🌍 LANG CHANGE =", lang);
      setLang(lang);
    });
  }

  function syncLangSelect(lang) {
    const select = document.getElementById(LANG_SELECT_ID);
    if (select && select.value !== lang) {
      select.value = lang;
    }
  }

  /* ================= CORE ================= */

  function setLang(lang) {
    console.log("✅ SET LANG =", lang);

    localStorage.setItem(STORAGE_KEY, lang);

    setRtl(lang);
    applyI18n(lang);
    syncLangSelect(lang);
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

    console.log("🚀 INIT LANG =", lang);
    console.log("📄 I18N LOADED =", !!window.I18N);

    setLang(lang);

    bindLangSelect();
    bindBurger();
    bindFormConsent();
  });

})();
