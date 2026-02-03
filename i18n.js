const resources = {
    fr: {
        "meta.title": "e-META LABS", "nav.home": "Vision", "nav.form": "Lancer l'Analyse", "nav.privacy": "Politique de Confidentialité",
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine", "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise", "group.analysis": "02 Analyse de Contexte", "group.output": "03 Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision", "field.projectTitle.placeholder": "Ex: Expansion hôtelière...",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Souveraineté IA", "domain.finance": "Ingénierie ESG", "domain.ma": "M&A (Fusions-Acquisitions)", "domain.legal": "Fiscalité OHADA", "domain.crisis": "Risques Cyber",
        "field.industry.label": "Secteur d'Activité",
        "industry.energy": "Énergies Vertes", "industry.blue": "Blue Economy", "industry.health": "HealthTech", "industry.agri": "Agribusiness", "industry.logistics": "Logistique",
        "field.geography.label": "Zone d'Impact", "field.geography.placeholder": "Sénégal, Europe, USA...",
        "field.problem.label": "Problématique & Enjeux", "field.problem.placeholder": "Décrivez les enjeux critiques...",
        "field.fileLink.label": "Audit Documentaire (Lien Cloud)", "field.fileLink.placeholder": "Lien vers Business Plan, Contrat...",
        "field.email.label": "Email de Direction", "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison", "field.outputMode.display": "Affichage Direct",
        "form.submit": "GÉNÉRER L'EXPERTISE E-META", "hero.trust": "🔒 Souveraineté & Certification Blockchain",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "privacy.content": "POLITIQUE DE CONFIDENTIALITÉ e-META LABS\n1. SOUVERAINETÉ : Vos données stratégiques ne sont jamais partagées.\n2. BLOCKCHAIN : Certification d'antériorité par Woleet.\n3. NON-SUBSTITUTION : Aide technologique, pas un conseil réglementé."
    },
    en: {
        "nav.home": "Vision", "nav.form": "Launch Analysis", "nav.privacy": "Privacy Policy",
        "hero.title": "Strategic Excellence for Every Decision.",
        "hero.subtitle": "Management Consulting decision station.",
        "engine.status": "SYSTEM READY", "group.general": "01 Scope & Expertise",
        "group.analysis": "02 Deep Analysis", "group.output": "03 Delivery Channels",
        "domain.ai": "AI Sovereignty", "domain.finance": "ESG Engineering", "domain.ma": "M&A", "domain.legal": "OHADA Tax", "domain.crisis": "Cyber Risks",
        "industry.energy": "Green Energy", "industry.blue": "Blue Economy", "industry.health": "HealthTech", "industry.agri": "Agribusiness", "industry.logistics": "Logistics",
        "field.projectTitle.placeholder": "e.g. West Africa Market Expansion",
        "form.submit": "GENERATE E-META EXPERTISE", "hero.trust": "🔒 Sovereign Data & Blockchain Certified",
        "footer.object": "Design and operation of AI solutions for decision support.",
        "privacy.content": "PRIVACY POLICY e-META LABS\n1. SOVEREIGNTY: Your strategic data is private.\n2. BLOCKCHAIN: Integration with Woleet for timestamping.\n3. COMPLIANCE: Not a substitute for regulated professional advice."
    },
    es: {
        "hero.title": "Excelencia Estratégica para cada Decisión.",
        "group.general": "01 Alcance y Especialización", "form.submit": "GENERAR EXPERIENCIA E-META",
        "privacy.content": "POLÍTICA DE PRIVACIDAD: Sus datos son soberanos y están protegidos."
    },
    ar: {
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "group.general": "01 النطاق والخبرة", "form.submit": "إنشاء خبرة e-META",
        "privacy.content": "سياسة الخصوصية: بياناتك سيادية ومحمية بتقنية البلوكشين."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) el.innerHTML = resources[lang][key];
    });
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
});
