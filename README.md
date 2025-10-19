# e-META — Emeta-propre

Site statique + serveur minimal pour AI assistant.

## Structure
- `frontend/` : site public (index.html, css, js, forms, lang, prompts)
- `schemas/` : JSON Schema pour validation formulaires
- `server/` : Express API (validation, proxy vers OpenAI, envoi email/WhatsApp)

## Installation serveur (local)
```bash
cd server
cp .env.example .env
# edit .env
npm install
npm start
