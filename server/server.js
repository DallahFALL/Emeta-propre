// server/server.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Ajv = require('ajv').default;
const cors = require('cors');
const nodemailer = require('nodemailer');
const { OpenAIApi, Configuration } = require('openai');
const twilioLib = require('twilio');
const fse = require('fs-extra');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// OpenAI client
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

// AJV loader
const ajv = new Ajv();

// Load schemas into memory
const SCHEMA_DIR = path.join(__dirname, 'schemas');
const schemas = {};
if (fs.existsSync(SCHEMA_DIR)) {
  for (const fname of fs.readdirSync(SCHEMA_DIR)) {
    if (fname.endsWith('.json')) {
      const key = path.basename(fname, '.schema.json') || path.basename(fname, '.json').replace('.schema','');
      try {
        const content = fs.readFileSync(path.join(SCHEMA_DIR, fname), 'utf8');
        const json = JSON.parse(content);
        schemas[key] = json;
      } catch(e){
        console.warn('schema load error', fname, e.message);
      }
    }
  }
}

// Utility: load prompt template file
function loadPrompt(pack, lang='fr'){
  const p1 = path.join(__dirname,'..','frontend','prompts', `${pack}.${lang}.txt`);
  const p2 = path.join(__dirname,'prompts', `${pack}.${lang}.txt`);
  if (fs.existsSync(p1)) return fs.readFileSync(p1,'utf8');
  if (fs.existsSync(p2)) return fs.readFileSync(p2,'utf8');
  return null;
}

// simple template replacement
function renderTemplate(tpl, ctx){
  return tpl.replace(/\{\{\s*([\w\.]+)\s*\}\}/g, (m,k)=>{
    const parts = k.split('.');
    let cur = ctx;
    for (const p of parts){
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
      else return '';
    }
    return String(cur);
  });
}

// Validate payload by pack
function validatePayload(pack, payload){
  const schema = schemas[pack];
  if(!schema) return { valid: true };
  const validate = ajv.compile(schema);
  const ok = validate(payload);
  return { valid: ok, errors: validate.errors };
}

// POST /api/generate  { pack, lang, payload }
app.post('/api/generate', async (req, res) => {
  try{
    const { pack, lang = 'fr', payload } = req.body;
    if(!pack || !payload) return res.status(400).json({ error: 'pack and payload required' });

    // validate
    const { valid, errors } = validatePayload(pack, payload);
    if(!valid) return res.status(400).json({ error: 'validation_failed', details: errors });

    // load prompt template
    const tpl = loadPrompt(pack, lang) || loadPrompt(pack,'fr');
    if(!tpl) return res.status(500).json({ error: 'prompt_missing' });

    // render prompt
    const finalPrompt = renderTemplate(tpl, { payload, lang });

    // Call OpenAI (chat completion)
    const model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo';
    const response = await openai.createChatCompletion({
      model,
      messages: [
        { role: 'system', content: `You are e-META assistant. Respond in ${lang}. Be concise and actionable.` },
        { role: 'user', content: finalPrompt }
      ],
      max_tokens: 700,
      temperature: 0.2
    });

    const output = response.data?.choices?.[0]?.message?.content || '';
    return res.json({ output });
  } catch (err) {
    console.error('generate error', err?.response?.data || err.message);
    return res.status(500).json({ error: 'server_error', details: err?.message || err });
  }
});

// Example endpoint to send email
app.post('/api/send-email', async (req, res) => {
  const { subject, html, to } = req.body;
  if(!subject || !html) return res.status(400).json({ error: 'subject and html required' });
  try{
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    const sendTo = to || process.env.EMAIL_TO;
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: sendTo,
      subject,
      html
    });
    return res.json({ ok: true });
  } catch(err){
    console.error('email error', err);
    return res.status(500).json({ error: 'email_error', details: err.message });
  }
});

// Example WhatsApp via Twilio
app.post('/api/send-whatsapp', async (req, res) => {
  const { to, body } = req.body;
  if(!to || !body) return res.status(400).json({ error: 'to and body required' });
  try{
    const client = twilioLib(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${to}`,
      body
    });
    return res.json({ sid: message.sid });
  } catch(err){
    console.error('twilio error', err);
    return res.status(500).json({ error: 'twilio_error', details: err.message });
  }
});

// Serve a minimal frontend (optional)
app.use('/frontend', express.static(path.join(__dirname,'..','frontend')));

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('Server running on', port));
