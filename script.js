/* =====================================================
   e-META — script.js FINAL (Production Stable)
   - Langues dynamiques FR / EN / ES / AR (+ RTL auto)
   - Persist lang via localStorage
   - CTA "Requête personnalisée" : scroll vers #form
   - Menu burger mobile (si présent)
   - Compatible index.html + privacy.html
===================================================== */

(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "lang";

  /* ============== HELPERS ============== */
  function getSavedLang() {
    const v = (localStorage.getItem(STORAGE_KEY) || "").trim();
    return v || DEFAULT_LANG;
  }

  function setDirAndLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar"); // optionnel si tu utilises rtl.css
  }

  function safeApplyTranslations(lang) {
    // i18n.js expose window.applyTranslations
    if (typeof window.applyTranslations === "function") {
      window.applyTranslations(lang);
    } else {
      // Si i18n.js n'est pas chargé, on évite de casser la page
      console.warn("[e-META] applyTranslations() introuvable. Vérifie le chargement de i18n.js.");
    }
  }

  /* ============== LANG SWITCH ============== */
  function setLanguage(lang) {
    const next = lang || DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, next);

    setDirAndLang(next);
    safeApplyTranslations(next);

    // Synchroniser le select si présent
    const sel = document.getElementById("langSelect");
    if (sel && sel.value !== next) sel.value = next;
  }

  /* ============== SCROLL CTA -> FORM ============== */
  function bindScrollToForm() {
    // CTA possible en header ou hero
    const triggers = [
      document.querySelector('[data-scroll-to="form"]'),
      document.getElementById("ctaForm"),
      document.getElementById("ctaRequest"),
      document.querySelector('a[href="#form"]'),
      document.querySelector('button[data-target="#form"]')
    ].filter(Boolean);

    const formAnchor = document.getElementById("form") || document.querySelector("#form");

    if (!formAnchor) return;

    triggers.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        formAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ============== BURGER MENU (si présent) ============== */
  function bindBurgerMenu() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("mobileNav") || document.querySelector(".mobile-nav");
    const overlay = document.getElementById("navOverlay");

    if (!burger || !nav) return;

    function open() {
      nav.classList.add("open");
      burger.setAttribute("aria-expanded", "true");
      if (overlay) overlay.classList.add("open");
      document.body.classList.add("no-scroll");
    }

    function close() {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      if (overlay) overlay.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }

    function toggle() {
      nav.classList.contains("open") ? close() : open();
    }

    burger.addEventListener("click", toggle);
    if (overlay) overlay.addEventListener("click", close);

    // Fermer au clic sur un lien
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

    // Fermer avec ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ============== INIT ============== */
  document.addEventListener("DOMContentLoaded", () => {
    // 1) Init langue (IMPORTANT : c’est ça qui manquait sur index)
    const lang = getSavedLang();
    setLanguage(lang);

    // 2) Listener sur select langues
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      // Valeur initiale
      langSelect.value = lang;

      langSelect.addEventListener("change", () => {
        setLanguage(langSelect.value);
      });
    }

    // 3) CTA scroll vers formulaire
    bindScrollToForm();

    // 4) Burger mobile (si présent)
    bindBurgerMenu();
  });

  // Exposer si besoin ailleurs
  window.setLanguage = setLanguage;

})();
