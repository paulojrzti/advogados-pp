"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ContactFormContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactFormContext = createContext<ContactFormContextValue | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactFormContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
}
