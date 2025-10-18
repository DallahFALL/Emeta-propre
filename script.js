// Basic interactivity: lang selector, mobile menu toggle, whatsapp button
(function(){
  const langSelect = document.getElementById('langSelect');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const contactWhats = document.getElementById('contactWhats');
  const btnWhats = document.getElementById('btnWhats');

  // Load saved language
  const saved = localStorage.getItem('emeta_lang') || 'fr';
  if(langSelect) langSelect.value = saved;
  applyLang(saved);

  if(langSelect){
    langSelect.addEventListener('change', (e)=>{
      const v = e.target.value;
      localStorage.setItem('emeta_lang', v);
      applyLang(v);
    });
  }

  function applyLang(code){
    // set direction for Arabic
    if(code === 'ar'){
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.lang = code;
      document.documentElement.dir = 'ltr';
    }
    // (Optional) load i18n strings here
  }

  if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      if(mainNav.style.display === 'block') mainNav.style.display = '';
      else mainNav.style.display = 'block';
    });
  }

  function openWhats(){
    // default whatsapp link — adapte le numero si besoin
    const phone = '221782607212';
    const url = 'https://wa.me/' + phone;
    window.open(url, '_blank');
  }
  if(contactWhats) contactWhats.addEventListener('click', openWhats);
  if(btnWhats) btnWhats.addEventListener('click', openWhats);

})();
