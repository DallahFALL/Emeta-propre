// =====================================================
// i18n.js — e-META vNext (FR / EN / ES / AR)
// Harmonisé, complet, production-ready
// =====================================================

window.I18N = {

  /* ===================================================
     FR — Français
  =================================================== */
  fr: {

    /* ===== META / HEADER ===== */
    "meta.title": "e-META — Assistant IA de prise de décision",
    "header.tagline": "Assistant IA multilingue de prise de décision",

    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "cta.custom": "Requête personnalisée",

    /* ===== HERO ===== */
    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
    "hero.subtitle": "e-META structure votre contexte, objectifs, contraintes et indicateurs pour produire une recommandation claire, actionnable et documentée.",
    "hero.point1": "Analyse structurée (niveau consultant senior)",
    "hero.point2": "Recommandations actionnables + risques + KPIs",
    "hero.point3": "Restitution personnalisée (Email / WhatsApp / PDF)",
    "hero.cta": "Commencer une analyse stratégique",

    "hero.badge.title": "Mode cabinet",
    "hero.badge.text": "Cadres d’analyse + feuille de route",
    "hero.note": "e-META n’est pas un chatbot : c’est un moteur d’intelligence décisionnelle.",

    /* ===== HELP ===== */
    "help.title": "Besoin d’aide avant de commencer ?",
    "help.privacy": "🔒 Politique de confidentialité",
    "help.guide": "📘 Guide officiel pour bien remplir le formulaire",

    /* ===== FORM ===== */
    "form.badge.cabinet": "Mode cabinet de conseil",
    "form.title": "Formulaire e-META vNext — Analyse stratégique premium",
    "form.intro": "Plus vos réponses sont précises, plus la recommandation e-META sera juste, nuancée et exploitable.",
    "form.help.download": "Télécharger le guide pour bien remplir",

    /* ===== GROUP 1 ===== */
    "group.general": "1) Qualifier la décision",

    "field.domain.label": "Domaine principal",
    "field.domain.placeholder": "Sélectionnez un domaine",
    "field.domain.strategy": "Stratégie & gouvernance",
    "field.domain.finance": "Finance & modèle économique",
    "field.domain.marketing": "Marketing & croissance",
    "field.domain.operations": "Opérations & organisation",
    "field.domain.it": "Innovation / IA / digital",
    "field.domain.legal": "Juridique & conformité",
    "field.domain.impact": "Impact social & environnemental",
    "field.domain.other": "Autre",

    "field.decisionType.label": "Nature de la décision",
    "field.decisionType.placeholder": "Sélectionnez un type",
    "field.decisionType.t1": "Décision stratégique structurante",
    "field.decisionType.t2": "Optimisation / amélioration",
    "field.decisionType.t3": "Arbitrage entre options",
    "field.decisionType.t4": "Lancement de projet / produit",
    "field.decisionType.t5": "Réponse à une urgence",
    "field.decisionType.t6": "Préparation de dossier (financement, comité, partenaire)",

    "field.title.label": "Titre court de la décision",
    "field.title.ph": "Ex : Repenser notre stratégie de distribution au Sénégal",
    "field.title.hint": "Une phrase courte et précise qui guidera toute la synthèse.",

    /* ===== GROUP 2 ===== */
    "group.analysis": "2) Structurer l’analyse (niveau cabinet)",

    "field.problem.label": "Problème central à résoudre",
    "field.problem.ph": "Décrivez le problème réel (pas seulement les symptômes).",
    "field.problem.hint": "Formulez clairement la difficulté principale à traiter.",

    "field.objectives.label": "Objectifs prioritaires (3 à 5 max)",
    "field.objectives.ph": "Ex : augmenter la marge, réduire le churn, accélérer le déploiement…",
    "field.objectives.hint": "Classez les objectifs par ordre d’importance.",

    "field.constraints.label": "Contraintes et risques majeurs",
    "field.constraints.ph": "Budget, délais, réglementation, ressources, résistance interne…",
    "field.constraints.hint": "Mentionnez uniquement les contraintes réellement bloquantes.",

    "field.kpis.label": "KPIs / indicateurs de succès",
    "field.kpis.ph": "Ex : CA, ROI, NPS, délais, qualité, satisfaction…",
    "field.kpis.hint": "Choisissez des indicateurs mesurables.",

    "field.resources.label": "Ressources disponibles",
    "field.resources.ph": "Équipe, outils, données, partenaires, budget initial…",

    "field.context.label": "Contexte détaillé (recommandé)",
    "field.context.ph": "Historique, acteurs, décisions passées, contraintes locales…",
    "field.context.hint": "Plus le contexte est précis, meilleure sera l’analyse.",

    /* ===== GROUP 3 ===== */
    "group.budget": "3) Ambition, budget et urgence",

    "field.budgetMin.label": "Budget minimum envisagé",
    "field.budgetMin.ph": "Ex : 1000000",

    "field.budgetMax.label": "Budget maximum (si applicable)",
    "field.budgetMax.ph": "Ex : 2500000",

    "field.deadline.label": "Délai souhaité",
    "field.deadline.ph": "Ex : 7 jours, 1 mois, avant une date précise…",

    "field.urgency.label": "Niveau d’urgence",
    "field.urgency.low": "Faible",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critique",

    /* ===== GROUP 4 ===== */
    "group.output": "4) Restitution et contact",

    "field.outputMode.label": "Mode de restitution souhaité",
    "field.outputMode.email": "Email structuré",
    "field.outputMode.whatsapp": "WhatsApp synthétique",
    "field.outputMode.pdf": "PDF professionnel",
    "field.outputMode.display": "Affichage direct",

    "field.email.label": "Adresse email",
    "field.email.ph": "adresse@email.com",

    "field.whatsapp.label": "Numéro WhatsApp",
    "field.whatsapp.ph": "+221782607212",

    "field.fileLink.label": "Lien vers un fichier (optionnel)",
    "field.fileLink.ph": "Google Drive, Dropbox, Notion, PDF…",
    "field.fileLink.hint": "Ajoutez un lien si vous disposez déjà d’un document utile.",

    /* ===== TRUST ===== */
    "group.trust": "Confiance et consentement",
    "field.consent.label": "J’accepte que les informations fournies soient utilisées uniquement pour générer mon analyse e-META.",
    "form.trust.note": "Aucune donnée ne sera revendue ou utilisée hors de ce cadre.",

    /* ===== ACTIONS ===== */
    "form.submit": "Générer ma recommandation e-META",
    "form.reset": "Réinitialiser",

    /* ===== FOOTER ===== */
    "footer.text": "e-META — Moteur d’intelligence décisionnelle stratégique.",
    "footer.privacy": "Politique de confidentialité",
    "footer.copy": "© 2026 e-META — Tous droits réservés"
  },

  /* ===================================================
   en: {

  /* ===== META / HEADER ===== */
  "meta.title": "e-META — AI Decision-Making Assistant",
  "header.tagline": "Multilingual AI decision-making assistant",

  "nav.home": "Home",
  "nav.form": "Form",
  "nav.privacy": "Privacy",

  "cta.custom": "Custom request",

  /* ===== HERO ===== */
  "hero.title": "Make decisions at a premium consulting-firm level",
  "hero.subtitle": "e-META structures your context, objectives, constraints and KPIs to deliver a clear, actionable and documented recommendation.",
  "hero.point1": "Structured analysis (senior consultant level)",
  "hero.point2": "Actionable recommendations + risks + KPIs",
  "hero.point3": "Personalized delivery (Email / WhatsApp / PDF)",
  "hero.cta": "Start a strategic analysis",

  "hero.badge.title": "Consulting mode",
  "hero.badge.text": "Analysis frameworks + roadmap",
  "hero.note": "e-META is not a chatbot: it is a decision intelligence engine.",

  /* ===== HELP ===== */
  "help.title": "Need help before starting?",
  "help.privacy": "🔒 Privacy policy",
  "help.guide": "📘 Official guide to complete the form",

  /* ===== FORM ===== */
  "form.badge.cabinet": "Consulting firm mode",
  "form.title": "e-META vNext Form — Premium strategic analysis",
  "form.intro": "The more precise your answers, the more accurate, nuanced and actionable the e-META recommendation will be.",
  "form.help.download": "Download the guide to complete the form",

  /* ===== GROUP 1 ===== */
  "group.general": "1) Qualify the decision",

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

  "field.decisionType.label": "Decision type",
  "field.decisionType.placeholder": "Select a type",
  "field.decisionType.t1": "Structuring strategic decision",
  "field.decisionType.t2": "Optimization / improvement",
  "field.decisionType.t3": "Trade-off between options",
  "field.decisionType.t4": "Project / product launch",
  "field.decisionType.t5": "Emergency response",
  "field.decisionType.t6": "Dossier preparation (funding, committee, partner)",

  "field.title.label": "Short decision title",
  "field.title.ph": "e.g. Rethinking our distribution strategy in Senegal",
  "field.title.hint": "A short, clear sentence that guides the entire analysis.",

  /* ===== GROUP 2 ===== */
  "group.analysis": "2) Structure the analysis (consulting level)",

  "field.problem.label": "Core problem to solve",
  "field.problem.ph": "Describe the real problem (not just the symptoms).",
  "field.problem.hint": "Clearly state the main issue to be addressed.",

  "field.objectives.label": "Priority objectives (3–5 max)",
  "field.objectives.ph": "e.g. increase margin, reduce churn, accelerate rollout…",
  "field.objectives.hint": "Rank objectives by importance.",

  "field.constraints.label": "Major constraints and risks",
  "field.constraints.ph": "Budget, deadlines, regulation, resources, internal resistance…",
  "field.constraints.hint": "Mention only truly blocking constraints.",

  "field.kpis.label": "KPIs / success indicators",
  "field.kpis.ph": "e.g. revenue, ROI, NPS, lead time, quality, satisfaction…",
  "field.kpis.hint": "Choose measurable indicators.",

  "field.resources.label": "Available resources",
  "field.resources.ph": "Team, tools, data, partners, initial budget…",

  "field.context.label": "Detailed context (recommended)",
  "field.context.ph": "History, stakeholders, past decisions, local constraints…",
  "field.context.hint": "The more precise the context, the better the analysis.",

  /* ===== GROUP 3 ===== */
  "group.budget": "3) Ambition, budget and urgency",

  "field.budgetMin.label": "Minimum budget",
  "field.budgetMin.ph": "e.g. 1000000",

  "field.budgetMax.label": "Maximum budget (if applicable)",
  "field.budgetMax.ph": "e.g. 2500000",

  "field.deadline.label": "Desired timeline",
  "field.deadline.ph": "e.g. 7 days, 1 month, before a specific date…",

  "field.urgency.label": "Urgency level",
  "field.urgency.low": "Low",
  "field.urgency.medium": "Normal",
  "field.urgency.high": "Critical",

  /* ===== GROUP 4 ===== */
  "group.output": "4) Delivery and contact",

  "field.outputMode.label": "Preferred delivery mode",
  "field.outputMode.email": "Structured email",
  "field.outputMode.whatsapp": "Concise WhatsApp",
  "field.outputMode.pdf": "Professional PDF",
  "field.outputMode.display": "Direct display",

  "field.email.label": "Email address",
  "field.email.ph": "email@address.com",

  "field.whatsapp.label": "WhatsApp number",
  "field.whatsapp.ph": "+221782607212",

  "field.fileLink.label": "File link (optional)",
  "field.fileLink.ph": "Google Drive, Dropbox, Notion, PDF…",
  "field.fileLink.hint": "Add a link if you already have a useful document.",

  /* ===== TRUST ===== */
  "group.trust": "Trust and consent",
  "field.consent.label": "I agree that the information provided is used only to generate my e-META analysis.",
  "form.trust.note": "No data will be resold or used outside this scope.",

  /* ===== ACTIONS ===== */
  "form.submit": "Generate my e-META recommendation",
  "form.reset": "Reset",

  /* ===== FOOTER ===== */
  "footer.text": "e-META — Strategic decision intelligence engine.",
  "footer.privacy": "Privacy policy",
  "footer.copy": "© 2026 e-META — All rights reserved"
}
es: {

  /* ===== META / HEADER ===== */
  "meta.title": "e-META — Asistente IA para la toma de decisiones",
  "header.tagline": "Asistente IA multilingüe para la toma de decisiones",

  "nav.home": "Inicio",
  "nav.form": "Formulario",
  "nav.privacy": "Privacidad",

  "cta.custom": "Solicitud personalizada",

  /* ===== HERO ===== */
  "hero.title": "Tome decisiones al nivel de una consultora premium",
  "hero.subtitle": "e-META estructura su contexto, objetivos, restricciones e indicadores para ofrecer una recomendación clara, accionable y documentada.",
  "hero.point1": "Análisis estructurado (nivel consultor senior)",
  "hero.point2": "Recomendaciones accionables + riesgos + KPIs",
  "hero.point3": "Entrega personalizada (Email / WhatsApp / PDF)",
  "hero.cta": "Iniciar un análisis estratégico",

  "hero.badge.title": "Modo consultoría",
  "hero.badge.text": "Marcos de análisis + hoja de ruta",
  "hero.note": "e-META no es un chatbot: es un motor de inteligencia para decisiones.",

  /* ===== HELP ===== */
  "help.title": "¿Necesita ayuda antes de empezar?",
  "help.privacy": "🔒 Política de privacidad",
  "help.guide": "📘 Guía oficial para completar el formulario",

  /* ===== FORM ===== */
  "form.badge.cabinet": "Modo consultoría estratégica",
  "form.title": "Formulario e-META vNext — Análisis estratégico premium",
  "form.intro": "Cuanto más precisas sean sus respuestas, más útil y matizada será la recomendación de e-META.",
  "form.help.download": "Descargar la guía para completar el formulario",

  /* ===== GROUP 1 ===== */
  "group.general": "1) Definir la decisión",

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
  "field.decisionType.t2": "Optimización / mejora",
  "field.decisionType.t3": "Elección entre opciones",
  "field.decisionType.t4": "Lanzamiento de proyecto / producto",
  "field.decisionType.t5": "Respuesta a una urgencia",
  "field.decisionType.t6": "Preparación de dossier (financiación, comité, socio)",

  "field.title.label": "Título corto de la decisión",
  "field.title.ph": "Ej.: Replantear nuestra estrategia de distribución en Senegal",
  "field.title.hint": "Una frase clara que guiará todo el análisis.",

  /* ===== GROUP 2 ===== */
  "group.analysis": "2) Estructurar el análisis (nivel consultoría)",

  "field.problem.label": "Problema central a resolver",
  "field.problem.ph": "Describa el problema real (no solo los síntomas).",
  "field.problem.hint": "Formule claramente la dificultad principal.",

  "field.objectives.label": "Objetivos prioritarios (máx. 3–5)",
  "field.objectives.ph": "Ej.: aumentar margen, reducir churn, acelerar despliegue…",
  "field.objectives.hint": "Ordene los objetivos por importancia.",

  "field.constraints.label": "Restricciones y riesgos principales",
  "field.constraints.ph": "Presupuesto, plazos, regulación, recursos, resistencia interna…",
  "field.constraints.hint": "Mencione solo restricciones realmente bloqueantes.",

  "field.kpis.label": "KPIs / indicadores de éxito",
  "field.kpis.ph": "Ej.: ingresos, ROI, NPS, plazos, calidad, satisfacción…",
  "field.kpis.hint": "Elija indicadores medibles.",

  "field.resources.label": "Recursos disponibles",
  "field.resources.ph": "Equipo, herramientas, datos, socios, presupuesto inicial…",

  "field.context.label": "Contexto detallado (recomendado)",
  "field.context.ph": "Historial, actores, decisiones previas, restricciones locales…",
  "field.context.hint": "Cuanto más preciso sea el contexto, mejor será el análisis.",

  /* ===== GROUP 3 ===== */
  "group.budget": "3) Ambición, presupuesto y urgencia",

  "field.budgetMin.label": "Presupuesto mínimo",
  "field.budgetMin.ph": "Ej.: 1000000",

  "field.budgetMax.label": "Presupuesto máximo (si aplica)",
  "field.budgetMax.ph": "Ej.: 2500000",

  "field.deadline.label": "Plazo deseado",
  "field.deadline.ph": "Ej.: 7 días, 1 mes, antes de una fecha concreta…",

  "field.urgency.label": "Nivel de urgencia",
  "field.urgency.low": "Baja",
  "field.urgency.medium": "Normal",
  "field.urgency.high": "Crítica",

  /* ===== GROUP 4 ===== */
  "group.output": "4) Entrega y contacto",

  "field.outputMode.label": "Modo de entrega preferido",
  "field.outputMode.email": "Email estructurado",
  "field.outputMode.whatsapp": "WhatsApp conciso",
  "field.outputMode.pdf": "PDF profesional",
  "field.outputMode.display": "Visualización directa",

  "field.email.label": "Correo electrónico",
  "field.email.ph": "correo@email.com",

  "field.whatsapp.label": "Número de WhatsApp",
  "field.whatsapp.ph": "+221782607212",

  "field.fileLink.label": "Enlace a archivo (opcional)",
  "field.fileLink.ph": "Google Drive, Dropbox, Notion, PDF…",
  "field.fileLink.hint": "Añada un enlace si ya dispone de un documento útil.",

  /* ===== TRUST ===== */
  "group.trust": "Confianza y consentimiento",
  "field.consent.label": "Acepto que la información proporcionada se utilice únicamente para generar mi análisis e-META.",
  "form.trust.note": "Los datos no serán revendidos ni utilizados fuera de este marco.",

  /* ===== ACTIONS ===== */
  "form.submit": "Generar mi recomendación e-META",
  "form.reset": "Restablecer",

  /* ===== FOOTER ===== */
  "footer.text": "e-META — Motor de inteligencia estratégica para la toma de decisiones.",
  "footer.privacy": "Política de privacidad",
  "footer.copy": "© 2026 e-META — Todos los derechos reservados"
}
ar: {

  /* ===== META / HEADER ===== */
  "meta.title": "e-META — مساعد ذكاء اصطناعي لاتخاذ القرار",
  "header.tagline": "مساعد متعدد اللغات لاتخاذ القرار",

  "nav.home": "الرئيسية",
  "nav.form": "النموذج",
  "nav.privacy": "الخصوصية",

  "cta.custom": "طلب مخصص",

  /* ===== HERO ===== */
  "hero.title": "اتخذ قرارات بمستوى شركة استشارات متميزة",
  "hero.subtitle": "يقوم e-META بهيكلة السياق والأهداف والقيود والمؤشرات لإنتاج توصية واضحة وقابلة للتنفيذ وموثقة.",
  "hero.point1": "تحليل منظم (بمستوى مستشار خبير)",
  "hero.point2": "توصيات قابلة للتنفيذ + مخاطر + مؤشرات",
  "hero.point3": "تسليم مخصص (بريد إلكتروني / واتساب / PDF)",
  "hero.cta": "ابدأ تحليلاً استراتيجياً",

  "hero.badge.title": "وضع الاستشارات",
  "hero.badge.text": "أطر تحليل + خارطة طريق",
  "hero.note": "e-META ليس روبوت دردشة: بل محرك ذكاء لاتخاذ القرار.",

  /* ===== HELP ===== */
  "help.title": "هل تحتاج إلى مساعدة قبل البدء؟",
  "help.privacy": "🔒 سياسة الخصوصية",
  "help.guide": "📘 الدليل الرسمي لملء النموذج",

  /* ===== FORM ===== */
  "form.badge.cabinet": "وضع مكتب استشارات",
  "form.title": "نموذج e-META vNext — تحليل استراتيجي متميز",
  "form.intro": "كلما كانت إجاباتك أدق، كانت توصية e-META أكثر دقة وفائدة.",
  "form.help.download": "تحميل دليل تعبئة النموذج",

  /* ===== GROUP 1 ===== */
  "group.general": "1) تحديد القرار",

  "field.domain.label": "المجال الرئيسي",
  "field.domain.placeholder": "اختر مجالاً",
  "field.domain.strategy": "الاستراتيجية والحوكمة",
  "field.domain.finance": "التمويل ونموذج العمل",
  "field.domain.marketing": "التسويق والنمو",
  "field.domain.operations": "العمليات والتنظيم",
  "field.domain.it": "الابتكار / الذكاء الاصطناعي / الرقمي",
  "field.domain.legal": "القانون والامتثال",
  "field.domain.impact": "الأثر الاجتماعي والبيئي",
  "field.domain.other": "أخرى",

  "field.decisionType.label": "نوع القرار",
  "field.decisionType.placeholder": "اختر نوعاً",
  "field.decisionType.t1": "قرار استراتيجي محوري",
  "field.decisionType.t2": "تحسين / تطوير",
  "field.decisionType.t3": "مفاضلة بين خيارات",
  "field.decisionType.t4": "إطلاق مشروع / منتج",
  "field.decisionType.t5": "الاستجابة لحالة عاجلة",
  "field.decisionType.t6": "إعداد ملف (تمويل، لجنة، شريك)",

  "field.title.label": "عنوان قصير للقرار",
  "field.title.ph": "مثال: إعادة التفكير في استراتيجية التوزيع في السنغال",
  "field.title.hint": "جملة واضحة واحدة تقود كامل التحليل.",

  /* ===== GROUP 2 ===== */
  "group.analysis": "2) هيكلة التحليل (مستوى استشاري)",

  "field.problem.label": "المشكلة الأساسية",
  "field.problem.ph": "اشرح المشكلة الحقيقية (وليس الأعراض فقط).",
  "field.problem.hint": "حدد بوضوح التحدي الرئيسي.",

  "field.objectives.label": "الأهداف ذات الأولوية (3–5 كحد أقصى)",
  "field.objectives.ph": "مثال: زيادة الهامش، خفض التسرب، تسريع التنفيذ…",
  "field.objectives.hint": "رتب الأهداف حسب الأهمية.",

  "field.constraints.label": "القيود والمخاطر الرئيسية",
  "field.constraints.ph": "الميزانية، المهل، اللوائح، الموارد، مقاومة داخلية…",
  "field.constraints.hint": "اذكر القيود المؤثرة فعلياً.",

  "field.kpis.label": "المؤشرات / معايير النجاح",
  "field.kpis.ph": "مثال: الإيرادات، ROI، NPS، الزمن، الجودة، الرضا…",
  "field.kpis.hint": "اختر مؤشرات قابلة للقياس.",

  "field.resources.label": "الموارد المتاحة",
  "field.resources.ph": "الفريق، الأدوات، البيانات، الشركاء، ميزانية أولية…",

  "field.context.label": "سياق مفصل (مستحسن)",
  "field.context.ph": "الخلفية، الأطراف، قرارات سابقة، قيود محلية…",
  "field.context.hint": "كلما كان السياق أدق، تحسنت التوصية.",

  /* ===== GROUP 3 ===== */
  "group.budget": "3) الطموح والميزانية والاستعجال",

  "field.budgetMin.label": "الحد الأدنى للميزانية",
  "field.budgetMin.ph": "مثال: 1000000",

  "field.budgetMax.label": "الحد الأقصى للميزانية (إن وجد)",
  "field.budgetMax.ph": "مثال: 2500000",

  "field.deadline.label": "المدة المطلوبة",
  "field.deadline.ph": "مثال: 7 أيام، شهر، قبل تاريخ محدد…",

  "field.urgency.label": "مستوى الاستعجال",
  "field.urgency.low": "منخفض",
  "field.urgency.medium": "طبيعي",
  "field.urgency.high": "حرج",

  /* ===== GROUP 4 ===== */
  "group.output": "4) التسليم وبيانات التواصل",

  "field.outputMode.label": "طريقة التسليم المفضلة",
  "field.outputMode.email": "بريد إلكتروني منظم",
  "field.outputMode.whatsapp": "واتساب مختصر",
  "field.outputMode.pdf": "PDF احترافي",
  "field.outputMode.display": "عرض مباشر",

  "field.email.label": "البريد الإلكتروني",
  "field.email.ph": "email@address.com",

  "field.whatsapp.label": "رقم واتساب",
  "field.whatsapp.ph": "+221782607212",

  "field.fileLink.label": "رابط ملف (اختياري)",
  "field.fileLink.ph": "Google Drive أو Dropbox أو Notion أو PDF…",
  "field.fileLink.hint": "أضف رابطاً إذا كان لديك مستند مفيد.",

  /* ===== TRUST ===== */
  "group.trust": "الثقة والموافقة",
  "field.consent.label": "أوافق على استخدام المعلومات فقط لإنشاء تحليلي عبر e-META.",
  "form.trust.note": "لن يتم بيع البيانات أو استخدامها خارج هذا الإطار.",

  /* ===== ACTIONS ===== */
  "form.submit": "إنشاء توصية e-META",
  "form.reset": "إعادة ضبط",

  /* ===== FOOTER ===== */
  "footer.text": "e-META — محرك ذكاء استراتيجي لاتخاذ القرار.",
  "footer.privacy": "سياسة الخصوصية",
  "footer.copy": "© 2026 e-META — جميع الحقوق محفوظة"
}
}.
