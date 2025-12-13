/* =========================================================
   e-META v5 PRO — script.js (stable)
   - Burger menu mobile
   - i18n FR/EN/ES/AR (text + placeholders)
   - RTL auto for Arabic
   - WhatsApp global button
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------
     1) DICTIONNAIRE TRADUCTIONS
     --------------------------- */
  const TRANSLATIONS = {
    fr: {
      tagline: "Assistant IA multilingue de prise de décision",
      "nav.home": "Accueil",
      "nav.form": "Formulaire",
      "nav.privacy": "Confidentialité",

      "btn.whatsapp": "Requête personnalisée",

      "hero.title": "Donnez à vos décisions le niveau d’un cabinet de consulting premium",
      "hero.subtitle":
        "e-META analyse votre contexte, vos objectifs, vos contraintes, vos KPIs et vos ressources pour générer une feuille de route claire, exploitable et documentée.",
      "hero.point1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
      "hero.point2": "Synthèse actionnable : recommandations, plan d’actions, livrables.",
      "hero.point3": "Restitution personnalisée : Email, WhatsApp, PDF, ou simple affichage.",
      "hero.cta": "Commencer une analyse stratégique",
      "hero.badge.title": "Version PRO v5.0",
      "hero.badge.text": "Formulaire ultra-premium, inspiré des cabinets Deloitte / EY.",
      "hero.note": "Temps estimé : 5 à 10 minutes pour remplir le formulaire, gain : des heures de réflexion structurée.",

      "form.title": "Formulaire e-META – Version Ultra-Premium (Consulting Business)",
      "form.intro":
        "Plus vos réponses sont précises, plus la synthèse de e-META sera professionnelle et exploitable.",

      "group.general": "1. Informations générales",
      "group.analysis": "2. Analyse stratégique – Niveau cabinet de conseil",
      "group.budget": "3. Budget, délais & urgence",
      "group.output": "4. Mode de restitution & contact",

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

      "field.problem.label": "Problème central à résoudre",
      "field.problem.placeholder":
        "Décrivez clairement le problème, la décision ou le défi principal auquel vous faites face.",

      "field.objectives.label": "Objectifs principaux",
      "field.objectives.placeholder": "Listez 3 à 5 objectifs que vous souhaitez atteindre.",

      "field.constraints.label": "Contraintes & risques majeurs",
      "field.constraints.placeholder":
        "Budget limité, délais courts, ressources humaines, contraintes réglementaires, etc.",

      "field.kpis.label": "KPIs / Indicateurs de performance visés",
      "field.kpis.placeholder":
        "Ex : CA mensuel, marge, clients actifs, délais, satisfaction, etc.",

      "field.resources.label": "Ressources déjà disponibles",
      "field.resources.placeholder":
        "Équipe, outils, partenaires, données, budget initial, infrastructure, etc.",

      "field.deliverables.label": "Livrables attendus",
      "field.deliverables.placeholder":
        "Ex : note stratégique, plan d’actions, business plan, pitch deck, etc.",

      "field.successIndicators.label":
        "Indicateurs de succès (comment saurez-vous que c’est une réussite ?)",
      "field.successIndicators.placeholder":
        "Ex : atteindre un niveau de ventes, signer un partenariat, valider un pilote, etc.",

      "field.context.label": "Contexte détaillé (facultatif mais fortement recommandé)",
      "field.context.placeholder":
        "Contexte global, historique, acteurs, décisions déjà prises, éléments clés, etc.",

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
      "field.fileLink.hint":
      "Collez ici un lien vers un fichier (Google Drive, Dropbox, Notion, PDF en ligne…)",

      "field.consent.label":
        "J’accepte que les informations fournies soient utilisées uniquement pour générer une analyse e-META. Aucune donnée personnelle ne sera revendue ou partagée à des tiers.",

      "form.submit": "Envoyer ma requête",
      "form.reset": "Réinitialiser le formulaire",

      "footer.text":
        "e-META – Assistant IA de décision. Donnez à vos projets un niveau d’analyse stratégique premium.",
      "footer.privacy": "Politique de confidentialité",
    },

    en: {
      tagline: "Multilingual AI decision assistant",
      "nav.home": "Home",
      "nav.form": "Form",
      "nav.privacy": "Privacy",

      "btn.whatsapp": "Custom request",

      "hero.title": "Give your decisions a premium consulting-firm level",
      "hero.subtitle":
        "e-META analyzes your context, goals, constraints, KPIs and resources to generate a clear, actionable and documented roadmap.",
      "hero.point1": "Structured analysis: problem, objectives, constraints, risks, KPIs.",
      "hero.point2": "Actionable synthesis: recommendations, action plan, deliverables.",
      "hero.point3": "Personalized output: Email, WhatsApp, PDF, or on-screen display.",
      "hero.cta": "Start a strategic analysis",
      "hero.badge.title": "PRO v5.0",
      "hero.badge.text": "Ultra-premium form inspired by Deloitte / EY-style consulting.",
      "hero.note": "Estimated time: 5–10 minutes to fill out — saving hours of structured thinking.",

      "form.title": "e-META Form — Ultra-Premium Version (Consulting Business)",
      "form.intro": "The more precise your answers, the more professional and usable your e-META synthesis will be.",

      "group.general": "1. General information",
      "group.analysis": "2. Strategic analysis — Consulting level",
      "group.budget": "3. Budget, timing & urgency",
      "group.output": "4. Output & contact",

      "field.domain.label": "Domain / Main theme",
      "field.domain.placeholder": "Select a domain",
      "field.domain.strategy": "Strategy & Governance",
      "field.domain.finance": "Finance & Business model",
      "field.domain.marketing": "Marketing & Growth",
      "field.domain.operations": "Operations & Supply Chain",
      "field.domain.hr": "Human Resources & Organization",
      "field.domain.it": "Information Systems & AI",
      "field.domain.legal": "Legal & Compliance",
      "field.domain.impact": "Social & Environmental Impact",
      "field.domain.other": "Other (specify in context)",

      "field.projectType.label": "Project type",
      "field.projectType.placeholder": "Select project type",
      "field.projectType.diagnostic": "Diagnosis & Analysis",
      "field.projectType.business": "Business model / Business plan",
      "field.projectType.roadmap": "Strategic roadmap",
      "field.projectType.process": "Process optimization",
      "field.projectType.prototype": "Prototyping / MVP",
      "field.projectType.funding": "Funding deck / Fundraising",
      "field.projectType.other": "Other",

      "field.projectTitle.label": "Short project/decision title",
      "field.projectTitle.placeholder": "e.g., Optimizing e-META distribution strategy",

      "field.problem.label": "Core problem to solve",
      "field.problem.placeholder": "Clearly describe the main problem, decision or challenge you are facing.",

      "field.objectives.label": "Main objectives",
      "field.objectives.placeholder": "List 3–5 objectives you want to achieve.",

      "field.constraints.label": "Key constraints & risks",
      "field.constraints.placeholder": "Limited budget, tight deadlines, staffing, regulations, etc.",

      "field.kpis.label": "Target KPIs / performance indicators",
      "field.kpis.placeholder": "e.g., monthly revenue, margin, active users, processing time, satisfaction, etc.",

      "field.resources.label": "Available resources",
      "field.resources.placeholder": "Team, tools, partners, data, initial budget, infrastructure, etc.",

      "field.deliverables.label": "Expected deliverables",
      "field.deliverables.placeholder": "e.g., strategy memo, action plan, business plan, pitch deck, etc.",

      "field.successIndicators.label": "Success indicators (how will you know it worked?)",
      "field.successIndicators.placeholder": "e.g., reach sales targets, sign a partnership, validate a pilot, etc.",

      "field.context.label": "Detailed context (optional but strongly recommended)",
      "field.context.placeholder": "Provide background, stakeholders, decisions made so far, key elements, etc.",

      "field.budgetMin.label": "Minimum budget",
      "field.budgetMin.placeholder": "e.g., 1000000",
      "field.budgetMax.label": "Maximum budget (if any)",
      "field.budgetMax.placeholder": "e.g., 2500000",

      "field.deadline.label": "Desired time to receive the synthesis/recommendation",
      "field.deadline.placeholder": "e.g., 7 days, 1 month, before a specific date...",

      "field.urgency.label": "Urgency level (1 = low, 5 = critical)",
      "field.urgency.low": "Low",
      "field.urgency.medium": "Normal",
      "field.urgency.high": "Critical",

      "field.outputMode.label": "Desired output (you can select multiple)",
      "field.outputMode.email": "Detailed email",
      "field.outputMode.whatsapp": "Structured WhatsApp message",
      "field.outputMode.pdf": "PDF synthesis",
      "field.outputMode.display": "On-screen display in e-META",

      "field.email.label": "Email (required for Email/PDF)",
      "field.email.placeholder": "email@domain.com",
      "field.whatsapp.label": "WhatsApp number with country code",
      "field.whatsapp.placeholder": "+221782607212",

      "field.fileLink.label": "File or folder link (optional)",
      "field.fileLink.placeholder": "Google Drive, Dropbox, Notion, PDF link, etc.",
      "field.fileLink.hint":
      "Paste a link to a file (Google Drive, Dropbox, Notion, online PDF…)",

      "field.consent.label":
        "I agree that the provided information will be used only to generate an e-META analysis. No personal data will be sold or shared with third parties.",

      "form.submit": "Submit my request",
      "form.reset": "Reset form",

      "footer.text": "e-META — AI decision assistant. Give your projects a premium strategic analysis level.",
      "footer.privacy": "Privacy policy",
    },

    es: {
      tagline: "Asistente de decisión con IA multilingüe",
      "nav.home": "Inicio",
      "nav.form": "Formulario",
      "nav.privacy": "Privacidad",

      "btn.whatsapp": "Solicitud personalizada",

      "hero.title": "Dale a tus decisiones el nivel de una consultora premium",
      "hero.subtitle":
        "e-META analiza tu contexto, objetivos, limitaciones, KPIs y recursos para generar una hoja de ruta clara, accionable y documentada.",
      "hero.point1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
      "hero.point2": "Síntesis accionable: recomendaciones, plan de acción, entregables.",
      "hero.point3": "Entrega personalizada: Email, WhatsApp, PDF o visualización en pantalla.",
      "hero.cta": "Empezar un análisis estratégico",
      "hero.badge.title": "Versión PRO v5.0",
      "hero.badge.text": "Formulario ultra-premium inspirado en consultoras tipo Deloitte / EY.",
      "hero.note": "Tiempo estimado: 5–10 minutos — ahorro: horas de reflexión estructurada.",

      "form.title": "Formulario e-META — Versión Ultra-Premium (Consultoría)",
      "form.intro": "Cuanto más precisas sean tus respuestas, más profesional y útil será la síntesis de e-META.",

      "group.general": "1. Información general",
      "group.analysis": "2. Análisis estratégico — Nivel consultoría",
      "group.budget": "3. Presupuesto, plazos y urgencia",
      "group.output": "4. Entrega y contacto",

      "field.domain.label": "Dominio / Tema principal",
      "field.domain.placeholder": "Selecciona un dominio",
      "field.domain.strategy": "Estrategia y gobernanza",
      "field.domain.finance": "Finanzas y modelo de negocio",
      "field.domain.marketing": "Marketing y crecimiento",
      "field.domain.operations": "Operaciones y cadena de suministro",
      "field.domain.hr": "Recursos humanos y organización",
      "field.domain.it": "Sistemas de información e IA",
      "field.domain.legal": "Legal y cumplimiento",
      "field.domain.impact": "Impacto social y ambiental",
      "field.domain.other": "Otro (especificar en el contexto)",

      "field.projectType.label": "Tipo de proyecto",
      "field.projectType.placeholder": "Selecciona el tipo de proyecto",
      "field.projectType.diagnostic": "Diagnóstico y análisis",
      "field.projectType.business": "Modelo de negocio / Plan de negocio",
      "field.projectType.roadmap": "Hoja de ruta estratégica",
      "field.projectType.process": "Optimización de procesos",
      "field.projectType.prototype": "Prototipo / MVP",
      "field.projectType.funding": "Dossier de financiación / fundraising",
      "field.projectType.other": "Otro",

      "field.projectTitle.label": "Título corto del proyecto o decisión",
      "field.projectTitle.placeholder": "Ej.: Optimización de la estrategia de distribución de e-META",

      "field.problem.label": "Problema principal a resolver",
      "field.problem.placeholder": "Describe claramente el problema, la decisión o el reto principal.",

      "field.objectives.label": "Objetivos principales",
      "field.objectives.placeholder": "Enumera 3 a 5 objetivos que deseas alcanzar.",

      "field.constraints.label": "Restricciones y riesgos clave",
      "field.constraints.placeholder": "Presupuesto limitado, plazos ajustados, equipo, normativa, etc.",

      "field.kpis.label": "KPIs / Indicadores objetivo",
      "field.kpis.placeholder": "Ej.: ingresos mensuales, margen, usuarios activos, tiempo de respuesta, satisfacción, etc.",

      "field.resources.label": "Recursos disponibles",
      "field.resources.placeholder": "Equipo, herramientas, partners, datos, presupuesto inicial, infraestructura, etc.",

      "field.deliverables.label": "Entregables esperados",
      "field.deliverables.placeholder": "Ej.: nota estratégica, plan de acción, plan de negocio, pitch deck, etc.",

      "field.successIndicators.label": "Indicadores de éxito (¿cómo sabrás que funcionó?)",
      "field.successIndicators.placeholder": "Ej.: alcanzar ventas, firmar un partner, validar un piloto, etc.",

      "field.context.label": "Contexto detallado (opcional pero recomendado)",
      "field.context.placeholder": "Contexto, historial, actores, decisiones tomadas, elementos clave, etc.",

      "field.budgetMin.label": "Presupuesto mínimo",
      "field.budgetMin.placeholder": "Ej.: 1000000",
      "field.budgetMax.label": "Presupuesto máximo (si aplica)",
      "field.budgetMax.placeholder": "Ej.: 2500000",

      "field.deadline.label": "Plazo deseado para recibir la síntesis/recomendación",
      "field.deadline.placeholder": "Ej.: 7 días, 1 mes, antes de una fecha concreta...",

      "field.urgency.label": "Nivel de urgencia (1 = baja, 5 = crítica)",
      "field.urgency.low": "Baja",
      "field.urgency.medium": "Normal",
      "field.urgency.high": "Crítica",

      "field.outputMode.label": "Modo de entrega (puedes marcar varios)",
      "field.outputMode.email": "Email detallado",
      "field.outputMode.whatsapp": "Mensaje de WhatsApp estructurado",
      "field.outputMode.pdf": "Síntesis en PDF",
      "field.outputMode.display": "Visualización en e-META",

      "field.email.label": "Email (para entrega por Email o PDF)",
      "field.email.placeholder": "correo@dominio.com",
      "field.whatsapp.label": "Número WhatsApp con prefijo",
      "field.whatsapp.placeholder": "+221782607212",

      "field.fileLink.label": "Enlace a archivo o carpeta (opcional)",
      "field.fileLink.placeholder": "Google Drive, Dropbox, Notion, PDF, etc.",
      "field.fileLink.hint":
      "Pegue aquí un enlace a un archivo (Google Drive, Dropbox, Notion, PDF en línea…)",

      "field.consent.label":
        "Acepto que la información proporcionada se use únicamente para generar un análisis e-META. No se venderán ni compartirán datos personales con terceros.",

      "form.submit": "Enviar mi solicitud",
      "form.reset": "Restablecer formulario",

      "footer.text": "e-META — asistente de decisión con IA. Lleva tus proyectos a un nivel premium de análisis estratégico.",
      "footer.privacy": "Política de privacidad",
    },

    ar: {
      tagline: "مساعد قرار بالذكاء الاصطناعي متعدد اللغات",
      "nav.home": "الرئيسية",
      "nav.form": "النموذج",
      "nav.privacy": "الخصوصية",

      "btn.whatsapp": "طلب مخصص",

      "hero.title": "امنح قراراتك مستوى شركة استشارات احترافية",
      "hero.subtitle":
        "يقوم e-META بتحليل السياق والأهداف والقيود ومؤشرات الأداء والموارد لإنشاء خارطة طريق واضحة وقابلة للتنفيذ وموثّقة.",
      "hero.point1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
      "hero.point2": "ملخص قابل للتنفيذ: توصيات، خطة عمل، مخرجات.",
      "hero.point3": "مخرجات مخصصة: بريد إلكتروني، واتساب، PDF أو عرض مباشر.",
      "hero.cta": "ابدأ تحليلاً استراتيجياً",
      "hero.badge.title": "الإصدار PRO v5.0",
      "hero.badge.text": "نموذج فائق الاحتراف مستوحى من Deloitte / EY.",
      "hero.note": "الوقت المتوقع: 5–10 دقائق — وتوفير ساعات من التفكير المنظم.",

      "form.title": "نموذج e-META — النسخة فائقة الاحتراف (استشارات أعمال)",
      "form.intro": "كلما كانت إجاباتك أدق، كانت خلاصة e-META أكثر احترافية وقابلية للاستخدام.",

      "group.general": "1. معلومات عامة",
      "group.analysis": "2. تحليل استراتيجي — مستوى الاستشارات",
      "group.budget": "3. الميزانية والمدة والأولوية",
      "group.output": "4. المخرجات والتواصل",

      "field.domain.label": "المجال / الموضوع الرئيسي",
      "field.domain.placeholder": "اختر مجالاً",
      "field.domain.strategy": "الاستراتيجية والحوكمة",
      "field.domain.finance": "المالية ونموذج الأعمال",
      "field.domain.marketing": "التسويق والنمو",
      "field.domain.operations": "العمليات وسلسلة الإمداد",
      "field.domain.hr": "الموارد البشرية والتنظيم",
      "field.domain.it": "أنظمة المعلومات والذكاء الاصطناعي",
      "field.domain.legal": "القانون والامتثال",
      "field.domain.impact": "الأثر الاجتماعي والبيئي",
      "field.domain.other": "أخرى (اذكرها في السياق)",

      "field.projectType.label": "نوع المشروع",
      "field.projectType.placeholder": "اختر نوع المشروع",
      "field.projectType.diagnostic": "تشخيص وتحليل",
      "field.projectType.business": "نموذج أعمال / خطة أعمال",
      "field.projectType.roadmap": "خارطة طريق استراتيجية",
      "field.projectType.process": "تحسين العمليات",
      "field.projectType.prototype": "نموذج أولي / MVP",
      "field.projectType.funding": "ملف تمويل / جمع تمويل",
      "field.projectType.other": "أخرى",

      "field.projectTitle.label": "عنوان مختصر للمشروع أو القرار",
      "field.projectTitle.placeholder": "مثال: تحسين استراتيجية توزيع e-META",

      "field.problem.label": "المشكلة الأساسية المطلوب حلها",
      "field.problem.placeholder": "صف المشكلة أو القرار أو التحدي الرئيسي بوضوح.",

      "field.objectives.label": "الأهداف الرئيسية",
      "field.objectives.placeholder": "اذكر 3 إلى 5 أهداف ترغب في تحقيقها.",

      "field.constraints.label": "القيود والمخاطر الرئيسية",
      "field.constraints.placeholder": "ميزانية محدودة، مواعيد ضيقة، فريق، لوائح، إلخ.",

      "field.kpis.label": "مؤشرات الأداء المستهدفة (KPIs)",
      "field.kpis.placeholder": "مثال: الإيرادات الشهرية، الهامش، المستخدمون النشطون، وقت المعالجة، الرضا، إلخ.",

      "field.resources.label": "الموارد المتاحة",
      "field.resources.placeholder": "فريق، أدوات، شركاء، بيانات، ميزانية أولية، بنية تحتية، إلخ.",

      "field.deliverables.label": "المخرجات المتوقعة",
      "field.deliverables.placeholder": "مثال: مذكرة استراتيجية، خطة عمل، خطة أعمال، عرض تقديمي، إلخ.",

      "field.successIndicators.label": "مؤشرات النجاح (كيف ستعرف أنه نجح؟)",
      "field.successIndicators.placeholder": "مثال: تحقيق مبيعات، توقيع شراكة، نجاح تجربة أولية، إلخ.",

      "field.context.label": "سياق تفصيلي (اختياري لكنه مُوصى به)",
      "field.context.placeholder": "اشرح الخلفية والأطراف والقرارات السابقة والعناصر المهمة.",

      "field.budgetMin.label": "الميزانية الدنيا",
      "field.budgetMin.placeholder": "مثال: 1000000",
      "field.budgetMax.label": "الميزانية القصوى (إن وجدت)",
      "field.budgetMax.placeholder": "مثال: 2500000",

      "field.deadline.label": "المدة المطلوبة للحصول على التوصية/الخلاصة",
      "field.deadline.placeholder": "مثال: 7 أيام، شهر، قبل تاريخ محدد...",

      "field.urgency.label": "مستوى الأولوية (1 منخفض، 5 حرج)",
      "field.urgency.low": "منخفض",
      "field.urgency.medium": "عادي",
      "field.urgency.high": "حرج",

      "field.outputMode.label": "طريقة المخرجات (يمكن اختيار أكثر من خيار)",
      "field.outputMode.email": "بريد إلكتروني مفصل",
      "field.outputMode.whatsapp": "رسالة واتساب منظمة",
      "field.outputMode.pdf": "ملخص PDF",
      "field.outputMode.display": "عرض مباشر داخل e-META",

      "field.email.label": "البريد الإلكتروني (للبريد/‏PDF)",
      "field.email.placeholder": "email@domain.com",
      "field.whatsapp.label": "رقم واتساب مع رمز الدولة",
      "field.whatsapp.placeholder": "+221782607212",

      "field.fileLink.label": "رابط ملف أو مجلد (اختياري)",
      "field.fileLink.placeholder": "Google Drive أو Dropbox أو Notion أو PDF...",
      "field.fileLink.hint":
      "الصق هنا رابطًا لملف (Google Drive أو Dropbox أو Notion أو ملف PDF عبر الإنترنت…)",

      "field.consent.label":
        "أوافق على استخدام المعلومات المقدمة فقط لإنشاء تحليل e-META. لن يتم بيع أي بيانات شخصية أو مشاركتها مع أطراف ثالثة.",

      "form.submit": "إرسال الطلب",
      "form.reset": "إعادة ضبط النموذج",

      "footer.text": "e-META — مساعد قرار بالذكاء الاصطناعي. ارتقِ بمشاريعك إلى مستوى تحليل استراتيجي احترافي.",
      "footer.privacy": "سياسة الخصوصية",
    },
  };

  /* ---------------------------
     2) HELPERS
     --------------------------- */
  function getDefaultLang() {
    const saved = localStorage.getItem("emeta_lang");
    if (saved && TRANSLATIONS[saved]) return saved;

    const htmlLang = document.documentElement.lang?.toLowerCase();
    if (htmlLang && TRANSLATIONS[htmlLang]) return htmlLang;

    // fallback
    return "fr";
  }

  function setHtmlLangDir(lang) {
    document.documentElement.lang = lang;
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }

  function t(lang, key) {
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || null;
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = dict[key];
      if (typeof value === "string") {
        el.setAttribute("placeholder", value);
      }
    });

    // Optional: aria-label translations (if you add later)
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = dict[key];
      if (typeof value === "string") {
        el.setAttribute("aria-label", value);
      }
    });
  }

  /* ---------------------------
     3) BURGER MENU (SAFE)
     --------------------------- */
  function initBurger() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;

    function closeMenu() {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeMenu());
    });

    // Close on outside click (mobile UX)
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!target) return;
      const clickedInside =
        burger.contains(target) || nav.contains(target);
      if (!clickedInside && nav.classList.contains("is-open")) {
        closeMenu();
      }
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------------------
     4) LANGUAGE SWITCHER
     --------------------------- */
  function initLanguageSwitcher() {
    const select = document.getElementById("languageSwitcher");
    if (!select) return;

    // set initial value
    const initialLang = getDefaultLang();
    if (TRANSLATIONS[initialLang]) select.value = initialLang;

    select.addEventListener("change", () => {
      const lang = select.value;
      if (!TRANSLATIONS[lang]) return;
      localStorage.setItem("emeta_lang", lang);
      setHtmlLangDir(lang);
      applyTranslations(lang);
    });
  }

  /* ---------------------------
     5) WHATSAPP GLOBAL
     --------------------------- */
  function initWhatsAppGlobal() {
    // Replace by your real WA number if needed
    const DEFAULT_WA = "221782607212";

    const buttons = document.querySelectorAll(".whatsappBtnGlobal");
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = getDefaultLang();
        const msg =
          lang === "ar"
            ? "مرحبًا، أريد طلبًا مخصصًا عبر e-META."
            : lang === "es"
            ? "Hola, quiero una solicitud personalizada vía e-META."
            : lang === "en"
            ? "Hi, I want a custom request via e-META."
            : "Bonjour, je veux une requête personnalisée via e-META.";

        const url = `https://wa.me/${DEFAULT_WA}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank", "noopener,noreferrer");
      });
    });
  }

  /* ---------------------------
     6) INIT (NO BREAK)
     --------------------------- */
  function init() {
    const lang = getDefaultLang();
    setHtmlLangDir(lang);

    // Apply translations before any UI interaction
    applyTranslations(lang);

    initBurger();
    initLanguageSwitcher();
    initWhatsAppGlobal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
