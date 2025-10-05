# e-META — Emeta-propre

**Assistant IA pluridisciplinaire pour structurer les décisions** — packs de formulaires spécialisés, synthèses structurées et recommandations actionnables.  
Ce dépôt `Emeta-propre` contient une version propre et minimale (frontend + serveur) conçue pour un déploiement professionnel.

---

## Objectif
Fournir une base propre, responsive et modulable pour :
- Présenter des packs (Marketing, Finance, Recrutement, Produit),
- Collecter des données via formulaires,
- Appeler un serveur qui prépare des prompts et appelle une API LLM (OpenAI),
- Envoyer des notifications par email / WhatsApp (exemples prêts à configurer).

> Important : **ne jamais committer de clés privées** (OPENAI, SMTP, Twilio). Utiliser `.env` local et les secrets du provider (Netlify/Render/Heroku).

---

## Fonctionnalités incluses
- Frontend responsive (index, packs, forms).
- Sélecteur de langue (FR/EN/ES/AR) + i18n JSON.
- Forms qui envoient `{ pack, lang, payload }` au serveur.
- Serveur Express minimal : validation JSON Schema (AJV), endpoints d'exemple `/api/generate`, `/api/send-email`, `/api/send-whatsapp`.
- Exemples de prompts (FR/EN/ES/AR) et JSON Schemas par pack.
- Scripts d'aide (deploy-clean.sh) pour organisation des branches (OPTIONNEL, destructif).

---

## Arborescence recommandée
