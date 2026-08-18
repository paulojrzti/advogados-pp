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

type IconName = "clock" | "check" | "chart";

type ArticleFigure = {
  src: string;
  alt: string;
  caption: string;
};

type ArticleCard = {
  title: string;
  text: string;
};

type ArticleMetric = {
  title: string;
  text: string;
  icon: IconName;
};

type ArticleSection = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  figure?: ArticleFigure;
  cards?: ArticleCard[];
  metrics?: ArticleMetric[];
  quote?: string;
};

type RelatedArticle = {
  category: string;
  title: string;
  text: string;
  href: string;
  image: string;
};

export type ArticleTemplateProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  cover: string;
  coverAlt: string;
  intro: string;
  sections: ArticleSection[];
  related: RelatedArticle[];
};

const METRIC_ICONS = {
  clock: ClockIcon,
  check: CheckCircleIcon,
  chart: ChartUpIcon,
};

export default function ArticleTemplate({
  number,
  category,
  title,
  description,
  cover,
  coverAlt,
  intro,
  sections,
  related,
}: ArticleTemplateProps) {
  return (
    <main className="flex-1 bg-white">
      <Header />

      <article>
        <header className="relative overflow-hidden bg-black px-6 pb-20 pt-28 text-white sm:px-8 sm:pb-24 lg:px-[5%] lg:pb-28 lg:pt-32">
          <Image
            src={cover}
            alt={coverAlt}
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
              {category}
            </span>
          </nav>

          <div className="relative z-10 mx-auto mt-14 max-w-6xl lg:mt-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-24 hidden select-none lg:block">
              <span className="font-canela text-[18rem] leading-none text-white/[0.05]">
                {number}
              </span>
            </div>
            <div className="relative max-w-4xl">
              <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
                {category}
              </span>
              <h1 className="font-canela mt-5 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                {description}
              </p>
            </div>
          </div>
        </header>

        <div className="px-6 py-16 sm:px-8 sm:py-20 lg:px-[5%] lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
            <div className="max-w-3xl">
              <p className="font-canela text-2xl leading-[1.35] text-neutral-900 sm:text-3xl">
                {intro}
              </p>

              <div className="mt-12 space-y-10 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="font-canela text-3xl leading-tight text-neutral-900 sm:text-4xl">
                      {section.title}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-5">
                        {paragraph}
                      </p>
                    ))}

                    {section.figure ? (
                      <figure className="mt-8">
                        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                          <Image
                            src={section.figure.src}
                            alt={section.figure.alt}
                            fill
                            sizes="(min-width: 1024px) 48rem, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">
                          {section.figure.caption}
                        </figcaption>
                      </figure>
                    ) : null}

                    {section.cards ? (
                      <div className="mt-7 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
                        {section.cards.map((card, index) => {
                          const isBlue = index % 2 === 1;

                          return (
                            <div
                              key={card.title}
                              className={isBlue ? "bg-[#3A43E3] p-6 text-white sm:p-7" : "bg-white p-6 sm:p-7"}
                            >
                              <span className={`font-canela text-xs font-bold tracking-wider ${isBlue ? "text-white/65" : "text-[#3A43E3]"}`}>
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h3 className={`font-canela mt-5 text-2xl ${isBlue ? "text-white" : "text-neutral-900"}`}>
                                {card.title}
                              </h3>
                              <p className={`mt-3 text-sm leading-relaxed ${isBlue ? "text-white/80" : "text-neutral-600"}`}>
                                {card.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                    {section.metrics ? (
                      <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                        {section.metrics.map((metric) => {
                          const Icon = METRIC_ICONS[metric.icon];

                          return (
                            <li key={metric.title} className="border border-neutral-200 bg-white p-5">
                              <span className="flex h-9 w-9 items-center justify-center bg-[#3A43E3]/10 text-[#3A43E3]">
                                <Icon className="h-5 w-5" />
                              </span>
                              <strong className="mt-5 block text-sm font-semibold text-neutral-900">
                                {metric.title}
                              </strong>
                              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                {metric.text}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}

                    {section.quote ? (
                      <blockquote className="font-canela mt-8 text-2xl leading-[1.3] text-neutral-900 sm:text-3xl">
                        “{section.quote}”
                      </blockquote>
                    ) : null}
                  </section>
                ))}
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
                  <label htmlFor={`article-email-${number}`} className="font-canela text-lg">
                    Deixe seu melhor e-mail
                  </label>
                  <input
                    id={`article-email-${number}`}
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
                {sections.slice(0, 4).map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-start gap-3 transition-colors hover:text-[#3A43E3]"
                    >
                      <span className="font-canela text-xs font-bold text-[#3A43E3]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.summary}</span>
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
              {related.map((article) => (
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
