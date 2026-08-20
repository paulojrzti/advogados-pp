"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Logo from "@/components/Logo";
import { ArrowUpRightIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "INICIO", href: "/" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "SOBRE", href: "/sobre" },
  { label: "NOTICIAS", href: "/noticias" },
  { label: "CASES", href: "/cases" },
  { label: "CONTATO", href: "/contato" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/scalecompany_/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://br.linkedin.com/company/scale-company-br", Icon: LinkedInIcon },
  { label: "Facebook", href: "https://www.facebook.com/p/Scale-Company-100083140584010/", Icon: FacebookIcon },
];

type HeaderProps = {
  theme?: "dark" | "light";
  logoSrc?: string;
};

export default function Header({ theme = "dark", logoSrc }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ "--hero-delay": "0.1s" } as CSSProperties}
      className={`hero-anim-fade fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? isLight
            ? "bg-white/85 shadow-sm backdrop-blur-md"
            : "bg-black/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6 sm:px-8 lg:px-[5%]">
        <Logo src={logoSrc ?? (isLight ? "/images/scale-logo-about.svg" : undefined)} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-medium tracking-wider transition-colors ${
                isLight
                  ? "text-neutral-600 hover:text-neutral-950"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`transition-colors ${
                isLight
                  ? "text-neutral-600 hover:text-neutral-950"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            isLight ? "text-neutral-900" : "text-white"
          }`}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-1 h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Menu principal"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } ${isLight ? "bg-white/85 backdrop-blur-md" : "bg-black/80 backdrop-blur-md"}`}
      >
        <div className="px-6 pb-8 pt-3 sm:px-8">
          <div className={`border-t pt-4 ${isLight ? "border-neutral-200" : "border-white/15"}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 text-sm font-medium tracking-wider transition-colors ${
                  isLight
                    ? "border-b border-neutral-200 text-neutral-900"
                    : "border-b border-white/15 text-white"
                }`}
              >
                {link.label}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={isLight ? "text-neutral-700" : "text-white/80"}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
