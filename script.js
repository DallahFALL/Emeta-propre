/* =====================================================
   e-META — script.js (International + Stable)
   - Burger menu mobile
   - Lang FR / EN / ES / AR (+ RTL auto)
   - Apply data-i18n + data-i18n-placeholder
   - Persist lang via localStorage
   - CTA scroll to #form
===================================================== */

(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "e_meta_lang";

  const dict = window.I18N_DICT || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved && dict[saved]) ? saved : DEFAULT_LANG;
  }

  function setDirForLang(lang) {
    const isRTL = (lang === "ar");
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }

  function t(lang, key) {
    const parts = key.split(".");
    let cur = dict[lang];
    for (const p of parts) {
      if (!cur || typeof cur !== "object") return null;
      cur = cur[p];
    }
    return (typeof cur === "string") ? cur : null;
  }

  function applyI18n(lang) {
    // texts
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (value !== null) el.textContent = value;
    });

    // placeholders
    $$("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(lang, key);
      if (value !== null) el.setAttribute("placeholder", value);
    });

    // document title
    const title = t(lang, "meta.title");
    if (title) document.title = title;
  }

  function initLangUI() {
    const select = $("#langSelect");
    if (!select) return;

    const lang = getLang();
    select.value = lang;

    select.addEventListener("change", () => {
      const next = select.value;
      if (!dict[next]) return;
      localStorage.setItem(STORAGE_KEY, next);
      setDirForLang(next);
      applyI18n(next);
    });
  }

  function initBurger() {
    const btn = $("#burgerBtn");
    const panel = $("#mobilePanel");
    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", panel.classList.contains("open") ? "true" : "false");
    });

    // Close panel on link click
    $$("#mobilePanel a").forEach(a => {
      a.addEventListener("click", () => {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initCTA() {
    const cta = $("#ctaScroll");
    const target = $("#form");
    if (!cta || !target) return;

    cta.addEventListener("click", (e) => {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Boot
  const lang = getLang();
  setDirForLang(lang);
  applyI18n(lang);
  initLangUI();
  initBurger();
  initCTA();

})();
