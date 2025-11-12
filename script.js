// ===== e-META SCRIPT v3.7 =====
// Multilingue complet + drapeaux dynamiques + responsive radio layout + sauvegarde langue

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("languageSelect");
  const htmlTag = document.documentElement;
  const radiosContainer = document.querySelector("fieldset .mode-row");

  // --- Traductions disponibles ---
  const translations = {
    FR: {
      home: "Accueil",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      form_title: "Requête personnalisée",
      label_domain: "Domaine / Thème",
      placeholder_result: "Ex : Dossier de financement, plan stratégique, prototype...",
      placeholder_budget: "Montant estimé",
      placeholder_name: "Votre nom complet",
      placeholder_email: "exemple@mail.com",
      placeholder_details: "Décrivez le contexte, contraintes ou priorités...",
      label_currency: "Devise",
      label_mode: "Mode de restitution",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "Affichage direct",
      btn_submit: "Envoyer la requête",
      btn_reset: "Réinitialiser"
    },
    EN: {
      home: "Home",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      form_title: "Custom Request",
      label_domain: "Domain / Topic",
      placeholder_result: "Ex: Funding file, strategic plan, prototype...",
      placeholder_budget: "Estimated amount",
      placeholder_name: "Your full name",
      placeholder_email: "example@mail.com",
      placeholder_details: "Describe the context, constraints or priorities...",
      label_currency: "Currency",
      label_mode: "Delivery mode",
      mode_whatsapp: "WhatsApp",
      mode_email: "Email",
      mode_display: "Direct display",
      btn_submit: "Send request",
      btn_reset: "Reset"
    },
    ES: {
      home: "Inicio",
      about: "Acerca de",
      faq: "FAQ",
      contact: "Contacto",
      form_title: "Solicitud personalizada",
      label_domain: "Dominio / Tema",
      placeholder_result: "Ej: expediente de financiación, plan estratégico, prototipo...",
      placeholder_budget: "Monto estimado",
      placeholder_name: "Nombre completo",
      placeholder_email: "ejemplo@mail.com",
      placeholder_details: "Describa el contexto, restricciones o prioridades...",
      label_currency: "Moneda",
      label_mode: "Modo de entrega",
      mode_whatsapp: "WhatsApp",
      mode_email: "Correo electrónico",
      mode_display: "Visualización directa",
      btn_submit: "Enviar solicitud",
      btn_reset: "Reiniciar"
    },
    AR: {
      home: "الرئيسية",
      about: "حول",
      faq: "الأسئلة الشائعة",
      contact: "اتصال",
      form_title: "طلب مخصص",
      label_domain: "المجال / الموضوع",
      placeholder_result: "مثال: ملف تمويل، خطة استراتيجية، نموذج أولي...",
      placeholder_budget: "المبلغ التقديري",
      placeholder_name: "الاسم الكامل",
      placeholder_email: "example@mail.com",
      placeholder_details: "اشرح السياق، القيود أو الأولويات...",
      label_currency: "العملة",
      label_mode: "طريقة الاسترجاع",
      mode_whatsapp: "واتساب",
      mode_email: "البريد الإلكتروني",
      mode_display: "عرض مباشر",
      btn_submit: "إرسال الطلب",
      btn_reset: "إعادة التعيين"
    }
  };

  // --- Drapeaux associés ---
  const flags = {
    FR: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg",
    EN: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg",
    ES: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/es.svg",
    AR: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sa.svg"
  };

  // --- Application des traductions ---
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    const i18nElements = document.querySelectorAll("[data-i18n]");
    i18nElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // Placeholders
    document.querySelector("#result").placeholder = t.placeholder_result;
    document.querySelector("#budget").placeholder = t.placeholder_budget;
    document.querySelector("#name").placeholder = t.placeholder_name;
    document.querySelector("#email").placeholder = t.placeholder_email;
    document.querySelector("#details").placeholder = t.placeholder_details;

    // Sens de lecture RTL/LTR
    htmlTag.dir = lang === "AR" ? "rtl" : "ltr";
  }

  // --- Mise à jour du drapeau ---
  function updateFlag(lang) {
    const flagUrl = flags[lang];
    languageSelect.style.backgroundImage = `url(${flagUrl})`;
  }

  // --- Ajustement responsive du mode de restitution ---
  function adjustRadioLayout() {
    if (!radiosContainer) return;
    if (window.innerWidth < 768) {
      radiosContainer.style.flexDirection = "column";
      radiosContainer.style.alignItems = "flex-start";
      radiosContainer.style.justifyContent = "flex-start";
    } else {
      radiosContainer.style.flexDirection = "row";
      radiosContainer.style.justifyContent = "center";
      radiosContainer.style.alignItems = "center";
    }
  }

  // --- Écoute du changement de langue ---
  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    updateFlag(lang);
    applyTranslations(lang);
    localStorage.setItem("preferredLang", lang);
  });

  // --- Écoute du redimensionnement ---
  window.addEventListener("resize", adjustRadioLayout);

  // --- Initialisation ---
  const savedLang = localStorage.getItem("preferredLang") || "FR";
  languageSelect.value = savedLang;
  updateFlag(savedLang);
  applyTranslations(savedLang);
  adjustRadioLayout();
});
