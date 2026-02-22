/* * PROJET : e-META LABS
 * FICHIER : script.js (Version Complète, Sécurisée & Modales Réparés)
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- 1. FONCTIONS DE NAVIGATION ---
window.nextStep = function(targetStep) {
    // Validation de sécurité pour passer de l'étape 1 à 2
    if (targetStep === 2) {
        const comp = document.getElementById('company').value;
        const mail = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        if (!comp || !mail || !phone) {
            alert("Veuillez remplir les champs obligatoires (Société, Email, WhatsApp) pour continuer.");
            return; // Bloque le passage à l'étape 2 si vide
        }
    }
    
    // Changement d'étape
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Remonter en haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.resetForm = function() { 
    window.location.reload(); 
};

window.setCustomMessage = function(input) {
    if (input.value === '') {
        input.setCustomValidity("Ce champ est obligatoire.");
    } else {
        input.setCustomValidity('');
    }
};

// --- 2. GESTION DU LIVE STATS ---
async function updateLiveStats() {
    try {
        const response = await fetch(STATS_URL);
        if (response.ok) {
            const data = await response.json();
            if(document.getElementById('count-analyses')) document.getElementById('count-analyses').innerText = data.totalAnalyses || "--";
            if(document.getElementById('count-pdf')) document.getElementById('count-pdf').innerText = data.totalPDF || "--";
            
            const now = new Date();
            if(document.getElementById('last-update')) document.getElementById('last-update').innerText = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        }
    } catch (e) { /* Erreur silencieuse pour ne pas perturber le site */ }
}

// --- 3. GESTION DES MODALES ET ÉVÉNEMENTS GLOBAUX ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000); // Mise à jour toutes les minutes
    
    // Écouteur global pour les clics
    document.addEventListener('click', (e) => {
        // OUVRIR : Politique de confidentialité (Lien dans le formulaire)
        if (e.target.closest('#openPrivacy')) {
            e.preventDefault();
            document.getElementById('privacyOverlay').style.display = 'flex';
        }
        
        // FERMER : Tous les boutons "Croix" ou "Fermer"
        if (e.target.closest('.close-modal') || e.target.closest('.close-result') || e.target.closest('.close-modal-btn')) {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        }
    });

    // --- 4. SOUMISSION DU FORMULAIRE ET WEBHOOK ---
    const form = document.getElementById('diagnosticForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // CONFORMITÉ META : Vérification de la case WhatsApp
            const whatsappConsent = document.getElementById('whatsapp-consent');
            if (whatsappConsent && !whatsappConsent.checked) {
                alert("Veuillez accepter l'Opt-in WhatsApp pour recevoir vos résultats stratégiques.");
                return; // Stop total si non coché
            }

            // Sécurité invisible anti-bot
            const honeypot = document.getElementById('honeypot');
            if (honeypot && honeypot.value !== "") return;

            // Préparation de l'envoi
            const btn = document.getElementById('submitBtn');
            const overlay = document.getElementById('loadingOverlay');
            const lang = document.documentElement.lang || 'fr';
            
            if (overlay) overlay.style.display = 'flex'; // Affiche l'écran de chargement "spin"
            btn.disabled = true;
            btn.innerText = "Analyse en cours...";

            // Collecte des données
            const data = {
                action: "diagnostic",
                meta: {
                    source: "e-META LABS Web App",
                    timestamp: new Date().toISOString(),
                    lang: lang
                },
                user: {
                    company: document.getElementById('company').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    geoZone: document.getElementById('geo-zone').value
                },
                project: {
                    sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
                    expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
                    context: document.getElementById('context').value
                }
            };

            // Envoi à Make.com
            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    const text = await response.text();
                    document.getElementById('resultBody').innerHTML = text;
                    if (overlay) overlay.style.display = 'none';
                    document.getElementById('resultModal').style.display = 'flex';
                    btn.innerText = "Analyse Terminée";
                } else { 
                    throw new Error("Serveur injoignable"); 
                }
            } catch (err) {
                console.error("Erreur d'envoi", err);
                if (overlay) overlay.style.display = 'none';
                btn.disabled = false;
                btn.style.backgroundColor = '#ff4d4d'; // Bouton rouge en cas d'erreur
                btn.innerText = "Échec réseau - Réessayer";
                setTimeout(() => {
                    btn.style.backgroundColor = '';
                    btn.innerText = "Lancer l'Analyse IA";
                }, 4000);
            }
        });
    }
});
