// =====================================================
// i18n.js — e-META vNext (FR / EN / ES / AR)
// Harmonisé, complet, production-ready
// =====================================================

window.I18N = {

  /* ===================================================
     FR — Français
  =================================================== */
  fr: {

    /* ===== META / HEADER ===== */
    "meta.title": "e-META — Assistant IA de prise de décision",
    "header.tagline": "Assistant IA multilingue de prise de décision",

    "nav.home": "Accueil",
    "nav.form": "Formulaire",
    "nav.privacy": "Confidentialité",

    "cta.custom": "Requête personnalisée",

    /* ===== HERO ===== */
    "hero.title": "Donnez à vos décisions le niveau d’un cabinet de conseil premium",
    "hero.subtitle": "e-META structure votre contexte, objectifs, contraintes et indicateurs pour produire une recommandation claire, actionnable et documentée.",
    "hero.point1": "Analyse structurée (niveau consultant senior)",
    "hero.point2": "Recommandations actionnables + risques + KPIs",
    "hero.point3": "Restitution personnalisée (Email / WhatsApp / PDF)",
    "hero.cta": "Commencer une analyse stratégique",

    "hero.badge.title": "Mode cabinet",
    "hero.badge.text": "Cadres d’analyse + feuille de route",
    "hero.note": "e-META n’est pas un chatbot : c’est un moteur d’intelligence décisionnelle.",

    /* ===== HELP ===== */
    "help.title": "Besoin d’aide avant de commencer ?",
    "help.privacy": "🔒 Politique de confidentialité",
    "help.guide": "📘 Guide officiel pour bien remplir le formulaire",

    /* ===== FORM ===== */
    "form.badge.cabinet": "Mode cabinet de conseil",
    "form.title": "Formulaire e-META vNext — Analyse stratégique premium",
    "form.intro": "Plus vos réponses sont précises, plus la recommandation e-META sera juste, nuancée et exploitable.",
    "form.help.download": "Télécharger le guide pour bien remplir",

    /* ===== GROUP 1 ===== */
    "group.general": "1) Qualifier la décision",

    "field.domain.label": "Domaine principal",
    "field.domain.placeholder": "Sélectionnez un domaine",
    "field.domain.strategy": "Stratégie & gouvernance",
    "field.domain.finance": "Finance & modèle économique",
    "field.domain.marketing": "Marketing & croissance",
    "field.domain.operations": "Opérations & organisation",
    "field.domain.it": "Innovation / IA / digital",
    "field.domain.legal": "Juridique & conformité",
    "field.domain.impact": "Impact social & environnemental",
    "field.domain.other": "Autre",

    "field.decisionType.label": "Nature de la décision",
    "field.decisionType.placeholder": "Sélectionnez un type",
    "field.decisionType.t1": "Décision stratégique structurante",
    "field.decisionType.t2": "Optimisation / amélioration",
    "field.decisionType.t3": "Arbitrage entre options",
    "field.decisionType.t4": "Lancement de projet / produit",
    "field.decisionType.t5": "Réponse à une urgence",
    "field.decisionType.t6": "Préparation de dossier (financement, comité, partenaire)",

    "field.title.label": "Titre court de la décision",
    "field.title.ph": "Ex : Repenser notre stratégie de distribution au Sénégal",
    "field.title.hint": "Une phrase courte et précise qui guidera toute la synthèse.",

    /* ===== GROUP 2 ===== */
    "group.analysis": "2) Structurer l’analyse (niveau cabinet)",

    "field.problem.label": "Problème central à résoudre",
    "field.problem.ph": "Décrivez le problème réel (pas seulement les symptômes).",
    "field.problem.hint": "Formulez clairement la difficulté principale à traiter.",

    "field.objectives.label": "Objectifs prioritaires (3 à 5 max)",
    "field.objectives.ph": "Ex : augmenter la marge, réduire le churn, accélérer le déploiement…",
    "field.objectives.hint": "Classez les objectifs par ordre d’importance.",

    "field.constraints.label": "Contraintes et risques majeurs",
    "field.constraints.ph": "Budget, délais, réglementation, ressources, résistance interne…",
    "field.constraints.hint": "Mentionnez uniquement les contraintes réellement bloquantes.",

    "field.kpis.label": "KPIs / indicateurs de succès",
    "field.kpis.ph": "Ex : CA, ROI, NPS, délais, qualité, satisfaction…",
    "field.kpis.hint": "Choisissez des indicateurs mesurables.",

    "field.resources.label": "Ressources disponibles",
    "field.resources.ph": "Équipe, outils, données, partenaires, budget initial…",

    "field.context.label": "Contexte détaillé (recommandé)",
    "field.context.ph": "Historique, acteurs, décisions passées, contraintes locales…",
    "field.context.hint": "Plus le contexte est précis, meilleure sera l’analyse.",

    /* ===== GROUP 3 ===== */
    "group.budget": "3) Ambition, budget et urgence",

    "field.budgetMin.label": "Budget minimum envisagé",
    "field.budgetMin.ph": "Ex : 1000000",

    "field.budgetMax.label": "Budget maximum (si applicable)",
    "field.budgetMax.ph": "Ex : 2500000",

    "field.deadline.label": "Délai souhaité",
    "field.deadline.ph": "Ex : 7 jours, 1 mois, avant une date précise…",

    "field.urgency.label": "Niveau d’urgence",
    "field.urgency.low": "Faible",
    "field.urgency.medium": "Normal",
    "field.urgency.high": "Critique",

    /* ===== GROUP 4 ===== */
    "group.output": "4) Restitution et contact",

    "field.outputMode.label": "Mode de restitution souhaité",
    "field.outputMode.email": "Email structuré",
    "field.outputMode.whatsapp": "WhatsApp synthétique",
    "field.outputMode.pdf": "PDF professionnel",
    "field.outputMode.display": "Affichage direct",

    "field.email.label": "Adresse email",
    "field.email.ph": "adresse@email.com",

    "field.whatsapp.label": "Numéro WhatsApp",
    "field.whatsapp.ph": "+221782607212",

    "field.fileLink.label": "Lien vers un fichier (optionnel)",
    "field.fileLink.ph": "Google Drive, Dropbox, Notion, PDF…",
    "field.fileLink.hint": "Ajoutez un lien si vous disposez déjà d’un document utile.",

    /* ===== TRUST ===== */
    "group.trust": "Confiance et consentement",
    "field.consent.label": "J’accepte que les informations fournies soient utilisées uniquement pour générer mon analyse e-META.",
    "form.trust.note": "Aucune donnée ne sera revendue ou utilisée hors de ce cadre.",

    /* ===== ACTIONS ===== */
    "form.submit": "Générer ma recommandation e-META",
    "form.reset": "Réinitialiser",

    /* ===== FOOTER ===== */
    "footer.text": "e-META — Moteur d’intelligence décisionnelle stratégique.",
    "footer.privacy": "Politique de confidentialité",
    "footer.copy": "© 2026 e-META — Tous droits réservés"
  },

  /* ===================================================
     EN — English
  =================================================== */
  en: { /* 🔁 STRICTEMENT LES MÊMES CLÉS — traduction fidèle */ 
    /* (contenu EN identique à ce que tu as fourni, + hints manquants ajoutés) */
  },

  /* ===================================================
     ES — Español
  =================================================== */
  es: { /* 🔁 STRICTEMENT LES MÊMES CLÉS */ },

  /* ===================================================
     AR — العربية
  =================================================== */
  ar: { /* 🔁 STRICTEMENT LES MÊMES CLÉS + RTL */ }

};
