/* =====================================================
   e-META — i18n.js (FR/EN/ES/AR)
   - data-i18n (text)
   - data-i18n-placeholder (placeholder)
===================================================== */

window.I18N_DICT = {
  fr: {
    meta: { title: "e-META — Assistant IA" },
    header: {
      tagline: "Décision stratégique • Synthèse IA",
      cta: "Requête personnalisée",
      privacy: "Confidentialité"
    },
    hero: {
      title: "Prenez des décisions claires, vite.",
      desc: "e-META transforme votre situation en analyse structurée, options, risques, plan d’action et recommandations."
    },
    form: {
      title: "Formulaire d’analyse",
      submit: "Lancer l’analyse",
      reset: "Réinitialiser"
    },

    /* EXEMPLES (tu complètes champ par champ) */
    fields: {
      domainMain_label: "Domaine / Thème principal",
      domainMain_ph: "Sélectionnez un domaine",
      context_label: "Contexte / Problème à analyser",
      context_ph: "Décrivez la situation, les enjeux, et ce que vous voulez décider…"
    }
  },
i18n.fr = {
  group: {
    general: "1. Informations générales",
    analysis: "2. Analyse de la situation",
    budget: "3. Budget & contraintes",
    output: "4. Mode de restitution",
    trust: "5. Consentement"
  },

  field: {
    domain: {
      label: "Domaine / Thème principal",
      placeholder: "Sélectionnez un domaine",
      strategy: "Stratégie / Gouvernance",
      finance: "Finance / Investissement",
      marketing: "Marketing / Vente",
      operations: "Opérations / Organisation",
      it: "Technologie / IT / Digital",
      legal: "Juridique / Conformité",
      impact: "Impact social / Environnemental",
      other: "Autre domaine"
    },

    decisionType: {
      label: "Type de décision",
      placeholder: "Choisissez le type de décision",
      t1: "Décision stratégique majeure",
      t2: "Choix tactique",
      t3: "Optimisation / amélioration",
      t4: "Résolution de problème",
      t5: "Arbitrage / comparaison",
      t6: "Exploration / scénarios"
    },

    title: {
      label: "Titre de la décision",
      ph: "Ex : Lancer un nouveau service à Rosso",
      hint: "Formulez le sujet de décision de manière claire et concise."
    },

    problem: {
      label: "Problème ou décision à analyser",
      ph: "Expliquez la situation actuelle et ce qui pose question…"
    },

    objectives: {
      label: "Objectifs recherchés",
      ph: "Quels résultats souhaitez-vous atteindre ?"
    },

    constraints: {
      label: "Contraintes / Risques",
      ph: "Contraintes financières, humaines, réglementaires, délais…"
    },

    kpis: {
      label: "Indicateurs de succès (KPI)",
      ph: "Comment mesurerez-vous la réussite ?"
    },

    resources: {
      label: "Ressources disponibles",
      ph: "Équipe, partenaires, compétences, outils…"
    },

    context: {
      label: "Contexte global",
      ph: "Informations complémentaires utiles à l’analyse IA."
    },

    budgetMin: {
      label: "Budget minimum estimé",
      ph: "Montant minimum envisagé"
    },

    budgetMax: {
      label: "Budget maximum estimé",
      ph: "Montant maximum acceptable"
    },

    deadline: {
      label: "Échéance / horizon de décision",
      ph: "Ex : 3 mois, fin 2025, urgent…"
    },

    urgency: {
      label: "Niveau d’urgence",
      low: "Faible",
      medium: "Moyenne",
      high: "Élevée"
    },

    outputMode: {
      label: "Souhaitez-vous recevoir la synthèse via :",
      email: "Email",
      whatsapp: "WhatsApp",
      pdf: "PDF téléchargeable",
      display: "Affichage immédiat à l’écran"
    },

    email: {
      label: "Adresse email",
      ph: "exemple@email.com"
    },

    whatsapp: {
      label: "Numéro WhatsApp",
      ph: "Ex : +221771234567"
    },

    fileLink: {
      label: "Lien vers un document (optionnel)",
      ph: "Lien Google Drive, Dropbox, etc.",
      hint: "Ajoutez un document utile pour enrichir l’analyse."
    },

    consent: {
      label: "J’accepte que mes informations soient utilisées uniquement pour cette analyse."
    }
  },

  form: {
    submit: "Lancer l’analyse",
    reset: "Réinitialiser le formulaire"
  }
};

  en: {
    meta: { title: "e-META — AI Assistant" },
    header: {
      tagline: "Strategic decision • AI summary",
      cta: "Custom request",
      privacy: "Privacy"
    },
    hero: {
      title: "Make clear decisions, fast.",
      desc: "e-META turns your situation into a structured analysis: options, risks, action plan, and recommendations."
    },
    form: {
      title: "Analysis form",
      submit: "Run analysis",
      reset: "Reset"
    },
    fields: {
      domainMain_label: "Main domain / Topic",
      domainMain_ph: "Select a domain",
      context_label: "Context / Problem to analyze",
      context_ph: "Describe the situation, constraints, goals, and what you need to decide…"
    }
  },

  es: {
    meta: { title: "e-META — Asistente IA" },
    header: {
      tagline: "Decisión estratégica • Síntesis IA",
      cta: "Solicitud personalizada",
      privacy: "Privacidad"
    },
    hero: {
      title: "Toma decisiones claras, rápido.",
      desc: "e-META convierte tu situación en un análisis estructurado: opciones, riesgos, plan de acción y recomendaciones."
    },
    form: {
      title: "Formulario de análisis",
      submit: "Iniciar análisis",
      reset: "Restablecer"
    },
    fields: {
      domainMain_label: "Dominio / Tema principal",
      domainMain_ph: "Selecciona un dominio",
      context_label: "Contexto / Problema a analizar",
      context_ph: "Describe la situación, restricciones, objetivos y lo que necesitas decidir…"
    }
  },

  ar: {
    meta: { title: "e-META — مساعد ذكاء اصطناعي" },
    header: {
      tagline: "قرار استراتيجي • ملخص بالذكاء الاصطناعي",
      cta: "طلب مخصص",
      privacy: "الخصوصية"
    },
    hero: {
      title: "اتخذ قرارات واضحة بسرعة.",
      desc: "e-META يحول وضعك إلى تحليل منظم: خيارات، مخاطر، خطة عمل وتوصيات."
    },
    form: {
      title: "نموذج التحليل",
      submit: "بدء التحليل",
      reset: "إعادة ضبط"
    },
    fields: {
      domainMain_label: "المجال / الموضوع الرئيسي",
      domainMain_ph: "اختر مجالاً",
      context_label: "السياق / المشكلة للتحليل",
      context_ph: "اشرح الوضع، القيود، الأهداف، وما القرار المطلوب…"
    }
  }
};
