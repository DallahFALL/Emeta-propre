/* * PROJET : e-META LABS
 * FICHIER : script.js (Version DÉBLOQUÉE & EXPLICITE)
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- 1. FONCTIONS DE NAVIGATION (Attachées à la fenêtre globale) ---

window.nextStep = function(targetStep) {
    // Validation Étape 1 vers 2
    if (targetStep === 2) {
        const comp = document.getElementById('company').value;
        const mail = document.getElementById('email').value;
        
        if (!comp || !mail) {
            // Effet visuel d'erreur
            if(!comp) document.getElementById('company').style.borderColor = '#ff4d4d';
            if(!mail) document.getElementById('email').style.borderColor = '#ff4d4d';
            setTimeout(() => {
                document.getElementById('company').style.borderColor = '';
                document.getElementById('email').style.borderColor = '';
            }, 2000);
            return; // Stop
        }
    }
    
    // Changement d'étape
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    
    // Scroll haut
    const card = document.querySelector('.glass-card');
    if(card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.resetForm = function() { 
    window.location.reload(); 
};

// --- 2. LIVE STATS ---
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
    } catch (e) { /* Silence */ }
}

// --- 3. INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Lancement Stats
    updateLiveStats();
    setInterval(updateLiveStats, 60000);
    
    // Écouteur global pour les clics (Modals & Actions)
    document.addEventListener('click', (e) => {
        // Fermer Modals
        if (e.target.closest('.close-modal') || e.target.closest('.close-result') || e.target.closest('.close-modal-btn')) {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        }
        
        // Ouvrir Privacy
        if (e.target.closest('#openPrivacyLink') || e.target.closest('#openPrivacyFooter') || e.target.closest('#openPrivacyResult')) {
            e.preventDefault();
            const modal = document.getElementById('privacyOverlay');
            if(modal) modal.style.display = 'flex';
        }
        
        // Télécharger PDF
        if (e.target.closest('.btn-download')) {
            window.print();
            fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ action: "PDF_DOWNLOAD" }) }).catch(()=>{});
        }
        
        // Nouvelle Analyse
        if (e.target.closest('.btn-new')) {
            window.resetForm();
        }
    });

    // --- 4. SOUMISSION DU FORMULAIRE ---
    const form = document.getElementById('diagnosticForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Honeypot Sécurité
            if (document.getElementById('honeypot').value !== "") return;

            const btn = document.querySelector('button[type="submit"]');
            const overlay = document.getElementById('loadingOverlay');
            const lang = document.documentElement.lang || 'fr';
            
            overlay.style.display = 'flex';
            btn.disabled = true;

            const data = {
                action: "diagnostic",
                timestamp: new Date().toISOString(),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                lang: lang,
                company: document.getElementById('company').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                sector: document.querySelector('input[name="sector"]:checked')?.value || "N/A",
                geoZone: document.getElementById('geo-zone').value,
                expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value).join(', '),
                context: document.getElementById('context').value
            };

            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    const text = await response.text();
                    document.getElementById('resultBody').innerHTML = text;
                    overlay.style.display = 'none';
                    document.getElementById('resultModal').style.display = 'flex';
                    btn.innerText = (lang === 'fr') ? "Terminé" : "Done";
                } else { throw new Error(); }
            } catch (err) {
                overlay.style.display = 'none';
                btn.disabled = false;
                btn.style.backgroundColor = '#ff4d4d';
                setTimeout(() => btn.style.backgroundColor = '', 3000);
            }
        });
    }
});
