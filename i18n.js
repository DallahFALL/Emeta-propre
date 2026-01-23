/* i18n.js — version optimisée (lazy + batch DOM updates) */
/* Usage:
   - include i18n.js BEFORE script.js
   - call EMetaI18n.setLang('en') or let it auto-read localStorage
   - In HTML: use data-i18n="key" for textContent
              use data-i18n-placeholder="key" for input placeholders
              put data-i18n on <option> to translate option text
              OR on <select> add data-i18n-options="field.domain.options" to auto-populate
*/

(function (w, d) {
  'use strict';

  // ---------- LANGUAGE LOADERS (lazy) ----------
  // Each loader returns the translations object only when called.
  // This avoids creating all language objects at initial load.
  const LANG_LOADERS = {
    fr: () => ({
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
      "hero.note":"e-META n'est pas un chatbot : c'est un moteur d'intelligence décisionnelle.",
      "form.badge.cabinet":"Mode cabinet de conseil",
      "form.title":"Formulaire e-META vNext — Analyse stratégique premium",
      "form.intro":"Plus vos réponses sont précises, plus la recommandation e-META sera juste, nuancée et exploitable.",
      "help.privacy":"Politique de confidentialité","help.guide":"Guide officiel",
      "group.general":"1) Qualifier la décision","group.analysis":"2) Structurer l'analyse",
      "group.budget":"3) Budget & échéances","group.output":"4) Restitution et contact",
      "group.trust":"Confiance et consentement",
      "field.domain.label":"Domaine principal","field.domain.placeholder":"Sélectionnez un domaine",
      "field.decisionType.label":"Nature de la décision","field.decisionType.placeholder":"Sélectionnez un type",
      "field.title.label":"Titre court de la décision","field.title.ph":"Ex: Lancer une nouvelle gamme, ouvrir un point de vente...",
      "field.title.hint":"Un titre court aide à synthétiser la recommandation.",
      "field.problem.label":"Quel est le problème / la décision à prendre ?","field.problem.ph":"Décrivez en 2-4 phrases",
      "field.objectives.label":"Objectifs prioritaires (3-5 max)","field.objectives.ph":"Ex: augmenter la marge, réduire le churn...",
      "field.constraints.label":"Contraintes & risques","field.constraints.ph":"Budget, délais, réglementation...",
      "field.kpis.label":"KPIs / indicateurs","field.kpis.ph":"CA, ROI, NPS, délais...",
      "field.resources.label":"Ressources disponibles","field.resources.ph":"Équipe, outils, budget...",
      "field.context.label":"Contexte détaillé","field.context.ph":"Historique, acteurs, environnement...",
      "field.budgetMin.label":"Budget minimum","field.budgetMin.ph":"Ex: 500000",
      "field.budgetMax.label":"Budget maximum","field.budgetMax.ph":"Ex: 1500000",
      "field.deadline.label":"Deadline / horizon","field.deadline.ph":"Ex: 3 mois, Q3 2026...",
      "field.urgency.label":"Urgence","field.urgency.low":"Faible","field.urgency.medium":"Moyenne","field.urgency.high":"Haute",
      "field.outputMode.label":"Mode de restitution","field.outputMode.email":"Email","field.outputMode.whatsapp":"WhatsApp",
      "field.outputMode.pdf":"PDF","field.outputMode.display":"Affichage web",
      "field.email.label":"Adresse email","field.email.ph":"me@exemple.com",
      "field.whatsapp.label":"Numéro WhatsApp","field.whatsapp.ph":"+221771234567",
      "field.fileLink.label":"Lien vers documents (optionnel)","field.fileLink.ph":"Drive, Dropbox, Notion...",
      "field.fileLink.hint":"URL d’un document existant",
      "field.consent.label":"J’accepte que mes informations soient utilisées uniquement pour produire cette analyse.",
      "form.submit":"Générer ma recommandation e META","form.reset":"Réinitialiser","form.trust.note":"Vos données restent confidentielles.",
      // For convenience: arrays for selects (if you want to use data-i18n-options)
      "field.domain.options":["Business / Stratégie","Finance","Marketing / Vente","Opérations","IT","Juridique","Impact / RSE","Autre"],
      "field.decisionType.options":["Stratégique","Opérationnelle","Financière","Marketing","Technique","Autre"]
    }),
    en: () => ({
      "meta.title":"e-META — Decision support AI",
      "header.tagline":"Multilingual AI decision assistant",
      "nav.home":"Home","nav.form":"Form","nav.privacy":"Privacy",
      "hero.title":"Give your decisions a premium advisory level",
      "hero.subtitle":"Structured strategic analysis, actionable recommendations and professional deliverables.",
      "hero.point1":"Structured analysis (senior consultant level)","hero.point2":"Actionable recommendations + risks + KPI",
      "hero.point3":"Personalized delivery (Email / WhatsApp / PDF)","hero.cta":"Start a strategic analysis",
      "hero.badge.title":"Strategic analysis — advisory level","hero.badge.text":"A structured approach inspired by consulting firms.",
      "hero.note":"e-META is not a chatbot: it's a decision intelligence engine.",
      "form.badge.cabinet":"Advisory mode","form.title":"e-META vNext Form — Premium strategic analysis",
      "form.intro":"The more precise your answers, the more accurate and actionable the recommendation.",
      "help.privacy":"Privacy policy","help.guide":"Official guide",
      "group.general":"1) Qualify the decision","group.analysis":"2) Structure the analysis",
      "group.budget":"3) Budget & deadlines","group.output":"4) Delivery & contact","group.trust":"Trust & consent",
      "field.domain.label":"Main domain","field.domain.placeholder":"Select a domain",
      "field.decisionType.label":"Decision type","field.decisionType.placeholder":"Select a type",
      "field.title.label":"Short decision title","field.title.ph":"E.g.: Launch new product line, open store...",
      "field.title.hint":"A short title helps summarize the recommendation.",
      "field.problem.label":"What is the problem / decision?","field.problem.ph":"Describe in 2-4 sentences",
      "field.objectives.label":"Priority objectives (3-5 max)","field.objectives.ph":"E.g.: increase margin, reduce churn...",
      "field.constraints.label":"Constraints & risks","field.constraints.ph":"Budget, timeline, regulation...",
      "field.kpis.label":"KPIs / indicators","field.kpis.ph":"Revenue, ROI, NPS, lead time...",
      "field.resources.label":"Available resources","field.resources.ph":"Team, tools, budget...",
      "field.context.label":"Detailed context","field.context.ph":"History, stakeholders, environment...",
      "field.budgetMin.label":"Minimum budget","field.budgetMin.ph":"E.g.: 500000","field.budgetMax.label":"Maximum budget","field.budgetMax.ph":"E.g.: 1500000",
      "field.deadline.label":"Deadline / horizon","field.deadline.ph":"E.g.: 3 months, Q3 2026...","field.urgency.label":"Urgency",
      "field.urgency.low":"Low","field.urgency.medium":"Medium","field.urgency.high":"High",
      "field.outputMode.label":"Delivery mode","field.outputMode.email":"Email","field.outputMode.whatsapp":"WhatsApp",
      "field.outputMode.pdf":"PDF","field.outputMode.display":"Web view",
      "field.email.label":"Email address","field.email.ph":"me@example.com","field.whatsapp.label":"WhatsApp number","field.whatsapp.ph":"+221771234567",
      "field.fileLink.label":"Link to documents (optional)","field.fileLink.ph":"Drive, Dropbox, Notion...","field.fileLink.hint":"Existing document URL",
      "field.consent.label":"I accept my information will be used only to produce this analysis.",
      "form.submit":"Generate my e META recommendation","form.reset":"Reset","form.trust.note":"Your data remains confidential.",
      "field.domain.options":["Business / Strategy","Finance","Marketing / Sales","Operations","IT","Legal","Impact / CSR","Other"],
      "field.decisionType.options":["Strategic","Operational","Financial","Marketing","Technical","Other"]
    }),
    es: () => ({
      // (es) trimmed for brevity — fill with keys similar to fr/en
      "meta.title":"e-META — Asistente IA",
      "header.tagline":"Asistente IA multilingüe para la toma de decisiones",
      "nav.home":"Inicio","nav.form":"Formulario","nav.privacy":"Privacidad",
      "hero.title":"Da a tus decisiones el nivel de una consultora premium",
      "hero.subtitle":"Análisis estratégico estructurado, recomendaciones accionables y entregables profesionales.",
      "hero.point1":"Análisis estructurado (nivel consultor senior)","hero.point2":"Recomendaciones accionables + riesgos + KPI",
      "hero.point3":"Entrega personalizada (Email / WhatsApp / PDF)","hero.cta":"Comenzar un análisis estratégico",
      "hero.badge.title":"Análisis estratégico — nivel consultora","hero.badge.text":"Un enfoque estructurado inspirado en consultoras.",
      "hero.note":"e-META no es un chatbot: es un motor de inteligencia de decisión.",
      "form.badge.cabinet":"Modo consultora","form.title":"Formulario e-META vNext — Análisis estratégico premium",
      "form.intro":"Cuanto más precisas sean tus respuestas, más precisa y explotable será la recomendación.",
      "help.privacy":"Política de privacidad","help.guide":"Guía oficial",
      "group.general":"1) Calificar la decisión","group.analysis":"2) Estructurar el análisis",
      "group.budget":"3) Presupuesto y plazos","group.output":"4) Entrega y contacto","group.trust":"Confianza y consentimiento",
      "field.domain.label":"Dominio principal","field.domain.placeholder":"Seleccione un dominio",
      "field.decisionType.label":"Tipo de decisión","field.decisionType.placeholder":"Seleccione un tipo",
      "form.submit":"Generar mi recomendación e META","form.reset":"Restablecer",
      "field.domain.options":["Business / Estrategia","Finanzas","Marketing / Ventas","Operaciones","TI","Legal","Impacto / RSE","Otro"],
      "field.decisionType.options":["Estratégica","Operativa","Financiera","Marketing","Técnica","Otro"]
    }),
    ar: () => ({
      // (ar) minimal set — fill with full keys as required
      "meta.title":"e-META — مساعد اتخاذ القرار بالذكاء الاصطناعي",
      "header.tagline":"مساعد متعدد اللغات لاتخاذ القرار","nav.home":"الرئيسية","nav.form":"النموذج","nav.privacy":"الخصوصية",
      "hero.title":"امنح قراراتك مستوى استشاراتي مميز","hero.subtitle":"تحليل استراتيجي منظم، توصيات قابلة للتنفيذ وتسليمات مهنية.",
      "hero.cta":"بدء تحليل استراتيجي","form.submit":"إنشاء توصية e META","form.reset":"إعادة تعيين",
      "field.domain.options":["الأعمال / الاستراتيجية","المالية","التسويق / المبيعات","العمليات","تكنولوجيا المعلومات","القانون","التأثير / المسؤولية الاجتماعية","أخرى"],
      "field.decisionType.options":["استراتيجي","تشغيلي","مالي","تسويقي","تقني","أخرى"]
    })
  };

  // ---------- CACHE ----------
  const DICT_CACHE = {}; // stores loaded language dicts

  // ---------- UTIL ----------------
  function safeGet(dict, key) {
    return (dict && key in dict) ? dict[key] : '';
  }

  // ---------- APPLY TRANSLATIONS (batched) ----------
  async function applyTranslations(lang) {
    const dict = await loadLang(lang);
    // set html lang & dir
    d.documentElement.lang = lang;
    d.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem('emeta_lang', lang);

    // collect nodes once
    const textNodes = Array.from(d.querySelectorAll('[data-i18n]'));
    const placeholderNodes = Array.from(d.querySelectorAll('[data-i18n-placeholder]'));
    const optionNodes = Array.from(d.querySelectorAll('option[data-i18n]'));
    const selectAuto = Array.from(d.querySelectorAll('select[data-i18n-options]'));

    // batch DOM update inside rAF
    requestAnimationFrame(() => {
      // text content
      for (const el of textNodes) {
        const key = el.getAttribute('data-i18n');
        const v = safeGet(dict, key);
        if (v !== undefined && v !== null && v !== '') {
          // if element is input-like, set value; normally we set textContent
          el.textContent = v;
        }
      }

      // placeholders
      for (const el of placeholderNodes) {
        const key = el.getAttribute('data-i18n-placeholder');
        const v = safeGet(dict, key);
        if (v) el.setAttribute('placeholder', v);
      }

      // options that have data-i18n attribute
      for (const opt of optionNodes) {
        const key = opt.getAttribute('data-i18n');
        const v = safeGet(dict, key);
        if (v) opt.textContent = v;
      }

      // select auto-populate from arrays (data-i18n-options="field.domain.options")
      for (const sel of selectAuto) {
        const arrKey = sel.getAttribute('data-i18n-options');
        const values = safeGet(dict, arrKey);
        if (Array.isArray(values)) {
          // preserve current selected value if possible
          const current = sel.value;
          sel.innerHTML = ''; // clear
          // add placeholder option (if data-i18n-placeholder defined on select)
          const phKey = sel.getAttribute('data-i18n-placeholder');
          if (phKey) {
            const ph = safeGet(dict, phKey) || '';
            const o = d.createElement('option'); o.value = ''; o.textContent = ph; sel.appendChild(o);
          }
          values.forEach(v => {
            const o = d.createElement('option');
            o.value = v;
            o.textContent = v;
            sel.appendChild(o);
          });
          // try to restore previous value
          if (current) sel.value = current;
        }
      }

      // small fallbacks for help icons if empty
      d.querySelectorAll('.help-icon').forEach(icon => {
        if (icon.textContent.trim() === '') {
          // use aria-label or data-i18n (if present)
          icon.textContent = icon.getAttribute('aria-label') ? icon.getAttribute('aria-label').charAt(0) : '?';
        }
      });

      // update document title
      const titleKey = 'meta.title';
      const t = safeGet(dict, titleKey);
      if (t) document.title = t;
    });
  }

  // ---------- LOAD A LANGUAGE (lazy) ----------
  function loadLang(lang) {
    if (DICT_CACHE[lang]) return Promise.resolve(DICT_CACHE[lang]);
    // If loader exists, call it (synchronous call but deferred)
    const loader = LANG_LOADERS[lang] || LANG_LOADERS['fr'];
    try {
      const dict = loader();
      DICT_CACHE[lang] = dict;
      return Promise.resolve(dict);
    } catch (err) {
      console.error('i18n load error', err);
      const dict = LANG_LOADERS['fr']();
      DICT_CACHE['fr'] = dict;
      return Promise.resolve(dict);
    }
  }

  // ---------- PUBLIC API ----------
  const EMetaI18n = {
    async setLang(lang) {
      await applyTranslations(lang);
      // notify listeners
      const ev = new CustomEvent('emeta:langchanged', { detail: { lang } });
      w.dispatchEvent(ev);
    },
    async get(key, lang) {
      const l = lang || localStorage.getItem('emeta_lang') || (d.documentElement.lang || 'fr');
      const dict = await loadLang(l);
      return safeGet(dict, key);
    },
    // helper: immediate synchronous getter if dict cached
    tSync(key) {
      const l = localStorage.getItem('emeta_lang') || (d.documentElement.lang || 'fr');
      const dict = DICT_CACHE[l];
      return dict ? safeGet(dict, key) : '';
    }
  };

  // ---------- INIT: read saved lang or navigator ----------
  (function init() {
    const saved = localStorage.getItem('emeta_lang');
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'fr';
    const baseNav = (nav && nav.split('-')[0]) || 'fr';
    const startLang = saved || (['fr','en','es','ar'].includes(baseNav) ? baseNav : 'fr');
    // Expose global
    w.E_META_I18N = { setLang: EMetaI18n.setLang.bind(EMetaI18n), get: EMetaI18n.get.bind(EMetaI18n), tSync: EMetaI18n.tSync.bind(EMetaI18n) };
    // Apply language once DOM is ready
    if (d.readyState !== 'loading') {
      EMetaI18n.setLang(startLang);
    } else {
      d.addEventListener('DOMContentLoaded', () => EMetaI18n.setLang(startLang));
    }

    // Link lang-select UI (if present)
    d.addEventListener('DOMContentLoaded', () => {
      const sel = d.getElementById('langSelect');
      if (sel) {
        sel.value = startLang;
        sel.addEventListener('change', (e) => {
          EMetaI18n.setLang(e.target.value);
          // update privacy links to include ?lang=xx (so privacy.html keeps the same lang)
          d.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
            try {
              const url = new URL(a.href, location.href);
              url.searchParams.set('lang', e.target.value);
              a.href = url.toString();
            } catch(_){}
          });
        });
      }
    });
  })();

  // expose small util to window for debugging/advanced usage
  w.EMetaI18n = EMetaI18n;

})(window, document);
