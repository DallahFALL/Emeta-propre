/* * PROJET : e-META LABS — Moteur IA Stratégique
 * FICHIER : script.js (Version PROD - Sécurisée & Optimisée)
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/2aq4sxsbs6pj7cqmx7i2tvjvhwwdrvf2"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- GESTION NAVIGATION (UX Fluide) ---
function nextStep(targetStep) {
    // Validation intermédiaire (Étape 1 -> 2)
    if (targetStep === 2) {
        const comp = document.getElementById('company').value;
        const mail = document.getElementById('email').value;
        
        // Validation discrète : Bordure rouge temporaire
        if (!comp || !mail) {
            if(!comp) document.getElementById('company').style.borderColor = '#ff4d4d';
            if(!mail) document.getElementById('email').style.borderColor = '#ff4d4d';
            
            setTimeout(() => {
                document.getElementById('company').style.borderColor = '';
                document.getElementById('email').style.borderColor = '';
            }, 2000);
            return; // Bloque la navigation
        }
    }
    
    // Transition des étapes
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Scroll automatique vers le haut de la carte
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- RESET COMPLET (Nettoyage Session) ---
function resetForm() { 
    window.location.reload(); 
}

// --- LIVE STATS (Preuve Sociale) ---
async function updateLiveStats() {
    try {
        const response = await fetch(STATS_URL);
        if (response.ok) {
            const data = await response.json();
            // Mise à jour du DOM uniquement si les données existent
            if(data.totalAnalyses) document.getElementById('count-analyses').innerText = data.totalAnalyses;
            if(data.totalPDF) document.getElementById('count-pdf').innerText = data.totalPDF;
            
            // Horodatage local
            const now = new Date();
            document.getElementById('last-update').innerText = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        }
    } catch (e) { 
        // Échec silencieux : Le widget garde ses valeurs par défaut "--"
    }
}

// --- INITIALISATION & ÉVÉNEMENTS ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000); // Rafraîchissement discret toutes les minutes
    
    // GESTION CENTRALISÉE DES CLICS (Performance & Délégation)
    document.addEventListener('click', (e) => {
        // 1. Fermeture des Modals (Croix ou Bouton)
        if (e.target.closest('.close-modal') || e.target.closest('.close-result') || e.target.closest('.close-modal-btn')) {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        }
        
        // 2. Ouverture Politique de Confidentialité (Depuis Formulaire ou Footer)
        if (e.target.closest('#openPrivacyLink') || e.target.closest('#openPrivacyFooter') || e.target.closest('#openPrivacyResult')) {
            e.preventDefault();
            const modal = document.getElementById('privacyOverlay');
            if(modal) modal.style.display = 'flex';
        }
        
        // 3. Action : Télécharger PDF
        if (e.target.closest('.btn-download')) {
            window.print(); // Déclenche l'impression native
            // Signalement asynchrone à Make (Fire & Forget)
            fetch(WEBHOOK_URL, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: "PDF_DOWNLOAD", timestamp: new Date().toISOString() }) 
            }).catch(()=>{});
        }
        
        // 4. Action : Nouvelle Analyse
        if (e.target.closest('.btn-new')) {
            resetForm();
        }
    });
});

// --- SOUMISSION & CONNEXION "CŒUR RÉACTEUR" ---
const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Empêche le rechargement standard

        // SÉCURITÉ HONEYPOT (Anti-Bot Silencieux)
        // Si le champ caché est rempli, on arrête tout immédiatement.
        if (document.getElementById('honeypot').value !== "") return;

        // UI : Verrouillage immédiat
        const btn = document.querySelector('button[type="submit"]');
        const overlay = document.getElementById('loadingOverlay');
        const lang = document.documentElement.lang || 'fr';
        
        overlay.style.display = 'flex'; // Affiche le Loader "Intelligence en cours..."
        btn.disabled = true; // Empêche le double-clic

        // CONSTRUCTION DU PAYLOAD (Données structurées)
        const data = {
            action: "diagnostic",
            timestamp: new Date().toISOString(),
            // Données de souveraineté technique
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            lang: lang,
            // Données utilisateur
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            // Récupération des codes techniques (values) et non des labels traduits
            sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
            geoZone: document.getElementById('geo-zone').value,
            expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked'))
                             .map(cb => cb.value).join(', '), // Liste CSV propre
            context: document.getElementById('context').value
        };

        try {
            // ENVOI SÉCURISÉ VERS MAKE
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                // Réception directe du flux HTML généré par l'IA
                const text = await response.text();
                
                // Injection et Affichage
                document.getElementById('resultBody').innerHTML = text;
                overlay.style.display = 'none';
                document.getElementById('resultModal').style.display = 'flex';
                
                // Feedback Bouton
                btn.innerText = (lang === 'fr' || lang === 'ar') ? "Terminé" : "Done";
            } else { 
                throw new Error("Server Response Error"); 
            }
        } catch (err) {
            // GESTION D'ERREUR DISCRÈTE (UX Pro)
            overlay.style.display = 'none';
            btn.disabled = false;
            
            // Le bouton devient rouge brièvement pour signaler l'erreur sans pop-up agressif
            const originalColor = btn.style.backgroundColor;
            btn.style.backgroundColor = '#ff4d4d'; // Rouge erreur
            btn.innerText = (lang === 'fr') ? "Erreur Connexion" : "Connection Error";
            
            setTimeout(() => { 
                btn.style.backgroundColor = originalColor; 
                btn.innerText = document.querySelector('button[type="submit"]').getAttribute('data-i18n') || "Lancer l'Analyse IA";
            }, 3000);
        }
    });
}
