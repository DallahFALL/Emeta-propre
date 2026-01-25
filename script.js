/* =====================================================
   e-META — script.js FINAL STABLE & DEBUGGABLE
===================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";
  const RTL_LANGS = ["ar"];

  /* --------------------
     LANG CORE
  -------------------- */
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = !RTL_LANGS.includes(lang);
  }

  /* --------------------
     SELECT BUILDER
  -------------------- */
  function populateSelect(id, items) {
    const select = document.getElementById(id);
    if (!select || !Array.isArray(items)) return;

    const current = select.value;
    select.innerHTML = "";

    items.forEach(o => {
      const opt = document.createElement("option");
      opt.value = o.value;
      opt.textContent = o.label;
      select.appendChild(opt);
    });

    if (current) select.value = current;
  }

  /* --------------------
     RENDER UI (SINGLE SOURCE OF TRUTH)
  -------------------- */
  function renderUI(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) {
      console.warn("i18n missing for:", lang);
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.placeholder = dict[key];
    });

    populateSelect("domain", dict["select.domain"]);
    populateSelect("decisionType", dict["select.decisionType"]);

    if (dict["meta.title"]) document.title = dict["meta.title"];
  }

  /* 🔎 EXPOSER POUR DEBUG (VOLONTAIRE) */
  window.renderUI = renderUI;

  /* --------------------
     INIT
  -------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    setLang(lang);
    renderUI(lang);

    const select = document.getElementById("langSelect");
    if (select) {
      select.value = lang;
      select.addEventListener("change", () => {
        const l = select.value;
        setLang(l);
        renderUI(l);
        requestAnimationFrame(() => renderUI(l)); // mobile safety
      });
    }

    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("is-open");
      });
    }

    const start = document.getElementById("startBtn");
    if (start) {
      start.addEventListener("click", () => {
        const form = document.getElementById("form");
        if (form) form.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
})();
/* =====================================================
   e-META — i18n VALIDATOR (DEV TOOL)
   Détecte :
   - clés HTML sans traduction
   - clés i18n non utilisées
   - selects non peuplés
===================================================== */

window.validateI18n = function (lang) {
  const dict = window.I18N?.[lang];
  if (!dict) {
    console.error("❌ i18n introuvable pour la langue :", lang);
    return;
  }

  console.group(`🔎 i18n VALIDATION — ${lang.toUpperCase()}`);

  /* -----------------------------
     1. data-i18n manquants
  ----------------------------- */
  const missingText = [];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!dict[key]) {
      missingText.push(key);
      el.style.outline = "2px solid red";
    }
  });

  if (missingText.length) {
    console.warn("❌ Clés TEXTE manquantes :", missingText);
  } else {
    console.log("✅ Tous les data-i18n sont couverts");
  }

  /* -----------------------------
     2. placeholders manquants
  ----------------------------- */
  const missingPH = [];
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (!dict[key]) {
      missingPH.push(key);
      el.style.outline = "2px dashed orange";
    }
  });

  if (missingPH.length) {
    console.warn("❌ Placeholders manquants :", missingPH);
  } else {
    console.log("✅ Tous les placeholders sont couverts");
  }

  /* -----------------------------
     3. Selects dynamiques
  ----------------------------- */
  ["domain", "decisionType"].forEach(id => {
    const el = document.getElementById(id);
    const key = `select.${id}`;
    if (!el) {
      console.warn(`⚠️ Select #${id} absent du DOM`);
      return;
    }
    if (!Array.isArray(dict[key])) {
      console.error(`❌ ${key} absent ou invalide dans i18n`);
      return;
    }
    if (el.options.length <= 1) {
      console.error(`❌ Select #${id} non peuplé`);
    } else {
      console.log(`✅ Select #${id} OK (${el.options.length} options)`);
    }
  });

  /* -----------------------------
     4. Clés i18n inutilisées
  ----------------------------- */
  const usedKeys = new Set();
  document.querySelectorAll("[data-i18n]").forEach(el => usedKeys.add(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => usedKeys.add(el.dataset.i18nPlaceholder));
  usedKeys.add("select.domain");
  usedKeys.add("select.decisionType");

  const unused = Object.keys(dict).filter(k => !usedKeys.has(k));
  if (unused.length) {
    console.info("ℹ️ Clés i18n non utilisées :", unused);
  } else {
    console.log("✅ Aucune clé i18n inutile");
  }

  console.groupEnd();
};
