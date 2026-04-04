"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "PT", label: "Portugues", flag: "/images/flags/br.svg" },
  { code: "EN", label: "English", flag: "/images/flags/us.svg" },
  { code: "ES", label: "Espanol", flag: "/images/flags/es.svg" },
] as const;

function FlagIcon({ flag, label }: { flag: string; label: string }) {
  return (
    <span className="relative inline-block h-3.5 w-5 overflow-hidden rounded-[3px] border border-white/20">
      <Image src={flag} alt={label} fill className="object-cover" />
    </span>
  );
}

export default function Home() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<(typeof languages)[number]>(
    languages[0],
  );

  return (
    <main className="page-shell min-h-screen px-3 py-4 text-white sm:px-5 sm:py-5">
      <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-[24px] border border-[#24364f] bg-[linear-gradient(180deg,rgba(6,10,18,0.98),rgba(5,9,16,0.98))] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_rgba(0,0,0,0.4)]">
        <div className="relative w-full">
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
                  Sobre
                </a>
                <a href="#projetos" className="px-2 py-1 hover:text-[#5aa7ff]">
                  Projetos
                </a>
                <a
                  href="#tecnologias"
                  className="px-2 py-1 hover:text-[#5aa7ff]"
                >
                  Tecnologias
                </a>
                <a href="#contato" className="px-2 py-1 hover:text-[#5aa7ff]">
                  Contato
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
                      className={`h-3.5 w-3.5 transition ${languageOpen ? "rotate-180" : ""}`}
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

          <div className="absolute left-5 top-[90px] z-10">
            <div className="inline-flex items-center rounded-[9px] border border-[#2c4260] bg-[rgba(6,10,18,0.45)] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#58a6ff] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-[11px]">
              Analista de Sistemas
            </div>
          </div>

          <div className="absolute left-5 top-[138px] z-10">
            <h1 className="display-font text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-[46px]">
              <span className="block">Thales</span>
              <span className="block bg-[linear-gradient(180deg,#6eb4ff_0%,#3d7fff_100%)] bg-clip-text text-transparent">
                Campelo
              </span>
            </h1>
          </div>

          <div className="absolute left-5 top-[235px] z-10 max-w-[380px]">
            <p className="text-[17px] font-medium leading-[1.35] text-white sm:text-[18px]">
              Especialista em Solucoes de Software e Arquitetura de Produtos
              Digitais
            </p>
            <p className="mt-4 text-[13px] leading-[1.55] text-white/72 sm:text-[14px]">
              Transformo ideias em sistemas robustos, escalaveis e
              inteligentes. Da engenharia de requisitos a arquitetura, do
              banco de dados ao deploy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
