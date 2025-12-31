/* =====================================================
   e-META — script.js FINAL (PRO • International • Stable)
   - i18n dynamique FR / EN / ES / AR (objets imbriqués)
   - Ne remplace JAMAIS par du vide si clé manquante
   - Placeholders i18n (data-i18n-placeholder)
   - RTL auto (ar) + class .rtl
   - Burger menu mobile stable
   - Scroll CTA vers #form
   - Persist langue (localStorage)
   - Compat index.html + privacy.html
===================================================== */

(() => {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "emeta_lang";
  const RTL_LANGS = new Set(["ar"]);

  // Helpers
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Safe getter for nested paths: "nav.home" => dict.nav.home
  function getByPath(obj, path) {
    if (!obj || !path) return undefined;
    const parts = String(path).split(".");
    let cur = obj;
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) cur = cur[p];
      else return undefined;
    }
    return cur;
  }

  function getDict(lang) {
    const all = window.I18N || window.I18n || {};
    return all[lang] || all[DEFAULT_LANG] || {};
  }

  function setRTL(lang) {
    const rtl = RTL_LANGS.has(lang);
    document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
    document.documentElement.classList.toggle("rtl", rtl);
  }

  function applyTranslations(lang) {
    const dict = getDict(lang);

    // 1) Text nodes
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);

      // ✅ Only set if it's a non-empty string
      if (typeof val === "string" && val.trim() !== "") {
        el.textContent = val;
      } else {
        // ❗ Don't wipe existing content (avoids empty UI)
        // console.warn("Missing i18n key:", key);
      }
    });

    // 2) Placeholders
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getByPath(dict, key);

      if (typeof val === "string" && val.trim() !== "") {
        el.setAttribute("placeholder", val);
      } else {
        // don't wipe placeholder
        // console.warn("Missing placeholder key:", key);
      }
    });

    // 3) Page title (optional)
    const titleKey = document.querySelector("title")?.getAttribute("data-i18n");
    if (titleKey) {
      const t = getByPath(dict, titleKey);
      if (typeof t === "string" && t.trim() !== "") document.title = t;
    }
  }

  function setLanguage(lang) {
    const safe = (window.I18N && window.I18N[lang]) ? lang : DEFAULT_LANG;

    document.documentElement.setAttribute("lang", safe);
    setRTL(safe);
    applyTranslations(safe);

    // Sync both possible switcher ids (index + privacy)
    const s1 = $("#languageSwitcher");
    const s2 = $("#langSwitcher");
    if (s1 && s1.value !== safe) s1.value = safe;
    if (s2 && s2.value !== safe) s2.value = safe;

    localStorage.setItem(STORAGE_KEY, safe);
  }

  // Global function for onclick usage (CTA)
  window.scrollToForm = function scrollToForm() {
    const form = document.getElementById("form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If no #form on the page (privacy.html), go home
      // optional: location.href = "index.html#form";
    }
  };

  function initBurger() {
    const burger = $("#burgerBtn");
    const nav = $("#mainNav");
    if (!burger || !nav) return;

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    $$("a", nav).forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  function initLangSwitcher() {
    const switchers = [$("#languageSwitcher"), $("#langSwitcher")].filter(Boolean);
    if (!switchers.length) return;

    switchers.forEach((sw) => {
      sw.addEventListener("change", (e) => setLanguage(e.target.value));
    });
  }

  // Optional: make page feel faster by pre-applying saved language ASAP
  function earlyApplySavedLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    // apply minimal html attributes early
    document.documentElement.setAttribute("lang", saved);
    setRTL(saved);
  }

  // Run
  earlyApplySavedLanguage();

  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initLangSwitcher();

    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLanguage(saved);
  });

})();

// Scroll fiable vers le formulaire
function scrollToForm() {
  const form = document.getElementById("form");
  if (!form) return;

  const yOffset = -90; // compense le header sticky
  const y = form.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

function scrollToForm() {
  const form = document.getElementById("form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.getElementById("burgerBtn")?.addEventListener("click", () => {
  document.getElementById("mainNav")?.classList.toggle("open");
});
