"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ParallaxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  range?: number;
  wrapperClassName?: string;
};

export default function ParallaxImage({
  src,
  alt,
  priority = false,
  range = 50,
  wrapperClassName,
}: ParallaxImageProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;

    const update = () => {
      const rect = track.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const progress = Math.max(
        -1,
        Math.min(1, (elementCenter - viewportCenter) / window.innerHeight)
      );
      track.style.transform = `translate3d(0, ${progress * range}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [range]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${wrapperClassName ?? ""}`}>
      <div ref={trackRef} className="absolute inset-[-8%]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={90}
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
