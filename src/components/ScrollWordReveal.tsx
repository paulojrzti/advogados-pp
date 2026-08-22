"use client";

import { Fragment, useEffect, useMemo, useRef } from "react";

type ScrollWordRevealProps = {
  text: string;
  className?: string;
};

const WORD_SEPARATOR = String.fromCharCode(32);

export default function ScrollWordReveal({ text, className }: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const words = useMemo(() => text.split(WORD_SEPARATOR), [text]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (vh * 0.9 - rect.top) / (rect.height + vh * 0.35))
      );

      const windowFraction = 0.22;
      const denom = Math.max(1, words.length - 1);

      wordRefs.current.forEach((span, index) => {
        if (!span) return;
        const start = (index / denom) * (1 - windowFraction);
        const end = start + windowFraction;
        const wordProgress = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        span.style.opacity = String(wordProgress);
        span.style.transform = `translateY(${(1 - wordProgress) * 10}px)`;
      });

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
  }, [words.length]);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="inline-block will-change-transform"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            {word}
          </span>
          {index < words.length - 1 ? WORD_SEPARATOR : null}
        </Fragment>
      ))}
    </p>
  );
}
