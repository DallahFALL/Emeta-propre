/* =====================================================
   e-META — UI Engine (SPA + i18n + RTL)
   - No reload navigation
   - Persist lang
   - Apply [data-i18n] + [data-i18n-placeholder]
===================================================== */
(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const LANG_KEY = "emeta_lang";

  function safeLang(v) {
    const s = (v || "").toLowerCase();
    return ["fr", "en", "es", "ar"].includes(s) ? s : DEFAULT_LANG;
  }

  function getLang() {
    return safeLang(localStorage.getItem(LANG_KEY) || DEFAULT_LANG);
  }

  function setLang(lang) {
    const v = safeLang(lang);
    localStorage.setItem(LANG_KEY, v);
    return v;
  }

  function setRTL(lang) {
    const isRTL = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = !isRTL;
  }

  function applyI18n(lang) {
    // i18n.js doit définir window.I18N = { fr:{}, en:{}, es:{}, ar:{} }
    if (!window.I18N || typeof window.I18N !== "object") {
      console.error("❌ I18N global manquant ou invalide (i18n.js non chargé)");
      return;
    }

    const dict = window.I18N[lang];
    if (!dict) {
      console.error("❌ I18N dictionnaire manquant pour :", lang);
      return;
    }

    // text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    // title if present
    const titleNode = document.querySelector("title[data-i18n]");
    if (titleNode) {
      const k = titleNode.dataset.i18n;
      if (dict[k] !== undefined) document.title = dict[k];
    }
  }

  function bindLangSelect() {
    const select = document.getElementById("langSelect");
    if (!select) return;

    select.value = getLang();
    select.addEventListener("change", () => {
      const lang = setLang(select.value);
      setRTL(lang);
      applyI18n(lang);

      // IMPORTANT: re-translate current injected view too
      if (window.EMETA && typeof window.EMETA.refreshViewI18n === "function") {
        window.EMETA.refreshViewI18n();
      }
    });
  }

  function bindBurger() {
    const btn = document.getElementById("burgerBtn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const open = menu.hasAttribute("hidden") === false;
      if (open) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      } else {
        menu.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
      }
    });

    // close on navigation
    menu.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function initUI() {
    const lang = setLang(getLang());
    setRTL(lang);
    bindLangSelect();
    bindBurger();
    applyI18n(lang);
  }

  // Expose minimal API
  window.EMETA_UI = {
    getLang,
    setLang,
    applyI18n,
    setRTL,
    initUI,
  };
})();

