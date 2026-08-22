const DEFAULT_KEYWORDS = [
  "MARKETING JURIDICO",
  "CAPTAÇÃO DE CLIENTES PARA ADVOGADOS",
  "AGENCIA DE MARKETING JURIDICO",
  "TRAFEGO PAGO PARA ADVOGADOS",
  "SEO JURIDICO",
  "SITE PARA ADVOGADOS",
];

function MarqueeSet({ keywords }: { keywords: string[] }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className="flex items-center whitespace-nowrap px-6 text-sm font-light uppercase tracking-wider text-white sm:text-base"
        >
          {keyword}
          <span className="ml-6 h-1 w-1 shrink-0 rounded-full bg-white/50" />
        </span>
      ))}
    </div>
  );
}

export default function KeywordMarquee({ keywords = DEFAULT_KEYWORDS }: { keywords?: string[] }) {
  return (
    <div className="bg-gradient-blue relative overflow-hidden py-4">
      <div className="animate-marquee flex w-max">
        <MarqueeSet keywords={keywords} />
        <MarqueeSet keywords={keywords} />
      </div>
    </div>
  );
}
