// script.js - minimal, optimized
document.addEventListener('DOMContentLoaded', function () {
  const STORAGE_KEY = 'emeta_lang';
  const DEFAULT_LANG = 'fr';
  const RTL = ['ar'];

  function resolveLang(){
    const p = new URLSearchParams(location.search).get('lang');
    return p || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
    // toggle rtl stylesheet if exists
    const rtlSheet = document.getElementById('rtlStylesheet');
    if(rtlSheet) rtlSheet.disabled = !RTL.includes(lang);
  }

  function applyI18n(lang){
    const dict = window.I18N && window.I18N[lang] ? window.I18N[lang] : window.I18N['fr'];
    // data-i18n text
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key]) el.placeholder = dict[key];
    });
    // update title if present
    const tEl = document.querySelector('title[data-i18n]');
    if(tEl && dict['meta.title']) document.title = dict['meta.title'];

    // populate selects that come from options arrays
    const domainSelect = document.getElementById('domain');
    const typeSelect = document.getElementById('decisionType');
    if(domainSelect && dict['field.domain.options']){
      // refill if empty or different language
      fillSelect(domainSelect, dict['field.domain.options'], dict['field.domain.placeholder']);
    }
    if(typeSelect && dict['field.decisionType.options']){
      fillSelect(typeSelect, dict['field.decisionType.options'], dict['field.decisionType.placeholder']);
    }

    // update privacy links to carry lang param
    document.querySelectorAll('a[href*="privacy.html"]').forEach(a=>{
      try{
        const url = new URL(a.href, location.href);
        url.searchParams.set('lang', lang);
        a.href = url.toString();
      } catch(e){}
    });

    // update PDF link if present
    const pdfMap = { fr: 'docs/privacy_fr.pdf', en: 'docs/privacy_en.pdf', es: 'docs/privacy_es.pdf', ar: 'docs/privacy_ar.pdf' };
    const pdfEl = document.getElementById('pdfPrivacyLink');
    if(pdfEl) pdfEl.href = pdfMap[lang] || pdfMap.fr;
  }

  function fillSelect(selectEl, arr, placeholder){
    // only re-create if needed
    selectEl.innerHTML = '';
    if(placeholder){
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = placeholder;
      opt.disabled = true;
      opt.selected = true;
      selectEl.appendChild(opt);
    }
    const frag = document.createDocumentFragment();
    arr.forEach(item=>{
      const o = document.createElement('option');
      o.value = item;
      o.textContent = item;
      frag.appendChild(o);
    });
    selectEl.appendChild(frag);
  }

  // init
  const currentLang = resolveLang();
  setLang(currentLang);
  applyI18n(currentLang);

  // lang select UI
  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function(){
      const v = this.value;
      setLang(v);
      applyI18n(v);
    });
  }

  // burger menu
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  if(burger && nav){
    burger.addEventListener('click', function(){
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> {
      if(window.innerWidth <= 820) { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded','false'); }
    }));
  }

  // simple smooth scroll for start button and anchor links
  document.getElementById('startBtn')?.addEventListener('click', ()=> {
    document.getElementById('form')?.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // header shrink class on scroll (light)
  const header = document.querySelector('.site-header');
  if(header){
    let lastY = 0, ticking = false;
    window.addEventListener('scroll', function(){
      lastY = window.scrollY;
      if(!ticking){
        requestAnimationFrame(function(){
          header.classList.toggle('is-shrink', lastY > 40);
          ticking = false;
        });
        ticking = true;
      }
    }, {passive:true});
  }

  // keep performance: avoid heavy DOM queries in loops
});
