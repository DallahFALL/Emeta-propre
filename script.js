/* script.js - form conditional logic, validation, payload build, i18n direction switch */

(() => {
  // Config
  const WEBHOOK_URL = ''; // <--- Replace with your webhook if needed

  // Elements
  const openFormBtn = document.getElementById('openFormBtn');
  const startRequest = document.getElementById('startRequest');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeModal = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const domainSelect = document.getElementById('domain');
  const conditionalContainer = document.getElementById('conditionalContainer');
  const unifiedForm = document.getElementById('unifiedForm');
  const formStatus = document.getElementById('formStatus');
  const packsGrid = document.getElementById('packsGrid');
  const langSelect = document.getElementById('langSelect');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const discoverPacks = document.getElementById('discoverPacks');
  const startBtns = [openFormBtn, startRequest];

  // Pack data
  const PACKS = [
    { id: 'marketing', title: 'Marketing', desc: 'Brief campagne, estimation budget et canaux.' },
    { id: 'funding', title: 'Financement', desc: 'Demande structurée, modèles financiers.' },
    { id: 'recruitment', title: 'Recrutement', desc: 'Brief rôle, budget et timeline.' },
    { id: 'product', title: 'Produit', desc: 'Positionnement, pricing, GTM.' }
  ];

  // Templates per domain
  const templates = {
    agriculture: `
      <div class="form-row"><label for="agri.surface">Surface estimée (ha)</label><input id="agri.surface" name="agri.surface" type="text" placeholder="Ex : 2.5"></div>
      <div class="form-row"><label for="agri.location">Localisation</label><input id="agri.location" name="agri.location" type="text" placeholder="Village / Commune / Région"></div>
      <div class="form-row"><label for="agri.objectives">Objectifs agricoles</label><input id="agri.objectives" name="agri.objectives" type="text" placeholder="Ex : riziculture, maraîchage"></div>
      <div class="form-row"><label for="agri.constraints">Contraintes connues</label><input id="agri.constraints" name="agri.constraints" type="text" placeholder="Ex : inondation saisonnière"></div>
    `,
    funding: `
      <div class="form-row"><label for="fund.amount">Montant demandé</label><input id="fund.amount" name="fund.amount" type="text" placeholder="Ex : 2 000 000 XOF"></div>
      <div class="form-row"><label for="fund.use">Utilisation des fonds</label><textarea id="fund.use" name="fund.use" rows="3" placeholder="Ex : achat d'équipement, salaires"></textarea></div>
      <div class="form-row"><label for="fund.timeline">Échéancier</label><input id="fund.timeline" name="fund.timeline" type="text" placeholder="Ex : 6 mois"></div>
    `,
    marketing: `
      <div class="form-row"><label for="mkt.audience">Audience cible</label><input id="mkt.audience" name="mkt.audience" type="text" placeholder="Ex : 18-35, zone urbaine"></div>
      <div class="form-row"><label for="mkt.channels">Canaux envisagés</label><input id="mkt.channels" name="mkt.channels" type="text" placeholder="Ex : Facebook, Radio, Agents terrain"></div>
    `,
    recruitment: `
      <div class="form-row"><label for="rec.position">Poste recherché</label><input id="rec.position" name="rec.position" type="text" placeholder="Ex : Chef de projet"></div>
      <div class="form-row"><label for="rec.contract">Type de contrat</label><select id="rec.contract" name="rec.contract"><option value="">— Choisir —</option><option>CDI</option><option>CDD</option><option>Freelance</option></select></div>
      <div class="form-row"><label for="rec.skills">Compétences clés</label><input id="rec.skills" name="rec.skills" type="text" placeholder="Ex : gestion projet, comptabilité"></div>
    `,
    product: `
      <div class="form-row"><label for="prod.stage">Niveau d'avancement</label><select id="prod.stage" name="prod.stage"><option value="">— Choisir —</option><option>Idée</option><option>MVP</option><option>Production</option></select></div>
      <div class="form-row"><label for="prod.pricing">Stratégie pricing</label><input id="prod.pricing" name="prod.pricing" type="text" placeholder="Ex : Freemium, Abonnement"></div>
    `,
    environment: `
      <div class="form-row"><label for="env.issue">Type d'enjeu</label><select id="env.issue" name="env.issue"><option value="">— Choisir —</option><option>Erosion côtière</option><option>Gestion déchets</option><option>Reboisement</option></select></div>
      <div class="form-row"><label for="env.scale">Échelle (m / ha)</label><input id="env.scale" name="env.scale" type="text" placeholder="Ex : 100m, 2 ha"></div>
    `,
    other: `
      <div class="form-row"><label for="other_desc">Précisez</label><input id="other_desc" name="other_desc" type="text" placeholder="Précisez votre besoin"></div>
    `
  };

  // Render packs into grid
  function renderPacks() {
    PACKS.forEach(p => {
      const card = document.createElement('article');
      card.className = 'pack-card';
      card.innerHTML = `
        <div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
        <div style="margin-top:12px;">
          <button class="open-pack-btn btn-outline" data-pack="${p.id}">Ouvrir</button>
          <button class="use-pack-btn btn-primary" data-pack="${p.id}" style="margin-left:8px;">Utiliser</button>
        </div>
      `;
      packsGrid.appendChild(card);
    });

    // attach listeners
    document.querySelectorAll('.open-pack-btn').forEach(b => b.addEventListener('click', e => openModalForPack(e.target.dataset.pack)));
    document.querySelectorAll('.use-pack-btn').forEach(b => b.addEventListener('click', e => {
      openModalForPack(e.target.dataset.pack);
      // optionally pre-fill expectedResult with pack name
      setTimeout(()=>{ document.getElementById('expectedResult').value = 'Demande: ' + e.target.dataset.pack; }, 120);
    }));
  }

  renderPacks();

  // Modal control
  function showModal() {
    modalBackdrop.style.display = 'flex';
    modalBackdrop.setAttribute('aria-hidden', 'false');
    setTimeout(()=> domainSelect.focus(), 120);
  }
  function hideModal() {
    modalBackdrop.style.display = 'none';
    modalBackdrop.setAttribute('aria-hidden', 'true');
    unifiedForm.reset();
    conditionalContainer.innerHTML = '';
    formStatus.textContent = '';
  }

  openFormBtn && openFormBtn.addEventListener('click', showModal);
  startRequest && startRequest.addEventListener('click', showModal);
  discoverPacks && discoverPacks.addEventListener('click', ()=> document.getElementById('packs').scrollIntoView({behavior:'smooth'}));
  closeModal && closeModal.addEventListener('click', hideModal);
  cancelBtn && cancelBtn.addEventListener('click', hideModal);
  modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) hideModal(); });

  // Domain change: inject template
  domainSelect.addEventListener('change', () => {
    const val = domainSelect.value || 'other';
    conditionalContainer.innerHTML = templates[val] || templates.other;
  });

  // Open modal mapped to pack
  function openModalForPack(packId) {
    showModal();
    const map = { marketing: 'marketing', funding: 'funding', recruitment: 'recruitment', product: 'product' };
    domainSelect.value = map[packId] || 'other';
    domainSelect.dispatchEvent(new Event('change'));
  }

  // Validation logic (basic + domain)
  function validateForm(fd) {
    const errors = [];
    if (!fd.get('domain')) errors.push('Choisir un domaine.');
    if (!fd.get('expectedResult')) errors.push('Préciser le résultat attendu.');
    if (!fd.get('name')) errors.push('Nom requis.');
    if (!fd.get('email')) errors.push('Email requis.');
    if (!fd.get('phone')) errors.push('Téléphone requis.');

    const domain = fd.get('domain');
    if (domain === 'agriculture' && !fd.get('agri.surface')) errors.push('Surface agricole requise.');
    if (domain === 'funding' && !fd.get('fund.amount')) errors.push('Montant demandé requis.');
    if (domain === 'recruitment' && !fd.get('rec.position')) errors.push('Poste recherché requis.');
    // add more rules as needed
    return errors;
  }

  // Build payload
  function buildPayload(fd) {
    const payload = {
      created_at: (new Date()).toISOString(),
      domain: fd.get('domain'),
      expectedResult: fd.get('expectedResult'),
      teamSize: fd.get('teamSize') || null,
      budget: fd.get('budget') || null,
      contact: { name: fd.get('name'), email: fd.get('email'), phone: fd.get('phone') },
      details: fd.get('details') || '',
      mode: fd.get('mode') || 'email',
      conditional: {}
    };

    const d = payload.domain;
    if (d === 'agriculture') {
      payload.conditional.surface = fd.get('agri.surface') || null;
      payload.conditional.location = fd.get('agri.location') || null;
      payload.conditional.objectives = fd.get('agri.objectives') || null;
      payload.conditional.constraints = fd.get('agri.constraints') || null;
    } else if (d === 'funding') {
      payload.conditional.amount = fd.get('fund.amount') || null;
      payload.conditional.use = fd.get('fund.use') || null;
      payload.conditional.timeline = fd.get('fund.timeline') || null;
    } else if (d === 'marketing') {
      payload.conditional.audience = fd.get('mkt.audience') || null;
      payload.conditional.channels = fd.get('mkt.channels') || null;
    } else if (d === 'recruitment') {
      payload.conditional.position = fd.get('rec.position') || null;
      payload.conditional.contract = fd.get('rec.contract') || null;
      payload.conditional.skills = fd.get('rec.skills') || null;
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

  // Submit handler
  unifiedForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = '';
    const fd = new FormData(unifiedForm);
    const errors = validateForm(fd);
    if (errors.length) {
      formStatus.style.color = 'crimson';
      formStatus.textContent = 'Erreurs : ' + errors.join(' • ');
      return;
    }

    const payload = buildPayload(fd);
    console.log('payload', payload);
    formStatus.style.color = 'var(--muted)';
    formStatus.textContent = 'Préparation de la requête...';

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      } else {
        // simulate
        await new Promise(r => setTimeout(r, 650));
      }
      formStatus.style.color = 'green';
      formStatus.textContent = 'Requête envoyée — merci !';
      setTimeout(()=> hideModal(), 900);
    } catch (err) {
      formStatus.style.color = 'crimson';
      formStatus.textContent = 'Erreur envoi: ' + (err.message || err);
    }
  });

  // Lang switcher adjusts dir/lang (for RTL support).
  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.documentElement.lang = lang;
    if (lang === 'ar') document.documentElement.dir = 'rtl';
    else document.documentElement.dir = 'ltr';
    // NOTE: for full translation, integrate i18n json and swap innerText of labels
  });

  // WhatsApp quick action
  whatsappBtn.addEventListener('click', ()=> window.open('https://wa.me/221782607212', '_blank'));

  // ESC to close
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalBackdrop.style.display === 'flex') hideModal(); });

  // init: hide modal
  modalBackdrop.style.display = 'none';
})();
