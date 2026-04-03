import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  CircleArrowOutUpRight,
  Download,
  Sparkles,
  Zap,
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thalescampelo/",
    src: "/images/social/linkedin.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/thalescampelodac",
    src: "/images/social/github.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thalescampeloc/",
    src: "/images/social/instagram.png",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5532991594895",
    src: "/images/social/whatsapp.png",
  },
  {
    label: "Email",
    href: "mailto:thalescampelo@gmail.com",
    src: "/images/social/email.png",
  },
];

const projects = [
  {
    title: "COMPROVOU",
    description:
      "Plataforma que simplifica a validacao de comprovantes, reduzindo fraudes e trazendo confianca para transacoes.",
    href: "https://comprovou.vercel.app",
    image: "/project-comprovou.svg",
    accent: "green",
    icon: "✓",
  },
  {
    title: "REDE",
    description:
      "Plataforma colaborativa para conectar pessoas, compartilhar conhecimento e impulsionar redes.",
    href: "https://rede-plataforma.vercel.app",
    image: "/project-rede.svg",
    accent: "cyan",
    icon: "∞",
  },
];

const stack = [
  { label: "Next.js", icon: "N" },
  { label: "Tailwind", icon: "~" },
  { label: "GitHub", icon: "GH" },
  { label: "Supabase", icon: "⚡" },
  { label: "Vercel", icon: "▲" },
];

const contactItems = [
  {
    label: "(32) 9 9159-4895",
    href: "https://wa.me/5532991594895",
    src: "/images/social/whatsapp.png",
  },
  {
    label: "thalescampelo@gmail.com",
    href: "mailto:thalescampelo@gmail.com",
    src: "/images/social/email.png",
  },
  {
    label: "linkedin.com/in/thalescampelo",
    href: "https://www.linkedin.com/in/thalescampelo/",
    src: "/images/social/linkedin.png",
  },
];

function SectionTitle({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5 text-center">
      <div className="display-font flex items-center justify-center gap-2 text-[1.05rem] uppercase tracking-[0.24em] text-white">
        <span className="text-[#5aa7ff]">{icon}</span>
        <span>{title}</span>
      </div>
      {subtitle ? (
        <p className="mt-1 text-sm text-white/58">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="page-shell min-h-screen px-3 py-4 text-white sm:px-5 sm:py-5">
      <div className="mx-auto flex w-full max-w-[760px] flex-col gap-3 rounded-[24px] border border-[#24364f] bg-[linear-gradient(180deg,rgba(6,10,18,0.98),rgba(5,9,16,0.98))] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_rgba(0,0,0,0.4)]">
        <header className="panel flex flex-wrap items-center justify-between gap-4 rounded-[18px] px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-9 shrink-0">
              <Image
                src="/images/brand/logo.png"
                alt="Logo TC"
                fill
                className="object-contain"
              />
            </div>
            <div className="display-font text-base uppercase tracking-[0.08em] text-white sm:text-lg">
              Thales Campelo
            </div>
          </div>

          <nav className="flex items-center gap-2 text-sm text-white/90 sm:gap-3">
            <a href="#sobre" className="px-2 py-1 hover:text-[#5aa7ff]">
              Sobre
            </a>
            <a href="#projetos" className="px-2 py-1 hover:text-[#5aa7ff]">
              Projetos
            </a>
            <a href="#tecnologias" className="px-2 py-1 hover:text-[#5aa7ff]">
              Tecnologias
            </a>
            <a href="#contato" className="px-2 py-1 hover:text-[#5aa7ff]">
              Contato
            </a>
            <button
              type="button"
              className="flex items-center gap-1 rounded-[10px] border border-[#2c4260] px-3 py-2 text-white"
            >
              <span>PT</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </nav>
        </header>

        <section className="panel relative overflow-hidden rounded-[18px] px-6 py-7 sm:px-7">
          <div className="hero-ring hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-[48%] bg-[radial-gradient(circle_at_50%_32%,rgba(55,106,214,0.24),rgba(7,13,24,0)_72%)]" />

          <div className="grid gap-6 md:grid-cols-[1fr_0.94fr] md:items-end">
            <div className="relative z-10 max-w-[370px]">
              <div className="mb-4 inline-flex rounded-full border border-[#2c4d74] bg-[#081728] px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] text-[#5aa7ff]">
                Analista de Sistemas
              </div>

              <h1 className="text-[4rem] leading-[0.9] font-black uppercase text-white sm:text-[4.75rem]">
                Thales
              </h1>
              <h1 className="text-[4rem] leading-[0.9] font-black uppercase text-[#4d94ff] sm:text-[4.75rem]">
                Campelo
              </h1>

              <p className="mt-4 max-w-[380px] text-[1rem] font-medium leading-8 text-white sm:text-[1.02rem]">
                Especialista em Solucoes de Software e Arquitetura de Produtos
                Digitais
              </p>

              <p className="text-muted mt-4 max-w-[385px] text-[0.97rem] leading-7">
                Transformo ideias em sistemas robustos, escalaveis e
                inteligentes. Da engenharia de requisitos a arquitetura, do
                banco de dados ao deploy.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="relative h-11 w-11 shrink-0 transition hover:-translate-y-0.5"
                  >
                    <Image
                      src={social.src}
                      alt={social.label}
                      fill
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] md:min-h-[390px]">
              <div className="absolute inset-x-0 bottom-0 top-4 rounded-[28px] bg-[radial-gradient(circle_at_58%_18%,rgba(79,127,231,0.18),rgba(7,13,24,0)_68%)]" />
              <div className="absolute bottom-0 left-[-8%] right-[-5%] top-[-2%] overflow-hidden">
                <Image
                  src="/images/minha-foto.png"
                  alt="Foto de Thales Campelo"
                  fill
                  priority
                  className="object-cover object-[52%_8%] scale-[1.1] [mask-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_16%,rgba(0,0,0,1)_100%),linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_88%,rgba(0,0,0,0)_100%)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="panel rounded-[18px] px-4 py-4 sm:px-5">
          <SectionTitle
            icon={<Sparkles className="h-4 w-4" />}
            title="Projetos Destaque"
            subtitle="Solucoes reais, com proposito e impacto."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`rounded-[14px] border px-4 py-4 ${project.accent === "cyan" ? "border-[#2d6a73] cyan-glow" : "border-[#294059] blue-glow"} bg-[linear-gradient(180deg,rgba(10,14,24,0.94),rgba(7,10,17,0.98))]`}
              >
                <div className="grid gap-4 grid-cols-[1fr_136px]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span
                          className={`text-[2rem] font-bold ${project.accent === "cyan" ? "text-cyan-300" : "text-green-400"}`}
                        >
                          {project.icon}
                        </span>
                        <h3 className="text-[1.05rem] font-extrabold uppercase text-white">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-6 text-white/72">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-5 inline-flex items-center gap-1 text-sm ${project.accent === "cyan" ? "text-cyan-300" : "text-[#5aa7ff]"}`}
                    >
                      <span>Acessar projeto</span>
                      <CircleArrowOutUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block min-h-[116px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0a1220]"
                  >
                    <Image
                      src={project.image}
                      alt={`Preview do projeto ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tecnologias" className="panel rounded-[18px] px-4 py-4 sm:px-5">
          <SectionTitle
            icon={<Sparkles className="h-4 w-4" />}
            title="Tecnologias"
            subtitle="Ferramentas que uso para construir solucoes modernas."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {stack.map((item, index) => (
              <div
                key={item.label}
                className={`tech-card flex items-center gap-3 rounded-[12px] border px-4 py-4 ${index === 3 ? "border-[#27523f] green-glow" : "border-[#294059] blue-glow"}`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-black/28 text-sm font-semibold text-white">
                  {item.icon}
                </div>
                <span className="text-[0.95rem] text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-[1fr_1fr]">
          <article
            id="sobre"
            className="panel rounded-[18px] px-5 py-5"
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#5aa7ff]" />
              <h2 className="display-font text-[1.15rem] uppercase tracking-[0.2em] text-white">
                Sobre Mim
              </h2>
            </div>

            <p className="text-muted text-[0.97rem] leading-7">
              Formado em Analise de Sistemas, com solida experiencia em
              desenvolvimento, arquitetura de software, definicao de requisitos
              funcionais e modelagem de banco de dados.
            </p>

            <p className="text-muted mt-4 text-[0.97rem] leading-7">
              Meu foco e construir sistemas que resolvem problemas reais, com
              codigo limpo, escalabilidade e uma boa experiencia para o usuario
              final.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-3 rounded-[10px] border border-[#2d4666] px-4 py-3 text-sm text-white hover:border-[#456e9d]"
            >
              <span>Baixar CV</span>
              <Download className="h-4 w-4" />
            </a>
          </article>

          <article
            id="contato"
            className="panel rounded-[18px] px-5 py-5"
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#5aa7ff]" />
              <h2 className="display-font text-[1.15rem] uppercase tracking-[0.2em] text-white">
                Contato
              </h2>
            </div>

            <p className="text-muted max-w-[290px] text-[0.97rem] leading-7">
              Vamos conversar sobre projetos, parcerias e oportunidades.
            </p>

            <div className="mt-5 space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-white sm:text-base">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </article>
        </section>

        <footer className="pb-1 pt-1 text-center text-sm text-white/55">
          <p>&copy; 2024 Thales Campelo. Todos os direitos reservados.</p>
        </footer>
      </div>

      <a
        href="#top"
        aria-label="Voltar ao topo"
        className="fixed bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#345b88] bg-[#123d74] text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
      >
        <ChevronUp className="h-5 w-5" />
      </a>
    </main>
  );
}
