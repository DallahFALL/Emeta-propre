// script.js — init i18n, populate selects, handle menu, form
(function(){
  'use strict';

  // DOM ready
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function(){

    const DEFAULT = 'fr';
    const LANGKEY = 'emeta_lang';
    const langSelect = document.getElementById('langSelect');
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');

    // --- Language setup ---
    const available = Object.keys(window.I18N || {fr:1});
    // populate language select
    available.forEach(l=>{
      const opt = document.createElement('option');
      opt.value = l;
      opt.textContent = l.toUpperCase();
      langSelect.appendChild(opt);
    });

    // get saved or URL param
    function getLangFromUrlOrStorage(){
      const params = new URLSearchParams(location.search);
      if(params.get('lang')) return params.get('lang');
      return localStorage.getItem(LANGKEY) || DEFAULT;
    }

    let currentLang = getLangFromUrlOrStorage();
    langSelect.value = currentLang;
    applyLang(currentLang, false);

    // attach change
    langSelect.addEventListener('change', function(){
      const l = this.value || DEFAULT;
      applyLang(l, true);
    });

    // apply language: set html attrs, save, update DOM
    function applyLang(lang, pushHistory){
      if(!window.I18N || !window.I18N[lang]) lang = DEFAULT;
      currentLang = lang;
      localStorage.setItem(LANGKEY, lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      // set rtl stylesheet toggle if exists
      const rtlSheet = document.getElementById('rtlStylesheet');
      if(rtlSheet) rtlSheet.disabled = (lang !== 'ar');

      // update all text nodes with data-i18n
      const dict = window.getI18n(lang);
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(dict[key]) el.textContent = dict[key];
      });
      // placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key = el.getAttribute('data-i18n-placeholder');
        if(dict[key]) el.placeholder = dict[key];
      });
      // populate selects that are built from arrays
      const domainSel = document.getElementById('domain');
      const typeSel = document.getElementById('decisionType');

      if(domainSel){
        fillSelectFromDict(domainSel, dict, 'field.domain');
      }
      if(typeSel){
        fillSelectFromDict(typeSel, dict, 'field.decisionType');
      }

      // update meta title
      if(dict['meta.title']) document.title = dict['meta.title'];

      // update nav privacy links to add ?lang=XX
      document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
        try{
          const url = new URL(a.href, location.href);
          url.searchParams.set('lang', lang);
          a.href = url.toString();
        }catch(e){}
      });

      // refresh help icons (small label)
      document.querySelectorAll('.help-icon').forEach(icon=>{
        if(icon.classList.contains('help-privacy')) icon.textContent = dict['help.privacy'] ? dict['help.privacy'].charAt(0) : 'P';
        else if(icon.classList.contains('help-guide')) icon.textContent = dict['help.guide'] ? dict['help.guide'].charAt(0) : 'G';
      });

      // optionally push state so privacy.html can read without reloading
      if(pushHistory){
        const u = new URL(location.href);
        u.searchParams.set('lang', lang);
        history.replaceState({}, '', u.toString());
      }
    }

    // fill select using keys: expects dict[field.domain.options] = array
    function fillSelectFromDict(sel, dict, baseKey){
      // clear existing options
      while(sel.firstChild) sel.removeChild(sel.firstChild);
      const placeholder = dict[baseKey + '.placeholder'] || '';
      const opt0 = document.createElement('option');
      opt0.value = '';
      opt0.textContent = placeholder;
      sel.appendChild(opt0);

      const arr = dict[baseKey + '.options'];
      if(Array.isArray(arr)){
        arr.forEach(v=>{
          const o = document.createElement('option');
          o.value = v;
          o.textContent = v;
          sel.appendChild(o);
        });
      } else {
        // fallback: if specific keys exist like field.domain.strategy etc
        // try to find sequential keys (not necessary in our dict, but safe)
      }
    }

    // --- Menu (burger) ---
    if(burger && nav){
      burger.addEventListener('click', function(e){
        const isOpen = nav.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      // close nav on outside click (mobile)
      document.addEventListener('click', (e)=>{
        if(!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('open')){
          nav.classList.remove('open'); burger.setAttribute('aria-expanded','false');
        }
      });
    }

    // --- Start button scroll ---
    const startBtn = document.getElementById('startBtn');
    if(startBtn){
      startBtn.addEventListener('click', ()=>{
        document.querySelector('#form')?.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }

    // --- form handler (demo) ---
    const form = document.getElementById('emetaForm');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        if(!form.checkValidity()){ form.reportValidity(); return; }
        // simulate submission — replace with real API call
        const msg = (document.documentElement.lang === 'fr') ? 'Formulaire envoyé (simulation)' : 'Form submitted (simulation)';
        alert(msg);
      });
    }

    // small a11y: focus outlines for keyboard
    document.body.addEventListener('keydown', function(e){ if(e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing'); });

  });

})();
