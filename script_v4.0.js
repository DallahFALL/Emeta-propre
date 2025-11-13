/* -------------------------------------------------
   BURGER MENU
------------------------------------------------- */
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/* -------------------------------------------------
   LANGUAGE MENU
------------------------------------------------- */
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const langFlag = document.getElementById("langFlag");
const langCode = document.getElementById("langCode");

langToggle.addEventListener("click", () => {
  langMenu.classList.toggle("show");
});

/* -------------------------------------------------
   MULTILINGUE : Dictionnaire
------------------------------------------------- */
const i18n = {
  fr: {
    hero_title: "e-META — L’assistant IA pluridisciplinaire",
    hero_sub: "Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    themes: [
      "Agriculture", "Finance", "Commerce", "Marketing", "Santé",
      "Études de projets", "Immobilier", "Ingénierie", "Transport"
    ],
    currencies: [
      { code: "XOF", label: "Franc CFA" },
      { code: "USD", label: "Dollar US" },
      { code: "EUR", label: "Euro" }
    ],
    wa: "221782607212"
  },

  en: {
    hero_title: "e-META — The Multidisciplinary AI Assistant",
    hero_sub: "Smart form to analyze, diagnose and recommend suitable solutions.",
    nav_home: "Home",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    themes: [
      "Agriculture", "Finance", "Business", "Marketing", "Health",
      "Project studies", "Real estate", "Engineering", "Transport"
    ],
    currencies: [
      { code: "USD", label: "US Dollar" },
      { code: "EUR", label: "Euro" },
      { code: "GBP", label: "Pound Sterling" }
    ],
    wa: "447400000000"
  },

  es: {
    hero_title: "e-META — El Asistente IA Multidisciplinario",
    hero_sub: "Formulario inteligente para analizar y recomendar soluciones.",
    nav_home: "Inicio",
    nav_about: "Acerca de",
    nav_faq: "FAQ",
    nav_contact: "Contacto",
    themes: [
      "Agricultura", "Finanzas", "Comercio", "Marketing", "Salud",
      "Estudios de proyectos", "Inmobiliario", "Ingeniería", "Transporte"
    ],
    currencies: [
      { code: "EUR", label: "Euro" },
      { code: "USD", label: "Dólar US" }
    ],
    wa: "34660000000"
  },

  ar: {
    hero_title: "META-e — المساعد الذكي متعدد التخصصات",
    hero_sub: "نموذج ذكي لتحليل وتشخيص وتوصية الحلول المناسبة.",
    nav_home: "الرئيسية",
    nav_about: "حول",
    nav_faq: "الأسئلة",
    nav_contact: "اتصال",
    themes: [
      "الزراعة", "المالية", "التجارة", "التسويق", "الصحة",
      "دراسات المشاريع", "العقار", "الهندسة", "النقل"
    ],
    currencies: [
      { code: "USD", label: "دولار أمريكي" },
      { code: "EUR", label: "يورو" }
    ],
    wa: "966500000000"
  }
};

/* -------------------------------------------------
   UPDATE LANGUAGE
------------------------------------------------- */
function switchLang(lang) {
  const data = i18n[lang];

  // UI
  langFlag.textContent =
    lang === "fr" ? "🇫🇷"
    : lang === "en" ? "🇬🇧"
    : lang === "es" ? "🇪🇸"
    : "🇸🇦";

  langCode.textContent = lang.toUpperCase();

  // Textes
  document.querySelector("[data-i18n='hero_title']").textContent = data.hero_title;
  document.querySelector("[data-i18n='hero_sub']").textContent = data.hero_sub;

  document.querySelector("[data-i18n='nav_home']").textContent = data.nav_home;
  document.querySelector("[data-i18n='nav_about']").textContent = data.nav_about;
  document.querySelector("[data-i18n='nav_faq']").textContent = data.nav_faq;
  document.querySelector("[data-i18n='nav_contact']").textContent = data.nav_contact;

  // Thèmes
  const themeSelect = document.getElementById("themeSelect");
  themeSelect.innerHTML = "";
  data.themes.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    themeSelect.appendChild(opt);
  });

  // Devises
  const currencySelect = document.getElementById("currencySelect");
  currencySelect.innerHTML = "";
  data.currencies.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.code;
    opt.textContent = `${c.code} — ${c.label}`;
    currencySelect.appendChild(opt);
  });

  // Numéro WhatsApp
  window.currentWA = data.wa;
}

/* Click on language */
document.querySelectorAll("#langMenu li").forEach(li => {
  li.addEventListener("click", () => {
    const lang = li.dataset.lang;
    langMenu.classList.remove("show");
    switchLang(lang);
  });
});

/* -------------------------------------------------
   WHATSAPP
------------------------------------------------- */
document.getElementById("whatsappBtn").addEventListener("click", () => {
  const phone = window.currentWA || "221782607212";
  window.open(`https://wa.me/${phone}`, "_blank");
});

/* Init default language */
switchLang("fr");
