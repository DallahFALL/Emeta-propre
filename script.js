const WEBHOOK_URL = "https://hook.eu2.make.com/5414bbls1n5au1ebf0qhlx6htdeitaxp";
const STATS_URL = "VOTRE_URL_STATS_MAKE"; 

function nextStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
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
        lang: document.documentElement.lang || 'fr'
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
        btn.disabled = false; btn.innerText = "Lancer";
    })
    .catch(() => alert("Erreur de connexion moteur IA"));
});

function downloadPDF() {
    const content = document.getElementById('resultBody').innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`<html><body style="padding:40px;"><h1>e-META LABS</h1><hr>${content}</body></html>`);
    win.document.close();
    win.print();
    // Signal Monitoring
    fetch(WEBHOOK_URL, { method:'POST', body: JSON.stringify({action:"PDF_DOWNLOAD"}) });
}

function updateLiveStats() {
    fetch(STATS_URL).then(r => r.json()).then(d => {
        document.getElementById('count-analyses').innerText = d.totalAnalyses || 0;
        document.getElementById('count-pdf').innerText = d.totalPDF || 0;
    }).catch(() => console.log("Stats en attente..."));
}
setInterval(updateLiveStats, 60000);
