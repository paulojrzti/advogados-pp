"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  id: string;
  prefix?: string;
  value: number;
  rangeEnd?: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { id: "clients", prefix: "+", value: 700, label: "Escritórios Atendidos" },
  { id: "investment", prefix: "R$", value: 50, suffix: "M+", label: "Investimento Gerenciado" },
  { id: "satisfaction", value: 98, suffix: "%", label: "Taxa de Satisfação" },
  { id: "leads", value: 15, rangeEnd: 30, label: "dias para os primeiros leads" },
];

function useCountUp(end: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration]);

  return value;
}

function StatItem({
  stat,
  active,
  isAccent,
}: {
  stat: Stat;
  active: boolean;
  isAccent: boolean;
}) {
  const count = useCountUp(stat.value, active);
  const rangeCount = useCountUp(stat.rangeEnd ?? 0, active && stat.rangeEnd !== undefined);

  return (
    <div className={`px-5 py-4 ${isAccent ? "bg-[#3A43E3]" : "bg-white"}`}>
      <p
        className={`font-canela text-2xl sm:text-3xl ${
          isAccent ? "text-white" : "text-neutral-900"
        }`}
      >
        {stat.prefix}
        {count}
        {stat.rangeEnd !== undefined && <>-{rangeCount}</>}
        {stat.suffix}
      </p>
      <p className={`mt-1 text-xs leading-snug ${isAccent ? "text-white/70" : "text-neutral-500"}`}>
        {stat.label}
      </p>
    </div>
  );
}

export default function Mission() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#ECE7DF] px-6 py-20 sm:px-8 lg:px-[5%] lg:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
            Nossa missão
          </span>
          <h2 className="mt-4 text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Mais que uma agência, um time obcecado por{" "}
            <strong className="font-semibold">resultado</strong>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Acreditamos que todo escritório de advocacia merece crescer com
            previsibilidade. Por isso, unimos estratégia, tecnologia e um time
            dedicado para transformar cada real investido em clientes reais,
            construindo lado a lado a máquina de aquisição que seu escritório
            precisa.
          </p>

          <div
            ref={statsRef}
            className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3"
          >
            {STATS.map((stat, index) => (
              <StatItem key={stat.id} stat={stat} active={active} isAccent={index % 2 === 0} />
            ))}
          </div>
        </div>

        <div className="order-1 relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:order-2 lg:aspect-[4/3]">
          <Image
            src="/equipe.jpeg"
            alt="Time Scale Company"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
