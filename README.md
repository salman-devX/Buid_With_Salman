# 💼 Salman Ahmad — Portfolio

A modern, full-stack developer portfolio built with **Next.js 14**, **TypeScript** and **Tailwind CSS**, presenting my work, skills and experience as a Full-Stack Web Developer & AI enthusiast.

## 🌐 Live Demo

**[Visit Portfolio](https://itxmyportfolio.vercel.app/)**

## ✨ Features

* 🏠 Multi-page structure — Home, About, Skills, Projects, Experience, Contact
* 🎨 Dark, glassmorphism-inspired UI with subtle glow and gradient accents
* 🎬 Scroll-reveal and entrance animations via Framer Motion
* 📱 Fully responsive — desktop, tablet and mobile
* 🧩 Reusable, data-driven components (projects, skills, experience, services)
* 📬 Contact form with client-side validation, integration-ready for Formspree/EmailJS/Resend
* 🕸️ Sticky responsive navbar with active-route highlighting
* 🔍 SEO — dynamic metadata, Open Graph tags, sitemap, robots.txt
* ♿ Accessible — semantic HTML, focus states, `prefers-reduced-motion` support
* 📄 Downloadable resume

## 🛠️ Tech Stack

### Frontend

* Next.js 14 (App Router)
* React 18
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React Icons

### Tooling

* Git & GitHub
* Vercel (deployment)
* ESLint

## 📁 Project Structure

```text
salman-portfolio/
├── src/
│   ├── app/              Routes: /, /about, /skills, /projects, /experience, /contact
│   ├── components/
│   │   ├── layout/       Navbar, Footer
│   │   ├── sections/     Hero, About, Skills, Experience, Projects,
│   │   │                 Services, WhyWorkWithMe, GithubSection, Contact
│   │   └── ui/            Reusable Button, SectionHeading
│   ├── data/              Editable content: profile, skills, projects, experience, education, services
│   └── lib/               Shared helpers
├── public/                 Static assets (favicon, resume.pdf, og-image.png)
├── package.json
└── README.md
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/salman-devX/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app runs on:

```text
http://localhost:3000
```

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need:

```bash
cp .env.example .env.local
```

* `NEXT_PUBLIC_SITE_URL` — used for SEO metadata, sitemap and Open Graph tags
* `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — connects the contact form to Formspree (or swap in EmailJS/Resend)

Never commit real secrets such as API keys — keep them in `.env.local`, which is git-ignored.

## 🏗️ Build

```bash
npm run build
npm run start
```

## 🚀 Deployment

Deployed on **Vercel**, connected directly to this GitHub repository — every push to `main` redeploys automatically.

1. Push the repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Add the environment variables above in Project Settings
4. Deploy

## 🎯 Purpose

Built to present my full-stack and AI project work — including Fruit Vision AI, AutoNova and Faizan Moto Hub — in a single, professional, easily maintainable site.

## 👨‍💻 Developer

**Salman Ahmad**

Full-Stack Web Developer • AI Enthusiast

### 🔗 Links

* 🌐 Live Portfolio: https://itxmyportfolio.vercel.app/
* 🐙 GitHub: https://github.com/salman-devX
* 💼 LinkedIn: https://linkedin.com/in/salmanahmad-tech

## 📄 License

This project is created and maintained by Salman Ahmad.