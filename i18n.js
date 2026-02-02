const resources = {
    fr: {
        "hero.title": "L’Excellence Stratégique à la portée de chaque Décision.",
        "hero.subtitle": "Transformez vos problématiques en plans d'action structurés grâce à une orchestration d'IA de niveau Cabinet Conseil.",
        "hero.cta": "Commencer l'analyse stratégique",
        "hero.trust": "🔒 Souveraineté des données & Horodatage Blockchain",
        "hero.badge.title": "Expertise Premium",
        "hero.badge.text": "Méthodologie décisionnelle rigoureuse pour entrepreneurs et dirigeants exigeants.",
        "hero.note": "Une approche structurée inspirée des standards Big Four.",
        "step1.title": "Diagnostic", "step1.text": "Capture précise de votre contexte via nos formulaires intelligents.",
        "step2.title": "Orchestration", "step2.text": "Analyse croisée par nos agents experts (Juridique, Fiscal, Stratégie).",
        "step3.title": "Livrable", "step3.text": "Réception de votre rapport d'expertise haute fidélité instantanément."
    },
    en: {
        "hero.title": "Strategic Excellence for Every Critical Decision.",
        "hero.subtitle": "Transform complex challenges into structured action plans with Management Consulting grade AI orchestration.",
        "hero.cta": "Start Strategic Analysis",
        "hero.trust": "🔒 Data Sovereignty & Blockchain Timestamping",
        "hero.badge.title": "Premium Expertise",
        "hero.badge.text": "Rigorous decision-making framework for ambitious entrepreneurs and leaders.",
        "hero.note": "A structured approach inspired by Big Four standards.",
        "step1.title": "Diagnostic", "step1.text": "Precise context capture through our smart forms.",
        "step2.title": "Orchestration", "step2.text": "Cross-analysis by our expert agents (Legal, Tax, Strategy).",
        "step3.title": "Deliverable", "step3.text": "Instant delivery of your high-fidelity expertise report."
    },
    es: {
        "hero.title": "Excelencia Estratégica para cada Decisión Crítica.",
        "hero.subtitle": "Transforme desafíos complejos en planes de acción estructurados con orquestación de IA de nivel consultoría.",
        "hero.cta": "Iniciar Análisis Estratégico",
        "hero.trust": "🔒 Soberanía de Datos y Blockchain",
        "hero.badge.title": "Experiencia Premium",
        "hero.badge.text": "Marco de toma de decisiones riguroso para emprendedores y líderes ambiciosos.",
        "hero.note": "Un enfoque estructurado inspirado en los estándares Big Four.",
        "step1.title": "Diagnóstico", "step1.text": "Captura de contexto precisa mediante formularios inteligentes.",
        "step2.title": "Orquestación", "step2.text": "Análisis cruzado por nuestros agentes expertos.",
        "step3.title": "Resultado", "step3.text": "Entrega instantánea de su informe de expertos de alta fidelidad."
    },
    ar: {
        "hero.title": "التميز الاستراتيجي في متناول كل قرار.",
        "hero.subtitle": "حول تحدياتك المعقدة إلى خطط عمل منظمة من خلال تنسيق ذكاء اصطناعي بمستوى استشاري.",
        "hero.cta": "ابدأ التحليل الاستراتيجي",
        "hero.trust": "🔒 سيادة البيانات والتوثيق عبر البلوكشين",
        "hero.badge.title": "خبرة متميزة",
        "hero.badge.text": "منهجية صارمة لاتخاذ القرار لرواد الأعمال والقادة الطموحين.",
        "hero.note": "نهج منظم مستوحى من معايير الشركات الاستشارية الكبرى.",
        "step1.title": "التشخيص", "step1.text": "التقاط دقيق لسياقك من خلال نماذجنا الذكية.",
        "step2.title": "التنسيق", "step2.text": "تحليل متقاطع بواسطة خبرائنا في القانون والمالية والاستراتيجية.",
        "step3.title": "النتائج", "step3.text": "تسليم فوري لتقرير الخبرة عالي الدقة."
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            // Si c'est un bouton ou un lien, on change le texte interne
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                el.value = resources[lang][key];
            } else {
                el.innerHTML = resources[lang][key];
            }
        }
    });

    // Mise à jour de la direction de lecture (RTL pour l'arabe)
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('uiLangSelect');
    
    if (selector) {
        // Appliquer la langue sélectionnée par défaut au départ
        updateContent(selector.value);

        // Écouter les changements du menu déroulant
        selector.addEventListener('change', (e) => {
            updateContent(e.target.value);
        });
    }
});
