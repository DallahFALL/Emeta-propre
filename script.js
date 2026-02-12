/* * FICHIER : script.js (Logic Core - e-META 2026) */

const WEBHOOK_URL = "https://hook.eu2.make.com/2aq4sxsbs6pj7cqmx7i2tvjvhwwdrvf2"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

function nextStep(targetStep) {
    if (targetStep === 2) {
        if (!document.getElementById('company').value || !document.getElementById('email').value) {
            // Validation discrète : bordure rouge temporaire
            document.getElementById('company').style.borderColor = '#ff4d4d';
            document.getElementById('email').style.borderColor = '#ff4d4d';
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

document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000);
    
    // Modals
    document.querySelectorAll('.close-modal, .close-result, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none'));
    });
    document.querySelector('#openPrivacy').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('privacyOverlay').style.display = 'flex';
    });
    
    // Actions Résultats
    const btnDown = document.querySelector('.btn-download');
    if(btnDown) btnDown.addEventListener('click', () => {
        window.print();
        fetch(WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ action: "PDF_DOWNLOAD" }) }).catch(()=>{});
    });
    const btnNew = document.querySelector('.btn-new');
    if(btnNew) btnNew.addEventListener('click', resetForm);
});

// Soumission
document.getElementById('diagnosticForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    if (document.getElementById('honeypot').value !== "") return;

    const btn = document.querySelector('button[type="submit"]');
    const lang = document.documentElement.lang;
    
    document.getElementById('loadingOverlay').style.display = 'flex';
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
            document.getElementById('loadingOverlay').style.display = 'none';
            document.getElementById('resultModal').style.display = 'flex';
            btn.innerText = (lang === 'fr' || lang === 'ar') ? "Terminé" : "Done";
        } else { throw new Error(); }
    } catch (err) {
        document.getElementById('loadingOverlay').style.display = 'none';
        btn.disabled = false;
        // Erreur discrète dans la console ou petit toast si nécessaire
        console.error("Connection Error");
    }
});
