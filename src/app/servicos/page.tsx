import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "Serviços | Scale Company",
  description:
    "Estratégias de tráfego pago, landing pages, CRM, design e comercial para escritórios que querem crescer com previsibilidade.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-white">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <Image
            src="/images/services-hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10">
            <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-xs text-white/60">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-white/90">
                Serviços
              </span>
            </nav>

            <div className="mx-auto mt-14 max-w-4xl text-center">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                Serviços Scale
              </span>
              <h1 className="font-canela mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Tudo o que seu escritório precisa para crescer com previsibilidade.
              </h1>
            </div>
          </div>
        </section>

        <ServicesList />
      </article>

      <Footer />
    </main>
  );
}
