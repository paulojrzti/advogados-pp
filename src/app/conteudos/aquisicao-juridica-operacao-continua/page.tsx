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
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "A aquisição jurídica não pode depender apenas de indicação | Scale Company",
  description:
    "Entenda como estruturar uma operação contínua de aquisição para o seu escritório, com canal, processo e acompanhamento.",
};

const ARTICLE_SECTIONS = [
  { id: "indicacao", label: "Indicação é ativo, não operação." },
  { id: "rotina", label: "Aquisição é uma rotina contínua." },
  { id: "estrutura", label: "Canal, processo e acompanhamento." },
  { id: "comercial", label: "O comercial como parte da estratégia." },
];

export default function LegalAcquisitionArticle() {
  return (
    <main className="flex-1 bg-white">
      <Header />

      <article>
        <header className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <Image
            src="/images/article-acquisition-cover.png"
            alt=""
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
              Estratégia
            </span>
          </nav>

          <div className="relative z-10 mx-auto mt-14 max-w-6xl lg:mt-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-24 hidden select-none lg:block">
              <span className="font-canela text-[18rem] leading-none text-white/[0.05]">01</span>
            </div>
            <div className="relative max-w-4xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                Estratégia
              </span>
              <h1 className="font-canela mt-5 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                A aquisição jurídica não pode depender apenas de indicação.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                O que muda quando o escritório passa a tratar aquisição como
                uma operação contínua, com canal, processo e acompanhamento.
              </p>
            </div>
          </div>
        </header>

        <div className="px-6 py-16 sm:px-8 sm:py-20 lg:px-[5%] lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
            <div className="max-w-3xl">
              <p className="font-canela text-2xl leading-[1.35] text-neutral-900 sm:text-3xl">
                Indicação é valiosa. Mas, quando ela é o único motor de novos
                negócios, o escritório não tem controle sobre a própria agenda.
              </p>

              <figure className="mt-12">
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/article-acquisition/intake-review.png"
                    alt="Profissional revisando informações de atendimento em um escritório"
                    fill
                    sizes="(min-width: 1024px) 48rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">
                  Uma aquisição bem estruturada começa antes da campanha: começa
                  entendendo qual conversa o escritório quer gerar.
                </figcaption>
              </figure>

              <div className="mt-12 space-y-10 text-base leading-relaxed text-neutral-600 sm:text-lg">
                <section id="indicacao" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Indicação é ativo. Não é operação.
                  </h2>
                  <p className="mt-5">
                    Uma boa reputação sempre vai gerar recomendações, e isso é
                    ótimo. O problema começa quando o fluxo de novas conversas
                    depende exclusivamente de algo que o escritório não consegue
                    prever, medir ou acelerar.
                  </p>
                  <p className="mt-5">
                    Em um mês a agenda está cheia. No outro, o movimento cai e a
                    equipe não sabe exatamente por quê. Esse vai e vem não é falta
                    de competência jurídica. É ausência de uma estrutura de
                    aquisição.
                  </p>
                  <p className="mt-5">
                    Isso também dificulta decisões importantes. Sem saber de onde
                    vêm as oportunidades, quais áreas atraem mais procura e onde
                    os contatos se perdem, qualquer investimento passa a parecer
                    uma aposta. A indicação continua sendo bem-vinda, mas deixa
                    de carregar sozinha o peso do crescimento.
                  </p>
                </section>

                <section id="rotina" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Aquisição é uma rotina, não uma campanha solta.
                  </h2>
                  <p className="mt-5">
                    Tratar aquisição como operação contínua muda a pergunta. Em
                    vez de perguntar “qual anúncio vamos rodar?”, o escritório
                    começa a olhar para o caminho inteiro: onde a demanda nasce,
                    como ela chega, quem responde e o que acontece depois da
                    primeira mensagem.
                  </p>
                  <p className="mt-5">
                    É assim que marketing deixa de ser uma ação pontual e passa a
                    ocupar seu lugar: uma frente de crescimento ligada ao ritmo
                    comercial do escritório.
                  </p>
                  <p className="mt-5">
                    Na prática, isso pede uma cadência. Há um plano de canais,
                    uma mensagem que conversa com a demanda certa, um caminho
                    simples até o atendimento e uma rotina para revisar o que
                    está funcionando. Nada precisa nascer perfeito. Precisa ser
                    acompanhado o suficiente para melhorar mês a mês.
                  </p>
                </section>

                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/article-acquisition/operation-planning.png"
                      alt="Profissionais planejando uma operação em escritório"
                      fill
                      sizes="(min-width: 1024px) 48rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">
                    Canal, atendimento e acompanhamento precisam fazer parte da
                    mesma conversa.
                  </figcaption>
                </figure>

                <section id="estrutura" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    O que essa operação precisa ter.
                  </h2>
                  <div className="mt-6 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
                    {[
                      ["01", "Canais", "Mídia e presença orgânica pensadas para alcançar a demanda certa."],
                      ["02", "Processo", "Página, atendimento e critérios claros para conduzir cada conversa."],
                      ["03", "Acompanhamento", "Dados e rotina para entender o que avança, o que trava e o que ajustar."],
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
                  <p className="mt-6">
                    A ordem importa. Não adianta levar mais gente para uma página
                    sem uma mensagem clara, nem organizar o atendimento se a
                    demanda chega desalinhada. O ganho aparece quando as três
                    frentes se reforçam e o escritório enxerga o caminho completo
                    de uma oportunidade.
                  </p>
                </section>

                <section id="comercial" className="scroll-mt-28">
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    O comercial faz parte da estratégia.
                  </h2>
                  <p className="mt-5">
                    Não existe campanha que resolva uma conversa sem resposta,
                    uma abordagem genérica ou um follow-up esquecido. Quando a
                    oportunidade chega, a experiência que ela encontra precisa
                    estar à altura da confiança que a comunicação construiu.
                  </p>
                  <p className="mt-5">
                    Por isso, uma operação madura acompanha o percurso até o
                    contrato. Ela cruza origem do contato, velocidade de resposta,
                    qualidade da conversa e avanço comercial para saber onde o
                    crescimento está sendo ganho ou perdido.
                  </p>
                  <p className="mt-5">
                    Esse acompanhamento não precisa transformar o escritório em
                    um call center. Ele serve para criar contexto: saber quem
                    chegou, qual era a demanda, quando houve retorno e se o
                    atendimento fez a conversa avançar. É desse contexto que saem
                    os ajustes mais valiosos da operação.
                  </p>
                </section>

                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/article-acquisition/commercial-follow-up.png"
                      alt="Mesa de trabalho organizada para acompanhamento comercial"
                      fill
                      sizes="(min-width: 1024px) 48rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">
                    A rotina comercial é onde uma oportunidade deixa de ser
                    contato e pode se transformar em contrato.
                  </figcaption>
                </figure>

                <section>
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    O que vale acompanhar de verdade.
                  </h2>
                  <p className="mt-5">
                    Volume de leads sozinho não explica a qualidade de uma
                    operação. O mais útil é acompanhar indicadores que ajudam a
                    tomar uma decisão prática, sem transformar a gestão em uma
                    planilha infinita.
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        title: "Origem da oportunidade",
                        text: "Qual canal trouxe a conversa e para qual serviço.",
                        Icon: MapPinIcon,
                      },
                      {
                        title: "Tempo de resposta",
                        text: "Quanto tempo o potencial cliente espera até ser atendido.",
                        Icon: ClockIcon,
                      },
                      {
                        title: "Qualificação",
                        text: "Se a conversa tem aderência ao perfil de cliente que o escritório quer atender.",
                        Icon: CheckCircleIcon,
                      },
                      {
                        title: "Avanço comercial",
                        text: "Onde os contatos param e quais mudanças melhoram a taxa de contratação.",
                        Icon: ChartUpIcon,
                      },
                    ].map(({ title, text, Icon }) => (
                      <li key={title} className="flex gap-4 border border-neutral-200 bg-white p-5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#3A43E3]/10 text-[#3A43E3]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <strong className="block text-sm font-semibold text-neutral-900">
                            {title}
                          </strong>
                          <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                            {text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                    Previsibilidade não é promessa. É construção.
                  </h2>
                  <p className="mt-5">
                    Nenhum canal substitui uma boa reputação. O objetivo é outro:
                    somar uma fonte de demanda que o escritório consegue ativar,
                    analisar e aprimorar ao longo do tempo.
                  </p>
                  <p className="mt-5">
                    Quando canal, processo e acompanhamento trabalham juntos, a
                    aquisição deixa de ser uma aposta. E o escritório passa a ter
                    mais clareza para decidir o próximo passo de crescimento.
                  </p>
                  <blockquote className="font-canela mt-8 text-2xl leading-[1.3] text-neutral-900 sm:text-3xl">
                    “Crescer com mais previsibilidade não é trocar indicação por
                    anúncio. É parar de depender de um único caminho para gerar
                    conversas boas.”
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
                  <label htmlFor="article-email" className="font-canela text-lg">
                    Deixe seu melhor e-mail
                  </label>
                  <input
                    id="article-email"
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
                  category: "Aquisição jurídica",
                  title: "Como construir previsibilidade na aquisição do seu escritório",
                  text: "Os fundamentos para transformar procura em uma operação comercial com critério.",
                  href: "/conteudos/previsibilidade-na-aquisicao-juridica",
                  image: "/images/article-predictability/cover.png",
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
