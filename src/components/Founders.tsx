import Image from "next/image";

type Founder = {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
};

const FOUNDERS: Founder[] = [
  {
    id: "gabriel",
    name: "Gabriel Dias",
    role: "Co-fundador · Liderança",
    description:
      "Cofundador da Scale e um dos nomes por trás de uma operação que já atendeu mais de 700 escritórios. Sua visão de mercado ajudou a transformar uma ideia nascida no fundo de um quarto em uma empresa de alcance nacional.",
    image: "/socios/gabriel-dias.png",
  },
  {
    id: "pedro",
    name: "Pedro Clark",
    role: "Co-fundador · Liderança",
    description:
      "Cofundador da Scale e peça-chave na construção de uma empresa que cresceu sem perder proximidade com o cliente. Une visão de negócio e execução para transformar ambição em uma operação que entrega resultado todos os dias.",
    image: "/socios/pedro-clark.png",
  },
  {
    id: "leonardo",
    name: "Leonardo Carmo",
    role: "Operações, Marketing & Tecnologia",
    description:
      "Sócio, responsável pela área operacional. Hoje, carrega uma visão rara de operação: sabe o que precisa acontecer para a estratégia sair do papel e ganhar escala.",
    image: "/socios/leonardo-carmo.png",
  },
  {
    id: "samuel",
    name: "Samuel Alves",
    role: "Head de Vendas",
    description:
      "Mais de 10 anos de estrada em vendas consultivas B2B e B2C. Chega à Scale com a bagagem de quem já conduziu negociações complexas e entende que confiança é o ponto de partida de qualquer grande venda.",
    image: "/socios/samuel-alves.png",
  },
];

export default function Founders() {
  return (
    <section className="bg-[#ECE7DF]">
      <div className="flex flex-col gap-8 px-6 pb-10 pt-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-[5%] lg:pt-16">
        <div>
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Sócios
          </span>
          <h2 className="mt-4 text-4xl leading-tight text-neutral-900 sm:text-5xl">
            Quem construiu
            <br />
            da Scale
          </h2>
        </div>

        <p className="max-w-sm text-base leading-relaxed text-neutral-600">
          Pedro e Gabriel começaram no fundo de um quarto com uma ideia
          simples: marketing só vale quando coloca a pessoa certa em uma
          conversa de verdade. Hoje, a Scale já atendeu mais de 700 escritórios.
        </p>
      </div>

      <div className="px-6 sm:px-8 lg:px-[5%]">
        <div className="lg:hidden">
          {FOUNDERS.map((founder, index) => (
            <article key={`${founder.id}-mobile`} className="border-t border-neutral-300 py-7 first:border-t-0 first:pt-0">
              <div className="relative aspect-[481/750] w-full overflow-hidden">
                {founder.image ? (
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    quality={90}
                    className="object-cover"
                    priority={index === 0}
                  />
                ) : (
                  <div className="flex h-full items-end bg-[#3A43E3] p-6 text-white">
                    <span className="font-canela text-6xl leading-none">LC</span>
                  </div>
                )}
              </div>

              <div className="pt-6">
                <p className="font-canela text-2xl text-neutral-900">{founder.name}</p>
                <p className="font-canela mt-2 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{founder.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-wrap">
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.id}
              className="relative aspect-[481/750] w-1/2 overflow-hidden sm:w-1/4"
            >
              {founder.image ? (
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  quality={90}
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <div className="flex h-full items-end bg-[#3A43E3] p-6 text-white sm:p-8">
                  <span className="font-canela text-6xl leading-none sm:text-7xl">
                    LC
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden border-t border-neutral-300 lg:flex lg:flex-wrap lg:divide-x lg:divide-neutral-300">
          {FOUNDERS.map((founder, index) => (
            <div
              key={`${founder.id}-caption-${index}`}
              className="w-1/4 py-8 pl-6 first:pl-0"
            >
              <p className="font-canela text-xl text-neutral-900">{founder.name}</p>
              <p className="font-canela mt-1 text-xs font-semibold uppercase tracking-wider text-[#3A43E3]">
                {founder.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
