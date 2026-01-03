/* =====================================================
   e-META — script.js FINAL
   - i18n dynamique
   - RTL automatique
   - Persistance langue
   - index.html + privacy.html
===================================================== */

(function () {
  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  const langSelect =
    document.getElementById("langSelect") ||
    document.getElementById("langSwitcher");

  function resolve(obj, path) {
    return path.split(".").reduce((o, k) => (o ? o[k] : null), obj);
  }

  function applyI18n(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const val = resolve(dict, el.dataset.i18n);
      if (val) el.textContent = val;
    });

    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach(el => {
        const val = resolve(dict, el.dataset.i18nPlaceholder);
        if (val) el.placeholder = val;
      });

    document
      .querySelectorAll("title[data-i18n]")
      .forEach(el => {
        const val = resolve(dict, el.dataset.i18n);
        if (val) document.title = val;
      });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", e =>
      applyI18n(e.target.value)
    );
  }

  applyI18n(savedLang);

  // Burger menu (sécurisé)
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (burger && nav) {
    burger.addEventListener("click", () =>
      nav.classList.toggle("open")
    );
  }

  // Scroll CTA
  window.scrollToForm = function () {
    document
      .getElementById("form")
      ?.scrollIntoView({ behavior: "smooth" });
  };
})();
