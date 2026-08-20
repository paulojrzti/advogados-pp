import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteOgImage } from "@/lib/site-og";

const title = "Fale com a Scale | Scale Company";
const description =
  "Agende um diagnóstico gratuito e descubra como estruturar a aquisição do seu escritório de advocacia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contato" },
  openGraph: { title, description, url: "/contato", images: [siteOgImage] },
};

export default function ContatoPage() {
  return (
    <main className="flex-1 bg-[#ECE7DF]">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <div className="relative z-10">
            <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-xs text-white/60">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-white/90">
                Contato
              </span>
            </nav>

            <div className="mt-14 max-w-3xl lg:mt-20">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                Vamos conversar?
              </span>
              <h1 className="font-canela mt-5 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                Agende um diagnóstico com a Scale.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Conte um pouco sobre o seu escritório. Nosso time analisa o momento atual e retorna
                pelo WhatsApp com os próximos passos.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                Como funciona
              </span>
              <h2 className="font-canela mt-4 text-3xl leading-tight text-neutral-900 sm:text-4xl">
                Um diagnóstico rápido, sem compromisso.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
                Preencha o formulário com seus dados e um pouco sobre o faturamento do escritório.
                Nosso time entra em contato pelo WhatsApp para entender seus objetivos e mostrar como
                a Scale pode estruturar sua aquisição.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
