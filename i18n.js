// i18n.js — central translations + helpers
window.I18N = {
  fr: { /* ← (contenu raccourci ici) */
    "meta.title":"e-META — Assistant IA",
    "meta.description":"Assistant IA multilingue de prise de décision",
    "header.tagline":"Assistant IA multilingue de prise de décision",
    "nav.home":"Accueil","nav.form":"Formulaire","nav.privacy":"Confidentialité",
    "hero.title":"Donnez à vos décisions le niveau d’un cabinet de conseil premium",
    "hero.subtitle":"Analyse stratégique structurée, recommandations actionnables et restitution professionnelle.",
    "hero.point1":"Analyse structurée (niveau consultant senior)","hero.point2":"Recommandations actionnables + risques + KPI","hero.point3":"Restitution personnalisée (Email / WhatsApp / PDF)","hero.cta":"Commencer une analyse stratégique",
    "form.badge.cabinet":"Mode cabinet de conseil","form.title":"Formulaire e-META vNext — Analyse stratégique premium","form.intro":"Plus vos réponses sont précises, plus la recommandation sera exploitable.",
    "group.general":"1) Qualifier la décision","group.budget":"3) Ambition, budget & urgence","group.output":"4) Restitution & contact","group.trust":"Confiance et consentement",
    "field.domain.label":"Domaine principal","field.domain.options":["Business / Stratégie","Finance","Marketing / Vente","Opérations","IT","Juridique","Impact / RSE","Autre"],
    "field.decisionType.label":"Nature de la décision","field.decisionType.options":["Stratégique","Opérationnelle","Financière","Marketing","Technique","Autre"],
    "field.title.ph":"Ex: Lancer une nouvelle gamme, ouvrir un point de vente...","field.title.hint":"Un titre court aide à synthétiser la recommandation.",
    "field.budgetMin.label":"Budget minimum","field.budgetMax.label":"Budget maximum","field.deadline.label":"Deadline / horizon","field.urgency.low":"Faible","field.urgency.medium":"Moyenne","field.urgency.high":"Haute",
    "field.outputMode.label":"Mode de restitution","field.outputMode.email":"Email","field.outputMode.whatsapp":"WhatsApp","field.outputMode.pdf":"PDF","field.outputMode.display":"Affichage web",
    "field.email.label":"Adresse email","field.whatsapp.label":"Numéro WhatsApp","field.fileLink.label":"Lien vers documents (optionnel)",
    "field.consent.label":"J’accepte que mes informations soient utilisées uniquement pour produire cette analyse.",
    "form.submit":"Générer ma recommandation","form.reset":"Réinitialiser","form.trust.note":"Vos données restent confidentielles.",
    "footer.privacy":"Politique de confidentialité","footer.copy":"© 2026 e-META — Tous droits réservés",
    /* privacy */
    "privacy.title":"Politique de confidentialité — e-META","privacy.description":"Politique de confidentialité e-META","privacy.heading":"Politique de confidentialité — e-META","privacy.intro":"e-META attache une importance particulière à la protection des données personnelles de ses utilisateurs.",
    "privacy.sec1.title":"1. Introduction","privacy.sec1.text":"e-META est un outil d’aide à la décision. Les recommandations sont indicatives ; l’utilisateur assume la décision finale.",
    "privacy.sec2.title":"2. Données collectées","privacy.sec2.li1":"Informations saisies volontairement dans les formulaires.","privacy.sec2.li2":"Données de contact si une restitution est demandée.","privacy.sec2.li3":"Fichiers ou liens transmis volontairement.",
    "privacy.sec3.title":"3. Utilisation des données","privacy.sec3.text":"Génération d’analyses personnalisées et amélioration continue.",
    "privacy.pdf.title":"Version officielle PDF","privacy.pdf.download":"Télécharger la version officielle (PDF)","privacy.footer":"© 2026 e-META — Tous droits réservés"
  },
  en: {
    "meta.title":"e-META — Decision support AI","meta.description":"Multilingual AI decision assistant",
    "header.tagline":"Multilingual AI decision assistant","nav.home":"Home","nav.form":"Form","nav.privacy":"Privacy",
    "hero.title":"Give your decisions a premium advisory level","hero.subtitle":"Structured strategic analysis, actionable recommendations and professional deliverables.",
    "hero.point1":"Structured analysis (senior consultant level)","hero.point2":"Actionable recommendations + risks + KPI","hero.point3":"Personalized delivery (Email / WhatsApp / PDF)","hero.cta":"Start a strategic analysis",
    "form.badge.cabinet":"Advisory mode","form.title":"e-META Form — Premium strategic analysis","form.intro":"The more precise your answers, the more actionable the recommendation.",
    "group.general":"1) Qualify the decision","group.budget":"3) Ambition, budget & urgency","group.output":"4) Delivery & contact","group.trust":"Trust & consent",
    "field.domain.label":"Main domain","field.domain.options":["Business / Strategy","Finance","Marketing / Sales","Operations","IT","Legal","Impact / CSR","Other"],
    "field.decisionType.label":"Decision type","field.decisionType.options":["Strategic","Operational","Financial","Marketing","Technical","Other"],
    "field.title.ph":"E.g.: Launch new product line, open store...","field.title.hint":"A short title helps summarize the recommendation.",
    "field.budgetMin.label":"Minimum budget","field.budgetMax.label":"Maximum budget","field.deadline.label":"Deadline / horizon","field.urgency.low":"Low","field.urgency.medium":"Medium","field.urgency.high":"High",
    "field.outputMode.label":"Delivery mode","field.outputMode.email":"Email","field.outputMode.whatsapp":"WhatsApp","field.outputMode.pdf":"PDF","field.outputMode.display":"Web view",
    "field.email.label":"Email address","field.whatsapp.label":"WhatsApp number","field.fileLink.label":"Link to documents (optional)",
    "field.consent.label":"I accept my information will be used only to produce this analysis.",
    "form.submit":"Generate my recommendation","form.reset":"Reset","form.trust.note":"Your data remains confidential.",
    "footer.privacy":"Privacy policy","footer.copy":"© 2026 e-META — All rights reserved",
    /* privacy */
    "privacy.title":"Privacy policy — e-META","privacy.description":"e-META privacy policy","privacy.heading":"Privacy policy — e-META","privacy.intro":"e-META cares about protecting users' personal data.",
    "privacy.sec1.title":"1. Introduction","privacy.sec1.text":"e-META is a decision support tool. Recommendations are indicative; user takes final responsibility.",
    "privacy.sec2.title":"2. Data collected","privacy.sec2.li1":"Information entered voluntarily in forms.","privacy.sec2.li2":"Contact details if a delivery is requested.","privacy.sec2.li3":"Files or links provided voluntarily.",
    "privacy.sec3.title":"3. Use of data","privacy.sec3.text":"Generation of personalized analyses and continuous improvement.",
    "privacy.pdf.title":"Official PDF version","privacy.pdf.download":"Download the official PDF version","privacy.footer":"© 2026 e-META — All rights reserved"
  },
  es: {/* spanish translations (similar structure) */},
  ar: {/* arabic translations (similar structure) */}
};

// helper
window.getI18n = function(lang){ return window.I18N[lang] || window.I18N['fr']; };

// apply translations and populate selects
window.applyTranslations = function(lang){
  const dict = getI18n(lang);
  if(!dict) return;
  // text content
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(dict[k]) el.textContent = dict[k];
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const k=el.getAttribute('data-i18n-placeholder'); if(dict[k]) el.placeholder = dict[k];
  });
  // meta title & description
  if(dict['meta.title']) document.title = dict['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]'); if(metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);

  // populate domain & decisionType selects if present
  const domainSelect = document.getElementById('domain');
  if(domainSelect && dict['field.domain.options']){
    domainSelect.innerHTML = '<option value="">'+(dict['field.domain.placeholder']||'')+'</option>' + dict['field.domain.options'].map(o=>'<option>'+o+'</option>').join('');
  }
  const dt = document.getElementById('decisionType');
  if(dt && dict['field.decisionType.options']){
    dt.innerHTML = '<option value="">'+(dict['field.decisionType.placeholder']||'')+'</option>' + dict['field.decisionType.options'].map(o=>'<option>'+o+'</option>').join('');
  }

  // privacy pdf link text (if present)
  const pdfBtn = document.querySelector('#pdfPrivacyLink');
  if(pdfBtn && dict['privacy.pdf.download']){
    pdfBtn.textContent = dict['privacy.pdf.download'];
  }
};
