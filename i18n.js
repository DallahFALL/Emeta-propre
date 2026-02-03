const resources = {
    fr: {
        "meta.title": "e-META LABS — Moteur IA Stratégique",
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "nav.home": "Vision",
        "nav.form": "Lancer l'Analyse",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil pour entrepreneurs et dirigeants.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "Système Prêt",
        "group.general": "Périmètre du Projet",
        "group.analysis": "Analyse Profonde",
        "group.output": "Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "field.domain.strategy": "Stratégie Business",
        "field.domain.finance": "Ingénierie Financière",
        "field.domain.legal": "Conformité Juridique / OHADA",
        "field.problem.label": "Problématique & Signaux Faibles",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.fileLink.label": "Audit de Document (Lien Cloud)",
        "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan (PDF/Docs)",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "form.submit": "Générer l'Expertise e-META",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne se substitue en aucun cas à un conseil réglementé (avocat, notaire, expert-comptable).",
    },
    en: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "header.tagline": "Strategic intelligence at the service of your decisions.",
        "nav.home": "Vision",
        "nav.form": "Launch Analysis",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station for entrepreneurs and leaders.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "System Ready",
        "group.general": "Project Scope",
        "field.projectTitle.label": "Decision Title",
        "field.projectTitle.placeholder": "e.g. West Africa Market Expansion",
        "form.submit": "Generate e-META Expertise",
        "footer.disclaimer": "Legal Note: e-META is a decision-support solution. It is not a substitute for regulated professional advice.",
    }
    // Ajoutez ES et AR sur ce modèle pour un succès mondial
};

function updateContent(lang) {
    // Traduction des textes normaux
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            el.innerHTML = resources[lang][key];
        }
    });

    // Traduction des placeholders (champs de saisie)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (resources[lang] && resources[lang][key]) {
            el.setAttribute('placeholder', resources[lang][key]);
        }
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
