/* =====================================================
   e-META — i18n.js (PRO) — FR / EN / ES / AR
   - Toutes les valeurs sont des STRING (évite [object Object])
   - Clés alignées avec data-i18n + data-i18n-placeholder
===================================================== */

window.I18N = {
  /* =========================
     FR — Français
  ========================= */
  fr: {
    "meta.title": "e-META — Assistant IA multilingue",
    "tagline": "Assistant IA multilingue de prise de décision",

    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "cta.custom": "Requête personnalisée",

    "hero.title": "Prenez des décisions au niveau d’un cabinet de conseil premium",
    "hero.subtitle": "e-META analyse votre contexte, objectifs, contraintes, risques et indicateurs clés afin de produire une synthèse décisionnelle claire et exploitable.",
    "hero.p1": "Analyse structurée : problème, objectifs, contraintes, risques, KPIs.",
    "hero.p2": "Recommandations actionnables et scénarios d’aide à la décision.",
    "hero.p3": "Restitution personnalisée : affichage, e-mail, WhatsApp ou PDF.",
    "hero.cta": "Démarrer une analyse stratégique",
    "hero.note": "e-META n’est pas un chatbot. C’est un moteur d’intelligence décisionnelle.",
    "hero.metric.value": "+12 heures",
    "hero.metric.label": "d’analyse stratégique simulée",
    "hero.metric.sub": "Équivalent au travail combiné d’un consultant senior, d’un analyste métier et d’un stratège décisionnel.",

    "form.title": "Formulaire e-META — Version Ultra-Premium",
    "form.subtitle": "Complétez les champs ci-dessous pour recevoir une analyse stratégique structurée, fiable et orientée décision.",
    "form.intro": "Complétez les champs ci-dessous pour recevoir votre analyse stratégique personnalisée.",

    "form.group.general": "1. Informations générales",
    "form.group.analysis": "2. Analyse stratégique",
    "form.group.budget": "3. Budget & urgence",
    "form.group.output": "4. Restitution & contact",

    "form.domain.label": "Domaine principal",
    "form.domain.select": "Sélectionnez un domaine",
    "form.domain.business": "Business / Stratégie",
    "form.domain.marketing": "Marketing / Vente",
    "form.domain.finance": "Finance",
    "form.domain.hr": "RH / Management",
    "form.domain.tech": "Tech / Produit",
    "form.domain.legal": "Juridique / Conformité",
    "form.domain.other": "Autre",

    "form.projectType.label": "Type de projet",
    "form.projectType.select": "Sélectionnez un type",
    "form.projectType.launch": "Lancement",
    "form.projectType.optimization": "Optimisation",
    "form.projectType.audit": "Audit / Diagnostic",
    "form.projectType.crisis": "Crise / Urgence",
    "form.projectType.personal": "Décision personnelle",
    "form.projectType.other": "Autre",

    "form.projectTitle.label": "Intitulé du projet",
    "form.projectTitle.placeholder": "Ex : Lancement d’un nouveau service digital",

    "form.problem.label": "Problématique principale",
    "form.problem.placeholder": "Décrivez clairement le problème ou la décision à prendre…",

    "form.objectives.label": "Objectifs",
    "form.objectives.placeholder": "Listez les objectifs (court/moyen/long terme)…",

    "form.constraints.label": "Contraintes",
    "form.constraints.placeholder": "Budget, délais, ressources, règles, contexte…",

    "form.kpis.label": "Indicateurs (KPIs) — optionnel",
    "form.kpis.placeholder": "Ex : CA, marge, conversion, satisfaction, délais…",

    "form.resources.label": "Ressources disponibles — optionnel",
    "form.resources.placeholder": "Équipe, outils, partenaires, données, temps…",

    "form.deliverables.label": "Livrables attendus — optionnel",
    "form.deliverables.placeholder": "Ex : plan d’action, roadmap, scénarios, recommandations…",

    "form.successIndicators.label": "Critères de succès — optionnel",
    "form.successIndicators.placeholder": "À quoi reconnaissez-vous que la décision est bonne ?",

    "form.context.label": "Contexte complémentaire — optionnel",
    "form.context.placeholder": "Historique, environnement, détails utiles…",

    "form.externalLink.label": "Lien externe (docs / site) — optionnel",
    "form.externalLink.placeholder": "https://...",

    "form.budgetMin.label": "Budget minimum",
    "form.budgetMax.label": "Budget maximum",

    "form.deadline.label": "Délai / échéance",
    "form.deadline.placeholder": "Ex : 7 jours, 1 mois, avant le 15/01…",

    "form.urgency.label": "Niveau d’urgence",
    "form.urgency.low": "Faible",
    "form.urgency.medium": "Moyen",
    "form.urgency.high": "Élevé",

    "form.output.email": "Restitution par e-mail",
    "form.output.whatsapp": "Restitution via WhatsApp",
    "form.output.pdf": "Rapport PDF",
    "form.output.display": "Affichage direct à l’écran",

    "form.contact.email": "Adresse e-mail (si sélectionné)",
    "form.contact.email.placeholder": "exemple@email.com",
    "form.contact.whatsapp": "Numéro WhatsApp (si sélectionné)",
    "form.contact.whatsapp.placeholder": "+221 XX XXX XX XX",

    "form.consent": "J’accepte que mes informations soient utilisées uniquement pour produire cette analyse décisionnelle.",
    "form.send": "Envoyer la requête",
    "form.reset": "Réinitialiser le formulaire",

    "privacy.meta.title": "Politique de confidentialité — e-META",
    "privacy.title": "Politique de confidentialité",
    "privacy.intro": "Votre confiance est essentielle. Cette politique explique de manière transparente comment e-META collecte, utilise et protège vos données.",

    "privacy.block1.title": "Protection des données",
    "privacy.point1": "e-META collecte uniquement les informations nécessaires pour générer l’analyse demandée et améliorer la qualité du rendu.",
    "privacy.point2": "Aucune donnée n’est vendue, louée ou exploitée à des fins publicitaires ou commerciales.",
    "privacy.point3": "Les données sont utilisées uniquement pour le traitement de votre demande, puis transmises via le canal choisi (affichage, e-mail, WhatsApp, PDF).",
    "privacy.point4": "Vous pouvez demander la suppression de vos données à tout moment.",

    "privacy.block2.title": "Responsabilité et usage",
    "privacy.point5": "e-META est un outil d’aide à la décision fondé sur une analyse structurée des informations fournies par l’utilisateur.",
    "privacy.point6": "Les analyses et recommandations générées ne constituent ni un conseil juridique, financier, médical ou réglementaire.",
    "privacy.point7": "L’utilisateur demeure seul responsable des décisions prises sur la base des résultats fournis par e-META.",
    "privacy.point8": "Aucune décision automatisée n’est imposée : e-META assiste, éclaire et structure la réflexion stratégique.",

    "privacy.back": "← Retour à la page principale",

    "footer.text": "e-META © 2025 — Assistant IA de décision stratégique",
    "footer.privacy": "Politique de confidentialité"
  },

  /* =========================
     EN — English
  ========================= */
  en: {
    "meta.title": "e-META — Multilingual AI Decision Assistant",
    "tagline": "Multilingual AI decision-making assistant",

    "nav.home": "Home",
    "nav.form": "Form",
    "nav.privacy": "Privacy",

    "cta.custom": "Custom request",

    "hero.title": "Make decisions at a premium consulting-firm level",
    "hero.subtitle": "e-META analyzes your context, goals, constraints, risks and key indicators to produce a clear, actionable decision brief.",
    "hero.p1": "Structured analysis: problem, goals, constraints, risks, KPIs.",
    "hero.p2": "Actionable recommendations and decision scenarios.",
    "hero.p3": "Personalized delivery: on-screen, email, WhatsApp or PDF.",
    "hero.cta": "Start a strategic analysis",
    "hero.note": "e-META is not a chatbot. It’s a decision-intelligence engine.",
    "hero.metric.value": "+12 hours",
    "hero.metric.label": "of simulated strategic analysis",
    "hero.metric.sub": "Equivalent to the combined work of a senior consultant, a business analyst, and a decision strategist.",

    "form.title": "e-META Form — Ultra-Premium Version",
    "form.subtitle": "Fill in the fields below to receive a structured, reliable, decision-oriented strategic analysis.",
    "form.intro": "Fill in the fields below to receive your personalized strategic analysis.",

    "form.group.general": "1. General information",
    "form.group.analysis": "2. Strategic analysis",
    "form.group.budget": "3. Budget & urgency",
    "form.group.output": "4. Delivery & contact",

    "form.domain.label": "Main domain",
    "form.domain.select": "Select a domain",
    "form.domain.business": "Business / Strategy",
    "form.domain.marketing": "Marketing / Sales",
    "form.domain.finance": "Finance",
    "form.domain.hr": "HR / Management",
    "form.domain.tech": "Tech / Product",
    "form.domain.legal": "Legal / Compliance",
    "form.domain.other": "Other",

    "form.projectType.label": "Project type",
    "form.projectType.select": "Select a type",
    "form.projectType.launch": "Launch",
    "form.projectType.optimization": "Optimization",
    "form.projectType.audit": "Audit / Diagnosis",
    "form.projectType.crisis": "Crisis / Urgent decision",
    "form.projectType.personal": "Personal decision",
    "form.projectType.other": "Other",

    "form.projectTitle.label": "Project title",
    "form.projectTitle.placeholder": "e.g., Launching a new digital service",

    "form.problem.label": "Main problem / decision",
    "form.problem.placeholder": "Clearly describe the problem or decision to make…",

    "form.objectives.label": "Objectives",
    "form.objectives.placeholder": "List the objectives (short/mid/long term)…",

    "form.constraints.label": "Constraints",
    "form.constraints.placeholder": "Budget, timeline, resources, rules, context…",

    "form.kpis.label": "KPIs (optional)",
    "form.kpis.placeholder": "e.g., revenue, margin, conversion, satisfaction, deadlines…",

    "form.resources.label": "Available resources (optional)",
    "form.resources.placeholder": "Team, tools, partners, data, time…",

    "form.deliverables.label": "Expected deliverables (optional)",
    "form.deliverables.placeholder": "e.g., action plan, roadmap, scenarios, recommendations…",

    "form.successIndicators.label": "Success criteria (optional)",
    "form.successIndicators.placeholder": "How will you know the decision is successful?",

    "form.context.label": "Additional context (optional)",
    "form.context.placeholder": "Background, environment, useful details…",

    "form.externalLink.label": "External link (docs / website) (optional)",
    "form.externalLink.placeholder": "https://...",

    "form.budgetMin.label": "Minimum budget",
    "form.budgetMax.label": "Maximum budget",

    "form.deadline.label": "Deadline / timeframe",
    "form.deadline.placeholder": "e.g., 7 days, 1 month, before 01/15…",

    "form.urgency.label": "Urgency level",
    "form.urgency.low": "Low",
    "form.urgency.medium": "Medium",
    "form.urgency.high": "High",

    "form.output.email": "Delivery by email",
    "form.output.whatsapp": "Delivery via WhatsApp",
    "form.output.pdf": "PDF report",
    "form.output.display": "On-screen display",

    "form.contact.email": "Email address (if selected)",
    "form.contact.email.placeholder": "example@email.com",
    "form.contact.whatsapp": "WhatsApp number (if selected)",
    "form.contact.whatsapp.placeholder": "+221 XX XXX XX XX",

    "form.consent": "I agree that my information will be used only to produce this decision analysis.",
    "form.send": "Send request",
    "form.reset": "Reset form",

    "privacy.meta.title": "Privacy Policy — e-META",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "Your trust matters. This policy clearly explains how e-META collects, uses and protects your data.",

    "privacy.block1.title": "Data protection",
    "privacy.point1": "e-META collects only what is necessary to generate your requested analysis and improve output quality.",
    "privacy.point2": "No data is sold, rented, or used for advertising purposes.",
    "privacy.point3": "Data is used only to process your request and deliver results via your chosen channel (screen, email, WhatsApp, PDF).",
    "privacy.point4": "You can request deletion of your data at any time.",

    "privacy.block2.title": "Responsibility & use",
    "privacy.point5": "e-META is a decision-support tool based on structured analysis of user-provided information.",
    "privacy.point6": "Generated analyses and recommendations are not legal, financial, medical, or regulatory advice.",
    "privacy.point7": "The user remains solely responsible for decisions made based on e-META outputs.",
    "privacy.point8": "No automated decision is imposed: e-META supports, clarifies, and structures strategic thinking.",

    "privacy.back": "← Back to main page",

    "footer.text": "e-META © 2025 — Strategic decision AI assistant",
    "footer.privacy": "Privacy Policy"
  },

  /* =========================
     ES — Español
  ========================= */
  es: {
    "meta.title": "e-META — Asistente IA multilingüe",
    "tagline": "Asistente IA multilingüe para toma de decisiones",

    "nav.home": "Inicio",
    "nav.form": "Formulario",
    "nav.privacy": "Privacidad",

    "cta.custom": "Solicitud personalizada",

    "hero.title": "Tome decisiones al nivel de una consultora premium",
    "hero.subtitle": "e-META analiza su contexto, objetivos, restricciones, riesgos e indicadores clave para producir una síntesis clara y accionable.",
    "hero.p1": "Análisis estructurado: problema, objetivos, restricciones, riesgos, KPIs.",
    "hero.p2": "Recomendaciones accionables y escenarios de decisión.",
    "hero.p3": "Entrega personalizada: pantalla, correo, WhatsApp o PDF.",
    "hero.cta": "Iniciar un análisis estratégico",
    "hero.note": "e-META no es un chatbot. Es un motor de inteligencia decisional.",
    "hero.metric.value": "+12 horas",
    "hero.metric.label": "de análisis estratégico simulado",
    "hero.metric.sub": "Equivalente al trabajo combinado de un consultor senior, un analista de negocio y un estratega decisional.",

    "form.title": "Formulario e-META — Versión Ultra-Premium",
    "form.subtitle": "Complete los campos para recibir un análisis estratégico estructurado, fiable y orientado a la decisión.",
    "form.intro": "Complete los campos para recibir su análisis estratégico personalizado.",

    "form.group.general": "1. Información general",
    "form.group.analysis": "2. Análisis estratégico",
    "form.group.budget": "3. Presupuesto y urgencia",
    "form.group.output": "4. Entrega y contacto",

    "form.domain.label": "Dominio principal",
    "form.domain.select": "Seleccione un dominio",
    "form.domain.business": "Negocio / Estrategia",
    "form.domain.marketing": "Marketing / Ventas",
    "form.domain.finance": "Finanzas",
    "form.domain.hr": "RR. HH. / Gestión",
    "form.domain.tech": "Tecnología / Producto",
    "form.domain.legal": "Legal / Cumplimiento",
    "form.domain.other": "Otro",

    "form.projectType.label": "Tipo de proyecto",
    "form.projectType.select": "Seleccione un tipo",
    "form.projectType.launch": "Lanzamiento",
    "form.projectType.optimization": "Optimización",
    "form.projectType.audit": "Auditoría / Diagnóstico",
    "form.projectType.crisis": "Crisis / Urgencia",
    "form.projectType.personal": "Decisión personal",
    "form.projectType.other": "Otro",

    "form.projectTitle.label": "Título del proyecto",
    "form.projectTitle.placeholder": "Ej.: Lanzamiento de un nuevo servicio digital",

    "form.problem.label": "Problema principal / decisión",
    "form.problem.placeholder": "Describa claramente el problema o la decisión a tomar…",

    "form.objectives.label": "Objetivos",
    "form.objectives.placeholder": "Enumere los objetivos (corto/medio/largo plazo)…",

    "form.constraints.label": "Restricciones",
    "form.constraints.placeholder": "Presupuesto, plazos, recursos, reglas, contexto…",

    "form.kpis.label": "KPIs (opcional)",
    "form.kpis.placeholder": "Ej.: ingresos, margen, conversión, satisfacción, plazos…",

    "form.resources.label": "Recursos disponibles (opcional)",
    "form.resources.placeholder": "Equipo, herramientas, socios, datos, tiempo…",

    "form.deliverables.label": "Entregables esperados (opcional)",
    "form.deliverables.placeholder": "Ej.: plan de acción, roadmap, escenarios, recomendaciones…",

    "form.successIndicators.label": "Criterios de éxito (opcional)",
    "form.successIndicators.placeholder": "¿Cómo sabrá que la decisión fue correcta?",

    "form.context.label": "Contexto adicional (opcional)",
    "form.context.placeholder": "Antecedentes, entorno, detalles útiles…",

    "form.externalLink.label": "Enlace externo (docs / web) (opcional)",
    "form.externalLink.placeholder": "https://...",

    "form.budgetMin.label": "Presupuesto mínimo",
    "form.budgetMax.label": "Presupuesto máximo",

    "form.deadline.label": "Plazo / fecha límite",
    "form.deadline.placeholder": "Ej.: 7 días, 1 mes, antes del 15/01…",

    "form.urgency.label": "Nivel de urgencia",
    "form.urgency.low": "Bajo",
    "form.urgency.medium": "Medio",
    "form.urgency.high": "Alto",

    "form.output.email": "Entrega por correo",
    "form.output.whatsapp": "Entrega por WhatsApp",
    "form.output.pdf": "Informe PDF",
    "form.output.display": "Mostrar en pantalla",

    "form.contact.email": "Correo electrónico (si se selecciona)",
    "form.contact.email.placeholder": "ejemplo@email.com",
    "form.contact.whatsapp": "Número WhatsApp (si se selecciona)",
    "form.contact.whatsapp.placeholder": "+221 XX XXX XX XX",

    "form.consent": "Acepto que mi información se utilice únicamente para generar este análisis decisional.",
    "form.send": "Enviar solicitud",
    "form.reset": "Reiniciar formulario",

    "privacy.meta.title": "Política de privacidad — e-META",
    "privacy.title": "Política de privacidad",
    "privacy.intro": "Su confianza es esencial. Esta política explica de forma transparente cómo e-META recopila, utiliza y protege sus datos.",

    "privacy.block1.title": "Protección de datos",
    "privacy.point1": "e-META recopila solo la información necesaria para generar el análisis solicitado y mejorar la calidad del resultado.",
    "privacy.point2": "Los datos no se venden, alquilan ni se usan con fines publicitarios.",
    "privacy.point3": "Los datos se usan solo para procesar su solicitud y entregar los resultados por el canal elegido.",
    "privacy.point4": "Puede solicitar la eliminación de sus datos en cualquier momento.",

    "privacy.block2.title": "Responsabilidad y uso",
    "privacy.point5": "e-META es una herramienta de apoyo a la decisión basada en un análisis estructurado de la información proporcionada.",
    "privacy.point6": "Los análisis generados no constituyen asesoramiento legal, financiero, médico o regulatorio.",
    "privacy.point7": "El usuario es el único responsable de las decisiones tomadas a partir de los resultados.",
    "privacy.point8": "No se impone ninguna decisión automática: e-META asiste, aclara y estructura la reflexión.",

    "privacy.back": "← Volver a la página principal",

    "footer.text": "e-META © 2025 — Asistente IA de decisión estratégica",
    "footer.privacy": "Política de privacidad"
  },

  /* =========================
     AR — العربية
  ========================= */
  ar: {
    "meta.title": "e-META — مساعد ذكاء اصطناعي متعدد اللغات",
    "tagline": "مساعد ذكاء اصطناعي متعدد اللغات لدعم اتخاذ القرار",

    "nav.home": "الرئيسية",
    "nav.form": "النموذج",
    "nav.privacy": "الخصوصية",

    "cta.custom": "طلب مخصص",

    "hero.title": "اتخذ قرارات بمستوى مكاتب الاستشارات المتميزة",
    "hero.subtitle": "يقوم e-META بتحليل السياق والأهداف والقيود والمخاطر والمؤشرات الرئيسية لإنتاج خلاصة قرار واضحة وقابلة للتنفيذ.",
    "hero.p1": "تحليل منظم: المشكلة، الأهداف، القيود، المخاطر، مؤشرات الأداء.",
    "hero.p2": "توصيات قابلة للتنفيذ وسيناريوهات لدعم القرار.",
    "hero.p3": "تسليم مخصص: عرض مباشر، بريد إلكتروني، واتساب أو PDF.",
    "hero.cta": "ابدأ تحليلاً استراتيجياً",
    "hero.note": "e-META ليس روبوت محادثة، بل محرك ذكاء لاتخاذ القرار.",
    "hero.metric.value": "+12 ساعة",
    "hero.metric.label": "تحليل استراتيجي مُحاكى",
    "hero.metric.sub": "يعادل العمل المشترك لمستشار أول ومحلل أعمال واستراتيجي قرار.",

    "form.title": "نموذج e-META — نسخة Ultra-Premium",
    "form.subtitle": "املأ الحقول أدناه للحصول على تحليل استراتيجي منظم وموثوق وموجه للقرار.",
    "form.intro": "املأ الحقول أدناه للحصول على تحليلك الاستراتيجي المخصص.",

    "form.group.general": "1. معلومات عامة",
    "form.group.analysis": "2. تحليل استراتيجي",
    "form.group.budget": "3. الميزانية والإلحاح",
    "form.group.output": "4. التسليم والتواصل",

    "form.domain.label": "المجال الرئيسي",
    "form.domain.select": "اختر مجالاً",
    "form.domain.business": "الأعمال / الاستراتيجية",
    "form.domain.marketing": "التسويق / المبيعات",
    "form.domain.finance": "المالية",
    "form.domain.hr": "الموارد البشرية / الإدارة",
    "form.domain.tech": "التقنية / المنتج",
    "form.domain.legal": "قانوني / امتثال",
    "form.domain.other": "أخرى",

    "form.projectType.label": "نوع المشروع",
    "form.projectType.select": "اختر نوعاً",
    "form.projectType.launch": "إطلاق",
    "form.projectType.optimization": "تحسين",
    "form.projectType.audit": "تدقيق / تشخيص",
    "form.projectType.crisis": "أزمة / عاجل",
    "form.projectType.personal": "قرار شخصي",
    "form.projectType.other": "أخرى",

    "form.projectTitle.label": "عنوان المشروع",
    "form.projectTitle.placeholder": "مثال: إطلاق خدمة رقمية جديدة",

    "form.problem.label": "المشكلة الرئيسية / القرار",
    "form.problem.placeholder": "صف المشكلة أو القرار المطلوب بوضوح…",

    "form.objectives.label": "الأهداف",
    "form.objectives.placeholder": "اذكر الأهداف (قصير/متوسط/طويل المدى)…",

    "form.constraints.label": "القيود",
    "form.constraints.placeholder": "الميزانية، الوقت، الموارد، القواعد، السياق…",

    "form.kpis.label": "مؤشرات الأداء (اختياري)",
    "form.kpis.placeholder": "مثال: الإيرادات، الهامش، التحويل، الرضا، المواعيد…",

    "form.resources.label": "الموارد المتاحة (اختياري)",
    "form.resources.placeholder": "الفريق، الأدوات، الشركاء، البيانات، الوقت…",

    "form.deliverables.label": "المخرجات المتوقعة (اختياري)",
    "form.deliverables.placeholder": "مثال: خطة عمل، خارطة طريق، سيناريوهات، توصيات…",

    "form.successIndicators.label": "معايير النجاح (اختياري)",
    "form.successIndicators.placeholder": "كيف ستعرف أن القرار ناجح؟",

    "form.context.label": "سياق إضافي (اختياري)",
    "form.context.placeholder": "خلفية، بيئة، تفاصيل مفيدة…",

    "form.externalLink.label": "رابط خارجي (مستندات/موقع) (اختياري)",
    "form.externalLink.placeholder": "https://...",

    "form.budgetMin.label": "الميزانية الدنيا",
    "form.budgetMax.label": "الميزانية القصوى",

    "form.deadline.label": "الموعد النهائي / المدة",
    "form.deadline.placeholder": "مثال: 7 أيام، شهر، قبل 15/01…",

    "form.urgency.label": "مستوى الإلحاح",
    "form.urgency.low": "منخفض",
    "form.urgency.medium": "متوسط",
    "form.urgency.high": "مرتفع",

    "form.output.email": "التسليم عبر البريد الإلكتروني",
    "form.output.whatsapp": "التسليم عبر واتساب",
    "form.output.pdf": "تقرير PDF",
    "form.output.display": "عرض مباشر على الشاشة",

    "form.contact.email": "البريد الإلكتروني (عند الاختيار)",
    "form.contact.email.placeholder": "example@email.com",
    "form.contact.whatsapp": "رقم واتساب (عند الاختيار)",
    "form.contact.whatsapp.placeholder": "+221 XX XXX XX XX",

    "form.consent": "أوافق على استخدام معلوماتي فقط لإنتاج هذا التحليل الداعم للقرار.",
    "form.send": "إرسال الطلب",
    "form.reset": "إعادة ضبط النموذج",

    "privacy.meta.title": "سياسة الخصوصية — e-META",
    "privacy.title": "سياسة الخصوصية",
    "privacy.intro": "ثقتك مهمة. توضح هذه السياسة بشكل شفاف كيف يجمع e-META بياناتك ويستخدمها ويحميها.",

    "privacy.block1.title": "حماية البيانات",
    "privacy.point1": "يجمع e-META فقط المعلومات اللازمة لإنشاء التحليل المطلوب وتحسين جودة النتيجة.",
    "privacy.point2": "لا يتم بيع البيانات أو تأجيرها أو استخدامها لأغراض إعلانية.",
    "privacy.point3": "تُستخدم البيانات فقط لمعالجة طلبك وتسليم النتائج عبر القناة المختارة.",
    "privacy.point4": "يمكنك طلب حذف بياناتك في أي وقت.",

    "privacy.block2.title": "المسؤولية والاستخدام",
    "privacy.point5": "e-META أداة دعم قرار تعتمد على تحليل منظم لمعلومات المستخدم.",
    "privacy.point6": "لا تُعد النتائج استشارة قانونية أو مالية أو طبية أو تنظيمية.",
    "privacy.point7": "يبقى المستخدم المسؤول الوحيد عن القرارات المتخذة بناءً على النتائج.",
    "privacy.point8": "لا يتم فرض أي قرار آلي: يساعد e-META على الإيضاح وتنظيم التفكير الاستراتيجي.",

    "privacy.back": "← العودة إلى الصفحة الرئيسية",

    "footer.text": "e-META © 2025 — مساعد ذكاء لاتخاذ القرار",
    "footer.privacy": "سياسة الخصوصية"
  }
};
