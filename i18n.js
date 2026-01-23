/* e-META — i18n minimal engine + dictionary */
(function(window){
  const DICT = {
    fr: {
      "meta.title":"e-META — Assistant IA",
      "header.tagline":"Assistant IA multilingue de prise de décision",
      "nav.home":"Accueil","nav.form":"Formulaire","nav.privacy":"Confidentialité",
      "hero.title":"Donnez à vos décisions le niveau d’un cabinet de conseil premium",
      "hero.subtitle":"Analyse stratégique structurée, recommandations actionnables et restitution professionnelle.",
      "hero.point1":"Analyse structurée (niveau consultant senior)",
      "hero.point2":"Recommandations actionnables + risques + KPI",
      "hero.point3":"Restitution personnalisée (Email / WhatsApp / PDF)",
      "hero.cta":"Commencer une analyse stratégique",
      "hero.badge.title":"Analyse stratégique — niveau cabinet",
      "hero.badge.text":"Une approche structurée inspirée des cabinets de conseil.",
      "hero.note":"e-META n’est pas un chatbot : c’est un moteur d’intelligence décisionnelle.",
      "form.badge.cabinet":"Mode cabinet de conseil",
      "form.title":"Formulaire e-META vNext — Analyse stratégique premium",
      "form.intro":"Plus vos réponses sont précises, plus la recommandation e-META sera juste, nuancée et exploitable.",
      "help.privacy":"Politique",
      "help.guide":"Guide",
      "group.general":"1) Qualifier la décision",
      "field.domain.label":"Domaine principal",
      "field.domain.placeholder":"Sélectionnez un domaine",
      "field.domain.strategy":"Business / Stratégie",
      "field.domain.finance":"Finance",
      "field.domain.marketing":"Marketing / Vente",
      "field.domain.operations":"Opérations",
      "field.domain.it":"IT / Tech",
      "field.domain.legal":"Juridique",
      "field.domain.impact":"Impact / RSE",
      "field.domain.other":"Autre",
      "field.decisionType.label":"Nature de la décision",
      "field.decisionType.placeholder":"Sélectionnez un type",
      "field.decisionType.t1":"Stratégique",
      "field.decisionType.t2":"Opérationnelle",
      "field.decisionType.t3":"Financière",
      "field.decisionType.t4":"Marketing",
      "field.decisionType.t5":"RH",
      "field.decisionType.t6":"Autre",
      "field.title.label":"Titre court de la décision",
      "field.title.ph":"Ex: Lancer un nouveau produit en 2026",
      "field.title.hint":"Titre bref utilisé dans la restitution",
      "group.analysis":"2) Structurer l'analyse",
      "field.problem.label":"Quel est le problème / opportunité ?",
      "field.problem.ph":"Décrivez le contexte et la situation actuelle",
      "field.objectives.label":"Objectifs prioritaires (3–5 max)",
      "field.objectives.ph":"Ex: augmenter la marge, réduire le churn...",
      "field.constraints.label":"Contraintes & risques",
      "field.constraints.ph":"Budget, délais, réglementation...",
      "field.kpis.label":"KPIs / indicateurs",
      "field.kpis.ph":"CA, ROI, NPS, délais...",
      "field.resources.label":"Ressources disponibles",
      "field.resources.ph":"Équipe, outils, budget...",
      "field.context.label":"Contexte détaillé",
      "field.context.ph":"Historique, acteurs, environnement...",
      "group.budget":"3) Ambition, budget & urgence",
      "field.budgetMin.label":"Budget minimum",
      "field.budgetMin.ph":"Ex: 500000",
      "field.budgetMax.label":"Budget maximum",
      "field.deadline.label":"Délai / date cible",
      "field.deadline.ph":"Ex: Q3 2026",
      "field.urgency.label":"Urgence",
      "field.urgency.low":"Faible","field.urgency.medium":"Moyenne","field.urgency.high":"Élevée",
      "group.output":"4) Restitution et contact",
      "field.outputMode.label":"Restitution souhaitée",
      "field.outputMode.email":"Email",
      "field.outputMode.whatsapp":"WhatsApp",
      "field.outputMode.pdf":"PDF",
      "field.outputMode.display":"Affichage web",
      "field.email.label":"Adresse email",
      "field.email.ph":"ex@exemple.com",
      "field.whatsapp.label":"Numéro WhatsApp",
      "field.whatsapp.ph":"+221 77 000 00 00",
      "field.fileLink.label":"Lien vers documents (Drive, Dropbox, Notion...)",
      "field.fileLink.ph":"https://...",
      "group.trust":"Confiance et consentement",
      "field.consent.label":"J’accepte que mes informations soient utilisées uniquement pour produire l’analyse.",
      "form.submit":"Générer ma recommandation e META",
      "form.reset":"Réinitialiser",
      "form.trust.note":"Vos données restent confidentielles."
    },
    en: {
      "meta.title":"e-META — Decision support AI",
      "header.tagline":"Multilingual decision support AI",
      "nav.home":"Home","nav.form":"Form","nav.privacy":"Privacy",
      "hero.title":"Give your decisions the level of a premium consulting firm",
      "hero.subtitle":"Structured strategic analysis, actionable recommendations and professional delivery.",
      "hero.point1":"Structured analysis (senior consultant level)",
      "hero.point2":"Actionable recommendations + risks + KPI",
      "hero.point3":"Personalised delivery (Email / WhatsApp / PDF)",
      "hero.cta":"Start a strategic analysis",
      "hero.badge.title":"Strategic analysis — consulting level",
      "hero.badge.text":"A structured approach inspired by consulting firms.",
      "hero.note":"e-META is not a chatbot: it is a decision intelligence engine.",
      "form.badge.cabinet":"Consulting mode",
      "form.title":"e META vNext Form — Premium strategic analysis",
      "form.intro":"The more precise your answers, the more accurate and actionable the e META recommendation.",
      "help.privacy":"Privacy","help.guide":"Guide",
      "group.general":"1) Qualify the decision",
      "field.domain.label":"Main domain","field.domain.placeholder":"Select a domain","field.domain.strategy":"Business / Strategy","field.domain.finance":"Finance","field.domain.marketing":"Marketing / Sales","field.domain.operations":"Operations","field.domain.it":"IT / Tech","field.domain.legal":"Legal","field.domain.impact":"Impact / CSR","field.domain.other":"Other",
      "field.decisionType.label":"Decision nature","field.decisionType.placeholder":"Choose a type","field.decisionType.t1":"Strategic","field.decisionType.t2":"Operational","field.decisionType.t3":"Financial","field.decisionType.t4":"Marketing","field.decisionType.t5":"HR","field.decisionType.t6":"Other",
      "field.title.label":"Short title","field.title.ph":"E.g.: Launch new product in 2026","field.title.hint":"Short title used in the delivery",
      "group.analysis":"2) Structure the analysis",
      "field.problem.label":"What is the problem / opportunity?","field.problem.ph":"Describe context and current situation",
      "field.objectives.label":"Priority objectives (3–5)","field.objectives.ph":"E.g.: increase margin, reduce churn...",
      "field.constraints.label":"Constraints & risks","field.constraints.ph":"Budget, timeline, regulation...",
      "field.kpis.label":"KPIs / indicators","field.kpis.ph":"Revenue, ROI, NPS...",
      "field.resources.label":"Available resources","field.resources.ph":"Team, tools, budget...",
      "field.context.label":"Detailed context","field.context.ph":"History, stakeholders, environment...",
      "group.budget":"3) Ambition, budget & urgency","field.budgetMin.label":"Min budget","field.budgetMin.ph":"E.g.: 500000","field.budgetMax.label":"Max budget","field.deadline.label":"Deadline / target date","field.deadline.ph":"E.g.: Q3 2026","field.urgency.label":"Urgency","field.urgency.low":"Low","field.urgency.medium":"Medium","field.urgency.high":"High",
      "group.output":"4) Delivery & contact","field.outputMode.label":"Delivery mode","field.outputMode.email":"Email","field.outputMode.whatsapp":"WhatsApp","field.outputMode.pdf":"PDF","field.outputMode.display":"Web display","field.email.label":"Email address","field.email.ph":"you@company.com","field.whatsapp.label":"WhatsApp number","field.whatsapp.ph":"+221 77 000 00 00","field.fileLink.label":"Link to files","field.fileLink.ph":"https://...","group.trust":"Trust & consent","field.consent.label":"I accept my information is used only to generate the analysis.","form.submit":"Generate my e META recommendation","form.reset":"Reset","form.trust.note":"Your data remains confidential."},
    es: {
      "meta.title":"e META — IA de apoyo a la decisión",
      "header.tagline":"Asistente multilingüe de toma de decisiones",
      "nav.home":"Inicio","nav.form":"Formulario","nav.privacy":"Privacidad",
      "hero.title":"Da a tus decisiones el nivel de una consultora premium",
      "hero.subtitle":"Análisis estratégico estructurado, recomendaciones accionables y entrega profesional.",
      "hero.point1":"Análisis estructurado (nivel consultor senior)",
      "hero.point2":"Recomendaciones accionables + riesgos + KPI","hero.point3":"Entrega personalizada (Email / WhatsApp / PDF)",
      "hero.cta":"Comenzar un análisis estratégico","hero.badge.title":"Análisis estratégico — nivel consultoría","hero.badge.text":"Un enfoque estructurado inspirado en consultoras.","hero.note":"e META no es un chatbot: es un motor de inteligencia de decisión.",
      "form.badge.cabinet":"Modo consultoría","form.title":"Formulario e META vNext — Análisis estratégico premium","form.intro":"Cuanto más precisas sean tus respuestas, más justa y explotable será la recomendación e META.",
      "help.privacy":"Privacidad","help.guide":"Guía","group.general":"1) Calificar la decisión","field.domain.label":"Dominio principal","field.domain.placeholder":"Selecciona un dominio","field.domain.strategy":"Negocio / Estrategia","field.domain.finance":"Finanzas","field.domain.marketing":"Marketing / Ventas","field.domain.operations":"Operaciones","field.domain.it":"IT / Tecnología","field.domain.legal":"Legal","field.domain.impact":"Impacto / RSE","field.domain.other":"Otro",
      "field.decisionType.label":"Naturaleza de la decisión","field.decisionType.placeholder":"Selecciona un tipo","field.decisionType.t1":"Estratégica","field.decisionType.t2":"Operativa","field.decisionType.t3":"Financiera","field.decisionType.t4":"Marketing","field.decisionType.t5":"RRHH","field.decisionType.t6":"Otro",
      "field.title.label":"Título corto","field.title.ph":"Ej: Lanzar nuevo producto en 2026","group.analysis":"2) Estructura el análisis","field.problem.label":"¿Cuál es el problema / oportunidad?","field.objectives.label":"Objetivos prioritarios (3–5)","field.kpis.label":"KPIs / indicadores","group.budget":"3) Ambición, presupuesto & urgencia","group.output":"4) Entrega y contacto","field.consent.label":"Acepto que mi información se utilice solo para generar el análisis.","form.submit":"Generar mi recomendación e META","form.reset":"Restablecer","form.trust.note":"Sus datos permanecen confidenciales."},
    ar: {
      "meta.title":"e META — مساعد اتخاذ القرار بالذكاء الاصطناعي",
      "header.tagline":"مساعد متعدد اللغات لاتخاذ القرار","nav:{},
      "nav.home":"الرئيسية","nav.form":"النموذج","nav.privacy":"الخصوصية",
      "hero.title":"قدم لقراراتك مستوى مكتب استشاري متميز",
      "hero.subtitle":"تحليل استراتيجي منظم، توصيات قابلة للتنفيذ وتسليم محترف.",
      "hero.point1":"تحليل منظم (مستوى استشاري كبير)",
      "hero.point2":"توصيات قابلة للتنفيذ + مخاطر + مؤشرات","hero.point3":"تسليم مخصص (بريد إلكتروني / واتساب / PDF)",
      "hero.cta":"بدء تحليل استراتيجي","hero.badge.title":"تحليل استراتيجي — مستوى استشاري","hero.badge.text":"نهج منظم مستوحى من مكاتب الاستشارات.",
      "hero.note":"e META ليس شات بوت: بل هو محرك ذكاء قرارات.",
      "form.badge.cabinet":"وضع مكتب استشاري","form.title":"نموذج e META vNext — تحليل استراتيجي متميز","form.intro":"كلما كانت إجاباتك دقيقة أكثر، كانت توصية e META أكثر عدلاً وقابلة للتنفيذ.",
      "help.privacy":"الخصوصية","help.guide":"الدليل","group.general":"1) تأهيل القرار","field.domain.label":"المجال الرئيسي","field.domain.placeholder":"اختر مجالاً","field.domain.strategy":"أعمال / استراتيجية","field.domain.finance":"المالية","field.domain.marketing":"التسويق","field.decisionType.label":"طبيعة القرار","field.title.label":"عنوان القرار المختصر","form.submit":"إنشاء توصيتي e META","form.reset":"إعادة تعيين","form.trust.note":"تظل بياناتك سرية."}
  };

  function apply(lang){
    const dict = DICT[lang] || DICT.fr;
    // text elements
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    // select options: options may have data-i18n keys
    document.querySelectorAll('select option[data-i18n]').forEach(opt=>{
      const key = opt.getAttribute('data-i18n');
      if(dict[key]) opt.textContent = dict[key];
    });
    // update html lang/dir
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
    // update privacy link to include lang
    document.querySelectorAll('a[href="privacy.html"]').forEach(a=>{
      const url = new URL(a.href, location.href);
      url.searchParams.set('lang', lang);
      a.href = url.toString();
    });
  }

  function init(){
    const saved = localStorage.getItem('emeta_lang') || (navigator.language||'fr').slice(0,2);
    const lang = ['fr','en','es','ar'].includes(saved) ? saved : 'fr';
    const select = document.getElementById('langSelect');
    if(select){ select.value = lang; select.addEventListener('change', e=>{ localStorage.setItem('emeta_lang', e.target.value); apply(e.target.value); }); }
    apply(lang);
  }

  // expose
  window.E_META_I18N = { DICT, apply, init };
  document.addEventListener('DOMContentLoaded', init);
})(window);
