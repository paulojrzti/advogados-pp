"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

type PortfolioItem = {
  src: string;
  alt: string;
};

type PortfolioUnfurlingGalleryProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: PortfolioItem[];
};

function previewSource(src: string) {
  return src.endsWith(".mp4")
    ? src.replace("/videos-lps/", "/video-thumbnails/").replace(".mp4", ".webp")
    : src;
}

export default function PortfolioUnfurlingGallery({
  eyebrow,
  heading,
  intro,
  items,
}: PortfolioUnfurlingGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);

  const columns = useMemo(() => {
    const baseColumns: PortfolioItem[][] = [[], [], []];
    items.forEach((item, index) => baseColumns[index % baseColumns.length].push(item));

    return baseColumns.map((column) => [...column, ...column, ...column]);
  }, [items]);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId: number | null = null;

    const update = () => {
      frameId = null;
      if (reducedMotion.matches) return;

      const rect = section.getBoundingClientRect();
      const range = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / range));

      const rotateX = 22 - progress * 17;
      const rotateY = -34 + progress * 26;
      const rotateZ = 9 - progress * 7;
      const translateZ = -360 + progress * 360;

      grid.style.transform = `perspective(1400px) translate3d(-50%, -50%, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

      columnRefs.current.forEach((column, index) => {
        if (!column) return;
        const direction = index === 1 ? 1 : -1;
        const offset = direction * (22 - progress * 44);
        column.style.transform = `translate3d(0, ${offset}%, 0)`;
      });
    };

    const requestUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-black text-white sm:h-[310vh]">
      <div className="sticky top-0 flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,67,227,0.25),transparent_56%)]" />

        <div
          ref={gridRef}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 grid w-[154vw] grid-cols-2 gap-3 will-change-transform sm:w-[145vw] sm:grid-cols-3 sm:gap-5 lg:gap-6"
          style={{
            transform:
              "perspective(1400px) translate3d(-50%, -50%, -360px) rotateX(22deg) rotateY(-34deg) rotateZ(9deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              ref={(element) => {
                columnRefs.current[columnIndex] = element;
              }}
              className={`flex flex-col gap-3 will-change-transform sm:gap-5 lg:gap-6 ${
                columnIndex === 2 ? "hidden sm:flex" : ""
              }`}
            >
              {column.map((item, index) => (
                <div key={`${item.src}-${index}`} className="relative aspect-video overflow-hidden bg-white/10">
                  <Image
                    src={previewSource(item.src)}
                    alt=""
                    fill
                    quality={72}
                    sizes="(min-width: 640px) 45vw, 72vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.96),transparent_28%,transparent_72%,rgba(5,5,5,0.96))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(5,5,5,0.9),transparent_22%,transparent_78%,rgba(5,5,5,0.9))]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-[5%]">
          <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#588DFF]">{eyebrow}</span>
          <h2 className="font-canela mt-4 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{heading}</h2>
          {intro ? <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">{intro}</p> : null}
        </div>
      </div>
    </section>
  );
}
