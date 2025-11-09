/* ============================================================
   e-META — Script multilingue dynamique (FR / EN / ES / AR)
   Version : 2.4
   Auteur  : Abdoulaye FALL & e-META Dev
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  // --- Dictionnaire multilingue complet -------------------------------
  const translations = {
    fr: {
      choose: "— Choisir —",
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
      }
    },
    en: {
      choose: "— Choose —",
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
      }
    },
    es: {
      choose: "— Elegir —",
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
      }
    },
    ar: {
      choose: "— اختر —",
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
      }
    }
  };

  // --- Détection automatique de la langue du navigateur ----------
  const browserLang = navigator.language.substring(0, 2).toLowerCase();
  const supportedLangs = ["fr", "en", "es", "ar"];
  const initialLang =
    localStorage.getItem("eMETA_lang") ||
    (supportedLangs.includes(browserLang) ? browserLang : "fr");

  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = initialLang;
  setLanguage(initialLang);

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("eMETA_lang", lang);
      setLanguage(lang);
    });
  }

  // --- Fonction principale de traduction --------------------------
  function setLanguage(lang) {
    const dict = translations[lang] || translations.fr;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Titre du document
    document.title =
      lang === "fr"
        ? "e-META — Requête personnalisée"
        : lang === "en"
        ? "e-META — Custom Request"
        : lang === "es"
        ? "e-META — Solicitud personalizada"
        : "e-META — طلب مخصص";

    // --- Traduction du select Domaine ---
    const domainSelect = document.getElementById("domain");
    if (domainSelect) {
      Array.from(domainSelect.options).forEach((opt, i) => {
        if (i === 0) {
          opt.textContent = dict.choose;
        } else {
          const val = opt.value;
          if (dict.domain[val]) opt.textContent = dict.domain[val];
        }
      });
    }

    // --- Placeholders dynamiques (simplifiés ici) ---
    const placeholders = {
      expectedResult: {
        fr: "Ex : Dossier de financement, plan stratégique...",
        en: "Ex: Funding file, strategic plan...",
        es: "Ej: Plan estratégico, expediente de financiación...",
        ar: "مثلاً: خطة استراتيجية، مشروع تمويل..."
      },
      details: {
        fr: "Décrivez le contexte, les contraintes ou vos attentes...",
        en: "Describe the context, constraints, or expectations...",
        es: "Describe el contexto, limitaciones o expectativas...",
        ar: "اشرح السياق أو القيود أو التوقعات..."
      },
      budget: {
        fr: "Montant estimé",
        en: "Estimated amount",
        es: "Monto estimado",
        ar: "المبلغ المقدر"
      },
      name: {
        fr: "Votre nom complet",
        en: "Your full name",
        es: "Tu nombre completo",
        ar: "اسمك الكامل"
      },
      email: {
        fr: "exemple@mail.com",
        en: "example@mail.com",
        es: "ejemplo@mail.com",
        ar: "example@mail.com"
      },
      phone: {
        fr: "+221...",
        en: "+221...",
        es: "+221...",
        ar: "+221..."
      }
    };
    Object.keys(placeholders).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.placeholder = placeholders[id][lang];
    });
  }

  // --- Bouton WhatsApp --------------------------------------------
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const phone = (document.getElementById("phone")?.value || "").replace(/\D/g, "");
      const msg = encodeURIComponent(
        "Bonjour, je souhaite soumettre une requête via e-META."
      );
      const url = phone
        ? `https://wa.me/${phone}?text=${msg}`
        : `https://wa.me/?text=${msg}`;
      window.open(url, "_blank");
    });
  }

  // --- Menu mobile -----------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }
});
