'use client';

import { useMemo, useState } from 'react';

const faqs = [
  { q: 'price', a: 'Thanks for your message! Please share which product or service you are interested in and we will send the latest price.' },
  { q: 'timing', a: 'Our business hours are Monday to Saturday, 10:00 AM to 8:00 PM.' },
  { q: 'hello', a: 'Assalam-o-Alaikum! 👋 Welcome. How can we help you today?' },
  { q: 'hi', a: 'Hello! 👋 How can we help you today?' },
  { q: 'help', a: 'Sure! Send your question and our auto-response bot will try to help.' }
];

function autoReply(message: string, language: string) {
  const text = message.toLowerCase();
  const hit = faqs.find(x => text.includes(x.q));
  if (hit) return hit.a;
  if (language === 'Roman Urdu') return 'Shukriya aapke message ka! 😊 Aap apna sawal detail mein bhej dein, hum madad karne ki koshish karenge.';
  if (language === 'Urdu') return 'آپ کے پیغام کا شکریہ! 😊 اپنا سوال تفصیل سے بھیج دیں، ہم مدد کرنے کی کوشش کریں گے۔';
  return 'Thanks for your message! 😊 Please share a little more detail so we can help you.';
}

export default function Home() {
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('English');
  const [reply, setReply] = useState('');
  const [enabled, setEnabled] = useState(true);
  const [saved, setSaved] = useState<string[]>([]);
  const preview = useMemo(() => message ? autoReply(message, language) : 'Your automatic reply will appear here.', [message, language]);

  function generate() {
    if (!enabled) return setReply('Bot is currently paused.');
    if (!message.trim()) return setReply('Please enter a test WhatsApp message first.');
    setReply(autoReply(message, language));
  }

  return <main className="shell">
    <header><div><p className="eyebrow">FREE-FIRST • DEMO MODE</p><h1>WhatsApp Auto Response Bot</h1><p className="muted">Test automatic replies before connecting a real WhatsApp Business number.</p></div><button className={enabled ? 'status on' : 'status'} onClick={() => setEnabled(v => !v)}>{enabled ? '● Bot ON' : '○ Bot OFF'}</button></header>
    <section className="grid">
      <div className="card"><h2>Bot settings</h2><label>Reply language<select value={language} onChange={e => setLanguage(e.target.value)}><option>English</option><option>Roman Urdu</option><option>Urdu</option></select></label><label>Business welcome message<textarea defaultValue="Assalam-o-Alaikum! 👋 Welcome. How can we help you today?" /></label><div className="chips"><span>FAQ replies</span><span>Welcome message</span><span>Business hours</span><span>Fallback reply</span></div></div>
      <div className="card"><h2>Live test</h2><label>Incoming WhatsApp message<textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Try: Hi, what is your price?" /></label><button className="primary" onClick={generate}>Generate Auto Reply</button><div className="preview"><small>BOT REPLY</small><p>{reply || preview}</p></div><button className="secondary" onClick={() => { if (reply) setSaved([...saved, reply]); }}>Save reply</button></div>
    </section>
    <section className="card"><div className="row"><div><h2>Free features</h2><p className="muted">Demo mode works without paid services or API keys.</p></div><span className="badge">{saved.length} saved</span></div><div className="features"><article><b>⚡ Instant rules</b><span>FAQ and keyword responses</span></article><article><b>🌐 3 languages</b><span>English, Urdu, Roman Urdu</span></article><article><b>🕐 Business hours</b><span>Ready for away messages</span></article><article><b>🔐 Secure by design</b><span>Secrets stay in environment variables</span></article></div></section>
    <footer>Real WhatsApp delivery requires Meta WhatsApp Business Platform credentials. This demo does not send messages to real users.</footer>
  </main>;
}
