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
      en: "Software Engineering Master's student at Politecnico di Torino focused on backend systems, with experience shipping production API surfaces and LLM-based tooling. Led a cross-functional team as a finalist in a national innovation challenge with Lavazza.",
      it: "Studente magistrale in Ingegneria del Software presso il Politecnico di Torino, con un forte interesse verso l'ingegneria di backend ed esperienza nello sviluppo di API in produzione e strumenti basati su LLM. Ha guidato un team multidisciplinare come finalista in una competizione nazionale di innovazione con Lavazza."
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
        en: "Finalist in the national innovation challenge Ifab 4 Next Generation Talents, developing an intelligence platform in collaboration with Lavazza.",
        it: "Finalista nella competizione nazionale di innovazione Ifab 4 Next Generation Talents, con lo sviluppo di una piattaforma di intelligence in collaborazione con Lavazza."
      },
      achievements: {
        en: [
          "Designed BeanSight, a dashboard aggregating 7 public data sources to deliver descriptive market and climate intelligence for coffee supply chains across Brazil and Vietnam, covering up to 20 years of historical data.",
          "Led a cross-functional team of 6 students from different technical backgrounds, translating technical constraints for Lavazza's business and IT stakeholders and demoing the platform, which stakeholders identified as a solution to their reliance on email- and spreadsheet-based workflows.",
          "Advanced to the final round of Ifab 4 Next Generation Talents, competing against teams from 5 other companies."
        ],
        it: [
          "Progettato BeanSight, una dashboard che aggrega 7 fonti di dati pubbliche per fornire analisi descrittive di mercato e clima a supporto decisionale sulla filiera del caffè in Brasile e Vietnam, con una copertura storica fino a 20 anni.",
          "Guidato un team multidisciplinare di 6 studenti con background tecnici diversi, traducendo vincoli tecnici per gli stakeholder business e IT di Lavazza e presentando la piattaforma, individuata dagli stakeholder come soluzione alla dipendenza da email e fogli di calcolo.",
          "Ammesso alla fase finale di Ifab 4 Next Generation Talents, in competizione con team di altre 5 aziende."
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
        en: "Relevant coursework: operating systems, system programming, software design and architectures. In progress: distributed programming, cybersecurity, containerization & orchestration technologies, agile software engineering.",
        it: "Corsi rilevanti: sistemi operativi, programmazione di sistema, progettazione e architetture software. In corso: programmazione distribuita, cybersecurity, tecnologie di containerizzazione e orchestrazione, ingegneria del software agile."
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
        en: "Curricular internship focused on customer support automation via LLM and GDPR-compliant agentic workflows.",
        it: "Tirocinio curricolare incentrato sull'automazione del customer support tramite LLM e flussi di lavoro agentici conformi al GDPR."
      },
      achievements: {
        en: [
          "Designed and built an LLM-based chatbot for customer support, expected to save Assist's support team >150 person-hours/week.",
          "Designed and implemented REST API surfaces (C#, .NET) integrating OpenAI's o3-mini model, cutting inference token costs by ~45% versus the o3 baseline while meeting response-quality requirements.",
          "Coordinated GDPR-compliant agentic workflows in N8N, automating document review for an estimated 150–300 customer requests/week."
        ],
        it: [
          "Progettato e sviluppato un chatbot basato su LLM per il supporto clienti, con un risparmio stimato di oltre 150 ore-persona/settimana per il team di supporto di Assist.",
          "Progettate e implementate interfacce REST API (C#, .NET) integrando il modello o3-mini di OpenAI, riducendo i costi di inferenza di circa il ~45% rispetto al modello o3, mantenendo gli standard di qualità richiesti.",
          "Coordinati flussi di lavoro agentici conformi al GDPR su N8N, automatizzando la revisione documentale per una stima di 150–300 richieste/settimana."
        ]
      },
      techStack: ["C#", ".NET", "OpenAI o3-mini", "N8N", "REST APIs"]
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
        en: "Relevant coursework: algorithms and data structures, complexity analysis, object oriented programming, databases. Final Grade: 93/110.",
        it: "Corsi rilevanti: algoritmi e strutture dati, analisi della complessità, programmazione orientata agli oggetti, basi di dati. Voto finale: 93/110."
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
        en: "Asynchronous client-server application built in Rust (Tokio) to track clients' real-time positions. Benchmarked on consumer-grade desktop hardware with 1 server handling 1,000 concurrent client connections, peaking at just 2.5% CPU utilization.",
        it: "Applicazione client-server asincrona sviluppata in Rust (Tokio) per il tracciamento in tempo reale della posizione dei client. Testata su hardware desktop consumer con 1 server in grado di gestire 1.000 connessioni simultanee, con picco di CPU pari solo al 2,5%."
      },
      image: "./assets/georust.png",
      techStack: ["Rust", "Tokio", "WebSocket"],
      githubUrl: "https://github.com/amedeo03/georust"
    },
    {
      id: "project-3",
      title: "Preventive Maintenance Tracker",
      description: {
        en: "Preventive maintenance platform for an EV charger manufacturer's service team across ~200 sites, featuring intervention scheduling, automated email alerts, and Dockerized production deployment on Hetzner VPS.",
        it: "Piattaforma di manutenzione preventiva per il team di assistenza di un produttore di impianti di ricarica EV (~200 siti), con pianificazione degli interventi, notifiche email ai tecnici e infrastruttura Docker su VPS Hetzner."
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
      id: "project-1",
      title: "EZShop",
      description: {
        en: "FastAPI backend REST server with a relational (SQLite) database for a small market's order and inventory system, developed using the Waterfall model. Achieved 96% test coverage across ~650 unit, integration, and end-to-end tests.",
        it: "Backend REST in FastAPI con database relazionale (SQLite) per un sistema di gestione ordini e magazzino per un piccolo market, realizzato con modello Waterfall. Copertura dei test del 96% su ~650 test unitari, di integrazione ed end-to-end."
      },
      image: "./assets/ezshop.png",
      techStack: ["Python", "FastAPI", "SQLite"],
      githubUrl: "https://github.com/amedeo03/EZShop"
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
        privateRepo: "Private Repository"
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
        privateRepo: "Repository Privata"
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
