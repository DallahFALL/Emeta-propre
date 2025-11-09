/* script.js
 - Single pluridisciplinary form with conditional fields
 - Basic validation
 - Payload JSON builder ready to send to WEBHOOK_URL
 - Simple i18n for labels + RTL toggle
 - Small mobile nav toggle
*/

(() => {
  // CONFIG: ajouter ton endpoint ici pour envoyer le payload (Make / ton serveur)
  const WEBHOOK_URL = ''; // <-- coller ton URL ici

  // Elements
  const domain = document.getElementById('domain');
  const conditionalContainer = document.getElementById('conditionalContainer');
  const unifiedForm = document.getElementById('unifiedForm');
  const formStatus = document.getElementById('formStatus');
  const langSelect = document.getElementById('langSelect');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  // Conditional templates per domain
  const templates = {
    agriculture: `
      <div class="row"><label for="agri.surface">Surface estimée (ha)</label><input id="agri.surface" name="agri.surface" type="text" placeholder="Ex: 2.5"></div>
      <div class="row"><label for="agri.location">Localisation</label><input id="agri.location" name="agri.location" type="text" placeholder="Village / Commune / Région"></div>
      <div class="row"><label for="agri.objectives">Objectifs agricoles</label><input id="agri.objectives" name="agri.objectives" type="text" placeholder="Ex: riziculture, maraîchage"></div>
    `,
    funding: `
      <div class="row"><label for="fund.amount">Montant demandé</label><input id="fund.amount" name="fund.amount" type="text" placeholder="Ex: 2 000 000 XOF"></div>
      <div class="row"><label for="fund.use">Utilisation des fonds (bref)</label><textarea id="fund.use" name="fund.use" rows="3"></textarea></div>
    `,
    marketing: `
      <div class="row"><label for="mkt.audience">Audience cible</label><input id="mkt.audience" name="mkt.audience" type="text" placeholder="Ex: 18-35, zone urbaine"></div>
      <div class="row"><label for="mkt.channels">Canaux envisagés</label><input id="mkt.channels" name="mkt.channels" type="text" placeholder="Ex: Facebook, Radio"></div>
    `,
    recruitment: `
      <div class="row"><label for="rec.position">Poste recherché</label><input id="rec.position" name="rec.position" type="text" placeholder="Ex: Chef de projet"></div>
      <div class="row"><label for="rec.contract">Type de contrat</label><select id="rec.contract" name="rec.contract"><option value="">— Choisir —</option><option>CDI</option><option>CDD</option><option>Freelance</option></select></div>
    `,
    product: `
      <div class="row"><label for="prod.stage">Niveau d'avancement</label><select id="prod.stage" name="prod.stage"><option value="">— Choisir —</option><option>Idée</option><option>MVP</option><option>Production</option></select></div>
      <div class="row"><label for="prod.pricing">Stratégie pricing</label><input id="prod.pricing" name="prod.pricing" type="text" placeholder="Ex: Abonnement, Freemium"></div>
    `,
    environment: `
      <div class="row"><label for="env.issue">Type d'enjeu</label><select id="env.issue" name="env.issue"><option value="">— Choisir —</option><option>Erosion côtière</option><option>Gestion déchets</option><option>Reboisement</option></select></div>
      <div class="row"><label for="env.scale">Échelle</label><input id="env.scale" name="env.scale" type="text" placeholder="Ex: 100m, 2 ha"></div>
    `,
    other: `<div class="row"><label for="other_desc">Précisez</label><input id="other_desc" name="other_desc" type="text" placeholder="Précisez votre besoin"></div>`
  };

  // i18n strings (chaînes essentielles). Tu peux étendre ces objets.
  const I18N = {
    fr: {
      brand: 'e-META',
      home: 'Accueil',
      about: 'À propos',
      faq: 'FAQ',
      contact: 'Contact',
      whatsapp: 'Contact WhatsApp',
      hero_title: "e-META — L'assistant IA pluridisciplinaire",
      hero_lead: "Formulaire unique, guidé et adaptatif pour diagnostiquer, prioriser et recommander des actions concrètes.",
      form_title: "Nouvelle requête personnalisée",
      label_domain: "Domaine / Thème",
      label_expected: "Résultat attendu",
      label_team: "Taille de l'équipe",
      label_budget: "Budget indicatif",
      label_name: "Nom",
      label_email: "Email",
      label_phone: "Téléphone (WhatsApp)",
      label_details: "Détails / Contexte",
      label_mode: "Mode de restitution",
      mode_email: "Email",
      mode_whatsapp: "WhatsApp",
      mode_display: "Affichage",
      btn_send: "Envoyer la requête",
      btn_reset: "Réinitialiser",
      about: "À propos",
      about_text: "e-META structure les demandes et produit une synthèse stratégique adaptée.",
      faq: "FAQ",
      faq_q1: "Comment fonctionne e-META ?",
      faq_a1: "Renseignez la requête ; e-META génère un diagnostic, 3 options et une recommandation priorisée."
    },
    en: {
      brand: 'e-META',
      home: 'Home',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      whatsapp: 'Contact WhatsApp',
      hero_title: 'e-META — The multidisciplinary AI assistant',
      hero_lead: 'One guided adaptive form to diagnose, prioritise and recommend concrete actions.',
      form_title: 'New custom request',
      label_domain: 'Domain / Topic',
      label_expected: 'Expected result',
      label_team: 'Team size',
      label_budget: 'Indicative budget',
      label_name: 'Name',
      label_email: 'Email',
      label_phone: 'Phone (WhatsApp)',
      label_details: 'Details / Context',
      label_mode: 'Delivery mode',
      mode_email: 'Email',
      mode_whatsapp: 'WhatsApp',
      mode_display: 'Display',
      btn_send: 'Send request',
      btn_reset: 'Reset',
      about: 'About',
      about_text: 'e-META structures requests and produces a tailored strategic summary.',
      faq: 'FAQ',
      faq_q1: 'How does e-META work?',
      faq_a1: 'Fill the request; e-META provides a diagnosis, 3 options and a prioritized recommendation.'
    },
    es: {
      brand: 'e-META',
      home: 'Inicio',
      about: 'Acerca de',
      faq: 'FAQ',
      contact: 'Contacto',
      whatsapp: 'Contactar WhatsApp',
      hero_title: 'e-META — El asistente IA multidisciplinario',
      hero_lead: 'Formulario único y adaptativo para diagnosticar, priorizar y recomendar acciones concretas.',
      form_title: 'Nueva solicitud personalizada',
      label_domain: 'Dominio / Tema',
      label_expected: 'Resultado esperado',
      label_team: 'Tamaño del equipo',
      label_budget: 'Presupuesto indicativo',
      label_name: 'Nombre',
      label_email: 'Email',
      label_phone: 'Teléfono (WhatsApp)',
      label_details: 'Detalles / Contexto',
      label_mode: 'Modo de entrega',
      mode_email: 'Email',
      mode_whatsapp: 'WhatsApp',
      mode_display: 'Visualizar',
      btn_send: 'Enviar solicitud',
      btn_reset: 'Restablecer',
      about: 'Acerca de',
      about_text: 'e-META estructura solicitudes y produce un resumen estratégico a medida.',
      faq: 'FAQ',
      faq_q1: '¿Cómo funciona e-META?',
      faq_a1: 'Complete la solicitud; e-META genera diagnóstico, 3 opciones y recomendación priorizada.'
    },
    ar: {
      brand: 'e-META',
      home: 'الصفحة الرئيسية',
      about: 'معلومات',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل',
      whatsapp: 'واتساب',
      hero_title: 'e-META — مساعد الذكاء الاصطناعي متعدد التخصصات',
      hero_lead: 'نموذج واحد إرشادي للتشخيص والأولوية واقتراح إجراءات عملية.',
      form_title: 'طلب جديد مخصص',
      label_domain: 'المجال / الموضوع',
      label_expected: 'النتيجة المتوقعة',
      label_team: 'حجم الفريق',
      label_budget: 'الميزانية التقريبية',
      label_name: 'الاسم',
      label_email: 'البريد الإلكتروني',
      label_phone: 'الهاتف (واتساب)',
      label_details: 'التفاصيل / السياق',
      label_mode: 'طريقة التسليم',
      mode_email: 'البريد الإلكتروني',
      mode_whatsapp: 'واتساب',
      mode_display: 'عرض',
      btn_send: 'إرسال الطلب',
      btn_reset: 'إعادة ضبط',
      about: 'معلومات',
      about_text: 'e-META ينظم الطلبات ويولد ملخصًا استراتيجيًا مكيّفًا.',
      faq: 'الأسئلة الشائعة',
      faq_q1: 'كيف يعمل e-META؟',
      faq_a1: 'املأ الطلب؛ e-META يولد تشخيصًا وثلاثة خيارات وتوصية ذات أولوية.'
    }
  };

  // Apply translations (simple): elements with attribute data-i18n
  function applyI18n(lang) {
    const map = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (map[key]) el.textContent = map[key];
    });
  }

  // init language from selector
  applyI18n(langSelect.value || 'fr');
  langSelect.addEventListener('change', (e) => applyI18n(e.target.value));

  // handle mobile nav toggle
  menuToggle && menuToggle.addEventListener('click', () => {
    if (mainNav.style.display === 'flex') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });

  // handle whatsapp quick action
  whatsappBtn && whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/221782607212', '_blank');
  });

  // domain change: inject conditional fields
  domain && domain.addEventListener('change', (e) => {
    const v = e.target.value || 'other';
    conditionalContainer.innerHTML = templates[v] || templates.other;
  });

  // basic validation function
  function validateForm(formEl) {
    const fd = new FormData(formEl);
    const errors = [];
    if (!fd.get('domain')) errors.push('Choisir un domaine');
    if (!fd.get('expectedResult')) errors.push('Résultat attendu requis');
    if (!fd.get('name')) errors.push('Nom requis');
    if (!fd.get('email')) errors.push('Email requis');
    if (!fd.get('phone')) errors.push('Téléphone requis');
    // domain-specific checks (sample)
    const dom = fd.get('domain');
    if (dom === 'funding' && !fd.get('fund.amount')) errors.push('Montant demandé requis');
    return { ok: errors.length === 0, errors, fd };
  }

  // build payload JSON using FormData
  function buildPayload(fd) {
    const payload = {
      created_at: new Date().toISOString(),
      domain: fd.get('domain'),
      expectedResult: fd.get('expectedResult'),
      teamSize: fd.get('teamSize') || null,
      budget: fd.get('budget') || null,
      contact: {
        name: fd.get('name'),
        email: fd.get('email'),
        phone: fd.get('phone')
      },
      details: fd.get('details') || '',
      mode: fd.get('mode') || 'email',
      conditional: {}
    };

    // add conditional keys per domain
    const d = payload.domain;
    if (d === 'agriculture') {
      payload.conditional.surface = fd.get('agri.surface') || null;
      payload.conditional.location = fd.get('agri.location') || null;
      payload.conditional.objectives = fd.get('agri.objectives') || null;
    } else if (d === 'funding') {
      payload.conditional.amount = fd.get('fund.amount') || null;
      payload.conditional.use = fd.get('fund.use') || null;
    } else if (d === 'marketing') {
      payload.conditional.audience = fd.get('mkt.audience') || null;
      payload.conditional.channels = fd.get('mkt.channels') || null;
    } else if (d === 'recruitment') {
      payload.conditional.position = fd.get('rec.position') || null;
      payload.conditional.contract = fd.get('rec.contract') || null;
    } else if (d === 'product') {
      payload.conditional.stage = fd.get('prod.stage') || null;
      payload.conditional.pricing = fd.get('prod.pricing') || null;
    } else if (d === 'environment') {
      payload.conditional.issue = fd.get('env.issue') || null;
      payload.conditional.scale = fd.get('env.scale') || null;
    } else {
      payload.conditional.other = fd.get('other_desc') || null;
    }

    return payload;
  }

  // submit handler
  unifiedForm && unifiedForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    formStatus.textContent = '';
    const { ok, errors, fd } = validateForm(unifiedForm);
    if (!ok) {
      formStatus.style.color = 'crimson';
      formStatus.textContent = 'Erreurs : ' + errors.join(' • ');
      return;
    }
    const payload = buildPayload(fd);

    // show quick preview in console and simulate sending
    console.log('e-META payload ready:', payload);
    formStatus.style.color = 'var(--muted)';
    formStatus.textContent = 'Préparation de la requête...';

    try {
      if (WEBHOOK_URL) {
        const res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('Erreur webhook ' + res.status);
      } else {
        // simulation delay
        await new Promise(r => setTimeout(r, 700));
      }
      formStatus.style.color = 'green';
      formStatus.textContent = 'Requête envoyée — vérifiez votre e-mail / WhatsApp selon le mode.';
      // reset minimal
      setTimeout(()=> { unifiedForm.reset(); conditionalContainer.innerHTML=''; }, 900);
    } catch (err) {
      formStatus.style.color = 'crimson';
      formStatus.textContent = 'Erreur envoi : ' + (err.message || err);
      console.error(err);
    }
  });

})();
