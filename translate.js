console.log("translate.js chargé");
// =========================================
//  e-META Translation Engine v5.0 PRO
//  FR + ES + AR (RTL support)
// =========================================

// ----------------------
// 1. DICTIONNAIRE I18N
// ----------------------
const translations = {
  fr: { /* … */ },
  en: { /* … */ },
  es: { /* … */ },
  ar: { /* … */ }
};

  // =====================
  // 🇫🇷 FRENCH (reference)
  // =====================
  fr: {

    // HEADER
    "menu.home": "Accueil",
    "menu.form": "Formulaire",
    "menu.privacy": "Confidentialité",
    "menu.custom": "Requête personnalisée",
    "tagline": "Assistant IA multilingue de prise de décision",

    // HERO
    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
    "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
    "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
    "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF, ou simple affichage.",
    "hero.button": "Commencer une analyse stratégique",

    // FORM SECTIONS
    "form.section1": "1. INFORMATIONS GÉNÉRALES",
    "form.domain": "Domaine / Thème principal",
    "form.select": "Sélectionner…",

    // DOMAINS
    "domain.hr": "Ressources humaines & Organisation",
    "domain.strategy": "Stratégie & Développement",
    "domain.finance": "Finance & Investissement",
    "domain.marketing": "Marketing & Communication",
    "domain.tech": "Technologie & Transformation digitale",
    "domain.operations": "Opérations & Optimisation des processus",
    "domain.risk": "Gestion des risques & Conformité",
    "domain.other": "Autre domaine",

    // PROJECT TYPES
    "form.projectType": "Type de projet",
    "form.projectType.placeholder": "Sélectionner un type de projet",

    "ptype.analysis": "Analyse stratégique",
    "ptype.market": "Étude de marché",
    "ptype.plan": "Plan d'action / Roadmap",
    "ptype.optimization": "Projet d’optimisation",
    "ptype.organization": "Réorganisation",
    "ptype.risk": "Évaluation des risques",
    "ptype.problem": "Résolution de problème",

    // SHORT TITLE
    "form.shortTitle": "Titre court du projet ou de la décision",
    "form.shortTitle.placeholder": "Ex. : Optimisation de la stratégie de distribution d’e-META",

    // SECTION 2
    "form.section2": "2. ANALYSE STRATÉGIQUE – NIVEAU CONSULTING",
    "form.coreProblem": "Problème central à résoudre",
    "form.coreProblem.placeholder": "Décrivez clairement le problème, la décision ou le défi rencontré.",
    "form.objectives": "Objectifs principaux",
    "form.objectives.placeholder": "Listez 3 à 5 objectifs à atteindre.",
    "form.constraints": "Contraintes & risques",
    "form.constraints.placeholder": "Budget limité, délais serrés, ressources humaines, réglementations, etc.",

    // SECTION 3
    "form.section3": "3. RESSOURCES & KPIs",
    "form.resources": "Ressources disponibles",
    "form.resources.placeholder": "Équipes, outils, données, partenaires, compétences, etc.",
    "form.kpi": "Indicateurs de succès (KPIs)",
    "form.kpi.placeholder": "Résultats mesurables attendus.",

    // SECTION 4
    "form.section4": "4. LIVRABLES & CONTACT",
    "form.delivery": "Méthode de restitution souhaitée",

    "delivery.email": "Email",
    "delivery.whatsapp": "WhatsApp",
    "delivery.pdf": "Fichier PDF",
    "delivery.display": "Affichage à l’écran",

    "form.email": "Votre email (optionnel)",
    "form.email.placeholder": "Saisissez votre adresse email",
    "form.whatsapp": "Votre numéro WhatsApp (optionnel)",
    "form.whatsapp.placeholder": "+221 …",

    "form.submit": "Envoyer la demande",

    // FOOTER
    "footer.rights": "Tous droits réservés © e-META",
  },

  // =====================
  // 🇪🇸 SPANISH
  // =====================
  es: {

    // HEADER
    "menu.home": "Inicio",
    "menu.form": "Formulario",
    "menu.privacy": "Privacidad",
    "menu.custom": "Solicitud personalizada",
    "tagline": "Asistente de IA multilingüe para la toma de decisiones",

    // HERO
    "hero.title": "Eleve sus decisiones al nivel de una firma de consultoría premium",
    "hero.subtitle": "e-META analiza su contexto, objetivos, limitaciones, KPIs y recursos para generar una hoja de ruta clara, accionable y documentada.",
    "hero.point1": "Análisis estructurado: problema, objetivos, limitaciones, riesgos y KPIs.",
    "hero.point2": "Síntesis accionable: recomendaciones, plan de acción y entregables.",
    "hero.point3": "Entrega personalizada: Email, WhatsApp, PDF o visualización directa.",
    "hero.button": "Iniciar un análisis estratégico",

    // FORM
    "form.section1": "1. INFORMACIÓN GENERAL",
    "form.domain": "Dominio / Tema principal",
    "form.select": "Seleccionar…",

    "domain.hr": "Recursos Humanos y Organización",
    "domain.strategy": "Estrategia y Desarrollo",
    "domain.finance": "Finanzas e Inversión",
    "domain.marketing": "Marketing y Comunicación",
    "domain.tech": "Tecnología y Transformación Digital",
    "domain.operations": "Operaciones y Optimización",
    "domain.risk": "Gestión de Riesgos y Cumplimiento",
    "domain.other": "Otro dominio",

    "form.projectType": "Tipo de proyecto",
    "form.projectType.placeholder": "Seleccione un tipo de proyecto",

    "ptype.analysis": "Análisis estratégico",
    "ptype.market": "Estudio de mercado",
    "ptype.plan": "Plan de acción / Roadmap",
    "ptype.optimization": "Proyecto de optimización",
    "ptype.organization": "Reestructuración organizativa",
    "ptype.risk": "Evaluación de riesgos",
    "ptype.problem": "Resolución de problemas",

    "form.shortTitle": "Título corto del proyecto o decisión",
    "form.shortTitle.placeholder": "Ej.: Optimización de la estrategia de distribución de e-META",

    "form.section2": "2. ANÁLISIS ESTRATÉGICO – NIVEL CONSULTORÍA",
    "form.coreProblem": "Problema principal a resolver",
    "form.coreProblem.placeholder": "Describa claramente el problema, decisión o desafío.",
    "form.objectives": "Objetivos principales",
    "form.objectives.placeholder": "Enumere 3 a 5 objetivos que desea lograr.",
    "form.constraints": "Principales limitaciones y riesgos",
    "form.constraints.placeholder": "Presupuesto limitado, plazos ajustados, recursos humanos, regulaciones…",

    "form.section3": "3. RECURSOS Y KPIs",
    "form.resources": "Recursos disponibles",
    "form.resources.placeholder": "Equipos, herramientas, datos, socios, habilidades…",
    "form.kpi": "Indicadores de éxito (KPIs)",
    "form.kpi.placeholder": "Resultados medibles esperados.",

    "form.section4": "4. ENTREGA Y CONTACTO",
    "form.delivery": "Método de entrega preferido",

    "delivery.email": "Correo electrónico",
    "delivery.whatsapp": "WhatsApp",
    "delivery.pdf": "Archivo PDF",
    "delivery.display": "Visualización en pantalla",

    "form.email": "Su correo electrónico (opcional)",
    "form.email.placeholder": "Ingrese su correo electrónico",
    "form.whatsapp": "Su número de WhatsApp (opcional)",
    "form.whatsapp.placeholder": "+34 …",

    "form.submit": "Enviar solicitud",

    "footer.rights": "Todos los derechos reservados © e-META",
  },

  // =====================
  // 🇸🇦 ARABIC (RTL)
  // =====================
  ar: {

    "menu.home": "الرئيسية",
    "menu.form": "النموذج",
    "menu.privacy": "الخصوصية",
    "menu.custom": "طلب مخصص",
    "tagline": "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",

    "hero.title": "امنح قراراتك مستوى شركة استشارات رفيعة المستوى",
    "hero.subtitle": "تحلل e-META سياقك وأهدافك وقيودك ومؤشرات الأداء والموارد لتوليد خارطة طريق واضحة وقابلة للتنفيذ ومدعومة بالبيانات.",
    "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، ومؤشرات الأداء.",
    "hero.point2": "ملخص قابل للتنفيذ: توصيات، خطة عمل، ومخرجات.",
    "hero.point3": "تسليم مخصص: البريد الإلكتروني، واتساب، PDF، أو عرض مباشر.",
    "hero.button": "بدء تحليل استراتيجي",

    "form.section1": "1. المعلومات العامة",
    "form.domain": "المجال / الموضوع الرئيسي",
    "form.select": "اختر…",

    "domain.hr": "الموارد البشرية والتنظيم",
    "domain.strategy": "الاستراتيجية والتطوير",
    "domain.finance": "المالية والاستثمار",
    "domain.marketing": "التسويق والاتصال",
    "domain.tech": "التكنولوجيا والتحول الرقمي",
    "domain.operations": "العمليات وتحسين الإجراءات",
    "domain.risk": "إدارة المخاطر والامتثال",
    "domain.other": "مجال آخر",

    "form.projectType": "نوع المشروع",
    "form.projectType.placeholder": "اختر نوع المشروع",

    "ptype.analysis": "تحليل استراتيجي",
    "ptype.market": "دراسة سوق",
    "ptype.plan": "خطة عمل / خارطة طريق",
    "ptype.optimization": "مشروع تحسين",
    "ptype.organization": "إعادة هيكلة",
    "ptype.risk": "تقييم مخاطر",
    "ptype.problem": "حل مشكلات",

    "form.shortTitle": "عنوان مختصر للمشروع أو القرار",
    "form.shortTitle.placeholder": "مثال: تحسين استراتيجية توزيع e-META",

    "form.section2": "2. التحليل الاستراتيجي — مستوى استشاري",
    "form.coreProblem": "المشكلة الأساسية",
    "form.coreProblem.placeholder": "اشرح بوضوح المشكلة أو القرار أو التحدي.",
    "form.objectives": "الأهداف الرئيسية",
    "form.objectives.placeholder": "اذكر ٣ إلى ٥ أهداف.",
    "form.constraints": "القيود والمخاطر",
    "form.constraints.placeholder": "ميزانية محدودة، مواعيد ضيقة، موارد بشرية…",

    "form.section3": "3. الموارد ومؤشرات الأداء",
    "form.resources": "الموارد المتاحة",
    "form.resources.placeholder": "الفرق، الأدوات، البيانات، الشركاء…",
    "form.kpi": "مؤشرات النجاح",
    "form.kpi.placeholder": "النتائج المتوقعة.",

    "form.section4": "4. التسليم وبيانات الاتصال",
    "form.delivery": "طريقة التسليم المفضلة",

    "delivery.email": "البريد الإلكتروني",
    "delivery.whatsapp": "واتساب",
    "delivery.pdf": "ملف PDF",
    "delivery.display": "عرض على الشاشة",

    "form.email": "البريد الإلكتروني (اختياري)",
    "form.email.placeholder": "أدخل بريدك الإلكتروني",
    "form.whatsapp": "رقم الواتساب (اختياري)",
    "form.whatsapp.placeholder": "+966 …",

    "form.submit": "إرسال الطلب",

    "footer.rights": "© e-META جميع الحقوق محفوظة",
  }
};

en: {

  // HEADER
  "menu.home": "Home",
  "menu.form": "Form",
  "menu.privacy": "Privacy",
  "menu.custom": "Custom request",
  "tagline": "Multilingual AI decision-making assistant",

  // HERO
  "hero.title": "Give your decisions the level of a premium consulting firm",
  "hero.subtitle": "e-META analyzes your context, objectives, constraints, KPIs and resources to generate a clear, actionable and documented roadmap.",
  "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
  "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
  "hero.point3": "Personalized delivery: Email, WhatsApp, PDF or on-screen display.",
  "hero.button": "Start a strategic analysis",

  // FORM — SECTION 1
  "form.section1": "1. GENERAL INFORMATION",
  "form.domain": "Domain / Main theme",
  "form.select": "Select…",

  "domain.hr": "Human Resources & Organization",
  "domain.strategy": "Strategy & Development",
  "domain.finance": "Finance & Investment",
  "domain.marketing": "Marketing & Communication",
  "domain.tech": "Technology & Digital Transformation",
  "domain.operations": "Operations & Process Optimization",
  "domain.risk": "Risk Management & Compliance",
  "domain.other": "Other domain",

  "form.projectType": "Project type",
  "form.projectType.placeholder": "Select a project type",

  "ptype.analysis": "Strategic analysis",
  "ptype.market": "Market study",
  "ptype.plan": "Action plan / Roadmap",
  "ptype.optimization": "Optimization project",
  "ptype.organization": "Organizational restructuring",
  "ptype.risk": "Risk assessment",
  "ptype.problem": "Problem solving",

  "form.shortTitle": "Short title of the project or decision",
  "form.shortTitle.placeholder": "e.g. Optimization of e-META distribution strategy",

  // SECTION 2
  "form.section2": "2. STRATEGIC ANALYSIS — CONSULTING LEVEL",
  "form.coreProblem": "Core problem to solve",
  "form.coreProblem.placeholder": "Clearly describe the problem, decision or challenge you are facing.",
  "form.objectives": "Main objectives",
  "form.objectives.placeholder": "List 3 to 5 objectives you want to achieve.",
  "form.constraints": "Constraints & risks",
  "form.constraints.placeholder": "Limited budget, tight deadlines, human resources, regulations, etc.",

  // SECTION 3
  "form.section3": "3. RESOURCES & KPIs",
  "form.resources": "Available resources",
  "form.resources.placeholder": "Teams, tools, data, partners, skills, etc.",
  "form.kpi": "Key performance indicators (KPIs)",
  "form.kpi.placeholder": "Expected measurable outcomes.",

  // SECTION 4
  "form.section4": "4. DELIVERABLES & CONTACT",
  "form.delivery": "Preferred delivery method",

  "delivery.email": "Email",
  "delivery.whatsapp": "WhatsApp",
  "delivery.pdf": "PDF file",
  "delivery.display": "On-screen display",

  "form.email": "Your email (optional)",
  "form.email.placeholder": "Enter your email address",
  "form.whatsapp": "Your WhatsApp number (optional)",
  "form.whatsapp.placeholder": "+1 …",

  "form.submit": "Submit request",

  // FOOTER
  "footer.rights": "All rights reserved © e-META"
}

// ----------------------
// 2. MISE À JOUR DES TEXTES
// ----------------------
function translatePage(lang) {

  // Labels & textes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholders dynamiques
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}


// ----------------------
// 3. GESTION RTL AUTOMATIQUE
// ----------------------
function applyRTL(lang) {
  if (lang === "ar") {
    document.body.setAttribute("dir", "rtl");
    document.body.classList.add("rtl");
  } else {
    document.body.setAttribute("dir", "ltr");
    document.body.classList.remove("rtl");
  }
}


// ----------------------
// 4. SET LANGUAGE
// ----------------------
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  translatePage(lang);
  applyRTL(lang);
}


// ----------------------
// 5. INITIALISATION
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "fr";
  setLanguage(lang);
});
