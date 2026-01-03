/* =====================================================
   e-META — i18n.js FINAL (PRODUCTION)
   Langues : FR / EN / ES / AR
   - Textes
   - Labels
   - Placeholders
   - Options <select>
   - Support RTL automatique
===================================================== */

(function () {
  "use strict";

  /* ================== DICTIONNAIRE ================== */
  const I18N = {
    fr: {
      nav: {
        home: "Accueil",
        form: "Formulaire",
        privacy: "Confidentialité",
        cta: "Requête personnalisée"
      },
      hero: {
        title: "Assistant IA multilingue de prise de décision",
        subtitle: "Analyse stratégique avancée et restitution personnalisée",
        start: "Démarrer une analyse stratégique"
      },
      form: {
        title: "Formulaire e-META — Analyse stratégique avancée",

        section1: "1. Contexte & organisation",
        country: {
          label: "Pays / Zone",
          placeholder: "Ex : Sénégal, France, Afrique de l'Ouest"
        },
        sector: {
          label: "Secteur / Activité",
          placeholder: "Fintech, Agrobusiness, Industrie..."
        },
        org: {
          label: "Organisation / projet concerné",
          placeholder: "Décrivez brièvement votre organisation ou projet"
        },

        section2: "2. Problématique & objectifs",
        problem: {
          label: "Problématique principale",
          placeholder: "Quel est le problème stratégique à résoudre ?"
        },
        objectives: {
          label: "Objectifs recherchés",
          placeholder: "Quels résultats souhaitez-vous atteindre ?"
        },

        section3: "3. Contraintes & ressources",
        constraints: {
          label: "Contraintes majeures",
          placeholder: "Temps, budget, réglementation, marché..."
        },
        resources: {
          label: "Ressources disponibles",
          placeholder: "Équipe, budget, données, partenaires..."
        },

        section4: "4. Attentes de l’analyse",
        expectations: {
          label: "Attentes spécifiques",
          placeholder: "Analyse financière, stratégique, opérationnelle..."
        },

        submit: "Lancer l’analyse"
      },
      privacy: {
        title: "Politique de confidentialité",
        intro: "Cette politique explique comment vos données sont utilisées.",
        data: {
          title: "Protection des données",
          li1: "Les données sont utilisées uniquement pour l’analyse demandée.",
          li2: "Aucune donnée n’est vendue ou partagée.",
          li3: "Les données sont traitées de manière sécurisée.",
          li4: "Vous pouvez demander la suppression de vos données à tout moment."
        },
        liability: {
          title: "Responsabilité et usage",
          li1: "e-META est un outil d’aide à la décision.",
          li2: "Les analyses ne constituent pas un conseil juridique ou financier.",
          li3: "L’utilisateur reste responsable de ses décisions.",
          li4: "L’utilisation implique l’acceptation de cette politique."
        },
        back: "Retour à la page principale"
      }
    },

    en: {
      nav: {
        home: "Home",
        form: "Form",
        privacy: "Privacy",
        cta: "Custom request"
      },
      hero: {
        title: "Multilingual AI decision-making assistant",
        subtitle: "Advanced strategic analysis and personalized insights",
        start: "Start a strategic analysis"
      },
      form: {
        title: "e-META Form — Advanced strategic analysis",

        section1: "1. Context & organization",
        country: {
          label: "Country / Region",
          placeholder: "e.g. Senegal, France, West Africa"
        },
        sector: {
          label: "Sector / Activity",
          placeholder: "Fintech, Agribusiness, Industry..."
        },
        org: {
          label: "Organization / project",
          placeholder: "Briefly describe your organization or project"
        },

        section2: "2. Problem & objectives",
        problem: {
          label: "Main issue",
          placeholder: "What strategic problem needs to be solved?"
        },
        objectives: {
          label: "Expected objectives",
          placeholder: "What results do you want to achieve?"
        },

        section3: "3. Constraints & resources",
        constraints: {
          label: "Main constraints",
          placeholder: "Time, budget, regulation, market..."
        },
        resources: {
          label: "Available resources",
          placeholder: "Team, budget, data, partners..."
        },

        section4: "4. Analysis expectations",
        expectations: {
          label: "Specific expectations",
          placeholder: "Financial, strategic, operational analysis..."
        },

        submit: "Launch analysis"
      },
      privacy: {
        title: "Privacy Policy",
        intro: "This policy explains how your data is handled.",
        data: {
          title: "Data protection",
          li1: "Data is used only for the requested analysis.",
          li2: "No data is sold or shared.",
          li3: "Data is processed securely.",
          li4: "You may request data deletion at any time."
        },
        liability: {
          title: "Liability and use",
          li1: "e-META is a decision-support tool.",
          li2: "Analyses are not legal or financial advice.",
          li3: "Users remain responsible for their decisions.",
          li4: "Using the service implies acceptance of this policy."
        },
        back: "Back to homepage"
      }
    },

    es: {
      nav: {
        home: "Inicio",
        form: "Formulario",
        privacy: "Privacidad",
        cta: "Solicitud personalizada"
      },
      hero: {
        title: "Asistente de IA multilingüe para la toma de decisiones",
        subtitle: "Análisis estratégico avanzado y resultados personalizados",
        start: "Iniciar un análisis estratégico"
      },
      form: {
        title: "Formulario e-META — Análisis estratégico avanzado",

        section1: "1. Contexto y organización",
        country: {
          label: "País / Región",
          placeholder: "Ej.: Senegal, Francia, África Occidental"
        },
        sector: {
          label: "Sector / Actividad",
          placeholder: "Fintech, Agroindustria, Industria..."
        },
        org: {
          label: "Organización / proyecto",
          placeholder: "Describa brevemente su organización o proyecto"
        },

        section2: "2. Problema y objetivos",
        problem: {
          label: "Problema principal",
          placeholder: "¿Qué problema estratégico desea resolver?"
        },
        objectives: {
          label: "Objetivos esperados",
          placeholder: "¿Qué resultados desea alcanzar?"
        },

        section3: "3. Restricciones y recursos",
        constraints: {
          label: "Restricciones principales",
          placeholder: "Tiempo, presupuesto, regulación, mercado..."
        },
        resources: {
          label: "Recursos disponibles",
          placeholder: "Equipo, presupuesto, datos, socios..."
        },

        section4: "4. Expectativas del análisis",
        expectations: {
          label: "Expectativas específicas",
          placeholder: "Análisis financiero, estratégico, operativo..."
        },

        submit: "Iniciar análisis"
      },
      privacy: {
        title: "Política de privacidad",
        intro: "Esta política explica cómo se utilizan sus datos.",
        data: {
          title: "Protección de datos",
          li1: "Los datos se utilizan solo para el análisis solicitado.",
          li2: "No se venden ni comparten datos.",
          li3: "Los datos se procesan de forma segura.",
          li4: "Puede solicitar la eliminación de datos en cualquier momento."
        },
        liability: {
          title: "Responsabilidad y uso",
          li1: "e-META es una herramienta de apoyo a la decisión.",
          li2: "Los análisis no constituyen asesoramiento legal o financiero.",
          li3: "El usuario es responsable de sus decisiones.",
          li4: "El uso implica la aceptación de esta política."
        },
        back: "Volver a la página principal"
      }
    },

    ar: {
      nav: {
        home: "الرئيسية",
        form: "النموذج",
        privacy: "سياسة الخصوصية",
        cta: "طلب مخصص"
      },
      hero: {
        title: "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
        subtitle: "تحليل استراتيجي متقدم ونتائج مخصصة",
        start: "بدء تحليل استراتيجي"
      },
      form: {
        title: "نموذج e-META — تحليل استراتيجي متقدم",

        section1: "١. السياق والتنظيم",
        country: {
          label: "الدولة / المنطقة",
          placeholder: "مثال: السنغال، فرنسا، غرب أفريقيا"
        },
        sector: {
          label: "القطاع / النشاط",
          placeholder: "فينتك، زراعة، صناعة..."
        },
        org: {
          label: "المنظمة / المشروع",
          placeholder: "صف بإيجاز منظمتك أو مشروعك"
        },

        section2: "٢. الإشكالية والأهداف",
        problem: {
          label: "الإشكالية الرئيسية",
          placeholder: "ما المشكلة الاستراتيجية المراد حلها؟"
        },
        objectives: {
          label: "الأهداف المرجوة",
          placeholder: "ما النتائج التي تطمح إلى تحقيقها؟"
        },

        section3: "٣. القيود والموارد",
        constraints: {
          label: "القيود الرئيسية",
          placeholder: "الوقت، الميزانية، القوانين، السوق..."
        },
        resources: {
          label: "الموارد المتاحة",
          placeholder: "الفريق، الميزانية، البيانات، الشركاء..."
        },

        section4: "٤. توقعات التحليل",
        expectations: {
          label: "توقعات خاصة",
          placeholder: "تحليل مالي، استراتيجي، تشغيلي..."
        },

        submit: "إطلاق التحليل"
      },
      privacy: {
        title: "سياسة الخصوصية",
        intro: "توضح هذه السياسة كيفية حماية بياناتكم.",
        data: {
          title: "حماية البيانات",
          li1: "تُستخدم البيانات فقط للتحليل المطلوب.",
          li2: "لا يتم بيع أو مشاركة البيانات.",
          li3: "تتم معالجة البيانات بشكل آمن.",
          li4: "يمكن طلب حذف البيانات في أي وقت."
        },
        liability: {
          title: "المسؤولية والاستخدام",
          li1: "e-META أداة دعم لاتخاذ القرار.",
          li2: "التحليلات ليست استشارة قانونية أو مالية.",
          li3: "المستخدم مسؤول عن قراراته.",
          li4: "الاستخدام يعني الموافقة على هذه السياسة."
        },
        back: "العودة إلى الصفحة الرئيسية"
      }
    }
  };

  /* ================== MOTEUR ================== */

 window.setLanguage = function (lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  localStorage.setItem("lang", lang);

  if (typeof window.applyTranslations === "function") {
    window.applyTranslations(lang);
  }
};

window.applyTranslations = function (lang) {
  const dict = I18N[lang] || I18N.fr;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let value = dict;

    for (const p of parts) {
      if (!value[p]) return;
      value = value[p];
    }

    el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const parts = key.split(".");
    let value = dict;

    for (const p of parts) {
      if (!value[p]) return;
      value = value[p];
    }

    el.setAttribute("placeholder", value);
  });
};
