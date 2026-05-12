// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO DATA — Edit everything here to personalise your portfolio.
//  The rest of the codebase reads from this file only.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  /** Short logo mark shown in the navbar (e.g. initials + dot) */
  logoMark: 'AM.',
  /** Your full name — displays as the large gradient headline */
  name: 'Amedeo Marino',
  /** Shown before the name in the hero ("Hey, I'm") */
  greeting: "Hey, I'm",
  /** One-paragraph bio below the name */
  bio: "I'm a software engineer based in Italy, specialising in low-level coding and backend engineering. I enjoy building things that are fast, reliable, and - when possible - open-source. Always in search of something new to learn and build upon.",
  /** Href for the primary "Say hi" CTA */
  emailHref: 'mailto:amedeomarino03@gmail.com',
  /** Href for the CV download */
  cvHref: '/amedeo_marino_cv.pdf',
};

// ─── Navigation links ─────────────────────────────────────────────────────────
// Each `href` should match the `id` of the corresponding section (with #).
export const NAV_LINKS = [
  { label: 'Resume', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ─── Experience ───────────────────────────────────────────────────────────────
// Add / remove objects to update the timeline.
export const EXPERIENCE = [
  {
    title: 'Master\'s Degree in Software Engineering',
    period: 'Sep 2025 - Now',
    company: 'Politecnico di Torino',
    companyHref: 'https://www.polito.it/',
    companyColor: '#004c93',
    location: 'Turin, Italy',
    bullets: [
      'Specializing in information systems, project management and enterprise-level software design.',
      'Extending my skill stack through the study of system programming, cybersecurity and web development'
    ],
  },
  {
    title: 'Finalist at Ifab 4 Next Generation Talents 2026',
    period: 'Mar 2026 - Jun 2026',
    company: 'Lavazza',
    companyHref: 'https://www.lavazza.it/',
    companyColor: '#4b6aa0',
    location: 'Turin, Italy',
    bullets: [
      'Designed a market and climate intelligence platform designed to support decision-making along the coffee supply chain.',
      'Talked with directly impacted stakeholders and IT specialists at Lavazza to evaluate technical and non-technical details.',
      'Worked together with other students from different field of expertise.',

    ],
  },
  {
    title: 'AI Software Engineer - Internship',
    period: 'Mar 2025 - Jul 2025',
    company: 'Assist SPA',
    companyHref: 'https://assist-si.com/',
    companyColor: '#00b753',
    location: 'Turin, Italy',
    bullets: [
      'Contributed to the design and implementation of an LLM-based chatbot for customer support.',
      'Designed and implemented REST API surfaces for the agent tooling.',
      'Tooling: OpenAI API, N8N, dotnet, MS SQL Server.'
    ],
  },
  {
    title: 'Bachelor\'s Degree in Computer Engineering',
    period: 'Sep 2022 - Sep 2025',
    company: 'Politecnico di Torino',
    companyHref: 'https://www.polito.it/',
    companyColor: '#004c93',
    location: 'Turin, Italy',
    bullets: [
      'Understood the intricacies of hardware-software integration and computer architecture.',
      'Developed programming skills in C, Java and Python through practical projects as well as laboratory works.',
      'Gained general expertise in operating systems, computer architectures, networking, and database management.',
    ],
  }
];

// ─── Featured Projects ────────────────────────────────────────────────────────
// `image`: path relative to /public, or a full URL.
// `tags`: array of { label, color } - color must be one of the CSS tag classes:
//         '' (purple default), 'tag-blue', 'tag-green', 'tag-orange', 'tag-pink', 'tag-red'
export const PROJECTS = [
  {
    title: 'BeanSight',
    description: 'Market and climate intelligence platform designed to support decision-making along the coffee supply chain, integrating climate, logistics, production and geopolitical data.',
    image: '',
    imageBg: '#1a1a2e',
    githubHref: '',
    liveHref: null,
    tags: [
      { label: 'Python', color: 'tag-yellow' },
      { label: 'React', color: 'tag-blue' },
      { label: 'Gemini', color: 'tag-red' }
    ],
  },
  {
    title: 'EZShop',
    description: 'A FastAPI backend REST server designed for a small market. Developed through practical application of the waterfall model.',
    image: '',
    imageBg: '#1a1a2e',
    githubHref: 'https://github.com/amedeo03/EZShop',
    liveHref: null,
    tags: [
      { label: 'Python', color: 'tag-yellow' },
      { label: 'FastAPI', color: 'tag-green' },
      { label: 'PyTest', color: 'tag-blue' }
    ],
  },
  {
    title: 'AVA',
    description: 'Customer care chatbot implementation for Assist SPA, using OpenAI models, N8N and the Dotnet framework',
    image: '',
    imageBg: '#0d1f1a',
    githubHref: '',
    liveHref: null,
    tags: [
      { label: 'Dotnet', color: 'tag' },
      { label: 'OpenAI', color: 'tag-blue' },
      { label: 'N8N', color: 'tag-orange' },
    ],
  }
];

// ─── Contact Links ────────────────────────────────────────────────────────────
// `icon` is a Lucide icon name (string). See icons.jsx for the mapping.
export const CONTACT_LINKS = [
  { label: 'Email', icon: 'Mail', href: 'mailto:amedeomarino03@gmail.com' },
  { label: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/in/amedeo-marino/' },
  { label: 'GitHub', icon: 'Github', href: 'https://github.com/amedeo03' },
  { label: 'Discord', icon: 'Discord', href: 'https://discord.com/users/amedeo_4120' },
];
