/* ============================================================
   e-META — Script multilingue dynamique complet (FR / EN / ES / AR)
   Version : 2.5
   Auteur  : Abdoulaye FALL & e-META Dev
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // --- Dictionnaire compact simplifié pour fiabilité RTL + AR
  const translations = {
    fr: {
      choose: "— Choisir —",
      form_title: "Requête personnalisée",
      label_domain: "Domaine / Thème",
      label_expected: "Résultat attendu",
      label_budget: "Budget indicatif",
      label_currency: "Devise",
      label_name: "Nom complet",
      label_email: "Email",
      label_phone: "Téléphone (WhatsApp)",
      label_details: "Détails / Contexte",
      btn_send: "Envoyer la requête",
      btn_reset: "Réinitialiser",
      currency: {
        USD: "USD — Dollar américain",
        EUR: "EUR — Euro",
        GBP: "GBP — Livre sterling",
        XOF: "XOF — Franc CFA (UEMOA)",
        XAF: "XAF — Franc CFA (CEMAC)",
        CFA: "CFA — Franc CFA",
        JPY: "JPY — Yen japonais",
        CNY: "CNY — Yuan chinois",
        CAD: "CAD — Dollar canadien",
        AUD: "AUD — Dollar australien"
      },
      domain: {
        agriculture: "Agriculture & Agroécologie",
        environment: "Environnement & Climat",
        energy: "Énergie & Solaire",
        commerce: "Commerce & Distribution",
        ecommerce: "E-commerce & Digital",
        finance: "Finance & Comptabilité",
        fintech: "FinTech / Mobile Money",
        funding: "Financement & Partenariat",
        marketing: "Marketing & Communication",
        technology: "Technologie & Innovation",
        education: "Éducation & Formation",
        sante: "Santé & Bien-être",
        transport: "Transport & Logistique",
        immobilier: "Immobilier & Construction",
        juridique: "Juridique & Conformité",
        industrie: "Industrie & Production",
        culture: "Culture & Médias",
        tourisme: "Tourisme & Hôtellerie",
        rh: "Ressources Humaines",
        public: "Projets publics & collectivités",
        artisanal: "Artisanat & Transformation locale",
        social: "Développement social & communautaire",
        autre: "Autre"
      },
      placeholders: {
        expectedResult: "Ex : Dossier de financement, plan stratégique, prototype...",
        details: "Décrivez le contexte, les contraintes ou vos attentes principales...",
        budget: "Montant estimé",
        name: "Votre nom complet",
        email: "exemple@mail.com",
        phone: "+221..."
      }
    },
    en: {
      choose: "— Choose —",
      form_title: "Custom Request",
      label_domain: "Domain / Topic",
      label_expected: "Expected result",
      label_budget: "Indicative budget",
      label_currency: "Currency",
      label_name: "Full name",
      label_email: "Email",
      label_phone: "Phone (WhatsApp)",
      label_details: "Details / Context",
      btn_send: "Send request",
      btn_reset: "Reset",
      currency: {
        USD: "USD — US Dollar",
        EUR: "EUR — Euro",
        GBP: "GBP — Pound Sterling",
        XOF: "XOF — West African CFA Franc",
        XAF: "XAF — Central African CFA Franc",
        CFA: "CFA — CFA Franc",
        JPY: "JPY — Japanese Yen",
        CNY: "CNY — Chinese Yuan",
        CAD: "CAD — Canadian Dollar",
        AUD: "AUD — Australian Dollar"
      },
      domain: {
        agriculture: "Agriculture & Agroecology",
        environment: "Environment & Climate",
        energy: "Energy & Solar",
        commerce: "Trade & Distribution",
        ecommerce: "E-commerce & Digital",
        finance: "Finance & Accounting",
        fintech: "FinTech / Mobile Money",
        funding: "Funding & Partnerships",
        marketing: "Marketing & Communication",
        technology: "Technology & Innovation",
        education: "Education & Training",
        sante: "Health & Well-being",
        transport: "Transport & Logistics",
        immobilier: "Real Estate & Construction",
        juridique: "Legal & Compliance",
        industrie: "Industry & Production",
        culture: "Culture & Media",
        tourisme: "Tourism & Hospitality",
        rh: "Human Resources",
        public: "Public Projects & Communities",
        artisanal: "Craft & Local Processing",
        social: "Social & Community Development",
        autre: "Other"
      },
      placeholders: {
        expectedResult: "Ex: Funding file, strategic plan, prototype...",
        details: "Describe the context, constraints, or expectations...",
        budget: "Estimated amount",
        name: "Your full name",
        email: "example@mail.com",
        phone: "+221..."
      }
    },
    es: {
      choose: "— Elegir —",
      form_title: "Solicitud personalizada",
      label_domain: "Dominio / Tema",
      label_expected: "Resultado esperado",
      label_budget: "Presupuesto indicativo",
      label_currency: "Moneda",
      label_name: "Nombre completo",
      label_email: "Correo electrónico",
      label_phone: "Teléfono (WhatsApp)",
      label_details: "Detalles / Contexto",
      btn_send: "Enviar solicitud",
      btn_reset: "Restablecer",
      currency: {
        USD: "USD — Dólar estadounidense",
        EUR: "EUR — Euro",
        GBP: "GBP — Libra esterlina",
        XOF: "XOF — Franco CFA (UEMOA)",
        XAF: "XAF — Franco CFA (CEMAC)",
        CFA: "CFA — Franco CFA",
        JPY: "JPY — Yen japonés",
        CNY: "CNY — Yuan chino",
        CAD: "CAD — Dólar canadiense",
        AUD: "AUD — Dólar australiano"
      },
      domain: {
        agriculture: "Agricultura y Agroecología",
        environment: "Medio Ambiente y Clima",
        energy: "Energía y Solar",
        commerce: "Comercio y Distribución",
        ecommerce: "E-commerce y Digital",
        finance: "Finanzas y Contabilidad",
        fintech: "FinTech / Dinero Móvil",
        funding: "Financiación y Alianzas",
        marketing: "Marketing y Comunicación",
        technology: "Tecnología e Innovación",
        education: "Educación y Formación",
        sante: "Salud y Bienestar",
        transport: "Transporte y Logística",
        immobilier: "Bienes Raíces y Construcción",
        juridique: "Legal y Cumplimiento",
        industrie: "Industria y Producción",
        culture: "Cultura y Medios",
        tourisme: "Turismo y Hotelería",
        rh: "Recursos Humanos",
        public: "Proyectos Públicos y Comunidades",
        artisanal: "Artesanía y Producción Local",
        social: "Desarrollo Social y Comunitario",
        autre: "Otro"
      },
      placeholders: {
        expectedResult: "Ej: Plan estratégico, expediente de financiación...",
        details: "Describe el contexto, limitaciones o expectativas...",
        budget: "Monto estimado",
        name: "Tu nombre completo",
        email: "ejemplo@mail.com",
        phone: "+221..."
      }
    },
    ar: {
      choose: "— اختر —",
      form_title: "طلب مخصص",
      label_domain: "المجال / الموضوع",
      label_expected: "النتيجة المتوقعة",
      label_budget: "الميزانية التقديرية",
      label_currency: "العملة",
      label_name: "الاسم الكامل",
      label_email: "البريد الإلكتروني",
      label_phone: "الهاتف (واتساب)",
      label_details: "التفاصيل / السياق",
      btn_send: "إرسال الطلب",
      btn_reset: "إعادة الضبط",
      currency: {
        USD: "USD — دولار أمريكي",
        EUR: "EUR — يورو",
        GBP: "GBP — جنيه إسترليني",
        XOF: "XOF — فرنك غرب أفريقي (UEMOA)",
        XAF: "XAF — فرنك وسط أفريقي (CEMAC)",
        CFA: "CFA — فرنك س ف ا",
        JPY: "JPY — ين ياباني",
        CNY: "CNY — يوان صيني",
        CAD: "CAD — دولار كندي",
        AUD: "AUD — دولار أسترالي"
      },
      domain: {
        agriculture: "الزراعة والإيكولوجيا الزراعية",
        environment: "البيئة والمناخ",
        energy: "الطاقة والطاقة الشمسية",
        commerce: "التجارة والتوزيع",
        ecommerce: "التجارة الإلكترونية والرقمية",
        finance: "التمويل والمحاسبة",
        fintech: "التقنيات المالية / المال المحمول",
        funding: "التمويل والشراكات",
        marketing: "التسويق والاتصال",
        technology: "التكنولوجيا والابتكار",
        education: "التعليم والتدريب",
        sante: "الصحة والرفاهية",
        transport: "النقل واللوجستيات",
        immobilier: "العقارات والبناء",
        juridique: "القانون والامتثال",
        industrie: "الصناعة والإنتاج",
        culture: "الثقافة والإعلام",
        tourisme: "السياحة والفنادق",
        rh: "الموارد البشرية",
        public: "المشاريع العامة والمجتمعات",
        artisanal: "الحرف والتحويل المحلي",
        social: "التنمية الاجتماعية والمجتمعية",
        autre: "أخرى"
      },
      placeholders: {
        expectedResult: "مثلاً: خطة استراتيجية، مشروع تمويل...",
        details: "اشرح السياق أو القيود أو التوقعات...",
        budget: "المبلغ المقدر",
        name: "اسمك الكامل",
        email: "example@mail.com",
        phone: "+221..."
      }
    }
  };

  // --- Détection automatique langue navigateur ---
  const browserLang = navigator.language.substring(0, 2).toLowerCase();
  const supported = ["fr", "en", "es", "ar"];
  const lang =
    localStorage.getItem("eMETA_lang") ||
    (supported.includes(browserLang) ? browserLang : "fr");

  document.getElementById("langSelect").value = lang;
  applyLang(lang);

  document.getElementById("langSelect").addEventListener("change", e => {
    const newLang = e.target.value;
    localStorage.setItem("eMETA_lang", newLang);
    applyLang(newLang);
  });

  // --- Fonction principale de traduction ---
  function applyLang(lang) {
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Titre
    document.title = dict.form_title;

    // Labels simples (basés sur data-i18n)
    for (const key of Object.keys(dict)) {
      if (typeof dict[key] === "string") {
        const els = document.querySelectorAll(`[data-i18n="${key}"]`);
        els.forEach(el => (el.textContent = dict[key]));
      }
    }

    // Domaines
    const domainSelect = document.getElementById("domain");
    if (domainSelect) {
      Array.from(domainSelect.options).forEach((opt, i) => {
        if (i === 0) opt.textContent = dict.choose;
        else if (dict.domain[opt.value]) opt.textContent = dict.domain[opt.value];
      });
    }

    // Devises
    const currencySelect = document.getElementById("currency");
    if (currencySelect) {
      Array.from(currencySelect.options).forEach(opt => {
        if (dict.currency[opt.value])
          opt.textContent = dict.currency[opt.value];
      });
    }

    // Placeholders
    for (const id in dict.placeholders) {
      const el = document.getElementById(id);
      if (el) el.placeholder = dict.placeholders[id];
    }
  }
});
