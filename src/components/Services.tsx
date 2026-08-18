"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/icons";

type Service = {
  key: string;
  label: string;
  image: string;
};

const SERVICES: Service[] = [
  { key: "trafego", label: "TRÁFEGO PAGO", image: "/img-cards-services/trafego.png" },
  { key: "landpage", label: "LANDING PAGE", image: "/img-cards-services/landpage.png" },
  { key: "seo", label: "SEO JURÍDICO", image: "/img-cards-services/seo-juridico.png" },
  { key: "crm", label: "CRM JURÍDICO", image: "/img-cards-services/crm.png" },
  { key: "arte", label: "ARTE & DESIGN", image: "/img-cards-services/arte.png" },
  { key: "comercial", label: "COMERCIAL", image: "/img-cards-services/comercial.png" },
];

function useVisibleCount() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(4);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return count;
}

export default function Services() {
  const visibleCount = useVisibleCount();
  const maxPage = Math.max(SERVICES.length - visibleCount, 0);
  const [rawPage, setPage] = useState(0);
  const page = Math.min(rawPage, maxPage);
  const mobileService = SERVICES[page];

  const stepPercent = 100 / visibleCount;

  return (
    <section className="relative overflow-hidden bg-[#050814] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
      <Image src="/images/bg-services-home.png" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">
            Serviços
          </span>
          <h2 className="mt-4 text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
            Tudo que o seu escritório
            <br />
            precisa para <strong className="font-semibold">crescer</strong>
          </h2>
        </div>

        <a
          href="#"
          className="flex items-center gap-3 rounded-none bg-[#3A43E3] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9]"
        >
          Agendar diagnóstico
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="relative z-10 sm:hidden">
        <div className="group relative aspect-[4/5] overflow-hidden">
          <Image
            src={mobileService.image}
            alt={mobileService.label}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 text-base font-medium text-white">
            {mobileService.label}
          </span>
        </div>
      </div>

      <div className="relative z-10 hidden overflow-hidden sm:block">
        <div
          className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${page * stepPercent}%)` }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.key}
              className="group relative aspect-[4/5] shrink-0 overflow-hidden rounded-none"
              style={{ flexBasis: `calc(${stepPercent}% - ${(16 * (visibleCount - 1)) / visibleCount}px)` }}
            >
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {maxPage > 0 && (
        <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${i === page ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((p) => (p >= maxPage ? 0 : p + 1))}
            aria-label="Próximo"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
