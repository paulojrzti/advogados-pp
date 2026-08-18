import type { Metadata } from "next";
import ArticleTemplate from "@/components/ArticleTemplate";

export const metadata: Metadata = {
  title: "Landing pages jurídicas que conduzem a conversa certa | Scale Company",
  description:
    "Como criar uma landing page jurídica com mensagem, autoridade e um caminho simples até o atendimento.",
};

export default function LegalLandingPagesArticle() {
  return (
    <ArticleTemplate
      number="04"
      category="Conversão"
      title="Landing pages jurídicas que conduzem a conversa certa."
      description="Uma página eficiente equilibra mensagem, autoridade e um caminho simples até o atendimento."
      cover="/images/article-landing-pages/cover.png"
      coverAlt="Notebook aberto em uma mesa de trabalho com uma página de serviço em exibição"
      intro="Uma landing page não existe para explicar tudo sobre o escritório. Ela existe para ajudar alguém com uma demanda específica a entender, com rapidez, se encontrou o lugar certo para conversar."
      sections={[
        {
          id: "mensagem",
          title: "Uma página, uma conversa principal.",
          summary: "Uma página, uma conversa principal.",
          paragraphs: [
            "Quando uma única página tenta apresentar todos os serviços, áreas e diferenciais do escritório, a mensagem perde foco. A pessoa chega com uma pergunta concreta e precisa reconhecer, logo no início, que aquela página fala da situação dela.",
            "O primeiro bloco deve traduzir a intenção que trouxe o acesso: qual é a demanda, como o escritório atua e o que pode acontecer ao iniciar o atendimento. Isso não significa prometer resultado. Significa oferecer contexto suficiente para reduzir a dúvida inicial.",
            "A clareza também melhora a mídia. Um anúncio sobre uma demanda específica leva a uma página que continua a mesma conversa, sem desviar o visitante para um catálogo genérico de serviços.",
          ],
        },
        {
          id: "estrutura",
          title: "Clareza primeiro. Prova depois.",
          summary: "Clareza primeiro. Prova depois.",
          paragraphs: [
            "Uma página de conversão funciona melhor quando organiza informação na ordem em que alguém costuma tomar uma decisão. Primeiro ela esclarece se o tema é relevante. Depois ajuda a pessoa a avaliar confiança. Por fim, torna o contato fácil de iniciar.",
            "Não existe uma quantidade fixa de blocos. O importante é que cada parte responda uma dúvida real e leve naturalmente à próxima. Textos extensos, muitas alternativas de contato e chamadas vagas costumam criar fricção onde deveria haver orientação.",
          ],
          figure: {
            src: "/images/article-landing-pages/contact-flow.png",
            alt: "Profissional usando celular e notebook durante uma conversa de atendimento",
            caption: "A experiência da página prepara o contexto para uma conversa mais objetiva com o escritório.",
          },
          cards: [
            {
              title: "Mensagem",
              text: "Abra a página retomando a situação que levou a pessoa até ali e o serviço que ela procura.",
            },
            {
              title: "Confiança",
              text: "Mostre especialidade, contexto e sinais reais que ajudam a reduzir a insegurança antes do contato.",
            },
            {
              title: "Próximo passo",
              text: "Deixe claro como iniciar o atendimento sem exigir formulários longos ou decisões desnecessárias.",
            },
          ],
        },
        {
          id: "friccao",
          title: "Menos fricção, mais contexto.",
          summary: "Menos fricção, mais contexto.",
          paragraphs: [
            "O contato precisa ser simples, mas simples não é sinônimo de raso. Um botão para WhatsApp, por exemplo, pode já encaminhar a conversa com o serviço de interesse ou com uma pergunta inicial que ajude o time a entender a demanda.",
            "Formulários também têm seu lugar quando fazem sentido para o processo comercial. O erro é pedir informação demais antes de a pessoa perceber valor na conversa. Quanto mais sensível ou urgente a demanda, mais importante é remover etapas desnecessárias.",
            "A página deve respeitar o jeito como o escritório atende. Prometer retorno imediato sem uma rotina para cumprir essa promessa só aumenta frustração. A melhor experiência é a que continua de forma coerente depois do clique.",
          ],
        },
        {
          id: "medicao",
          title: "A página também ensina o que ajustar.",
          summary: "A página também ensina o que ajustar.",
          paragraphs: [
            "Uma landing page não é uma peça pronta que fica intocada. Ela mostra quais mensagens atraem mais contatos, onde as pessoas param e quais dúvidas continuam chegando ao atendimento. Cada sinal ajuda a melhorar a próxima versão.",
            "A leitura precisa acompanhar a qualidade, não apenas o volume. Se muitos acessos não viram conversas, o problema pode estar na origem da campanha, na clareza da mensagem ou no próprio fluxo de contato.",
          ],
          metrics: [
            {
              title: "Origem do acesso",
              text: "Qual canal trouxe a visita e qual serviço estava sendo apresentado.",
              icon: "check",
            },
            {
              title: "Ação de contato",
              text: "Em que ponto a pessoa escolheu falar com o escritório e por qual caminho.",
              icon: "chart",
            },
            {
              title: "Dúvidas recorrentes",
              text: "O que ainda precisa ficar mais claro antes da conversa avançar.",
              icon: "clock",
            },
          ],
        },
        {
          id: "continuidade",
          title: "Conversão é continuidade.",
          summary: "Conversão é continuidade.",
          paragraphs: [
            "A página é apenas uma parte da jornada. Para transformar demanda em oportunidade real, a mensagem do anúncio, a experiência do site e o primeiro contato precisam apontar na mesma direção.",
            "Quando essa sequência está bem resolvida, o escritório recebe conversas com mais contexto e consegue conduzir o atendimento sem recomeçar do zero. A conversão deixa de ser um detalhe de layout e passa a fazer parte da operação.",
          ],
          quote: "Uma landing page boa não empurra uma decisão. Ela deixa o próximo passo claro para quem já está buscando ajuda.",
        },
      ]}
      related={[
        {
          category: "Estratégia",
          title: "A aquisição jurídica não pode depender apenas de indicação.",
          text: "O que muda quando o escritório passa a tratar aquisição como uma operação contínua.",
          href: "/conteudos/aquisicao-juridica-operacao-continua",
          image: "/images/article-acquisition-cover.png",
        },
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
      ]}
    />
  );
}
