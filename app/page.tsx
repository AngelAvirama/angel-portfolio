"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowRight, Github, Mail, Code2, Database, Cloud,
  Braces, ExternalLink, Menu, X, Layers3, Sparkles, Terminal
} from "lucide-react";

type ThemeName = "violet" | "light";

const themes: { id: ThemeName; label: string; colors: string[] }[] = [
  { id: "violet", label: "Graphite Violet", colors: ["#15131f", "#a78bfa", "#ddd6fe"] },
  { id: "light", label: "Ivory Emerald", colors: ["#f5f3ed", "#047857", "#a7f3d0"] }
];

const projects = [
  {
    number: "01",
    name: "Tramix",
    category: "PLATAFORMA WEB · ACCESIBILIDAD",
    description:
      "Plataforma colaborativa que busca agilizar la consulta de información sobre trámites y orientar a las personas mediante pasos claros y accesibles.",
    stack: ["Next.js", "React", "TypeScript", "Prisma"],
    icon: "access",
    href: "https://github.com/jonathan2406/Tramix",
    label: "Ver repositorio"
  },
  {
    number: "02",
    name: "API de adopción de mascotas",
    category: "BACKEND · CLOUD",
    description:
      "API REST para gestionar animales, adoptantes y adopciones, con persistencia relacional y trabajo de despliegue en infraestructura AWS.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "AWS", "Kubernetes"],
    icon: "api",
    href: "https://github.com/AngelAvirama/Api_Pet_Adoption",
    label: "Ver repositorio"
  },
  {
    number: "03",
    name: "Stickify",
    category: "APLICACIÓN WEB · FULL STACK",
    description:
      "Aplicación web musical con funcionalidades para consultar canciones e interactuar con ellas mediante un sistema de calificaciones.",
    stack: ["Angular", "TypeScript", "HTML", "CSS"],
    icon: "music",
    href: "https://github.com/Enedev/StickifyWithBack",
    label: "Ver repositorio"
  },
  {
    number: "04",
    name: "Machine Learning",
    category: "CIENCIA DE DATOS · PROYECTO ACADÉMICO",
    description:
      "Proyecto universitario enfocado en análisis de datos y experimentación con modelos para abordar tareas de clasificación y predicción.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: "data",
    href: "https://github.com/AngelAvirama/AmazonReviews_ProcesamientoLenguaje",
    label: "Ver repositorio"
  }
];

const skills = [
  { title: "Lenguajes", icon: Braces, items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Dart"] },
  { title: "Frontend", icon: Code2, items: ["Angular", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", icon: Terminal, items: ["Node.js", "Express", "NestJS", "APIs REST"] },
  { title: "Bases de datos", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma", "TypeORM"] },
  { title: "Cloud y herramientas", icon: Cloud, items: ["AWS", "Kubernetes", "Docker", "Git", "GitHub", "Postman"] },
  { title: "Datos", icon: Layers3, items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"] }
];

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      {kind === "access" && (
        <div className="mini-window">
          <div className="mini-top"><i /><i /><i /><span>TRÁMITES / GUÍA</span></div>
          <div className="mini-content"><div className="mini-sidebar" /><div className="mini-main"><b>Encuentra tu trámite</b><small>Información clara, paso a paso</small><div className="mini-line" /><div className="mini-line short" /><div className="mini-button">Consultar guía ↗</div></div></div>
        </div>
      )}
      {kind === "api" && (
        <div className="code-window"><div className="mini-top"><i /><i /><i /><span>adoption-api.ts</span></div><pre><span>GET</span> /api/animals{"\n"}{"{"}{"\n"}  <em>status</em>: <b>"available"</b>,{"\n"}  <em>adoption</em>: true,{"\n"}  <em>database</em>: "PostgreSQL"{"\n"}{"}"}<strong>200 OK</strong></pre></div>
      )}
      {kind === "music" && (
        <div className="music-ui"><div className="album-art">♫</div><div className="music-lines"><b>Tu música, tus favoritos</b><span /><span /><span /></div><div className="equalizer"><i /><i /><i /><i /><i /><i /><i /></div></div>
      )}
      {kind === "data" && (
        <div className="data-ui"><div className="data-head"><b>Model analysis</b><small>Classification / Prediction</small></div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="data-foot"><span>Accuracy</span><b>Model evaluation</b></div></div>
      )}
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeName>("violet");
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const isEn = language === "en";

  return (
    <main data-theme={theme}>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="Inicio">AD<span>.</span></a>
          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            <a href="#about" onClick={() => setMenuOpen(false)}>{isEn ? "About" : "Sobre mí"}</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>{isEn ? "Tech stack" : "Tecnologías"}</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>{isEn ? "Projects" : "Proyectos"}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{isEn ? "Contact" : "Contacto"}</a>
          </nav>
          <div className="top-actions">
            <button className="language-toggle" onClick={() => setLanguage(isEn ? "es" : "en")} aria-label="Change language">{isEn ? "ES" : "EN"}</button>
            <a className="github-link" href="https://github.com/AngelAvirama" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ExternalLink size={12} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={isEn ? "Open menu" : "Abrir menú"}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> {isEn ? "OPEN TO INTERNSHIP OPPORTUNITIES" : "DISPONIBLE PARA OPORTUNIDADES DE PRÁCTICA"}</div>
            <h1>Hola, soy<br /><span>Ángel David</span><br />Avirama.</h1>
            <p className="hero-role">{isEn ? "Systems Engineering Student" : "Estudiante de Ingeniería de Sistemas"} <b>·</b> {isEn ? "Software Developer" : "Desarrollador de software"}</p>
            <p className="hero-description">{isEn ? "I build web solutions by combining frontend, backend and technologies that turn ideas into useful products." : "Construyo soluciones web combinando desarrollo frontend, backend y tecnologías que convierten ideas en productos útiles."}</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">{isEn ? "Explore projects" : "Explorar proyectos"} <ArrowRight size={17} /></a>
              <a className="button-quiet" href="mailto:Aviramadeoroangel@gmail.com"><Mail size={17} /> {isEn ? "Let's talk" : "Hablemos"}</a>
              <a className="button-quiet" href="/Angel_David_Avirama_CV.pdf" target="_blank" rel="noreferrer" download><ArrowDown size={17} /> {isEn ? "Download CV (PDF)" : "Descargar CV (PDF)"}</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="hero-card-top"><span>DEVELOPER PROFILE</span><Sparkles size={16} /></div>
              <div className="monogram">AD<span>.</span></div>
              <div className="hero-card-bottom"><span>FULL STACK</span><span>DATA SCIENCE</span><span>CLOUD</span></div>
            </div>
            <div className="floating-tag tag-one"><Code2 size={15} /> Web development</div>
            <div className="floating-tag tag-two"><Database size={15} /> Data & APIs</div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15} /> {isEn ? "SCROLL TO EXPLORE" : "DESLIZA PARA EXPLORAR"}</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker">01 / {isEn ? "PROFILE" : "PERFIL"}</div>
          <div className="about-grid">
            <h2>{isEn ? <>Building with<br /><span>purpose.</span></> : <>Desarrollo con<br /><span>propósito.</span></>}</h2>
            <div className="about-copy">
              <p>{isEn ? "I am a ninth-semester Systems Engineering student at Universidad de Medellín, primarily interested in software development and Full Stack web applications." : "Soy estudiante de noveno semestre de Ingeniería de Sistemas en la Universidad de Medellín, con interés principal en el desarrollo de software y aplicaciones web Full Stack."}</p>
              <p>{isEn ? "I have worked on academic and collaborative projects involving user interfaces, services, REST APIs, relational databases and application deployment. I am also interested in data science and machine learning." : "He participado en proyectos académicos y colaborativos que abarcan interfaces, servicios, APIs REST, bases de datos relacionales y despliegue de aplicaciones. También me interesa la ciencia de datos y el aprendizaje automático."}</p>
              <div className="about-facts"><div><b>09</b><span>{isEn ? "Semester" : "Semestre"}</span></div><div><b>Full Stack</b><span>{isEn ? "Main focus" : "Enfoque principal"}</span></div><div><b>Data</b><span>{isEn ? "Additional interest" : "Área complementaria"}</span></div></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / STACK</div><h2>{isEn ? "Technologies I use" : "Tecnologías que utilizo"}<span>.</span></h2></div><p>{isEn ? "Tools and technologies I have used in academic and personal projects." : "Herramientas y tecnologías con las que he trabajado en proyectos académicos y personales."}</p></div>
          <div className="skills-grid">
            {skills.map((group) => {
              const Icon = group.icon;
              return <article className="skill-card" key={group.title}><div className="skill-title"><Icon size={18} /><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>;
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><div><div className="section-kicker">03 / {isEn ? "SELECTED WORK" : "TRABAJO SELECCIONADO"}</div><h2>{isEn ? "Featured projects" : "Proyectos destacados"}<span>.</span></h2></div><p>{isEn ? "A selection of projects where I have applied my skills to build practical solutions." : "Una selección de proyectos en los que he aplicado mis conocimientos para construir soluciones."}</p></div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <ProjectVisual kind={project.icon} />
                <div className="project-info">
                  <div className="project-meta"><span>{project.number}</span><span>{isEn ? (project.number === "01" ? "WEB PLATFORM · ACCESSIBILITY" : project.number === "02" ? "BACKEND · CLOUD" : project.number === "03" ? "WEB APPLICATION · FULL STACK" : "DATA SCIENCE · ACADEMIC PROJECT") : project.category}</span></div>
                  <h3>{project.name}</h3>
                  <p>{isEn ? (
                    project.number === "01" ? "A collaborative platform designed to simplify access to procedure information and guide people through clear, accessible steps." :
                    project.number === "02" ? "REST API to manage animals, adopters and adoptions, with relational persistence and deployment work on AWS infrastructure." :
                    project.number === "03" ? "A music web application to browse songs and interact with them through a rating system." :
                    "Academic project focused on data analysis and model experimentation for classification and prediction tasks."
                  ) : project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{isEn ? "View repository" : project.label} <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="section-kicker">04 / {isEn ? "EDUCATION" : "FORMACIÓN"}</div>
          <div className="education-card"><div><h3>Universidad de Medellín</h3><p>{isEn ? "Systems Engineering · In progress · Ninth semester" : "Ingeniería de Sistemas · En curso · Noveno semestre"}</p><span>Medellín, Colombia</span></div><div className="education-date">{isEn ? "EDUCATION" : "FORMACIÓN ACADÉMICA"}</div></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-kicker">05 / {isEn ? "CONTACT" : "CONTACTO"}</div>
          <div className="contact-panel"><div><h2>{isEn ? <>Let's build something<br /><span>meaningful.</span></> : <>¿Construimos algo<br /><span>interesante?</span></>}</h2><p>{isEn ? "I am open to discussing internship opportunities, projects and collaboration." : "Estoy abierto a conversar sobre oportunidades de práctica, proyectos y colaboración."}</p></div><div className="contact-actions"><a className="button-primary" href="mailto:Aviramadeoroangel@gmail.com"><Mail size={17} /> Aviramadeoroangel@gmail.com</a><a className="button-quiet" href="https://github.com/AngelAvirama" target="_blank" rel="noreferrer"><Github size={17} /> {isEn ? "Visit GitHub" : "Ver GitHub"} <ExternalLink size={13} /></a><a className="button-quiet" href="/Angel_David_Avirama_CV.pdf" target="_blank" rel="noreferrer" download><ArrowDown size={17} /> {isEn ? "Download CV (PDF)" : "Descargar CV (PDF)"}</a></div></div>
        </section>

        <footer className="footer"><a className="brand" href="#home">AD<span>.</span></a><span>{isEn ? "Designed and developed by Ángel David Avirama" : "Diseñado y desarrollado por Ángel David Avirama"}</span><span>© {new Date().getFullYear()}</span></footer>
      </div>

      <aside className="theme-panel" aria-label="Selector de colores">
        <span>COLOR</span>
        {themes.map((item) => <button key={item.id} className={theme === item.id ? "theme-choice active" : "theme-choice"} onClick={() => setTheme(item.id)} aria-label={`Tema ${item.label}`} title={item.label}><i style={{ background: item.colors[0] }} /><i style={{ background: item.colors[1] }} /><i style={{ background: item.colors[2] }} /></button>)}
      </aside>
    </main>
  );
}
