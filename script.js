/* =====================================================
   e-META — script.js (i18n GLOBAL + RTL SAFE)
   Fonctionne sur index.html + privacy.html
===================================================== */

const translations = {
  fr: {
    tagline: "Assistant IA multilingue de prise de décision",
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "footer.back": "Retour à l’accueil",

    "privacy.title": "Politique de confidentialité",
    "privacy.intro": "Votre confiance est essentielle. e-META protège vos données et respecte les normes internationales.",
    "privacy.section1.title": "1. Objet",
    "privacy.section1.text": "Cette politique décrit comment e-META collecte et utilise les informations.",
    "privacy.section2.title": "2. Données collectées",
    "privacy.section2.text": "Nous collectons uniquement les données nécessaires.",
    "privacy.section2.item1": "Informations fournies volontairement",
    "privacy.section2.item2": "Données techniques anonymisées",
    "privacy.section2.item3": "Aucune revente de données",
    "privacy.section3.title": "3. Utilisation des données",
    "privacy.section3.item1": "Analyse décisionnelle",
    "privacy.section3.item2": "Amélioration du service",
    "privacy.section3.item3": "Support utilisateur",
    "privacy.section4.title": "4. Sécurité",
    "privacy.section4.text1": "Les données sont sécurisées.",
    "privacy.section4.text2": "Accès limité et contrôlé.",
    "privacy.section5.title": "5. Conservation",
    "privacy.section5.text": "Les données sont conservées uniquement le temps nécessaire.",
    "privacy.section6.title": "6. Droits des utilisateurs",
    "privacy.section6.text": "Vous pouvez demander modification ou suppression.",
    "privacy.section7.title": "7. Cookies",
    "privacy.section7.text": "Cookies techniques uniquement.",
    "privacy.section8.title": "8. IA & responsabilité",
    "privacy.section8.item1": "Aide à la décision",
    "privacy.section8.item2": "Pas de décisions automatisées imposées",
    "privacy.section8.item3": "Cadres de conseil",
    "privacy.section8.item4": "Usage éthique",
    "privacy.section9.title": "9. International",
    "privacy.section9.text": "Conforme RGPD et bonnes pratiques internationales.",
    "privacy.section10.title": "10. Contact",
    "privacy.section10.text": "Contact : contact@e-meta.app"
  },

  en: {
    tagline: "Multilingual AI decision intelligence assistant",
    "nav.home": "Home",
    "nav.form": "Form",
    "footer.back": "Back to home",

    "privacy.title": "Privacy Policy",
    "privacy.intro": "Your trust matters. e-META protects your data and respects international standards.",
    "privacy.section1.title": "1. Purpose",
    "privacy.section1.text": "This policy explains how e-META handles data.",
    "privacy.section2.title": "2. Data collected",
    "privacy.section2.text": "Only necessary data is collected.",
    "privacy.section2.item1": "User-provided information",
    "privacy.section2.item2": "Anonymous technical data",
    "privacy.section2.item3": "No data resale",
    "privacy.section3.title": "3. Data usage",
    "privacy.section3.item1": "Decision analysis",
    "privacy.section3.item2": "Service improvement",
    "privacy.section3.item3": "User support",
    "privacy.section4.title": "4. Security",
    "privacy.section4.text1": "Data is secured.",
    "privacy.section4.text2": "Restricted access.",
    "privacy.section5.title": "5. Retention",
    "privacy.section5.text": "Data kept only as needed.",
    "privacy.section6.title": "6. User rights",
    "privacy.section6.text": "You may request deletion.",
    "privacy.section7.title": "7. Cookies",
    "privacy.section7.text": "Technical cookies only.",
    "privacy.section8.title": "8. AI responsibility",
    "privacy.section8.item1": "Decision support",
    "privacy.section8.item2": "No forced automation",
    "privacy.section8.item3": "Consulting frameworks",
    "privacy.section8.item4": "Ethical use",
    "privacy.section9.title": "9. International scope",
    "privacy.section9.text": "GDPR compliant.",
    "privacy.section10.title": "10. Contact",
    "privacy.section10.text": "Contact: contact@e-meta.app"
  },

  ar: {
    tagline: "مساعد ذكي متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "footer.back": "العودة للرئيسية",

    "privacy.title": "سياسة الخصوصية",
    "privacy.intro": "ثقتكم تهمنا. e-META تحمي بياناتكم.",
    "privacy.section1.title": "١. الهدف",
    "privacy.section1.text": "تشرح هذه السياسة كيفية استخدام البيانات.",
    "privacy.section2.title": "٢. البيانات المجمعة",
    "privacy.section2.text": "نقوم بجمع البيانات الضرورية فقط.",
    "privacy.section2.item1": "بيانات يقدمها المستخدم",
    "privacy.section2.item2": "بيانات تقنية مجهولة",
    "privacy.section2.item3": "عدم بيع البيانات",
    "privacy.section3.title": "٣. استخدام البيانات",
    "privacy.section3.item1": "تحليل القرار",
    "privacy.section3.item2": "تحسين الخدمة",
    "privacy.section3.item3": "الدعم",
    "privacy.section4.title": "٤. الأمان",
    "privacy.section4.text1": "حماية قوية للبيانات.",
    "privacy.section4.text2": "وصول محدود.",
    "privacy.section5.title": "٥. مدة الاحتفاظ",
    "privacy.section5.text": "الاحتفاظ حسب الحاجة فقط.",
    "privacy.section6.title": "٦. حقوق المستخدم",
    "privacy.section6.text": "يحق لك طلب الحذف.",
    "privacy.section7.title": "٧. ملفات تعريف الارتباط",
    "privacy.section7.text": "ملفات تقنية فقط.",
    "privacy.section8.title": "٨. الذكاء الاصطناعي",
    "privacy.section8.item1": "دعم القرار",
    "privacy.section8.item2": "لا قرارات مفروضة",
    "privacy.section8.item3": "أطر استشارية",
    "privacy.section8.item4": "استخدام أخلاقي",
    "privacy.section9.title": "٩. النطاق الدولي",
    "privacy.section9.text": "متوافق مع المعايير الدولية.",
    "privacy.section10.title": "١٠. الاتصال",
    "privacy.section10.text": "contact@e-meta.app"
  }
};

/* ================= APPLY LANGUAGE ================= */

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

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  const savedLang = localStorage.getItem("lang") || "fr";

  applyLanguage(savedLang);

  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }
});

// ================= INIT (FIX) =================
function initFormSubmit() {
  // --- ton code actuel de initForm ici (submit, reset, handlers) ---
  // IMPORTANT : ne rappelle plus jamais initFormSubmit() ici.
}

function init() {
  initBurgerMenu();
  initLanguageSwitcher();
  initFormSubmit();
}

document.addEventListener("DOMContentLoaded", init);
