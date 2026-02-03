const resources = {
    fr: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "nav.home": "Vision", "nav.form": "Lancer l'Analyse", "nav.privacy": "Confidentialité",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "Périmètre & Expertise",
        "group.analysis": "Analyse de Contexte",
        "group.output": "Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "IA & Souveraineté Numérique",
        "domain.legal": "Fintech & Conformité (OHADA)",
        "domain.scaling": "Scaling & Gouvernance",
        "field.industry.label": "Secteur d'Activité",
        "industry.tourism": "Tourisme & Écotourisme",
        "industry.construction": "BTP & Immobilier Durable",
        "industry.tech": "Digital & New Tech",
        "field.geography.label": "Zone d'Impact",
        "field.geography.placeholder": "Sénégal, Zone UEMOA, France...",
        "field.problem.label": "Problématique & Enjeux",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison souhaité",
        "field.outputMode.display": "Affichage Direct",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "form.submit": "Générer l'Expertise e-META",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.disclaimer": "Note légale : e-META est une solution d'aide à la décision. Elle ne constitue pas et ne se substitue en aucun cas à un conseil réglementé."
    },
    en: {
        "meta.title": "e-META LABS — Strategic AI",
        "nav.home": "Vision", "nav.form": "Expertise", "nav.privacy": "Privacy",
        "hero.title": "Strategic Excellence for Every Decision.",
        "hero.subtitle": "Management Consulting decision station.",
        "engine.status": "SYSTEM READY",
        "group.general": "Scope & Expertise",
        "group.analysis": "Context Analysis",
        "group.output": "Delivery Channels",
        "field.projectTitle.label": "Decision Title",
        "field.projectTitle.placeholder": "e.g. West Africa Market Expansion",
        "field.domain.label": "Required Expertise",
        "domain.ai": "AI & Digital Sovereignty",
        "domain.legal": "Fintech Compliance (OHADA)",
        "domain.scaling": "Scaling & Governance",
        "field.industry.label": "Industry Sector",
        "industry.tourism": "Tourism & Ecotourism",
        "industry.construction": "Real Estate & Construction",
        "industry.tech": "Digital & New Tech",
        "field.geography.label": "Impact Zone",
        "field.geography.placeholder": "Senegal, EU, USA...",
        "field.problem.label": "Problem & Challenges",
        "field.problem.placeholder": "Describe the critical challenges...",
        "field.email.label": "Management Email",
        "field.whatsapp.label": "Expert WhatsApp Line",
        "field.outputMode.label": "Preferred Delivery Mode",
        "field.outputMode.display": "Direct Display",
        "hero.trust": "🔒 Data Sovereignty & Blockchain Certified",
        "form.submit": "Generate e-META Expertise",
        "footer.object": "Design, development, and operation of AI solutions for decision support.",
        "footer.disclaimer": "Legal Note: e-META is a decision-support solution. It is not a substitute for regulated professional advice."
    },
    es: {
        "nav.home": "Visión", "nav.form": "Experiencia", "nav.privacy": "Privacidad",
        "hero.title": "Excelencia Estratégica para cada Decisión.",
        "group.general": "Alcance y Especialización",
        "field.projectTitle.label": "Título de la Decisión",
        "field.industry.label": "Sector de Actividad",
        "field.geography.label": "Zona de Impacto",
        "field.problem.label": "Problema y Desafíos",
        "form.submit": "Generar Experiencia e-META",
        "footer.object": "Diseño y operación de soluciones de IA dedicadas al apoyo a la decisión.",
        "footer.disclaimer": "Nota legal: e-META no sustituye al asesoramiento profesional regulado."
    },
    ar: {
        "nav.home": "الرؤية", "nav.form": "الخبرة", "nav.privacy": "الخصوصية",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "group.general": "النطاق والخبرة",
        "field.projectTitle.label": "عنوان القرار",
        "field.industry.label": "قطاع النشاط",
        "field.geography.label": "منطقة التأثير",
        "field.problem.label": "المشكلة والتحديات",
        "form.submit": "إنشاء خبرة e-META",
        "footer.object": "تصميم وتشغيل حلول الذكاء الاصطناعي المخصصة لدعم القرار.",
        "footer.disclaimer": "ملاحظة قانونية: e-META هي أداة لدعم القرار ولا تغني عن الاستشارات المهنية."
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
