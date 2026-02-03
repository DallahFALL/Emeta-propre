const resources = {
    fr: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "nav.home": "Vision", "nav.form": "Expertise", "nav.privacy": "Confidentialité",
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine", "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise", "group.analysis": "02 Analyse de Contexte", "group.output": "03 Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision", "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Souveraineté IA", "domain.finance": "Ingénierie ESG", "domain.ma": "M&A", "domain.legal": "Optimisation OHADA",
        "field.industry.label": "Secteur d'Activité", "industry.energy": "Énergies Vertes", "industry.blue": "Blue Economy", "industry.health": "HealthTech",
        "field.geography.label": "Zone d'Impact", "field.geography.placeholder": "Sénégal, Europe, USA...",
        "field.problem.label": "Problématique & Enjeux", "field.problem.placeholder": "Décrivez les enjeux critiques...",
        "field.fileLink.label": "Audit Documentaire (Lien Cloud)", "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan",
        "field.email.label": "Email de Direction", "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison", "field.outputMode.display": "Affichage Direct",
        "form.submit": "GÉNÉRER L'EXPERTISE E-META", "hero.trust": "🔒 Souveraineté & Certification Blockchain",
        "privacy.body": "POLITIQUE DE CONFIDENTIALITÉ e-META LABS\n1. SOUVERAINETÉ : Vos données ne sont jamais partagées.\n2. BLOCKCHAIN : Certification par Woleet.\n3. CONSEIL : Aide technologique, pas un conseil réglementé."
    },
    en: {
        "meta.title": "e-META LABS — Strategic AI",
        "nav.home": "Vision", "nav.form": "Expertise", "nav.privacy": "Privacy Policy",
        "hero.title": "Strategic Excellence for Every Decision.",
        "hero.subtitle": "Management Consulting decision station.",
        "form.title": "Expertise Decision Engine", "engine.status": "SYSTEM READY",
        "group.general": "01 Scope & Expertise", "group.analysis": "02 Deep Analysis", "group.output": "03 Delivery Channels",
        "field.projectTitle.placeholder": "e.g. Market Expansion...",
        "field.geography.placeholder": "Senegal, EU, USA...",
        "field.problem.placeholder": "Describe critical issues...",
        "field.fileLink.placeholder": "Cloud Link (Drive, PDF...)",
        "form.submit": "GENERATE E-META EXPERTISE", "hero.trust": "🔒 Sovereign Data & Blockchain Certified",
        "privacy.body": "PRIVACY POLICY e-META LABS\n1. SOVEREIGNTY: Your data is private.\n2. BLOCKCHAIN: Timestamped via Woleet.\n3. DISCLAIMER: Not a substitute for regulated advice."
    },
    es: {
        "meta.title": "e-META LABS — IA Estratégica",
        "nav.home": "Visión", "nav.form": "Experiencia", "nav.privacy": "Privacidad",
        "hero.title": "Excelencia Estratégica para cada Decisión.",
        "hero.subtitle": "Estación de decisión de nivel consultoría.",
        "form.title": "Expertise Decision Engine", "engine.status": "SISTEMA LISTO",
        "group.general": "01 Alcance y Especialización", "group.analysis": "02 Análisis de Contexto", "group.output": "03 Canales de Entrega",
        "field.projectTitle.placeholder": "Ej: Expansión hotelera...",
        "field.geography.placeholder": "España, México, Global...",
        "field.problem.placeholder": "Describa los desafíos...",
        "field.fileLink.placeholder": "Google Drive, PDF, Contrato...",
        "form.submit": "GENERAR EXPERIENCIA E-META", "hero.trust": "🔒 Datos Soberanos y Blockchain",
        "privacy.body": "POLÍTICA DE PRIVACIDAD e-META LABS\n1. SOBERANÍA : Sus datos son privados.\n2. BLOCKCHAIN : Certificado por Woleet.\n3. CONSEJO : Ayuda tecnológica, no consejo regulado."
    },
    ar: {
        "meta.title": "e-META LABS — الذكاء الاستراتيجي",
        "nav.home": "الرؤية", "nav.form": "الخبرة", "nav.privacy": "سياسة الخصوصية",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "منصة توجيه القرار بمستوى استشاري عالمي.",
        "form.title": "محرك اتخاذ القرار", "engine.status": "النظام جاهز",
        "group.general": "01 النطاق والخبرة", "group.analysis": "02 تحليل السياق", "group.output": "03 قنوات التسليم",
        "field.projectTitle.placeholder": "مثال: التوسع في الأسواق...",
        "field.geography.placeholder": "السنغال، أوروبا، عالمي...",
        "field.problem.placeholder": "صف التحديات الحرجة...",
        "field.fileLink.placeholder": "رابط سحابي (درایف، PDF...)",
        "form.submit": "إنشاء خبرة e-META", "hero.trust": "🔒 سيادة البيانات والتوثيق عبر البلوكشين",
        "privacy.body": "سياسة الخصوصية e-META LABS\n1. سيادة البيانات: بياناتك لا يتم مشاركتها أبداً.\n2. توثيق البلوكشين: موثق عبر تقنية Woleet.\n3. الإطار القانوني: أداة لدعم القرار وليست استشارة قانونية."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) el.innerHTML = resources[lang][key];
    });
    // LOGIQUE SPÉCIFIQUE POUR LES PLACEHOLDERS
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (resources[lang] && resources[lang][key]) el.setAttribute('placeholder', resources[lang][key]);
    });
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('uiLangSelect');
    if (selector) {
        updateContent(selector.value);
        selector.addEventListener('change', (e) => updateContent(e.target.value));
    }
    // Modal Privacy
    const modal = document.getElementById("privacyModal");
    const btn = document.getElementById("openPrivacy");
    const span = document.getElementsByClassName("close-modal")[0];
    if(btn) btn.onclick = () => modal.style.display = "block";
    if(span) span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
});
