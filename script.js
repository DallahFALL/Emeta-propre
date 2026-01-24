// script.js — harmonisé : lang resolve, populate selects, burger, i18n apply
document.addEventListener('DOMContentLoaded', ()=>{
  const STORAGE_KEY = 'emeta_lang';
  const DEFAULT_LANG = 'fr';
  const RTL_LANGS = ['ar'];

  function resolveLang(){
    return new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang)? 'rtl':'ltr';
  }

  function applyI18n(lang){
    if(!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.getAttribute('data-i18n'); if(dict[k]) el.textContent = dict[k]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ const k=el.getAttribute('data-i18n-placeholder'); if(dict[k]) el.placeholder = dict[k]; });
  }

  function populateSelects(lang){
    try{
      const domainOpt = (window.I18N[lang] && window.I18N[lang]['field.domain.options']) || window.I18N['fr']['field.domain.options'];
      const typeOpt = (window.I18N[lang] && window.I18N[lang]['field.decisionType.options']) || window.I18N['fr']['field.decisionType.options'];
      const domain = document.getElementById('domain');
      const type = document.getElementById('decisionType');
      if(domain && domainOpt){ domain.innerHTML = '<option value=\"\">'+(window.I18N[lang]['field.domain.placeholder']||'')+'</option>' + domainOpt.map(o=>`<option value=\"${o}\">${o}</option>`).join(''); }
      if(type && typeOpt){ type.innerHTML = '<option value=\"\">'+(window.I18N[lang]['field.decisionType.placeholder']||'')+'</option>' + typeOpt.map(o=>`<option value=\"${o}\">${o}</option>`).join(''); }
    }catch(e){console.warn(e)}
  }

  // Resolve and apply
  const lang = resolveLang();
  setLang(lang);
  applyI18n(lang);
  populateSelects(lang);

  // Lang select control
  const langSelect = document.getElementById('langSelect');
  if(langSelect){ langSelect.value = lang; langSelect.addEventListener('change', ()=>{
    const v = langSelect.value; setLang(v); applyI18n(v); populateSelects(v);
    // update privacy link with lang param
    document.querySelectorAll('a[href$=\"privacy.html\"]').forEach(a=>{ try{ const url = new URL(a.href, location.href); url.searchParams.set('lang', v); a.href = url.toString(); }catch(e){} });
  }); }

  // BURGER nav
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  if(burger && nav){ burger.addEventListener('click', ()=>{
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  // close on nav link click
  nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{ nav.classList.remove('is-open'); burger.setAttribute('aria-expanded','false'); })); }

  // shrink header on scroll (perf-safe)
  const header = document.querySelector('.site-header'); let ticking=false;
  function onScroll(){ header.classList.toggle('is-shrink', window.scrollY>40); ticking=false; }
  window.addEventListener('scroll', ()=>{ if(!ticking){ ticking=true; requestAnimationFrame(onScroll); } }, {passive:true});

});
