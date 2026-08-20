"use client";

import type { ReactNode } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";

type ContactTriggerProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ContactTrigger({ children, className, onClick }: ContactTriggerProps) {
  const { open } = useContactForm();

  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
