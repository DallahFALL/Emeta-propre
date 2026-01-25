/* =====================================================
   e-META — i18n VALIDATOR (DEV TOOL)
   Auteur : Expert i18n
===================================================== */

(function () {
  if (!window.I18N) {
    console.error("❌ window.I18N not found");
    return;
  }

  const LANGS = Object.keys(window.I18N);
  const BASE_LANG = "fr";

  console.group("🌍 i18n VALIDATION REPORT");

  /* --------------------------------
     1️⃣ Parité des clés
  -------------------------------- */
  const baseKeys = new Set(Object.keys(window.I18N[BASE_LANG]));

  LANGS.forEach(lang => {
    const keys = new Set(Object.keys(window.I18N[lang]));
    const missing = [...baseKeys].filter(k => !keys.has(k));
    const extra = [...keys].filter(k => !baseKeys.has(k));

    if (missing.length) {
      console.warn(`❌ [${lang}] Missing keys:`, missing);
    } else {
      console.log(`✅ [${lang}] All base keys present`);
    }

    if (extra.length) {
      console.info(`ℹ️ [${lang}] Extra keys (not in ${BASE_LANG}):`, extra);
    }
  });

  /* --------------------------------
     2️⃣ data-i18n dans le DOM
  -------------------------------- */
  const domKeys = new Set();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    domKeys.add(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    domKeys.add(el.dataset.i18nPlaceholder);
  });

  const missingInDict = [...domKeys].filter(k => !baseKeys.has(k));
  if (missingInDict.length) {
    console.error("❌ DOM keys missing in i18n (FR):", missingInDict);
  } else {
    console.log("✅ All DOM i18n keys exist in FR dictionary");
  }

  /* --------------------------------
     3️⃣ Textes en dur (heuristique)
  -------------------------------- */
  const hardcoded = [];
  document.querySelectorAll("label, p, span, legend, h1, h2, h3, h4").forEach(el => {
    const hasI18n =
      el.hasAttribute("data-i18n") ||
      el.hasAttribute("data-i18n-placeholder");

    if (!hasI18n && el.textContent.trim().length > 2) {
      hardcoded.push(el);
    }
  });

  if (hardcoded.length) {
    console.warn("⚠️ Possible hardcoded texts (check manually):", hardcoded);
  } else {
    console.log("✅ No obvious hardcoded visible text detected");
  }

  /* --------------------------------
     4️⃣ Selects interdits (options HTML)
  -------------------------------- */
  document.querySelectorAll("select").forEach(select => {
    if (select.options.length > 0) {
      console.warn(
        `⚠️ <select id="${select.id}"> contains ${select.options.length} <option> elements. 
        Dynamic i18n selects should be populated via JS only.`
      );
    }
  });

  console.groupEnd();
})();
