const resources = {
    fr: {
        "meta.title": "e-META LABS — Strategic AI Engine",
        "nav.home": "Vision", "nav.form": "Lancer l'Analyse",
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Station de pilotage décisionnelle de niveau Cabinet Conseil.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTÈME PRÊT",
        "group.general": "01 Périmètre & Expertise",
        "group.analysis": "02 Analyse de Contexte",
        "group.output": "03 Canaux de Restitution",
        "field.projectTitle.label": "Titre de la Décision",
        "field.projectTitle.placeholder": "Ex: Expansion marché Afrique de l'Ouest",
        "field.domain.label": "Expertise Requise",
        "domain.ai": "Souveraineté Numérique & IA",
        "domain.finance": "Finance Durable, ESG & Impact",
        "domain.legal": "Conformité Fintech & OHADA",
        "domain.scaling": "Scaling & Croissance Externe",
        "domain.crisis": "Gestion de Crise & Risques",
        "field.industry.label": "Secteur d'Activité",
        "industry.agri": "Agribusiness & Sécurité Alimentaire",
        "industry.energy": "Énergies & Transition Verte",
        "industry.tech": "Digital, IA & DeepTech",
        "industry.tourism": "Tourisme de Luxe & Écotourisme",
        "industry.health": "Santé, Pharma & Biotech",
        "industry.logistics": "Logistique & Supply Chain",
        "field.geography.label": "Zone d'Impact",
        "field.geography.placeholder": "Sénégal, Zone UEMOA, France...",
        "field.problem.label": "Problématique & Enjeux",
        "field.problem.placeholder": "Décrivez les enjeux critiques de votre situation...",
        "field.fileLink.label": "Audit de Document (Lien Cloud)",
        "field.fileLink.placeholder": "Lien vers Business Plan, Contrat ou Bilan",
        "field.email.label": "Email de Direction",
        "field.whatsapp.label": "Ligne WhatsApp Expert",
        "field.outputMode.label": "Mode de livraison souhaité",
        "field.outputMode.display": "Affichage Direct",
        "hero.trust": "🔒 Souveraineté des données & Certification Blockchain",
        "form.submit": "Générer l'Expertise e-META",
        "footer.object": "Conception, développement et exploitation de solutions d'IA dédiées à l'aide à la décision.",
        "footer.privacy_text": "En utilisant e-META, vous acceptez notre politique de souveraineté des données : aucune donnée stratégique n'est partagée avec des tiers."
    },
    en: {
        "nav.home": "Vision", "nav.form": "Launch Analysis",
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Management Consulting-grade decision station.",
        "form.title": "Expertise Decision Engine",
        "engine.status": "SYSTEM READY",
        "group.general": "01 Scope & Expertise",
        "field.projectTitle.label": "Decision Title",
        "field.projectTitle.placeholder": "e.g. West Africa Market Expansion",
        "domain.ai": "Digital Sovereignty & AI",
        "domain.finance": "Sustainable Finance & ESG",
        "domain.legal": "Fintech Compliance (OHADA)",
        "domain.scaling": "Scaling & M&A",
        "domain.crisis": "Crisis & Risk Management",
        "field.industry.label": "Industry Sector",
        "industry.agri": "Agribusiness & Food Security",
        "industry.energy": "Green Energy & Transition",
        "industry.tech": "Digital, AI & DeepTech",
        "industry.tourism": "Luxury & Ecotourism",
        "field.geography.label": "Impact Zone",
        "field.problem.label": "Problem & Challenges",
        "form.submit": "Generate e-META Expertise",
        "footer.object": "Design and operation of AI solutions for strategic decision support.",
        "footer.privacy_text": "By using e-META, you agree to our data sovereignty policy: no strategic data is shared with third parties."
    },
    es: {
        "nav.home": "Visión", "nav.form": "Iniciar Análisis",
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "group.general": "01 Alcance y Especialización",
        "domain.ai": "Soberanía Digital e IA",
        "industry.agri": "Agroindustria y Seguridad",
        "form.submit": "Generar Experiencia e-META",
        "footer.privacy_text": "Al utilizar e-META, acepta nuestra política de soberanía de datos."
    },
    ar: {
        "nav.home": "الرؤية", "nav.form": "بدء التحليل",
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "group.general": "01 النطاق والخبرة",
        "domain.ai": "الذكاء الاصطناعي والسيادة الرقمية",
        "industry.agri": "الأعمال الزراعية والأمن الغذائي",
        "form.submit": "إنشاء خبرة e-META",
        "footer.privacy_text": "باستخدام e-META، فإنك توافق على سياسة سيادة البيانات الخاصة بنا."
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
