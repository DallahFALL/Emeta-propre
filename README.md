# e-META — Emeta-propre

Site officiel (propre) pour e-meta.app — frontend minimal responsive et serveur express (exemples).
But: publier facilement sur GitHub Pages / Netlify et déployer une version propre.

Structure:
- frontend/       -> fichiers publics (index.html, style.css, script.js, forms/, assets/)
- server/         -> exemple d'API Node/Express (server.js)
- docs/           -> (option pour GitHub Pages)

Voir instructions de déploiement ci-dessous.

## Déploiement (rapide)
1. Copier `frontend/` dans `docs/` (ou configurer GitHub Pages pour "main branch / root").  
2. Paramétrer GitHub Pages (Settings > Pages) : Branch = `main`, Folder = `/docs`.  
3. Attendre ~1 min puis visiter `https://<username>.github.io/<repo>/`.

