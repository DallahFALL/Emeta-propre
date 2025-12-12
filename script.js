console.log("script.js chargé");

window.addEventListener("load", () => {

  // ===== I18N =====
  const DEFAULT_LANG = "fr";
  const lang = localStorage.getItem("lang") || DEFAULT_LANG;

  if (typeof translations === "undefined") {
    console.error("translations non défini");
    return;
  }

  function applyLang(l) {
    const dict = translations[l] || translations[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (dict[k]) el.textContent = dict[k];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const k = el.dataset.i18nPlaceholder;
      if (dict[k]) el.placeholder = dict[k];
    });

    document.documentElement.lang = l;
    document.documentElement.dir = (l === "ar") ? "rtl" : "ltr";
    localStorage.setItem("lang", l);
  }

  applyLang(lang);

  const langSelect = document.getElementById("languageSwitcher");
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener("change", e => applyLang(e.target.value));
  }

console.log("script.js chargé");

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      burger.classList.toggle("is-open");
      burger.setAttribute(
        "aria-expanded",
        nav.classList.contains("is-open")
      );
    });
  }
});
