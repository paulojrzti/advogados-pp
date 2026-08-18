import {
  ArrowUpRightIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/icons";
import Logo from "@/components/Logo";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/scalecompany_/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://br.linkedin.com/company/scale-company-br", Icon: LinkedInIcon },
  { label: "Facebook", href: "https://www.facebook.com/p/Scale-Company-100083140584010/", Icon: FacebookIcon },
  { label: "YouTube", href: "https://www.youtube.com/@scalecompanyassessoria", Icon: YouTubeIcon },
];

const MENU_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Notícias", href: "/noticias" },
  { label: "Cases", href: "/cases" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-6 pt-20 pb-8 sm:px-8 lg:px-[5%] lg:pt-28 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:gap-16">
          <div>
            <Logo />
            <h2 className="font-canela mt-4 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-5xl">
              Vamos
              <br />
              conversar?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Gostaria de estruturar a aquisição do seu escritório? Agende uma
              conversa com nosso time. Nossa metodologia é diferente.
            </p>
            <a
              href="mailto:contato@scalecompany.com.br?subject=Quero%20falar%20com%20a%20Scale"
              className="mt-8 inline-flex items-center gap-3 rounded-none bg-[#3A43E3] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9]"
            >
              Enviar mensagem
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div>
            <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
              Vila Velha — ES
            </span>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>contato@scalecompany.com.br</p>
              <p>Av. Hugo Musso · Praia da Costa · Vila Velha - ES · 29101-280</p>
              <a href="tel:+5522997647844" className="transition-colors hover:text-white">
                (22) 99764-7844
              </a>
            </div>
          </div>

          <div>
            <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
              Menu
            </span>
            <nav className="mt-4 flex w-40 flex-col gap-3 text-sm text-white/70">
              {MENU_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-full items-center justify-between gap-3 transition-colors hover:text-white"
                >
                  {link.label}
                  <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex gap-3 lg:flex-col">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#3A43E3]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="relative z-10 flex -translate-y-6 flex-col items-start gap-4 px-[2%] pt-4 pb-0 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <span>© 2026 - Scale company</span>
          <a
            href="https://www.letsmarketing.com.br/politica-de-privacidade/"
            className="transition-colors hover:text-white/80"
          >
            Política de privacidade
          </a>
          <a
            href="https://www.letsmarketing.com.br/termos-de-uso/"
            className="transition-colors hover:text-white/80"
          >
            Termos de uso
          </a>
          <span className="relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-[calc(100%+1.5rem)] after:bg-gradient-to-r after:from-[#3A43E3]/70 after:to-transparent after:content-['']">
            Website by
          </span>
        </div>

        <div aria-hidden="true" className="pointer-events-none mx-[2%] flex justify-center overflow-hidden">
          <p className="inline-block origin-center whitespace-nowrap bg-gradient-to-b from-white via-white/85 to-white/0 bg-clip-text pt-[0.07em] font-sans text-[20.5vw] font-black leading-[0.8] tracking-[-0.065em] text-transparent [transform:scaleX(1.66)]">
            SCALE
          </p>
        </div>
      </div>
    </footer>
  );
}
