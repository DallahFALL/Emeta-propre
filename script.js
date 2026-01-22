/* e-META — script.js (patch-ready)
   Responsibilities:
   - language selection & dynamic i18n application (works with window.I18N)
   - burger menu toggling with ARIA support
   - header shrink on scroll
   - start button scroll to form
   - update privacy/guide links with lang param
*/

/* ---------- Helpers ---------- */
function getQueryParam(name){
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function setLangParamOnLinks(lang){
  const links = document.querySelectorAll('#privacyLink, #helpPrivacy, #footerPrivacy, #helpGuide, #privacyPdf');
  links.forEach(a=>{
    if(!a) return;
    try{
      const href = a.getAttribute('href')||'';
      const url = new URL(href, window.location.origin);
      url.searchParams.set('lang', lang);
      a.setAttribute('href', url.pathname + url.search);
    }catch(e){
      // ignore
    }
  });
}

/* translate helper reads window.I18N */
function t(key, lang){
  try{
    if(window.I18N && window.I18N[lang] && window.I18N[lang][key]){
      return window.I18N[lang][key];
    }
  }catch(e){}
  return null;
}

function applyI18n(lang){
  // content (innerText)
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const txt = t(key, lang);
    if(txt !== null) el.textContent = txt;
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    const txt = t(key, lang);
    if(txt !== null){
      if(el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea' || el.tagName.toLowerCase() === 'select'){
        el.setAttribute('placeholder', txt);
      } else {
        el.setAttribute('aria-label', txt);
      }
    }
  });
  // options inside selects with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(opt=>{
    const key = opt.getAttribute('data-i18n');
    const txt = t(key, lang);
    if(txt !== null) opt.textContent = txt;
  });
}

/* ---------- Language management ---------- */
function currentLang(){
  const url = getQueryParam('lang');
  if(url) return url;
  return localStorage.getItem('emeta_lang') || 'fr';
}

function setLang(lang, opts = {persist:true, pushState:false}){
  if(opts.persist) localStorage.setItem('emeta_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  const rtlSheet = document.getElementById('rtlStylesheet');
  if(rtlSheet) rtlSheet.disabled = (lang !== 'ar');
  const sel = document.getElementById('langSelect');
  if(sel) sel.value = lang;
  setLangParamOnLinks(lang);
  applyI18n(lang);
  if(opts.pushState){
    const u = new URL(window.location.href);
    u.searchParams.set('lang', lang);
    window.history.replaceState({}, '', u.toString());
  }
}

document.addEventListener('DOMContentLoaded', function(){
  const lang = currentLang();
  setLang(lang, {persist:true, pushState:true});

  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    langSelect.addEventListener('change', (e)=>{
      setLang(e.target.value, {persist:true, pushState:true});
    });
  }

  const burger = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');
  if(burger && mainNav){
    burger.addEventListener('click', ()=>{
      const open = mainNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if(open){
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.right = '18px';
        mainNav.style.top = '64px';
        mainNav.style.background = 'rgba(6,9,24,0.95)';
        mainNav.style.padding = '10px';
        mainNav.style.borderRadius = '12px';
      } else {
        mainNav.style.display = '';
      }
    });
    document.addEventListener('click', (ev)=>{
      if(!burger.contains(ev.target) && !mainNav.contains(ev.target) && mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
        burger.setAttribute('aria-expanded','false');
        mainNav.style.display = '';
      }
    });
  }

  const startBtn = document.getElementById('startBtn');
  const form = document.getElementById('form');
  if(startBtn && form){
    startBtn.addEventListener('click', ()=>{
      form.scrollIntoView({behavior:'smooth', block:'start'});
      const first = form.querySelector('input, select, textarea, button');
      if(first) first.focus({preventScroll:true});
    });
  }

  const header = document.querySelector('.site-header');
  const onScroll = ()=>{
    if(window.scrollY > 18) header.classList.add('shrink'); else header.classList.remove('shrink');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  setLangParamOnLinks(currentLang());

  document.querySelectorAll('.btn-secondary').forEach(btn=>{
    btn.style.filter = 'none';
  });

  const emetaForm = document.getElementById('emetaForm');
  if(emetaForm){
    emetaForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const consent = document.getElementById('consent');
      if(consent && !consent.checked){
        alert(t('form.errors.consentRequired', currentLang()) || 'Veuillez accepter le consentement');
        return;
      }
      const btn = emetaForm.querySelector('.btn-submit');
      const old = btn.textContent;
      btn.textContent = 'En cours...';
      btn.disabled = true;
      setTimeout(()=>{
        btn.textContent = old;
        btn.disabled = false;
        alert(t('form.thanks', currentLang()) || 'Merci — votre demande est prise en compte.');
      }, 900);
    });
  }

});
