# Modern Sleek Software Engineer Portfolio ⚡

A modern, sleek, high-performance web portfolio designed for software engineers. Features **English/Italian language switching**, **Dark/Light theme switching**, a **centralized configuration file**, and **GitHub Pages static deployment compatibility**.

---

## ✨ Features

- 🌓 **Theme Switcher**: Dark mode (Obsidian / Neon Cyan) & Light mode (Slate / Indigo Glow) with smooth transition and local storage persistence.
- 🌐 **Language Switcher (EN / IT)**: English & Italian support out of the box for all sections, titles, experiences, competences, and projects.
- ⚙️ **Data-Driven Configuration**: All personal info, work timeline, skills matrix, projects, education, social links, and interface texts live in **`src/config/portfolio.config.js`**.
- 🚀 **GitHub Pages Ready**: Configured with Vite relative base paths (`base: './'`) and an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).
- 🎨 **Modern Aesthetics**: Built with React, Tailwind CSS, Framer Motion animations, glassmorphism cards, and Lucide React icons.

---

## 🛠️ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 📝 Customizing Your Content

To customize or add new experiences, skills, and projects, open **`src/config/portfolio.config.js`**:

### 1. Adding a New Experience
Add an object to `portfolioConfig.experiences`:
```javascript
{
  id: "exp-new",
  role: { en: "Senior AI Engineer", it: "Senior AI Engineer" },
  company: "Tech Corp",
  period: { en: "2024 - Present", it: "2024 - Presente" },
  location: "Remote",
  description: { en: "Summary in English...", it: "Sommario in Italiano..." },
  achievements: {
    en: ["Built X...", "Optimized Y..."],
    it: ["Sviluppato X...", "Ottimizzato Y..."]
  },
  techStack: ["React", "Python", "FastAPI", "AWS"]
}
```

### 2. Adding a New Personal Project
Add an object to `portfolioConfig.projects`:
```javascript
{
  id: "project-new",
  title: "My Awesome App",
  category: "Fullstack",
  featured: true,
  tagline: { en: "Short tagline...", it: "Breve descrizione..." },
  description: { en: "Detailed description...", it: "Descrizione dettagliata..." },
  image: "./assets/project1.jpg", // Place your image in public/assets/
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  liveUrl: "https://my-app.com",
  githubUrl: "https://github.com/user/repo",
  metrics: { en: "10k+ Users", it: "10k+ Utenti" }
}
```

---

## 📦 Deployment to GitHub Pages

### Method 1: Automatic GitHub Actions (Recommended)
1. Push this repository to GitHub.
2. In your GitHub repository settings, navigate to **Pages** -> **Source** and select **GitHub Actions**.
3. Every push to `main` or `master` will build and deploy automatically!

### Method 2: Manual Static Build
```bash
npm run build
```
The output will be generated inside the `dist/` directory, which can be uploaded directly to GitHub Pages, Netlify, Vercel, or any web server.
