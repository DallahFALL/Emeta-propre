/* Minimal frontend i18n + UI helpers
   - saves selected language in localStorage
   - toggles mobile menu
   - supports 'ar' by setting dir=rtl
*/

(function(){
  const defaultLang = localStorage.getItem('eMetaLang') || 'fr';
  const langSelect = document.getElementById('langSelect');
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  // Simple i18n dictionary (extend as needed)
  const i18n = {
    fr: {
      heroTitle: "e-META — L'assistant IA pluridisciplinaire pour vos décisions",
      heroSubtitle: "Packs de formulaires spécialisés, synthèses structurées et recommandations actionnables — multilingue.",
      ctaPacks: "Découvrir les packs",
      ctaWhats: "Contact WhatsApp",
      pack_marketing: "Marketing",
      pack_marketing_desc: "Brief campagne, estimation budget et canaux.",
      pack_finance: "Financement",
      pack_finance_desc: "Demande structurée, modèles financiers.",
      pack_hr: "Recrutement",
      pack_hr_desc: "Brief rôle, budget et timeline.",
      pack_product: "Produit",
      pack_product_desc: "Positionnement, pricing, GTM.",
    },
    en: {
      heroTitle: "e-META — The multidisciplinary AI assistant for decisions",
      heroSubtitle: "Specialized form packs, structured syntheses and actionable recommendations — multilingual.",
      ctaPacks: "Discover packs",
      ctaWhats: "Contact WhatsApp",
      pack_marketing: "Marketing",
      pack_marketing_desc: "Campaign brief, budget estimate and channels.",
      pack_finance: "Finance",
      pack_finance_desc: "Structured request, financial templates.",
      pack_hr: "Recruitment",
      pack_hr_desc: "Role brief, budget and timeline.",
      pack_product: "Product",
      pack_product_desc: "Positioning, pricing, GTM.",
    },
    es: {
      heroTitle: "e-META — El asistente IA multidisciplinar para decisiones",
      heroSubtitle: "Paquetes de formularios especializados, síntesis estructuradas y recomendaciones accionables — multilingüe.",
      ctaPacks: "Descubrir paquetes",
      ctaWhats: "Contactar por WhatsApp",
      pack_marketing: "Marketing",
      pack_marketing_desc: "Brief de campaña, estimación de presupuesto y canales.",
      pack_finance: "Finanzas",
      pack_finance_desc: "Solicitud estructurada, modelos financieros.",
      pack_hr: "Reclutamiento",
      pack_hr_desc: "Brief de rol, presupuesto y calendario.",
      pack_product: "Producto",
      pack_product_desc: "Posicionamiento, precios, GTM.",
    },
    ar: {
      heroTitle: "e-META — المساعد الذكي متعدد التخصصات لقراراتك",
      heroSubtitle: "حزم استمارات متخصصة، ملخصات منظمة وتوصيات قابلة للتنفيذ — متعدد اللغات.",
      ctaPacks: "اكتشف الحزم",
      ctaWhats: "اتصل عبر واتساب",
      pack_marketing: "التسويق",
      pack_marketing_desc: "موجز الحملة، تقدير الميزانية والقنوات.",
      pack_finance: "التمويل",
      pack_finance_desc: "طلب منظم، نماذج مالية.",
      pack_hr: "التوظيف",
      pack_hr_desc: "موجز الدور، الميزانية والجدول الزمني.",
      pack_product: "المنتج",
      pack_product_desc: "تحديد الموقع، التسعير، استراتيجية الإطلاق.",
    }
  };

  // set select initial
  langSelect.value = defaultLang;
  applyLang(defaultLang);

  // event listeners
  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('eMetaLang', lang);
    applyLang(lang);
  });

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? 'none' : 'flex';
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 700){
      navList.style.display = 'flex';
      navToggle.setAttribute('aria-expanded','false');
    } else {
      navList.style.display = 'none';
    }
  });

  // apply language to DOM
  function applyLang(lang){
    const dict = i18n[lang] || i18n.fr;
    document.getElementById('heroTitle').textContent = dict.heroTitle;
    document.getElementById('heroSubtitle').textContent = dict.heroSubtitle;
    document.getElementById('cta-packs').textContent = dict.ctaPacks;
    document.getElementById('cta-whats').textContent = dict.ctaWhats;
    document.getElementById('cta-whats').href = (lang==='ar' ? 'https://wa.me/221782607212' : 'https://wa.me/221782607212');

    // pack texts by data-key attributes
    const keyed = document.querySelectorAll('[data-key]');
    keyed.forEach(el=>{
      const key = el.getAttribute('data-key');
      if(dict[key]) el.textContent = dict[key];
    });

    // set lang attribute & direction
    document.documentElement.lang = lang;
    if(lang === 'ar'){
      document.documentElement.dir = 'rtl';
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.style.direction = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.style.direction = 'ltr';
    }
  }

  // ensure equal card heights (minor)
  function equalizeCards(){
    const cards = document.querySelectorAll('.card');
    let maxH = 0;
    cards.forEach(c => {
      c.style.minHeight = '';
    });
    cards.forEach(c => {
      const h = c.getBoundingClientRect().height;
      if(h > maxH) maxH = h;
    });
    cards.forEach(c => c.style.minHeight = maxH + 'px');
  }

  window.addEventListener('load', () => {
    equalizeCards();
    setTimeout(equalizeCards, 300);
  });
  window.addEventListener('resize', () => {
    setTimeout(equalizeCards, 120);
  });

})();
