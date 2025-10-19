// server/server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const Ajv = require('ajv');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static (assumes frontend/ relative)
app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

// Load schemas
const schemaDir = path.join(__dirname, '..', 'schemas');
const ajv = new Ajv();
function loadSchema(packName){
  const p = path.join(schemaDir, `${packName}.schema.json`);
  if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p,'utf8'));
  return null;
}

// helper: load prompt template
function loadPrompt(pack, lang){
  const candidates = [
    path.join(__dirname, '..', 'frontend', 'prompts', `${pack}.${lang}.txt`),
    path.join(__dirname, '..', 'frontend', 'prompts', `${pack}.${lang}.txt`),
    path.join(__dirname, '..', 'frontend', 'prompts', `${pack}.fr.txt`)
  ];
  for(const c of candidates) if(fs.existsSync(c)) return fs.readFileSync(c,'utf8');
  return null;
}

// POST /api/generate
app.post('/api/generate', async (req, res)=>{
  const {pack, payload, lang='fr'} = req.body || {};
  if(!pack || !payload) return res.status(400).json({error:'Missing pack or payload'});

  const schema = loadSchema(pack);
  if(schema){
    const validate = ajv.compile(schema);
    const ok = validate(payload);
    if(!ok) return res.status(400).json({error:'Validation failed', details: validate.errors});
  }

  // build prompt
  const tpl = loadPrompt(pack, lang) || `Process payload: {payload}`;
  const prompt = tpl.replace('{payload}', JSON.stringify(payload)).replace('{lang}', lang);

  // Example OpenAI call (replace with official client / endpoint you use)
  if(!process.env.OPENAI_API_KEY){
    // simulate/dummy response for local dev
    return res.json({ok:true, prompt, simulated:true, result:{
      summary:"Simulation: remplacer par appel OpenAI",
      actions:["Action 1","Action 2","Action 3"],
      timeline:["Week 1","Week 2","Week 3"],
      budget_estimate:"~1000 USD"
    }});
  }

  try{
    // Minimal example using OpenAI REST API (text generation) — adapt depending on model & API
    const openaiResp = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini', // change as needed
      messages:[{role:'system',content:'You are e-META assistant.'},{role:'user',content:prompt}],
      max_tokens:800
    }, {
      headers:{ Authorization:`Bearer ${process.env.OPENAI_API_KEY}` }
    });

    const aiText = openaiResp.data.choices?.[0]?.message?.content || JSON.stringify(openaiResp.data);
    // Optionally parse JSON from aiText if prompt requires JSON format
    let parsed = aiText;
    try{ parsed = JSON.parse(aiText); }catch(e){ /* keep raw text */ }

    return res.json({ok:true, prompt, result:parsed});
  }catch(err){
    console.error('OpenAI error', err.response?.data || err.message);
    return res.status(500).json({error:'AI call failed', details: err.response?.data || err.message});
  }
});

// Email example route (nodemailer)
app.post('/api/send-email', async (req,res)=>{
  const {to, subject, html} = req.body;
  if(!to || !subject) return res.status(400).json({error:'missing to/subject'});
  if(!process.env.SMTP_HOST) return res.status(500).json({error:'SMTP not configured. fill .env'});

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT||587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try{
    await transporter.sendMail({from:process.env.EMAIL_FROM, to, subject, html});
    res.json({ok:true});
  }catch(e){
    console.error(e);
    res.status(500).json({error:'send failed', detail:e.message});
  }
});

// WhatsApp via Twilio example route
app.post('/api/send-whatsapp', async (req,res)=>{
  const {to, body} = req.body;
  if(!to || !body) return res.status(400).json({error:'missing to/body'});
  if(!process.env.TWILIO_SID) return res.status(500).json({error:'TWILIO not configured'});

  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_TOKEN;
  const fromWhats = process.env.TWILIO_WHATS_FROM; // like 'whatsapp:+1415...'

  try{
    const resp = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      new URLSearchParams({
        From: fromWhats,
        To: `whatsapp:${to}`,
        Body: body
      }), {
        auth: { username: accountSid, password: authToken }
    });
    res.json({ok:true, twilio:resp.data});
  }catch(err){
    console.error('twilio err', err.response?.data || err.message);
    res.status(500).json({error:'twilio failed', detail: err.response?.data || err.message});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
