"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";

type FaqItem = {
  question: string;
  answer: string;
};

export default function ServiceFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-canela text-xl leading-snug text-neutral-900 sm:text-2xl">
                {item.question}
              </span>
              <ChevronRightIcon
                className={`h-5 w-5 shrink-0 text-[#3A43E3] transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            <div
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
