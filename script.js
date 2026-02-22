/* * PROJET : e-META LABS
 * FICHIER : script.js (Version Optimisée, Souveraine & Multilingue)
 * MAJ : 2026 - Intégration Dynamique Finale
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- 1. GESTION DE LA NAVIGATION (3 ÉTAPES) ---
window.nextStep = function(targetStep) {
    // 1. Cacher toutes les étapes
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // 2. Afficher l'étape ciblée
    const nextStepElem = document.getElementById('step-' + targetStep);
    if (nextStepElem) {
        nextStepElem.classList.add('active');
        window.scrollTo(0, 0); // Remonter en haut de page pour le confort
    }
};

window.resetForm = function() {
    document.getElementById('diagnosticForm').reset();
    window.nextStep(1);
};

// --- 2. GESTION DES MESSAGES D'ERREUR DU FORMULAIRE ---
// Correspond au "oninvalid=setCustomMessage(this)" de votre HTML
window.setCustomMessage = function(input) {
    if (input.value === '') {
        input.setCustomValidity("Ce champ est obligatoire pour l'analyse.");
    } else {
        input.setCustomValidity(''); // Réinitialise l'erreur si le champ est rempli
    }
};

// --- 3. ENVOI DU FORMULAIRE ET VALIDATION WHATSAPP ---
const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // --- VÉRIFICATION DE SÉCURITÉ WHATSAPP (CONFORMITÉ META) ---
        const whatsappConsent = document.getElementById('whatsapp-consent');
        if (whatsappConsent && !whatsappConsent.checked) {
            alert("Veuillez accepter l'Opt-in WhatsApp pour recevoir vos résultats.");
            return; // Bloque l'envoi si la case n'est pas cochée
        }

        // --- PRÉPARATION DE L'INTERFACE ---
        const btn = form.querySelector('button[type="submit"]');
        const originalBtnText = btn.innerText;
        btn.disabled = true;
        btn.innerText = "Analyse en cours...";

        const currentLang = document.documentElement.lang || 'fr';

        // --- CONSTRUCTION DES DONNÉES POUR MAKE.COM ---
        const formData = {
            action: "diagnostic",
            meta: {
                source: "e-META LABS Web App",
                version: "2.0",
                timestamp: new Date().toISOString(),
                lang: currentLang
            },
            user: {
                company: document.getElementById('company')?.value || "",
                email: document.getElementById('email')?.value || "",
                phone: document.getElementById('phone')?.value || "Non renseigné",
                geoZone: document.getElementById('geo-zone')?.value || ""
            },
            project: {
                sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
                expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
                context: document.getElementById('context')?.value || ""
            }
        };

        // --- APPEL AU WEBHOOK ---
        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                const htmlResponse = await response.text();
                const resultBody = document.getElementById('resultBody');
                
                if (resultBody) {
                    resultBody.innerHTML = htmlResponse;
                    document.getElementById('resultModal').style.display = 'flex';
                    btn.innerText = "Analyse Terminée";
                }
            } else { 
                throw new Error("Erreur de réponse serveur"); 
            }
        } catch (err) {
            console.error("Erreur e-META LABS:", err);
            btn.disabled = false;
            btn.style.backgroundColor = '#ff4d4d'; // Rouge pour signaler l'erreur
            btn.innerText = "Échec - Réessayer";
            
            // Remise à zéro du bouton après 3 secondes
            setTimeout(() => {
                btn.style.backgroundColor = '';
                btn.innerText = originalBtnText;
            }, 3000);
        }
    });
}

// --- 4. GESTION DES MODALES (FENÊTRES POP-UP) ---
// Fermeture du modal de résultat
const closeResultBtn = document.querySelector('.close-result');
if (closeResultBtn) {
    closeResultBtn.addEventListener('click', () => {
        document.getElementById('resultModal').style.display = 'none';
    });
}

// L'ouverture/fermeture du modal de confidentialité doit être gérée
// par votre code existant ou peut être ajoutée ici si nécessaire.
