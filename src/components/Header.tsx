"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Logo from "@/components/Logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "INICIO", href: "/" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "SOBRE", href: "/sobre" },
  { label: "NOTICIAS", href: "/noticias" },
  { label: "CASES", href: "/cases" },
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
        scrolled
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
      </div>
    </header>
  );
}
