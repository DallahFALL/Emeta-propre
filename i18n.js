const resources = {
    fr: {
        "meta.title": "e-META LABS", "nav.home": "Vision", "nav.form": "Lancer l'Analyse", "nav.privacy": "Politique de Confidentialité",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine", "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise", "group.analysis": "02 Analyse de Contexte", "group.output": "03 Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision", "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Souveraineté IA", "domain.finance": "Ingénierie ESG", "domain.ma": "M&A (Fusions-Acquisitions)", "domain.legal": "Optimisation Fiscale OHADA", "domain.crisis": "Gestion de Crise Cyber",
        "field.industry.label": "Secteur d'Activité",
        "industry.energy": "Énergies Vertes", "industry.blue": "Blue Economy", "industry.health": "HealthTech", "industry.agri": "Agrobusiness intelligent", "industry.logistics": "Logistique Globale",
        "field.geography.label": "Zone d'Impact", "field.geography.placeholder": "Sénégal, Europe, USA...",
        "field.problem.label": "Problématique & Enjeux", "field.problem.placeholder": "Décrivez les enjeux critiques...",
        "field.fileLink.label": "Audit Documentaire (Lien Cloud)", "field.fileLink.placeholder": "Lien Google Drive, PDF, Contrat...",
        "field.email.label": "Email de Direction", "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison souhaité", "field.outputMode.display": "Affichage Direct",
        "form.submit": "GÉNÉRER L'EXPERTISE E-META", "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.privacy_text": "Philosophie de Souveraineté : Vos données ne sont jamais partagées.",
        "privacy.content": "POLITIQUE DE CONFIDENTIALITÉ e-META LABS\n1. Souveraineté : Vos données ne sont jamais utilisées pour l'entraînement de modèles publics.\n2. Sécurité : Chaque rapport est certifié par horodatage Blockchain via Woleet.\n3. Non-Substitution : Nos analyses ne remplacent pas un conseil réglementé."
    },
    en: {
        "nav.home": "Vision", "nav.form": "Launch Analysis", "nav.privacy": "Privacy Policy",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station.",
        "group.general": "01 Scope & Expertise", "engine.status": "SYSTEM READY",
        "domain.ai": "AI Sovereignty", "domain.ma": "M&A", "domain.legal": "Tax Optimization", "domain.crisis": "Cyber Crisis Management",
        "industry.energy": "Green Energy", "industry.blue": "Blue Economy", "field.projectTitle.placeholder": "e.g. West Africa Market Expansion",
        "form.submit": "GENERATE E-META EXPERTISE",
        "footer.privacy_text": "Sovereignty Policy: Your data is never shared.",
        "privacy.content": "PRIVACY POLICY e-META LABS\n1. Sovereignty: Your data is private.\n2. Security: Blockchain certified.\n3. Compliance: Not a substitute for regulated legal advice."
    },
    es: {
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "group.general": "01 Alcance y Especialización", "form.submit": "GENERAR EXPERIENCIA E-META",
        "domain.ma": "M&A", "industry.energy": "Energía Verde",
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
