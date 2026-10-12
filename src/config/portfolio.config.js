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
      en: "Master's student in Software Engineering at Politecnico di Torino, focused on distributed cloud infrastructure and the development of LLM-integrated systems. Currently looking for an internship with a master's thesis in cloud engineering, where I can also apply my experience with generative AI, starting from March 2027. Open to relocation.",
      it: "Studente magistrale in Ingegneria del Software presso il Politecnico di Torino, focalizzato su infrastrutture cloud distribuite e sviluppo di sistemi integrati con LLM. Attualmente in cerca di un tirocinio con tesi magistrale in ambito cloud engineering, dove poter applicare anche la mia esperienza con IA generativa, a partire da marzo 2027. Disponibile al trasferimento."
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
      period: { en: "Mar 2026 - Jun 2026", it: "Mar 2026 - Giu 2026" },
      location: { en: "Turin / Bologna, Italy", it: "Torino / Bologna, Italia" },
      description: {
        en: "Designed BeanSight, a dashboard that aggregates public data sources to provide descriptive analytics supporting decision-making in the coffee supply chain, reaching the final stage of Ifab 4 Next Generation Talents.",
        it: "Progettato BeanSight, una dashboard che aggrega fonti di dati pubbliche per fornire analisi descrittive a supporto delle decisioni sulla filiera del caffè, arrivando alla fase finale di Ifab 4 Next Generation Talents."
      },
      achievements: {
        en: [
          "Led a multidisciplinary team of 6 students, communicating with technical and non-technical stakeholders, to deliver a product that removed the dependency on slow email- and spreadsheet-based processes."
        ],
        it: [
          "Guidato un team multidisciplinare di 6 studenti, comunicando con stakeholder tecnici e non, per arrivare ad un prodotto che rimuovesse la dipendenza da lenti processi basati su mail e fogli di calcolo."
        ]
      },
      techStack: ["React", "TypeScript", "Python", "Pandas"]
    },
    {
      id: "tl-2",
      badge: {
        label: { en: "Education", it: "Istruzione" },
        icon: "GraduationCap",
        color: "violet"
      },
      title: {
        en: "M.Sc. in Software Engineering",
        it: "Laurea Magistrale in Ingegneria del Software"
      },
      subtitle: "Politecnico di Torino",
      period: { en: "Sep 2025 - Present", it: "Set 2025 - Presente" },
      location: { en: "Turin, Italy", it: "Torino, Italia" },
      description: {
        en: "Expected grade: 105/110. Relevant coursework: system programming, software design and architecture. In progress: distributed systems, containerization and orchestration technologies, cybersecurity, agile methodologies.",
        it: "Voto previsto: 105/110. Corsi rilevanti: programmazione di sistema, progettazione e architetture software. In corso: sistemi distribuiti, tecnologie di containerizzazione e orchestrazione, cybersicurezza, metodologie agile."
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
        en: "AI Software Engineer Intern",
        it: "Tirocinante AI Software Engineer"
      },
      subtitle: "Assist S.P.A.",
      period: { en: "Mar 2025 - Jul 2025", it: "Mar 2025 - Lug 2025" },
      location: { en: "Beinasco, Italy", it: "Beinasco, Italia" },
      description: {
        en: "Designed and developed an LLM-based customer support chatbot with related API tooling implemented in .NET, with estimated savings of over 150 person-hours per week for Assist's support team.",
        it: "Progettato e sviluppato un chatbot basato su LLM con relativo tooling API implementato su DotNet, per il supporto clienti, con un risparmio stimato di oltre 150 ore-persona/settimana per il team di supporto di Assist."
      },
      achievements: {
        en: [
          "Orchestrated GDPR-compliant agentic workflows on N8N, automating document review for an estimated 150–300 requests per week using low-cost OpenAI o3-mini models."
        ],
        it: [
          "Coordinati flussi agentici conformi al GDPR su N8N, automatizzando la revisione documentale per una stima di 150--300 richieste/settimana tramite modelli OpenAI o3-mini a basso costo."
        ]
      },
      techStack: [".NET", "N8N", "OpenAI o3-mini"]
    },
    {
      id: "tl-4",
      badge: {
        label: { en: "Education", it: "Istruzione" },
        icon: "GraduationCap",
        color: "violet"
      },
      title: {
        en: "B.Sc. in Computer Engineering",
        it: "Laurea Triennale in Ingegneria Informatica"
      },
      subtitle: "Politecnico di Torino",
      period: { en: "Oct 2022 - Sep 2025", it: "Ott 2022 - Set 2025" },
      location: { en: "Turin, Italy", it: "Torino, Italia" },
      description: {
        en: "Relevant coursework: algorithms and data structures, operating systems, object-oriented programming, databases. Final grade: 93/110.",
        it: "Corsi rilevanti: algoritmi e strutture dati, sistemi operativi, programmazione ad oggetti, basi di dati. Voto finale: 93/110."
      }
    }
  ],

  // Competences & Skill Matrix (Languages, Frameworks, DevOps, Databases)
  competences: [
    {
      category: { en: "Languages", it: "Linguaggi" },
      icon: "Code2",
      skills: [
        "Python",
        "Rust",
        "C",
        "JavaScript",
        "Java",
        "C#",
        "RISC Assembly"
      ]
    },
    {
      category: { en: "Frameworks", it: "Framework" },
      icon: "Layers",
      skills: [
        "FastAPI",
        ".NET",
        "React",
        "Node.js",
        "Express",
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
        "Linux / Bash"
      ]
    },
    {
      category: { en: "Databases", it: "Database" },
      icon: "Database",
      skills: [
        "PostgreSQL",
        "SQLite",
        "Microsoft SQL Server",
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
        en: "Developed an asynchronous client-server application in Rust (Tokio) for real-time client location tracking. Tested on consumer desktop hardware, where a single server handled 1,000 simultaneous client connections with a peak CPU usage of 2.5%.",
        it: "Sviluppata un'applicazione client-server asincrona in Rust (Tokio) per il tracciamento in tempo reale della posizione dei client. Testata su hardware desktop consumer dove un server è stato in grado di gestire 1.000 connessioni client simultanee con utilizzo di CPU di picco pari al 2,5%."
      },
      image: "./assets/georust.png",
      techStack: ["Rust", "Tokio", "WebSocket"],
      githubUrl: "https://github.com/amedeo03/georust"
    },
    {
      id: "project-1",
      title: "EZShop",
      description: {
        en: "Developed a REST backend for a store sales and inventory management system, built following the Waterfall model. Achieved 96% test coverage with about 650 end-to-end, integration and unit tests.",
        it: "Sviluppato un backend REST per un sistema di gestione vendite e inventario di un negozio, realizzato applicando il modello Waterfall. Raggiunta una copertura dei test del 96% tramite circa 650 end-to-end, integration e unit test."
      },
      image: "./assets/ezshop.png",
      techStack: ["Python", "FastAPI", "SQLite"],
      githubUrl: "https://github.com/amedeo03/EZShop"
    },
    {
      id: "project-3",
      title: "Preventive Maintenance Tracker",
      description: {
        en: "Designed and implemented a maintenance management platform for the support team of electric vehicle charging stations, with scheduling of interventions and tracking of completed work. Independently deployed and managed the production infrastructure: containerized services hosted on a Hetzner VPS, with TLS encryption provided by Cloudflare and Certbot; received positive feedback from employees, although not yet formally adopted.",
        it: "Progettata ed implementata una piattaforma di gestione della manutenzione per il team di assistenza di impianti di ricarica di veicoli elettrici, con pianificazione degli interventi e tracciamento del lavoro svolto. Distribuita e gestita in autonomia l'infrastruttura di produzione: servizi containerizzati installati su VPS Hetzner, con crittografia TLS gestita tramite Cloudflare e Certbot: ricevuti riscontri positivi dai dipendenti, sebbene non ancora adottata formalmente."
      },
      image: "./assets/preventive_maintenance.png",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Streamlit", "Docker"]
    },
    {
      id: "project-2",
      title: "BeanSight",
      description: {
        en: "Dashboard aggregating 7 public data sources to deliver descriptive market and climate intelligence for coffee supply chains across Brazil and Vietnam, covering up to 20 years of historical data.",
        it: "Dashboard che aggrega 7 fonti di dati pubbliche per fornire analisi descrittive di mercato e clima a supporto decisionale sulla filiera del caffè in Brasile e Vietnam, con una copertura storica fino a 20 anni."
      },
      image: "./assets/beansight.jpg",
      techStack: ["React", "TypeScript", "Python", "Pandas"],
      githubUrl: "https://github.com/lisagiacob/LavazzaChallenge"
    },
    {
      id: "project-0",
      title: "AVA",
      description: {
        en: "Customer support chatbot built for Assist S.P.A. integrating OpenAI's o3-mini model with C# .NET REST APIs, cutting inference costs by ~45% and automating GDPR-compliant document review via N8N.",
        it: "Chatbot per il supporto clienti realizzato per Assist S.P.A. integrando il modello o3-mini di OpenAI con REST API in C# .NET, riducendo i costi di inferenza del ~45% e automatizzando la revisione documentale conforme al GDPR su N8N."
      },
      image: "./assets/ava.png",
      techStack: ["C#", ".NET", "OpenAI o3-mini", "N8N", "REST APIs"]
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
        viewGithub: "View Source",
        privateRepo: "Private Repository",
        openDetails: "Open project details",
        closeDetails: "Close project details"
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
        viewGithub: "Codice Sorgente",
        privateRepo: "Repository Privata",
        openDetails: "Apri i dettagli del progetto",
        closeDetails: "Chiudi i dettagli del progetto"
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
