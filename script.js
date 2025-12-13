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
       /* ===== PRIVACY ===== */
"privacy.meta.title": "Politique de confidentialité – e-META",
"privacy.title": "Politique de confidentialité",
"privacy.intro":
  "La présente politique de confidentialité explique comment e-META collecte, utilise et protège vos informations lorsque vous utilisez notre assistant d’aide à la décision.",

"privacy.section1.title": "1. Responsable du traitement",
"privacy.section1.text":
  "Le service e-META est édité par son porteur de projet. Pour toute question relative à la protection des données, vous pouvez nous contacter via les coordonnées indiquées sur le site.",

"privacy.section2.title": "2. Données collectées",
"privacy.section2.text":
  "Dans le cadre de l’utilisation du service e-META, les catégories de données suivantes peuvent être collectées :",
"privacy.section2.item1": "Informations fournies volontairement dans le formulaire (contexte, objectifs, contraintes, données de projet).",
"privacy.section2.item2": "Coordonnées de contact si vous les renseignez (adresse e-mail, numéro WhatsApp).",
"privacy.section2.item3": "Liens vers des documents externes (Google Drive, Dropbox, Notion, PDF en ligne, etc.).",

"privacy.section3.title": "3. Finalité du traitement",
"privacy.section3.item1": "Générer une analyse et une synthèse d’aide à la décision via e-META.",
"privacy.section3.item2": "Restituer cette synthèse selon le mode choisi (affichage, e-mail, WhatsApp, PDF).",
"privacy.section3.item3": "Améliorer la qualité, la pertinence et l’expérience utilisateur du service.",

"privacy.section4.title": "4. Utilisation de l’intelligence artificielle",
"privacy.section4.text1":
  "e-META utilise des technologies d’intelligence artificielle pour analyser les informations fournies et produire des recommandations structurées.",
"privacy.section4.text2":
  "Les résultats générés constituent une aide à la décision et ne remplacent pas un conseil juridique, financier ou professionnel personnalisé.",

"privacy.section5.title": "5. Partage des données",
"privacy.section5.text":
  "Les données collectées ne sont ni vendues ni cédées à des tiers. Elles peuvent être traitées par des prestataires techniques strictement nécessaires au fonctionnement du service.",

"privacy.section6.title": "6. Durée de conservation",
"privacy.section6.text":
  "Les données sont conservées pendant une durée strictement nécessaire à la réalisation du service, puis supprimées ou anonymisées.",

"privacy.section7.title": "7. Sécurité",
"privacy.section7.text":
  "e-META met en œuvre des mesures techniques et organisationnelles raisonnables afin de protéger vos données contre tout accès non autorisé, perte ou divulgation.",

"privacy.section8.title": "8. Vos droits",
"privacy.section8.item1": "Droit d’accès à vos données personnelles.",
"privacy.section8.item2": "Droit de rectification des données inexactes.",
"privacy.section8.item3": "Droit à l’effacement, dans les limites prévues par la loi.",
"privacy.section8.item4": "Droit d’opposition ou de limitation du traitement.",

"privacy.section9.title": "9. Modifications de la politique",
"privacy.section9.text":
  "La présente politique de confidentialité peut être modifiée à tout moment afin de refléter les évolutions du service ou des obligations légales.",

"privacy.section10.title": "10. Contact",
"privacy.section10.text":
  "Pour toute question relative à la protection de vos données, vous pouvez nous contacter via les informations disponibles sur le site e-META.",

"footer.back": "Retour à l’accueil"
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
       /* ===== PRIVACY ===== */
"privacy.meta.title": "Privacy Policy – e-META",
"privacy.title": "Privacy Policy",
"privacy.intro":
  "This privacy policy explains how e-META collects, uses, and protects your information when you use our decision-support assistant.",

"privacy.section1.title": "1. Data controller",
"privacy.section1.text":
  "The e-META service is operated by its project owner. For any questions related to data protection, you may contact us via the information provided on the website.",

"privacy.section2.title": "2. Data collected",
"privacy.section2.text":
  "When using the e-META service, the following categories of data may be collected:",
"privacy.section2.item1": "Information voluntarily provided in the form (context, objectives, constraints, project data).",
"privacy.section2.item2": "Contact details if provided (email address, WhatsApp number).",
"privacy.section2.item3": "Links to external documents (Google Drive, Dropbox, Notion, online PDFs, etc.).",

"privacy.section3.title": "3. Purpose of processing",
"privacy.section3.item1": "Generate a decision-support analysis and synthesis via e-META.",
"privacy.section3.item2": "Deliver the synthesis according to the selected method (on-screen, email, WhatsApp, PDF).",
"privacy.section3.item3": "Improve service quality, relevance, and user experience.",

"privacy.section4.title": "4. Use of artificial intelligence",
"privacy.section4.text1":
  "e-META uses artificial intelligence technologies to analyze the information provided and generate structured recommendations.",
"privacy.section4.text2":
  "The generated results are intended as decision-support and do not replace professional legal, financial, or business advice.",

"privacy.section5.title": "5. Data sharing",
"privacy.section5.text":
  "Collected data is neither sold nor transferred to third parties. It may be processed by technical service providers strictly necessary for operating the service.",

"privacy.section6.title": "6. Data retention",
"privacy.section6.text":
  "Data is retained only for the duration strictly necessary to provide the service, then deleted or anonymized.",

"privacy.section7.title": "7. Security",
"privacy.section7.text":
  "e-META implements reasonable technical and organizational measures to protect your data against unauthorized access, loss, or disclosure.",

"privacy.section8.title": "8. Your rights",
"privacy.section8.item1": "Right to access your personal data.",
"privacy.section8.item2": "Right to correct inaccurate data.",
"privacy.section8.item3": "Right to erasure, subject to legal limitations.",
"privacy.section8.item4": "Right to object to or restrict processing.",

"privacy.section9.title": "9. Policy updates",
"privacy.section9.text":
  "This privacy policy may be updated at any time to reflect changes in the service or legal requirements.",

"privacy.section10.title": "10. Contact",
"privacy.section10.text":
  "For any questions regarding data protection, you may contact us using the information available on the e-META website.",

"footer.back": "Back to home"
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
       /* ===== PRIVACY ===== */
"privacy.meta.title": "Política de privacidad – e-META",
"privacy.title": "Política de privacidad",
"privacy.intro":
  "Esta política de privacidad explica cómo e-META recopila, utiliza y protege su información cuando utiliza nuestro asistente de toma de decisiones.",

"privacy.section1.title": "1. Responsable del tratamiento",
"privacy.section1.text":
  "El servicio e-META es operado por su promotor. Para cualquier consulta relacionada con la protección de datos, puede contactarnos a través de la información disponible en el sitio web.",

"privacy.section2.title": "2. Datos recopilados",
"privacy.section2.text":
  "Al utilizar el servicio e-META, pueden recopilarse las siguientes categorías de datos:",
"privacy.section2.item1": "Información proporcionada voluntariamente en el formulario (contexto, objetivos, restricciones, datos del proyecto).",
"privacy.section2.item2": "Datos de contacto si se facilitan (correo electrónico, número de WhatsApp).",
"privacy.section2.item3": "Enlaces a documentos externos (Google Drive, Dropbox, Notion, PDF en línea, etc.).",

"privacy.section3.title": "3. Finalidad del tratamiento",
"privacy.section3.item1": "Generar un análisis y una síntesis de apoyo a la toma de decisiones mediante e-META.",
"privacy.section3.item2": "Entregar la síntesis según el método seleccionado (pantalla, correo electrónico, WhatsApp, PDF).",
"privacy.section3.item3": "Mejorar la calidad, relevancia y experiencia del servicio.",

"privacy.section4.title": "4. Uso de inteligencia artificial",
"privacy.section4.text1":
  "e-META utiliza tecnologías de inteligencia artificial para analizar la información proporcionada y generar recomendaciones estructuradas.",
"privacy.section4.text2":
  "Los resultados generados son una ayuda a la toma de decisiones y no sustituyen el asesoramiento profesional jurídico, financiero o empresarial.",

"privacy.section5.title": "5. Compartición de datos",
"privacy.section5.text":
  "Los datos recopilados no se venden ni se ceden a terceros. Pueden ser tratados por proveedores técnicos estrictamente necesarios para el funcionamiento del servicio.",

"privacy.section6.title": "6. Conservación de los datos",
"privacy.section6.text":
  "Los datos se conservan únicamente durante el tiempo estrictamente necesario para prestar el servicio y luego se eliminan o anonimizan.",

"privacy.section7.title": "7. Seguridad",
"privacy.section7.text":
  "e-META implementa medidas técnicas y organizativas razonables para proteger sus datos frente a accesos no autorizados, pérdidas o divulgaciones.",

"privacy.section8.title": "8. Sus derechos",
"privacy.section8.item1": "Derecho de acceso a sus datos personales.",
"privacy.section8.item2": "Derecho de rectificación de datos inexactos.",
"privacy.section8.item3": "Derecho de supresión, dentro de los límites legales.",
"privacy.section8.item4": "Derecho de oposición o limitación del tratamiento.",

"privacy.section9.title": "9. Cambios en la política",
"privacy.section9.text":
  "Esta política de privacidad puede actualizarse en cualquier momento para reflejar cambios en el servicio o en las obligaciones legales.",

"privacy.section10.title": "10. Contacto",
"privacy.section10.text":
  "Para cualquier consulta relacionada con la protección de datos, puede contactarnos a través de la información disponible en el sitio web de e-META.",

"footer.back": "Volver al inicio"
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
       /* ===== PRIVACY ===== */
"privacy.meta.title": "سياسة الخصوصية – e-META",
"privacy.title": "سياسة الخصوصية",
"privacy.intro":
  "توضح سياسة الخصوصية هذه كيفية قيام e-META بجمع واستخدام وحماية معلوماتك عند استخدام مساعد اتخاذ القرار.",

"privacy.section1.title": "1. مسؤول معالجة البيانات",
"privacy.section1.text":
  "يتم تشغيل خدمة e-META من قبل صاحب المشروع. لأي استفسار يتعلق بحماية البيانات، يمكنكم التواصل معنا عبر المعلومات المتاحة على الموقع.",

"privacy.section2.title": "2. البيانات التي يتم جمعها",
"privacy.section2.text":
  "عند استخدام خدمة e-META، قد يتم جمع الفئات التالية من البيانات:",
"privacy.section2.item1": "المعلومات المقدمة طوعًا في النموذج (السياق، الأهداف، القيود، بيانات المشروع).",
"privacy.section2.item2": "بيانات الاتصال في حال تقديمها (البريد الإلكتروني، رقم واتساب).",
"privacy.section2.item3": "روابط إلى مستندات خارجية (Google Drive أو Dropbox أو Notion أو ملفات PDF عبر الإنترنت).",

"privacy.section3.title": "3. الغرض من المعالجة",
"privacy.section3.item1": "إنشاء تحليل وملخص لدعم اتخاذ القرار عبر e-META.",
"privacy.section3.item2": "تسليم الملخص وفق الطريقة المختارة (عرض مباشر، بريد إلكتروني، واتساب، PDF).",
"privacy.section3.item3": "تحسين جودة الخدمة وملاءمتها وتجربة المستخدم.",

"privacy.section4.title": "4. استخدام الذكاء الاصطناعي",
"privacy.section4.text1":
  "يستخدم e-META تقنيات الذكاء الاصطناعي لتحليل المعلومات المقدمة وإنتاج توصيات منظمة.",
"privacy.section4.text2":
  "النتائج المنتجة هي أداة لدعم اتخاذ القرار ولا تُعد بديلاً عن الاستشارات القانونية أو المالية أو المهنية المتخصصة.",

"privacy.section5.title": "5. مشاركة البيانات",
"privacy.section5.text":
  "لا يتم بيع البيانات أو مشاركتها مع أطراف ثالثة. وقد تتم معالجتها من قبل مزودي خدمات تقنية ضروريين لتشغيل الخدمة.",

"privacy.section6.title": "6. مدة الاحتفاظ بالبيانات",
"privacy.section6.text":
  "يتم الاحتفاظ بالبيانات فقط للمدة اللازمة لتقديم الخدمة، ثم يتم حذفها أو إخفاء هويتها.",

"privacy.section7.title": "7. الأمان",
"privacy.section7.text":
  "يتخذ e-META إجراءات تقنية وتنظيمية معقولة لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو الكشف.",

"privacy.section8.title": "8. حقوقك",
"privacy.section8.item1": "الحق في الوصول إلى بياناتك الشخصية.",
"privacy.section8.item2": "الحق في تصحيح البيانات غير الدقيقة.",
"privacy.section8.item3": "الحق في محو البيانات ضمن الحدود القانونية.",
"privacy.section8.item4": "الحق في الاعتراض على المعالجة أو تقييدها.",

"privacy.section9.title": "9. تعديلات سياسة الخصوصية",
"privacy.section9.text":
  "قد يتم تحديث سياسة الخصوصية هذه في أي وقت لتعكس تطورات الخدمة أو المتطلبات القانونية.",

"privacy.section10.title": "10. التواصل",
"privacy.section10.text":
  "لأي استفسار يتعلق بحماية البيانات، يمكنكم التواصل معنا عبر المعلومات المتاحة على موقع e-META.",

"footer.back": "العودة إلى الصفحة الرئيسية"
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
