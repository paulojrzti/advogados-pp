import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterForm from "@/components/NewsletterForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Case de Sucesso: Dr. Vinício Rodrigues | Scale Company",
  description:
    "Como a Scale gerou 5 contratos e mais de R$ 10.500 em honorários no primeiro mês para um escritório de Direito de Família.",
};

const CASE_DETAILS = [
  { label: "Cliente", value: "Dr. Vinício Rodrigues Advocacia" },
  { label: "Nicho", value: "Direito de Família: divórcio, guarda e pensão" },
  { label: "Canais", value: "Google Ads, Meta Ads e Landing Page" },
  { label: "Período analisado", value: "Primeiro mês de operação" },
];

const SOLUTION_PILLARS = [
  {
    number: "01",
    title: "Landing page de alta performance",
    text: "Estruturamos uma página orientada à conversão, com mensagem direta para as dores de pensão, guarda e divórcio. A experiência priorizou autoridade, confiança e um caminho sem atrito até o WhatsApp do escritório.",
  },
  {
    number: "02",
    title: "Google Ads para demanda de alta intenção",
    text: "A campanha de pesquisa concentrou investimento em buscas com intenção real de contratação e excluiu termos ligados a conteúdo gratuito ou consultas sem potencial de contratação.",
  },
  {
    number: "03",
    title: "Meta Ads para ampliar oportunidades",
    text: "Campanhas direcionadas a guarda compartilhada complementaram a estratégia de fundo de funil, criando presença para públicos segmentados antes mesmo de uma busca ativa.",
  },
];

const CONTRACTS = [
  { channel: "Google Ads", title: "Contrato 1: Pensão", value: "R$ 1.500,00" },
  { channel: "Google Ads", title: "Contrato 2: Guarda", value: "R$ 5.000,00" },
  { channel: "Google Ads", title: "Contrato 3", value: "R$ 2.000,00" },
  { channel: "Google Ads", title: "Contrato 4", value: "Em definição" },
  { channel: "Meta Ads", title: "Contrato 5", value: "R$ 2.000,00" },
];

const WHATSAPP_EVIDENCE = [
  "/images/cases/vinicio-rodrigues/Group2010.avif",
  "/images/cases/vinicio-rodrigues/Group2015-redacted.png",
  "/images/cases/vinicio-rodrigues/Group2014.avif",
  "/images/cases/vinicio-rodrigues/Group2013.avif",
  "/images/cases/vinicio-rodrigues/Group2012.avif",
];

export default function VinicioRodriguesCasePage() {
  return (
    <main className="flex-1 bg-[#ECE7DF]">
      <Header />

      <article>
        <section className="bg-black px-6 pb-12 pt-28 text-white sm:px-8 sm:pb-14 lg:px-[5%] lg:pb-16 lg:pt-32">
          <div>
            <nav aria-label="Navegação estrutural" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
              <Link href="/" className="transition-colors hover:text-white">
                Início
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/cases" className="transition-colors hover:text-white">
                Cases
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-white/90">
                Vinício Rodrigues
              </span>
            </nav>

            <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
              <div className="max-w-4xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                Estudo de caso · Direito de Família
              </span>
              <h1 className="font-canela mt-5 text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
                5 contratos e mais de{" "}
                <span className="whitespace-nowrap">R$ 10,5 mil</span> em honorários no primeiro
                mês.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Estratégia de aquisição desenvolvida para o escritório{" "}
                <strong className="font-semibold text-white">Dr. Vinício Rodrigues Advocacia</strong>,
                combinando <strong className="font-semibold text-white">Google Ads</strong>,{" "}
                <strong className="font-semibold text-white">Meta Ads</strong> e uma{" "}
                <strong className="font-semibold text-white">landing page focada em conversão</strong>.
              </p>
              </div>

              <div className="relative aspect-square w-full max-w-sm overflow-hidden border border-white/20 bg-white/5 lg:justify-self-end">
                <Image
                  src="/images/case-vinicio-rodrigues-cover-v2.png"
                  alt="Capa do case do Dr. Vinício Rodrigues"
                  fill
                  priority
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </div>

            <div className="mt-10 grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {CASE_DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-white/15 px-0 py-6 last:border-b-0 sm:px-6 sm:first:pl-0 sm:nth-[2]:border-l sm:nth-[2]:border-white/15 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
                >
                  <p className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-[560px] items-center px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                O desafio
              </span>
              <h2 className="font-canela mx-auto mt-4 max-w-2xl text-4xl leading-tight text-neutral-900 sm:text-5xl">
                Previsibilidade e qualificação no Direito de Família.
              </h2>
            </ScrollReveal>
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <ScrollReveal delayMs={120}>
                <p>
                  O objetivo era estruturar uma operação capaz de gerar novas oportunidades de forma
                  constante, sem depender de indicações e sem sacrificar a qualidade dos contatos.
                </p>
              </ScrollReveal>
              <ScrollReveal delayMs={240}>
                <p>
                  No Direito de Família, o desafio não é apenas atrair conversas. É alcançar pessoas
                  com uma demanda urgente, capacidade de investimento e disposição para contratar um
                  advogado particular.
                </p>
              </ScrollReveal>
              <ScrollReveal delayMs={360}>
                <p>
                  A resposta foi um funil completo, desenhado para transformar procura em atendimento
                  qualificado desde o primeiro contato.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="solucao" className="bg-white px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div className="max-w-2xl">
            <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
              A solução
            </span>
            <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
              Um método de aquisição jurídica em três frentes.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {SOLUTION_PILLARS.map((pillar, index) => {
              const isBlue = index % 2 === 0;

              return (
              <article
                key={pillar.number}
                className={`p-7 sm:p-8 ${
                  isBlue ? "bg-[#3A43E3] text-white" : "border border-neutral-200 bg-white text-neutral-900"
                }`}
              >
                <span className={`font-canela text-sm ${isBlue ? "text-white/65" : "text-[#3A43E3]"}`}>
                  {pillar.number}
                </span>
                <h3 className={`font-canela mt-12 text-2xl leading-tight ${isBlue ? "text-white" : "text-neutral-900"}`}>
                  {pillar.title}
                </h3>
                <p className={`mt-5 text-sm leading-relaxed sm:text-base ${isBlue ? "text-white/75" : "text-neutral-600"}`}>
                  {pillar.text}
                </p>
              </article>
              );
            })}
          </div>

        </section>

        <section id="resultados" className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 lg:px-[5%] lg:py-28">
          <span
            aria-hidden="true"
            className="font-canela pointer-events-none absolute -right-8 top-8 select-none text-[9rem] leading-none text-white/5 sm:text-[14rem]"
          >
            05
          </span>

          <div className="relative">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                  Resultados do primeiro mês
                </span>
                <h2 className="font-canela mt-4 text-4xl leading-tight sm:text-5xl">
                  A operação se traduziu em contratos e receita rastreada.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                Mais do que volume de leads, o trabalho priorizou conversas com contexto, urgência e
                potencial real de contratação.
              </p>
            </div>

            <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="flex min-h-72 flex-col justify-between bg-[#3A43E3] p-7 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/65">
                  Conversas que viraram contrato
                </p>
                <div>
                  <p className="font-canela text-8xl leading-none sm:text-9xl">05</p>
                  <p className="mt-3 text-lg text-white/85">contratos fechados</p>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-white/65">
                  Novos contratos no primeiro mês de operação da estratégia.
                </p>
              </article>

              <article className="flex min-h-72 flex-col justify-between bg-[#F4F0EA] p-7 text-neutral-900 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                  Em honorários rastreados
                </p>
                <p className="font-canela whitespace-nowrap text-5xl leading-none sm:text-6xl">
                  R$ 10,5 mil+
                </p>
                <div className="grid grid-cols-2 border-t border-neutral-300 pt-5">
                  <div>
                    <p className="font-canela text-3xl text-[#3A43E3]">04</p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">via Google Ads</p>
                  </div>
                  <div className="border-l border-neutral-300 pl-5">
                    <p className="font-canela text-3xl text-[#3A43E3]">01</p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">via Meta Ads</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-14">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                    Fechamentos registrados
                  </span>
                  <h3 className="font-canela mt-3 text-2xl leading-tight sm:text-3xl">
                    Os contratos que compõem o resultado.
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-wider text-white/50">Canal e valor por contrato</p>
              </div>

              <ol className="mt-6 divide-y divide-white/15 border-y border-white/15">
                {CONTRACTS.map((contract, index) => (
                  <li
                    key={contract.title}
                    className="grid gap-2 py-5 sm:grid-cols-[3.5rem_1.2fr_1fr_auto] sm:items-center sm:gap-5"
                  >
                    <span className="font-canela text-2xl text-[#588DFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base text-white/90">{contract.title}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
                      {contract.channel}
                    </p>
                    <p className="font-canela text-xl text-white">{contract.value}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
          <div>
            <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
              Registros de resultado
            </span>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h3 className="font-canela max-w-2xl text-3xl leading-tight text-neutral-900 sm:text-4xl">
                Conversas que registram os contratos fechados.
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                Mensagens compartilhadas pelo escritório após a entrada das oportunidades geradas
                pela operação.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5">
              {WHATSAPP_EVIDENCE.map((src, index) => (
                <figure
                  key={src}
                  className="relative aspect-[9/16] overflow-hidden border border-neutral-200 bg-[#050814]"
                >
                  <Image
                    src={src}
                    alt={`Print ${index + 1} de conversa no WhatsApp sobre contratos fechados pelo escritório`}
                    fill
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    className="object-contain"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#3A43E3] px-6 py-20 text-white sm:px-8 lg:px-[5%] lg:py-28">
          <span
            aria-hidden="true"
            className="font-canela pointer-events-none absolute -bottom-14 right-[2%] select-none text-[10rem] leading-none text-white/10 sm:text-[16rem]"
          >
            CASES
          </span>
          <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <div>
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-white/65">
                Conteúdo para escritórios em crescimento
              </span>
              <h2 className="font-canela mt-5 text-4xl leading-tight sm:text-5xl">
                Receba os próximos cases da Scale.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Estratégias, bastidores e resultados reais de aquisição jurídica, direto no seu
                e-mail.
              </p>
            </div>

            <NewsletterForm
              endpoint="/api/lead-cases"
              formClassName="bg-white p-6 text-neutral-900 sm:p-8"
              label="Qual é o seu melhor e-mail?"
              labelClassName="font-canela text-lg"
              inputClassName="mt-5 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
              buttonClassName="mt-6 inline-flex w-full items-center justify-between gap-3 bg-[#101317] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black"
              buttonText="Quero receber os cases"
              disclaimer="Sem spam. Apenas novos cases e insights da Scale."
            />
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
