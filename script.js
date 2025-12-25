/* =====================================================
   e-META — script.js FINAL
===================================================== */

const translations = {
  fr:{
    "btn.request":"Requête personnalisée",
    "nav.home":"Accueil",
    "nav.form":"Formulaire",
    "nav.privacy":"Confidentialité"
  },
  en:{
    "btn.request":"Custom request",
    "nav.home":"Home",
    "nav.form":"Form",
    "nav.privacy":"Privacy"
  },
  es:{
    "btn.request":"Solicitud personalizada",
    "nav.home":"Inicio",
    "nav.form":"Formulario",
    "nav.privacy":"Privacidad"
  },
  ar:{
    "btn.request":"طلب مخصص",
    "nav.home":"الرئيسية",
    "nav.form":"النموذج",
    "nav.privacy":"الخصوصية"
  }
};

function applyLanguage(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang]?.[key]){
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang",lang);
}

document.addEventListener("DOMContentLoaded",()=>{
  const switcher=document.getElementById("languageSwitcher");
  const saved=localStorage.getItem("lang")||"fr";

  if(switcher){
    switcher.value=saved;
    switcher.addEventListener("change",e=>applyLanguage(e.target.value));
  }
  applyLanguage(saved);

  /* MENU MOBILE */
  const burger=document.getElementById("burgerBtn");
  const nav=document.getElementById("mainNav");
  if(burger && nav){
    burger.addEventListener("click",()=>{
      nav.classList.toggle("open");
    });
  }

  /* WHATSAPP */
  const wa=document.getElementById("ctaWhatsApp");
  if(wa){
    wa.addEventListener("click",()=>{
      const phone="221782607212";
      const msg=encodeURIComponent("Bonjour, je souhaite une requête personnalisée via e-META.");
      window.open(`https://wa.me/${phone}?text=${msg}`,"_blank");
    });
  }
});
