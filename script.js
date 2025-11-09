/* e-META – script principal
   - i18n avec data-i18n
   - chargement de translations.json (fallback embarqué)
   - champs conditionnels par domaine
   - bouton WhatsApp (sans “Contact”)
   - gestion RTL pour l’arabe
*/

// --- Fallback i18n embarqué (utilisé si translations.json indisponible)
const FALLBACK_DICTIONARY = {
  fr: {
    "app.title": "e-META – Assistant IA Multilingue",
    "header.title": "e-META – Assistant IA de Prise de Décision",
    "header.subtitle": "Formulaire central — Répondez et envoyez par WhatsApp ou Email",
    "form.language": "Langue",
    "form.currency": "Devise",
    "form.fullname": "Nom complet",
    "form.email": "Email",
    "form.phone": "Téléphone (WhatsApp)",
    "form.domain": "Domaine",
    "form.chooseDomain": "— Choisir un domaine —",
    "domain.agriculture": "Agriculture",
    "domain.commerce": "Commerce & Distribution",
    "domain.ecommerce": "E-commerce",
    "domain.fintech": "FinTech / Mobile Money",
    "domain.sante": "Santé",
    "domain.education": "Éducation",
    "domain.immobilier": "Immobilier",
    "domain.transport": "Transport & Logistique",
    "domain.energie": "Énergie & Solaire",
    "domain.tourisme": "Tourisme",
    "domain.technologie": "Technologie & IA",
    "domain.juridique": "Juridique",
    "domain.finance": "Finance & Comptabilité",
    "domain.rh": "Ressources Humaines",
    "domain.marketing": "Marketing & Communication",
    "domain.industrie": "Industrie & Fabrication",
    "domain.environnement": "Environnement",
    "domain.public": "Projets Publics & Collectivités",
    "domain.autre": "Autre",
    "form.subject": "Objet",
    "form.details": "Détails",
    "form.customReq": "Requête personnalisée",
    "form.customDetails": "Détails de la requête personnalisée",
    "btn.whatsapp": "WhatsApp",
    "btn.submit": "Envoyer par Email",
    "btn.reset": "Réinitialiser",
    "form.note": "Astuce : si vous renseignez votre numéro WhatsApp, le message est pré-rempli et prêt à envoyer.",
    "footer.rights": "©",
    "footer.tag": "Simplement. Intelligemment.",

    // Labels conditionnels
    "cond.agriculture.area": "Superficie (ha)",
    "cond.agriculture.crop": "Type de culture",
    "cond.agriculture.irrig": "Irrigation",
    "cond.commerce.type": "Type de commerce",
    "cond.commerce.volume": "Volume mensuel (FCFA)",
    "cond.fintech.usecase": "Cas d’usage (paiements, cash-in/out, QR, etc.)",
    "cond.fintech.agents": "Nombre d’agents/points cash",
    "cond.sante.structure": "Type de structure",
    "cond.sante.portee": "Portée (locale/régionale)",
    "cond.education.niveau": "Niveau (primaire, secondaire, sup.)",
    "cond.education.effectif": "Effectif (approx.)",
    "cond.immobilier.nature": "Nature (terrain, maison, R+1, etc.)",
    "cond.immobilier.surface": "Surface (m²)",
    "cond.transport.mode": "Mode (route, fluvial, etc.)",
    "cond.transport.flux": "Flux mensuel (tonnes/colli)",
    "cond.energie.type": "Type (solaire, hybride, etc.)",
    "cond.energie.puissance": "Puissance (kW)",
    "cond.tourisme.activite": "Activité (hébergement, guide, etc.)",
    "cond.tourisme.capacite": "Capacité (pers.)",
    "cond.technologie.produit": "Produit (app, site, IA, etc.)",
    "cond.technologie.stack": "Stack / outils",
    "cond.juridique.besoin": "Besoin (contrat, dépôt, conformité)",
    "cond.finance.besoin": "Besoin (compta, audit, levée)",
    "cond.rh.besoin": "Besoin RH (recrut., paie, orga)",
    "cond.marketing.canal": "Canaux (FB, YT, WhatsApp...)",
    "cond.industrie.secteur": "Secteur (agro, chimie...)",
    "cond.environnement.projet": "Projet (recyclage, typha, etc.)",
    "cond.public.cadre": "Cadre (collectivité, appel d’offres)"
  },

  en: {
    "app.title": "e-META – Multilingual AI Assistant",
    "header.title": "e-META – Decision-Making AI Assistant",
    "header.subtitle": "Central form — Send via WhatsApp or Email",
    "form.language": "Language",
    "form.currency": "Currency",
    "form.fullname": "Full name",
    "form.email": "Email",
    "form.phone": "Phone (WhatsApp)",
    "form.domain": "Domain",
    "form.chooseDomain": "— Choose a domain —",
    "domain.agriculture": "Agriculture",
    "domain.commerce": "Commerce & Distribution",
    "domain.ecommerce": "E-commerce",
    "domain.fintech": "FinTech / Mobile Money",
    "domain.sante": "Health",
    "domain.education": "Education",
    "domain.immobilier": "Real Estate",
    "domain.transport": "Transport & Logistics",
    "domain.energie": "Energy & Solar",
    "domain.tourisme": "Tourism",
    "domain.technologie": "Technology & AI",
    "domain.juridique": "Legal",
    "domain.finance": "Finance & Accounting",
    "domain.rh": "Human Resources",
    "domain.marketing": "Marketing & Communication",
    "domain.industrie": "Industry & Manufacturing",
    "domain.environnement": "Environment",
    "domain.public": "Public Projects & Communities",
    "domain.autre": "Other",
    "form.subject": "Subject",
    "form.details": "Details",
    "form.customReq": "Custom request",
    "form.customDetails": "Custom request details",
    "btn.whatsapp": "WhatsApp",
    "btn.submit": "Send by Email",
    "btn.reset": "Reset",
    "form.note": "Tip: if you add your WhatsApp number, the message will be pre-filled and ready to send.",
    "footer.rights": "©",
    "footer.tag": "Simply. Intelligently.",

    "cond.agriculture.area": "Area (ha)",
    "cond.agriculture.crop": "Crop type",
    "cond.agriculture.irrig": "Irrigation",
    "cond.commerce.type": "Commerce type",
    "cond.commerce.volume": "Monthly volume (FCFA)",
    "cond.fintech.usecase": "Use case (payments, cash in/out, QR, etc.)",
    "cond.fintech.agents": "Number of agents/cash points",
    "cond.sante.structure": "Structure type",
    "cond.sante.portee": "Scope (local/regional)",
    "cond.education.niveau": "Level (primary, secondary, tertiary)",
    "cond.education.effectif": "Headcount (approx.)",
    "cond.immobilier.nature": "Nature (land, house, G+1, etc.)",
    "cond.immobilier.surface": "Surface (m²)",
    "cond.transport.mode": "Mode (road, river, etc.)",
    "cond.transport.flux": "Monthly flow (tons/parcels)",
    "cond.energie.type": "Type (solar, hybrid, etc.)",
    "cond.energie.puissance": "Power (kW)",
    "cond.tourisme.activite": "Activity (accommodation, guide, etc.)",
    "cond.tourisme.capacite": "Capacity (people)",
    "cond.technologie.produit": "Product (app, site, AI, etc.)",
    "cond.technologie.stack": "Stack / tools",
    "cond.juridique.besoin": "Need (contract, filing, compliance)",
    "cond.finance.besoin": "Need (accounting, audit, raise)",
    "cond.rh.besoin": "HR Need (recruiting, payroll, org)",
    "cond.marketing.canal": "Channels (FB, YT, WhatsApp...)",
    "cond.industrie.secteur": "Sector (agro, chemical...)",
    "cond.environnement.projet": "Project (recycling, typha, etc.)",
    "cond.public.cadre": "Framework (community, tender)"
  },

  es: {
    "app.title": "e-META – Asistente IA Multilingüe",
    "header.title": "e-META – Asistente IA para la Toma de Decisiones",
    "header.subtitle": "Formulario central — Enviar por WhatsApp o Email",
    "form.language": "Idioma",
    "form.currency": "Moneda",
    "form.fullname": "Nombre completo",
    "form.email": "Email",
    "form.phone": "Teléfono (WhatsApp)",
    "form.domain": "Dominio",
    "form.chooseDomain": "— Elegir un dominio —",
    "domain.agriculture": "Agricultura",
    "domain.commerce": "Comercio y Distribución",
    "domain.ecommerce": "E-commerce",
    "domain.fintech": "FinTech / Dinero Móvil",
    "domain.sante": "Salud",
    "domain.education": "Educación",
    "domain.immobilier": "Bienes Raíces",
    "domain.transport": "Transporte y Logística",
    "domain.energie": "Energía y Solar",
    "domain.tourisme": "Turismo",
    "domain.technologie": "Tecnología e IA",
    "domain.juridique": "Legal",
    "domain.finance": "Finanzas y Contabilidad",
    "domain.rh": "Recursos Humanos",
    "domain.marketing": "Marketing y Comunicación",
    "domain.industrie": "Industria y Manufactura",
    "domain.environnement": "Medio Ambiente",
    "domain.public": "Proyectos Públicos y Comunidades",
    "domain.autre": "Otro",
    "form.subject": "Asunto",
    "form.details": "Detalles",
    "form.customReq": "Solicitud personalizada",
    "form.customDetails": "Detalles de la solicitud personalizada",
    "btn.whatsapp": "WhatsApp",
    "btn.submit": "Enviar por Email",
    "btn.reset": "Restablecer",
    "form.note": "Consejo: si añades tu número de WhatsApp, el mensaje se rellenará automáticamente.",
    "footer.rights": "©",
    "footer.tag": "Simplemente. Inteligentemente.",

    "cond.agriculture.area": "Superficie (ha)",
    "cond.agriculture.crop": "Tipo de cultivo",
    "cond.agriculture.irrig": "Riego",
    "cond.commerce.type": "Tipo de comercio",
    "cond.commerce.volume": "Volumen mensual (FCFA)",
    "cond.fintech.usecase": "Caso de uso (pagos, cash in/out, QR, etc.)",
    "cond.fintech.agents": "Nº de agentes/puntos de cash",
    "cond.sante.structure": "Tipo de estructura",
    "cond.sante.portee": "Alcance (local/regional)",
    "cond.education.niveau": "Nivel (primaria, secundaria, superior)",
    "cond.education.effectif": "Número de alumnos (aprox.)",
    "cond.immobilier.nature": "Naturaleza (terreno, casa, G+1, etc.)",
    "cond.immobilier.surface": "Superficie (m²)",
    "cond.transport.mode": "Modo (carretera, fluvial, etc.)",
    "cond.transport.flux": "Flujo mensual (toneladas/paquetes)",
    "cond.energie.type": "Tipo (solar, híbrido, etc.)",
    "cond.energie.puissance": "Potencia (kW)",
    "cond.tourisme.activite": "Actividad (alojamiento, guía, etc.)",
    "cond.tourisme.capacite": "Capacidad (personas)",
    "cond.technologie.produit": "Producto (app, web, IA, etc.)",
    "cond.technologie.stack": "Stack / herramientas",
    "cond.juridique.besoin": "Necesidad (contrato, registro, cumplimiento)",
    "cond.finance.besoin": "Necesidad (contab., auditoría, financiación)",
    "cond.rh.besoin": "Necesidad RRHH (recluta., nómina, org.)",
    "cond.marketing.canal": "Canales (FB, YT, WhatsApp...)",
    "cond.industrie.secteur": "Sector (agro, químico...)",
    "cond.environnement.projet": "Proyecto (reciclaje, typha, etc.)",
    "cond.public.cadre": "Marco (comunidad, licitación)"
  },

  ar: {
    "app.title": "e-META – مساعد ذكاء اصطناعي متعدد اللغات",
    "header.title": "e-META – مساعد اتخاذ القرار بالذكاء الاصطناعي",
    "header.subtitle": "نموذج مركزي — أرسل عبر واتساب أو البريد الإلكتروني",
    "form.language": "اللغة",
    "form.currency": "العملة",
    "form.fullname": "الاسم الكامل",
    "form.email": "البريد الإلكتروني",
    "form.phone": "الهاتف (واتساب)",
    "form.domain": "المجال",
    "form.chooseDomain": "— اختر مجالاً —",
    "domain.agriculture": "الزراعة",
    "domain.commerce": "التجارة والتوزيع",
    "domain.ecommerce": "التجارة الإلكترونية",
    "domain.fintech": "التقنيات المالية / المال المحمول",
    "domain.sante": "الصحة",
    "domain.education": "التعليم",
    "domain.immobilier": "العقارات",
    "domain.transport": "النقل واللوجستيات",
    "domain.energie": "الطاقة والطاقة الشمسية",
    "domain.tourisme": "السياحة",
    "domain.technologie": "التقنية والذكاء الاصطناعي",
    "domain.juridique": "القانون",
    "domain.finance": "المالية والمحاسبة",
    "domain.rh": "الموارد البشرية",
    "domain.marketing": "التسويق والاتصال",
    "domain.industrie": "الصناعة والتصنيع",
    "domain.environnement": "البيئة",
    "domain.public": "المشاريع العامة والمجتمعات",
    "domain.autre": "آخر",
    "form.subject": "الموضوع",
    "form.details": "التفاصيل",
    "form.customReq": "طلب مخصص",
    "form.customDetails": "تفاصيل الطلب المخصص",
    "btn.whatsapp": "واتساب",
    "btn.submit": "إرسال عبر البريد",
    "btn.reset": "إعادة الضبط",
    "form.note": "تلميح: إذا أضفت رقم واتساب، سيتم تعبئة الرسالة تلقائياً.",
    "footer.rights": "©",
    "footer.tag": "ببساطة. بذكاء.",

    "cond.agriculture.area": "المساحة (هكتار)",
    "cond.agriculture.crop": "نوع المحصول",
    "cond.agriculture.irrig": "الري",
    "cond.commerce.type": "نوع التجارة",
    "cond.commerce.volume": "الحجم الشهري (فرنك إفريقي)",
    "cond.fintech.usecase": "حالة الاستخدام (مدفوعات، إيداع/سحب، QR...)",
    "cond.fintech.agents": "عدد الوكلاء/نقاط السيولة",
    "cond.sante.structure": "نوع الجهة الصحية",
    "cond.sante.portee": "النطاق (محلي/إقليمي)",
    "cond.education.niveau": "المستوى (ابتدائي، ثانوي، عالٍ)",
    "cond.education.effectif": "العدد التقريبي",
    "cond.immobilier.nature": "الطبيعة (أرض، منزل، طابق+1...)",
    "cond.immobilier.surface": "المساحة (م²)",
    "cond.transport.mode": "النمط (بري، نهري...)",
    "cond.transport.flux": "التدفق الشهري (أطنان/طرود)",
    "cond.energie.type": "النوع (شمسي، هجين...)",
    "cond.energie.puissance": "القدرة (كيلوواط)",
    "cond.tourisme.activite": "النشاط (إيواء، إرشاد...)",
    "cond.tourisme.capacite": "السعة (أشخاص)",
    "cond.technologie.produit": "المنتج (تطبيق، موقع، ذكاء...)",
    "cond.technologie.stack": "المكدس / الأدوات",
    "cond.juridique.besoin": "الاحتياج (عقد، إيداع، امتثال)",
    "cond.finance.besoin": "الاحتياج (محاسبة، تدقيق، تمويل)",
    "cond.rh.besoin": "احتياج الموارد البشرية (توظيف، أجور...)",
    "cond.marketing.canal": "القنوات (فيسبوك، يوتيوب، واتساب...)",
    "cond.industrie.secteur": "القطاع (زراعي، كيميائي...)",
    "cond.environnement.projet": "مشروع (تدوير، تيـفا...)",
    "cond.public.cadre": "الإطار (مجتمع، مناقصة)"
  }
};

// Domaines -> configuration des champs conditionnels
const DOMAIN_FIELDS = {
  agriculture: [
    { id: "ag_area", key: "cond.agriculture.area", type: "number", min: 0, step: "0.01", placeholder: "100" },
    { id: "ag_crop", key: "cond.agriculture.crop", type: "text", placeholder: "Riz, oignon, tomate..." },
    { id: "ag_irrig", key: "cond.agriculture.irrig", type: "text", placeholder: "Goutte-à-goutte, gravitaire..." }
  ],
  commerce: [
    { id: "co_type", key: "cond.commerce.type", type: "text", placeholder: "Gros, détail, mixte..." },
    { id: "co_vol", key: "cond.commerce.volume", type: "number", min: 0, step: "1", placeholder: "5000000" }
  ],
  ecommerce: [
    { id: "ec_type", key: "cond.commerce.type", type: "text", placeholder: "Marketplace, D2C, etc." },
    { id: "ec_vol", key: "cond.commerce.volume", type: "number", min: 0, step: "1", placeholder: "5000000" }
  ],
  fintech: [
    { id: "fi_use", key: "cond.fintech.usecase", type: "text", placeholder: "Paiements factures, QR, cash-out..." },
    { id: "fi_agents", key: "cond.fintech.agents", type: "number", min: 0, step: "1", placeholder: "10" }
  ],
  sante: [
    { id: "sa_struct", key: "cond.sante.structure", type: "text", placeholder: "Cabinet, clinique, pharma..." },
    { id: "sa_scope", key: "cond.sante.portee", type: "text", placeholder: "Locale, régionale..." }
  ],
  education: [
    { id: "ed_level", key: "cond.education.niveau", type: "text", placeholder: "Primaire, secondaire..." },
    { id: "ed_head", key: "cond.education.effectif", type: "number", min: 0, step: "1", placeholder: "300" }
  ],
  immobilier: [
    { id: "im_nat", key: "cond.immobilier.nature", type: "text", placeholder: "Terrain, R+1..." },
    { id: "im_surf", key: "cond.immobilier.surface", type: "number", min: 0, step: "1", placeholder: "120" }
  ],
  transport: [
    { id: "tr_mode", key: "cond.transport.mode", type: "text", placeholder: "Route, fluvial..." },
    { id: "tr_flux", key: "cond.transport.flux", type: "text", placeholder: "10 tonnes/mois..." }
  ],
  energie: [
    { id: "en_type", key: "cond.energie.type", type: "text", placeholder: "Solaire, hybride..." },
    { id: "en_kw", key: "cond.energie.puissance", type: "number", min: 0, step: "0.1", placeholder: "5" }
  ],
  tourisme: [
    { id: "to_act", key: "cond.tourisme.activite", type: "text", placeholder: "Hébergement, guide..." },
    { id: "to_cap", key: "cond.tourisme.capacite", type: "number", min: 0, step: "1", placeholder: "20" }
  ],
  technologie: [
    { id: "te_prod", key: "cond.technologie.produit", type: "text", placeholder: "App mobile, site web..." },
    { id: "te_stack", key: "cond.technologie.stack", type: "text", placeholder: "Flutter, React, Make, WhatsApp API..." }
  ],
  juridique: [
    { id: "ju_need", key: "cond.juridique.besoin", type: "text", placeholder: "Contrat, CGU, conformité..." }
  ],
  finance: [
    { id: "fi_need", key: "cond.finance.besoin", type: "text", placeholder: "Compta, audit, levée..." }
  ],
  rh: [
    { id: "rh_need", key: "cond.rh.besoin", type: "text", placeholder: "Recrutement, paie..." }
  ],
  marketing: [
    { id: "mk_canal", key: "cond.marketing.canal", type: "text", placeholder: "FB, YT, WhatsApp..." }
  ],
  industrie: [
    { id: "in_sect", key: "cond.industrie.secteur", type: "text", placeholder: "Agro, chimie..." }
  ],
  environnement: [
    { id: "en_proj", key: "cond.environnement.projet", type: "text", placeholder: "Recyclage, typha..." }
  ],
  public: [
    { id: "pu_frame", key: "cond.public.cadre", type: "text", placeholder: "Collectivité, appel d’offres..." }
  ],
  autre: []
};

let I18N = structuredClone(FALLBACK_DICTIONARY);

// ---- Utilitaires d’i18n
function setDirByLang(lang){
  const rtl = (lang === 'ar');
  document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.documentElement.lang = lang;
}

function applyI18n(lang){
  const dict = I18N[lang] || FALLBACK_DICTIONARY[lang] || FALLBACK_DICTIONARY.fr;
  document.querySelectorAll("[data-i18n]").forEach(node=>{
    const key = node.getAttribute("data-i18n");
    if(dict[key]) node.textContent = dict[key];
  });
  // Placeholder des inputs conditionnels sera géré à l’injection
  setDirByLang(lang);
  document.title = dict["app.title"] || document.title;
}

// ---- Injection des champs conditionnels
function renderConditionalFields(domain, lang){
  const wrap = document.getElementById("conditionalFields");
  wrap.innerHTML = "";
  const fields = DOMAIN_FIELDS[domain] || [];
  const dict = I18N[lang] || FALLBACK_DICTIONARY[lang] || FALLBACK_DICTIONARY.fr;

  fields.forEach(cfg=>{
    const group = document.createElement("div");
    group.className = "field";
    const label = document.createElement("label");
    label.setAttribute("for", cfg.id);
    label.textContent = dict[cfg.key] || cfg.key;

    const input = document.createElement("input");
    input.id = cfg.id;
    input.name = cfg.id;
    input.type = cfg.type || "text";
    if(cfg.placeholder) input.placeholder = cfg.placeholder;
    if(cfg.min !== undefined) input.min = cfg.min;
    if(cfg.step !== undefined) input.step = cfg.step;

    group.appendChild(label);
    group.appendChild(input);
    wrap.appendChild(group);
  });
}

// ---- Construction du message WhatsApp
function buildWhatsAppMessage(form){
  const data = new FormData(form);
  const parts = [];
  const lang = data.get("lang") || "fr";
  const dict = I18N[lang] || FALLBACK_DICTIONARY[lang];

  parts.push(`e-META`);
  parts.push(`Lang: ${lang.toUpperCase()}  |  Currency: ${data.get("currency") || ""}`);
  parts.push(`Nom: ${data.get("fullname") || ""}`);
  parts.push(`Domaine: ${data.get("domain") || ""}`);
  parts.push(`Objet: ${data.get("subject") || ""}`);
  const det = data.get("details"); if(det) parts.push(`Détails: ${det}`);

  // Ajouter conditionnels
  const domain = data.get("domain");
  (DOMAIN_FIELDS[domain] || []).forEach(cfg=>{
    const val = data.get(cfg.id);
    if(val){
      const label = dict[cfg.key] || cfg.id;
      parts.push(`${label}: ${val}`);
    }
  });

  // Requête personnalisée
  if(data.get("customReq")==="on"){
    const cd = data.get("customDetails");
    if(cd) parts.push(`Requête personnalisée: ${cd}`);
  }

  return parts.join("\n");
}

// ---- Init
window.addEventListener("DOMContentLoaded", async () => {
  // Année footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Charger translations.json si présent
  try{
    const res = await fetch("translations.json", { cache: "no-store" });
    if(res.ok){
      const json = await res.json();
      // Fusion soft: on écrase seulement les clés existantes
      ["fr","en","es","ar"].forEach(lang=>{
        if(json[lang]) I18N[lang] = { ...FALLBACK_DICTIONARY[lang], ...json[lang] };
      });
    }
  }catch(e){
    // fallback silencieux
  }

  const form = document.getElementById("emetaForm");
  const langSel = document.getElementById("lang");
  const domainSel = document.getElementById("domain");
  const customReq = document.getElementById("customReq");
  const customBlock = document.getElementById("customReqBlock");
  const waBtn = document.getElementById("whatsappButton");

  // Lang par défaut
  applyI18n(langSel.value);

  langSel.addEventListener("change", ()=>{
    applyI18n(langSel.value);
    // Re-rendre les conditionnels avec la bonne langue
    renderConditionalFields(domainSel.value, langSel.value);
  });

  domainSel.addEventListener("change", ()=>{
    renderConditionalFields(domainSel.value, langSel.value);
  });

  customReq.addEventListener("change", ()=>{
    customBlock.hidden = !customReq.checked;
  });

  // WhatsApp
  waBtn.addEventListener("click", ()=>{
    const phone = (document.getElementById("phone").value || "").replace(/\D/g,"");
    const text = buildWhatsAppMessage(form);
    const url = phone
      ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
      : `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });

  // Soumission email (classique — laisse le client de messagerie gérer via mailto:)
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const subject = data.get("subject") || "e-META – Nouvelle demande";
    const body = buildWhatsAppMessage(form);
    const email = data.get("email") || "";
    const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
});
