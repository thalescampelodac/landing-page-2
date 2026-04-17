"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "./lib/gtm";

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
    servicesEnLegacy: {
      eyebrow: "Landing Pages",
      title: "Gostou da minha landing page? Eu posso te ajudar a criar uma!",
      description:
        "Entre em contato comigo em um dos meus canais e vamos conversar sobre a melhor estrutura para o seu projeto.",
      cta: "Ver planos comerciais",
      modalTitle: "Planos comerciais para criaÃ§Ã£o de landing page",
      modalDescription:
        "Pacotes organizados para diferentes nÃ­veis de acabamento, conversÃ£o e integraÃ§Ãµes.",
      close: "Fechar",
      plans: [
        {
          name: "Pacote Essencial",
          price: "R$ 1.990",
          description:
            "Uma pÃ¡gina, responsiva, com seÃ§Ãµes institucionais, links, formulÃ¡rio simples e deploy.",
        },
        {
          name: "Pacote Profissional",
          price: "R$ 3.490",
          description:
            "Tudo do essencial + visual mais autoral, melhor acabamento, animaÃ§Ãµes leves, SEO bÃ¡sico, performance, integraÃ§Ã£o e revisÃµes.",
        },
        {
          name: "Pacote Premium",
          price: "R$ 3.990 a R$ 5.500",
          description:
            "Tudo do profissional + copy estratÃ©gica, funil de conversÃ£o, analytics, testes, mais integraÃ§Ãµes e suporte pÃ³s-entrega.",
        },
      ],
    },
    servicesEsLegacy: {
      eyebrow: "Landing Pages",
      title: "Liked my landing page? I can help you create one too!",
      description:
        "Reach out through one of my channels and letâ€™s talk about the best structure for your project.",
      cta: "View pricing plans",
      modalTitle: "Commercial landing page plans",
      modalDescription:
        "Packages organized for different levels of polish, conversion, and integrations.",
      close: "Close",
      plans: [
        {
          name: "Essential Package",
          price: "R$ 1.990",
          description:
            "One responsive page with institutional sections, links, a simple form, and deployment.",
        },
        {
          name: "Professional Package",
          price: "R$ 3.490",
          description:
            "Everything in Essential plus more distinctive visuals, refined finish, light animations, basic SEO, performance work, integrations, and revisions.",
        },
        {
          name: "Premium Package",
          price: "R$ 3.990 to R$ 5.500",
          description:
            "Everything in Professional plus strategic copy, conversion funnel, analytics, tests, more integrations, and post-launch support.",
        },
      ],
    },
    services: {
      eyebrow: "Landing Pages",
      title: "Â¿Te gustÃ³ mi landing page? TambiÃ©n puedo crear una para ti.",
      description:
        "Ponte en contacto conmigo por uno de mis canales y conversemos sobre la mejor estructura para tu proyecto.",
      cta: "Ver planes comerciales",
      modalTitle: "Planes comerciales para landing pages",
      modalDescription:
        "Paquetes organizados para diferentes niveles de acabado, conversiÃ³n e integraciones.",
      close: "Cerrar",
      plans: [
        {
          name: "Paquete Esencial",
          price: "R$ 1.990",
          description:
            "Una pÃ¡gina responsiva con secciones institucionales, enlaces, formulario simple y deploy.",
        },
        {
          name: "Paquete Profesional",
          price: "R$ 3.490",
          description:
            "Todo lo del esencial mÃ¡s un visual mÃ¡s autoral, mejor acabado, animaciones leves, SEO bÃ¡sico, performance, integraciones y revisiones.",
        },
        {
          name: "Paquete Premium",
          price: "R$ 3.990 a R$ 5.500",
          description:
            "Todo lo del profesional mÃ¡s copy estratÃ©gico, embudo de conversiÃ³n, analytics, pruebas, mÃ¡s integraciones y soporte post-entrega.",
        },
      ],
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

const localizedCopy = {
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
        "Especialista em Solu\u00e7\u00f5es de Software e Arquitetura de Produtos Digitais",
      description:
        "Transformo ideias em sistemas robustos, escal\u00e1veis e inteligentes. Da engenharia de requisitos \u00e0 arquitetura, do banco de dados ao deploy.",
    },
    projects: {
      eyebrow: "Projetos Destaque",
      subtitle: "Solu\u00e7\u00f5es reais, com prop\u00f3sito e impacto.",
      cta: "Acessar projeto",
      comingSoon: "COMING SOON",
      comingSoonDescription:
        "Outros projetos est\u00e3o na esteira de produ\u00e7\u00e3o e chegam em breve.",
      inProgress: "Em produ\u00e7\u00e3o",
    },
    technologies: {
      eyebrow: "Tecnologias",
      subtitle:
        "Ferramentas que uso para construir solu\u00e7\u00f5es modernas.",
    },
    services: {
      eyebrow: "Landing Pages",
      title: "Gostou da minha landing page? Eu posso te ajudar a criar uma!",
      description:
        "Entre em contato comigo em um dos meus canais e vamos conversar sobre a melhor estrutura para o seu projeto.",
      cta: "Ver planos comerciais",
      modalTitle: "Planos comerciais para cria\u00e7\u00e3o de landing page",
      modalDescription:
        "Pacotes organizados para diferentes n\u00edveis de acabamento, convers\u00e3o e integra\u00e7\u00f5es.",
      close: "Fechar",
      plans: [
        {
          name: "Pacote Essencial",
          price: "R$ 1.990",
          usdPrice: "US$ 390",
          description:
            "Uma p\u00e1gina, responsiva, com se\u00e7\u00f5es institucionais, links, formul\u00e1rio simples e deploy.",
        },
        {
          name: "Pacote Profissional",
          price: "R$ 3.490",
          usdPrice: "US$ 690",
          description:
            "Tudo do essencial + visual mais autoral, melhor acabamento, anima\u00e7\u00f5es leves, SEO b\u00e1sico, performance, integra\u00e7\u00e3o e revis\u00f5es.",
        },
        {
          name: "Pacote Premium",
          price: "R$ 3.990 a R$ 5.500",
          usdPrice: "US$ 790 a US$ 1,090",
          description:
            "Tudo do profissional + copy estrat\u00e9gica, funil de convers\u00e3o, analytics, testes, mais integra\u00e7\u00f5es e suporte p\u00f3s-entrega.",
        },
      ],
    },
    mvp: {
      eyebrow: "MVP Express",
      title:
        "Precisa validar uma ideia r\u00e1pido? Eu desenvolvo seu MVP web em at\u00e9 5 dias \u00fateis.",
      description:
        "Escopo enxuto, foco no que realmente importa e entrega completa: produto no ar, c\u00f3digo-fonte, banco, infra e suporte inicial para voc\u00ea come\u00e7ar a operar ou apresentar com seguran\u00e7a.",
      cta: "Ver planos de MVP",
      modalTitle: "Planos comerciais para desenvolvimento de MVP",
      modalDescription:
        "Pacotes pensados para tirar uma ideia do papel com velocidade, clareza de escopo e entrega completa.",
      close: "Fechar",
      supportBadge: "Suporte adicional dispon\u00edvel",
      plans: [
        {
          name: "MVP Essencial",
          price: "R$ 7.990",
          usdPrice: "US$ 1,490",
          description:
            "Para validar uma ideia simples com 1 fluxo principal, at\u00e9 5 telas, banco, deploy, infra b\u00e1sica e c\u00f3digo-fonte entregue.",
        },
        {
          name: "MVP Profissional",
          price: "R$ 11.990",
          usdPrice: "US$ 2,190",
          description:
            "Tudo do Essencial + autentica\u00e7\u00e3o, at\u00e9 8 telas, 2 fluxos principais, integra\u00e7\u00e3o simples, analytics b\u00e1sico e acabamento mais refinado.",
        },
        {
          name: "MVP Premium",
          price: "R$ 15.990 a R$ 19.990",
          usdPrice: "US$ 2,990 a US$ 3,690",
          description:
            "Tudo do Profissional + onboarding mais completo, permiss\u00f5es, integra\u00e7\u00f5es extras, estrutura mais robusta de opera\u00e7\u00e3o e handoff t\u00e9cnico.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre Mim",
      title: "Experi\u00eancia em software, arquitetura e produto.",
      description:
        "Formado em An\u00e1lise de Sistemas, atuo com desenvolvimento, arquitetura de software, defini\u00e7\u00e3o de requisitos funcionais e modelagem de banco de dados.",
      description2:
        "Meu foco \u00e9 construir sistemas que resolvem problemas reais, com c\u00f3digo limpo, escalabilidade e uma boa experi\u00eancia para o usu\u00e1rio final.",
      cta: "Baixar CV",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre projetos, parcerias e oportunidades.",
      phone: "(32) 9 9159-4895",
      email: "thalescampelo@gmail.com",
      linkedin: "linkedin.com/in/thalescampelo",
    },
    footer: "\u00a9 2026 Thales Campelo. Todos os direitos reservados.",
    projectItems: {
      comprovou:
        "Plataforma que simplifica a valida\u00e7\u00e3o de comprovantes, reduzindo fraudes e trazendo confian\u00e7a para transa\u00e7\u00f5es.",
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
    services: {
      eyebrow: "Landing Pages",
      title: "Liked my landing page? I can help you create one too!",
      description:
        "Reach out through one of my channels and let's talk about the best structure for your project.",
      cta: "View pricing plans",
      modalTitle: "Commercial landing page plans",
      modalDescription:
        "Packages organized for different levels of polish, conversion, and integrations.",
      close: "Close",
      plans: [
        {
          name: "Essential Package",
          price: "R$ 1.990",
          usdPrice: "US$ 390",
          description:
            "One responsive page with institutional sections, links, a simple form, and deployment.",
        },
        {
          name: "Professional Package",
          price: "R$ 3.490",
          usdPrice: "US$ 690",
          description:
            "Everything in Essential plus more distinctive visuals, refined finish, light animations, basic SEO, performance work, integrations, and revisions.",
        },
        {
          name: "Premium Package",
          price: "R$ 3.990 to R$ 5.500",
          usdPrice: "US$ 790 to US$ 1,090",
          description:
            "Everything in Professional plus strategic copy, conversion funnel, analytics, tests, more integrations, and post-launch support.",
        },
      ],
    },
    mvp: {
      eyebrow: "MVP Express",
      title:
        "Need to validate an idea fast? I can build your web MVP in up to 5 business days.",
      description:
        "Lean scope, focus on what matters, and complete delivery: deployed product, source code, database, infrastructure, and initial support so you can launch or pitch with confidence.",
      cta: "View MVP plans",
      modalTitle: "Commercial plans for MVP development",
      modalDescription:
        "Packages designed to take an idea off the ground with speed, clear scope, and complete delivery.",
      close: "Close",
      supportBadge: "Additional support available",
      plans: [
        {
          name: "Essential MVP",
          price: "R$ 7.990",
          usdPrice: "US$ 1,490",
          description:
            "To validate a simple idea with 1 main flow, up to 5 screens, database, deployment, basic infrastructure, and delivered source code.",
        },
        {
          name: "Professional MVP",
          price: "R$ 11.990",
          usdPrice: "US$ 2,190",
          description:
            "Everything in Essential + authentication, up to 8 screens, 2 main flows, simple integration, basic analytics, and more polished finishing.",
        },
        {
          name: "Premium MVP",
          price: "R$ 15.990 to R$ 19.990",
          usdPrice: "US$ 2,990 to US$ 3,690",
          description:
            "Everything in Professional + richer onboarding, permissions, extra integrations, stronger operational setup, and technical handoff.",
        },
      ],
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
      title: "Let's talk about projects, partnerships, and opportunities.",
      phone: "(32) 9 9159-4895",
      email: "thalescampelo@gmail.com",
      linkedin: "linkedin.com/in/thalescampelo",
    },
    footer: "\u00a9 2024 Thales Campelo. All rights reserved.",
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
      technologies: "Tecnolog\u00edas",
      contact: "Contacto",
    },
    badge: "Analista de Sistemas",
    hero: {
      firstName: "Thales",
      lastName: "Campelo",
      title:
        "Especialista en Soluciones de Software y Arquitectura de Productos Digitales",
      description:
        "Transformo ideas en sistemas robustos, escalables e inteligentes. Desde la ingenier\u00eda de requisitos hasta la arquitectura, de la base de datos al despliegue.",
    },
    projects: {
      eyebrow: "Proyectos Destacados",
      subtitle: "Soluciones reales, con prop\u00f3sito e impacto.",
      cta: "Abrir proyecto",
      comingSoon: "PR\u00d3XIMAMENTE",
      comingSoonDescription:
        "Otros proyectos est\u00e1n en producci\u00f3n y llegar\u00e1n pronto.",
      inProgress: "En producci\u00f3n",
    },
    technologies: {
      eyebrow: "Tecnolog\u00edas",
      subtitle: "Herramientas que uso para construir soluciones modernas.",
    },
    services: {
      eyebrow: "Landing Pages",
      title:
        "\u00bfTe gust\u00f3 mi landing page? Tambi\u00e9n puedo crear una para ti.",
      description:
        "Ponte en contacto conmigo por uno de mis canales y conversemos sobre la mejor estructura para tu proyecto.",
      cta: "Ver planes comerciales",
      modalTitle: "Planes comerciales para landing pages",
      modalDescription:
        "Paquetes organizados para diferentes niveles de acabado, conversi\u00f3n e integraciones.",
      close: "Cerrar",
      plans: [
        {
          name: "Paquete Esencial",
          price: "R$ 1.990",
          usdPrice: "US$ 390",
          description:
            "Una p\u00e1gina responsiva con secciones institucionales, enlaces, formulario simple y deploy.",
        },
        {
          name: "Paquete Profesional",
          price: "R$ 3.490",
          usdPrice: "US$ 690",
          description:
            "Todo lo del esencial m\u00e1s un visual m\u00e1s autoral, mejor acabado, animaciones leves, SEO b\u00e1sico, performance, integraciones y revisiones.",
        },
        {
          name: "Paquete Premium",
          price: "R$ 3.990 a R$ 5.500",
          usdPrice: "US$ 790 a US$ 1,090",
          description:
            "Todo lo del profesional m\u00e1s copy estrat\u00e9gico, embudo de conversi\u00f3n, analytics, pruebas, m\u00e1s integraciones y soporte post-entrega.",
        },
      ],
    },
    mvp: {
      eyebrow: "MVP Express",
      title:
        "\u00bfNecesitas validar una idea r\u00e1pido? Desarrollo tu MVP web en hasta 5 d\u00edas h\u00e1biles.",
      description:
        "Alcance enxuto, foco en lo esencial y entrega completa: producto publicado, c\u00f3digo fuente, base de datos, infraestructura y soporte inicial para lanzar o presentar con seguridad.",
      cta: "Ver planes de MVP",
      modalTitle: "Planes comerciales para desarrollo de MVP",
      modalDescription:
        "Paquetes pensados para sacar una idea del papel con velocidad, claridad de alcance y entrega completa.",
      close: "Cerrar",
      supportBadge: "Soporte adicional disponible",
      plans: [
        {
          name: "MVP Esencial",
          price: "R$ 7.990",
          usdPrice: "US$ 1,490",
          description:
            "Para validar una idea simple con 1 flujo principal, hasta 5 pantallas, base de datos, deploy, infraestructura b\u00e1sica y entrega del c\u00f3digo fuente.",
        },
        {
          name: "MVP Profesional",
          price: "R$ 11.990",
          usdPrice: "US$ 2,190",
          description:
            "Todo lo del Esencial + autenticaci\u00f3n, hasta 8 pantallas, 2 flujos principales, integraci\u00f3n simple, analytics b\u00e1sico y mejor acabado visual.",
        },
        {
          name: "MVP Premium",
          price: "R$ 15.990 a R$ 19.990",
          usdPrice: "US$ 2,990 a US$ 3,690",
          description:
            "Todo lo del Profesional + onboarding m\u00e1s completo, permisos, integraciones extra, estructura m\u00e1s robusta de operaci\u00f3n y handoff t\u00e9cnico.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre M\u00ed",
      title: "Experiencia en software, arquitectura y producto.",
      description:
        "Graduado en An\u00e1lisis de Sistemas, trabajo con desarrollo de software, arquitectura de software, definici\u00f3n de requisitos funcionales y modelado de base de datos.",
      description2:
        "Mi enfoque es construir sistemas que resuelvan problemas reales con c\u00f3digo limpio, escalabilidad y una gran experiencia para el usuario final.",
      cta: "Descargar CV",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos sobre proyectos, alianzas y oportunidades.",
      phone: "(32) 9 9159-4895",
      email: "thalescampelo@gmail.com",
      linkedin: "linkedin.com/in/thalescampelo",
    },
    footer: "\u00a9 2024 Thales Campelo. Todos los derechos reservados.",
    projectItems: {
      comprovou:
        "Plataforma que simplifica la validaci\u00f3n de comprobantes, reduce fraudes y aporta confianza a las transacciones.",
      rede: "Plataforma colaborativa para conectar personas, compartir conocimiento e impulsar redes.",
    },
  },
} as const;

void copy;

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

const stageSectionBackground = "#01030B";

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
  const [activeModal, setActiveModal] = useState<"landing" | "mvp" | null>(
    null
  );
  const [selectedLanguage, setSelectedLanguage] = useState<
    (typeof languages)[number]
  >(languages[0]);
  const [projectSlides, setProjectSlides] = useState<Record<string, number>>({
    comprovou: 0,
    rede: 0,
  });
  const text = localizedCopy[selectedLanguage.code];
  const cvByLanguage = {
    PT: "/cv/thales-campelo-cv-pt.pdf",
    EN: "/cv/thales-campelo-cv-en.pdf",
    ES: "/cv/thales-campelo-cv-es.pdf",
  } as const;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProjectSlides((current) => ({
        comprovou: (current.comprovou + 1) % 3,
        rede: (current.rede + 1) % 3,
      }));
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!activeModal) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeModal]);

  return (
    <main className="page-shell min-h-screen px-3 py-4 text-white sm:px-5 sm:py-5">
      <div className="mx-auto w-full max-w-[760px] rounded-[24px] border border-[#24364f] bg-[linear-gradient(180deg,rgba(6,10,18,0.98),rgba(5,9,16,0.98))] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_rgba(0,0,0,0.4)]">
        <div className="relative min-h-[500px] w-full overflow-hidden rounded-t-[24px] sm:min-h-[590px] md:min-h-0">
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

              <nav className="flex items-center gap-0 text-[9px] text-white/90 sm:gap-3 sm:text-sm">
                <a
                  href="#sobre"
                  className="px-0.5 py-0.5 hover:text-[#5aa7ff] sm:px-2 sm:py-1"
                >
                  {text.nav.about}
                </a>
                <a
                  href="#projetos"
                  className="px-0.5 py-0.5 hover:text-[#5aa7ff] sm:px-2 sm:py-1"
                >
                  {text.nav.projects}
                </a>
                <a
                  href="#tecnologias"
                  className="px-0.5 py-0.5 hover:text-[#5aa7ff] sm:px-2 sm:py-1"
                >
                  {text.nav.technologies}
                </a>
                <a
                  href="#contato"
                  className="px-0.5 py-0.5 hover:text-[#5aa7ff] sm:px-2 sm:py-1"
                >
                  {text.nav.contact}
                </a>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLanguageOpen((current) => !current)}
                    className="flex items-center gap-1 rounded-[10px] border border-[#2c4260] bg-[rgba(6,10,18,0.55)] px-1 py-0.5 text-white sm:px-3 sm:py-2"
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
                            trackEvent("language_change", {
                              previous_language: selectedLanguage.code,
                              new_language: language.code,
                            });
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
                onClick={() =>
                  trackEvent("social_click", {
                    social_name: item.name,
                    social_url: item.href,
                    section: "hero",
                    language: selectedLanguage.code,
                  })
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
                      onClick={() =>
                        trackEvent("project_click", {
                          project_name: project.name,
                          project_id: project.id,
                          project_url: project.href,
                          language: selectedLanguage.code,
                        })
                      }
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

        <section
          id="tecnologias"
          className="px-4 pb-4 sm:px-5 sm:pb-5"
          style={{ backgroundColor: stageSectionBackground }}
        >
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
                  onClick={() =>
                    trackEvent("technology_click", {
                      technology_name: technology.name,
                      technology_id: technology.id,
                      technology_url: technology.href,
                      language: selectedLanguage.code,
                    })
                  }
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

        <section
          className="px-4 pb-4 sm:px-5 sm:pb-5"
          style={{ backgroundColor: stageSectionBackground }}
        >
          <div className="grid gap-3 lg:grid-cols-2">
            <article
              className="rounded-[18px] border border-[#24364f] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              style={{ backgroundColor: stageSectionBackground }}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <ProjectMark type="spark" />
                  <h2 className="display-font text-[18px] uppercase tracking-[0.12em] text-white">
                    {text.services.eyebrow}
                  </h2>
                </div>

                <div className="mt-5 flex-1">
                  <p className="max-w-[520px] text-[19px] font-medium leading-[1.45] text-white">
                    {text.services.title}
                  </p>
                  <p className="mt-4 max-w-[560px] text-[14px] leading-[1.7] text-white/72">
                    {text.services.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackEvent("open_pricing_modal", {
                      section: "landing_services",
                      language: selectedLanguage.code,
                    });
                    setActiveModal("landing");
                  }}
                  className="mt-6 inline-flex items-center justify-center self-start rounded-[12px] border border-[#2c6d64] bg-[linear-gradient(180deg,rgba(14,37,40,0.98),rgba(9,19,23,0.98))] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  {text.services.cta}
                </button>
              </div>
            </article>

            <article
              className="rounded-[18px] border border-[#24364f] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
              style={{ backgroundColor: stageSectionBackground }}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <ProjectMark type="spark" />
                  <h2 className="display-font text-[18px] uppercase tracking-[0.12em] text-white">
                    {text.mvp.eyebrow}
                  </h2>
                </div>

                <div className="mt-5 flex-1">
                  <p className="max-w-[520px] text-[19px] font-medium leading-[1.45] text-white">
                    {text.mvp.title}
                  </p>
                  <p className="mt-4 max-w-[560px] text-[14px] leading-[1.7] text-white/72">
                    {text.mvp.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    trackEvent("open_pricing_modal", {
                      section: "mvp_services",
                      language: selectedLanguage.code,
                    });
                    setActiveModal("mvp");
                  }}
                  className="mt-6 inline-flex items-center justify-center self-start rounded-[12px] border border-[#2c4260] bg-[linear-gradient(180deg,rgba(16,27,49,0.98),rgba(8,14,28,0.98))] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  {text.mvp.cta}
                </button>
              </div>
            </article>
          </div>
        </section>

        <section
          className="px-4 pb-4 sm:px-5 sm:pb-5"
          style={{ backgroundColor: stageSectionBackground }}
        >
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
                href={cvByLanguage[selectedLanguage.code]}
                download
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("download_cv", {
                    cv_language: selectedLanguage.code,
                    cv_url: cvByLanguage[selectedLanguage.code],
                  })
                }
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
                  onClick={() =>
                    trackEvent("contact_click", {
                      contact_type: "whatsapp",
                      section: "contact",
                      language: selectedLanguage.code,
                    })
                  }
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
                  onClick={() =>
                    trackEvent("contact_click", {
                      contact_type: "email",
                      section: "contact",
                      language: selectedLanguage.code,
                    })
                  }
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
                  onClick={() =>
                    trackEvent("contact_click", {
                      contact_type: "linkedin",
                      section: "contact",
                      language: selectedLanguage.code,
                    })
                  }
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

        <footer
          className="rounded-b-[24px] px-4 pb-6 text-center text-sm text-white/50 sm:px-5"
          style={{ backgroundColor: stageSectionBackground }}
        >
          <div
            className="rounded-[14px] px-4 py-3"
            style={{ backgroundColor: stageSectionBackground }}
          >
            {text.footer}
          </div>
        </footer>
      </div>

      {activeModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(2,6,16,0.82)] px-4 py-6 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={
              activeModal === "landing" ? "plans-modal-title" : "mvp-modal-title"
            }
            className="w-full max-w-[860px] rounded-[24px] border border-[#24364f] bg-[linear-gradient(180deg,rgba(6,10,18,0.99),rgba(5,9,16,0.99))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.48)] sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <ProjectMark type="spark" />
                  <h2
                    id={
                      activeModal === "landing"
                        ? "plans-modal-title"
                        : "mvp-modal-title"
                    }
                    className="display-font text-[18px] uppercase tracking-[0.12em] text-white sm:text-[20px]"
                  >
                    {activeModal === "landing"
                      ? text.services.modalTitle
                      : text.mvp.modalTitle}
                  </h2>
                </div>
                <p className="mt-3 max-w-[620px] text-[14px] leading-[1.7] text-white/68">
                  {activeModal === "landing"
                    ? text.services.modalDescription
                    : text.mvp.modalDescription}
                </p>
                {activeModal === "mvp" ? (
                  <div className="mt-4 inline-flex rounded-full border border-[#2c6d64] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7ad7c8]">
                    {text.mvp.supportBadge}
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-[10px] border border-[#2c4260] px-3 py-2 text-sm text-white/84 transition hover:text-white"
                aria-label={
                  activeModal === "landing"
                    ? text.services.close
                    : text.mvp.close
                }
              >
                {activeModal === "landing"
                  ? text.services.close
                  : text.mvp.close}
              </button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {(activeModal === "landing"
                ? text.services.plans
                : text.mvp.plans
              ).map((plan, index) => (
                <article
                  key={plan.name}
                  className={`rounded-[18px] border p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] ${
                    index === 1
                      ? "border-[#2c6d64] bg-[linear-gradient(180deg,rgba(8,28,33,0.96),rgba(6,16,22,0.96))]"
                      : "border-[#2c4260] bg-[linear-gradient(180deg,rgba(9,14,28,0.96),rgba(6,10,18,0.96))]"
                  }`}
                >
                  <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#58a6ff]">
                    {plan.name}
                  </div>
                  <p className="mt-4 text-[28px] font-semibold leading-none text-white">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7fb1ff]">
                    {plan.usdPrice}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.7] text-white/72">
                    {plan.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
