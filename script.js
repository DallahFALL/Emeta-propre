/* =====================================================
   e-META — script.js FINAL (International + Stable)
   - Burger menu mobile
   - Langues dynamiques FR / EN / ES / AR (+ RTL auto)
   - CTA "Requête personnalisée" : scroll vers #form
   - Persist lang via localStorage
===================================================== */

(function () {
  "use strict";

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "lang";

const I18N = {
  fr: {
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",
    "btn.customRequest": "Requête personnalisée",
    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.cta": "Démarrer une analyse stratégique",
    "form.submit": "Envoyer ma requête",
    "form.reset": "Réinitialiser le formulaire"
  },
  en: {
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",
    "btn.customRequest": "Custom request",
    "hero.title": "Give your decisions the level of a premium consulting firm",
    "hero.cta": "Start strategic analysis",
    "form.submit": "Submit request",
    "form.reset": "Reset form"
  },
  es: {
    "nav.home": "Inicio",
    "nav.form": "Formulario",
    "nav.privacy": "Privacidad",
    "btn.customRequest": "Solicitud personalizada",
    "hero.title": "Lleve sus decisiones al nivel de una consultoría premium",
    "hero.cta": "Iniciar análisis estratégico"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",
    "btn.customRequest": "طلب مخصص",
    "hero.title": "امنح قراراتك مستوى مكاتب الاستشارات المتميزة",
    "hero.cta": "بدء التحليل الاستراتيجي"
  }
};

  function getLang() {
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (I18N[saved]) return saved;

    const nav = (navigator.language || "fr").slice(0,2).toLowerCase();
    if (I18N[nav]) return nav;

    return DEFAULT_LANG;
  }

  function setRtl(isRtl) {
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    document.documentElement.setAttribute("lang", current);

    const rtlCss = document.getElementById("rtlStylesheet");
    if (rtlCss) rtlCss.disabled = !isRtl;
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.fr && I18N.fr[key]) || "";
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;

    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(lang, key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(lang, key);
      if (val) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-option]").forEach((opt) => {
      const key = opt.getAttribute("data-i18n-option");
      const val = t(lang, key);
      if (val) opt.textContent = val;
    });

    const switcher = document.getElementById("languageSwitcher");
    if (switcher && switcher.value !== lang) switcher.value = lang;
  }

  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    const close = () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      const target = e.target;
      if (target instanceof Node) {
        const clickedInside = nav.contains(target) || burger.contains(target);
        if (!clickedInside) close();
      }
    });

    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  function initCTA() {
    const cta =
      document.getElementById("ctaRequest") ||
      document.getElementById("ctaWhatsApp") ||
      document.querySelector(".whatsappBtnGlobal");

    if (!cta) return;

    cta.addEventListener("click", () => {
      const form = document.getElementById("form");
      if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.href = "index.html#form";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initBurger();
    initCTA();

    const switcher = document.getElementById("languageSwitcher");
    const initial = getLang();

    if (switcher) {
      switcher.addEventListener("change", (e) => applyLanguage(e.target.value));
    }

    applyLanguage(initial);
  });

  window.eMETA = window.eMETA || {};
  window.eMETA.applyLanguage = applyLanguage;

})();
