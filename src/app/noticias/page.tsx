import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Notícias | Scale Company",
  description:
    "Artigos da Scale sobre aquisição jurídica, tráfego pago, conversão e crescimento para escritórios.",
};

const ARTICLES = [
  {
    id: "estrategia",
    category: "Estratégia",
    title: "A aquisição jurídica não pode depender apenas de indicação.",
    text: "O que muda quando o escritório passa a tratar aquisição como uma operação contínua, com canal, processo e acompanhamento.",
    href: "/conteudos/aquisicao-juridica-operacao-continua",
    image: "/images/article-acquisition-cover.png",
    featured: true,
  },
  {
    id: "aquisicao-juridica",
    category: "Aquisição jurídica",
    title: "Como construir previsibilidade na aquisição do seu escritório",
    text: "Os fundamentos para transformar procura em uma operação comercial com processo, acompanhamento e critério.",
    href: "/conteudos/previsibilidade-na-aquisicao-juridica",
    image: "/images/article-predictability/cover.png",
  },
  {
    id: "trafego-pago",
    category: "Tráfego pago",
    title: "Google Ads para advogados: da intenção de busca ao contrato",
    text: "O que priorizar em campanhas de pesquisa para atrair oportunidades qualificadas.",
    href: "/conteudos/google-ads-para-advogados",
    image: "/images/article-google-ads/cover.png",
  },
  {
    id: "conversao",
    category: "Conversão",
    title: "Landing pages jurídicas que conduzem a conversa certa",
    text: "Uma página eficiente une mensagem, autoridade e um caminho simples até o atendimento.",
    href: "/conteudos/landing-pages-juridicas",
    image: "/images/article-landing-pages/cover.png",
  },
];

const [FEATURED_ARTICLE, ...OTHER_ARTICLES] = ARTICLES;
const RECENT_ARTICLES = OTHER_ARTICLES.slice(0, 3);
const MORE_ARTICLES = OTHER_ARTICLES.slice(3);

const TOPICS = ARTICLES.map((article) => ({
  label: article.category,
  href: `#${article.id}`,
}));

export default function NewsPage() {
  return (
    <main className="flex-1 bg-[#ECE7DF]">
      <Header theme="light" />

      <article>
        <section className="bg-[#ECE7DF] px-6 pb-20 pt-28 sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-8 xl:gap-12">
            <div>
              <h1 className="sr-only">Notícias da Scale</h1>

              <Link
                id={FEATURED_ARTICLE.id}
                href={FEATURED_ARTICLE.href}
                className="group relative flex min-h-[550px] overflow-hidden bg-black p-7 text-white sm:p-10 lg:min-h-[680px] lg:p-12"
              >
                <Image
                  src={FEATURED_ARTICLE.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15" />
                <div className="relative z-10 mt-auto max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/65">
                    {FEATURED_ARTICLE.category}
                  </p>
                  <h2 className="font-canela mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
                    {FEATURED_ARTICLE.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                    {FEATURED_ARTICLE.text}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                    Ler artigo
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>

              {MORE_ARTICLES.length > 0 ? (
                <section className="mt-16" aria-labelledby="outros-artigos">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                        Continue lendo
                      </span>
                      <h2 id="outros-artigos" className="font-canela mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
                        Outros artigos
                      </h2>
                    </div>
                  </div>

                  <div className="mt-9 grid gap-5 xl:grid-cols-2">
                    {MORE_ARTICLES.map((article) => (
                      <Link
                        id={article.id}
                        key={article.title}
                        href={article.href}
                        className="group grid overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 sm:grid-cols-[0.8fr_1fr]"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 sm:aspect-auto">
                          <Image
                            src={article.image}
                            alt=""
                            fill
                            sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="flex flex-col justify-between p-6">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                              {article.category}
                            </p>
                            <h3 className="font-canela mt-4 text-2xl leading-tight text-neutral-900">
                              {article.title}
                            </h3>
                            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{article.text}</p>
                          </div>
                          <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                            Ler artigo
                            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            <aside className="pt-1">
              <div className="space-y-4">
                {RECENT_ARTICLES.map((article, index) => {
                  const isBlue = index === 1;
                  return (
                    <Link
                      id={article.id}
                      key={article.title}
                      href={article.href}
                      className={`group flex overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                        isBlue
                          ? "bg-[#3A43E3] text-white"
                          : "bg-white text-neutral-900"
                      }`}
                    >
                      <div className="relative w-28 shrink-0 overflow-hidden bg-neutral-100 sm:w-36">
                        <Image
                          src={article.image}
                          alt=""
                          fill
                          sizes="9rem"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex min-h-52 flex-1 flex-col justify-between p-5 sm:p-6">
                        <div>
                          <p className={`text-xs font-semibold uppercase tracking-wider ${isBlue ? "text-white/65" : "text-[#3A43E3]"}`}>
                            {article.category}
                          </p>
                          <h3 className="font-canela mt-4 text-xl leading-tight">{article.title}</h3>
                        </div>
                        <span className={`mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${isBlue ? "text-white" : "text-[#3A43E3]"}`}>
                          Ler artigo
                          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <nav aria-label="Sumário de temas" className="mt-10">
                <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
                  Navegue por tema
                </span>
                <h2 className="font-canela mt-4 text-3xl leading-tight text-neutral-900">Sumário de temas</h2>
                <ol className="mt-7 divide-y divide-neutral-200 border-y border-neutral-200">
                  {TOPICS.map((topic, index) => (
                    <li key={topic.label}>
                      <a
                        href={topic.href}
                        className="group flex items-center justify-between gap-4 py-4 text-sm text-neutral-600 transition-colors hover:text-[#3A43E3]"
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-canela text-xs text-[#3A43E3]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {topic.label}
                        </span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
