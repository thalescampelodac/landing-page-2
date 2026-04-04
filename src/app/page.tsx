"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const languages = [
  { code: "PT", label: "Português", flag: "/images/flags/br.svg" },
  { code: "EN", label: "English", flag: "/images/flags/us.svg" },
  { code: "ES", label: "Español", flag: "/images/flags/es.svg" },
] as const;

const copy = {
  PT: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      technologies: "Tecnologias",
      contact: "Contato",
    },
    badge: "Analista de Sistemas",
    hero: {
      firstName: "Thales",
      lastName: "Campelo",
      title:
        "Especialista em Soluções de Software e Arquitetura de Produtos Digitais",
      description:
        "Transformo ideias em sistemas robustos, escaláveis e inteligentes. Da engenharia de requisitos à arquitetura, do banco de dados ao deploy.",
    },
    projects: {
      eyebrow: "Projetos Destaque",
      subtitle: "Soluções reais, com propósito e impacto.",
      cta: "Acessar projeto",
      comingSoon: "COMING SOON",
      comingSoonDescription:
        "Outros projetos estão na esteira de produção e chegam em breve.",
      inProgress: "Em produção",
    },
    technologies: {
      eyebrow: "Tecnologias",
      subtitle: "Ferramentas que uso para construir soluções modernas.",
    },
    about: {
      eyebrow: "Sobre Mim",
      title: "Experiência em software, arquitetura e produto.",
      description:
        "Formado em Análise de Sistemas, atuo com desenvolvimento, arquitetura de software, definição de requisitos funcionais e modelagem de banco de dados.",
      description2:
        "Meu foco é construir sistemas que resolvem problemas reais, com código limpo, escalabilidade e uma boa experiência para o usuário final.",
      cta: "Baixar CV",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre projetos, parcerias e oportunidades.",
      phone: "(32) 9 9159-4895",
      email: "thalescampelo@gmail.com",
      linkedin: "linkedin.com/in/thalescampelo",
    },
    footer: "© 2026 Thales Campelo. Todos os direitos reservados.",
    projectItems: {
      comprovou:
        "Plataforma que simplifica a validação de comprovantes, reduzindo fraudes e trazendo confiança para transações.",
      rede: "Plataforma colaborativa para conectar pessoas, compartilhar conhecimento e impulsionar redes.",
    },
  },
  EN: {
    nav: {
      about: "About",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
    },
    badge: "Systems Analyst",
    hero: {
      firstName: "Thales",
      lastName: "Campelo",
      title:
        "Specialist in Software Solutions and Digital Product Architecture",
      description:
        "I turn ideas into robust, scalable, and intelligent systems. From requirements engineering to architecture, from database design to deployment.",
    },
    projects: {
      eyebrow: "Featured Projects",
      subtitle: "Real solutions, with purpose and impact.",
      cta: "Open project",
      comingSoon: "COMING SOON",
      comingSoonDescription:
        "More projects are in production and will arrive soon.",
      inProgress: "In progress",
    },
    technologies: {
      eyebrow: "Technologies",
      subtitle: "Tools I use to build modern solutions.",
    },
    about: {
      eyebrow: "About Me",
      title: "Experience in software, architecture, and product.",
      description:
        "Graduated in Systems Analysis, I work with software development, software architecture, functional requirements definition, and database modeling.",
      description2:
        "My focus is building systems that solve real problems with clean code, scalability, and a great end-user experience.",
      cta: "Download CV",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about projects, partnerships, and opportunities.",
      phone: "(32) 9 9159-4895",
      email: "thalescampelo@gmail.com",
      linkedin: "linkedin.com/in/thalescampelo",
    },
    footer: "© 2024 Thales Campelo. All rights reserved.",
    projectItems: {
      comprovou:
        "A platform that simplifies receipt validation, reducing fraud and bringing trust to transactions.",
      rede: "A collaborative platform to connect people, share knowledge, and strengthen networks.",
    },
  },
  ES: {
    nav: {
      about: "Sobre",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    badge: "Analista de Sistemas",
    hero: {
      firstName: "Thales",
      lastName: "Campelo",
      title:
        "Especialista en Soluciones de Software y Arquitectura de Productos Digitales",
      description:
        "Transformo ideas en sistemas robustos, escalables e inteligentes. Desde la ingeniería de requisitos hasta la arquitectura, de la base de datos al despliegue.",
    },
    projects: {
      eyebrow: "Proyectos Destacados",
      subtitle: "Soluciones reales, con propósito e impacto.",
      cta: "Abrir proyecto",
      comingSoon: "PRÓXIMAMENTE",
      comingSoonDescription:
        "Otros proyectos están en producción y llegarán pronto.",
      inProgress: "En producción",
    },
    technologies: {
      eyebrow: "Tecnologías",
      subtitle: "Herramientas que uso para construir soluciones modernas.",
    },
    about: {
      eyebrow: "Sobre Mí",
      title: "Experiencia en software, arquitectura y producto.",
      description:
        "Graduado en Análisis de Sistemas, trabajo con desarrollo de software, arquitectura de software, definición de requisitos funcionales y modelado de base de datos.",
      description2:
        "Mi enfoque es construir sistemas que resuelvan problemas reales con código limpio, escalabilidad y una gran experiencia para el usuario final.",
      cta: "Descargar CV",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos sobre proyectos, alianzas y oportunidades.",
      phone: "(32) 9 9159-4895",
      email: "thalescampelo@gmail.com",
      linkedin: "linkedin.com/in/thalescampelo",
    },
    footer: "© 2024 Thales Campelo. Todos los derechos reservados.",
    projectItems: {
      comprovou:
        "Plataforma que simplifica la validación de comprobantes, reduce fraudes y aporta confianza a las transacciones.",
      rede: "Plataforma colaborativa para conectar personas, compartir conocimiento e impulsar redes.",
    },
  },
} as const;

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thalescampelo/",
    icon: "/images/social/linkedin.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/thalescampelodac",
    icon: "/images/social/github.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thalescampeloc/",
    icon: "/images/social/instagram.png",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5532991594895",
    icon: "/images/social/whatsapp.png",
  },
  {
    name: "Email",
    href: "mailto:thalescampelo@gmail.com",
    icon: "/images/social/email.png",
  },
] as const;

const technologies = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    href: "https://nextjs.org",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "tailwind",
    href: "https://tailwindcss.com",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    href: "https://github.com",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "supabase",
    href: "https://supabase.com",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "vercel",
    href: "https://vercel.com",
  },
] as const;

const projects = [
  {
    id: "comprovou",
    name: "COMPROVOU",
    href: "https://comprovou.vercel.app",
    images: [
      "/images/projects/Comprovou/comprovou-1.png",
      "/images/projects/Comprovou/comprovou-2.png",
      "/images/projects/Comprovou/comprovou-3.png",
    ],
    icon: "check",
    border: "border-[#2c4260]",
  },
  {
    id: "rede",
    name: "REDE",
    href: "https://rede-plataforma.vercel.app",
    images: [
      "/images/projects/REDE/rede-1.png",
      "/images/projects/REDE/rede-2.png",
      "/images/projects/REDE/rede-3.png",
    ],
    icon: "loop",
    border: "border-[#2c6d64]",
  },
] as const;

const stageSectionBackground = "#01030A";

function FlagIcon({ flag, label }: { flag: string; label: string }) {
  return (
    <span className="relative inline-block h-3.5 w-5 overflow-hidden rounded-[3px] border border-white/20">
      <Image src={flag} alt={label} fill className="object-cover" />
    </span>
  );
}

function ProjectMark({ type }: { type: "check" | "loop" | "spark" }) {
  if (type === "check") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[#30d978]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12.5L9.5 18L20 6" />
      </svg>
    );
  }

  if (type === "loop") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[#28d7e5]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7.5 8C4.5 8 3 10.1 3 12s1.5 4 4.5 4c3.9 0 5.1-8 9-8 3 0 4.5 2.1 4.5 4s-1.5 4-4.5 4c-3.9 0-5.1-8-9-8Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[#58a6ff]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.1L22 12l-7.6 2.9L12 22l-2.4-7.1L2 12l7.6-2.9L12 2Z" />
    </svg>
  );
}

function TechnologyLogo({
  type,
}: {
  type: "nextjs" | "tailwind" | "github" | "supabase" | "vercel";
}) {
  if (type === "nextjs") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black text-sm font-medium text-white">
        N
      </div>
    );
  }

  if (type === "tailwind") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-[#38BDF8]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 7c-2.8 0-4.5 1.4-5.2 4.2.9-1.4 1.9-1.9 3-1.6.63.17 1.08.67 1.58 1.22.82.9 1.76 1.93 3.62 1.93 2.8 0 4.5-1.4 5.2-4.2-.9 1.4-1.9 1.9-3 1.6-.63-.17-1.08-.67-1.58-1.22C14.8 8.03 13.86 7 12 7Zm-5.2 5.8C4 12.8 2.3 14.2 1.6 17c.9-1.4 1.9-1.9 3-1.6.63.17 1.08.67 1.58 1.22.82.9 1.76 1.93 3.62 1.93 2.8 0 4.5-1.4 5.2-4.2-.9 1.4-1.9 1.9-3 1.6-.63-.17-1.08-.67-1.58-1.22-.82-.9-1.76-1.93-3.62-1.93Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-1.9c-3.1.67-3.75-1.32-3.75-1.32-.51-1.28-1.24-1.62-1.24-1.62-1.01-.68.08-.67.08-.67 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.2 3.24.91.1-.72.39-1.2.71-1.47-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.41.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.61 1.54.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.05v3.04c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    );
  }

  if (type === "supabase") {
    return (
      <div className="flex h-[22px] w-[22px] items-center justify-center">
        <Image
          src="/images/brand/supabase-logo-icon.svg"
          alt="Supabase"
          width={22}
          height={22}
          className="h-[22px] w-[22px] object-contain"
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 text-white"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3 21 19H3L12 3Z" />
    </svg>
  );
}

export default function Home() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<
    (typeof languages)[number]
  >(languages[0]);
  const [projectSlides, setProjectSlides] = useState<Record<string, number>>({
    comprovou: 0,
    rede: 0,
  });
  const text = copy[selectedLanguage.code];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProjectSlides((current) => ({
        comprovou: (current.comprovou + 1) % 3,
        rede: (current.rede + 1) % 3,
      }));
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="page-shell min-h-screen px-3 py-4 text-white sm:px-5 sm:py-5">
      <div className="mx-auto w-full max-w-[760px] rounded-[24px] border border-[#24364f] bg-[linear-gradient(180deg,rgba(6,10,18,0.98),rgba(5,9,16,0.98))] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_rgba(0,0,0,0.4)]">
        <div className="relative w-full overflow-hidden rounded-t-[24px]">
          <Image
            src="/images/mockup/hero-base.png"
            alt="Base visual do hero"
            width={1147}
            height={768}
            priority
            className="h-auto w-full"
          />

          <header className="absolute inset-x-0 top-0 z-10 px-5 pt-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-10 shrink-0">
                  <Image
                    src="/images/brand/logo.png"
                    alt="Logo TC"
                    fill
                    className="object-contain scale-[1.6]"
                  />
                </div>
                <div className="display-font text-base uppercase tracking-[0.08em] text-white sm:text-lg">
                  Thales Campelo
                </div>
              </div>

              <nav className="flex items-center gap-2 text-sm text-white/90 sm:gap-3">
                <a href="#sobre" className="px-2 py-1 hover:text-[#5aa7ff]">
                  {text.nav.about}
                </a>
                <a href="#projetos" className="px-2 py-1 hover:text-[#5aa7ff]">
                  {text.nav.projects}
                </a>
                <a
                  href="#tecnologias"
                  className="px-2 py-1 hover:text-[#5aa7ff]"
                >
                  {text.nav.technologies}
                </a>
                <a href="#contato" className="px-2 py-1 hover:text-[#5aa7ff]">
                  {text.nav.contact}
                </a>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLanguageOpen((current) => !current)}
                    className="flex items-center gap-1 rounded-[10px] border border-[#2c4260] bg-[rgba(6,10,18,0.55)] px-3 py-2 text-white"
                  >
                    <FlagIcon
                      flag={selectedLanguage.flag}
                      label={selectedLanguage.label}
                    />
                    <span>{selectedLanguage.code}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition ${
                        languageOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {languageOpen ? (
                    <div className="absolute right-0 top-[calc(100%+8px)] min-w-[120px] overflow-hidden rounded-[12px] border border-[#2c4260] bg-[linear-gradient(180deg,rgba(8,13,24,0.98),rgba(6,10,18,0.98))] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          type="button"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setLanguageOpen(false);
                          }}
                          className={`flex w-full items-center gap-2 px-4 py-3 text-left text-sm hover:bg-white/6 ${
                            selectedLanguage.code === language.code
                              ? "text-white"
                              : "text-white/75"
                          }`}
                        >
                          <FlagIcon
                            flag={language.flag}
                            label={language.label}
                          />
                          <span>{language.label}</span>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </nav>
            </div>

            <div className="mt-4 border-t border-[#22354f]" />
          </header>

          <div className="absolute left-5 top-[112px] z-10">
            <div className="inline-flex items-center rounded-[9px] border border-[#2c4260] bg-[rgba(6,10,18,0.45)] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#58a6ff] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-[11px]">
              {text.badge}
            </div>
          </div>

          <div className="absolute left-5 top-[160px] z-10">
            <h1 className="display-font text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-[46px]">
              <span className="block">{text.hero.firstName}</span>
              <span className="block bg-[linear-gradient(180deg,#6eb4ff_0%,#3d7fff_100%)] bg-clip-text text-transparent">
                {text.hero.lastName}
              </span>
            </h1>
          </div>

          <div className="absolute left-5 top-[257px] z-10 max-w-[380px]">
            <p className="text-[17px] font-medium leading-[1.35] text-white sm:text-[18px]">
              {text.hero.title}
            </p>
            <p className="mt-4 text-[13px] leading-[1.55] text-white/72 sm:text-[14px]">
              {text.hero.description}
            </p>
          </div>

          <div className="absolute left-5 top-[414px] z-10 flex items-center gap-2.5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noreferrer noopener"
                }
                className="relative block h-11 w-11 transition hover:-translate-y-0.5 hover:opacity-90"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <section
          id="projetos"
          className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5"
          style={{ marginTop: "2px", backgroundColor: stageSectionBackground }}
        >
          <div
            className="rounded-[18px] border border-[#24364f] px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] sm:px-5 sm:py-5"
            style={{ backgroundColor: stageSectionBackground }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <ProjectMark type="spark" />
                <h2 className="display-font text-[18px] uppercase tracking-[0.12em] text-white sm:text-[20px]">
                  {text.projects.eyebrow}
                </h2>
              </div>
              <p className="mt-1 text-sm text-white/65">
                {text.projects.subtitle}
              </p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className={`grid gap-4 rounded-[16px] border ${project.border} p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]`}
                  style={{ backgroundColor: stageSectionBackground }}
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <ProjectMark
                        type={project.icon as "check" | "loop" | "spark"}
                      />
                      <h3 className="display-font text-[20px] uppercase tracking-[0.02em] text-white">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mt-4 min-h-[72px] text-[14px] leading-[1.65] text-white/70">
                      {text.projectItems[project.id]}
                    </p>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 text-[15px] text-[#58a6ff] transition hover:opacity-85"
                    >
                      <span>{text.projects.cta}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div
                    className="relative h-[150px] overflow-hidden rounded-[10px] border border-white/10"
                    style={{ backgroundColor: stageSectionBackground }}
                  >
                    <Image
                      src={project.images[projectSlides[project.id] ?? 0]}
                      alt={project.name}
                      fill
                      className="object-cover object-left-top"
                    />

                    <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
                      {project.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          aria-label={`${project.name} slide ${index + 1}`}
                          onClick={() =>
                            setProjectSlides((current) => ({
                              ...current,
                              [project.id]: index,
                            }))
                          }
                          className={`h-1.5 rounded-full transition ${
                            (projectSlides[project.id] ?? 0) === index
                              ? "w-5 bg-white"
                              : "w-1.5 bg-white/45"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              <article
                className="grid gap-4 rounded-[16px] border border-dashed border-[#2b4460] p-4 md:col-span-2 md:grid-cols-[1.2fr_180px] md:items-center"
                style={{ backgroundColor: stageSectionBackground }}
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <ProjectMark type="spark" />
                    <h3 className="display-font text-[20px] uppercase tracking-[0.02em] text-white/92">
                      {text.projects.comingSoon}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-[420px] text-[14px] leading-[1.65] text-white/62">
                    {text.projects.comingSoonDescription}
                  </p>
                </div>

                <div
                  className="flex h-[120px] items-center justify-center rounded-[10px] border border-dashed border-[#2b4460]"
                  style={{ backgroundColor: stageSectionBackground }}
                >
                  <span className="display-font text-sm uppercase tracking-[0.28em] text-white/45">
                    {text.projects.inProgress}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div
            className="rounded-[18px] border border-[#24364f] px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] sm:px-5 sm:py-5"
            style={{ backgroundColor: stageSectionBackground }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <ProjectMark type="spark" />
                <h2 className="display-font text-[18px] uppercase tracking-[0.12em] text-white sm:text-[20px]">
                  {text.technologies.eyebrow}
                </h2>
              </div>
              <p className="mt-1 text-sm text-white/65">
                {text.technologies.subtitle}
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {technologies.map((technology) => (
                <a
                  key={technology.id}
                  href={technology.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-[12px] border border-[#2c4260] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
                  style={{ backgroundColor: stageSectionBackground }}
                >
                  <TechnologyLogo
                    type={
                      technology.icon as
                        | "nextjs"
                        | "tailwind"
                        | "github"
                        | "supabase"
                        | "vercel"
                    }
                  />
                  <span className="text-[17px] font-medium text-white">
                    {technology.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="grid gap-3 md:grid-cols-2">
            <article
              id="sobre"
              className="rounded-[18px] border border-[#24364f] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              style={{ backgroundColor: stageSectionBackground }}
            >
              <div className="flex items-center gap-2">
                <ProjectMark type="spark" />
                <h2 className="display-font text-[18px] uppercase tracking-[0.12em] text-white">
                  {text.about.eyebrow}
                </h2>
              </div>
              <p className="mt-5 text-[19px] font-medium leading-[1.45] text-white">
                {text.about.title}
              </p>
              <p className="mt-5 text-[14px] leading-[1.7] text-white/72">
                {text.about.description}
              </p>
              <p className="mt-4 text-[14px] leading-[1.7] text-white/72">
                {text.about.description2}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-[10px] border border-[#2c4260] px-4 py-2 text-sm text-white transition hover:opacity-85"
              >
                {text.about.cta}
              </a>
            </article>

            <article
              id="contato"
              className="rounded-[18px] border border-[#24364f] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              style={{ backgroundColor: stageSectionBackground }}
            >
              <div className="flex items-center gap-2">
                <ProjectMark type="spark" />
                <h2 className="display-font text-[18px] uppercase tracking-[0.12em] text-white">
                  {text.contact.eyebrow}
                </h2>
              </div>
              <p className="mt-5 max-w-[360px] text-[19px] font-medium leading-[1.45] text-white">
                {text.contact.title}
              </p>

              <div className="mt-6 grid gap-4">
                <a
                  href="https://wa.me/5532991594895"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-white/82 transition hover:text-white"
                >
                  <span className="relative h-10 w-10 shrink-0">
                    <Image
                      src="/images/social/whatsapp.png"
                      alt="WhatsApp"
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span>{text.contact.phone}</span>
                </a>

                <a
                  href="mailto:thalescampelo@gmail.com"
                  className="flex items-center gap-3 text-white/82 transition hover:text-white"
                >
                  <span className="relative h-10 w-10 shrink-0">
                    <Image
                      src="/images/social/email.png"
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span>{text.contact.email}</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/thalescampelo/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-white/82 transition hover:text-white"
                >
                  <span className="relative h-10 w-10 shrink-0">
                    <Image
                      src="/images/social/linkedin.png"
                      alt="LinkedIn"
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span>{text.contact.linkedin}</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <footer className="px-4 pb-6 text-center text-sm text-white/50 sm:px-5">
          {text.footer}
        </footer>
      </div>
    </main>
  );
}
