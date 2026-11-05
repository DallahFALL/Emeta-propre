const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const outputDir = __dirname;
const node = (name, type, typeVersion, parameters, position, extra = {}) => ({
  parameters,
  type,
  typeVersion,
  position,
  id: crypto.createHash('sha1').update(name).digest('hex').slice(0, 8) + '-0000-4000-8000-' + crypto.createHash('sha1').update(type + name).digest('hex').slice(0, 12),
  name,
  ...extra,
});
const codeNode = (name, jsCode, position) =>
  node(name, 'n8n-nodes-base.code', 2, {
    mode: 'runOnceForAllItems',
    jsCode: `try {\n${jsCode}\n} catch (error) {\n  throw new Error(${JSON.stringify(name + ' — ')} + (error?.message || String(error)));\n}`,
  }, position);
const httpNode = (name, method, url, position, options = {}) =>
  node(name, 'n8n-nodes-base.httpRequest', 4.4, {
    method,
    url,
    ...options,
  }, position);
const makeWorkflow = (name, nodes, edges) => {
  const connections = {};
  for (const [source, target, output = 0, type = 'main'] of edges) {
    connections[source] ??= {};
    connections[source][type] ??= [];
    while (connections[source][type].length <= output) connections[source][type].push([]);
    connections[source][type][output].push({ node: target, type, index: 0 });
  }
  return {
    name,
    nodes,
    connections,
    active: false,
    settings: { executionOrder: 'v1', saveDataErrorExecution: 'all' },
    versionId: crypto.randomUUID(),
    meta: { templateCredsSetupCompleted: false },
    tags: [],
  };
};
const save = (filename, workflow) =>
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(workflow, null, 2) + '\n', 'utf8');

const inboundNodes = [
  node('Sub-workflow Trigger', 'n8n-nodes-base.executeWorkflowTrigger', 1.1, {}, [-1040, 0]),
  codeNode('Prepare LLM Prompt', `
const input = $input.first().json;
const source = input.mission && typeof input.mission === 'object' ? { ...input, ...input.mission } : input;
const attempt = Number.isInteger(source.attempt) ? source.attempt : 0;
const feedback = Array.isArray(source.rejectionReasons) ? source.rejectionReasons : [];
const previous = String(source.previousReport || '');
const client = String(source.client_name || source.nom_client || source.Client || '');
const clientEmail = String(source.client_email || source.Email_Client || source.email || '');
const clientWhatsapp = String(source.client_whatsapp || source.WhatsApp_Client || source.whatsapp || '');
const missionRef = String(source.mission_id || source.reference_mission || source.reference || source.Code_Mission || '');
const context = String(source.audit_context || source.problematique || source.Problematique || source.mission_context || '');
if (!missionRef || !context || !clientEmail || !clientWhatsapp) {
  throw new Error('Données de mission incomplètes: mission_id, contexte, e-mail et numéro WhatsApp client sont obligatoires.');
}
const correction = feedback.length
  ? '\\n\\nCORRECTION OBLIGATOIRE (tentative ' + attempt + ' sur 2):\\n' + feedback.map(reason => '- ' + reason).join('\\n') + '\\nCorrige le rapport précédent sans omettre les faits utiles:\\n' + previous
  : '';
return [{ json: {
  ...source,
  mission_id: missionRef,
  client_name: client,
  client_email: clientEmail,
  client_whatsapp: clientWhatsapp,
  attempt,
  prompt: 'Rédige en français un mémorandum d’audit stratégique factuel, sans inventer de données. Le corps doit dépasser 800 caractères et contenir les titres MÉMORANDUM, OBJET et RECOMMANDATION ainsi que la signature e-META LABS.\\n\\nMission: ' + missionRef + '\\nClient: ' + client + '\\nContexte: ' + context + correction,
} }];
`, [-800, 0]),
  node('Basic LLM Chain', '@n8n/n8n-nodes-langchain.chainLlm', 1.9, {
    promptType: 'define',
    text: '={{ $json.prompt }}',
    messages: { messageValues: [] },
    batching: {},
  }, [-520, 0]),
  node('Gemini Chat Model', '@n8n/n8n-nodes-langchain.lmChatGoogleGemini', 1.1, {
    options: { temperature: 0.2 },
  }, [-520, 200]),
  codeNode('Code in JavaScript3', `
const crypto = require('crypto');
try {
  const report = String($json.text ?? $json.output ?? '').trim();
  const prompt = $('Prepare LLM Prompt').last().json;
  const normalized = report.normalize('NFC').toLocaleUpperCase('fr-FR');
  const checks = {
    minLength: report.length >= 800,
    memorandum: normalized.includes('MÉMORANDUM'),
    object: normalized.includes('OBJET'),
    recommendation: normalized.includes('RECOMMANDATION'),
    signature: normalized.includes('E-META LABS'),
  };
  const weights = { minLength: 20, memorandum: 20, object: 20, recommendation: 20, signature: 20 };
  const qualityScore = Object.entries(checks).reduce((score, [key, passed]) => score + (passed ? weights[key] : 0), 0);
  const rejectionReasons = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([key]) => ({
      minLength: 'Le rapport doit contenir au moins 800 caractères.',
      memorandum: 'Le titre MÉMORANDUM est obligatoire.',
      object: 'La section OBJET est obligatoire.',
      recommendation: 'La section RECOMMANDATION est obligatoire.',
      signature: 'La signature e-META LABS est obligatoire.',
    }[key]));
  // Tous les critères sont impératifs: un score de 80 ne peut pas compenser un critère manquant.
  const status = qualityScore >= 80 && rejectionReasons.length === 0 ? 'APPROVED' : 'MANUAL_REVIEW_REQUIRED';
  return [{ json: {
    ...prompt,
    markdown_content: report,
    qualityChecks: checks,
    qualityScore,
    rejectionReasons,
    status,
    sha256: crypto.createHash('sha256').update(report, 'utf8').digest('hex'),
  } }];
} catch (error) {
  throw new Error('Échec du contrôle qualité du rapport: ' + error.message);
}
`, [-240, 0]),
  node('If2', 'n8n-nodes-base.if', 2.2, {
    conditions: {
      options: { caseSensitive: true, typeValidation: 'strict', version: 2 },
      conditions: [{
        leftValue: '={{ $json.status }}',
        rightValue: 'APPROVED',
        operator: { type: 'string', operation: 'equals' },
      }],
      combinator: 'and',
    },
    options: {},
  }, [0, 0]),
  node('Wait 12 minutes', 'n8n-nodes-base.wait', 1.1, {
    resume: 'timeInterval',
    amount: 12,
    unit: 'minutes',
  }, [240, -100]),
  httpNode('HTTP Request4', 'POST', 'http://172.17.0.1:5000/generate-pdf', [480, -100], {
    sendBody: true,
    specifyBody: 'json',
    jsonBody: "={{ { mission_id: $json.mission_id, client_name: $json.client_name, sha256: $json.sha256, markdown_content: $json.markdown_content } }}",
    options: { response: { response: { responseFormat: 'file', outputPropertyName: 'data' } } },
  }),
  node('telegram account', 'n8n-nodes-base.telegram', 1.2, {
    resource: 'message',
    operation: 'sendDocument',
    chatId: '={{ $env.CORTEX_EXECUTIVE_TELEGRAM_CHAT_ID }}',
    binaryData: true,
    binaryPropertyName: 'data',
    additionalFields: {
      caption: "={{ 'AUDIT APPROUVÉ · ' + $('Code in JavaScript3').last().json.mission_id + '\\nSHA-256: ' + $('Code in JavaScript3').last().json.sha256 + '\\nOTS: ' + ($('Code in JavaScript3').last().json.ots_url || $('Code in JavaScript3').last().json.OTS_URL || 'ancrage à effectuer') + '\\nCockpit: ' + ($env.NOCODB_COCKPIT_URL || 'https://base.e-metalabs.com') }}",
    },
  }, [760, -220]),
  httpNode('WhatsApp Cloud API', 'POST', "={{ 'https://graph.facebook.com/v20.0/' + $env.WHATSAPP_PHONE_NUMBER_ID + '/messages' }}", [760, -60], {
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'Authorization', value: "={{ 'Bearer ' + $env.WHATSAPP_ACCESS_TOKEN }}" },
      { name: 'Content-Type', value: 'application/json' },
    ] },
    sendBody: true,
    specifyBody: 'json',
    jsonBody: "={{ { messaging_product: 'whatsapp', to: $('Code in JavaScript3').last().json.client_whatsapp, type: 'text', text: { body: 'Votre mission ' + $('Code in JavaScript3').last().json.mission_id + ' est finalisée. Consultez le suivi sécurisé: https://e-metalabs.com/tracker.html?ref=' + encodeURIComponent($('Code in JavaScript3').last().json.mission_id) } } }}",
    options: {},
  }),
  node('Gmail API', 'n8n-nodes-base.gmail', 2.2, {
    resource: 'message',
    operation: 'send',
    sendTo: "={{ $('Code in JavaScript3').last().json.client_email }}",
    subject: "={{ 'Accusé exécutif · ' + $('Code in JavaScript3').last().json.mission_id }}",
    emailType: 'text',
    message: "={{ 'Bonjour,\\n\\nVeuillez trouver en pièce jointe le rapport officiel de la mission ' + $('Code in JavaScript3').last().json.mission_id + '.\\nEmpreinte SHA-256: ' + $('Code in JavaScript3').last().json.sha256 + '\\nSuivi sécurisé: https://e-metalabs.com/tracker.html?ref=' + encodeURIComponent($('Code in JavaScript3').last().json.mission_id) }}",
    options: { attachmentsUi: { attachmentsBinary: [{ property: 'data' }] } },
  }, [760, 100]),
  codeNode('Build correction retry', `
const result = $input.first().json;
if (result.status !== 'MANUAL_REVIEW_REQUIRED') throw new Error('La boucle de correction a reçu un résultat non rejeté.');
return [{ json: {
  ...result,
  attempt: Number(result.attempt || 0) + 1,
  previousReport: result.markdown_content,
  rejectionReasons: result.rejectionReasons,
} }];
`, [240, 180]),
  node('Retry Gate', 'n8n-nodes-base.if', 2.2, {
    conditions: {
      options: { caseSensitive: true, typeValidation: 'strict', version: 2 },
      conditions: [{
        leftValue: '={{ $json.attempt }}',
        rightValue: 3,
        operator: { type: 'number', operation: 'lt' },
      }],
      combinator: 'and',
    },
    options: {},
  }, [480, 180]),
  node('Manual Review Notification', 'n8n-nodes-base.gmail', 2.2, {
    resource: 'message',
    operation: 'send',
    sendTo: '={{ $env.CORTEX_REVIEW_EMAIL }}',
    subject: "={{ 'Revue manuelle requise · ' + $json.mission_id }}",
    emailType: 'text',
    message: "={{ 'Mission: ' + $json.mission_id + '\\nTentatives: ' + $json.attempt + '\\nScore: ' + $json.qualityScore + '/100\\nMotifs: ' + $json.rejectionReasons.join(' | ') }}",
    options: {},
  }, [760, 260]),
];
const inbound = makeWorkflow('Cortex ABM Inbound', inboundNodes, [
  ['Sub-workflow Trigger', 'Prepare LLM Prompt'],
  ['Prepare LLM Prompt', 'Basic LLM Chain'],
  ['Basic LLM Chain', 'Code in JavaScript3'],
  ['Gemini Chat Model', 'Basic LLM Chain', 0, 'ai_languageModel'],
  ['Code in JavaScript3', 'If2'],
  ['If2', 'Wait 12 minutes', 0],
  ['If2', 'Build correction retry', 1],
  ['Build correction retry', 'Retry Gate'],
  ['Retry Gate', 'Prepare LLM Prompt', 0],
  ['Retry Gate', 'Manual Review Notification', 1],
  ['Wait 12 minutes', 'HTTP Request4'],
  ['HTTP Request4', 'telegram account'],
  ['HTTP Request4', 'WhatsApp Cloud API'],
  ['HTTP Request4', 'Gmail API'],
]);

const billingNodes = [
  node('Webhook IPN PayTech', 'n8n-nodes-base.webhook', 2.1, {
    httpMethod: 'POST',
    path: 'paytech-ipn',
    responseMode: 'responseNode',
    options: { rawBody: true },
  }, [-1040, 0], { webhookId: crypto.randomUUID() }),
  codeNode('Verify PayTech HMAC', `
const crypto = require('crypto');
const item = $input.first();
const headers = Object.fromEntries(Object.entries(item.json.headers || {}).map(([key, value]) => [key.toLowerCase(), value]));
const signatureHeader = String(headers['x-paytech-signature'] || '').trim().replace(/^sha256=/i, '').toLowerCase();
const secret = $env.PAYTECH_API_SECRET;
if (!secret) throw new Error('Configuration absente: définir PAYTECH_API_SECRET dans l’environnement n8n.');
const rawBase64 = item.binary?.data?.data;
const rawValue = item.json.rawBody ?? item.json.body;
const raw = rawBase64
  ? Buffer.from(rawBase64, 'base64')
  : typeof rawValue === 'string'
    ? Buffer.from(rawValue, 'utf8')
    : null;
if (!raw) return [{ json: { authenticated: false, error: 'Corps brut non disponible; activer Raw Body sur le Webhook.' } }];
const expected = crypto.createHmac('sha256', secret).update(raw).digest();
let provided;
try { provided = Buffer.from(signatureHeader, 'hex'); } catch { provided = Buffer.alloc(0); }
const authenticated = /^[a-f0-9]{64}$/.test(signatureHeader) &&
  provided.length === expected.length && crypto.timingSafeEqual(provided, expected);
if (!authenticated) return [{ json: { authenticated: false, error: 'Signature HMAC invalide.' } }];
let payload;
try { payload = JSON.parse(raw.toString('utf8')); }
catch (error) { return [{ json: { authenticated: true, payloadValid: false, error: 'JSON IPN invalide: ' + error.message } }]; }
const body = payload && typeof payload === 'object' ? (payload.body || payload) : {};
const paymentId = String(body.transaction_id || body.payment_id || '').trim();
const missionRef = String(body.mission_ref || body.reference_mission || body.custom_field_1 || '').trim();
const status = String(body.status || body.payment_status || body.state || '').trim().toLowerCase();
const amount = Number(body.amount_ttc ?? body.amount);
const currency = String(body.currency || 'XOF').toUpperCase();
const payloadValid = Boolean(paymentId && /^MIS-\\d{4}-\\d{4,}$/.test(missionRef) &&
  Number.isFinite(amount) && amount > 0 && /^[A-Z]{3}$/.test(currency));
return [{ json: {
  authenticated: true,
  payloadValid,
  isPaid: ['success', 'successful', 'completed', 'paid', 'approved'].includes(status),
  error: payloadValid ? '' : 'Référence, identifiant de paiement ou montant TTC invalide.',
  payment_id: paymentId,
  mission_ref: missionRef,
  amount_ttc: amount,
  currency,
  provider_status: status,
  received_at: new Date().toISOString(),
} }];
`, [-800, 0]),
  node('HMAC valide ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.authenticated }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [-560, 0]),
  node('Réponse 403', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'json',
    responseBody: '={{ { ok: false, error: "Signature invalide" } }}',
    options: { responseCode: 403 },
  }, [-320, 180]),
  node('IPN recevable ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.payloadValid }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [-320, -80]),
  node('Réponse 400', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'json',
    responseBody: '={{ { ok: false, error: $json.error } }}',
    options: { responseCode: 400 },
  }, [-80, 120]),
  node('Paiement acquitté ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.isPaid }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [-80, -160]),
  node('Réponse 200 non payé', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'json', responseBody: '={{ { ok: true, ignored: true } }}', options: { responseCode: 200 },
  }, [160, 80]),
  codeNode('Calculer commissions', `
try {
  const p = $input.first().json;
  // Work in centimes to keep the 18% TVA and 15/85 split deterministic.
  const ttcMinor = Math.round(p.amount_ttc * 100);
  const htMinor = Math.round(ttcMinor * 100 / 118);
  const commissionMinor = Math.round(htMinor * 15 / 100);
  const escrowMinor = htMinor - commissionMinor;
  const money = minor => Number((minor / 100).toFixed(2));
  return [{ json: {
    ...p,
    montant_ttc: money(ttcMinor),
    montant_ht: money(htMinor),
    commission_emeta_ht: money(commissionMinor),
    montant_sequestre_expert_ht: money(escrowMinor),
  } }];
} catch (error) {
  throw new Error('Échec du calcul financier du séquestre: ' + error.message);
}
`, [160, -240]),
  node('Postgres Idempotence Paiement', 'n8n-nodes-base.postgres', 2.6, {
    operation: 'executeQuery',
    query: `INSERT INTO cortex_payment_events
(payment_id, mission_ref, amount_ttc, currency, amount_ht, commission_ht, escrow_ht, received_at)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
ON CONFLICT (payment_id) DO NOTHING
RETURNING payment_id;`,
    options: { queryReplacement: "={{ [$json.payment_id, $json.mission_ref, $json.montant_ttc, $json.currency, $json.montant_ht, $json.commission_emeta_ht, $json.montant_sequestre_expert_ht, $json.received_at] }}" },
  }, [400, -240], { alwaysOutputData: true }),
  codeNode('Détecter doublon', `
const rows = $input.all();
const payment = $('Calculer commissions').first().json;
return [{ json: { ...payment, isNewPayment: rows.some(row => row.json.payment_id === payment.payment_id) } }];
`, [640, -240]),
  node('Nouveau paiement ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.isNewPayment }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [880, -240]),
  node('Réponse 200 déjà traité', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'json', responseBody: '={{ { ok: true, duplicate: true } }}', options: { responseCode: 200 },
  }, [1120, 20]),
  node('Réponse 200 IPN', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'json',
    responseBody: '={{ { ok: true, payment_id: $json.payment_id, mission_ref: $json.mission_ref } }}',
    options: { responseCode: 200 },
  }, [1120, -320]),
  httpNode('Lire Mission NocoDB', 'GET',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [1360, -240], {
      sendQuery: true,
      queryParameters: { parameters: [{ name: 'where', value: "={{ '(Code_Mission,eq,' + $('Détecter doublon').first().json.mission_ref + ')' }}" }] },
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' }] },
      options: {},
    }),
  codeNode('Valider Mission NocoDB', `
const response = $input.first().json;
const rows = response.list || response.records || response.data || [];
const p = $('Détecter doublon').first().json;
const row = rows.map(r => r.fields ? { ...r, ...r.fields } : r).find(r => (r.Code_Mission || r.mission_ref) === p.mission_ref);
if (!row || row.Id == null) throw new Error('Mission NocoDB introuvable pour ' + p.mission_ref);
return [{ json: {
  ...p,
  mission_row_id: row.Id,
  secteur: row.Secteur || row.secteur,
  client_name: row.Client || row.client_name,
  descriptif_anonymise: row.Descriptif_Anonymise || row.descriptif_anonymise || '',
} }];
`, [1600, -240]),
  httpNode('Mettre à jour Mission NocoDB', 'PATCH',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [1840, -240], {
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' },
        { name: 'Content-Type', value: 'application/json' },
      ] },
      sendBody: true,
      specifyBody: 'json',
      jsonBody: "={{ [{ Id: $json.mission_row_id, Statut: 'Paiement_Confirmé', Statut_Assignation: 'en_attente', Montant_TTC: $json.montant_ttc, Montant_HT: $json.montant_ht, Commission_eMETA_HT: $json.commission_emeta_ht, Montant_Sequestre_Expert_HT: $json.montant_sequestre_expert_ht, Devise: $json.currency }] }}",
      options: {},
    }),
  httpNode('Insérer Grand Livre NocoDB', 'POST',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_GRAND_LIVRE + '/records' }}",
    [2080, -240], {
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' },
        { name: 'Content-Type', value: 'application/json' },
      ] },
      sendBody: true,
      specifyBody: 'json',
      jsonBody: "={{ { fields: { payment_id: $('Détecter doublon').first().json.payment_id, mission_ref: $('Détecter doublon').first().json.mission_ref, devise: $('Détecter doublon').first().json.currency, montant_ttc: $('Détecter doublon').first().json.montant_ttc, montant_ht: $('Détecter doublon').first().json.montant_ht, commission_emeta_ht: $('Détecter doublon').first().json.commission_emeta_ht, montant_sequestre_expert_ht: $('Détecter doublon').first().json.montant_sequestre_expert_ht, statut: 'GELÉ_EN_ATTENTE_RECETTE', date_paiement: $('Détecter doublon').first().json.received_at } } }}",
      options: {},
    }),
  codeNode('Préparer payload dispatch', `
const mission = $('Valider Mission NocoDB').first().json;
if (!mission.secteur) throw new Error('Secteur de mission manquant: impossible de dispatcher vers le vivier.');
return [{ json: {
  mission_ref: mission.mission_ref,
  secteur: mission.secteur,
  client_name: mission.client_name,
  descriptif_anonymise: mission.descriptif_anonymise,
  expert_fee_ht: mission.montant_sequestre_expert_ht,
  currency: mission.currency,
} }];
`, [2320, -240]),
  node('Execute Workflow 03 async', 'n8n-nodes-base.executeWorkflow', 1.2, {
    source: 'database',
    workflowId: '={{ $env.CORTEX_EXPERT_DISPATCHER_WORKFLOW_ID }}',
    options: { waitForSubWorkflow: false },
  }, [2560, -240]),
];
const billing = makeWorkflow('Cortex Billing & Escrow', billingNodes, [
  ['Webhook IPN PayTech', 'Verify PayTech HMAC'],
  ['Verify PayTech HMAC', 'HMAC valide ?'],
  ['HMAC valide ?', 'IPN recevable ?', 0],
  ['HMAC valide ?', 'Réponse 403', 1],
  ['IPN recevable ?', 'Paiement acquitté ?', 0],
  ['IPN recevable ?', 'Réponse 400', 1],
  ['Paiement acquitté ?', 'Calculer commissions', 0],
  ['Paiement acquitté ?', 'Réponse 200 non payé', 1],
  ['Calculer commissions', 'Postgres Idempotence Paiement'],
  ['Postgres Idempotence Paiement', 'Détecter doublon'],
  ['Détecter doublon', 'Nouveau paiement ?'],
  ['Nouveau paiement ?', 'Réponse 200 IPN', 0],
  ['Nouveau paiement ?', 'Réponse 200 déjà traité', 1],
  ['Réponse 200 IPN', 'Lire Mission NocoDB'],
  ['Lire Mission NocoDB', 'Valider Mission NocoDB'],
  ['Valider Mission NocoDB', 'Mettre à jour Mission NocoDB'],
  ['Mettre à jour Mission NocoDB', 'Insérer Grand Livre NocoDB'],
  ['Insérer Grand Livre NocoDB', 'Préparer payload dispatch'],
  ['Préparer payload dispatch', 'Execute Workflow 03 async'],
]);

const dispatcherNodes = [
  node('Execute Workflow Trigger', 'n8n-nodes-base.executeWorkflowTrigger', 1.1, {}, [-1200, -240]),
  codeNode('Normaliser mission', `
const p = $input.first().json;
const missionRef = String(p.mission_ref || p.mission_id || '').trim();
const sector = String(p.secteur || '').trim();
const fee = Number(p.montant_sequestre_expert_ht ?? p.expert_fee_ht);
if (!/^MIS-\\d{4}-\\d{4,}$/.test(missionRef) || !sector || !Number.isFinite(fee) || fee < 0) {
  throw new Error('Entrée dispatcher invalide: mission_ref, secteur et honoraires HT requis.');
}
return [{ json: { ...p, mission_ref: missionRef, secteur: sector, expert_fee_ht: fee } }];
`, [-960, -240]),
  httpNode('Lire mission avant dispatch', 'GET',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [-720, -480], {
      sendQuery: true,
      queryParameters: { parameters: [{ name: 'where', value: "={{ '(Code_Mission,eq,' + $('Normaliser mission').first().json.mission_ref + ')' }}" }] },
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' }] },
      options: {},
    }),
  codeNode('Vérifier disponibilité mission', `
const response = $input.first().json;
const rows = response.list || response.records || response.data || [];
const missionInput = $('Normaliser mission').first().json;
const matches = rows.map(r => r.fields ? { ...r, ...r.fields } : r)
  .filter(row => (row.Code_Mission || row.mission_ref) === missionInput.mission_ref);
if (matches.length !== 1) throw new Error('La mission doit exister une seule fois dans NocoDB avant dispatch.');
const mission = matches[0];
if (mission.Statut_Assignation !== 'en_attente') {
  throw new Error('Dispatch refusé: Statut_Assignation doit être en_attente.');
}
if ((mission.Secteur || mission.secteur) !== missionInput.secteur) {
  throw new Error('Le secteur transmis ne correspond pas au secteur canonique de la mission.');
}
if (mission.Statut !== 'Paiement_Confirmé') {
  throw new Error('Dispatch refusé: le paiement de la mission n’est pas confirmé.');
}
if (!mission.Descriptif_Anonymise && !mission.descriptif_anonymise && !missionInput.descriptif_anonymise) {
  throw new Error('Descriptif_Anonymise absent; la mission ne peut pas être offerte au vivier.');
}
return [{ json: {
  ...missionInput,
  mission_row_id: mission.Id,
  descriptif_anonymise: mission.Descriptif_Anonymise || mission.descriptif_anonymise || missionInput.descriptif_anonymise || '',
} }];
`, [-480, -480]),
  node('Initialiser verrou mission', 'n8n-nodes-base.postgres', 2.6, {
    operation: 'executeQuery',
    query: `INSERT INTO cortex_mission_claims (mission_ref, status, deadline_at)
VALUES ($1, 'en_attente', now() + interval '2 hours')
ON CONFLICT (mission_ref) DO NOTHING
RETURNING mission_ref, status;`,
    options: { queryReplacement: "={{ [$json.mission_ref] }}" },
  }, [-720, -240]),
  httpNode('Interroger vivier NocoDB', 'GET',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_EXPERTS + '/records' }}",
    [-480, -240], {
      sendQuery: true,
      queryParameters: { parameters: [
        { name: 'where', value: "={{ '(statut_accreditation,eq,valide)~and(disponibilite,eq,disponible)~and(secteur,eq,' + $('Normaliser mission').first().json.secteur + ')' }}" },
        { name: 'limit', value: '100' },
      ] },
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' }] },
      options: {},
    }),
  codeNode('Classer experts', `
const response = $input.first().json;
const rows = response.list || response.records || response.data || [];
const mission = $('Normaliser mission').first().json;
const experts = rows.map(row => row.fields ? { ...row, ...row.fields } : row)
  .filter(e => e.statut_accreditation === 'valide' && e.disponibilite === 'disponible' && e.secteur === mission.secteur)
  .filter(e => e.expert_id && e.Id != null && e.email && e.whatsapp && e.telegram_chat_id)
  .sort((a, b) => Number(b.note_qualification || 0) - Number(a.note_qualification || 0) || String(a.expert_id).localeCompare(String(b.expert_id)));
if (!experts.length) throw new Error('Aucun expert accrédité, disponible et qualifié pour le secteur ' + mission.secteur);
return experts.map((expert, index) => ({ json: { ...mission, expert, rang: index + 1 } }));
`, [-240, -240]),
  node('Loop Over Items', 'n8n-nodes-base.splitInBatches', 3, {
    batchSize: 1,
    options: {},
  }, [0, -240]),
  codeNode('Préparer offre', `
const item = $input.first().json;
const deadline = new Date(Date.now() + 2 * 60 * 60 * 1000);
return [{ json: { ...item, offer_deadline: deadline.toISOString(), expert_id: String(item.expert.expert_id), expert_row_id: item.expert.Id } }];
`, [240, -240]),
  node('Ouvrir fenêtre SLA', 'n8n-nodes-base.postgres', 2.6, {
    operation: 'executeQuery',
    query: `UPDATE cortex_mission_claims
SET current_expert_id = $2, current_response = 'pending', deadline_at = $3::timestamptz, updated_at = now()
WHERE mission_ref = $1 AND status = 'en_attente'
RETURNING mission_ref, current_expert_id, deadline_at, status;`,
    options: { queryReplacement: "={{ [$json.mission_ref, $json.expert_id, $json.offer_deadline] }}" },
  }, [480, -240]),
  codeNode('Signer lien de réclamation', `
const crypto = require('crypto');
const db = $input.first().json;
const offer = $('Préparer offre').item.json;
const secret = $env.CLAIM_TOKEN_SECRET;
if (!secret || secret.length < 32) throw new Error('CLAIM_TOKEN_SECRET doit contenir au moins 32 caractères.');
if (!db.mission_ref || db.status !== 'en_attente') throw new Error('Le verrou de mission n’est plus en attente.');
const exp = Math.floor(new Date(db.deadline_at).getTime() / 1000);
const payload = Buffer.from(JSON.stringify({ mission_ref: db.mission_ref, expert_id: offer.expert_id, exp, nonce: crypto.randomBytes(16).toString('hex') })).toString('base64url');
const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
const token = payload + '.' + signature;
const safeDescription = String(offer.descriptif_anonymise || offer.mission_description_anonymisee || offer.secteur).slice(0, 1200);
return [{ json: {
  ...offer,
  claim_token: token,
  claim_url: 'https://automation.e-metalabs.com/webhook/claim-mission?token=' + encodeURIComponent(token) + '&exp=' + exp,
  offer_message: 'Offre de mission e-META LABS\\nSecteur: ' + offer.secteur + '\\nMandat: ' + safeDescription + '\\nHonoraires réservés: ' + offer.expert_fee_ht + ' ' + (offer.currency || 'XOF') + ' HT\\nAccepter sous 2 heures: https://automation.e-metalabs.com/webhook/claim-mission?token=' + encodeURIComponent(token) + '&exp=' + exp,
} }];
`, [720, -240]),
  httpNode('WhatsApp Expert', 'POST', "={{ 'https://graph.facebook.com/v20.0/' + $env.WHATSAPP_PHONE_NUMBER_ID + '/messages' }}", [960, -360], {
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'Authorization', value: "={{ 'Bearer ' + $env.WHATSAPP_ACCESS_TOKEN }}" },
      { name: 'Content-Type', value: 'application/json' },
    ] },
    sendBody: true, specifyBody: 'json',
    jsonBody: "={{ { messaging_product: 'whatsapp', to: $json.expert.whatsapp, type: 'text', text: { body: $json.offer_message } } }}",
    options: {},
  }),
  node('Telegram Expert', 'n8n-nodes-base.telegram', 1.2, {
    resource: 'message',
    operation: 'sendMessage',
    chatId: '={{ $json.expert.telegram_chat_id }}',
    text: '={{ $json.offer_message }}',
    additionalFields: {},
  }, [960, -120]),
  node('Wait 2 heures SLA', 'n8n-nodes-base.wait', 1.1, {
    resume: 'timeInterval', amount: 2, unit: 'hours',
  }, [960, 120]),
  node('Lire verrou SLA', 'n8n-nodes-base.postgres', 2.6, {
    operation: 'executeQuery',
    query: `SELECT mission_ref, status, current_expert_id, current_response, assigned_expert_id, deadline_at
FROM cortex_mission_claims WHERE mission_ref = $1;`,
    options: { queryReplacement: "={{ [$('Signer lien de réclamation').item.json.mission_ref] }}" },
  }, [1200, 120]),
  codeNode('Contrôler attribution', `
const state = $input.first().json;
const offer = $('Signer lien de réclamation').item.json;
const accepted = state.status === 'attribuée' && String(state.assigned_expert_id) === offer.expert_id;
return [{ json: { ...offer, accepted, claim_status: state.status || 'introuvable' } }];
`, [1440, 120]),
  node('Mission attribuée ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.accepted }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [1680, 120]),
  httpNode('Rendre indisponible temporairement', 'PATCH',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_EXPERTS + '/records' }}",
    [1920, 260], {
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' },
        { name: 'Content-Type', value: 'application/json' },
      ] },
      sendBody: true, specifyBody: 'json',
      jsonBody: "={{ [{ Id: $json.expert_row_id, disponibilite: 'indisponible', disponible_jusqu_a: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() }] }}",
      options: {},
    }),
  httpNode('Lire Mission attribuée', 'GET',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [1920, 0], {
      sendQuery: true,
      queryParameters: { parameters: [{ name: 'where', value: "={{ '(Code_Mission,eq,' + $json.mission_ref + ')' }}" }] },
      sendHeaders: true, headerParameters: { parameters: [{ name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' }] },
      options: {},
    }),
  codeNode('Préparer jalon 3', `
const data = $input.first().json;
const rows = data.list || data.records || data.data || [];
const mission = rows.map(r => r.fields ? { ...r, ...r.fields } : r).find(r => (r.Code_Mission || r.mission_ref) === $('Contrôler attribution').item.json.mission_ref);
if (!mission || mission.Id == null) throw new Error('Mission attribuée introuvable dans NocoDB.');
return [{ json: { payload: [{ Id: mission.Id, Code_Mission: mission.Code_Mission, Jalon_3: 'vert', Statut: 'Expert_Assigné', Expert_Assigne: $('Contrôler attribution').item.json.expert_id, Statut_Assignation: 'attribuée' }] } }];
`, [2160, 0]),
  httpNode('Clôturer dispatch NocoDB', 'PATCH',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [2400, 0], {
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' },
        { name: 'Content-Type', value: 'application/json' },
      ] },
      sendBody: true, specifyBody: 'json',
      jsonBody: '={{ $json.payload }}',
      options: {},
    }),
  node('Webhook claim-mission', 'n8n-nodes-base.webhook', 2.1, {
    httpMethod: 'POST', path: 'claim-mission', responseMode: 'responseNode', options: {},
  }, [-1200, 520], { webhookId: crypto.randomUUID() }),
  codeNode('Vérifier jeton claim', `
const crypto = require('crypto');
const request = $input.first().json;
const query = request.query || {};
const body = request.body && typeof request.body === 'object' ? request.body : {};
const token = String(body.token || query.token || '');
const action = String(body.action || 'accept');
const secret = $env.CLAIM_TOKEN_SECRET;
if (!secret || secret.length < 32) throw new Error('CLAIM_TOKEN_SECRET absent ou trop court.');
const parts = token.split('.');
if (parts.length !== 2) return [{ json: { valid: false, reason: 'Lien invalide.' } }];
const expected = crypto.createHmac('sha256', secret).update(parts[0]).digest();
let actual = Buffer.alloc(0);
try { actual = Buffer.from(parts[1], 'base64url'); } catch {}
if (actual.length !== expected.length || !crypto.timingSafeEqual(actual, expected)) return [{ json: { valid: false, reason: 'Lien invalide.' } }];
let payload;
try { payload = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8')); }
catch (error) { return [{ json: { valid: false, reason: 'Jeton illisible.' } }]; }
if (!payload.mission_ref || !payload.expert_id || !Number.isInteger(payload.exp) || payload.exp <= Math.floor(Date.now() / 1000)) {
  return [{ json: { valid: false, reason: 'Offre expirée ou incomplète.' } }];
}
if (!['accept', 'decline'].includes(action)) return [{ json: { valid: false, reason: 'Action invalide.' } }];
return [{ json: { valid: true, action, mission_ref: payload.mission_ref, expert_id: String(payload.expert_id), exp: payload.exp, token_hash: crypto.createHash('sha256').update(token).digest('hex') } }];
`, [-960, 520]),
  node('Jeton claim valide ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.valid }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [-720, 520]),
  node('Réponse lien invalide', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: 'Lien invalide ou expiré. Contactez le Desk e-META LABS.',
    options: { responseCode: 403, responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/plain; charset=utf-8' }] } },
  }, [-480, 680]),
  node('Claim atomique PostgreSQL', 'n8n-nodes-base.postgres', 2.6, {
    operation: 'executeQuery',
    query: `UPDATE cortex_mission_claims
SET status = 'attribuée', current_response = 'accepted', assigned_expert_id = $2, claim_token_hash = $3,
    claimed_at = now(), updated_at = now()
WHERE mission_ref = $1 AND status = 'en_attente' AND current_response = 'pending'
  AND current_expert_id = $2 AND deadline_at > now()
  AND to_timestamp($4::double precision) > now()
RETURNING mission_ref, assigned_expert_id, claimed_at;`,
    options: { queryReplacement: '={{ [$json.mission_ref, $json.expert_id, $json.token_hash, $json.exp] }}' },
  }, [-480, 440], { alwaysOutputData: true }),
  node('Action accepter ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.action }}', rightValue: 'accept', operator: { type: 'string', operation: 'equals' },
    }], combinator: 'and' }, options: {},
  }, [-480, 260]),
  node('Refuser offre PostgreSQL', 'n8n-nodes-base.postgres', 2.6, {
    operation: 'executeQuery',
    query: `UPDATE cortex_mission_claims
SET current_response = 'declined', updated_at = now()
WHERE mission_ref = $1 AND status = 'en_attente' AND current_response = 'pending'
  AND current_expert_id = $2 AND deadline_at > now()
  AND to_timestamp($3::double precision) > now()
RETURNING mission_ref;`,
    options: { queryReplacement: '={{ [$json.mission_ref, $json.expert_id, $json.exp] }}' },
  }, [-240, 40], { alwaysOutputData: true }),
  codeNode('Résultat du refus', `
const rows = $input.all().filter(item => item.json.mission_ref);
const claim = $('Vérifier jeton claim').first().json;
return [{ json: { declined: rows.length === 1, mission_ref: claim.mission_ref } }];
`, [0, 40]),
  node('Refus enregistré ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.declined }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [240, 40]),
  node('Réponse refus enregistré', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: 'Refus enregistré. Le dispatch poursuivra la cascade à la fin de la fenêtre SLA de 2 heures.',
    options: { responseCode: 200, responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/plain; charset=utf-8' }] } },
  }, [480, -40]),
  node('Réponse refus trop tard', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: 'Cette offre a expiré ou a déjà été traitée.',
    options: { responseCode: 409, responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/plain; charset=utf-8' }] } },
  }, [480, 120]),
  codeNode('Résultat du verrou', `
const rows = $input.all().filter(item => item.json.mission_ref);
const claim = $('Vérifier jeton claim').first().json;
return [{ json: {
  claimed: rows.length === 1,
  mission_ref: claim.mission_ref,
  expert_id: claim.expert_id,
  mission_row_id: rows[0]?.json.mission_ref || '',
} }];
`, [-240, 440]),
  node('Attribution gagnée ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.claimed }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [0, 440]),
  node('Réponse mandat déjà pourvu', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: '<!doctype html><html lang="fr"><meta charset="utf-8"><title>Mandat déjà pourvu</title><body><h1>Mandat déjà pourvu</h1><p>Cette mission n’est plus disponible. Merci de contacter le Desk e-META LABS.</p></body></html>',
    options: { responseCode: 409, responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/html; charset=utf-8' }] } },
  }, [240, 600]),
  node('Réponse attribution confirmée', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: '<!doctype html><html lang="fr"><meta charset="utf-8"><title>Mandat attribué</title><body><h1>Mandat accepté</h1><p>Votre affectation est confirmée. Votre pack de démarrage est en préparation.</p></body></html>',
    options: { responseCode: 200, responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/html; charset=utf-8' }] } },
  }, [240, 360]),
  node('Webhook page de confirmation claim', 'n8n-nodes-base.webhook', 2.1, {
    httpMethod: 'GET', path: 'claim-mission', responseMode: 'responseNode', options: {},
  }, [-1200, 880], { webhookId: crypto.randomUUID() }),
  codeNode('Préparer confirmation claim', `
const crypto = require('crypto');
const query = $input.first().json.query || {};
const token = String(query.token || '');
const secret = $env.CLAIM_TOKEN_SECRET;
let valid = false;
if (!secret || secret.length < 32) throw new Error('CLAIM_TOKEN_SECRET absent ou trop court.');
const parts = token.split('.');
if (parts.length === 2) {
  const expected = crypto.createHmac('sha256', secret).update(parts[0]).digest();
  const actual = Buffer.from(parts[1], 'base64url');
  if (actual.length === expected.length && crypto.timingSafeEqual(actual, expected)) {
    const payload = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8'));
    valid = Boolean(payload.mission_ref && payload.expert_id && Number.isInteger(payload.exp) && payload.exp > Math.floor(Date.now() / 1000));
  }
}
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const html = valid
  ? '<!doctype html><html lang="fr"><meta charset="utf-8"><title>Confirmer le mandat</title><body><h1>Confirmer la prise en charge</h1><p>En confirmant, vous acceptez le mandat affiché dans l’offre qui vous a été adressée.</p><form method="post" action="/webhook/claim-mission"><input type="hidden" name="token" value="' + escape(token) + '"><button name="action" value="accept" type="submit">Confirmer la prise en charge</button><button name="action" value="decline" type="submit">Refuser l’offre</button></form></body></html>'
  : '<!doctype html><html lang="fr"><meta charset="utf-8"><title>Offre expirée</title><body><h1>Offre invalide ou expirée</h1><p>Contactez le Desk e-META LABS.</p></body></html>';
return [{ json: { valid, html } }];
`, [-960, 880]),
  node('Jeton de page valide ?', 'n8n-nodes-base.if', 2.2, {
    conditions: { options: { caseSensitive: true, typeValidation: 'strict', version: 2 }, conditions: [{
      leftValue: '={{ $json.valid }}', rightValue: true, operator: { type: 'boolean', operation: 'true', singleValue: true },
    }], combinator: 'and' }, options: {},
  }, [-720, 880]),
  node('Réponse formulaire claim', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: '={{ $json.html }}',
    options: {
      responseCode: 200,
      responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/html; charset=utf-8' }] },
    },
  }, [-720, 880]),
  node('Réponse offre expirée', 'n8n-nodes-base.respondToWebhook', 1.5, {
    respondWith: 'text',
    responseBody: '={{ $json.html }}',
    options: {
      responseCode: 403,
      responseHeaders: { entries: [{ name: 'Content-Type', value: 'text/html; charset=utf-8' }] },
    },
  }, [-480, 1040]),
  httpNode('Lire Mission pour pack', 'GET',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [480, 360], {
      sendQuery: true,
      queryParameters: { parameters: [{ name: 'where', value: "={{ '(Code_Mission,eq,' + $('Résultat du verrou').first().json.mission_ref + ')' }}" }] },
      sendHeaders: true, headerParameters: { parameters: [{ name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' }] },
      options: {},
    }),
  codeNode('Générer pack de démarrage', `
const response = $input.first().json;
const rows = response.list || response.records || response.data || [];
const mission = rows.map(r => r.fields ? { ...r, ...r.fields } : r).find(r => (r.Code_Mission || r.mission_ref) === $('Résultat du verrou').first().json.mission_ref);
if (!mission || mission.Id == null) throw new Error('Mission attribuée mais absente de NocoDB; intervention de réconciliation requise.');
const claim = $('Résultat du verrou').first().json;
const pack = [
  'PACK DE DÉMARRAGE AUDIT — e-META LABS',
  'Mission: ' + claim.mission_ref,
  'Secteur: ' + (mission.Secteur || mission.secteur || 'à confirmer'),
  'Client: ' + (mission.Client || 'anonymisé jusqu’au kick-off'),
  'Honoraires réservés: ' + (mission.Montant_Sequestre_Expert_HT || 'voir Grand_Livre_Comptable') + ' HT',
  'Étapes: cadrage, collecte probatoire, analyse, restitution.',
  'Confidentialité: ne transmettre aucune pièce hors des canaux autorisés.',
].join('\\n');
return [{ json: { ...claim, mission_row_id: mission.Id, pack_demarrage: pack, statut: 'Expert_Assigné', statut_assignation: 'attribuée', expert_assigne: claim.expert_id, jalon_3: 'vert' } }];
`, [720, 360]),
  httpNode('Mettre à jour Mission et jalon 3', 'PATCH',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_MISSIONS + '/records' }}",
    [960, 360], {
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' },
        { name: 'Content-Type', value: 'application/json' },
      ] },
      sendBody: true, specifyBody: 'json',
      jsonBody: "={{ [{ Id: $json.mission_row_id, Statut: $json.statut, Statut_Assignation: $json.statut_assignation, Expert_Assigne: $json.expert_assigne, Jalon_3: $json.jalon_3, Pack_Demarrage: $json.pack_demarrage }] }}",
      options: {},
    }),
  httpNode('Lire Expert attribué', 'GET',
    "={{ 'https://base.e-metalabs.com/api/v3/data/' + $env.NOCODB_PROJECT_ID + '/' + $env.NOCODB_TABLE_EXPERTS + '/records' }}",
    [1200, 360], {
      sendQuery: true,
      queryParameters: { parameters: [{ name: 'where', value: "={{ '(expert_id,eq,' + $('Résultat du verrou').first().json.expert_id + ')' }}" }] },
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'xc-token', value: '={{ $env.NOCODB_API_TOKEN }}' }] },
      options: {},
    }),
  codeNode('Préparer pack expert', `
const response = $input.first().json;
const rows = response.list || response.records || response.data || [];
const experts = rows.map(r => r.fields ? { ...r, ...r.fields } : r);
const expertId = $('Résultat du verrou').first().json.expert_id;
const expert = experts.find(row => String(row.expert_id) === String(expertId));
if (!expert || !expert.email || !expert.telegram_chat_id) {
  throw new Error('Canaux de remise du pack manquants pour l’expert attribué ' + expertId);
}
const pack = $('Générer pack de démarrage').first().json.pack_demarrage;
return [{ json: { expert_email: expert.email, telegram_chat_id: expert.telegram_chat_id, mission_ref: $('Résultat du verrou').first().json.mission_ref, pack_demarrage: pack } }];
`, [1440, 360]),
  node('Gmail Pack Expert', 'n8n-nodes-base.gmail', 2.2, {
    resource: 'message',
    operation: 'send',
    sendTo: '={{ $json.expert_email }}',
    subject: "={{ 'Pack de démarrage audit · ' + $json.mission_ref }}",
    emailType: 'text',
    message: '={{ $json.pack_demarrage }}',
    options: {},
  }, [1680, 280]),
  node('Telegram Pack Expert', 'n8n-nodes-base.telegram', 1.2, {
    resource: 'message',
    operation: 'sendMessage',
    chatId: '={{ $json.telegram_chat_id }}',
    text: '={{ $json.pack_demarrage }}',
    additionalFields: {},
  }, [1680, 440]),
  node('Alerte Desk — aucun expert restant', 'n8n-nodes-base.gmail', 2.2, {
    resource: 'message',
    operation: 'send',
    sendTo: '={{ $env.CORTEX_REVIEW_EMAIL }}',
    subject: "={{ 'Escalade SLA — aucun expert restant · ' + $('Normaliser mission').first().json.mission_ref }}",
    emailType: 'text',
    message: "={{ 'Aucun expert du vivier n’a accepté la mission ' + $('Normaliser mission').first().json.mission_ref + ' dans le délai de 2 heures par offre. Une affectation manuelle est requise.' }}",
    options: {},
  }, [240, -480]),
];
const dispatcher = makeWorkflow('Cortex Expert SLA Dispatcher', dispatcherNodes, [
  ['Execute Workflow Trigger', 'Normaliser mission'],
  ['Normaliser mission', 'Lire mission avant dispatch'],
  ['Lire mission avant dispatch', 'Vérifier disponibilité mission'],
  ['Vérifier disponibilité mission', 'Initialiser verrou mission'],
  ['Initialiser verrou mission', 'Interroger vivier NocoDB'],
  ['Interroger vivier NocoDB', 'Classer experts'],
  ['Classer experts', 'Loop Over Items'],
  ['Loop Over Items', 'Préparer offre', 0],
  ['Loop Over Items', 'Alerte Desk — aucun expert restant', 1],
  ['Préparer offre', 'Ouvrir fenêtre SLA'],
  ['Ouvrir fenêtre SLA', 'Signer lien de réclamation'],
  ['Signer lien de réclamation', 'WhatsApp Expert'],
  ['Signer lien de réclamation', 'Telegram Expert'],
  ['Signer lien de réclamation', 'Wait 2 heures SLA'],
  ['Wait 2 heures SLA', 'Lire verrou SLA'],
  ['Lire verrou SLA', 'Contrôler attribution'],
  ['Contrôler attribution', 'Mission attribuée ?'],
  ['Mission attribuée ?', 'Lire Mission attribuée', 0],
  ['Mission attribuée ?', 'Rendre indisponible temporairement', 1],
  ['Rendre indisponible temporairement', 'Loop Over Items'],
  ['Lire Mission attribuée', 'Préparer jalon 3'],
  ['Préparer jalon 3', 'Clôturer dispatch NocoDB'],
  ['Webhook claim-mission', 'Vérifier jeton claim'],
  ['Webhook page de confirmation claim', 'Préparer confirmation claim'],
  ['Préparer confirmation claim', 'Jeton de page valide ?'],
  ['Jeton de page valide ?', 'Réponse formulaire claim', 0],
  ['Jeton de page valide ?', 'Réponse offre expirée', 1],
  ['Vérifier jeton claim', 'Jeton claim valide ?'],
  ['Jeton claim valide ?', 'Action accepter ?', 0],
  ['Jeton claim valide ?', 'Réponse lien invalide', 1],
  ['Action accepter ?', 'Claim atomique PostgreSQL', 0],
  ['Action accepter ?', 'Refuser offre PostgreSQL', 1],
  ['Refuser offre PostgreSQL', 'Résultat du refus'],
  ['Résultat du refus', 'Refus enregistré ?'],
  ['Refus enregistré ?', 'Réponse refus enregistré', 0],
  ['Refus enregistré ?', 'Réponse refus trop tard', 1],
  ['Claim atomique PostgreSQL', 'Résultat du verrou'],
  ['Résultat du verrou', 'Attribution gagnée ?'],
  ['Attribution gagnée ?', 'Réponse attribution confirmée', 0],
  ['Attribution gagnée ?', 'Réponse mandat déjà pourvu', 1],
  ['Réponse attribution confirmée', 'Lire Mission pour pack'],
  ['Lire Mission pour pack', 'Générer pack de démarrage'],
  ['Générer pack de démarrage', 'Mettre à jour Mission et jalon 3'],
  ['Mettre à jour Mission et jalon 3', 'Lire Expert attribué'],
  ['Lire Expert attribué', 'Préparer pack expert'],
  ['Préparer pack expert', 'Gmail Pack Expert'],
  ['Préparer pack expert', 'Telegram Pack Expert'],
]);

save('cortex-abm-inbound.json', inbound);
save('cortex-billing-escrow.json', billing);
save('cortex-expert-dispatcher.json', dispatcher);
