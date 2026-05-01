# ARCHITECTURE TECHNIQUE e-meta.app

## Composants de la Stack
- **Interface Web Sécurisée :** Formulaire HTML/JS sur-mesure et autonome.
- **Make.com :** Hub d'orchestration, de logique métier et système d'alerte (Concierge).
- **OpenAI / Anthropic :** Moteurs d'intelligence artificielle et d'analyse sémantique.
- **Google Workspace (Docs/Drive) :** Moteur de génération dynamique des audits au format PDF.
- **Meta WhatsApp Business API :** Canal de restitution instantané et de mise en relation (Matching Exécutif).

## Sécurité des Données
- Transit des données via Webhooks sécurisés de bout en bout (SSL/TLS).
- Architecture "Zero-Data Retention" au niveau des modèles d'IA (les données ne nourrissent pas les algorithmes publics).
- Conformité stricte avec les législations de protection des données (RGPD / CDP Sénégal).
