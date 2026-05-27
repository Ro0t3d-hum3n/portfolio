# Habibul Bashar Bappi — Portfolio

Modern, bilingual (EN/DE) personal portfolio site built with **Next.js 14**, **TypeScript**, and deployed on **Vercel**.

## Features
- 🌐 English / German language toggle
- 🌙 Dark theme with glass morphism design
- 📱 Fully responsive
- 📧 Working contact form (via Nodemailer)
- ⚡ Fast, SEO-ready

## Local Development

```bash
npm install
cp .env.example .env.local
# Fill in SMTP credentials in .env.local
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/R0ot3d-hum3n/HereIsBappi.git
git push -u origin main --force
```

### 2. Import in Vercel
1. Go to vercel.com → Add New Project
2. Import your HereIsBappi GitHub repo
3. Framework: Next.js (auto-detected)
4. Add Environment Variables (from .env.example):
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USER
   - SMTP_PASS
   - CONTACT_EMAIL
5. Click Deploy

### 3. Custom Domain
In Vercel project → Settings → Domains → add your domain.

## Contact Form Setup
The form uses Nodemailer. Easiest setup is Gmail with an App Password:
1. Enable 2-factor auth on Google account
2. Go to myaccount.google.com/apppasswords
3. Create an app password for "Mail"
4. Use that as SMTP_PASS in Vercel env vars
