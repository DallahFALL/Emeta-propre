// script.js — gestion langue, modal et formulaire
const LANG_PATH = './lang/'; // put fr.json, en.json, es.json, ar.json here
const defaultLang = 'fr';
const langSelect = document.getElementById('langSelect');
const discoverBtn = document.getElementById('discoverBtn');
const packsGrid = document.getElementById('packsGrid');
const packModal = document.getElementById('packModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const packForm = document.getElementById('packForm');
const formResult = document.getElementById('formResult');
const waBtn = document.getElementById('whatsappBtn');

// fallback embedded langs if fetch fails
const embeddedLangs = {
  fr: {
    nav:{home:"Accueil",packs:"Découvrir les packs",about:"À propos",faq:"FAQ",contact:"Contact"},
    hero:{title:"e-META — L'assistant IA pluridisciplinaire", subtitle:"Packs de formulaires spécialisés, synthèses structurées et recommandations actionnables.", discover:"Découvrir les packs"},
    packs:{title:"Nos packs", subtitle:"Packs conçus pour diagnostiquer, prioriser et recommander des actions concrètes.", open:"Ouvrir", list:[
      {key:"marketing", title:"Marketing", desc:"Brief campagne, estimation budget et canaux."},
      {key:"funding", title:"Financement", desc:"Demande structurée, modèles financiers."},
      {key:"recruitment", title:"Recrutement", desc:"Brief rôle, budget et timeline."},
      {key:"product", title:"Produit", desc:"Positionnement, pricing, GTM."}
    ]},
    about:{title:"À propos", text:"e-META aide les acteurs de tous les secteurs à structurer leurs décisions via des packs de formulaires spécialisés et des synthèses actionnables."},
    faq:{title:"FAQ"},
    contact:{title:"Contact"},
    form:{teamLabel:"Taille de l'équipe", budgetLabel:"Budget indicatif", name:"Nom", email:"Email", phone:"Téléphone (WhatsApp)", details:"Détails", delivery:"Mode de restitution"}
  },
  en: {
    nav:{home:"Home",packs:"Packs",about:"About",faq:"FAQ",contact:"Contact"},
    hero:{title:"e-META — Multidisciplinary AI assistant", subtitle:"Specialized form packs, structured summaries and actionable recommendations.", discover:"Discover packs"},
    packs:{title:"Our packs", subtitle:"Packs designed to diagnose, prioritize and recommend concrete actions.", open:"Open", list:[
      {key:"marketing", title:"Marketing", desc:"Campaign brief, budget estimate and channels."},
      {key:"funding", title:"Funding", desc:"Structured funding request, financial models."},
      {key:"recruitment", title:"Recruitment", desc:"Role brief, budget and timeline."},
      {key:"product", title:"Product", desc:"Positioning, pricing, GTM."}
    ]},
    about:{title:"About", text:"e-META helps actors across sectors structure decisions via specialized form packs and actionable syntheses."},
    faq:{title:"FAQ"},
    contact:{title:"Contact"},
    form:{teamLabel:"Team size", budgetLabel:"Indicative budget", name:"Name", email:"Email", phone:"Phone (WhatsApp)", details:"Details", delivery:"Delivery mode"}
  },
  es: {
    nav:{home:"Inicio",packs:"Packs",about:"Acerca",faq:"FAQ",contact:"Contacto"},
    hero:{title:"e-META — Asistente IA multidisciplinario", subtitle:"Packs de formularios especializados, resúmenes estructurados y recomendaciones accionables.", discover:"Descubrir packs"},
    packs:{title:"Nuestros packs", subtitle:"Packs diseñados para diagnosticar, priorizar y recomendar acciones concretas.", open:"Abrir", list:[
      {key:"marketing", title:"Marketing", desc:"Brief campaña, estimación presupuesto y canales."},
      {key:"funding", title:"Financiación", desc:"Solicitud estructurada, modelos financieros."},
      {key:"recruitment", title:"Reclutamiento", desc:"Brief rol, presupuesto y cronograma."},
      {key:"product", title:"Producto", desc:"Posicionamiento, pricing, GTM."}
    ]},
    about:{title:"Acerca", text:"e-META ayuda a los actores de todos los sectores a estructurar sus decisiones mediante packs de formularios especializados y síntesis accionables."},
    faq:{title:"FAQ"},
    contact:{title:"Contacto"},
    form:{teamLabel:"Tamaño del equipo", budgetLabel:"Presupuesto indicativo", name:"Nombre", email:"Email", phone:"Teléfono (WhatsApp)", details:"Detalles", delivery:"Modo de entrega"}
  },
  ar: {
    nav:{home:"الصفحة الرئيسية",packs:"اكتشف الحزم",about:"معلومات عنا",faq:"الأسئلة الشائعة",contact:"اتصل"},
    hero:{title:"e-META — المساعد الذكي متعدد التخصصات", subtitle:"حزم نماذج متخصصة، ملخصات منظمة وتوصيات قابلة للتنفيذ.", discover:"اكتشف الحزم"},
    packs:{title:"حزمنا", subtitle:"حزم مصممة لتشخيص وتحديد الأولويات وتقديم توصيات قابلة للتنفيذ.", open:"فتح", list:[
      {key:"marketing", title:"التسويق", desc:"موجز الحملة وتقدير الميزانية والقنوات."},
      {key:"funding", title:"التمويل", desc:"طلب تمويل منظم ونماذج مالية."},
      {key:"recruitment", title:"التوظيف", desc:"وصف الدور والميزانية والجدول الزمني."},
      {key:"product", title:"المنتج", desc:"التسعير والموقع وخطة الإطلاق."}
    ]},
    about:{title:"معلومات عنا", text:"يساعد e-META الجهات في جميع القطاعات على تنظيم قراراتها عبر حزم استمارات متخصصة وملخصات قابلة للتنفيذ."},
    faq:{title:"الأسئلة الشائعة"},
    contact:{title:"اتصل"},
    form:{teamLabel:"حجم الفريق", budgetLabel:"الميزانية التقديرية", name:"الاسم", email:"البريد الإلكتروني", phone:"الهاتف (واتساب)", details:"تفاصيل", delivery:"نمط الاستجابة"}
  }
};

// small helper to apply translations to elements with data-i18n
function applyTranslations(langObj){
  // nav & basic
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    // key like "nav.home" or "hero.title"
    const parts = key.split('.');
    let value = langObj;
    for(let p of parts){
      if(value && p in value) value = value[p]; else { value = null; break; }
    }
    if(value) el.innerText = value;
  });

  // hero title & subtitle handled above; packs handled below
  // packs grid: update card titles & descriptions and button text
  if(langObj.packs && Array.isArray(langObj.packs.list)){
    const list = langObj.packs.list;
    const cards = packsGrid.querySelectorAll('.pack-card');
    cards.forEach(card=>{
      const key = card.dataset.pack;
      const item = list.find(i => i.key === key);
      if(item){
        card.querySelector('.pack-title').innerText = item.title;
        card.querySelector('.pack-desc').innerText = item.desc;
      }
    });
  }
  // modal labels
  if(langObj.form){
    document.querySelector('label[for="teamSize"]').innerText = langObj.form.teamLabel;
    document.querySelector('label[for="budget"]').innerText = langObj.form.budgetLabel;
    document.querySelector('label[for="name"]').innerText = langObj.form.name;
    document.querySelector('label[for="email"]').innerText = langObj.form.email;
    document.querySelector('label[for="phone"]').innerText = langObj.form.phone;
    document.querySelector('label[for="details"]').innerText = langObj.form.details;
    document.querySelector('.delivery legend').innerText = langObj.form.delivery || document.querySelector('.delivery legend').innerText;
  }
}

// load language JSON (fetch) with fallback
async function loadLang(code){
  try{
    const resp = await fetch(`${LANG_PATH}${code}.json`, {cache:'no-cache'});
    if(!resp.ok) throw new Error('no json');
    const data = await resp.json();
    applyTranslations(data);
    document.documentElement.lang = code;
    document.documentElement.dir = (code === 'ar' ? 'rtl' : 'ltr');
    // set select
    langSelect.value = code;
    // store
    localStorage.setItem('emeta-lang', code);
  }catch(e){
    // fallback to embedded
    const data = embeddedLangs[code] || embeddedLangs[defaultLang];
    applyTranslations(data);
    document.documentElement.lang = code;
    document.documentElement.dir = (code === 'ar' ? 'rtl' : 'ltr');
    langSelect.value = code;
    localStorage.setItem('emeta-lang', code);
  }
}

// init language at load
const initialLang = localStorage.getItem('emeta-lang') || defaultLang;
document.addEventListener('DOMContentLoaded', ()=> {
  loadLang(initialLang);
});

// language switcher
langSelect.addEventListener('change', (e)=> loadLang(e.target.value));

// handlers for opening modal (pack buttons)
document.addEventListener('click', (ev)=>{
  const btn = ev.target.closest('.open-pack');
  if(btn){
    ev.preventDefault();
    const packKey = btn.dataset.pack || '';
    openModal(packKey);
  }
});

// discover button open modal without pack or with default
discoverBtn.addEventListener('click', ()=> openModal(''));

// modal logic
function openModal(packKey){
  packModal.setAttribute('aria-hidden','false');
  packModal.style.display = 'block';
  modalTitle.innerText = packKey ? `Pack — ${packKey}` : 'Pack — Demande';
  document.getElementById('packKey').value = packKey;
  // reset form
  packForm.reset();
  formResult.innerText = '';
  // focus first field
  setTimeout(()=> document.getElementById('query').focus(),250);
}

function closeModal(){
  packModal.setAttribute('aria-hidden','true');
  packModal.style.display = 'none';
}

modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.getElementById('cancelForm').addEventListener('click', (e)=>{
  e.preventDefault(); closeModal();
});

// form submit: simplistic actions depending on delivery
packForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(packForm).entries());
  // prepare message
  const subject = `Demande e-META — ${data.packKey || 'générale'}`;
  const body = [
    `Pack: ${data.packKey || 'général'}`,
    `Requête: ${data.query||'-'}`,
    `Taille équipe: ${data.teamSize||'-'}`,
    `Budget: ${data.budget||'-'}`,
    `Nom: ${data.name||'-'}`,
    `Email: ${data.email||'-'}`,
    `Phone: ${data.phone||'-'}`,
    `Détails: ${data.details||'-'}`
  ].join('\n');

  const delivery = data.delivery || 'email';
  if(delivery === 'email'){
    const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    formResult.innerText = 'Ouverture du client e-mail...';
  } else if(delivery === 'whatsapp'){
    // open whatsapp link prefilled
    const text = `${subject}\n\n${body}`;
    const waUrl = `https://wa.me/221782607212?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    formResult.innerText = 'Ouverture de WhatsApp...';
  } else {
    // display on page (simple)
    formResult.innerText = 'Votre demande : ' + body.replace(/\n/g,' | ');
  }
  // keep modal open briefly so user sees result, then close
  setTimeout(()=>{ closeModal(); },1200);
});

// WhatsApp CTA top
waBtn.addEventListener('click', ()=>{
  window.open('https://wa.me/221782607212', '_blank');
});

// simple menu toggle for mobile (optional)
document.getElementById('menuToggle').addEventListener('click', ()=>{
  const nav = document.querySelector('.nav-list');
  nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
});
