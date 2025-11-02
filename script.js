/* script.js — VERSION AMELIOREE
 - cache-busting pour éviter les problèmes de cache
 - logs pour debug
 - packs -> chaque pack dans JSON peut contenir "fields" (array) pour rendre form dynamique
*/

const LANG_PATH = './frontend/lang/'; // dossier contenant fr.json, en.json, es.json, ar.json
const DEFAULT_LANG = 'fr';
const CONTACT_WA_NUMBER = '221782607212';

document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('langSelector');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  const saved = localStorage.getItem('emeta_lang') || DEFAULT_LANG;
  langSelector.value = saved;
  loadLang(saved);

  langSelector.addEventListener('change', (e) => {
    const code = e.target.value;
    loadLang(code);
    localStorage.setItem('emeta_lang', code);
  });

  const mobileBtn = document.getElementById('mobileMenuBtn');
  mobileBtn && mobileBtn.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    nav.style.display = (nav.style.display === 'block') ? '' : 'block';
  });

  document.getElementById('formCancel').addEventListener('click', hideForm);
  document.getElementById('packForm').addEventListener('submit', handleFormSubmit);
});

/* LOAD LANG with cache busting and debug logs */
async function loadLang(code){
  try{
    const url = `${LANG_PATH}${code}.json?t=${Date.now()}`; // cache-bust
    console.log('[i] loading language file:', url);
    const res = await fetch(url);
    if(!res.ok) throw new Error(`Cannot fetch ${url} (status ${res.status})`);
    const json = await res.json();
    console.log('[i] loaded JSON:', json);

    // set html lang (for RTL)
    document.documentElement.setAttribute('lang', code);

    // translate
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(key && (key in json)) el.innerText = json[key];
    });

    // render packs from json.packs (must be array)
    if(Array.isArray(json.packs)){
      renderPacks(json.packs, json);
    } else {
      console.warn('[!] lang JSON has no packs array:', code);
      document.getElementById('packsGrid').innerHTML = '<p>Pas de packs définis.</p>';
    }

    // update whatsapp button text param
    const wsa = document.getElementById('whatsappContact');
    if(wsa) {
      const text = json.btn_whatsapp_text || '';
      wsa.href = `https://wa.me/${CONTACT_WA_NUMBER}?text=${encodeURIComponent(text)}`;
    }

  } catch(err){
    console.error('[!] loadLang error', err);
  }
}

/* render packs (now expects pack objects, optionally pack.fields for dynamic form) */
function renderPacks(packs, langJson){
  const grid = document.getElementById('packsGrid');
  if(!grid) return;
  grid.innerHTML = '';

  packs.forEach((p, idx) => {
    // p = {name, desc, button, fields: [...]}
    const card = document.createElement('div');
    card.className = 'pack-card';
    const name = escapeHtml(p.name || `Pack ${idx+1}`);
    const desc = escapeHtml(p.desc || '');
    const btnLabel = escapeHtml(p.button || 'Ouvrir');

    card.innerHTML = `
      <h3>${name}</h3>
      <p>${desc}</p>
      <button class="btn btn-outline open-pack" data-pack-index="${idx}">${btnLabel}</button>
    `;
    grid.appendChild(card);
  });

  // bind
  document.querySelectorAll('.open-pack').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const index = parseInt(e.currentTarget.dataset.packIndex, 10);
      openFormForPackIndex(index);
    });
  });
}

/* open form for a pack by index - uses latest loaded JSON (we refetch current lang again to be safe) */
async function openFormForPackIndex(index){
  const lang = localStorage.getItem('emeta_lang') || DEFAULT_LANG;
  const url = `${LANG_PATH}${lang}.json?t=${Date.now()}`;
  try{
    const res = await fetch(url);
    const json = await res.json();
    const pack = (json.packs && json.packs[index]) ? json.packs[index] : null;
    if(!pack){
      console.error('Pack not found index', index);
      return;
    }
    renderFormForPack(pack);
  }catch(err){
    console.error('openFormForPackIndex error', err);
  }
}

/* Render dynamic form according to pack.fields (if no fields, render default ones) */
function renderFormForPack(pack){
  document.getElementById('packFormSection').classList.remove('hidden');
  document.getElementById('packName').value = pack.name || '';
  document.getElementById('formTitle').innerText = `Pack — ${pack.name || ''}`;

  const form = document.getElementById('packForm');
  const container = form.querySelector('#dynamicFieldsContainer');
  // if not exists, create a top placeholder after hidden input, otherwise clear
  let dyn = document.getElementById('dynamicFieldsContainer');
  if(!dyn){
    dyn = document.createElement('div');
    dyn.id = 'dynamicFieldsContainer';
    const packNameInput = document.getElementById('packName');
    packNameInput.parentNode.insertBefore(dyn, packNameInput.nextSibling);
  }
  dyn.innerHTML = ''; // clear

  const fields = pack.fields && pack.fields.length ? pack.fields : getDefaultFormFields();
  fields.forEach(f=>{
    const fieldEl = createFieldElement(f);
    dyn.appendChild(fieldEl);
  });

  // scroll to form
  window.scrollTo({top: document.getElementById('packFormSection').offsetTop - 80, behavior:'smooth'});
}

/* create input DOM from field descriptor:
   field = { key, type, label, placeholder, required, options (for select/checkbox) }
*/
function createFieldElement(f){
  const wrapper = document.createElement('div');
  wrapper.className = 'form-field';
  const label = document.createElement('label');
  label.innerText = f.label || f.key || '';
  label.setAttribute('for', `f_${f.key}`);
  wrapper.appendChild(label);

  let input;
  switch((f.type||'text').toLowerCase()){
    case 'textarea':
      input = document.createElement('textarea');
      input.rows = f.rows || 4;
      break;
    case 'select':
      input = document.createElement('select');
      (f.options||[]).forEach(opt=>{
        const o = document.createElement('option');
        o.value = opt.value || opt;
        o.innerText = opt.label || opt;
        input.appendChild(o);
      });
      break;
    case 'checkbox':
      input = document.createElement('input');
      input.type = 'checkbox';
      break;
    default:
      input = document.createElement('input');
      input.type = f.type || 'text';
  }
  input.id = `f_${f.key}`;
  input.name = f.key;
  if(f.placeholder) input.placeholder = f.placeholder;
  if(f.required) input.required = true;
  input.style.width = '100%';
  input.style.marginTop = '6px';
  wrapper.appendChild(input);
  return wrapper;
}

/* default fields used if pack doesn't declare specific fields */
function getDefaultFormFields(){
  return [
    {key:'name', type:'text', label:'Nom', placeholder:'Votre nom', required:true},
    {key:'email', type:'email', label:'Email', placeholder:'a@b.com'},
    {key:'phone', type:'tel', label:'Téléphone (WhatsApp)', placeholder:'+221...'},
    {key:'details', type:'textarea', label:'Détails', placeholder:'Décrivez votre besoin...'}
  ];
}

/* hide form */
function hideForm(){
  document.getElementById('packFormSection').classList.add('hidden');
  document.getElementById('packForm').reset();
  const dyn = document.getElementById('dynamicFieldsContainer');
  if(dyn) dyn.innerHTML = '';
}

/* handle submit: collect all fields (including dynamic ones) and behave like avant */
function handleFormSubmit(e){
  e.preventDefault();
  const form = e.currentTarget;
  const pack = document.getElementById('packName').value || 'Pack';
  // collect inputs
  const data = {};
  const inputs = form.querySelectorAll('input,textarea,select');
  inputs.forEach(i=>{
    if(!i.name) return;
    if(i.type === 'checkbox') data[i.name] = i.checked;
    else data[i.name] = i.value;
  });

  const mode = form.querySelector('input[name="mode"]:checked').value;
  const subject = `Demande pack: ${pack}`;
  let body = `Pack: ${pack}\n`;
  Object.keys(data).forEach(k=>{ body += `${k}: ${data[k]}\n`; });

  if(mode === 'email'){
    const mailto = `mailto:contact@e-meta.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    showFormMsg('Email client ouvert.');
  } else if(mode === 'whatsapp'){
    const text = `${subject}\n${body}`;
    const wa = `https://wa.me/${CONTACT_WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(wa,'_blank');
    showFormMsg('WhatsApp ouvert.');
  } else {
    showFormMsg('Merci — votre demande est affichée ci-dessous :');
    const disp = document.createElement('pre');
    disp.textContent = body;
    disp.style.background = '#fff';
    disp.style.padding = '12px';
    disp.style.borderRadius = '8px';
    disp.style.marginTop = '12px';
    document.getElementById('formMsg').appendChild(disp);
  }

  if(mode !== 'display'){
    setTimeout(()=>{ hideForm(); }, 900);
  }
}

function showFormMsg(msg){
  const el = document.getElementById('formMsg');
  el.textContent = msg;
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
