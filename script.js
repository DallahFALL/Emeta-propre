/* e-META — script.js (patch mobile-ready)
   Paste-ready: remplace ton script.js actuel
*/
(function(){
  'use strict';
  const STORAGE_KEY = 'emeta_lang';
  const DEFAULT_LANG = 'fr';
  const RTL_LANGS = ['ar'];

  function resolveLang(){
    return new URLSearchParams(window.location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang){
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }

  function applyI18n(lang){
    if(!window.I18N || !window.I18N[lang]) return;
    const dict = window.I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if(dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const k = el.getAttribute('data-i18n-placeholder');
      if(dict[k]) el.placeholder = dict[k];
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const lang = resolveLang();
    setLang(lang);
    applyI18n(lang);

    // lang select
    const langSelect = document.getElementById('langSelect');
    if(langSelect){
      langSelect.value = lang;
      langSelect.addEventListener('change', ()=>{
        setLang(langSelect.value);
        applyI18n(langSelect.value);
      });
    }

    // Burger menu
    const burger = document.getElementById('burgerBtn') || document.querySelector('.burger');
    const nav = document.getElementById('mainNav') || document.querySelector('.nav');
    if(burger && nav){
      burger.addEventListener('click', ()=>{
        const open = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', String(open));
      });
      nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
        nav.classList.remove('is-open');
        if(burger) burger.setAttribute('aria-expanded','false');
      }));
    }

    // Start button -> scroll to form
    const startBtn = document.getElementById('startBtn');
    if(startBtn){
      startBtn.addEventListener('click', ()=>{
        const f = document.getElementById('form');
        if(f) f.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }

    // Make sure form groups have visible orange headings (assist for screen readers)
    document.querySelectorAll('.field-group legend').forEach(leg=>{leg.classList.add('group-title')});

    // small accessibility: add role nav if missed
    if(nav && !nav.getAttribute('role')) nav.setAttribute('role','navigation');

  });
})();
