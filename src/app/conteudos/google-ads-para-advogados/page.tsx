import type { Metadata } from "next";
import ArticleTemplate from "@/components/ArticleTemplate";
import { siteOgImage } from "@/lib/site-og";

const title = "Google Ads para advogados: da intenção de busca ao contrato | Scale Company";
const description =
  "O que priorizar em campanhas de pesquisa para atrair oportunidades qualificadas para o seu escritório.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/conteudos/google-ads-para-advogados" },
  openGraph: {
    title,
    description,
    url: "/conteudos/google-ads-para-advogados",
    images: [siteOgImage],
  },
};

export default function GoogleAdsForLawyersArticle() {
  return (
    <ArticleTemplate
      number="03"
      category="Tráfego pago"
      title="Google Ads para advogados: da intenção de busca ao contrato."
      description="O que priorizar em campanhas de pesquisa para atrair oportunidades com contexto e potencial real de contratação."
      cover="/images/article-google-ads/cover.png"
      coverAlt="Computador em mesa de escritório com dados de campanha desfocados"
      intro="Google Ads funciona bem para escritórios porque encontra a pessoa no momento em que ela já está procurando ajuda. Mas intenção de busca, por si só, não garante uma conversa qualificada."
      sections={[
        {
          id: "intencao",
          title: "Comece pela intenção, não pela palavra-chave.",
          summary: "Comece pela intenção, não pela palavra-chave.",
          paragraphs: [
            "A mesma expressão pode carregar intenções muito diferentes. Quem pesquisa um termo jurídico pode querer estudar o assunto, encontrar uma resposta rápida ou contratar um advogado. A campanha precisa aprender a distinguir esses cenários antes de escalar investimento.",
            "O ponto de partida é entender qual problema, serviço e região fazem sentido para o escritório. Essa combinação orienta as buscas que merecem aparecer, os termos que precisam ser evitados e a mensagem que será apresentada para cada pessoa.",
            "Quando a campanha tenta falar com todo mundo, ela perde precisão. Quando ela escolhe uma demanda clara, o anúncio deixa de disputar atenção de forma genérica e passa a responder uma necessidade que já existe.",
          ],
        },
        {
          id: "estrutura",
          title: "Uma campanha boa é construída em camadas.",
          summary: "Uma campanha boa é construída em camadas.",
          paragraphs: [
            "Pesquisa paga não é apenas escolher palavras e definir orçamento. A estrutura precisa conectar o termo pesquisado, o anúncio exibido, a página de destino e o atendimento que vem depois. Cada parte dá contexto para a próxima.",
            "Essa coerência reduz desperdício e melhora a experiência de quem procura o escritório. A pessoa encontra exatamente o que buscou, entende como o escritório pode ajudar e chega ao atendimento com uma expectativa mais clara.",
          ],
          figure: {
            src: "/images/article-google-ads/performance-review.png",
            alt: "Profissionais revisando informações de campanha em uma reunião",
            caption: "A leitura de dados só faz sentido quando ajuda o time a decidir o próximo ajuste.",
          },
          cards: [
            {
              title: "Busca",
              text: "Priorize termos que expressem uma necessidade concreta e compatível com o serviço oferecido.",
            },
            {
              title: "Anúncio",
              text: "Escreva uma mensagem direta, que dê continuidade à pesquisa e deixe claro o próximo passo.",
            },
            {
              title: "Destino",
              text: "Direcione para uma página que retome a demanda e torne simples iniciar uma conversa.",
            },
          ],
        },
        {
          id: "filtro",
          title: "Filtrar também é uma forma de crescer.",
          summary: "Filtrar também é uma forma de crescer.",
          paragraphs: [
            "Uma campanha madura não busca apenas mais cliques. Ela aprende a excluir buscas ligadas a conteúdo gratuito, emprego, concursos, modelos prontos ou situações que não têm aderência ao atendimento particular do escritório.",
            "Esse trabalho é contínuo. Novos termos aparecem, comportamentos mudam e a campanha precisa ser revisada para que o orçamento permaneça concentrado em oportunidades que fazem sentido.",
            "Mais volume não é sinônimo de melhor resultado. O objetivo é abrir espaço na agenda para conversas que tenham urgência, contexto e possibilidade real de avançar.",
          ],
        },
        {
          id: "leitura",
          title: "O que acompanhar depois que a campanha entra no ar.",
          summary: "O que acompanhar depois que a campanha entra no ar.",
          paragraphs: [
            "Os primeiros números ajudam, mas não contam a história inteira. Cliques e custo por lead são importantes para entender eficiência de mídia. A qualidade da conversa e o avanço no atendimento mostram se a estratégia está chegando às pessoas certas.",
            "O melhor ajuste costuma nascer do cruzamento dessas informações. A origem mostra onde a demanda apareceu, o atendimento revela o que ela procurava e o comercial indica se aquela conversa tinha potencial de contratação.",
          ],
          metrics: [
            {
              title: "Termos de busca",
              text: "O que as pessoas realmente pesquisaram antes de encontrar o escritório.",
              icon: "check",
            },
            {
              title: "Custo por contato",
              text: "Quanto a campanha investe para abrir uma nova conversa qualificada.",
              icon: "chart",
            },
            {
              title: "Tempo de resposta",
              text: "Se o atendimento está conseguindo aproveitar a procura gerada.",
              icon: "clock",
            },
          ],
        },
        {
          id: "contrato",
          title: "A campanha termina no contrato, não no clique.",
          summary: "A campanha termina no contrato, não no clique.",
          paragraphs: [
            "Uma campanha de pesquisa precisa conversar com a realidade comercial do escritório. Se o atendimento não sabe de qual serviço veio o contato, se demora para responder ou perde o follow-up, a mídia passa a carregar uma expectativa que ela não consegue cumprir sozinha.",
            "Por isso, Google Ads funciona melhor quando é tratado como parte de uma operação maior. A mídia abre a porta. Página, atendimento e rotina comercial precisam estar prontos para transformar intenção em uma conversa boa.",
          ],
          quote: "O melhor clique é aquele que chega ao escritório certo, com uma necessidade clara e alguém preparado para continuar a conversa.",
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
          category: "Conversão",
          title: "Landing pages jurídicas que conduzem a conversa certa",
          text: "Uma página eficiente une mensagem, autoridade e um caminho simples até o atendimento.",
          href: "/conteudos/landing-pages-juridicas",
          image: "/images/article-landing-pages/cover.png",
        },
      ]}
    />
  );
}
