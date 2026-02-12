/* * PROJET : e-META LABS
 * FICHIER : script.js (Logic Core - Version Pro & Stable)
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/2aq4sxsbs6pj7cqmx7i2tvjvhwwdrvf2"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- GESTION NAVIGATION ---
function nextStep(targetStep) {
    if (targetStep === 2) {
        const comp = document.getElementById('company').value;
        const mail = document.getElementById('email').value;
        // Validation discrète (bordure rouge)
        if (!comp || !mail) {
            if(!comp) document.getElementById('company').style.borderColor = '#ff4d4d';
            if(!mail) document.getElementById('email').style.borderColor = '#ff4d4d';
            setTimeout(() => {
                document.getElementById('company').style.borderColor = '';
                document.getElementById('email').style.borderColor = '';
            }, 2000);
            return;
        }
    }
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetForm() { window.location.reload(); }

// --- LIVE STATS ---
async function updateLiveStats() {
    try {
        const response = await fetch(STATS_URL);
        if (response.ok) {
            const data = await response.json();
            document.getElementById('count-analyses').innerText = data.totalAnalyses || "0";
            document.getElementById('count-pdf').innerText = data.totalPDF || "0";
            const now = new Date();
            document.getElementById('last-update').innerText = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
        }
    } catch (e) { /* Silencieux */ }
}

// --- EVENTS ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000);
    
    // GESTION ROBUSTE DES MODALS (Délégation d'événement)
    document.addEventListener('click', (e) => {
        // Fermeture
        if (e.target.closest('.close-modal') || e.target.closest('.close-result') || e.target.closest('.close-modal-btn')) {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        }
        
        // Ouverture Politique (Formulaire, Footer ou Résultat)
        if (e.target.closest('#openPrivacyLink') || e.target.closest('#openPrivacyFooter') || e.target.closest('#openPrivacyResult')) {
            e.preventDefault();
            const modal = document.getElementById('privacyOverlay');
            if(modal) modal.style.display = 'flex';
        }
        
        // Bouton PDF
        if (e.target.closest('.btn-download')) {
            window.print();
            fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ action: "PDF_DOWNLOAD" }) }).catch(()=>{});
        }
        
        // Bouton Nouveau
        if (e.target.closest('.btn-new')) {
            resetForm();
        }
    });
});

// --- SOUMISSION ---
const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        if (document.getElementById('honeypot').value !== "") return;

        const btn = document.querySelector('button[type="submit"]');
        const overlay = document.getElementById('loadingOverlay');
        const lang = document.documentElement.lang;
        
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
            // Feedback visuel discret sur le bouton en cas d'erreur
            btn.style.backgroundColor = '#ff4d4d';
            setTimeout(() => btn.style.backgroundColor = '', 3000);
        }
    });
}
