/* =====================================================
   e-META — script.js FINAL PRO (CLEAN & STABLE)
   - i18n FR / EN / ES / AR
   - RTL auto
   - PDF links dynamiques (Guide/Privacy)
   - Menu mobile (si présent)
   - CTA scroll (si présent)
   - AUTOSAVE (si form présent)
   - Ne casse JAMAIS le DOM (anti "form disappear")
===================================================== */

(function () {
  "use strict";

  /* ================= CONFIG ================= */
  const STORAGE_KEY = "emeta_lang";
  const AUTOSAVE_KEY = "emeta_form_autosave";
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

  /* ================= LANG HELPERS ================= */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setHtmlLangDir(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = lang !== "ar";
  }

  // ✅ IMPORTANT: Empêche d'écraser les conteneurs avec enfants (sinon le formulaire "disparaît")
  function safeSetText(el, text) {
    if (!el) return;

    // On autorise toujours TITLE
    if (el.tagName === "TITLE") {
      el.textContent = text;
      return;
    }

    // Si l’élément a des enfants, on NE touche PAS au textContent (sinon ça wipe le DOM)
    // Exception: si tu veux forcer un conteneur, ajoute data-i18n-force="1" dans le HTML
    if (el.children && el.children.length > 0 && !el.hasAttribute("data-i18n-force")) {
      return;
    }

    el.textContent = text;
  }

  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = dict[key];
      if (typeof val === "string") safeSetText(el, val);
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const val = dict[key];
      if (typeof val === "string") el.placeholder = val;
    });
  }

  function syncPdfLinks(lang) {
    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");

    if (guide) guide.href = GUIDE_PDF[lang] || GUIDE_PDF.fr;
    if (privacy) privacy.href = PRIVACY_PDF[lang] || PRIVACY_PDF.fr;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setHtmlLangDir(lang);
    applyI18n(lang);
    syncPdfLinks(lang);

    const select = document.getElementById("langSelect");
    if (select) select.value = lang;
  }

  /* ================= CTA SCROLL (OPTIONNEL) ================= */
  function bindScrollCTA() {
    const cta = document.getElementById("ctaScrollToForm");
    if (!cta) return;
    cta.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ================= AUTOSAVE (FORM ONLY) ================= */
  function initAutosave(form) {
    if (!form) return;

    function saveFormState() {
      const data = {};
      form.querySelectorAll("input, textarea, select").forEach((el) => {
        if (!el.name) return;
        data[el.name] = el.type === "checkbox" ? el.checked : el.value;
      });
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(data));
    }

    function restoreFormState() {
      const raw = localStorage.getItem(AUTOSAVE_KEY);
      if (!raw) return;
      try {
        const data = JSON.parse(raw);
        form.querySelectorAll("input, textarea, select").forEach((el) => {
          if (!(el.name in data)) return;
          if (el.type === "checkbox") el.checked = !!data[el.name];
          else el.value = data[el.name];
        });
      } catch (_) {}
    }

    restoreFormState();
    form.addEventListener("input", saveFormState);
    form.addEventListener("change", saveFormState);

    // Si reset, on purge aussi
    form.addEventListener("reset", () => {
      localStorage.removeItem(AUTOSAVE_KEY);
    });
  }

  /* ================= DOM READY ================= */
  document.addEventListener("DOMContentLoaded", () => {
    // ✅ 1) i18n + rtl sur TOUTES les pages (index, privacy, etc.)
    const lang = getLang();
    setLang(lang);

    document.getElementById("langSelect")?.addEventListener("change", (e) => {
      setLang(e.target.value);
      // Optionnel : si tu veux rester sur la page et juste traduire, c'est OK.
      // Si tu veux recharger : location.reload();
    });

    // ✅ 2) CTA scroll si présent
    bindScrollCTA();

    // ✅ 3) Autosave uniquement si le formulaire existe
    const form = document.getElementById("emetaForm");
    initAutosave(form);
  });
})();
