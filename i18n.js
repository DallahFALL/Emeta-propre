const I18N = {
  fr: {
    cta: {
      start: "Démarrer une analyse stratégique",
      custom: "Requête personnalisée",
      submit: "Envoyer la requête stratégique"
    },
    form: {
      title: "Formulaire e-META — Version Ultra-Premium",
      themes: "Thématiques stratégiques",
      deliverables: "Restitution & livrables",
      upload: "Documents complémentaires (optionnel)",
      uploadHint: "Vous pouvez joindre un document existant (PDF, Word, Excel, présentation...)"
    },
    footer: {
      tagline: "Assistant IA multilingue de prise de décision stratégique",
      form: "Formulaire",
      privacy: "Confidentialité",
      rights: "Tous droits réservés"
    }
  },

  en: {
    cta: {
      start: "Start a strategic analysis",
      custom: "Custom request",
      submit: "Submit strategic request"
    },
    form: {
      title: "e-META Form — Ultra-Premium Version",
      themes: "Strategic themes",
      deliverables: "Expected deliverables",
      upload: "Additional documents (optional)",
      uploadHint: "You may attach an existing document (PDF, Word, Excel, presentation...)"
    },
    footer: {
      tagline: "Multilingual AI decision-making assistant",
      form: "Form",
      privacy: "Privacy policy",
      rights: "All rights reserved"
    }
  },

  ar: {
    cta: {
      start: "بدء تحليل استراتيجي",
      custom: "طلب مخصص",
      submit: "إرسال الطلب الاستراتيجي"
    },
    form: {
      title: "نموذج e-META — النسخة المتقدمة",
      themes: "المواضيع الاستراتيجية",
      deliverables: "المخرجات المتوقعة",
      upload: "مستندات إضافية (اختياري)",
      uploadHint: "يمكنك إرفاق مستند موجود (PDF، Word، Excel، عرض تقديمي...)"
    },
    footer: {
      tagline: "مساعد ذكاء اصطناعي لاتخاذ القرار",
      form: "النموذج",
      privacy: "سياسة الخصوصية",
      rights: "جميع الحقوق محفوظة"
    }
  }
};

/* =====================================================
   e-META — i18n APPLY ENGINE
===================================================== */

window.applyTranslations = function (lang) {
  const dict = window.I18N?.[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });
};

/* ===== Sécurité d'initialisation ===== */
window.I18N = window.I18N || I18N;
