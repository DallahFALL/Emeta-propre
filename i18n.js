const resources = {
    fr: {
        "header.tagline": "L'intelligence stratégique au service de vos décisions.",
        "nav.home": "Accueil",
        "nav.form": "Expertise",
        "nav.privacy": "Confidentialité",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "e-META analyse votre contexte, vos KPIs et vos ressources pour générer une feuille de route claire.",
        "hero.cta": "Commencer une analyse stratégique",
        "form.title": "Diagnostic Stratégique Master",
        "form.intro": "Plus vos réponses sont précises, plus l'expertise e-META sera actionnable.",
        "group.general": "1. Informations générales",
        "group.analysis": "2. Analyse stratégique",
        "group.output": "3. Mode de restitution",
        "field.projectTitle.label": "Titre du projet ou de la décision",
        "field.domain.label": "Domaine principal",
        "field.domain.strategy": "Stratégie & Gouvernance",
        "field.domain.finance": "Finance & Modèle économique",
        "field.domain.legal": "Juridique & Conformité",
        "field.domain.it": "Systèmes d’information & IA",
        "field.geography.label": "Zone Géographique",
        "field.problem.label": "Problématique centrale",
        "field.objectives.label": "Objectifs visés",
        "field.constraints.label": "Contraintes & Risques",
        "field.fileLink.label": "Lien vers document complémentaire (Optionnel)",
        "field.email.label": "Email professionnel",
        "field.whatsapp.label": "Numéro WhatsApp",
        "form.submit": "Envoyer ma requête",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne se substitue en aucun cas à un conseil réglementé (avocat, notaire, expert-comptable).",
        "footer.rights": "Tous droits réservés."
    },
    en: {
        "header.tagline": "Strategic intelligence at the service of your decisions.",
        "nav.home": "Home",
        "nav.form": "Expertise",
        "nav.privacy": "Privacy",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "e-META analyzes your context, KPIs, and resources to generate a clear roadmap.",
        "hero.cta": "Start strategic analysis",
        "form.title": "Master Strategic Diagnostic",
        "field.projectTitle.label": "Project or Decision Title",
        "field.domain.label": "Main Domain",
        "field.geography.label": "Geographic Area",
        "footer.object": "Design, development, and operation of AI solutions for decision support.",
        "footer.disclaimer": "Legal Note: e-META is a decision support tool. It is not a substitute for regulated professional advice.",
        "footer.rights": "All rights reserved."
    },
    // Modèles ES et AR à compléter similairement
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            el.innerHTML = resources[lang][key];
        }
    });
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('languageSwitcher');
    if (switcher) {
        updateContent(switcher.value);
        switcher.addEventListener('change', (e) => updateContent(e.target.value));
    }
});
