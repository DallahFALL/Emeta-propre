/* * PROJET : e-META LABS
 * FICHIER : script.js (Vérification intelligente sans bulle système)
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 
const STATS_URL = "https://hook.eu2.make.com/1jeaje7c3r1chg5oz7wruxohz6e8a8bg"; 

// --- 1. FONCTIONS DE NAVIGATION ---
window.nextStep = function(targetStep) {
    const lang = document.documentElement.lang || 'fr';
    
    if (targetStep === 2) {
        const comp = document.getElementById('company').value;
        const mail = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        if (!comp || !mail || !phone) {
            alert(translations[lang].alert_empty); // Alerte traduite !
            return;
        }
    }
    
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.prevStep = function() {
    const currentStep = document.querySelector('.form-step.active');
    if(currentStep) {
        const stepNum = parseInt(currentStep.id.split('-')[1]);
        if (stepNum > 1) {
            window.nextStep(stepNum - 1);
        }
    }
};

window.resetForm = function() { window.location.reload(); };

// Remplace la vérification native du navigateur qui causait le texte en français
window.setCustomMessage = function(input) {
    input.setCustomValidity(''); 
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
    } catch (e) {}
}

// --- 3. INITIALISATION ET MODALES ---
document.addEventListener('DOMContentLoaded', () => {
    updateLiveStats();
    setInterval(updateLiveStats, 60000);
    
    document.addEventListener('click', (e) => {
        // OUVERTURE DE LA POLITIQUE DE CONFIDENTIALITÉ
        if (e.target.closest('#openPrivacyLink') || e.target.closest('#openPrivacyFooter')) {
            e.preventDefault();
            const modal = document.getElementById('privacyOverlay');
            if(modal) modal.style.display = 'flex';
        }
        
        // FERMETURE DES MODALES
        if (e.target.closest('.close-modal') || e.target.closest('.close-result') || e.target.closest('.close-modal-btn')) {
            document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        }
    });

    // --- 4. SOUMISSION DU FORMULAIRE ET SÉCURITÉ ---
    const form = document.getElementById('diagnosticForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const lang = document.documentElement.lang || 'fr';
            
            // 1. VÉRIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ
            const consent = document.getElementById('consent');
            if (consent && !consent.checked) {
                alert(translations[lang].alert_consent); // Alerte traduite !
                return;
            }

            // 2. VÉRIFICATION DE WHATSAPP (SEULEMENT SI CHOISI)
            const deliveryMethod = document.getElementById('delivery_method').value;
            const whatsappConsent = document.getElementById('whatsapp-consent');

            if (deliveryMethod === 'whatsapp' && whatsappConsent && !whatsappConsent.checked) {
                alert(translations[lang].alert_wa); // Alerte traduite !
                return;
            }

            if (document.getElementById('honeypot') && document.getElementById('honeypot').value !== "") return;

            const btn = document.getElementById('submitBtn');
            const overlay = document.getElementById('loadingOverlay');
            
            if (overlay) overlay.style.display = 'flex';
            if (btn) btn.disabled = true;

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
                context: document.getElementById('context').value,
                
                // --- LIGNE AJOUTÉE POUR MAKE.COM ---
                delivery_method: document.getElementById('delivery_method') ? document.getElementById('delivery_method').value : "whatsapp"
            };
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
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    const text = await response.text();
                    document.getElementById('resultBody').innerHTML = text;
                    if (overlay) overlay.style.display = 'none';
                    document.getElementById('resultModal').style.display = 'flex';
                } else { throw new Error(); }
            } catch (err) {
                if (overlay) overlay.style.display = 'none';
                if (btn) {
                    btn.disabled = false;
                    btn.style.backgroundColor = '#ff4d4d';
                    alert(translations[lang].alert_error);
                    setTimeout(() => btn.style.backgroundColor = '', 3000);
                }
            }
        });
    }
});
