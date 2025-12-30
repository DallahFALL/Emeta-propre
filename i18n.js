/* =====================================================
   e-META — i18n.js FINAL
   Langues : FR / EN / ES / AR
   RTL auto pour AR
===================================================== */

const I18N = {
  fr: {
    meta: {
      title: "e-META — Assistant IA de décision stratégique"
    },
    tagline: "Assistant IA multilingue de prise de décision",

    nav: {
      home: "Accueil",
      form: "Formulaire",
      privacy: "Confidentialité"
    },

    cta: {
      custom: "Requête personnalisée"
    },

    hero: {
      title: "Prenez des décisions au niveau d’un cabinet de conseil premium",
      subtitle:
        "e-META analyse votre contexte, objectifs, contraintes, risques et indicateurs clés afin de produire une synthèse décisionnelle claire et exploitable.",
      p1: "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
      p2: "Recommandations actionnables et scénarios d’aide à la décision.",
      p3: "Restitution personnalisée : affichage, e-mail, WhatsApp ou PDF.",
      cta: "Démarrer une analyse stratégique",
      note: "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle.",
      metric: {
        value: "+12 heures",
        label: "d’analyse stratégique simulée",
        sub:
          "Équivalent au travail combiné d’un consultant senior, d’un analyste métier et d’un stratège décisionnel."
      }
    },

    form: {
      title: "Formulaire e-META — Version Ultra-Premium",
      subtitle:
        "Complétez les champs ci-dessous pour recevoir une analyse stratégique structurée, fiable et orientée décision.",

      group: {
        general: "1. Informations générales",
        analysis: "2. Analyse stratégique",
        budget: "3. Budget & urgence",
        output: "4. Restitution & contact"
      },

      domain: {
        label: "Domaine principal",
        select: "Sélectionnez un domaine",
        business: "Business / Stratégie",
        marketing: "Marketing / Vente",
        finance: "Finance",
        hr: "Ressources humaines",
        tech: "Technologie / IT",
        legal: "Juridique / Réglementaire",
        other: "Autre"
      },

      projectType: {
        label: "Type de projet",
        select: "Sélectionnez un type",
        launch: "Lancement",
        optimization: "Optimisation",
        audit: "Audit / Diagnostic",
        crisis: "Gestion de crise",
        personal: "Décision personnelle",
        other: "Autre"
      },

      projectTitle: {
        label: "Intitulé du projet",
        placeholder: "Ex : Lancement d’un nouveau service digital"
      },

      problem: {
        label: "Problématique principale",
        placeholder:
          "Décrivez clairement le problème ou la décision à prendre"
      },

      objectives: {
        label: "Objectifs",
        placeholder: "Quels résultats souhaitez-vous atteindre ?"
      },

      constraints: {
        label: "Contraintes",
        placeholder: "Contraintes budgétaires, temporelles, humaines, etc."
      },

      kpis: {
        label: "Indicateurs clés (KPIs)",
        placeholder: "Comment mesurerez-vous le succès ?"
      },

      resources: {
        label: "Ressources disponibles",
        placeholder: "Équipe, outils, partenaires, budget existant…"
      },

      deliverables: {
        label: "Livrables attendus",
        placeholder: "Rapport, plan d’action, scénarios, recommandations…"
      },

      successIndicators: {
        label: "Critères de succès",
        placeholder: "À quoi saura-t-on que la décision est la bonne ?"
      },

      context: {
        label: "Contexte complémentaire",
        placeholder: "Informations utiles supplémentaires"
      },

      externalLink: {
        label: "Lien externe (optionnel)",
        placeholder: "Lien vers un document ou une ressource"
      },

      budgetMin: {
        label: "Budget minimum estimé"
      },

      budgetMax: {
        label: "Budget maximum estimé"
      },

      deadline: {
        label: "Échéance souhaitée",
        placeholder: "Ex : 30 jours, fin du trimestre…"
      },

      urgency: {
        label: "Niveau d’urgence",
        low: "Faible",
        medium: "Moyen",
        high: "Élevé"
      },

      output: {
        email: "Restitution par e-mail",
        whatsapp: "Restitution via WhatsApp",
        pdf: "Rapport PDF",
        display: "Affichage direct à l’écran"
      },

      contact: {
        email: "Adresse e-mail",
        email: {
          placeholder: "exemple@email.com"
        },
        whatsapp: "Numéro WhatsApp",
        whatsapp: {
          placeholder: "+221 XX XXX XX XX"
        }
      },

      consent:
        "J’accepte que mes informations soient utilisées uniquement pour produire cette analyse décisionnelle.",

      send: "Envoyer la requête",
      reset: "Réinitialiser le formulaire"
    },

    privacy: {
      title: "Politique de confidentialité",
      intro:
        "Votre confiance est essentielle. Cette politique explique de manière transparente comment e-META collecte, utilise et protège vos données.",

      block1: {
        title: "Protection des données"
      },

      block2: {
        title: "Responsabilité et usage"
      },

      point5:
        "e-META est un outil d’aide à la décision fondé sur une analyse structurée des informations fournies par l’utilisateur.",
      point6:
        "Les analyses générées ne constituent pas un conseil juridique, financier, médical ou réglementaire.",
      point7:
        "L’utilisateur demeure seul responsable des décisions prises sur la base des résultats fournis.",
      point8:
        "Aucune décision automatisée n’est imposée : e-META éclaire et structure la réflexion stratégique."
    },

    footer: {
      text: "e-META © 2025 — Assistant IA de décision stratégique",
      privacy: "Politique de confidentialité"
    }
  },

  /* ================= ENGLISH ================= */
  en: {
    meta: { title: "e-META — Strategic Decision AI Assistant" },
    tagline: "Multilingual AI assistant for decision-making",
    nav: { home: "Home", form: "Form", privacy: "Privacy" },
    cta: { custom: "Custom request" },
    hero: {
      title: "Make decisions at a premium consulting level",
      subtitle:
        "e-META analyzes your context, objectives, constraints, risks and key indicators to deliver clear, actionable insights.",
      p1: "Structured analysis: problem, objectives, constraints, risks, KPIs.",
      p2: "Actionable recommendations and decision scenarios.",
      p3: "Personalized delivery: on-screen, email, WhatsApp or PDF.",
      cta: "Start a strategic analysis",
      note: "e-META is not a chatbot. It is a decision intelligence engine.",
      metric: {
        value: "+12 hours",
        label: "of simulated strategic analysis",
        sub:
          "Equivalent to the combined work of a senior consultant, a business analyst and a decision strategist."
      }
    },
    footer: {
      text: "e-META © 2025 — Strategic Decision AI Assistant",
      privacy: "Privacy policy"
    }
  },

  /* ================= ESPAÑOL ================= */
  es: {
    meta: { title: "e-META — Asistente IA de decisión estratégica" },
    tagline: "Asistente IA multilingüe para la toma de decisiones",
    nav: { home: "Inicio", form: "Formulario", privacy: "Privacidad" },
    cta: { custom: "Solicitud personalizada" },
    hero: {
      title: "Tome decisiones al nivel de una consultoría premium",
      subtitle:
        "e-META analiza su contexto, objetivos, restricciones y riesgos para ofrecer una síntesis clara y útil.",
      p1: "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
      p2: "Recomendaciones accionables y escenarios de decisión.",
      p3: "Entrega personalizada: pantalla, correo, WhatsApp o PDF.",
      cta: "Iniciar análisis estratégico",
      note: "e-META no es un chatbot. Es un motor de inteligencia decisional."
    },
    footer: {
      text: "e-META © 2025 — Asistente IA de decisión estratégica",
      privacy: "Política de privacidad"
    }
  },

  /* ================= العربية ================= */
  ar: {
    meta: { title: "e-META — مساعد ذكاء اصطناعي لاتخاذ القرار" },
    tagline: "مساعد ذكي متعدد اللغات لدعم اتخاذ القرار",
    nav: { home: "الرئيسية", form: "النموذج", privacy: "الخصوصية" },
    cta: { custom: "طلب مخصص" },
    hero: {
      title: "اتخذ قرارات بمستوى مكاتب الاستشارات المتميزة",
      subtitle:
        "يقوم e-META بتحليل السياق والأهداف والقيود والمخاطر لتقديم رؤية استراتيجية واضحة.",
      p1: "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، المؤشرات.",
      p2: "توصيات عملية وسيناريوهات دعم القرار.",
      p3: "عرض مخصص: شاشة، بريد إلكتروني، واتساب أو PDF.",
      cta: "ابدأ التحليل الاستراتيجي",
      note: "e-META ليس روبوت محادثة، بل محرك ذكاء لاتخاذ القرار."
    },
    footer: {
      text: "e-META © 2025 — مساعد ذكي لاتخاذ القرار",
      privacy: "سياسة الخصوصية"
    }
  }
};

/* ================= APPLY ================= */
function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n").split(".");
    let val = dict;
    key.forEach(k => (val = val?.[k]));
    if (val) el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder").split(".");
    let val = dict;
    key.forEach(k => (val = val?.[k]));
    if (val) el.placeholder = val;
  });
}

const savedLang = localStorage.getItem("lang") || "fr";
applyLanguage(savedLang);

document.getElementById("languageSwitcher")?.addEventListener("change", e => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
});
