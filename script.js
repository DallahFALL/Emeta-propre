// script.js — minimal, fast, in charge of language switching + burger + small behaviors
document.addEventListener('DOMContentLoaded',()=>{
  const STORAGE_KEY='emeta_lang';
  const RTL=['ar'];

  function resolveLang(){
    return new URLSearchParams(location.search).get('lang') || localStorage.getItem(STORAGE_KEY) || 'fr';
  }
  function setLang(lang,opts={push:false}){
    localStorage.setItem(STORAGE_KEY,lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang)?'rtl':'ltr';
    // update URL param without reloading
    const url = new URL(location.href);
    url.searchParams.set('lang',lang);
    if(opts.push) history.pushState({},'',url.toString()); else history.replaceState({},'',url.toString());
    // apply
    if(window.applyTranslations) window.applyTranslations(lang);
    // update privacy link to include lang
    document.querySelectorAll('a[href$="privacy.html"]').forEach(a=>{ try{ const u=new URL(a.href,location.href); u.searchParams.set('lang',lang); a.href=u.toString(); }catch(e){} });
    // update pdf link map if exists
    const pdf = document.getElementById('pdfPrivacyLink'); if(pdf){ const map={fr:'docs/privacy_fr.pdf',en:'docs/privacy_en.pdf',es:'docs/privacy_es.pdf',ar:'docs/privacy_ar.pdf'}; pdf.href = map[lang]||map.fr; }
  }

  const lang = resolveLang();
  // set selects present on page
  document.querySelectorAll('#langSelect, #langSelectPrivacy').forEach(sel=>{ if(sel){ sel.value = lang; sel.addEventListener('change',()=>{ setLang(sel.value,{push:true}); location.reload(); }); }});

  setLang(lang);

  // burger menu
  const burger = document.getElementById('burgerBtn'); const nav = document.getElementById('mainNav');
  if(burger && nav){ burger.addEventListener('click',()=>{ const open = nav.classList.toggle('is-open'); burger.setAttribute('aria-expanded', open?'true':'false'); });
    nav.querySelectorAll('a').forEach(a=> a.addEventListener('click',()=>{ nav.classList.remove('is-open'); burger.setAttribute('aria-expanded','false'); }));
  }

  // start button scroll
  const startBtn = document.getElementById('startBtn'); if(startBtn){ startBtn.addEventListener('click',()=>{ document.getElementById('form').scrollIntoView({behavior:'smooth',block:'start'}); }); }

  // ensure selects visible (remove size issues)
  ['domain','decisionType'].forEach(id=>{ const el=document.getElementById(id); if(el){ el.style.display='block'; el.style.visibility='visible'; }});

  // small accessibility enhancement: close nav on ESC
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ if(nav) nav.classList.remove('is-open'); if(burger) burger.setAttribute('aria-expanded','false'); }});
});
