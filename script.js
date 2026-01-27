// script.js — e-META vNext (stable & clean)
(function () {
  "use strict";

  const STORAGE_KEY = "emeta_lang";
  const DEFAULT_LANG = "fr";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setRtl(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    const rtl = document.getElementById("rtlStylesheet");
    if (rtl) rtl.disabled = (lang !== "ar");
  }

  function applyI18n(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) {
      console.warn("i18n: language not found →", lang);
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
  el.placeholder = dict[key];
}
    });
  }

  function updatePdfLinks(lang) {
    const guideMap = {
      fr: "pdf/eMETA_Guide_Formulaire_FR.pdf",
      en: "pdf/eMETA_Guide_Formulaire_EN.pdf",
      es: "pdf/eMETA_Guide_Formulaire_ES.pdf",
      ar: "pdf/eMETA_Guide_Formulaire_AR.pdf"
    };

    const privacyMap = {
      fr: "pdf/eMETA_Privacy_CGU_FR.pdf",
      en: "pdf/eMETA_Privacy_CGU_EN.pdf",
      es: "pdf/eMETA_Privacy_CGU_ES.pdf",
      ar: "pdf/eMETA_Privacy_CGU_AR.pdf"
    };

    const guide = document.getElementById("pdfGuideLink");
    const privacy = document.getElementById("pdfPrivacyLink");

    if (guide) guide.href = guideMap[lang] || guideMap.fr;
    if (privacy) privacy.href = privacyMap[lang] || privacyMap.fr;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setRtl(lang);
    applyI18n(lang);
    updatePdfLinks(lang);

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function scrollToForm() {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();

  // 1️⃣ Appliquer immédiatement
  setLang(lang);

  // 2️⃣ Ré-appliquer APRÈS rendu complet (fix desktop)
  requestAnimationFrame(() => {
    applyI18n(lang);
  });

  // 3️⃣ Sécurité supplémentaire (fonts/layout desktop)
  setTimeout(() => {
    applyI18n(lang);
  }, 50);
});

    document.getElementById("langSelect")
      ?.addEventListener("change", e => setLang(e.target.value));

    document.getElementById("burgerBtn")
      ?.addEventListener("click", () =>
        document.getElementById("mainNav")?.classList.toggle("open")
      );

    document.getElementById("startBtn")?.addEventListener("click", scrollToForm);
    document.getElementById("customBtn")?.addEventListener("click", scrollToForm);

    document.getElementById("emetaForm")
      ?.addEventListener("submit", e => {
        if (!document.getElementById("consent")?.checked) {
          e.preventDefault();
        }
      });
  });

})();
