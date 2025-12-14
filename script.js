(function () {
  "use strict";

  /* =========================
     CONFIG
  ========================= */

  const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/9giawgap6b3yjmxtx5i9bc30hjixbu48"; // ⬅️ REMPLACE ICI

  /* =========================
     TRANSLATIONS
  ========================= */

  const translations = {
    fr: window.TRANSLATIONS_FR || {},
    en: window.TRANSLATIONS_EN || {},
    es: window.TRANSLATIONS_ES || {},
    ar: window.TRANSLATIONS_AR || {}
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
     LANGUAGE
  ========================= */

  function initLanguage() {
    const switcher = document.getElementById("languageSwitcher");
    if (!switcher) return;

    switcher.value = currentLang;
    applyLanguage(currentLang);

    switcher.addEventListener("change", () => {
      currentLang = switcher.value;
      localStorage.setItem("emeta_lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

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
     BURGER MENU
  ========================= */

  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");

    if (!burger || !nav) return;

    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      burger.classList.toggle("is-open");
      nav.classList.toggle("is-open");
    });

    // Fermer le menu après clic
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("is-open");
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     FORM SUBMIT → MAKE
  ========================= */

  function initForm() {
    const form = document.getElementById("emetaForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const payload = {
        domain: getVal("domain"),
        projectType: getVal("projectType"),
        projectTitle: getVal("projectTitle"),
        problem: getVal("problem"),
        objectives: getVal("objectives"),
        constraints: getVal("constraints"),
        kpis: getVal("kpis"),
        resources: getVal("resources"),
        deliverables: getVal("deliverables"),
        successIndicators: getVal("successIndicators"),
        context: getVal("context"),
        budgetMin: getVal("budgetMin", 0),
        budgetMax: getVal("budgetMax", 0),
        currency: getVal("currency", "EUR"),
        deadline: getVal("deadline"),
        urgency: getVal("urgency", 3),
        outputEmail: isChecked("outputEmail"),
        outputWhatsApp: isChecked("outputWhatsApp"),
        outputPdf: isChecked("outputPdf"),
        outputDisplay: isChecked("outputDisplay"),
        email: getVal("email"),
        whatsapp: getVal("whatsapp"),
        fileLink: getVal("fileLink"),
        language: currentLang
      };

      fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(() => {
          alertSuccess();
          form.reset();
        })
        .catch(() => {
          alertError();
        });
    });
  }

  /* =========================
     HELPERS
  ========================= */

  function getVal(id, fallback = "") {
    const el = document.getElementById(id);
    return el ? el.value : fallback;
  }

  function isChecked(name) {
    const el = document.querySelector(`[name="${name}"]`);
    return el && el.checked ? 1 : 0;
  }

  function alertSuccess() {
    alert(
      currentLang === "fr" ? "Votre requête a été envoyée avec succès."
      : currentLang === "en" ? "Your request has been sent successfully."
      : currentLang === "es" ? "Su solicitud ha sido enviada con éxito."
      : "تم إرسال طلبك بنجاح."
    );
  }

  function alertError() {
    alert(
      currentLang === "fr" ? "Erreur lors de l’envoi. Merci de réessayer."
      : currentLang === "en" ? "An error occurred. Please try again."
      : currentLang === "es" ? "Ocurrió un error. Inténtelo de nuevo."
      : "حدث خطأ. يرجى المحاولة مرة أخرى."
    );
  }

  /* =========================
     SAFE INIT
  ========================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
