(function () {
  "use strict";

  /* =========================
     CONFIG
  ========================= */

  const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/XXXXXXXX"; // ⬅️ REMPLACE ICI

  /* =========================
     SAFE TRANSLATIONS REGISTRY
  ========================= */

  const translations = {
    fr: typeof window.TRANSLATIONS_FR === "object" ? window.TRANSLATIONS_FR : {},
    en: typeof window.TRANSLATIONS_EN === "object" ? window.TRANSLATIONS_EN : {},
    es: typeof window.TRANSLATIONS_ES === "object" ? window.TRANSLATIONS_ES : {},
    ar: typeof window.TRANSLATIONS_AR === "object" ? window.TRANSLATIONS_AR : {}
  };

  let currentLang = localStorage.getItem("emeta_lang") || "fr";

  /* =========================
     INIT
  ========================= */

  function init() {
    initLanguage();
    initBurger();
    initForm();
  }

  /* =========================
     LANGUAGE SYSTEM (SAFE)
  ========================= */

  function initLanguage() {
    const switcher = document.getElementById("languageSwitcher");
    if (!switcher) return;

    switcher.value = currentLang;
    applyLanguage(currentLang);

    switcher.addEventListener("change", function () {
      currentLang = this.value;
      localStorage.setItem("emeta_lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || {};

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  /* =========================
     BURGER MENU (MOBILE SAFE)
  ========================= */

  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", function () {
      const isOpen = nav.classList.contains("is-open");

      nav.classList.toggle("is-open", !isOpen);
      burger.classList.toggle("is-open", !isOpen);
      burger.setAttribute("aria-expanded", String(!isOpen));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     FORM → MAKE (NON BLOQUANT)
  ========================= */

  function initForm() {
    const form = document.getElementById("emetaForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const payload = {
        domain: val("domain"),
        projectType: val("projectType"),
        projectTitle: val("projectTitle"),
        problem: val("problem"),
        objectives: val("objectives"),
        constraints: val("constraints"),
        kpis: val("kpis"),
        resources: val("resources"),
        deliverables: val("deliverables"),
        successIndicators: val("successIndicators"),
        context: val("context"),
        budgetMin: val("budgetMin"),
        budgetMax: val("budgetMax"),
        currency: val("currency"),
        deadline: val("deadline"),
        urgency: val("urgency"),
        outputEmail: checked("outputEmail"),
        outputWhatsApp: checked("outputWhatsApp"),
        outputPdf: checked("outputPdf"),
        outputDisplay: checked("outputDisplay"),
        email: val("email"),
        whatsapp: val("whatsapp"),
        fileLink: val("fileLink"),
        language: currentLang
      };

      fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(() => {
          notify("success");
          form.reset();
        })
        .catch(() => {
          notify("error");
        });
    });
  }

  /* =========================
     HELPERS
  ========================= */

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function checked(name) {
    const el = document.querySelector(`[name="${name}"]`);
    return el && el.checked ? 1 : 0;
  }

  function notify(type) {
    const messages = {
      success: {
        fr: "Votre requête a été envoyée avec succès.",
        en: "Your request has been sent successfully.",
        es: "Su solicitud ha sido enviada con éxito.",
        ar: "تم إرسال طلبك بنجاح."
      },
      error: {
        fr: "Erreur lors de l’envoi. Merci de réessayer.",
        en: "An error occurred. Please try again.",
        es: "Ocurrió un error. Inténtelo de nuevo.",
        ar: "حدث خطأ. يرجى المحاولة مرة أخرى."
      }
    };

    alert(messages[type][currentLang] || messages[type].fr);
  }

  /* =========================
     SAFE BOOT
  ========================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
