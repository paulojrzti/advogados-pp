import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ArrowUpRightIcon,
  ChartUpIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@/components/icons";
import { siteOgImage } from "@/lib/site-og";

const title = "Como construir previsibilidade na aquisição do seu escritório | Scale Company";
const description =
  "Um guia prático para transformar aquisição jurídica em uma rotina de canais, atendimento e acompanhamento.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/conteudos/previsibilidade-na-aquisicao-juridica" },
  openGraph: {
    title,
    description,
    url: "/conteudos/previsibilidade-na-aquisicao-juridica",
    images: [siteOgImage],
  },
};

const ARTICLE_SECTIONS = [
  { id: "meta", label: "Comece por uma meta que cabe na operação." },
  { id: "caminho", label: "Defina um caminho simples até a conversa." },
  { id: "atendimento", label: "Atendimento também é aquisição." },
  { id: "rotina", label: "Crie uma rotina de revisão." },
];

export default function PredictableAcquisitionArticle() {
  return (
    <main className="flex-1 bg-white">
      <Header />

      <article>
        <header className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <Image
            src="/images/article-predictability/cover.png"
            alt="Mesa de escritório organizada para planejamento"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <nav
            aria-label="Navegação estrutural"
            className="relative z-10 flex items-center gap-2 text-xs text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Início
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#conteudos" className="transition-colors hover:text-white">
              Conteúdos
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="truncate text-white/90">
              Aquisição jurídica
            </span>
          </nav>

          <div className="relative z-10 mx-auto mt-14 max-w-6xl lg:mt-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-24 hidden select-none lg:block">
              <span className="font-canela text-[18rem] leading-none text-white/[0.05]">02</span>
            </div>
            <div className="relative max-w-4xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                Aquisição jurídica
              </span>
              <h1 className="font-canela mt-5 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                Como construir previsibilidade na aquisição do seu escritório.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                Os fundamentos para transformar procura em uma operação com
                processo, acompanhamento e critério de decisão.
              </p>
            </div>
          </div>
        </header>

        <div className="px-6 py-16 sm:px-8 sm:py-20 lg:px-[5%] lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
            <div className="max-w-3xl">
              <p className="font-canela text-2xl leading-[1.35] text-neutral-900 sm:text-3xl">
                Previsibilidade não é saber quantos contratos vão entrar na
                próxima semana. É conhecer as alavancas que o escritório pode
                ajustar para gerar conversas melhores de forma constante.
              </p>

              <figure className="mt-12">
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/article-predictability/weekly-planning.png"
                    alt="Profissional organizando o planejamento semanal em escritório"
                    fill
                    sizes="(min-width: 1024px) 48rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">
                  Previsibilidade começa com uma rotina simples e repetível de
                  decisões, não com uma promessa de resultado rápido.
                </figcaption>
              </figure>

              <div className="mt-12 space-y-10 text-base leading-relaxed text-neutral-600 sm:text-lg">
                <section id="meta" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Comece por uma meta que cabe na operação.
                  </h2>
                  <p className="mt-5">
                    A vontade de crescer costuma começar por uma pergunta ampla:
                    “como consigo mais clientes?”. Ela é legítima, mas ainda não
                    ajuda a escolher um caminho. A operação precisa de uma meta
                    que possa ser traduzida em decisões de marketing e comercial.
                  </p>
                  <p className="mt-5">
                    Pode ser aumentar a procura por uma área específica, ocupar
                    uma agenda que hoje está ociosa ou ganhar presença em uma
                    região. O ponto é transformar o desejo de crescimento em um
                    foco que o time consiga acompanhar por algumas semanas.
                  </p>
                  <p className="mt-5">
                    Quando tudo é prioridade, a comunicação fica genérica e o
                    investimento se dispersa. Um recorte claro permite ajustar a
                    mensagem, escolher o canal e reconhecer com mais rapidez se a
                    procura que chegou faz sentido para o escritório.
                  </p>
                </section>

                <section id="caminho" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Defina um caminho simples até a conversa.
                  </h2>
                  <p className="mt-5">
                    Cada oportunidade passa por uma sequência, mesmo quando ela
                    parece informal. Alguém encontra o escritório, entende se ele
                    atende aquela necessidade, confia o suficiente para chamar e
                    espera uma resposta. A função da aquisição é remover atrito
                    desse percurso.
                  </p>
                  <p className="mt-5">
                    O escritório não precisa estar em todos os canais ao mesmo
                    tempo. Precisa estar bem onde existe demanda e ter uma próxima
                    ação óbvia para quem demonstra interesse. Quanto mais curto e
                    coerente for esse caminho, mais fácil será entender onde uma
                    oportunidade avançou ou travou.
                  </p>

                  <div className="mt-7 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
                    {[
                      ["01", "Demanda", "Escolha canais que aproximem o escritório de uma procura real."],
                      ["02", "Mensagem", "Fale de uma dor e de um serviço que o potencial cliente reconhece."],
                      ["03", "Conversa", "Leve a pessoa para um atendimento simples, rápido e contextualizado."],
                    ].map(([number, title, text], index) => {
                      const isBlue = index % 2 === 1;

                      return (
                        <div key={number} className={isBlue ? "bg-[#3A43E3] p-6 text-white sm:p-7" : "bg-white p-6 sm:p-7"}>
                          <span className={`font-canela text-xs font-bold tracking-wider ${isBlue ? "text-white/65" : "text-[#3A43E3]"}`}>
                            {number}
                          </span>
                          <h3 className={`font-canela mt-5 text-2xl ${isBlue ? "text-white" : "text-neutral-900"}`}>{title}</h3>
                          <p className={`mt-3 text-sm leading-relaxed ${isBlue ? "text-white/80" : "text-neutral-600"}`}>{text}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section id="atendimento" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Atendimento também é aquisição.
                  </h2>
                  <p className="mt-5">
                    É comum separar demais as coisas: o marketing gera o contato
                    e o comercial resolve o resto. Na prática, a experiência é
                    uma só para quem está do outro lado. Se a resposta demora, a
                    conversa começa sem contexto ou não existe retorno, a confiança
                    construída antes se perde rápido.
                  </p>
                  <p className="mt-5">
                    Uma rotina comercial mínima já muda bastante o cenário:
                    registrar de onde veio a pessoa, responder com agilidade,
                    entender a demanda e manter um próximo passo combinado. Isso
                    não é burocracia. É cuidado com uma oportunidade que custou
                    tempo, reputação e investimento para chegar até ali.
                  </p>
                </section>

                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/article-predictability/performance-review.png"
                      alt="Profissionais analisando informações em uma reunião de escritório"
                      fill
                      sizes="(min-width: 1024px) 48rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">
                    Crescimento previsível depende de um time que enxerga os
                    mesmos dados e sabe qual decisão tomar em seguida.
                  </figcaption>
                </figure>

                <section id="rotina" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Crie uma rotina de revisão.
                  </h2>
                  <p className="mt-5">
                    Previsibilidade não vem de deixar uma campanha rodando sem
                    olhar. Ela aparece quando o escritório cria um intervalo
                    recorrente para revisar sinais, conversar sobre aprendizados e
                    escolher o próximo ajuste com calma.
                  </p>
                  <p className="mt-5">
                    O ritmo não precisa ser complexo. O que importa é a repetição
                    e a clareza sobre quem olha cada parte da operação. Uma boa
                    rotina evita decisões por ansiedade e reduz a tentação de
                    mudar tudo antes de haver dados suficientes.
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        title: "Toda semana",
                        text: "Olhe o volume, a origem e a velocidade de resposta das novas conversas.",
                        Icon: ClockIcon,
                      },
                      {
                        title: "A cada quinzena",
                        text: "Confronte o que a campanha prometeu com o que o atendimento recebeu.",
                        Icon: CheckCircleIcon,
                      },
                      {
                        title: "Todo mês",
                        text: "Decida o que manter, aprimorar ou interromper com base no avanço comercial.",
                        Icon: ChartUpIcon,
                      },
                    ].map(({ title, text, Icon }) => (
                      <li key={title} className="border border-neutral-200 bg-white p-5">
                        <span className="flex h-9 w-9 items-center justify-center bg-[#3A43E3]/10 text-[#3A43E3]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <strong className="mt-5 block text-sm font-semibold text-neutral-900">
                          {title}
                        </strong>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    O que muda ao longo dos próximos meses.
                  </h2>
                  <p className="mt-5">
                    No início, a maior mudança é de visibilidade. O escritório
                    passa a enxergar de onde vêm as conversas e quais delas têm
                    mais aderência. Em seguida, os ajustes se tornam mais precisos:
                    mensagem, página, segmentação e atendimento deixam de ser
                    decisões isoladas.
                  </p>
                  <p className="mt-5">
                    Com o tempo, o ganho não é apenas mais volume. É a capacidade
                    de planejar com mais segurança, distribuir melhor a agenda e
                    escolher onde colocar energia. Essa é a diferença entre
                    depender de picos de procura e construir uma frente de
                    crescimento de verdade.
                  </p>
                  <blockquote className="font-canela mt-8 text-2xl leading-[1.3] text-neutral-900 sm:text-3xl">
                    “Previsibilidade não é acertar o futuro. É ter uma operação
                    que aprende rápido o suficiente para melhorar o próximo mês.”
                  </blockquote>
                </section>
              </div>

              <section className="mt-14 grid overflow-hidden bg-[#3A43E3] text-white sm:grid-cols-[1fr_0.8fr]">
                <div className="p-7 sm:p-8">
                  <span className="font-canela text-xs font-bold uppercase tracking-wider text-white/65">
                    Conteúdos da Scale
                  </span>
                  <h2 className="font-canela mt-4 text-3xl leading-[1.1] sm:text-4xl">
                    Receba os próximos artigos antes de todo mundo.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Estratégias de aquisição, aprendizados de campanha e
                    bastidores de operações para escritórios que querem crescer
                    com mais critério.
                  </p>
                </div>

                <form
                  action="mailto:contato@scalecompany.com.br?subject=Quero receber os artigos da Scale"
                  method="post"
                  encType="text/plain"
                  className="m-4 bg-white p-6 text-neutral-900 sm:m-5"
                >
                  <label htmlFor="predictability-email" className="font-canela text-lg">
                    Deixe seu melhor e-mail
                  </label>
                  <input
                    id="predictability-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="seuemail@escritorio.com.br"
                    className="mt-5 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
                  />
                  <button
                    type="submit"
                    className="mt-5 inline-flex w-full items-center justify-between gap-3 bg-[#101317] px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black"
                  >
                    Quero receber os artigos
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
                  </button>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                    Sem spam. Apenas conteúdos da Scale.
                  </p>
                </form>
              </section>
            </div>

            <aside className="h-fit border-t border-neutral-200 pt-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                Neste artigo
              </p>
              <ol className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-600">
                {ARTICLE_SECTIONS.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 transition-colors hover:text-[#3A43E3]"
                    >
                      <span className="font-canela text-xs font-bold text-[#3A43E3]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>

        <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                  Continue lendo
                </span>
                <h2 className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                  Artigos relacionados
                </h2>
              </div>
              <Link
                href="/#conteudos"
                className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3] transition-opacity hover:opacity-70"
              >
                Ver todos os conteúdos
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {[
                {
                  category: "Estratégia",
                  title: "A aquisição jurídica não pode depender apenas de indicação.",
                  text: "O que muda quando o escritório passa a tratar aquisição como uma operação contínua.",
                  href: "/conteudos/aquisicao-juridica-operacao-continua",
                  image: "/images/article-acquisition-cover.png",
                },
                {
                  category: "Tráfego pago",
                  title: "Google Ads para advogados: da intenção de busca ao contrato",
                  text: "O que priorizar em campanhas de pesquisa para atrair oportunidades qualificadas.",
                  href: "/conteudos/google-ads-para-advogados",
                  image: "/images/article-google-ads/cover.png",
                },
                {
                  category: "Conversão",
                  title: "Landing pages jurídicas que conduzem a conversa certa",
                  text: "Uma página eficiente une mensagem, autoridade e um caminho simples até o atendimento.",
                  href: "/conteudos/landing-pages-juridicas",
                  image: "/images/article-landing-pages/cover.png",
                },
              ].map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group flex overflow-hidden border border-neutral-200 transition-colors hover:border-[#3A43E3]"
                >
                  <div className="flex w-full flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 24rem, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-h-64 flex-1 flex-col justify-between p-6 sm:p-8">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                          {article.category}
                        </p>
                        <h3 className="font-canela mt-5 text-2xl leading-tight text-neutral-900">
                          {article.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                          {article.text}
                        </p>
                      </div>
                      <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                        Ler artigo
                        <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
