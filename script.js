// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if(navToggle && mainNav){
  navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'flex';
    if(!expanded) mainNav.style.flexDirection = 'column';
  });
  // hide nav on resize to desktop
  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 900){
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'row';
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      mainNav.style.display = 'none';
    }
  });
  // initial
  if(window.innerWidth <= 900) mainNav.style.display = 'none';
}

// language selector: persist selection (optionnel - i18n loading not included here)
const LANG_KEY = 'emeta_lang';
const langSelect = document.getElementById('langSelect');
if(langSelect){
  const saved = localStorage.getItem(LANG_KEY);
  if(saved) langSelect.value = saved;
  langSelect.addEventListener('change', (e)=>{
    localStorage.setItem(LANG_KEY, e.target.value);
    // si tu veux appeler un loader i18n, appelle loadLang(e.target.value) ici
  });
}
