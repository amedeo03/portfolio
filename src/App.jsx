import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, Download, Sun, Moon } from 'lucide-react'
import Icon from './Icon.jsx'
import { SITE, NAV_LINKS, EXPERIENCE, PROJECTS, CONTACT_LINKS } from './data.js'

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// ─── Reusable animated section wrapper ───────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[#1a1a1a] backdrop-blur-md bg-[#0a0a0a]/80' : ''
        }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-[13px] font-semibold tracking-widest text-white hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          {SITE.logoMark}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span className={`block w-5 h-px bg-[#888] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#888] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#888] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a] overflow-hidden"
          >
            <div className="flex flex-col px-6 pb-5 pt-2 gap-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="nav-link text-[14px]"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <Reveal delay={0}>
        <p className="text-[#555] text-[12px] mb-3 tracking-wide">{SITE.greeting}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h1 className="gradient-text text-[52px] md:text-[80px] lg:text-[96px] font-bold leading-[1.05] tracking-tight mb-7">
          {SITE.name}
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="text-[#888] text-[13px] leading-[1.8] max-w-xl mb-10">
          {SITE.bio}
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="flex items-center gap-6">
          {SITE.cvHref && (
            <a href={SITE.cvHref} className="cta-btn group" download>
              Download CV
              <Download size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          )}
          <a href={SITE.emailHref} className="cta-btn group">
            Get in touch
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────
function ExperienceItem({ job, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      custom={index * 0.06}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="pt-6 pb-7 border-b border-[#141414] last:border-0"
    >
      {/* Title + period */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
        <h3 className="text-[14px] font-semibold text-[#e0e0e0] tracking-tight">
          {job.title}
        </h3>
        <span className="text-[11px] text-[#444] whitespace-nowrap shrink-0 sm:ml-4 mt-0.5">
          {job.period}
        </span>
      </div>

      {/* Company + location */}
      <div className="flex items-center gap-2 mb-3">
        {job.companyHref ? (
          <a
            href={job.companyHref}
            target="_blank"
            rel="noreferrer"
            className="company-link"
            style={{ color: job.companyColor }}
          >
            {job.company}
          </a>
        ) : (
          <span className="company-link" style={{ color: job.companyColor }}>
            {job.company}
          </span>
        )}
        {job.location && (
          <>
            <span className="text-[#2a2a2a] text-[10px]">/</span>
            <span className="text-[11px] text-[#444]">{job.location}</span>
          </>
        )}
      </div>

      {/* Bullets */}
      <ul className="space-y-1">
        {job.bullets.map((b, i) => (
          <li key={i} className="text-[12px] text-[#666] leading-[1.75] flex gap-2">
            <span className="text-[#333] shrink-0 mt-[1px]">–</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="max-w-5xl mx-auto px-6 md:px-10 py-16"
    >
      <hr className="divider mb-16" />

      <div className="grid md:grid-cols-[130px_1fr] gap-8 md:gap-20">
        {/* Left label — sticky on desktop */}
        <div className="md:pt-8">
          <Reveal>
            <span className="section-label md:sticky md:top-20">Experience</span>
          </Reveal>
        </div>

        {/* Right timeline */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {EXPERIENCE.map((job, i) => (
            <ExperienceItem key={i} job={job} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      custom={index * 0.05}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="project-card group h-full flex flex-col">
        {/* Image / placeholder */}
        <div
          className="card-img flex items-center justify-center overflow-hidden"
          style={{ background: project.imageBg || '#111' }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="card-img"
            />
          ) : (
            <span
              className="text-[11px] tracking-widest uppercase opacity-20 font-mono"
              style={{ color: '#fff' }}
            >
              {project.title}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          {/* Title + icon row */}
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-semibold text-[#e0e0e0]">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              {project.githubHref && (
                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="text-[#444] hover:text-[#ccc] transition-colors"
                >
                  <Github size={14} />
                </a>
              )}
              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="text-[#444] hover:text-[#ccc] transition-colors"
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[11.5px] text-[#555] leading-[1.75] flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-x-0 gap-y-1 mt-1">
            {project.tags.map((t, i) => (
              <span key={i} className={`tag ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="max-w-5xl mx-auto px-6 md:px-10 py-16"
    >
      <hr className="divider mb-14" />

      <Reveal>
        <span className="section-label mb-8 block">Featured Projects</span>
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </motion.div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Contact"
      className="max-w-5xl mx-auto px-6 md:px-10 py-16"
    >
      <hr className="divider mb-12" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        <Reveal>
          <span className="section-label shrink-0">Contact</span>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              className="contact-btn"
            >
              <Icon name={link.icon} size={13} />
              {link.label}
            </a>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 pb-4">
        <p className="text-[11px] text-[#2a2a2a]">
          © {new Date().getFullYear()} {SITE.name}. Built with React + Vite + Tailwind.
        </p>
      </Reveal>
    </footer>
  )
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main role="main">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  )
}
