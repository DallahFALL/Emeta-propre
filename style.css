const resources = {
    fr: {
        "meta.title": "e-META LABS", "nav.home": "Vision", "nav.form": "Lancer l'Analyse", "nav.privacy": "Politique de Confidentialité",
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine", "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise", "group.analysis": "02 Analyse de Contexte", "group.output": "03 Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision", "field.projectTitle.placeholder": "Ex: Expansion hôtelière ou Audit IA...",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Souveraineté IA", "domain.finance": "Ingénierie ESG", "domain.ma": "M&A (Fusions-Acquisitions)", "domain.legal": "Optimisation Fiscale OHADA", "domain.crisis": "Gestion de Crise Cyber",
        "field.industry.label": "Secteur d'Activité",
        "industry.energy": "Énergies Vertes", "industry.blue": "Blue Economy", "industry.health": "HealthTech", "industry.agri": "Agrobusiness intelligent", "industry.logistics": "Logistique Globale",
        "field.geography.label": "Zone d'Impact", "field.geography.placeholder": "Sénégal, Europe, USA...",
        "field.problem.label": "Problématique & Enjeux", "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.fileLink.label": "Audit Documentaire (Lien Cloud)", "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan",
        "field.email.label": "Email de Direction", "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison souhaité", "field.outputMode.display": "Affichage Direct",
        "form.submit": "GÉNÉRER L'EXPERTISE E-META", "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "privacy.body": "POLITIQUE DE CONFIDENTIALITÉ e-META LABS\n\n1. SOUVERAINETÉ DES DONNÉES\nVos données stratégiques et confidentielles ne sont jamais partagées avec des tiers ni utilisées pour l'entraînement de modèles d'IA publics.\n\n2. CERTIFICATION BLOCKCHAIN\nChaque diagnostic est horodaté via la technologie Blockchain Bitcoin (Woleet), garantissant l'antériorité et l'intégrité de vos réflexions.\n\n3. CADRE RÉGLEMENTÉ\ne-META est un outil d'aide à la décision. Il ne constitue pas un conseil juridique, fiscal ou comptable et ne remplace pas les professions réglementées."
    },
    en: {
        "nav.home": "Vision", "nav.form": "Launch Analysis", "nav.privacy": "Privacy Policy",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station.",
        "group.general": "01 Scope & Expertise", "group.analysis": "02 Deep Analysis", "group.output": "03 Delivery Channels",
        "engine.status": "SYSTEM READY",
        "field.projectTitle.label": "Decision Title", "field.projectTitle.placeholder": "e.g. Hotel expansion or AI Audit...",
        "domain.ai": "AI Sovereignty", "domain.finance": "ESG Engineering", "domain.ma": "M&A", "domain.legal": "OHADA Tax Optimization", "domain.crisis": "Cyber Crisis Management",
        "industry.energy": "Green Energy", "industry.blue": "Blue Economy", "industry.health": "HealthTech", "industry.agri": "Agribusiness", "industry.logistics": "Global Logistics",
        "form.submit": "GENERATE E-META EXPERTISE", "hero.trust": "🔒 Sovereign Data & Blockchain Certified",
        "footer.object": "Design, development, and operation of AI solutions for strategic decision support.",
        "privacy.body": "PRIVACY POLICY e-META LABS\n\n1. DATA SOVEREIGNTY\nYour strategic and confidential data is never shared with third parties nor used for training public AI models.\n\n2. BLOCKCHAIN CERTIFICATION\nEach diagnostic is timestamped via Bitcoin Blockchain technology (Woleet), ensuring the priority and integrity of your strategic insights.\n\n3. REGULATED FRAMEWORK\ne-META is a decision-support tool. It does not constitute legal, tax, or accounting advice and does not replace regulated professions."
    },
    es: {
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "group.general": "01 Alcance y Especialización", "form.submit": "GENERAR EXPERIENCIA E-META",
        "privacy.body": "POLÍTICA DE PRIVACIDAD: Sus datos son soberanos y están protegidos por tecnología Blockchain."
    },
    ar: {
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "group.general": "01 النطاق والخبرة", "form.submit": "إنشاء خبرة e-META",
        "privacy.body": "سياسة الخصوصية: بياناتك سيادية ومحمية بتقنية البلوكشين."
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

    // Gestion du Modal
    const modal = document.getElementById("privacyModal");
    const btn = document.getElementById("openPrivacy");
    const span = document.getElementsByClassName("close-modal")[0];

    btn.onclick = () => modal.style.display = "block";
    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
});
