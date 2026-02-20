/* * PROJET : e-META LABS
 * FICHIER : script.js (Version Optimisée, Souveraine & Multilingue)
 * MAJ : 2026 - Intégration Dynamique Finale
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- 1. GESTION DE LA NAVIGATION ---

window.nextStep = function(targetStep) {
    // Validation stricte Étape 1 vers 2
    if (targetStep === 2) {
        const comp = document.getElementById('company');
        const mail = document.getElementById('email');
        
        if (!comp.value || !mail.value || !mail.checkValidity()) {
            [comp, mail].forEach(el => {
                if(!el.value || (el.type === 'email' && !el.checkValidity())) {
                    el.style.borderColor = '#ff4d4d';
                    el.classList.add('shake'); 
                }
            });
            
            setTimeout(() => {
                [comp, mail].forEach(el => {
                    el.style.borderColor = '';
                    el.classList.remove('shake');
                });
            }, 2000);
            return; 
        }
    }
    
    // Transition d'étape fluide
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
        step.style.display = 'none';
    });
    
    const next = document.getElementById(`step-${targetStep}`);
    if (next) {
        next.style.display = 'block';
        setTimeout(() => next.classList.add('active'), 10);
    }
    
    // Scroll fluide vers le haut du formulaire
    const card = document.querySelector('.glass-card');
    if(card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.resetForm = function() { 
    if(confirm("Réinitialiser le diagnostic ?")) window.location.reload(); 
};

// --- 2. STATISTIQUES EN TEMPS RÉEL ---

async function updateLiveStats() {
    try {
        const response = await fetch(STATS_URL);
        if (response.ok) {
            const data = await response.json();
            const countAnalyse = document.getElementById('count-analyses');
            const countPdf = document.getElementById('count-pdf');
            const lastUpdate = document.getElementById('last-update');

            if(countAnalyse) countAnalyse.innerText = data.totalAnalyses || "0";
            if(countPdf) countPdf.innerText = data.totalPDF || "0";
            if(lastUpdate) {
                const now = new Date();
                lastUpdate.innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            }
        }
    } catch (e) { console.warn("Stats e-META indisponibles"); }
}

// --- 3. INITIALISATION & ÉCOUTEURS ---

document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000);

    // --- GESTION DYNAMIQUE DU BOUTON ANALYSE (ÉTAPE 3) ---
    const contextField = document.getElementById('context');
    const consentBox = document.getElementById('consent');
    const submitBtn = document.querySelector('button[type="submit"]');

    function checkStep3Validity() {
        if (!contextField || !consentBox || !submitBtn) return;
        // Condition : Texte > 5 caractères ET case cochée
        const isReady = contextField.value.trim().length > 5 && consentBox.checked;
        
        submitBtn.disabled = !isReady;
        submitBtn.style.opacity = isReady ? "1" : "0.5";
        submitBtn.style.cursor = isReady ? "pointer" : "not-allowed";
        
        if (isReady) submitBtn.classList.add('glow'); 
        else submitBtn.classList.remove('glow');
    }

    if (contextField && consentBox) {
        contextField.addEventListener('input', checkStep3Validity);
        consentBox.addEventListener('change', checkStep3Validity);
        checkStep3Validity(); // État initial
    }

    // --- DÉLÉGATION D'ÉVÉNEMENTS (CLICS) ---
    document.addEventListener('click', (e) => {
        // Fermeture Modals
        if (e.target.closest('.close-modal, .close-result, .close-modal-btn, .modal-overlay')) {
            if (e.target.classList.contains('modal-overlay') || e.target.closest('.close-modal, .close-result, .close-modal-btn')) {
                document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
            }
        }
        
        // Liens Confidentialité
        if (e.target.closest('#openPrivacyLink, #openPrivacyFooter, #openPrivacyResult')) {
            e.preventDefault();
            const modal = document.getElementById('privacyOverlay');
            if(modal) modal.style.display = 'flex';
        }
        
        // Impression / PDF
        if (e.target.closest('.btn-download')) {
            window.print();
            fetch(WEBHOOK_URL, { 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ action: "PDF_DOWNLOAD", timestamp: new Date() }) 
            }).catch(()=>{});
        }
        
        // Relancer
        if (e.target.closest('.btn-new')) window.resetForm();
    });

    // --- 4. ENVOI DU DIAGNOSTIC ---
    const form = document.getElementById('diagnosticForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Sécurité Honeypot
            if (document.getElementById('honeypot')?.value !== "") return;

            const btn = form.querySelector('button[type="submit"]');
            const overlay = document.getElementById('loadingOverlay');
            const currentLang = document.documentElement.lang || 'fr';
            
            overlay.style.display = 'flex';
            btn.disabled = true;

            const formData = {
                action: "diagnostic",
                meta: {
                    source: "e-META LABS Web App",
                    version: "2.0",
                    timestamp: new Date().toISOString(),
                    lang: currentLang
                },
                user: {
                    company: document.getElementById('company').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value || "Non renseigné",
                    geoZone: document.getElementById('geo-zone').value
                },
                project: {
                    sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
                    expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
                    context: document.getElementById('context').value
                }
            };

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
                        overlay.style.display = 'none';
                        document.getElementById('resultModal').style.display = 'flex';
                        btn.innerText = (currentLang === 'fr') ? "Analyse Terminée" : "Analysis Complete";
                    }
                } else { throw new Error("Erreur de réponse serveur"); }
            } catch (err) {
                console.error("Erreur e-META LABS:", err);
                overlay.style.display = 'none';
                btn.disabled = false;
                btn.style.backgroundColor = '#ff4d4d';
                btn.innerText = (currentLang === 'fr') ? "Échec - Réessayer" : "Failed - Try Again";
                setTimeout(() => {
                    btn.style.backgroundColor = '';
                    btn.innerText = (currentLang === 'fr') ? "Lancer le diagnostic" : "Start Diagnostic";
                    checkStep3Validity();
                }, 3000);
            }
        });
    }
});
