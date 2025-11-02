// script.js
const LANG_PATH = 'lang/';
let LANG = 'fr';
let translations = {};
const packs = [
  { id:'marketing', title:{fr:'Marketing', en:'Marketing'}, desc:{fr:'Brief campagne, estimation budget et canaux.', en:'Campaign brief, budget estimate and channels.'}},
  { id:'financement', title:{fr:'Financement', en:'Funding'}, desc:{fr:'Demande structurée, modèles financiers.', en:'Structured funding request, financial models.'}},
  { id:'recrutement', title:{fr:'Recrutement', en:'Recruitment'}, desc:{fr:'Brief rôle, budget et timeline.', en:'Role brief, budget and timeline.'}},
  { id:'produit', title:{fr:'Produit', en:'Product'}, desc:{fr:'Positionnement, pricing, GTM.', en:'Positioning, pricing, GTM.'}},
  { id:'agriculture', title:{fr:'Agriculture', en:'Agriculture'}, desc:{fr:'Optimisation cultures, irrigation, stockage.', en:'Crop optimization, irrigation, storage.'}},
  { id:'energie', title:{fr:'Énergie', en:'Energy'}, desc:{fr:'Solutions solaires, mini-grids.', en:'Solar solutions, mini-grids.'}}
];

document.addEventListener('DOMContentLoaded', ()=> {
  const langSelect = document.getElementById('langSelect');
  langSelect.value = LANG;
  langSelect.addEventListener('change', e => {
    LANG = e.target.value;
    applyTranslations();
    renderPacks();
  });

  applyTranslations();
  renderPacks();
  setupModal();
  document.getElementById('discoverBtn').addEventListener('click', ()=> location.href='#packs');
  document.getElementById('contactBtn').addEventListener('click', ()=> openWhatsApp("+221782607212", "Bonjour, je veux en savoir plus sur e-META"));
});

function applyTranslations(){
  fetch(`${LANG_PATH}${LANG}.json`).then(r=>{
    if(r.ok) return r.json();
    return {};
  }).catch(()=> ({})).then(json=>{
    translations = json || {};
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(translations[key]) el.textContent = translations[key];
    });
  });
}

function renderPacks(){
  const grid = document.getElementById('packsGrid');
  grid.innerHTML = '';
  packs.forEach(p=>{
    const title = p.title[LANG] || p.title.fr;
    const desc = p.desc[LANG] || p.desc.fr;
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${title}</h3><p class="muted">${desc}</p><p><a href="#" class="open-pack" data-id="${p.id}">Ouvrir</a></p>`;
    grid.appendChild(card);
  });

  // events
  document.querySelectorAll('.open-pack').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const id = a.dataset.id;
      const pack = packs.find(p=>p.id===id);
      openModalForPack(pack);
    });
  });
}

/* Modal */
function setupModal(){
  const modal = document.getElementById('formModal');
  const close = document.getElementById('modalClose');
  const cancel = document.getElementById('formCancel');
  [close, cancel].forEach(btn => btn && btn.addEventListener('click', ()=> closeModal()));
  document.getElementById('packForm').addEventListener('submit', handleFormSubmit);
}

function openModalForPack(pack){
  document.getElementById('packName').textContent = pack.title[LANG] || pack.title.fr;
  document.getElementById('formModal').setAttribute('aria-hidden','false');
  document.getElementById('packForm').dataset.pack = pack.id;
  document.getElementById('packForm').reset();
  document.getElementById('resultArea').hidden = true;
}

function closeModal(){ document.getElementById('formModal').setAttribute('aria-hidden','true'); }

function handleFormSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  const packId = form.dataset.pack || 'unknown';
  const pack = packs.find(p=>p.id===packId) || {title:{fr:'Pack',en:'Pack'}};

  const bodyText = `Demande e-META: pack=${packId}\nNom: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nDétails:\n${payload.details}`;

  const mode = payload.delivery || 'email';

  if(mode === 'email'){
    const to = 'contact@e-meta.app';
    const subject = encodeURIComponent(`Demande pack ${pack.title[LANG] || pack.title.fr}`);
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    closeModal();
    return;
  }

  if(mode === 'whatsapp'){
    const phone = (payload.phone && payload.phone.trim()) ? payload.phone : '+221782607212';
    const phoneNormalized = phone.replace(/[^\d]/g,'');
    const msg = encodeURIComponent(bodyText);
    window.open(`https://wa.me/${phoneNormalized}?text=${msg}`, '_blank');
    closeModal();
    return;
  }

  if(mode === 'inline'){
    const resultArea = document.getElementById('resultArea');
    const content = document.getElementById('resultContent');
    const short = `${pack.title[LANG] || pack.title.fr} — Recommandation initiale : clarifier l'objectif, définir le budget et les priorités. (Synthèse automatique).`;
    content.textContent = short;
    resultArea.hidden = false;
    return;
  }
}

/* helper */
function openWhatsApp(phone, text){
  const phoneClean = phone.replace(/[^\d]/g,'');
  window.open(`https://wa.me/${phoneClean}?text=${encodeURIComponent(text)}`, '_blank');
}
