import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { siteOgImage } from "@/lib/site-og";

const title = "Landing Pages para Advogados | Scale Company";
const description =
  "Landing pages para advogados que transformam cliques de campanhas em contatos qualificados, com copy ética, velocidade e foco em conversão.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/servicos/landing-pages" },
  openGraph: { title, description, url: "/servicos/landing-pages", images: [siteOgImage] },
};

export default function LandingPagesPage() {
  return (
    <ServiceTemplate
      number="02"
      category="Landing pages"
      title="O clique você já pagou caro. A landing page é o que transforma isso em cliente."
      description={
        <>
          Sem enrolação institucional. Só página construída para converter:{" "}
          <strong className="font-semibold text-white">copy dentro do Código de Ética</strong>,{" "}
          <strong className="font-semibold text-white">carregamento ultrarrápido</strong> e um único
          caminho até o WhatsApp ou formulário.
        </>
      }
      cover="/img-cards-services/landpage.png"
      coverAlt="Wireframe de landing page com título, benefício, prova social e formulário"
      keywords={[
        "LANDING PAGE PARA ADVOGADOS",
        "PÁGINA DE CONVERSÃO JURÍDICA",
        "LANDING PAGE JURÍDICA",
        "CRIAÇÃO DE LANDING PAGE PARA ADVOCACIA",
        "PÁGINA DE CAPTAÇÃO PARA ADVOGADOS",
        "DESIGN PARA ESCRITÓRIO DE ADVOCACIA",
        "SITE PARA ADVOGADOS",
      ]}
      intro={{
        eyebrow: "Metodologia",
        heading: "Uma landing page não é um panfleto digital nem um mero cartão de visitas.",
        paragraphs: [
          "Ela é a peça que decide se o visitante vai falar com você ou voltar para o Google e procurar o concorrente. Por isso, construímos cada página para uma campanha específica, fugindo do modelo institucional genérico.",
          "Na prática, isso significa um único objetivo, sem menus confusos, e uma mensagem que fala exatamente com a dor de quem buscou a solução no Google Ads ou Meta Ads.",
          "A página carrega rápido, funciona perfeitamente no celular e comunica autoridade antes que o visitante decida sair. Após o lançamento, continuamos ajustando detalhes com base em dados reais de comportamento e conversão, nunca em suposições estéticas.",
        ],
      }}
      differentiators={{
        eyebrow: "Diferenciação",
        heading: "Esqueça o manual de infoprodutos. A publicidade na advocacia exige inteligência e respeito às regras.",
        intro:
          "O playbook clássico do marketing digital, com contadores regressivos, gatilhos de escassez artificial e promessas irreais, não serve para o mercado jurídico. Quem busca um advogado precisa sentir segurança antes de enviar dados pessoais.",
        image: {
          src: "/images/article-landing-pages/cover.png",
          alt: "Laptop exibindo o wireframe de uma landing page em um escritório",
        },
        items: [
          {
            title: "Copy alinhada ao Código de Ética",
            text: "Sem vagas limitadas ou promessas de causa ganha. A persuasão vem da clareza, da demonstração de autoridade e da facilidade em contatar o escritório.",
          },
          {
            title: "Confiança antes de conversão",
            text: "Antes de pedir um clique no WhatsApp, a página responde quem é o escritório, em que área atua e por que confiar. Pular essa etapa destrói a taxa de conversão.",
          },
          {
            title: "A velocidade pesa duas vezes",
            text: "Uma página lenta faz o visitante fugir e encarece o anúncio. O algoritmo do Google Ads penaliza páginas pesadas, por isso nossas estruturas são otimizadas para carregamento instantâneo.",
          },
          {
            title: "Um objetivo por página",
            text: "Cada landing page tem um único destino. Menus complexos, links externos e excesso de informações concorrem com a ação que realmente importa: o contato.",
          },
        ],
      }}
      areas={{
        eyebrow: "Nicho e especialização",
        heading: "Uma página de Direito de Família exige um tom completamente diferente de uma página de Direito Tributário.",
        intro:
          "Adaptamos o layout, os textos e as chamadas para a realidade do seu cliente e para a forma como ele procura ajuda.",
        image: {
          src: "/images/article-landing-pages/contact-flow.png",
          alt: "Pessoa verificando o celular ao lado do notebook após preencher um formulário de contato",
        },
        items: [
          {
            title: "Direito de Família",
            text: "Foco em acolhimento e sigilo, com linguagem que reduz o constrangimento e formulários curtos, sem expor o cliente antes do atendimento humano.",
          },
          {
            title: "Direito Trabalhista",
            text: "Estrutura direta, com foco em identificar rapidamente o tipo de demanda, como rescisão, assédio ou horas extras, antes de pedir o contato.",
          },
          {
            title: "Direito Previdenciário",
            text: "Linguagem extremamente simples e visual intuitivo, pensados para um público que muitas vezes tem pouca intimidade com a tecnologia.",
          },
          {
            title: "Direito do Consumidor",
            text: "Páginas modulares e dinâmicas, fáceis de adaptar quando um assunto estoura, como voos cancelados, fraudes bancárias ou negativação indevida.",
          },
          {
            title: "Direito Empresarial e Tributário",
            text: "Tom institucional e sóbrio, com espaço para credenciais sólidas e um fluxo focado em agendamento de reuniões, não em respostas de urgência.",
          },
          {
            title: "Direito Criminal",
            text: "Botão de ligação e WhatsApp em destaque máximo, com mensagem focada em urgência, sigilo e disponibilidade 24 horas.",
          },
        ],
      }}
      spotlight={{
        image: {
          src: "/images/client-testimonials-cover.png",
          alt: "Duas pessoas conversando em uma reunião de trabalho",
        },
        quote:
          "Uma landing page boa não fecha contrato sozinha. Ela abre a porta qualificada para a conversa que fecha.",
      }}
      pillars={{
        eyebrow: "Entregáveis",
        heading: "Uma página desenhada para gerar negócios, não apenas para marcar presença na internet.",
        items: [
          {
            title: "Estrutura de alta conversão",
            text: "Título que conecta com a dor, benefício claro e um botão de ação visível logo na primeira dobra.",
          },
          {
            title: "Textos estratégicos",
            text: "Persuasão dentro dos limites da OAB: sem preço, sem promessa de resultado e sem mercantilização.",
          },
          {
            title: "Prova de autoridade",
            text: "Apresentamos credenciais, equipe e estrutura para gerar segurança no visitante de forma institucional.",
          },
          {
            title: "Integração com WhatsApp e CRM",
            text: "Testada para reduzir a fricção e capturar o contato sem que o potencial cliente desista no meio do caminho.",
          },
          {
            title: "Performance de elite",
            text: "Otimização técnica avançada para abrir rápido no 3G e 4G e aumentar o Índice de Qualidade das suas campanhas.",
          },
          {
            title: "Tagueamento completo",
            text: "A página já nasce com Pixels e Tags instalados para rastrear exatamente de onde vem cada cliente.",
          },
        ],
      }}
      videos={{
        heading: "Uma landing page estratégica dá foco à sua campanha e clareza para quem precisa de ajuda jurídica.",
        intro:
          "Nos projetos abaixo, veja como cada página foi construída para apresentar um serviço jurídico específico, gerar confiança imediata e conduzir o visitante, sem distrações, ao contato com o escritório.",
        items: [
          { src: "/images/landing-pages-portfolio/harrison-simoes.png", alt: "Landing page do escritório Harrison & Simões" },
          { src: "/images/landing-pages-portfolio/alvara-taxi.png", alt: "Landing page sobre alvará de táxi" },
          { src: "/images/landing-pages-portfolio/raposo-lorenzon.png", alt: "Landing page do escritório Raposo & Lorenzon" },
          { src: "/images/landing-pages-portfolio/rodrigo-lobato.png", alt: "Landing page do escritório Rodrigo Lobato" },
          { src: "/images/landing-pages-portfolio/torres-demery.png", alt: "Landing page do escritório Torres & D'emery" },
          { src: "/images/landing-pages-portfolio/leilao-juridico.png", alt: "Landing page de análise de leilão jurídico" },
        ],
      }}
      process={{
        eyebrow: "Como funciona",
        heading: "Do diagnóstico aos primeiros contatos qualificados.",
        items: [
          {
            title: "Diagnóstico",
            text: "Entendemos a sua campanha, o perfil do seu cliente ideal e a sua área de atuação antes de desenhar qualquer linha.",
          },
          {
            title: "Estrutura e copy",
            text: "Definimos a hierarquia da informação e escrevemos os textos persuasivos, com rigor ético, focando no caminho da conversão.",
          },
          {
            title: "Design e desenvolvimento",
            text: "Aplicamos a identidade visual do escritório, criamos o ambiente responsivo com foco em celulares e desenvolvemos toda a página.",
          },
          {
            title: "Lançamento e testes",
            text: "Entregamos a página pronta e acompanhamos os dados iniciais de conversão para realizar ajustes finos, quando necessário.",
          },
        ],
      }}
      proof={{
        eyebrow: "Prova social e cases",
        heading: "Nossas landing pages já provaram o seu valor no mercado jurídico.",
        text: "No primeiro mês de operação, uma landing page Scale para uma campanha de Google Ads e Meta Ads gerou 5 contratos e mais de R$ 10,5 mil em honorários iniciais para um escritório de Direito de Família.",
        stats: [
          { value: "+700", label: "Escritórios atendidos" },
          { value: "R$ 50M+", label: "Em investimentos de mídia gerenciados" },
          { value: "15 a 30 dias", label: "Para os primeiros leads entrarem na sua base" },
        ],
        caseHref: "/cases/vinicio-rodrigues",
        caseLabel: "Ver case completo",
        caseTitle: "5 contratos e mais de R$ 10,5 mil em honorários iniciais no primeiro mês.",
        caseImage: "/images/case-vinicio-rodrigues-cover-v2.png",
      }}
      faq={{
        eyebrow: "Perguntas frequentes",
        heading: "Antes de investir, tire suas dúvidas.",
        items: [
          {
            question: "Uma landing page substitui o site institucional do escritório?",
            answer:
              "Não. A landing page é feita para receber tráfego pago de campanhas específicas, como Google Ads e Meta Ads, com o objetivo único de gerar o contato. O site institucional continua sendo seu cartão de visitas digital para buscas orgânicas e apresentação completa da banca.",
          },
          {
            question: "Posso usar depoimento de cliente na página?",
            answer:
              "O Provimento 205/2021 da OAB é rígido quanto a isso. Para evitar qualquer configuração de mercantilização ou captação indevida, substituímos depoimentos por provas de autoridade institucional, como credenciais do advogado, artigos na mídia, tempo de atuação e volume de processos ativos.",
          },
          {
            question: "A página funciona bem no celular?",
            answer:
              "Perfeitamente. Mais de 85% do tráfego de anúncios jurídicos vem de smartphones. Nossas páginas são desenvolvidas no formato mobile-first, garantindo botões fáceis de clicar, textos legíveis e carregamento rápido em qualquer aparelho.",
          },
          {
            question: "Vocês fazem só o design ou também a copy?",
            answer:
              "Fazemos tudo: da concepção estratégica à escrita dos textos persuasivos, passando pelo design, desenvolvimento e integrações. Você recebe a página pronta para vender.",
          },
          {
            question: "A página já vem com rastreamento para anúncios?",
            answer:
              "Sim. Instalamos e configuramos o Pixel da Meta, a Tag do Google Ads e o Google Analytics. Você e quem faz a sua gestão de tráfego terão controle para medir cliques, visitas e leads gerados.",
          },
          {
            question: "Quanto tempo leva para a página ficar pronta?",
            answer:
              "Em média, após o diagnóstico inicial, entregamos a primeira versão para sua aprovação entre 10 e 15 dias úteis, garantindo o padrão de qualidade exigido pelo mercado jurídico.",
          },
        ],
      }}
    />
  );
}
