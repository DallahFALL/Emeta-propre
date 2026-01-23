// script.js — interactions minimal & stable
(function(){
  'use strict';
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function(){
    // initialize translations
    const lang = window.initI18n ? window.initI18n() : (localStorage.getItem('emeta_lang') || 'fr');

    // burger
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if (burger && nav){
      burger.addEventListener('click', function(){
        const isOpen = nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', isOpen ? 'true':'false');
      });
    }

    // start button scroll
    document.getElementById('startBtn')?.addEventListener('click', function(){
      document.querySelector('#form')?.scrollIntoView({behavior:'smooth', block:'start'});
    });

    // language small dropdown (pro button)
    const langBtn = document.getElementById('langBtn');
    const langList = document.getElementById('langList');
    if (langBtn && langList){
      langBtn.textContent = (lang || 'FR').toUpperCase() + ' ▾';
      langBtn.addEventListener('click', ()=> {
        const open = langList.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', open ? 'true':'false');
      });
      langList.querySelectorAll('li').forEach(li=>{
        li.addEventListener('click', ()=>{
          const newLang = li.getAttribute('data-lang');
          if (!newLang) return;
          localStorage.setItem('emeta_lang', newLang);
          // reload current page with lang param to sync privacy link
          const u = new URL(location.href);
          u.searchParams.set('lang', newLang);
          location.href = u.toString();
        });
      });
    }

    // top privacy links must include lang param
    document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{
      a.addEventListener('click', function(e){
        // ensure lang param appended before navigation
        const currentLang = localStorage.getItem('emeta_lang') || 'fr';
        const url = new URL(a.href, location.href);
        url.searchParams.set('lang', currentLang);
        a.href = url.toString();
      });
    });

    // form submit sample (replace with your backend)
    const form = document.getElementById('emetaForm');
    if (form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        if (!form.checkValidity()){
          form.reportValidity();
          return;
        }
        // simple UI feedback (replace with your logic)
        const langNow = localStorage.getItem('emeta_lang') || 'fr';
        alert( (langNow==='fr') ? 'Formulaire envoyé (simulation)' : (langNow==='en'?'Form submitted (simulation)':(langNow==='es'?'Formulario enviado (simulación)':'تم إرسال النموذج (محاكاة)')) );
      });
    }

    // ensure help-icon text exists (fallback)
    document.querySelectorAll('.help-icon').forEach(e=>{
      if (!e.textContent.trim()) e.textContent = e.classList.contains('help-privacy') ? 'P':'G';
    });

    // close lang list when clicking outside
    document.addEventListener('click', function(ev){
      const list = document.getElementById('langList');
      const btn = document.getElementById('langBtn');
      if (!list) return;
      if (!ev.target.closest('.lang-wrapper')){
        list.classList.remove('open');
        btn?.setAttribute('aria-expanded','false');
      }
    });

    // basic keyboard accessibility for burger
    burger?.addEventListener('keydown', (e)=> { if (e.key==='Enter' || e.key===' ') burger.click(); });
  });
})();
