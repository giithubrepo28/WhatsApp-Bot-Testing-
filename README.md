# WhatsApp Auto Response Bot

A free-first, testable WhatsApp auto-response bot starter built with Next.js.

## Included now
- Demo auto replies with keyword/FAQ rules
- English, Urdu and Roman Urdu fallback replies
- Bot on/off control
- Welcome message field
- Responsive mobile UI
- Secure `.env.example` for future WhatsApp Cloud API integration
- GitHub Actions CI using Node 24

## Important
The demo does **not** send real WhatsApp messages. Real delivery requires a WhatsApp Business Platform/Cloud API account and credentials. Never commit access tokens or app secrets.

## Run locally
```bash
npm install
npm run dev
```

## Roadmap
1. Real webhook verification and inbound message parsing
2. Outbound WhatsApp reply adapter
3. Configurable FAQ/keyword rules
4. Business hours and away mode
5. Conversation logs with privacy controls
6. Optional AI provider adapter
7. Rate limits and abuse protection
8. Deployment and end-to-end testing
