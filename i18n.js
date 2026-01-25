/* =====================================================
   e-META — i18n.js FINAL COMPLET
   Source unique de vérité
===================================================== */

window.I18N = {

  /* =====================================================
     FR — Français
  ===================================================== */
  fr: {
    /* META */
    "meta.title": "e-META — Assistant IA de prise de décision",

    /* HEADER */
    "header.tagline": "Assistant IA multilingue de prise de décision",

    /* NAV */
    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    /* HERO */
    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
    "hero.subtitle": "e-META structure votre contexte, objectifs, contraintes et indicateurs pour produire une recommandation claire, actionnable et documentée.",
    "hero.point1": "Analyse structurée (niveau consultant senior)",
    "hero.point2": "Recommandations actionnables + risques + KPIs",
    "hero.point3": "Restitution personnalisée (Email / WhatsApp / PDF)",
    "hero.cta": "Commencer une analyse stratégique",

    "hero.badge.title": "Analyse stratégique — niveau cabinet",
    "hero.badge.text": "Une approche structurée inspirée des cabinets de conseil pour éclairer vos décisions complexes.",
    "hero.note": "Ce n’est pas un chatbot. Chaque réponse est analysée selon une méthodologie décisionnelle avancée.",

    /* FORM */
    "form.badge.cabinet": "Mode cabinet de conseil",
    "form.title": "Formulaire e-META vNext — Analyse stratégique premium",
    "form.intro": "Plus vos réponses sont précises, plus la recommandation e-META sera juste, nuancée et exploitable.",

    "form.submit": "Générer ma recommandation e-META",
    "form.reset": "Réinitialiser",
    "form.trust.note": "Vos données restent confidentielles.",

    /* GROUPS */
    "group.general": "1) Qualifier la décision",
    "group.analysis": "2) Structurer l’analyse (niveau cabinet)",
    "group.budget": "3) Ambition, budget & urgence",
    "group.output": "4) Restitution & contact",
    "group.trust": "Confiance & consentement",

    /* FIELDS — GENERAL */
    "field.domain.label": "Domaine principal",
    "field.decisionType.label": "Nature de la décision",

    "field.title.label": "Titre court de la décision",
    "field.title.ph": "Ex : Repenser notre stratégie de distribution au Sénégal",
    "field.title.hint": "Une phrase courte et précise : elle guidera toute la synthèse.",

    /* SELECT — DOMAIN */
    "select.domain": [
      { value: "", label: "Sélectionnez un domaine" },
      { value: "strategy", label: "Stratégie & gouvernance" },
      { value: "finance", label: "Finance & modèle économique" },
      { value: "marketing", label: "Marketing & croissance" },
      { value: "operations", label: "Opérations & organisation" },
      { value: "it", label: "Innovation / IA / digital" },
      { value: "legal", label: "Juridique & conformité" },
      { value: "impact", label: "Impact social & environnemental" },
      { value: "other", label: "Autre" }
    ],

    /* SELECT — DECISION TYPE */
    "select.decisionType": [
      { value: "", label: "Sélectionnez un type de décision" },
      { value: "t1", label: "Décision stratégique structurante" },
      { value: "t2", label: "Optimisation / amélioration d’un existant" },
      { value: "t3", label: "Arbitrage entre plusieurs options" },
      { value: "t4", label: "Lancement de projet / produit" },
      { value: "t5", label: "Réponse à une urgence" },
      { value: "t6", label: "Préparation d’un dossier (financement, comité, partenaire)" }
    ],

    /* ANALYSIS */
    "field.problem.label": "Problème central à résoudre",
    "field.problem.ph": "Décrivez le vrai problème (pas seulement les symptômes).",

    "field.objectives.label": "Objectifs prioritaires",
    "field.objectives.ph": "Ex : augmenter la marge, réduire le churn, accélérer le déploiement…",

    "field.constraints.label": "Contraintes & risques majeurs",
    "field.constraints.ph": "Budget, délais, réglementation, ressources, résistance interne…",

    "field.kpis.label": "KPIs / indicateurs de succès",
    "field.kpis.ph": "Ex : CA, ROI, NPS, délais, qualité, satisfaction…",

    "field.resources.label": "Ressources déjà disponibles",
    "field.resources.ph": "Équipe, outils, données, partenaires, budget initial…",

    "field.context.label": "Contexte détaillé",
    "field.context.ph": "Historique, acteurs, décisions déjà prises, contraintes locales…",

    /* BUDGET */
    "field.budgetMin.label": "Budget minimum",
    "field.budgetMax.label": "Budget maximum",

    "field.deadline.label": "Délai souhaité",
    "field.deadline.ph": "Ex : 7 jours, 1 mois, avant une date précise…",

    "field.urgency.label": "Niveau d’urgence",
    "field.urgency.low": "Faible",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critique",

    /* OUTPUT */
    "field.outputMode.label": "Mode de restitution souhaité",
    "field.outputMode.email": "Email",
    "field.outputMode.whatsapp": "WhatsApp",
    "field.outputMode.pdf": "PDF",
    "field.outputMode.display": "Affichage",

    "field.email.label": "Adresse email",
    "field.email.ph": "adresse@email.com",

    "field.whatsapp.label": "Numéro WhatsApp",
    "field.whatsapp.ph": "+221782607212",

    "field.fileLink.label": "Lien vers un fichier / dossier",
    "field.fileLink.ph": "Google Drive, Dropbox, Notion, PDF…",

    /* CONSENT */
    "field.consent.label": "J’accepte que mes informations soient utilisées uniquement pour générer l’analyse.",

    /* FOOTER */
    "footer.privacy": "Politique de confidentialité",
    "footer.copy": "© 2026 e-META — Tous droits réservés"
  },

  /* =====================================================
     EN — English
  ===================================================== */
  en: {
    "meta.title": "e-META — Decision-Making AI Assistant",
    "header.tagline": "Multilingual AI decision-making assistant",
    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "hero.title": "Bring your decisions to a premium consulting-firm level",
    "hero.subtitle": "e-META structures your context, goals, constraints and KPIs to deliver clear, actionable recommendations.",
    "hero.point1": "Structured analysis (senior consultant level)",
    "hero.point2": "Actionable recommendations + risks + KPIs",
    "hero.point3": "Personalized delivery (Email / WhatsApp / PDF)",
    "hero.cta": "Start a strategic analysis",

    "hero.badge.title": "Strategic analysis — consulting level",
    "hero.badge.text": "A structured consulting-inspired approach to support complex decisions.",
    "hero.note": "This is not a chatbot. Each response follows an advanced decision framework.",

    "form.badge.cabinet": "Consulting-firm mode",
    "form.title": "e-META Form vNext — Premium strategic analysis",
    "form.intro": "The more precise your answers, the more accurate and actionable the recommendation.",

    "form.submit": "Generate my e-META recommendation",
    "form.reset": "Reset",
    "form.trust.note": "Your data remains confidential.",

    "group.general": "1) Qualify the decision",
    "group.analysis": "2) Structure the analysis",
    "group.budget": "3) Ambition, budget & urgency",
    "group.output": "4) Output & contact",
    "group.trust": "Trust & consent",

    "select.domain": [
      { value: "", label: "Select a domain" },
      { value: "strategy", label: "Strategy & governance" },
      { value: "finance", label: "Finance & business model" },
      { value: "marketing", label: "Marketing & growth" },
      { value: "operations", label: "Operations & organization" },
      { value: "it", label: "Innovation / AI / digital" },
      { value: "legal", label: "Legal & compliance" },
      { value: "impact", label: "Social & environmental impact" },
      { value: "other", label: "Other" }
    ],

    "select.decisionType": [
      { value: "", label: "Select decision type" },
      { value: "t1", label: "Strategic decision" },
      { value: "t2", label: "Optimization / improvement" },
      { value: "t3", label: "Trade-off between options" },
      { value: "t4", label: "Project / product launch" },
      { value: "t5", label: "Urgent response" },
      { value: "t6", label: "Preparation of a formal case" }
    ],

    "footer.privacy": "Privacy policy",
    "footer.copy": "© 2026 e-META — All rights reserved"
  },

  /* =====================================================
     ES — Español
  ===================================================== */
  es: {
    "meta.title": "e-META — Asistente IA para la toma de decisiones",
    "header.tagline": "Asistente IA multilingüe para la toma de decisiones",
    "nav.home": "Inicio",
    "nav.form": "Formulario",
    "nav.privacy": "Privacidad",

    "hero.title": "Lleve sus decisiones al nivel de una consultora premium",
    "hero.subtitle": "e-META estructura su contexto, objetivos y restricciones para generar recomendaciones claras.",
    "hero.point1": "Análisis estructurado (nivel consultor senior)",
    "hero.point2": "Recomendaciones accionables + riesgos + KPIs",
    "hero.point3": "Entrega personalizada (Email / WhatsApp / PDF)",
    "hero.cta": "Iniciar un análisis estratégico",

    "select.domain": [
      { value: "", label: "Seleccione un dominio" },
      { value: "strategy", label: "Estrategia y gobernanza" },
      { value: "finance", label: "Finanzas y modelo de negocio" },
      { value: "marketing", label: "Marketing y crecimiento" },
      { value: "operations", label: "Operaciones y organización" },
      { value: "it", label: "Innovación / IA / digital" },
      { value: "legal", label: "Legal y cumplimiento" },
      { value: "impact", label: "Impacto social y ambiental" },
      { value: "other", label: "Otro" }
    ],

    "select.decisionType": [
      { value: "", label: "Seleccione el tipo de decisión" },
      { value: "t1", label: "Decisión estratégica" },
      { value: "t2", label: "Optimización / mejora" },
      { value: "t3", label: "Arbitraje entre opciones" },
      { value: "t4", label: "Lanzamiento de proyecto" },
      { value: "t5", label: "Respuesta urgente" },
      { value: "t6", label: "Preparación de expediente" }
    ],

    "footer.privacy": "Política de privacidad",
    "footer.copy": "© 2026 e-META — Todos los derechos reservados"
  },

  /* =====================================================
     AR — العربية
  ===================================================== */
  ar: {
    "meta.title": "e-META — مساعد ذكاء اصطناعي لاتخاذ القرار",
    "header.tagline": "مساعد ذكي متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",

    "hero.title": "ارتقِ بقراراتك إلى مستوى مكاتب الاستشارات المتميزة",
    "hero.subtitle": "e-META ينظم السياق والأهداف والقيود لتقديم توصيات واضحة وقابلة للتنفيذ.",
    "hero.point1": "تحليل منظم (مستوى مستشار أول)",
    "hero.point2": "توصيات قابلة للتنفيذ + مخاطر + مؤشرات أداء",
    "hero.point3": "تسليم مخصص (بريد / واتساب / PDF)",
    "hero.cta": "ابدأ تحليلاً استراتيجياً",

    "select.domain": [
      { value: "", label: "اختر المجال" },
      { value: "strategy", label: "الاستراتيجية والحوكمة" },
      { value: "finance", label: "التمويل ونموذج الأعمال" },
      { value: "marketing", label: "التسويق والنمو" },
      { value: "operations", label: "العمليات والتنظيم" },
      { value: "it", label: "الابتكار / الذكاء الاصطناعي / الرقمي" },
      { value: "legal", label: "القانون والامتثال" },
      { value: "impact", label: "الأثر الاجتماعي والبيئي" },
      { value: "other", label: "أخرى" }
    ],

    "select.decisionType": [
      { value: "", label: "اختر نوع القرار" },
      { value: "t1", label: "قرار استراتيجي" },
      { value: "t2", label: "تحسين / تطوير" },
      { value: "t3", label: "مفاضلة بين خيارات" },
      { value: "t4", label: "إطلاق مشروع" },
      { value: "t5", label: "استجابة عاجلة" },
      { value: "t6", label: "إعداد ملف رسمي" }
    ],

    "footer.privacy": "سياسة الخصوصية",
    "footer.copy": "© 2026 e-META — جميع الحقوق محفوظة"
  }
};
