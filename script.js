/* v3.6 — dynamique : langue, placeholders, domaines & devises, header/footer + WhatsApp.
   Gère aussi le sélecteur de langue responsive avec drapeau. */

const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
const ls = window.localStorage;

const state = {
  lang: ls.getItem('lang') || 'fr',
  flags: { fr:'🇫🇷', en:'🇬🇧', es:'🇪🇸', ar:'🇸🇦' }
};

/* ========= Dictionnaire ========= */
const t = {
  fr:{
    nav_home:'Accueil', nav_about:'À propos', nav_faq:'FAQ', nav_contact:'Contact',
    hero_title:"e-META — L’assistant IA pluridisciplinaire",
    hero_sub:"Formulaire intelligent pour analyser, diagnostiquer et recommander des solutions adaptées.",
    form_title:'Requête personnalisée',
    label_domain:'Domaine / Thème', label_expected:'Résultat attendu',
    label_budget:'Budget indicatif', label_currency:'Devise',
    label_fullname:'Nom complet', label_phone:'Téléphone (WhatsApp)',
    label_details:'Détails / Contexte', label_mode:'Mode de restitution',
    mode_whatsapp:'WhatsApp', mode_email:'Email', mode_display:'Affichage direct',
    btn_send:'Envoyer la requête', btn_reset:'Réinitialiser',
    about_title:'À propos',
    about_body:'e-META structure les demandes et produit une synthèse stratégique adaptée au contexte.',
    faq_q1:'Comment fonctionne e-META ?',
    faq_a1:"Vous remplissez le formulaire, l’IA analyse vos éléments (domaine, objectifs, budget, contraintes), puis génère une synthèse et des recommandations personnalisées. La restitution arrive selon le mode choisi : WhatsApp, email, ou affichage direct.",
    contact_title:'Contact',
    footer_line:'© 2025 e-META • Simplement. Intelligemment.',
    ph_expected:'Ex : Dossier de financement, plan stratégique, prototype…',
    ph_budget:'Montant estimé',
    ph_fullname:'Votre nom complet',
    ph_phone:'+221…',
    ph_email:'exemple@mail.com',
    ph_details:'Décrivez le contexte, contraintes ou priorités…'
  },
  en:{
    nav_home:'Home', nav_about:'About', nav_faq:'FAQ', nav_contact:'Contact',
    hero_title:"e-META — The Multidisciplinary AI Assistant",
    hero_sub:"Smart form to analyze, diagnose and recommend tailored solutions.",
    form_title:'Custom Request',
    label_domain:'Domain / Topic', label_expected:'Expected result',
    label_budget:'Indicative budget', label_currency:'Currency',
    label_fullname:'Full name', label_phone:'Phone (WhatsApp)',
    label_details:'Details / Context', label_mode:'Delivery mode',
    mode_whatsapp:'WhatsApp', mode_email:'Email', mode_display:'Direct display',
    btn_send:'Send request', btn_reset:'Reset',
    about_title:'About',
    about_body:'e-META structures requests and produces a strategy summary tailored to the context.',
    faq_q1:'How does e-META work?',
    faq_a1:"You fill the form; the AI analyzes your inputs (domain, goals, budget, constraints) and generates a tailored summary & recommendations. Delivery is sent via WhatsApp, email, or shown on screen.",
    contact_title:'Contact',
    footer_line:'© 2025 e-META • Simply. Intelligently.',
    ph_expected:'Ex: Funding file, strategic plan, prototype…',
    ph_budget:'Estimated amount',
    ph_fullname:'Your full name',
    ph_phone:'+221…',
    ph_email:'example@mail.com',
    ph_details:'Describe the context, constraints or priorities…'
  },
  es:{
    nav_home:'Inicio', nav_about:'Acerca de', nav_faq:'FAQ', nav_contact:'Contacto',
    hero_title:"e-META — El asistente de IA multidisciplinario",
    hero_sub:"Formulario inteligente para analizar, diagnosticar y recomendar soluciones adaptadas.",
    form_title:'Solicitud personalizada',
    label_domain:'Dominio / Tema', label_expected:'Resultado esperado',
    label_budget:'Presupuesto indicativo', label_currency:'Moneda',
    label_fullname:'Nombre completo', label_phone:'Teléfono (WhatsApp)',
    label_details:'Detalles / Contexto', label_mode:'Modo de restitución',
    mode_whatsapp:'WhatsApp', mode_email:'Email', mode_display:'Visualización directa',
    btn_send:'Enviar solicitud', btn_reset:'Restablecer',
    about_title:'Acerca de',
    about_body:'e-META estructura las solicitudes y produce un resumen estratégico adaptado al contexto.',
    faq_q1:'¿Cómo funciona e-META?',
    faq_a1:"Completa el formulario; la IA analiza tus datos (dominio, objetivos, presupuesto, limitaciones) y genera un resumen con recomendaciones. La entrega llega por WhatsApp, correo o se muestra en pantalla.",
    contact_title:'Contacto',
    footer_line:'© 2025 e-META • Simplemente. Inteligentemente.',
    ph_expected:'Ej.: Archivo de financiación, plan estratégico, prototipo…',
    ph_budget:'Monto estimado',
    ph_fullname:'Tu nombre completo',
    ph_phone:'+221…',
    ph_email:'ejemplo@mail.com',
    ph_details:'Describe el contexto, limitaciones o prioridades…'
  },
  ar:{
    nav_home:'الرئيسية', nav_about:'حول', nav_faq:'الأسئلة الشائعة', nav_contact:'اتصال',
    hero_title:"e-META — المساعد الذكي متعدّد المجالات",
    hero_sub:"نموذج ذكي للتحليل والتشخيص وتوصية حلول مناسبة.",
    form_title:'طلب مخصص',
    label_domain:'المجال / الموضوع', label_expected:'النتيجة المتوقعة',
    label_budget:'الميزانية التقديرية', label_currency:'العملة',
    label_fullname:'الاسم الكامل', label_phone:'الهاتف (واتساب)',
    label_details:'التفاصيل / السياق', label_mode:'طريقة الاسترجاع',
    mode_whatsapp:'واتساب', mode_email:'البريد', mode_display:'عرض مباشر',
    btn_send:'إرسال الطلب', btn_reset:'إعادة الضبط',
    about_title:'حول',
    about_body:'يقوم e-META بهيكلة الطلبات وإنتاج خلاصة استراتيجية مناسبة للسياق.',
    faq_q1:'كيف يعمل e-META؟',
    faq_a1:"تملأ النموذج، والذكاء الاصطناعي يحلّل المعطيات (مجال، أهداف، ميزانية، قيود) وينتج خلاصة وتوصيات مخصّصة. يتم الإرسال عبر واتساب أو البريد أو العرض المباشر.",
    contact_title:'اتصال',
    footer_line:'© 2025 e-META • ببساطة. بذكاء.',
    ph_expected:'مثال: ملف تمويل، خطة استراتيجية، نموذج أولي…',
    ph_budget:'المبلغ المقدّر',
    ph_fullname:'اسمك الكامل',
    ph_phone:'+221…',
    ph_email:'example@mail.com',
    ph_details:'اشرح السياق أو القيود أو الأولويات…'
  }
};

/* ========= Domaines & Devises ========= */
const domainCatalog = [
  'Agriculture','Environnement','Énergie','Commerce','E-commerce','Finance','FinTech',
  'Financement','Marketing','Technologie','Éducation','Santé','Transport','Immobilier',
  'Industrie','Tourisme','Logistique','Sécurité','Gouvernance','Culture'
];

const currencies = [
  ['XOF','Franc CFA'], ['USD','US Dollar'], ['EUR','Euro'], ['GBP','Pound Sterling'],
  ['MAD','Moroccan Dirham'], ['DZD','Algerian Dinar'], ['NGN','Naira'],
  ['GHS','Ghana Cedi'], ['CNY','Chinese Yuan'], ['JPY','Japanese Yen'],
  ['CAD','Canadian Dollar'], ['AUD','Australian Dollar'], ['CHF','Swiss Franc'],
  ['MRO','Mauritanian Ouguiya'], ['MRU','Mauritanian Ouguiya (new)'],
  ['TND','Tunisian Dinar'], ['EGP','Egyptian Pound'], ['ZAR','South African Rand'],
  ['INR','Indian Rupee'], ['BRL','Brazilian Real'], ['SAR','Saudi Riyal'],
  ['AED','UAE Dirham'], ['TRY','Turkish Lira']
];

/* Traductions d’options */
const domainMap = {
  fr: domainCatalog,
  en: ['Agriculture','Environment','Energy','Trade','E-commerce','Finance','FinTech','Funding','Marketing','Technology','Education','Health','Transport','Real estate','Industry','Tourism','Logistics','Security','Governance','Culture'],
  es: ['Agricultura','Medio ambiente','Energía','Comercio','E-commerce','Finanzas','FinTech','Financiación','Marketing','Tecnología','Educación','Salud','Transporte','Inmobiliario','Industria','Turismo','Logística','Seguridad','Gobernanza','Cultura'],
  ar: ['الزراعة','البيئة','الطاقة','التجارة','التجارة الإلكترونية','المالية','فينتك','التمويل','التسويق','التكنولوجيا','التعليم','الصحة','النقل','العقارات','الصناعة','السياحة','اللوجستيات','الأمن','الحوكمة','الثقافة']
};

const currencyMap = {
  label: { fr:'Devise', en:'Currency', es:'Moneda', ar:'العملة' },
  fr: currencies.map(([c,n]) => `${c} — ${n === 'Franc CFA' ? 'Franc CFA' : n}`),
  en: currencies.map(([c,n]) => `${c} — ${n}`),
  es: currencies.map(([c,n]) => `${c} — ${n === 'US Dollar' ? 'Dólar americano' : n}`),
  ar: currencies.map(([c,n]) => `${c} — ${n === 'US Dollar' ? 'دولار أمريكي' : n}`)
};

/* ========= Helpers ========= */
function setI18nText(){
  const dict = t[state.lang];

  // textes simples
  $$('[data-i18n]').forEach(el => { el.textContent = dict[el.dataset.i18n] || el.textContent; });

  // placeholders
  $$('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) el.placeholder = dict[key];
  });

  // direction RTL pour AR
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = state.lang;
}

function populateSelect(select, options){
  select.innerHTML = '';
  options.forEach(txt => {
    const opt = document.createElement('option');
    opt.textContent = txt; opt.value = txt;
    select.appendChild(opt);
  });
}

function refreshDomainAndCurrency(){
  populateSelect($('#domain'), domainMap[state.lang]);
  populateSelect($('#currency'), currencyMap[state.lang]);
}

function setFlagAndLabel(){
  $('#flagCurrent').textContent = state.flags[state.lang] || '🏳️';
  $('#langLabel').textContent = state.lang.toUpperCase();
}

/* WhatsApp bouton : simple placeholder d’URL (à adapter) */
function refreshWA(){
  const url = 'https://wa.me/221782607212';
  $('#waBtn').setAttribute('href', url);
}

/* ========= Événements ========= */
function bindLangSelector(){
  const btn = $('#langCurrent');
  const menu = $('#languageSelect');

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? 'none' : 'block';
  });

  // Choix langue
  $$('#languageSelect li').forEach(li=>{
    li.addEventListener('click', ()=>{
      const lang = li.dataset.lang;
      state.lang = lang;
      ls.setItem('lang', lang);
      setFlagAndLabel();
      setI18nText();
      refreshDomainAndCurrency();
      refreshWA();
      // Fermer le menu
      $('#languageSelect').style.display = 'none';
      $('#langCurrent').setAttribute('aria-expanded','false');
    });
  });

  // Ferme au clic extérieur
  document.addEventListener('click', (e)=>{
    if (!$('.lang-wrap').contains(e.target)) {
      menu.style.display = 'none';
      btn.setAttribute('aria-expanded','false');
    }
  });
}

/* Menu mobile */
function bindNav(){
  const tg = $('#navToggle');
  const list = $('#mainNav');
  if (!tg) return;
  tg.addEventListener('click', ()=>{
    const open = list.classList.toggle('open');
    tg.setAttribute('aria-expanded', String(open));
  });
}

/* Submit (démo) */
$('#metaForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const form = new FormData(e.target);
  // Ici vous pouvez router vers WhatsApp / email / affichage selon radio sélectionné.
  alert('✅ Requête prête. (Démo) — Intégrer l’envoi réel ensuite.');
});

/* ========= Init ========= */
function init(){
  setFlagAndLabel();
  setI18nText();
  refreshDomainAndCurrency();
  refreshWA();
  bindLangSelector();
  bindNav();
}
document.addEventListener('DOMContentLoaded', init);
