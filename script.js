/* =====================================================
   e-META CORE JS (SAFE / STABLE / i18n COMPATIBLE)
===================================================== */

(function () {

  /* ---------- I18N ---------- */

  const DEFAULT_LANG = "fr";

  function applyTranslations(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.placeholder = dict[key];
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    localStorage.setItem("lang", lang);
  }

  window.setLanguage = function (lang) {
    applyTranslations(lang);
  };

  /* ---------- INIT ---------- */

  window.addEventListener("load", () => {

    /* Language */
    const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
    const langSelect = document.getElementById("languageSwitcher");
    if (langSelect) {
      langSelect.value = savedLang;
      langSelect.addEventListener("change", e => {
        setLanguage(e.target.value);
      });
    }
    setLanguage(savedLang);

    /* ---------- BURGER ---------- */

    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("is-open");
        burger.classList.toggle("is-open");
      });

      nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          nav.classList.remove("is-open");
          burger.classList.remove("is-open");
        });
      });
    }

  });

})();
