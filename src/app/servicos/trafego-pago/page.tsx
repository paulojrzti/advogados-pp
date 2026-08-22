import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { siteOgImage } from "@/lib/site-og";

const title = "Tráfego Pago para Advogados | Scale Company";
const description =
  "Campanhas de Google Ads e Meta Ads estruturadas para escritórios de advocacia, com rastreamento, compliance com a OAB e otimização contínua até o contrato fechado.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/servicos/trafego-pago" },
  openGraph: { title, description, url: "/servicos/trafego-pago", images: [siteOgImage] },
};

export default function TrafegoPagoPage() {
  return (
    <ServiceTemplate
      number="01"
      category="Tráfego pago"
      title="Tráfego pago que leva o escritório até o contrato, não só até o clique."
      description={
        <>
          Campanhas de{" "}
          <strong className="font-semibold text-white">Google Ads e Meta Ads</strong>{" "}
          estruturadas para gerar{" "}
          <strong className="font-semibold text-white">oportunidades qualificadas</strong>, com
          rastreamento,{" "}
          <strong className="font-semibold text-white">
            compliance com a publicidade jurídica
          </strong>{" "}
          e otimização contínua, do primeiro clique ao{" "}
          <strong className="font-semibold text-white">contrato fechado</strong>.
        </>
      }
      cover="/img-cards-services/trafego.png"
      coverAlt="Painel de métricas de campanhas de tráfego pago"
      keywords={[
        "TRÁFEGO PAGO PARA ADVOGADOS",
        "GOOGLE ADS PARA ADVOCACIA",
        "META ADS PARA ESCRITÓRIOS DE ADVOCACIA",
        "CAPTAÇÃO DE CLIENTES PARA ADVOGADOS",
        "ANÚNCIOS JURÍDICOS",
        "MARKETING JURÍDICO",
        "LEADS QUALIFICADOS PARA ADVOCACIA",
      ]}
      intro={{
        eyebrow: "Como atuamos",
        heading: "Mídia paga não é sobre gastar mais. É sobre gastar certo.",
        paragraphs: [
          "Estruturamos campanhas de tráfego pago para escritórios de advocacia. Isso muda a forma como montamos cada conta: linguagem dentro dos limites da publicidade jurídica, segmentação por área de atuação e uma lista de termos negativos que cresce toda semana para cortar curioso antes de custar dinheiro.",
          "Cada real investido é rastreado da primeira impressão até o contrato fechado. As decisões de otimização são tomadas com base em oportunidades reais, não em cliques ou impressões que não geram retorno.",
          "Trabalhamos Google Ads e Meta Ads de forma integrada com landing page, rastreamento e processo comercial, para que o tráfego pago vire parte de uma operação de aquisição, não uma ação isolada que some do orçamento no fim do mês.",
        ],
      }}
      differentiators={{
        eyebrow: "Por que é diferente",
        heading: "Tráfego pago para advocacia não pode copiar o manual do e-commerce.",
        intro:
          "Rodar campanhas para um escritório de advocacia não é aplicar a mesma fórmula usada para loja virtual ou infoproduto. A publicidade jurídica tem regras próprias, e quem busca um advogado decide de um jeito diferente de quem busca um produto.",
        image: {
          src: "/images/article-acquisition/operation-planning.png",
          alt: "Dupla revisando a estrutura de uma campanha de aquisição em um escritório de advocacia",
        },
        items: [
          {
            title: "Regras da OAB",
            text: "Toda peça segue o Código de Ética e o Provimento 205/2021: sem preço no anúncio, sem promessa de resultado, sem comparação com outros escritórios e sem linguagem de urgência típica de e-commerce. Até o uso de depoimento de cliente tem limite ético, e por isso a prova de credibilidade vem de outros caminhos.",
          },
          {
            title: "Decisão baseada em confiança, não em urgência",
            text: "Ninguém contrata um advogado porque o anúncio tem contagem regressiva. O que convence é autoridade, clareza sobre a área de atuação e um caminho de contato simples, sem fricção.",
          },
          {
            title: "Comportamento de busca muda por área",
            text: "Um divórcio é buscado com urgência, muitas vezes no mesmo dia da decisão. Uma reestruturação societária é pesquisada por semanas antes do primeiro contato. A campanha respeita esse ritmo em vez de tratar todo lead da mesma forma.",
          },
          {
            title: "CPC mais alto e leilão mais disputado",
            text: "O leilão de palavras-chave jurídicas concorre com grandes plataformas de captação de leads e outros escritórios pelos mesmos termos genéricos. Termos negativos e segmentação geográfica pesam mais do que em outros mercados.",
          },
        ],
      }}
      areas={{
        eyebrow: "Por área de atuação",
        heading: "A estratégia muda conforme a área do escritório.",
        intro:
          "Do funil de Direito de Família ao acompanhamento de um caso previdenciário, a campanha muda de canal, de linguagem e de ritmo conforme quem está do outro lado da busca.",
        image: {
          src: "/images/article-acquisition/intake-review.png",
          alt: "Advogado revisando o atendimento de novos casos no escritório",
        },
        items: [
          {
            title: "Direito de Família",
            text: "Divórcio, guarda e pensão têm busca de alta urgência: quem pesquisa já decidiu agir. O Google Ads captura essa demanda ativa, enquanto o Meta Ads sustenta reconhecimento para quem ainda está avaliando a decisão.",
          },
          {
            title: "Direito Trabalhista",
            text: "O volume de busca dispara em períodos de demissão em massa e datas de pagamento de rescisão. A comunicação evita prometer valores de indenização e foca em avaliação gratuita e confidencial do caso.",
          },
          {
            title: "Direito Previdenciário",
            text: "Público mais maduro, muitas vezes pouco familiarizado com anúncios digitais. Criativos educativos sobre aposentadoria, BPC e benefícios negados pelo INSS convertem melhor do que peças puramente institucionais.",
          },
          {
            title: "Direito do Consumidor",
            text: "Demanda reativa a eventos como voo cancelado, negativação indevida ou produto com defeito. A operação precisa de agilidade para ativar campanhas quando o assunto está em alta, sem depender só de busca constante.",
          },
          {
            title: "Direito Empresarial e Tributário",
            text: "Ciclo de decisão mais longo, com sócios e diretores pesquisando antes de marcar uma reunião. Conteúdo institucional e presença consistente pesam mais do que anúncios de impacto imediato.",
          },
          {
            title: "Direito Criminal",
            text: "Urgência extrema, muitas vezes fora do horário comercial. A campanha precisa de disponibilidade constante, linguagem sóbria e um caminho de contato que funcione tanto de madrugada quanto num domingo.",
          },
        ],
      }}
      spotlight={{
        image: {
          src: "/images/google-ads-certification-cover.png",
          alt: "Relatório de performance de campanhas de tráfego pago",
        },
        quote:
          "Cada real investido tem um destino rastreável: canal, campanha, anúncio e, no fim, o contrato que ele ajudou a fechar.",
      }}
      pillars={{
        eyebrow: "O que entregamos",
        heading: "Uma operação de mídia paga pensada para advocacia.",
        items: [
          {
            title: "Google Ads para demanda de alta intenção",
            text: "Campanhas de Rede de Pesquisa concentradas em termos com intenção real de contratação, com lista de termos negativos revisada semanalmente para cortar dúvida gratuita, concorrência e modelos de petição.",
          },
          {
            title: "Meta Ads estratégico",
            text: "Campanhas no Instagram e Facebook para ampliar oportunidades e construir reconhecimento antes da busca ativa, com públicos segmentados por localização, idade e momento de vida compatível com a área de atuação.",
          },
          {
            title: "Landing pages de conversão",
            text: "Página dedicada a cada campanha, com um único caminho de ação (WhatsApp ou formulário) e linguagem alinhada ao Código de Ética, sem promessas que a página não pode sustentar.",
          },
          {
            title: "Rastreamento ponta a ponta",
            text: "Cada lead rastreado por canal, campanha e anúncio, do primeiro clique ao contrato fechado, sem expor dados sensíveis do caso: o que se mede é origem e conversão, não o conteúdo da conversa.",
          },
          {
            title: "Comunicação dentro do Código de Ética da OAB",
            text: "Toda peça publicitária passa por uma checagem de compliance antes de ir ao ar: sem preço, sem promessa de resultado, sem comparação com concorrentes.",
          },
          {
            title: "Otimização contínua",
            text: "Revisão semanal de orçamento, públicos, criativos e páginas com base em dados reais de conversão, não em achismo ou média de mercado.",
          },
        ],
      }}
      process={{
        eyebrow: "Como funciona",
        heading: "Da primeira conversa ao relatório de resultado.",
        items: [
          {
            title: "Diagnóstico",
            text: "Entendemos a área de atuação, o ticket médio, a capacidade de atendimento do escritório e o histórico de captação antes de sugerir qualquer investimento em mídia.",
          },
          {
            title: "Estruturação",
            text: "Montamos contas, campanhas, públicos, landing page, rastreamento e a lista inicial de termos negativos. Tudo revisado e testado antes do primeiro real investido.",
          },
          {
            title: "Lançamento e otimização",
            text: "Acompanhamento diário nas primeiras semanas para calibrar custo por lead, qualidade das oportunidades e ajuste de públicos e criativos.",
          },
          {
            title: "Relatório e evolução",
            text: "Relatórios claros e reuniões periódicas, com foco em contratos fechados e custo por contrato, não em métricas de vaidade como impressões ou cliques.",
          },
        ],
      }}
      proof={{
        eyebrow: "Resultado real",
        heading: "O tráfego pago já provou o que faz por um escritório de advocacia.",
        text: "No primeiro mês de operação, a estratégia de Google Ads e Meta Ads estruturada pela Scale gerou 5 contratos e mais de R$ 10,5 mil em honorários rastreados para um escritório de Direito de Família.",
        stats: [
          { value: "+700", label: "Escritórios atendidos" },
          { value: "R$ 50M+", label: "Investimento gerenciado" },
          { value: "15-30 dias", label: "Para os primeiros leads" },
        ],
        caseHref: "/cases/vinicio-rodrigues",
        caseLabel: "Ver case completo",
        caseTitle: "5 contratos e mais de R$ 10,5 mil em honorários no primeiro mês.",
        caseImage: "/images/case-vinicio-rodrigues-cover-v2.png",
      }}
      faq={{
        eyebrow: "Perguntas frequentes",
        heading: "Antes de investir, tire suas dúvidas.",
        items: [
          {
            question: "Posso anunciar como advogado sem ferir o Código de Ética da OAB?",
            answer:
              "Sim. Estruturamos toda a comunicação dentro dos limites da publicidade jurídica previstos pelo Provimento 205/2021 da OAB, com foco em informação e institucional, sem promessas de resultado ou captação irregular de clientela.",
          },
          {
            question: "Qual o investimento mínimo para começar?",
            answer:
              "Varia conforme a área de atuação, a região e a capacidade de atendimento do escritório. Definimos o valor ideal durante o diagnóstico, para que o investimento seja compatível com o retorno esperado.",
          },
          {
            question: "Em quanto tempo aparecem os primeiros leads?",
            answer:
              "Em geral, entre 15 e 30 dias após o lançamento das campanhas, já com dados suficientes para as primeiras otimizações.",
          },
          {
            question: "Vocês cuidam só do anúncio ou também da página e do rastreamento?",
            answer:
              "Cuidamos da operação completa: campanhas, landing page e rastreamento, para que nenhum lead se perca no caminho até o contrato.",
          },
          {
            question: "Como funciona o rastreamento sem comprometer o sigilo do cliente?",
            answer:
              "O rastreamento identifica origem, canal e status do lead, como agendou, não atendeu ou fechou contrato, sem registrar o conteúdo da conversa ou dados sensíveis do caso em ferramentas de terceiros.",
          },
          {
            question: "Preciso já ter uma landing page pronta para começar?",
            answer:
              "Não. Estruturamos a landing page como parte da operação, alinhada à campanha e dentro dos limites da publicidade jurídica.",
          },
          {
            question: "Funciona para qualquer área do Direito?",
            answer:
              "Funciona para a maioria das áreas com demanda de contratação particular. A estratégia, os canais e a linguagem são adaptados para a realidade de cada nicho durante o diagnóstico.",
          },
        ],
      }}
    />
  );
}
