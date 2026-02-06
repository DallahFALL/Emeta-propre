const WEBHOOK_URL = "VOTRE_URL_MAKE_EU2"; // À remplacer
const STATS_URL = "VOTRE_URL_LECTURE_STATS"; // À remplacer

function nextStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    input.setCustomValidity(''); 
    if (input.validity.valueMissing) {
        input.setCustomValidity(lang === 'ar' ? "هذا الحقل مطلوب" : "Ce champ est obligatoire.");
    }
}

document.getElementById('diagnosticForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if(document.getElementById('honeypot').value !== "") return;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true; submitBtn.innerText = "Analyse en cours...";

    const formData = {
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        sector: document.querySelector('input[name="sector"]:checked')?.value,
        geo: document.getElementById('geo-zone').value,
        context: document.getElementById('context').value,
        lang: document.documentElement.lang
    };

    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(r => r.text())
    .then(html => {
        document.getElementById('resultBody').innerHTML = html;
        document.getElementById('resultModal').style.display = 'flex';
        submitBtn.disabled = false; submitBtn.innerText = "Lancer l'Analyse";
    })
    .catch(() => {
        alert("Erreur de connexion. Veuillez vérifier votre Webhook.");
        submitBtn.disabled = false;
    });
});

function downloadPDF() {
    const content = document.getElementById('resultBody').innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`<html><head><title>e-META LABS</title></head><body style="padding:40px; font-family:sans-serif;"><h1>e-META LABS</h1><hr>${content}</body></html>`);
    win.document.close();
    win.print();
    // Monitoring PDF
    fetch(WEBHOOK_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({action:"PDF_DOWNLOAD"}) });
}

function updateStats() {
    fetch(STATS_URL).then(r => r.json()).then(d => {
        document.getElementById('count-analyses').innerText = d.total || 0;
        document.getElementById('count-pdf').innerText = d.pdf || 0;
    }).catch(() => console.log("Stats indisponibles"));
}

setInterval(updateStats, 60000);
updateStats();

// Gestion Modals
document.getElementById('openPrivacy').onclick = (e) => { e.preventDefault(); document.getElementById('privacyOverlay').style.display='flex'; };
document.querySelectorAll('.close-modal, .close-result, .close-modal-btn').forEach(b => {
    b.onclick = () => document.querySelectorAll('.modal-overlay').forEach(m => m.style.display='none');
});
