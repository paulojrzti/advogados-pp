import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Header from "@/components/Header";
import { siteOgImage } from "@/lib/site-og";

const title = "Sobre | Scale Company";
const description =
  "Conheça a Scale Company, seus sócios e o time que estrutura operações de crescimento para escritórios de advocacia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sobre" },
  openGraph: { title, description, url: "/sobre", images: [siteOgImage] },
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      <Header theme="light" logoSrc="/images/scale-logo-about.svg" />

      <article>
        <section className="bg-white px-6 pb-20 pt-28 sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-32 lg:pt-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
            <div className="pb-1">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                Sobre a Scale
              </span>
              <h1 className="font-canela mt-5 max-w-3xl text-5xl leading-[1.02] text-neutral-900 sm:text-6xl lg:text-7xl">
                Estratégia é feita por pessoas.
              </h1>
              <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                <p>
                  A Scale é uma operação de crescimento para escritórios que
                  querem transformar presença em oportunidades reais de
                  negócio.
                </p>
                <p>
                  Reunimos estratégia, mídia, tecnologia, criatividade e
                  processo comercial para criar jornadas que fazem sentido para
                  o mercado jurídico.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE7DF] sm:aspect-[16/10] lg:aspect-[1.15/1]">
              <Image
                src="/equipe.jpeg"
                alt="Time da Scale reunido"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 90vw"
                className="object-cover object-[center_65%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-canela text-xs font-bold uppercase tracking-wider text-white sm:bottom-6 sm:left-6">
                Time Scale Company
              </p>
            </div>
          </div>
        </section>

        <Founders />
      </article>

      <Footer />
    </main>
  );
}
