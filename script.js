document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.getElementById("languageSelect");
  const rtlLink = document.getElementById("rtl-style");

  const translations = {
    fr: {
      home: "Accueil",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      form_title: "Requête personnalisée",
      domain_label: "Domaine / Thème",
      domain_placeholder: "— Domaine —",
      result_label: "Résultat attendu",
      result_placeholder: "Ex : Dossier de financement, plan stratégique, prototype…",
      budget_label: "Budget indicatif",
      budget_placeholder: "Montant estimé",
      currency_label: "Devise",
      fullname_label: "Nom complet",
      fullname_placeholder: "Votre nom complet",
      email_label: "Email",
      email_placeholder: "exemple@mail.com",
      phone_label: "Téléphone (WhatsApp)",
      phone_placeholder: "+221…",
      details_label: "Détails / Contexte",
      details_placeholder: "Décrivez le contexte, contraintes ou priorités…",
      label_mode: "Mode de restitution",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "Affichage direct",
      send_button: "Envoyer la requête",
      reset_button: "Réinitialiser",
      footer_text: "© 2025 e-META • Simplement. Intelligemment."
    },
    en: {
      home: "Home",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      form_title: "Custom Request",
      domain_label: "Domain / Topic",
      domain_placeholder: "— Choose domain —",
      result_label: "Expected result",
      result_placeholder: "Ex: Funding file, strategic plan, prototype…",
      budget_label: "Indicative budget",
      budget_placeholder: "Estimated amount",
      currency_label: "Currency",
      fullname_label: "Full name",
      fullname_placeholder: "Your full name",
      email_label: "Email",
      email_placeholder: "example@mail.com",
      phone_label: "Phone (WhatsApp)",
      phone_placeholder: "+221…",
      details_label: "Details / Context",
      details_placeholder: "Describe the context, constraints or priorities…",
      label_mode: "Delivery mode",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "Direct display",
      send_button: "Send request",
      reset_button: "Reset",
      footer_text: "© 2025 e-META • Simply. Intelligently."
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      faq: "FAQ",
      contact: "Contacto",
      form_title: "Solicitud personalizada",
      domain_label: "Dominio / Tema",
      domain_placeholder: "— Seleccionar dominio —",
      result_label: "Resultado esperado",
      result_placeholder: "Ej: Dossier de financiamiento, plan estratégico, prototipo…",
      budget_label: "Presupuesto indicativo",
      budget_placeholder: "Monto estimado",
      currency_label: "Moneda",
      fullname_label: "Nombre completo",
      fullname_placeholder: "Tu nombre completo",
      email_label: "Correo electrónico",
      email_placeholder: "ejemplo@mail.com",
      phone_label: "Teléfono (WhatsApp)",
      phone_placeholder: "+221…",
      details_label: "Detalles / Contexto",
      details_placeholder: "Describe el contexto, limitaciones o expectativas…",
      label_mode: "Modo de entrega",
      mode_whatsapp: "WhatsApp",
      mode_email: "Correo",
      mode_display: "Visualización directa",
      send_button: "Enviar solicitud",
      reset_button: "Restablecer",
      footer_text: "© 2025 e-META • Simplemente. Inteligentemente."
    },
    ar: {
      home: "الرئيسية",
      about: "حول",
      faq: "الأسئلة الشائعة",
      contact: "اتصال",
      form_title: "طلب مخصص",
      domain_label: "المجال / الموضوع",
      domain_placeholder: "— اختر —",
      result_label: "النتيجة المتوقعة",
      result_placeholder: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي…",
      budget_label: "الميزانية التقديرية",
      budget_placeholder: "المبلغ المقدر",
      currency_label: "العملة",
      fullname_label: "الاسم الكامل",
      fullname_placeholder: "اسمك الكامل",
      email_label: "البريد الإلكتروني",
      email_placeholder: "example@mail.com",
      phone_label: "الهاتف (واتساب)",
      phone_placeholder: "+221…",
      details_label: "التفاصيل / السياق",
      details_placeholder: "اشرح السياق أو القيود أو التوقعات...",
      label_mode: "طريقة الاسترجاع",
      mode_whatsapp: "واتساب",
      mode_email: "البريد",
      mode_display: "عرض مباشر",
      send_button: "إرسال الطلب",
      reset_button: "إعادة التعيين",
      footer_text: "© 2025 e-META • ببساطة. بذكاء."
    }
  };

  function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-placeholder]").forEach(el => {
      const key = el.getAttribute("data-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });

    const footer = document.querySelector("footer p");
    if (footer) footer.textContent = t.footer_text;

    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    if (rtlLink) rtlLink.disabled = lang !== "ar";
  }

  const userLang = (navigator.language || "fr").slice(0, 2);
  const initialLang = ["fr", "en", "es", "ar"].includes(userLang) ? userLang : "fr";
  updateLanguage(initialLang);
  langSelector.value = initialLang;

  langSelector.addEventListener("change", e => updateLanguage(e.target.value));
});
