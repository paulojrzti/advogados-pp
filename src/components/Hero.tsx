import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { ArrowUpRightIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black lg:min-h-screen">
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

      <div className="relative z-10 flex flex-1 items-center justify-center lg:mt-auto lg:block lg:flex-none">
        <div className="w-full px-6 py-24 sm:px-8 lg:px-[5%] lg:pb-24 lg:pt-40">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="lg:flex-1">
              <div
                className="hero-anim mb-6 flex items-center justify-center gap-3 lg:justify-start"
                style={{ "--hero-delay": "0.5s" } as CSSProperties}
              >
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
                <span className="text-sm text-white/70">
                  Especialistas em Marketing Jurídico
                </span>
              </div>

              <h1
                className="hero-anim font-canela mx-auto max-w-5xl text-[2.75rem] font-normal leading-[1.08] text-white sm:text-[3.75rem] lg:mx-0 lg:text-[4.604rem]"
                style={{ "--hero-delay": "0.65s" } as CSSProperties}
              >
                Sua máquina de aquisição jurídica,{" "}
                <span className="text-gradient-blue">pronta para crescer.</span>
              </h1>

              <p
                className="hero-anim mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/80 lg:mx-0"
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
              className="hero-anim flex shrink-0 flex-wrap items-center justify-center gap-4 lg:justify-start"
              style={{ "--hero-delay": "1.05s" } as CSSProperties}
            >
              <Link
                href="/servicos"
                className="hidden items-center gap-3 rounded-none bg-[#3A43E3] px-5 py-[15.034px] text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#2f37c9] lg:flex"
              >
                NOSSOS SERVIÇOS
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>

              <Link
                href="/contato"
                className="btn-liquid-glass rounded-none text-xs font-semibold tracking-wider text-white"
              >
                FALE CONOSCO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
