// =====================================================
// e-META — script.js FINAL PRO
// Langues • RTL • Burger • Scroll • UX safe
// Aligné avec index.html + style.css FINAL
// =====================================================

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  function getHeaderOffset(){
  const h = document.querySelector(".site-header");
  return h ? Math.ceil(h.getBoundingClientRect().height) : 72;
}

  /* ---------- Utils ---------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }

  /* ---------- i18n ---------- */
  function resolveKey(obj, path) {
    return path.split(".").reduce((acc, k) => acc && acc[k], obj);
  }

  function applyI18n(lang) {
    const dict = (window.I18N && window.I18N[lang]) ? window.I18N[lang] : null;
    if (!dict) return;

    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = resolveKey(dict, key);
      if (value != null) el.textContent = value;
    });

    $$("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = resolveKey(dict, key);
      if (value != null) el.setAttribute("placeholder", value);
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    const sel = $("#langSelect");
    if (sel) sel.value = lang;
  }

  /* ---------- Scroll ---------- */
  function scrollToForm() {
    const target = $("#form");
    if (!target) return;

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      getHeaderOffset();

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {

    /* Langue */
    setLang(getLang());

    const langSelect = $("#langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", e => setLang(e.target.value));
    }

    /* Burger menu */
    const burger = $("#burgerBtn");
    const nav = $("#mainNav");

    if (burger && nav) {
      burger.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });

      // fermer menu après clic
      nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* CTA */
    const startBtn = $("#startBtn");
    const customBtn = $("#customBtn");
    startBtn && startBtn.addEventListener("click", scrollToForm);
    customBtn && customBtn.addEventListener("click", scrollToForm);

    /* Validation légère */
    const form = $("#emetaForm");
    if (form) {
      form.addEventListener("submit", e => {
        const consent = $("#consent");
        if (consent && !consent.checked) {
          e.preventDefault();
          consent.focus();
        }
      });
    }
  });

})();
