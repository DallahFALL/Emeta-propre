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

en: {
  "meta.title": "e-META — Decision-Making AI Assistant",

  "header.tagline": "Multilingual AI decision-making assistant",

  "nav.home": "Home",
  "nav.form": "Form",
  "nav.privacy": "Privacy",

  /* HERO */
  "hero.title": "Bring your decisions to a premium consulting-firm level",
  "hero.subtitle": "e-META structures your context, goals, constraints and KPIs to deliver clear, actionable recommendations.",
  "hero.point1": "Structured analysis (senior consultant level)",
  "hero.point2": "Actionable recommendations + risks + KPIs",
  "hero.point3": "Personalized delivery (Email / WhatsApp / PDF)",
  "hero.cta": "Start a strategic analysis",

  "hero.badge.title": "Strategic analysis — consulting level",
  "hero.badge.text": "A structured consulting-inspired approach to support complex decisions.",
  "hero.note": "This is not a chatbot. Each response follows an advanced decision framework.",

  /* FORM HEADER */
  "form.badge.cabinet": "Consulting-firm mode",
  "form.title": "e-META Form vNext — Premium strategic analysis",
  "form.intro": "The more precise your answers, the more accurate and actionable the recommendation.",

  "form.submit": "Generate my e-META recommendation",
  "form.reset": "Reset",
  "form.trust.note": "Your data remains confidential.",

  /* GROUPS */
  "group.general": "1) Qualify the decision",
  "group.analysis": "2) Structure the analysis (consulting level)",
  "group.budget": "3) Ambition, budget & urgency",
  "group.output": "4) Output & contact",
  "group.trust": "Trust & consent",

  /* DOMAIN SELECT */
  "field.domain.label": "Main domain",
  "field.domain.placeholder": "Select a domain",
  "field.domain.strategy": "Strategy & governance",
  "field.domain.finance": "Finance & business model",
  "field.domain.marketing": "Marketing & growth",
  "field.domain.operations": "Operations & organization",
  "field.domain.it": "Innovation / AI / digital",
  "field.domain.legal": "Legal & compliance",
  "field.domain.impact": "Social & environmental impact",
  "field.domain.other": "Other",

  /* DECISION TYPE */
  "field.decisionType.label": "Decision type",
  "field.decisionType.placeholder": "Select a type",
  "field.decisionType.t1": "Structuring strategic decision",
  "field.decisionType.t2": "Optimization / improvement of existing operations",
  "field.decisionType.t3": "Trade-off between multiple options",
  "field.decisionType.t4": "Project / product launch",
  "field.decisionType.t5": "Urgent response",
  "field.decisionType.t6": "Preparing a formal case (funding, committee, partner)",

  /* TEXT FIELDS */
  "field.title.label": "Short decision title",
  "field.title.ph": "e.g. Rethink distribution strategy in Senegal",
  "field.title.hint": "A short, precise sentence that will guide the full analysis.",

  "field.problem.label": "Core problem to solve",
  "field.problem.ph": "Describe the real problem (not just the symptoms).",
  "field.problem.hint": "What decision must be made, and why now?",

  "field.objectives.label": "Priority objectives (max 3–5)",
  "field.objectives.ph": "e.g. increase margin, reduce churn, accelerate deployment…",
  "field.objectives.hint": "If possible, write measurable objectives.",

  "field.constraints.label": "Major constraints & risks",
  "field.constraints.ph": "Budget, timeline, regulation, internal resistance…",
  "field.constraints.hint": "List everything that could limit or endanger the decision.",

  "field.kpis.label": "KPIs / success indicators",
  "field.kpis.ph": "Revenue, ROI, NPS, deadlines, quality…",
  "field.kpis.hint": "How will success be measured after implementation?",

  "field.resources.label": "Available resources",
  "field.resources.ph": "Team, tools, data, partners, initial budget…",

  "field.context.label": "Detailed context (recommended)",
  "field.context.ph": "History, stakeholders, previous decisions, local constraints…",
  "field.context.hint": "The more context you give, the better the recommendation.",

  /* BUDGET & TIME */
  "field.budgetMin.label": "Minimum budget",
  "field.budgetMax.label": "Maximum budget",
  "field.deadline.label": "Desired timeline",
  "field.deadline.ph": "e.g. 7 days, 1 month, before a specific date",

  "field.urgency.label": "Urgency level",
  "field.urgency.low": "Low",
  "field.urgency.medium": "Normal",
  "field.urgency.high": "Critical",

  /* OUTPUT */
  "field.outputMode.label": "Preferred output format (multiple choices allowed)",
  "field.outputMode.email": "Email",
  "field.outputMode.whatsapp": "WhatsApp",
  "field.outputMode.pdf": "PDF",
  "field.outputMode.display": "On-screen display",

  "field.email.label": "Email address (if Email or PDF)",
  "field.email.ph": "email@example.com",

  "field.whatsapp.label": "WhatsApp number (with country code)",
  "field.whatsapp.ph": "+221…",

  "field.fileLink.label": "Link to a file/folder (optional)",
  "field.fileLink.ph": "Google Drive, Dropbox, Notion, PDF, etc.",
  "field.fileLink.hint": "Optional. Add an existing document if available.",

  /* CONSENT */
  "field.consent.label": "I agree that my information will be used only to generate the analysis.",

  /* FOOTER */
  "footer.privacy": "Privacy policy",
  "footer.copy": "© 2026 e-META — All rights reserved"
},

es: {
  "meta.title": "e-META — Asistente IA para la toma de decisiones",

  "header.tagline": "Asistente IA multilingüe para la toma de decisiones",

  "nav.home": "Inicio",
  "nav.form": "Formulario",
  "nav.privacy": "Privacidad",

  "hero.title": "Lleve sus decisiones al nivel de una consultora premium",
  "hero.subtitle": "e-META estructura su contexto, objetivos, restricciones e indicadores para generar recomendaciones claras y accionables.",
  "hero.point1": "Análisis estructurado (nivel consultor senior)",
  "hero.point2": "Recomendaciones accionables + riesgos + KPIs",
  "hero.point3": "Entrega personalizada (Email / WhatsApp / PDF)",
  "hero.cta": "Iniciar un análisis estratégico",

  "hero.badge.title": "Análisis estratégico — nivel consultoría",
  "hero.badge.text": "Un enfoque estructurado inspirado en consultoras para decisiones complejas.",
  "hero.note": "No es un chatbot. Cada respuesta sigue un marco decisional avanzado.",

  "form.badge.cabinet": "Modo consultoría",
  "form.title": "Formulario e-META vNext — Análisis estratégico premium",
  "form.intro": "Cuanto más precisas sean sus respuestas, más útil será la recomendación.",

  "form.submit": "Generar mi recomendación e-META",
  "form.reset": "Restablecer",
  "form.trust.note": "Sus datos permanecen confidenciales.",

  "group.general": "1) Calificar la decisión",
  "group.analysis": "2) Estructurar el análisis (nivel consultoría)",
  "group.budget": "3) Ambición, presupuesto y urgencia",
  "group.output": "4) Entrega y contacto",
  "group.trust": "Confianza y consentimiento",

  "field.domain.label": "Dominio principal",
  "field.domain.placeholder": "Seleccione un dominio",
  "field.domain.strategy": "Estrategia y gobernanza",
  "field.domain.finance": "Finanzas y modelo de negocio",
  "field.domain.marketing": "Marketing y crecimiento",
  "field.domain.operations": "Operaciones y organización",
  "field.domain.it": "Innovación / IA / digital",
  "field.domain.legal": "Legal y cumplimiento",
  "field.domain.impact": "Impacto social y ambiental",
  "field.domain.other": "Otro",

  "field.decisionType.label": "Tipo de decisión",
  "field.decisionType.placeholder": "Seleccione un tipo",
  "field.decisionType.t1": "Decisión estratégica estructurante",
  "field.decisionType.t2": "Optimización / mejora de lo existente",
  "field.decisionType.t3": "Arbitraje entre varias opciones",
  "field.decisionType.t4": "Lanzamiento de proyecto / producto",
  "field.decisionType.t5": "Respuesta a una urgencia",
  "field.decisionType.t6": "Preparación de expediente formal",

  "footer.privacy": "Política de privacidad",
  "footer.copy": "© 2026 e-META — Todos los derechos reservados"
},

ar: {
  "meta.title": "e-META — مساعد ذكاء اصطناعي لاتخاذ القرار",

  "header.tagline": "مساعد ذكي متعدد اللغات لاتخاذ القرار",

  "nav.home": "الرئيسية",
  "nav.form": "النموذج",
  "nav.privacy": "الخصوصية",

  "hero.title": "ارتقِ بقراراتك إلى مستوى مكاتب الاستشارات المتميزة",
  "hero.subtitle": "e-META ينظم السياق والأهداف والقيود والمؤشرات لتقديم توصيات واضحة وقابلة للتنفيذ.",
  "hero.point1": "تحليل منظم (مستوى مستشار أول)",
  "hero.point2": "توصيات قابلة للتنفيذ + مخاطر + مؤشرات أداء",
  "hero.point3": "تسليم مخصص (بريد / واتساب / PDF)",
  "hero.cta": "ابدأ تحليلاً استراتيجياً",

  "hero.badge.title": "تحليل استراتيجي — مستوى استشاري",
  "hero.badge.text": "منهجية منظمة مستوحاة من مكاتب الاستشارات لاتخاذ قرارات معقدة.",
  "hero.note": "هذا ليس روبوت دردشة. كل إجابة تعتمد على إطار قرار متقدم.",

  "form.badge.cabinet": "وضع الاستشارات",
  "form.title": "نموذج e-META vNext — تحليل استراتيجي متقدم",
  "form.intro": "كلما كانت إجاباتك أدق، كانت التوصية أكثر فاعلية.",

  "form.submit": "إنشاء توصية e-META",
  "form.reset": "إعادة تعيين",
  "form.trust.note": "تظل بياناتك سرية.",

  "group.general": "1) تحديد القرار",
  "group.analysis": "2) تنظيم التحليل (مستوى استشاري)",
  "group.budget": "3) الطموح والميزانية والاستعجال",
  "group.output": "4) المخرجات ووسائل الاتصال",
  "group.trust": "الثقة والموافقة",

  "field.domain.label": "المجال الرئيسي",
  "field.domain.placeholder": "اختر المجال",
  "field.domain.strategy": "الاستراتيجية والحوكمة",
  "field.domain.finance": "التمويل ونموذج الأعمال",
  "field.domain.marketing": "التسويق والنمو",
  "field.domain.operations": "العمليات والتنظيم",
  "field.domain.it": "الابتكار / الذكاء الاصطناعي / الرقمي",
  "field.domain.legal": "القانون والامتثال",
  "field.domain.impact": "الأثر الاجتماعي والبيئي",
  "field.domain.other": "أخرى",

  "field.decisionType.label": "نوع القرار",
  "field.decisionType.placeholder": "اختر النوع",
  "field.decisionType.t1": "قرار استراتيجي مؤثر",
  "field.decisionType.t2": "تحسين أو تطوير القائم",
  "field.decisionType.t3": "مفاضلة بين عدة خيارات",
  "field.decisionType.t4": "إطلاق مشروع أو منتج",
  "field.decisionType.t5": "استجابة عاجلة",
  "field.decisionType.t6": "إعداد ملف رسمي",

  "footer.privacy": "سياسة الخصوصية",
  "footer.copy": "© 2026 e-META — جميع الحقوق محفوظة",
} 
};
