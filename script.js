// script.js — apply i18n, populate selects, handle burger and mobile behavior
document.addEventListener('DOMContentLoaded', ()=>{
  const STORAGE_KEY = 'emeta_lang';
  const DEFAULT_LANG = 'fr';
  const RTL = ['ar'];

  function resolveLang(){
    return new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }
  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
  }

  function applyI18n(lang){
    const dict = window.getI18n(lang);
    if(!dict) return;
    // text content
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key]) el.placeholder = dict[key];
    });
  }

  function populateSelects(lang){
    const dict = window.getI18n(lang);
    const domainSelect = document.getElementById('domain');
    const typeSelect = document.getElementById('decisionType');
    if(domainSelect && dict['field.domain.options']){
      domainSelect.innerHTML = '<option value="">'+(dict['field.domain.placeholder']||'---')+'</option>'
        + dict['field.domain.options'].map(opt=>`<option value="${opt}">${opt}</option>`).join('');
    }
    if(typeSelect && dict['field.decisionType.options']){
      typeSelect.innerHTML = '<option value="">'+(dict['field.decisionType.placeholder']||'---')+'</option>'
        + dict['field.decisionType.options'].map(opt=>`<option value="${opt}">${opt}</option>`).join('');
    }
  }

  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);
  populateSelects(lang);

  const langSelects = document.querySelectorAll('#langSelect, .lang-select');
  langSelects.forEach(s=>{
    s.value = lang;
    s.addEventListener('change', (e)=>{
      const v = e.target.value;
      setLang(v);
      applyI18n(v);
      populateSelects(v);
      document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
        try{ const url = new URL(a.href, location.href); url.searchParams.set('lang', v); a.href = url.toString(); }catch(e){}
      });
    });
  });

  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  if(burger && nav){
    burger.addEventListener('click', ()=>{
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });
    nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
      nav.classList.remove('is-open'); burger.setAttribute('aria-expanded','false'); document.body.classList.remove('nav-open');
    }));
  }

  const header = document.querySelector('.site-header');
  if(header){
    let ticking=false;
    window.addEventListener('scroll', ()=>{
      if(!ticking){ ticking=true; requestAnimationFrame(()=>{ header.classList.toggle('is-shrink', window.scrollY>40); ticking=false; }); }
    }, {passive:true});
  }
});
