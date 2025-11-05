/* script.js - Version corrective pour localisation des packs + formulaire dynamique */
const LANG_DIR = './frontend/lang/'; // chemin vers vos JSON (vérifier que ce dossier existe)
const DEFAULT_LANG = 'fr';
const WHATSAPP_NUMBER = '221782607212';

let currentLangCode = DEFAULT_LANG;
let currentLangJson = null;

document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelector');
  // set saved or default
  const saved = localStorage.getItem('emeta_lang') || DEFAULT_LANG;
  if(langSelect) langSelect.value = saved;
  loadLang(saved);

  if(langSelect){
    langSelect.addEventListener('change', (e) => {
      const code = e.target.value;
      localStorage.setItem('emeta_lang', code);
      loadLang(code);
    });
  }

  // cancel button form
  const cancelBtn = document.getElementById('formCancel');
  if(cancelBtn) cancelBtn.addEventListener('click', hideForm);

  // form submit
  const form = document.getElementById('packForm');
  if(form) form.addEventListener('submit', handleFormSubmit);
});

/* Charge le JSON de langue (cache-bust) et stocke globalement */
async function loadLang(code){
  try{
    const url = `${LANG_DIR}${code}.json?t=${Date.now()}`;
    console.log('[i] fetch lang:', url);
    const res = await fetch(url);
    if(!res.ok) throw new Error(`fetch ${url} status ${res.status}`);
    const json = await res.json();
    currentLangCode = code;
    currentLangJson = json;
    document.documentElement.lang = code;

    // texte statique (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(key && json[key]) el.innerText = json[key];
    });

    // rendre packs depuis json.packs
    if(Array.isArray(json.packs)){
      renderPacks(json.packs);
    } else {
      document.getElementById('packsGrid').innerHTML = '<p>Pas de packs définis.</p>';
    }

    // mettre à jour lien whatsapp si présent
    const w = document.getElementById('whatsappContact');
    if(w && json.btn_whatsapp_text) {
      w.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(json.btn_whatsapp_text)}`;
    }

    console.log('[i] langue chargée:', code);
  }catch(err){
    console.error('[!] loadLang error', err);
  }
}

/* Render des packs à partir d'un tableau pack[] localisé */
function renderPacks(packs){
  const grid = document.getElementById('packsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  packs.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pack-card';
    const name = escapeHtml(p.name || `Pack ${i+1}`);
    const desc = escapeHtml(p.desc || '');
    const btnText = escapeHtml(p.button || (currentLangJson && currentLangJson.open_btn) || 'Ouvrir');

    card.innerHTML = `
      <h3 class="pack-title">${name}</h3>
      <p class="pack-desc">${desc}</p>
      <button class="btn open-pack" data-index="${i}">${btnText}</button>
    `;
    grid.appendChild(card);
  });

  // events
  document.querySelectorAll('.open-pack').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const idx = parseInt(e.currentTarget.dataset.index, 10);
      openFormForPack(idx);
    });
  });
}

/* Ouvre le formulaire basé sur la définition du pack (fields) */
function openFormForPack(index){
  if(!currentLangJson || !Array.isArray(currentLangJson.packs)) return;
  const pack = currentLangJson.packs[index];
  if(!pack) return;
  // show form section
  document.getElementById('packFormSection').classList.remove('hidden');
  document.getElementById('formTitle').innerText = `${currentLangJson.form_title_prefix || 'Pack —'} ${pack.name}`;
  document.getElementById('packName').value = pack.name || '';

  // dynamic fields
  const containerId = 'dynamicFields';
  let container = document.getElementById(containerId);
  if(!container){
    container = document.createElement('div');
    container.id = containerId;
    document.getElementById('packForm').insertBefore(container, document.getElementById('formActions'));
  }
  container.innerHTML = ''; // clear

  const fields = (Array.isArray(pack.fields) && pack.fields.length) ? pack.fields : defaultFields();
  fields.forEach(f => container.appendChild(createFieldDom(f)));
  window.scrollTo({top: document.getElementById('packFormSection').offsetTop - 80, behavior:'smooth'});
}

/* crée DOM d'un champ */
function createFieldDom(f){
  const wr = document.createElement('div');
  wr.className = 'form-field';
  const label = document.createElement('label');
  label.setAttribute('for', `f_${f.key}`);
  label.innerText = f.label || f.key || '';
  wr.appendChild(label);

  let input;
  const t = (f.type || 'text').toLowerCase();
  if(t === 'textarea'){
    input = document.createElement('textarea');
    input.rows = f.rows || 4;
  } else if(t === 'select'){
    input = document.createElement('select');
    (f.options||[]).forEach(o=>{
      const opt = document.createElement('option');
      opt.value = o.value || o;
      opt.innerText = o.label || o;
      input.appendChild(opt);
    });
  } else {
    input = document.createElement('input');
    input.type = f.type || 'text';
  }
  input.id = `f_${f.key}`;
  input.name = f.key;
  if(f.placeholder) input.placeholder = f.placeholder;
  if(f.required) input.required = true;
  input.className = 'form-input';
  wr.appendChild(input);
  return wr;
}

/* valeurs par défaut */
function defaultFields(){
  return [
    {key:'name', type:'text', label:'Nom', placeholder:'Votre nom', required:true},
    {key:'email', type:'email', label:'Email', placeholder:'a@b.com'},
    {key:'phone', type:'tel', label:'Téléphone (WhatsApp)', placeholder:'+221...'},
    {key:'details', type:'textarea', label:'Détails', placeholder:'Expliquez votre besoin...'}
  ];
}

/* hide form */
function hideForm(){
  document.getElementById('packFormSection').classList.add('hidden');
  document.getElementById('packForm').reset();
  const dyn = document.getElementById('dynamicFields');
  if(dyn) dyn.innerHTML = '';
  document.getElementById('formMsg').innerHTML = '';
}

/* submit handling */
function handleFormSubmit(e){
  e.preventDefault();
  const f = e.target;
  const formData = {};
  f.querySelectorAll('input,textarea,select').forEach(i=>{
    if(!i.name) return;
    if(i.type === 'checkbox') formData[i.name] = i.checked;
    else formData[i.name] = i.value;
  });
  const mode = f.querySelector('input[name="mode"]:checked') ? f.querySelector('input[name="mode"]:checked').value : 'email';
  const subject = `Demande pack: ${formData.packName || formData.pack || ''}`;
  let body = `${subject}\n\n`;
  Object.keys(formData).forEach(k => { body += `${k}: ${formData[k]}\n`; });

  if(mode === 'email'){
    const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  } else if(mode === 'whatsapp'){
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    window.open(wa, '_blank');
  } else {
    // affichage direct
    const disp = document.createElement('pre');
    disp.textContent = body;
    document.getElementById('formMsg').appendChild(disp);
  }
  setTimeout(hideForm, 800);
}

function escapeHtml(s){
  return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
