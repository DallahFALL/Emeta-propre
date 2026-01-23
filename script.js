/* e-META — script.js: menu, small interactions, i18n glue */
(function(){
  'use strict';

  // wait for i18n engine
  function ready(fn){
    if(document.readyState!='loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    // burger menu
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if(burger && nav){
      burger.addEventListener('click', ()=>{
        const open = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open? 'true':'false');
      });
    }

    // start button scroll to form
    const startBtn = document.getElementById('startBtn');
    if(startBtn){
      startBtn.addEventListener('click', ()=>{
        document.querySelector('#form')?.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }

    // ensure select options with data-i18n are populated (fallback)
    document.querySelectorAll('select').forEach(sel=>{
      Array.from(sel.options).forEach(opt=>{
        const key = opt.getAttribute('data-i18n');
        if(key && opt.textContent.trim()===''){
          // try to apply from DICT current lang
          const lang = localStorage.getItem('emeta_lang') || 'fr';
          const dict = (window.E_META_I18N && window.E_META_I18N.DICT && window.E_META_I18N.DICT[lang]) || {};
          if(dict[key]) opt.textContent = dict[key];
        }
      });
    });

    // privacy and guide buttons content fallback
    document.querySelectorAll('.help-icon').forEach(icon=>{
      if(icon && icon.textContent.trim()===''){
        const label = icon.classList.contains('help-privacy') ? 'P' : 'G';
        icon.textContent = label;
      }
    });

    // form submit basic handler (prevent accidental submit - adapt to your backend)
    const form = document.getElementById('emetaForm');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        // do client-side validation quickly
        if(!form.checkValidity()){ form.reportValidity(); return; }
        // show a simple confirmation (replace with real submission)
        alert((document.documentElement.lang==='fr')? 'Formulaire envoyé (simulation)' : 'Form submitted (simulation)');
      });
    }

    // Language link correctness: open privacy with lang param
    document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
      a.addEventListener('click', ()=>{
        const lang = localStorage.getItem('emeta_lang') || 'fr';
        const url = new URL(a.href, location.href);
        url.searchParams.set('lang', lang);
        a.href = url.toString();
      });
    });

    // small accessibility: ensure focus outlines for keyboard
    document.body.addEventListener('keydown', function(e){ if(e.key==='Tab') document.documentElement.classList.add('user-is-tabbing'); });

  });
})();
