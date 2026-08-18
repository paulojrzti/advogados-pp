import type { CSSProperties } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="hero-bg-zoom absolute inset-0">
        <Image
          src="/images/hero-home-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

      <Header />

      <div className="relative z-10 mt-auto w-full">
        <div className="px-6 pb-16 pt-40 sm:px-8 lg:px-[5%] lg:pb-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="lg:flex-1">
              <div
                className="hero-anim mb-6 flex items-center gap-3"
                style={{ "--hero-delay": "0.5s" } as CSSProperties}
              >
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
                <span className="text-sm text-white/70">
                  Especialistas em Marketing Jurídico
                </span>
              </div>

              <h1
                className="hero-anim font-canela max-w-5xl text-[2.75rem] font-normal leading-[1.08] text-white sm:text-[3.75rem] lg:text-[4.604rem]"
                style={{ "--hero-delay": "0.65s" } as CSSProperties}
              >
                Sua máquina de aquisição jurídica,{" "}
                <span className="text-gradient-blue">pronta para crescer.</span>
              </h1>

              <p
                className="hero-anim mt-6 max-w-lg text-lg leading-relaxed text-white/80"
                style={{ "--hero-delay": "0.85s" } as CSSProperties}
              >
                <strong className="font-semibold text-white">Estratégia</strong>,{" "}
                <strong className="font-semibold text-white">tráfego</strong>,{" "}
                <strong className="font-semibold text-white">design</strong> e
                conteúdo em uma única operação. Nós estruturamos tudo para
                transformar a presença digital do seu escritório em{" "}
                <strong className="font-semibold text-white">
                  aquisição previsível
                </strong>
                .
              </p>
            </div>

            <div
              className="hero-anim flex shrink-0 flex-wrap items-center gap-4"
              style={{ "--hero-delay": "1.05s" } as CSSProperties}
            >
              <a
                href="#"
                className="flex items-center gap-3 rounded-none bg-[#3A43E3] px-5 py-[15.034px] text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#2f37c9]"
              >
                NOSSOS SERVIÇOS
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="btn-liquid-glass rounded-none text-xs font-semibold tracking-wider text-white"
              >
                FALE CONOSCO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
