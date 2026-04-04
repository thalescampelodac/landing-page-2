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
    projectItems: {
      comprovou:
        "Plataforma que simplifica a validação de comprovantes, reduzindo fraudes e trazendo confiança para transações.",
      rede:
        "Plataforma colaborativa para conectar pessoas, compartilhar conhecimento e impulsionar redes.",
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
    projectItems: {
      comprovou:
        "A platform that simplifies receipt validation, reducing fraud and bringing trust to transactions.",
      rede:
        "A collaborative platform to connect people, share knowledge, and strengthen networks.",
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
    projectItems: {
      comprovou:
        "Plataforma que simplifica la validación de comprobantes, reduce fraudes y aporta confianza a las transacciones.",
      rede:
        "Plataforma colaborativa para conectar personas, compartir conocimiento e impulsar redes.",
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

        <section id="projetos" className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
          <div className="rounded-[18px] border border-[#24364f] bg-[linear-gradient(180deg,rgba(5,10,18,0.88),rgba(4,8,14,0.9))] px-4 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] sm:px-5 sm:py-5">
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
                  className={`grid gap-4 rounded-[16px] border ${project.border} bg-[linear-gradient(180deg,rgba(7,12,20,0.96),rgba(6,10,18,0.96))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]`}
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

                  <div className="relative h-[150px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0b111b]">
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

              <article className="grid gap-4 rounded-[16px] border border-dashed border-[#2b4460] bg-[linear-gradient(180deg,rgba(6,10,18,0.82),rgba(5,9,16,0.82))] p-4 md:col-span-2 md:grid-cols-[1.2fr_180px] md:items-center">
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

                <div className="flex h-[120px] items-center justify-center rounded-[10px] border border-dashed border-[#2b4460] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),rgba(4,8,14,0.05)_65%)]">
                  <span className="display-font text-sm uppercase tracking-[0.28em] text-white/45">
                    {text.projects.inProgress}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
