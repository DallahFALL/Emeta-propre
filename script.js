/* =========================================
   e-META v5 PRO — script.js
   - i18n FR/EN/ES/AR (RTL)
   - data-i18n + data-i18n-placeholder
   - Burger menu mobile PRO
   - Micro UX helpers
========================================= */

const I18N = {
  fr: {
    "tagline": "Assistant IA multilingue de prise de décision",

    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "btn.whatsapp": "Requête personnalisée",

    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
    "hero.subtitle": "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
    "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
    "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
    "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF, ou simple affichage.",
    "hero.cta": "Commencer une analyse stratégique",

    "hero.badge.title": "Version PRO v5.0",
    "hero.badge.text": "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
    "hero.note": "Temps estimé : 5 à 10 minutes pour remplir le formulaire, gain : des heures de réflexion structurée.",

    "form.title": "Formulaire e-META – Version Ultra-Premium (Consulting Business)",
    "form.intro": "Plus vos réponses sont précises, plus la synthèse de e-META sera professionnelle et exploitable.",

    "group.general": "1. Informations générales",
    "field.domain.label": "Domaine / Thème principal",
    "field.domain.placeholder": "Sélectionnez un domaine",
    "field.domain.strategy": "Stratégie & Gouvernance",
    "field.domain.finance": "Finance & Modèle économique",
    "field.domain.marketing": "Marketing & Croissance",
    "field.domain.operations": "Opérations & Supply Chain",
    "field.domain.hr": "Ressources humaines & Organisation",
    "field.domain.it": "Systèmes d’information & IA",
    "field.domain.legal": "Juridique & Conformité",
    "field.domain.impact": "Impact social & environnemental",
    "field.domain.other": "Autre (préciser dans le contexte)",

    "field.projectType.label": "Type de projet",
    "field.projectType.placeholder": "Sélectionnez le type de projet",
    "field.projectType.diagnostic": "Diagnostic & Analyse",
    "field.projectType.business": "Business model / Plan d’affaires",
    "field.projectType.roadmap": "Feuille de route stratégique",
    "field.projectType.process": "Optimisation de processus",
    "field.projectType.prototype": "Prototypage / MVP",
    "field.projectType.funding": "Dossier de financement / levée de fonds",
    "field.projectType.other": "Autre",

    "field.projectTitle.label": "Titre court du projet ou de la décision",
    "field.projectTitle.placeholder": "Ex : Optimisation de la stratégie de distribution e-META",

    "group.analysis": "2. Analyse stratégique – Niveau cabinet de conseil",
    "field.problem.label": "Problème central à résoudre",
    "field.problem.placeholder": "Décrivez clairement le problème, la décision ou le défi principal auquel vous faites face.",
    "field.objectives.label": "Objectifs principaux",
    "field.objectives.placeholder": "Listez 3 à 5 objectifs que vous souhaitez atteindre.",
    "field.constraints.label": "Contraintes & risques majeurs",
    "field.constraints.placeholder": "Budget limité, délais courts, ressources humaines, contraintes réglementaires, etc.",
    "field.kpis.label": "KPIs / Indicateurs de performance visés",
    "field.kpis.placeholder": "Ex : CA mensuel, marge, nombre de clients actifs, délais de traitement, satisfaction client, etc.",
    "field.resources.label": "Ressources déjà disponibles",
    "field.resources.placeholder": "Équipe, outils, partenaires, données, budget initial, infrastructure, etc.",
    "field.deliverables.label": "Livrables attendus",
    "field.deliverables.placeholder": "Ex : note stratégique, plan d’actions, business plan, canevas financier, argumentaire, pitch deck, etc.",
    "field.successIndicators.label": "Indicateurs de succès (comment saurez-vous que c’est une réussite ?)",
    "field.successIndicators.placeholder": "Ex : atteindre un certain niveau de ventes, signer un partenariat, valider un pilote, etc.",
    "field.context.label": "Contexte détaillé (facultatif mais fortement recommandé)",
    "field.context.placeholder": "Expliquez le contexte global, l’historique, les acteurs impliqués, les décisions déjà prises, etc.",

    "group.budget": "3. Budget, délais & urgence",
    "field.budgetMin.label": "Budget minimum envisagé",
    "field.budgetMin.placeholder": "Ex : 1000000",
    "field.budgetMax.label": "Budget maximum (si applicable)",
    "field.budgetMax.placeholder": "Ex : 2500000",
    "field.deadline.label": "Délai souhaité pour disposer de la synthèse / recommandation",
    "field.deadline.placeholder": "Ex : 7 jours, 1 mois, avant telle date précise...",
    "field.urgency.label": "Niveau d’urgence (1 = faible, 5 = critique)",
    "field.urgency.low": "Faible",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critique",

    "group.output": "4. Mode de restitution & contact",
    "field.outputMode.label": "Mode de restitution souhaité (vous pouvez en cocher plusieurs)",
    "field.outputMode.email": "Email détaillé",
    "field.outputMode.whatsapp": "Message WhatsApp structuré",
    "field.outputMode.pdf": "Synthèse PDF",
    "field.outputMode.display": "Affichage simple dans e-META",

    "field.email.label": "Adresse e-mail (si restitution par email ou PDF)",
    "field.email.placeholder": "adresse@email.com",
    "field.whatsapp.label": "Numéro WhatsApp avec indicatif pays",
    "field.whatsapp.placeholder": "+221782607212",
    "field.fileLink.label": "Lien vers un fichier ou dossier (facultatif)",
    "field.fileLink.placeholder": "Lien Google Drive, Dropbox, Notion, PDF, etc.",
    "field.consent.label": "J’accepte que les informations fournies soient utilisées uniquement pour générer une analyse e-META. Aucune donnée personnelle ne sera revendue ou partagée à des tiers.",

    "form.submit": "Envoyer ma requête",
    "form.reset": "Réinitialiser le formulaire",

    "footer.text": "e-META – Assistant IA de décision. Donnez à vos projets un niveau d’analyse stratégique premium.",
    "footer.privacy": "Politique de confidentialité",
  },

  en: {
    "tagline": "Multilingual AI decision-making assistant",

    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "btn.whatsapp": "Custom request",

    "hero.title": "Give your decisions the level of a premium consulting firm",
    "hero.subtitle": "e-META analyzes your context, objectives, constraints, KPIs and resources to generate a clear, actionable and documented roadmap.",
    "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
    "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
    "hero.point3": "Personalized delivery: Email, WhatsApp, PDF, or on-screen display.",
    "hero.cta": "Start a strategic analysis",

    "hero.badge.title": "PRO v5.0",
    "hero.badge.text": "Ultra-premium form inspired by Deloitte / EY-style consulting.",
    "hero.note": "Estimated time: 5–10 minutes. Benefit: hours of structured thinking saved.",

    "form.title": "e-META Form — Ultra-Premium Version (Consulting Business)",
    "form.intro": "The more precise your answers are, the more professional and actionable your e-META synthesis will be.",

    "group.general": "1. General information",
    "field.domain.label": "Domain / Main theme",
    "field.domain.placeholder": "Select a domain",
    "field.domain.strategy": "Strategy & Governance",
    "field.domain.finance": "Finance & Business model",
    "field.domain.marketing": "Marketing & Growth",
    "field.domain.operations": "Operations & Supply chain",
    "field.domain.hr": "Human Resources & Organization",
    "field.domain.it": "Information Systems & AI",
    "field.domain.legal": "Legal & Compliance",
    "field.domain.impact": "Social & Environmental impact",
    "field.domain.other": "Other (specify in context)",

    "field.projectType.label": "Project type",
    "field.projectType.placeholder": "Select project type",
    "field.projectType.diagnostic": "Diagnostic & Analysis",
    "field.projectType.business": "Business model / Business plan",
    "field.projectType.roadmap": "Strategic roadmap",
    "field.projectType.process": "Process optimization",
    "field.projectType.prototype": "Prototype / MVP",
    "field.projectType.funding": "Funding / fundraising pack",
    "field.projectType.other": "Other",

    "field.projectTitle.label": "Short title of the project or decision",
    "field.projectTitle.placeholder": "e.g., Optimization of e-META distribution strategy",

    "group.analysis": "2. Strategic analysis — Consulting level",
    "field.problem.label": "Core problem to solve",
    "field.problem.placeholder": "Clearly describe the main problem, decision, or challenge you are facing.",
    "field.objectives.label": "Main objectives",
    "field.objectives.placeholder": "List 3–5 objectives you want to achieve.",
    "field.constraints.label": "Constraints & major risks",
    "field.constraints.placeholder": "Limited budget, tight deadlines, HR constraints, regulations, etc.",
    "field.kpis.label": "KPIs / Target performance indicators",
    "field.kpis.placeholder": "e.g., monthly revenue, margin, active users, lead time, customer satisfaction, etc.",
    "field.resources.label": "Resources already available",
    "field.resources.placeholder": "Team, tools, partners, data, initial budget, infrastructure, etc.",
    "field.deliverables.label": "Expected deliverables",
    "field.deliverables.placeholder": "e.g., strategy memo, action plan, business plan, financial model, pitch deck, etc.",
    "field.successIndicators.label": "Success indicators (how will you know it’s a success?)",
    "field.successIndicators.placeholder": "e.g., reach a sales target, sign a partnership, validate a pilot, etc.",
    "field.context.label": "Detailed context (optional but strongly recommended)",
    "field.context.placeholder": "Explain background, stakeholders, previous decisions, constraints, etc.",

    "group.budget": "3. Budget, timeline & urgency",
    "field.budgetMin.label": "Minimum budget considered",
    "field.budgetMin.placeholder": "e.g., 1000000",
    "field.budgetMax.label": "Maximum budget (if applicable)",
    "field.budgetMax.placeholder": "e.g., 2500000",
    "field.deadline.label": "Desired deadline to receive the synthesis / recommendation",
    "field.deadline.placeholder": "e.g., 7 days, 1 month, before a specific date...",
    "field.urgency.label": "Urgency level (1 = low, 5 = critical)",
    "field.urgency.low": "Low",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critical",

    "group.output": "4. Delivery mode & contact",
    "field.outputMode.label": "Preferred delivery mode (you may select multiple)",
    "field.outputMode.email": "Detailed email",
    "field.outputMode.whatsapp": "Structured WhatsApp message",
    "field.outputMode.pdf": "PDF synthesis",
    "field.outputMode.display": "Simple on-screen display",

    "field.email.label": "Email address (for email or PDF delivery)",
    "field.email.placeholder": "email@domain.com",
    "field.whatsapp.label": "WhatsApp number with country code",
    "field.whatsapp.placeholder": "+221782607212",
    "field.fileLink.label": "Link to a file or folder (optional)",
    "field.fileLink.placeholder": "Google Drive / Dropbox / Notion / PDF link, etc.",
    "field.consent.label": "I agree that the information provided will be used only to generate an e-META analysis. No personal data will be sold or shared with third parties.",

    "form.submit": "Submit request",
    "form.reset": "Reset form",

    "footer.text": "e-META — AI decision assistant. Give your projects premium strategic analysis.",
    "footer.privacy": "Privacy policy",
  },

  es: {
    "tagline": "Asistente de IA multilingüe para la toma de decisiones",
    "nav.home": "Inicio",
    "nav.form": "Formulario",
    "nav.privacy": "Privacidad",
    "btn.whatsapp": "Solicitud personalizada",
    "hero.title": "Eleve sus decisiones al nivel de una firma de consultoría premium",
    "hero.subtitle": "e-META analiza su contexto, objetivos, limitaciones, KPIs y recursos para generar una hoja de ruta clara, accionable y documentada.",
    "hero.point1": "Análisis estructurado: problema, objetivos, limitaciones, riesgos y KPIs.",
    "hero.point2": "Síntesis accionable: recomendaciones, plan de acción y entregables.",
    "hero.point3": "Entrega personalizada: Email, WhatsApp, PDF o visualización directa.",
    "hero.cta": "Iniciar un análisis estratégico",
    "hero.badge.title": "Versión PRO v5.0",
    "hero.badge.text": "Formulario ultra-premium, inspirado en consultoría tipo Deloitte / EY.",
    "hero.note": "Tiempo estimado: 5–10 minutos. Beneficio: horas de reflexión estructurada.",
    "form.title": "Formulario e-META — Versión Ultra-Premium (Consulting Business)",
    "form.intro": "Cuanto más precisas sean sus respuestas, más profesional y accionable será la síntesis de e-META.",
    "group.general": "1. Información general",
    "field.domain.label": "Dominio / Tema principal",
    "field.domain.placeholder": "Seleccione un dominio",
    "field.domain.strategy": "Estrategia y Gobernanza",
    "field.domain.finance": "Finanzas y Modelo de negocio",
    "field.domain.marketing": "Marketing y Crecimiento",
    "field.domain.operations": "Operaciones y Supply Chain",
    "field.domain.hr": "Recursos Humanos y Organización",
    "field.domain.it": "Sistemas de información e IA",
    "field.domain.legal": "Legal y Cumplimiento",
    "field.domain.impact": "Impacto social y ambiental",
    "field.domain.other": "Otro (especifique en el contexto)",
    "field.projectType.label": "Tipo de proyecto",
    "field.projectType.placeholder": "Seleccione el tipo de proyecto",
    "field.projectType.diagnostic": "Diagnóstico y análisis",
    "field.projectType.business": "Modelo de negocio / Plan de negocios",
    "field.projectType.roadmap": "Hoja de ruta estratégica",
    "field.projectType.process": "Optimización de procesos",
    "field.projectType.prototype": "Prototipo / MVP",
    "field.projectType.funding": "Dossier de financiación / inversión",
    "field.projectType.other": "Otro",
    "field.projectTitle.label": "Título corto del proyecto o decisión",
    "field.projectTitle.placeholder": "Ej.: Optimización de la estrategia de distribución de e-META",
    "group.analysis": "2. Análisis estratégico — Nivel consultoría",
    "field.problem.label": "Problema principal a resolver",
    "field.problem.placeholder": "Describa claramente el problema, la decisión o el desafío.",
    "field.objectives.label": "Objetivos principales",
    "field.objectives.placeholder": "Enumere 3 a 5 objetivos que desea lograr.",
    "field.constraints.label": "Limitaciones y riesgos",
    "field.constraints.placeholder": "Presupuesto limitado, plazos ajustados, recursos humanos, regulaciones, etc.",
    "field.kpis.label": "KPIs / Indicadores de desempeño",
    "field.kpis.placeholder": "Ej.: ingresos mensuales, margen, usuarios activos, plazos, satisfacción del cliente, etc.",
    "field.resources.label": "Recursos disponibles",
    "field.resources.placeholder": "Equipo, herramientas, socios, datos, presupuesto inicial, infraestructura, etc.",
    "field.deliverables.label": "Entregables esperados",
    "field.deliverables.placeholder": "Ej.: nota estratégica, plan de acción, plan de negocio, modelo financiero, pitch deck, etc.",
    "field.successIndicators.label": "Indicadores de éxito (¿cómo sabrá que fue un éxito?)",
    "field.successIndicators.placeholder": "Ej.: alcanzar ventas, firmar un acuerdo, validar un piloto, etc.",
    "field.context.label": "Contexto detallado (opcional pero recomendado)",
    "field.context.placeholder": "Explique el contexto, antecedentes, actores, decisiones previas, etc.",
    "group.budget": "3. Presupuesto, plazos y urgencia",
    "field.budgetMin.label": "Presupuesto mínimo",
    "field.budgetMin.placeholder": "Ej.: 1000000",
    "field.budgetMax.label": "Presupuesto máximo (si aplica)",
    "field.budgetMax.placeholder": "Ej.: 2500000",
    "field.deadline.label": "Plazo deseado para recibir la síntesis / recomendación",
    "field.deadline.placeholder": "Ej.: 7 días, 1 mes, antes de una fecha...",
    "field.urgency.label": "Nivel de urgencia (1 = bajo, 5 = crítico)",
    "field.urgency.low": "Bajo",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Crítico",
    "group.output": "4. Entrega y contacto",
    "field.outputMode.label": "Modo de entrega (puede seleccionar varios)",
    "field.outputMode.email": "Email detallado",
    "field.outputMode.whatsapp": "Mensaje WhatsApp estructurado",
    "field.outputMode.pdf": "Síntesis PDF",
    "field.outputMode.display": "Visualización en e-META",
    "field.email.label": "Correo electrónico (para email o PDF)",
    "field.email.placeholder": "correo@dominio.com",
    "field.whatsapp.label": "Número WhatsApp con prefijo",
    "field.whatsapp.placeholder": "+221782607212",
    "field.fileLink.label": "Enlace a archivo o carpeta (opcional)",
    "field.fileLink.placeholder": "Google Drive, Dropbox, Notion, PDF, etc.",
    "field.consent.label": "Acepto que la información proporcionada se utilice solo para generar un análisis e-META. Ningún dato personal será vendido o compartido con terceros.",
    "form.submit": "Enviar solicitud",
    "form.reset": "Restablecer formulario",
    "footer.text": "e-META — Asistente de decisión con IA. Análisis estratégico premium para sus proyectos.",
    "footer.privacy": "Política de privacidad",
  },

  ar: {
    "tagline": "مساعد ذكاء اصطناعي متعدد اللغات لاتخاذ القرار",
    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",
    "btn.whatsapp": "طلب مخصص",
    "hero.title": "امنح قراراتك مستوى شركة استشارات رفيعة المستوى",
    "hero.subtitle": "تحلل e-META سياقك وأهدافك وقيودك ومؤشرات الأداء والموارد لتوليد خارطة طريق واضحة وقابلة للتنفيذ ومدعومة بالبيانات.",
    "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، ومؤشرات الأداء.",
    "hero.point2": "ملخص قابل للتنفيذ: توصيات، خطة عمل، ومخرجات.",
    "hero.point3": "تسليم مخصص: بريد إلكتروني، واتساب، PDF، أو عرض مباشر.",
    "hero.cta": "بدء تحليل استراتيجي",
    "hero.badge.title": "PRO v5.0",
    "hero.badge.text": "نموذج فائق الاحتراف مستوحى من أسلوب Deloitte / EY.",
    "hero.note": "الوقت المتوقع: ٥–١٠ دقائق. الفائدة: توفير ساعات من التفكير المنظم.",
    "form.title": "نموذج e-META — النسخة الفائقة (Consulting Business)",
    "form.intro": "كلما كانت إجاباتك أدق، كانت خلاصة e-META أكثر احترافية وقابلية للتطبيق.",
    "group.general": "1. معلومات عامة",
    "field.domain.label": "المجال / الموضوع الرئيسي",
    "field.domain.placeholder": "اختر مجالاً",
    "field.domain.strategy": "الاستراتيجية والحوكمة",
    "field.domain.finance": "المالية ونموذج الأعمال",
    "field.domain.marketing": "التسويق والنمو",
    "field.domain.operations": "العمليات وسلسلة الإمداد",
    "field.domain.hr": "الموارد البشرية والتنظيم",
    "field.domain.it": "نظم المعلومات والذكاء الاصطناعي",
    "field.domain.legal": "القانون والامتثال",
    "field.domain.impact": "الأثر الاجتماعي والبيئي",
    "field.domain.other": "مجال آخر (اذكره في السياق)",
    "field.projectType.label": "نوع المشروع",
    "field.projectType.placeholder": "اختر نوع المشروع",
    "field.projectType.diagnostic": "تشخيص وتحليل",
    "field.projectType.business": "نموذج أعمال / خطة أعمال",
    "field.projectType.roadmap": "خارطة طريق استراتيجية",
    "field.projectType.process": "تحسين العمليات",
    "field.projectType.prototype": "نموذج أولي / MVP",
    "field.projectType.funding": "ملف تمويل / جذب استثمار",
    "field.projectType.other": "آخر",
    "field.projectTitle.label": "عنوان مختصر للمشروع أو القرار",
    "field.projectTitle.placeholder": "مثال: تحسين استراتيجية توزيع e-META",
    "group.analysis": "2. تحليل استراتيجي — مستوى استشاري",
    "field.problem.label": "المشكلة الأساسية",
    "field.problem.placeholder": "اشرح بوضوح المشكلة أو القرار أو التحدي.",
    "field.objectives.label": "الأهداف الرئيسية",
    "field.objectives.placeholder": "اذكر 3 إلى 5 أهداف.",
    "field.constraints.label": "القيود والمخاطر",
    "field.constraints.placeholder": "ميزانية محدودة، مواعيد ضيقة، موارد بشرية، تنظيمات…",
    "field.kpis.label": "مؤشرات الأداء المستهدفة (KPIs)",
    "field.kpis.placeholder": "مثال: الإيراد الشهري، الهامش، المستخدمون النشطون، الزمن، رضا العملاء…",
    "field.resources.label": "الموارد المتاحة",
    "field.resources.placeholder": "فريق، أدوات، شركاء، بيانات، ميزانية أولية، بنية…",
    "field.deliverables.label": "المخرجات المتوقعة",
    "field.deliverables.placeholder": "مثال: مذكرة استراتيجية، خطة عمل، خطة أعمال، نموذج مالي، عرض تقديمي…",
    "field.successIndicators.label": "مؤشرات النجاح (كيف تعرف أنه نجاح؟)",
    "field.successIndicators.placeholder": "مثال: تحقيق مبيعات، توقيع شراكة، نجاح تجربة…",
    "field.context.label": "سياق تفصيلي (اختياري لكنه مُستحسن)",
    "field.context.placeholder": "اشرح الخلفية والأطراف والقرارات السابقة والقيود…",
    "group.budget": "3. الميزانية والجدول الزمني والأولوية",
    "field.budgetMin.label": "الحد الأدنى للميزانية",
    "field.budgetMin.placeholder": "مثال: 1000000",
    "field.budgetMax.label": "الحد الأقصى (إن وجد)",
    "field.budgetMax.placeholder": "مثال: 2500000",
    "field.deadline.label": "الموعد المرغوب لاستلام الخلاصة",
    "field.deadline.placeholder": "مثال: 7 أيام، شهر، قبل تاريخ محدد…",
    "field.urgency.label": "مستوى الاستعجال (1 منخفض — 5 حرج)",
    "field.urgency.low": "منخفض",
    "field.urgency.medium": "طبيعي",
    "field.urgency.high": "حرج",
    "group.output": "4. طريقة التسليم وبيانات التواصل",
    "field.outputMode.label": "طريقة التسليم (يمكن اختيار أكثر من خيار)",
    "field.outputMode.email": "بريد إلكتروني مفصل",
    "field.outputMode.whatsapp": "رسالة واتساب منظمة",
    "field.outputMode.pdf": "خلاصة PDF",
    "field.outputMode.display": "عرض داخل e-META",
    "field.email.label": "البريد الإلكتروني (للتسليم عبر البريد أو PDF)",
    "field.email.placeholder": "email@domain.com",
    "field.whatsapp.label": "رقم واتساب مع رمز الدولة",
    "field.whatsapp.placeholder": "+221782607212",
    "field.fileLink.label": "رابط ملف/مجلد (اختياري)",
    "field.fileLink.placeholder": "Google Drive / Dropbox / Notion / PDF…",
    "field.consent.label": "أوافق على استخدام المعلومات فقط لإنشاء تحليل e-META. لن يتم بيع أو مشاركة أي بيانات شخصية مع أطراف ثالثة.",
    "form.submit": "إرسال الطلب",
    "form.reset": "إعادة ضبط النموذج",
    "footer.text": "e-META — مساعد قرار بالذكاء الاصطناعي. تحليل استراتيجي متميز لمشاريعك.",
    "footer.privacy": "سياسة الخصوصية",
  }
};

// --------- helpers
function getLang() {
  return localStorage.getItem("lang") || "fr";
}

function setHtmlLangDir(lang) {
  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "ar");
}

// Apply text translations
function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.fr;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Placeholders: data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
}

// Burger menu
function setupBurger() {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");
  if (!burger || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

// Language switcher
function setupLangSwitcher() {
  const select = document.getElementById("languageSwitcher");
  if (!select) return;

  const current = getLang();
  select.value = current;

  select.addEventListener("change", () => {
    const lang = select.value;
    localStorage.setItem("lang", lang);
    setHtmlLangDir(lang);
    applyTranslations(lang);
  });
}

// WhatsApp CTA (global)
function setupWhatsAppCTA() {
  document.querySelectorAll(".whatsappBtnGlobal").forEach(btn => {
    btn.addEventListener("click", () => {
      // mets ici ton lien officiel WhatsApp (numéro e-META)
      const number = "221782607212";
      const msg = encodeURIComponent("Bonjour e-META, je veux faire une requête personnalisée.");
      window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
    });
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  setHtmlLangDir(lang);
  applyTranslations(lang);
  setupLangSwitcher();
  setupBurger();
  setupWhatsAppCTA();
});
