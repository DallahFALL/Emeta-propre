/* =====================================================
   e-META — script.js
   i18n + RTL + UI fixes
===================================================== */

const translations = {
  fr: {
    "btn.request": "Requête personnalisée",
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité"
  },
  en: {
    "btn.request": "Custom request",
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy"
  },
  ar: {
    "btn.request": "طلب مخصص",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية"
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  const saved = localStorage.getItem("lang") || "fr";
  if (switcher) {
    switcher.value = saved;
    switcher.addEventListener("change", e => applyLanguage(e.target.value));
  }
  applyLanguage(saved);
});

function displayResult(html) {
  const section = document.getElementById("result-section");
  const container = document.getElementById("resultContent");

  if (section && container) {
    container.innerHTML = html;
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  }
}

