const WEBHOOK_URL = "VOTRE_URL_MAKE_EU2"; // Remplacer ici
const STATS_URL = "VOTRE_URL_LECTURE_STATS"; // Webhook de lecture

function nextStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
}

function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    input.setCustomValidity(''); 
    if (input.validity.valueMissing) {
        input.setCustomValidity(lang === 'ar' ? "هذا الحقل مطلوب" : "Champ requis");
    }
}

document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if(document.getElementById('honeypot').value !== "") return;

    const btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true; btn.innerText = "Analyse...";

    const data = {
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        context: document.getElementById('context').value,
        lang: document.documentElement.lang
    };

    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(r => r.text())
    .then(html => {
        document.getElementById('resultBody').innerHTML = html;
        document.getElementById('resultModal').style.display = 'flex';
        btn.innerText = "Lancer"; btn.disabled = false;
    })
    .catch(() => alert("Erreur moteur IA"));
});

function downloadPDF() {
    const content = document.getElementById('resultBody').innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`<html><body style="font-family:sans-serif; padding:50px;"><h1>e-META LABS</h1>${content}</body></html>`);
    win.document.close();
    win.print();
    // Signal Monitoring
    fetch(WEBHOOK_URL, { method:'POST', body: JSON.stringify({action:"PDF_DOWNLOAD"}) });
}

function updateStats() {
    fetch(STATS_URL).then(r => r.json()).then(d => {
        document.getElementById('count-analyses').innerText = d.total || 0;
        document.getElementById('count-pdf').innerText = d.pdf || 0;
    });
}
setInterval(updateStats, 60000);
updateStats();

// Modals
document.getElementById('openPrivacy').onclick = () => document.getElementById('privacyOverlay').style.display='flex';
document.querySelectorAll('.close-modal, .close-result, .close-modal-btn').forEach(b => {
    b.onclick = () => document.querySelectorAll('.modal-overlay').forEach(m => m.style.display='none');
});
