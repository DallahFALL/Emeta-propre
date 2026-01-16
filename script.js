/* =====================================================
   e-META — script.js FINAL PRO (CLEAN & STABLE)
   - i18n FR / EN / ES / AR
   - RTL automatique
   - Pages index + privacy compatibles
   - Autosave formulaire
   - Aucun blocage conditionnel
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */
  const STORAGE_LANG = "emeta_lang";
  const STORAGE_AUTOSAVE = "emeta_form_autosave";
  const DEFAULT_LANG = "fr";

  /* ================= LANG ================= */
  function getLang() {
    return localStorage.getItem(STORAGE_LANG) || DEFAULT_LANG;
  }

  function setHtmlLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";
  }

  function applyI18n(lang) {
    const dict = window.I18N && window.I18N[lang];
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

  function setLang(lang) {
    localStorage.setItem(STORAGE_LANG, lang);
    setHtmlLang(lang);
    applyI18n(lang);

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ================= AUTOSAVE FORM ================= */
  function initAutosave(form) {
    if (!form) return;

    const restore = () => {
      const raw = localStorage.getItem(STORAGE_AUTOSAVE);
      if (!raw) return;
      try {
        const data = JSON.parse(raw);
        form.querySelectorAll("input, textarea, select").forEach(el => {
          if (!el.name || !(el.name in data)) return;
          el.type === "checkbox"
            ? (el.checked = data[el.name])
            : (el.value = data[el.name]);
        });
      } catch {}
    };

    const save = () => {
      const data = {};
      form.querySelectorAll("input, textarea, select").forEach(el => {
        if (!el.name) return;
        data[el.name] =
          el.type === "checkbox" ? el.checked : el.value;
      });
      localStorage.setItem(STORAGE_AUTOSAVE, JSON.stringify(data));
    };

    restore();
    form.addEventListener("input", save);
    form.addEventListener("change", save);
  }

  /* ================= DOM READY ================= */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);

    document
      .getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    /* === FORMULAIRE (index.html uniquement) === */
    const form = document.getElementById("emetaForm");
    if (form) {
      initAutosave(form);
    }

    /* === CTA scroll (si présent) === */
    document
      .querySelectorAll("[data-scroll-form]")
      .forEach(btn =>
        btn.addEventListener("click", () => {
          document
            .getElementById("emetaForm")
            ?.scrollIntoView({ behavior: "smooth" });
        })
      );
  });

})();
