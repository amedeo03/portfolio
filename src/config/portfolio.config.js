/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ====================================================================
 * Modify this file to easily update personal details, timeline entries,
 * competences, personal projects, and language translations.
 * Both English ('en') and Italian ('it') texts are supported throughout.
 */

export const portfolioConfig = {
  // Personal & Bio Information
  personal: {
    name: "Amedeo Marino",
    title: {
      en: "Software Engineering Master Student",
      it: "Studente Magistrale di Ingegneria del Software"
    },
    location: "Turin, Italy / Remote Worldwide",
    email: "amedeomarino03@gmail.com",
    resumeUrl: {
      en: "./amedeo_marino_cv_en.pdf",
      it: "./amedeo_marino_cv_it.pdf"
    },
    bio: {
      en: "Software Engineering Master Student at Politecnico di Torino, passionate about backend engineering - code, architecture, design and optimization.",
      it: "Studente Magistrale di Ingegneria del Software al Politecnico di Torino appassionato di ingegnerizzazione del backend - codice, architettura, design ed ottimizzazione."
    },
    socials: {
      github: "https://github.com/amedeo03",
      linkedin: "https://www.linkedin.com/in/amedeo-marino/",
      email: "mailto:amedeomarino03@gmail.com"
    }
  },

  /**
   * Unified Experience & Education Timeline
   * ----------------------------------------
   * All entries share the same schema. Use the `badge` field to label
   * each card however you like (e.g. "Work Experience", "Education",
   * "Internship", "Award", "Open Source", etc.).
   *
   * badge.icon   — any Lucide icon name: "Briefcase" | "GraduationCap" | "Code2" | "Award" | "Rocket" | ...
   * badge.color  — tailwind color key: "cyan" | "violet" | "emerald" | "amber" | "rose" | "sky"
   *
   * Optional fields (omit if not applicable):
   *   subtitle    — second line under the title (e.g. company or institution)
   *   location    — shown next to subtitle with a pin icon
   *   description — paragraph text below the header
   *   achievements — bulleted list (bilingual)
   *   techStack   — pill tags at the bottom
   */
  timeline: [
    {
      id: "tl-1",
      badge: {
        label: { en: "Award", it: "Premio" },
        icon: "Award",
        color: "cyan"
      },
      title: {
        en: "Finalist at Ifab 4 Next Generation Talents 2026",
        it: "Finalista Ifab 4 Next Generation Talents 2026"
      },
      subtitle: "Lavazza",
      period: { en: "march 2026 - june 2026", it: "marzo 2026 - giugno 2026" },
      location: "Turin / Bologna, Italy",
      description: {
        en: "Participation in the Ifab 4 Next Generation Talents event focussed on innovative projects and young talents.",
        it: "Partecipazione all'evento Ifab 4 Next Generation Talents concentrato su progetti innovativi svolti da giovani talenti."
      },
      achievements: {
        en: [
          "Designed a market and climate intelligence platform designed to support decision-making along the coffee supply chain.",
          "Talked with directly impacted stakeholders and IT specialists at Lavazza to evaluate technical and non-technical details.",
          "Worked together with other students from different field of expertise."
        ],
        it: [
          "Costruito una piattaforma di intelligence di mercato e climatica per aiutare scelte fatte sulla supply chain del caffé.",
          "Confronti con gli stakeholder e specialisti IT in Lavazza per discutere dettagli tecnici e non.",
          "Lavorato in squadra con altri studenti universitari di diverse specializzazioni."
        ]
      },
      techStack: ["React", "TypeScript", "Node.js", "Python", "Pandas"]
    },
    {
      id: "tl-2",
      badge: {
        label: { en: "Education", it: "Istruzione" },
        icon: "GraduationCap",
        color: "violet"
      },
      title: {
        en: "Master's Degree in Software Engineering",
        it: "Laurea Magistrale in Ingegneria del Software"
      },
      subtitle: "Politecnico di Torino",
      period: { en: "2025 - Present", it: "2025 - Presente" },
      description: {
        en: "Specializing in information systems, project management and enterprise-level software design, while expanding my technical skill stack through the study of system programming, cybersecurity and web development.",
        it: "Specializzazione in sistemi informativi, gestione progetti e design enterprise. Continua formazione tecnica attraverso lo studio di programmazione a basso livello, cybersicurezza e sviluppo web."
      }
    },
    {
      id: "tl-3",
      badge: {
        label: { en: "Internship", it: "Tirocinio" },
        icon: "Briefcase",
        color: "cyan"
      },
      title: {
        en: "AI Software Engineer",
        it: "Ingegnere del Software AI"
      },
      subtitle: "Assist s.p.a.",
      period: { en: "march 2025 - july 2025", it: "marzo 2025 - luglio 2025" },
      location: "Beinasco, Italy",
      description: {
        en: "Curricular internship done during the third year of university, consisting of 250 hours of in-office work.",
        it: "Tirocinio curricolare svolto durante il terzo anno di studi universitari, consistente di 250 ore lavoro in ufficio."
      },
      achievements: {
        en: [
          "Contributed to the design and implementation of an LLM-based chatbot for customer support.",
          "Designed and implemented REST API surfaces for the agent tooling.",
          "Took part in regular inside and outside meetings to give and receive feedback on the project."
        ],
        it: [
          "Contribuito al design ed implementazione di un chatbot basato su LLM per il supporto clienti.",
          "Progettata l'interfaccia API di accesso ai database tramite chiamate agentiche.",
          "Preso parte regolarmente a meeting inter e infra aziendali per dare e ricevere feedback sul progetto."
        ]
      },
      techStack: ["C#", "DotNet", "N8N", "OpenAI APIs"]
    },
    {
      id: "tl-4",
      badge: {
        label: { en: "Education", it: "Istruzione" },
        icon: "GraduationCap",
        color: "violet"
      },
      title: {
        en: "Bachelor's Degree in Computer Engineering",
        it: "Laurea Triennale in Ingegneria Informatica"
      },
      subtitle: "Politecnico di Torino",
      period: { en: "2022 - 2025", it: "2022 - 2025" },
      description: {
        en: "Wide engineering program covering algorithms, data structures and databases.",
        it: "Ampia formazione ingegneristica di base, con approfondimenti relativi ad algoritmi, strutture dati e database."
      }
    }
  ],

  // Competences & Skill Matrix (3 Categories: Languages, Frameworks, DevOps)
  competences: [
    {
      category: { en: "Languages", it: "Linguaggi" },
      icon: "Code2",
      skills: [
        "Python",
        "C",
        "Rust",
        "ARM assembly",
        "RV assembly",
        "Java",
        "C#",
        "Go",
        "JavaScript"
      ]
    },
    {
      category: { en: "Frameworks", it: "Framework" },
      icon: "Layers",
      skills: [
        "DotNet",
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "N8N"
      ]
    },
    {
      category: { en: "DevOps", it: "DevOps" },
      icon: "Cloud",
      skills: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Linux / Bash",
        "SQLite",
        "MongoDB"
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "project-4",
      title: "GeoRust",
      description: {
        en: "Asynchronous client-server application written in Rust to keep track of clients' positions, with a focus on code performance.",
        it: "Applicazione client-server asincrona scritta in Rust che permette di tracciare la posizione dei client, con focus sulle performance del codice."
      },
      image: "./assets/georust.png",
      techStack: ["Rust", "Tokio", "WebSocket"],
      githubUrl: "https://github.com/PdS2026/G19"
    },
    {
      id: "project-3",
      title: "Lordran Express",
      description: {
        en: "Web minigame where the player has to travel through the fictional Lordran region, created for the exam of Web Applications I.",
        it: "Videogioco web dove il giocatore deve viaggiare attraverso il mondo fantastico di Lordran. Creato per il sostenimento dell'esame di Applicazioni Web I."
      },
      image: "./assets/lordran_express.svg",
      techStack: ["React", "TypeScript", "NodeJS"],
      githubUrl: "https://github.com/amedeo03/Lordran-Express"
    },
    {
      id: "project-2",
      title: "BeanSight",
      description: {
        en: "Market and climate intelligence platform designed to support decision-making along the coffee supply chain, integrating climate, logistics, production and geopolitical data.",
        it: "Piattaforma di intelligence disegnata per supportare le decisioni sulla filiera del caffé Lavazza, intergrante dati climatici, logistici, di produzione e geopolitici."
      },
      image: "./assets/beansight.jpg",
      techStack: ["React", "TypeScript", "Python", "Pandas"],
      githubUrl: "https://github.com/lisagiacob/LavazzaChallenge"
    },
    {
      id: "project-1",
      title: "EZShop",
      description: {
        en: "A FastAPI backend REST server designed for a small market. Developed through practical application of the Waterfall model.",
        it: "Un backend FastAPI creato per la gestione di un piccolo negozio. Sviluppato tramite l'applicazione pratica del modello Waterfall."
      },
      image: "./assets/ezshop.png",
      techStack: ["Python", "FastAPI", "SQLite"],
      githubUrl: "https://github.com/amedeo03/EZShop"
    },
    {
      id: "project-0",
      title: "AVA",
      description: {
        en: "Customer care chatbot implementation for Assist SPA, using OpenAI models, N8N and the Dotnet framework.",
        it: "Chatbot LLM implementato durante il tirocinio in Assist SPA, utilizzando modelli OpenAI, N8N e il framework Dotnet"
      },
      image: "./assets/ava.png",
      techStack: ["C#", "Dotnet", "N8N", "OpenAI APIs"],
    }
  ],

  // Language Dictionary / Interface Translations
  translations: {
    en: {
      nav: {
        home: "Home",
        skills: "Competences",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello, I'm",
        ctaProjects: "Explore Projects",
        ctaContact: "Get In Touch",
        ctaResume: "Download CV"
      },
      sections: {
        skillsTitle: "Technical Skills",
        experienceTitle: "Experience & Education",
        projectsTitle: "Featured Projects",
        contactTitle: "Let's Connect!"
      },
      experience: {
        keyAchievements: "Key Accomplishments & Impact:"
      },
      projects: {
        viewDemo: "Live Preview",
        viewGithub: "View Source"
      },
      contact: {
        directContact: "Direct Contact Info",
        socialProfiles: "Social Profiles",
        nameLabel: "Your Name",
        namePlaceholder: "e.g. John Doe",
        emailLabel: "Your Email",
        emailPlaceholder: "e.g. john@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project, timeline, or inquiry...",
        sendButton: "Send Message",
        sendingButton: "Sending...",
        successMessage: "Thank you! Your message has been sent successfully. I will get back to you shortly."
      },
      footer: {
        rights: "Obviously open source",
        builtWith: "Crafted with React, Tailwind CSS & Vite for GitHub Pages."
      }
    },

    it: {
      nav: {
        home: "Home",
        skills: "Competenze",
        experience: "Esperienze",
        projects: "Progetti",
        contact: "Contatti"
      },
      hero: {
        greeting: "Ciao, sono",
        ctaProjects: "Scopri i Progetti",
        ctaContact: "Contattami",
        ctaResume: "Scarica il CV"
      },
      sections: {
        skillsTitle: "Competenze Tecniche",
        experienceTitle: "Esperienze ed Istruzione",
        projectsTitle: "Progetti In Evidenza",
        contactTitle: "Mettiamoci In Contatto"
      },
      experience: {
        keyAchievements: "Principali Risultati e Impatto:"
      },
      projects: {
        viewDemo: "Anteprima Live",
        viewGithub: "Codice Sorgente"
      },
      contact: {
        directContact: "Informazioni di Contatto Diretto",
        socialProfiles: "Profilo Social",
        nameLabel: "Il Tuo Nome",
        namePlaceholder: "es. Mario Rossi",
        emailLabel: "La Tua Email",
        emailPlaceholder: "es. mario.rossi@example.com",
        messageLabel: "Messaggio",
        messagePlaceholder: "Raccontami del tuo progetto, tempistiche o richiesta...",
        sendButton: "Invia Messaggio",
        sendingButton: "Invio in corso...",
        successMessage: "Grazie! Il tuo messaggio è stato inviato con successo. Ti risponderò a breve."
      },
      footer: {
        rights: "Ovviamente open source.",
        builtWith: "Sviluppato con React, Tailwind CSS & Vite per GitHub Pages."
      }
    }
  }
};
