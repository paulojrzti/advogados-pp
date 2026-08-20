"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useContactForm } from "@/contexts/ContactFormContext";
import { ArrowUpRightIcon, CheckCircleIcon, CloseIcon, InstagramIcon } from "@/components/icons";

const FATURAMENTO_OPTIONS = [
  "Até R$ 20 mil",
  "R$ 20 mil a R$ 50 mil",
  "R$ 50 mil a R$ 100 mil",
  "R$ 100 mil a R$ 300 mil",
  "Acima de R$ 300 mil",
];

const initialForm = {
  nome: "",
  whatsapp: "",
  email: "",
  instagram: "",
  faturamento_mensal: "",
};

function maskWhatsapp(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function normalizeWhatsapp(masked: string) {
  const digits = masked.replace(/\D/g, "");
  if (!digits) return "";
  return digits.startsWith("55") ? digits : `55${digits}`;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactFormModal() {
  const { isOpen, close } = useContactForm();
  const titleId = useId();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  }

  function handleClose() {
    close();
    resetForm();
  }

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function setField(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (form.nome.trim().length < 2) {
      nextErrors.nome = "Digite seu nome completo.";
    }
    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length !== 11) {
      nextErrors.whatsapp = "Digite um WhatsApp válido com DDD (11 dígitos).";
    }
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead-contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          whatsapp: normalizeWhatsapp(form.whatsapp),
          email: form.email.trim() || undefined,
          instagram: form.instagram.trim() || undefined,
          faturamento_mensal: form.faturamento_mensal || undefined,
        }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error ?? "Não foi possível enviar. Tente novamente.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar. Tente novamente."
      );
    }
  }

  if (!isOpen) return null;

  const inputClass =
    "mt-3 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]";
  const labelClass = "text-xs font-semibold uppercase tracking-wider text-neutral-500";

  return createPortal(
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto bg-white text-neutral-900 shadow-2xl"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="p-7 text-center sm:p-10">
            <CheckCircleIcon className="mx-auto h-12 w-12 text-[#3A43E3]" />
            <p className="font-canela mt-5 text-2xl leading-tight">Mensagem enviada.</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Recebemos seus dados e nosso time vai entrar em contato em breve pelo WhatsApp.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Enquanto isso
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.instagram.com/scalecompany_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-between gap-3 border border-neutral-300 px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:border-[#3A43E3] hover:text-[#3A43E3]"
              >
                <span className="flex items-center gap-2">
                  <InstagramIcon className="h-4 w-4" />
                  Nosso Instagram
                </span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
              </a>
              <Link
                href="/noticias"
                onClick={handleClose}
                className="flex flex-1 items-center justify-between gap-3 border border-neutral-300 px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:border-[#3A43E3] hover:text-[#3A43E3]"
              >
                Nossos artigos
                <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
              </Link>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="mt-8 w-full bg-[#3A43E3] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9]"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-7 sm:p-10">
            <span className="font-canela text-xs font-bold uppercase tracking-wider text-[#3A43E3]">
              Vamos conversar?
            </span>
            <h2 id={titleId} className="font-canela mt-3 text-balance pr-8 text-2xl leading-tight text-neutral-900 sm:text-3xl">
              Agende um diagnóstico com a Scale.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Preencha seus dados e nosso time retorna pelo WhatsApp com os próximos passos.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor={`${titleId}-nome`} className={labelClass}>
                  Nome *
                </label>
                <input
                  id={`${titleId}-nome`}
                  name="nome"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={status === "loading"}
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setField("nome", e.target.value)}
                  className={inputClass}
                />
                {errors.nome && <p className="mt-2 text-xs text-red-600">{errors.nome}</p>}
              </div>

              <div>
                <label htmlFor={`${titleId}-whatsapp`} className={labelClass}>
                  WhatsApp *
                </label>
                <input
                  id={`${titleId}-whatsapp`}
                  name="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                  disabled={status === "loading"}
                  placeholder="(27) 99999-8888"
                  value={form.whatsapp}
                  onChange={(e) => setField("whatsapp", maskWhatsapp(e.target.value))}
                  className={inputClass}
                />
                {errors.whatsapp && <p className="mt-2 text-xs text-red-600">{errors.whatsapp}</p>}
              </div>

              <div>
                <label htmlFor={`${titleId}-email`} className={labelClass}>
                  E-mail
                </label>
                <input
                  id={`${titleId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled={status === "loading"}
                  placeholder="seuemail@escritorio.com.br"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor={`${titleId}-instagram`} className={labelClass}>
                  Instagram
                </label>
                <input
                  id={`${titleId}-instagram`}
                  name="instagram"
                  type="text"
                  disabled={status === "loading"}
                  placeholder="@seuescritorio"
                  value={form.instagram}
                  onChange={(e) => setField("instagram", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor={`${titleId}-faturamento`} className={labelClass}>
                  Faturamento mensal
                </label>
                <select
                  id={`${titleId}-faturamento`}
                  name="faturamento_mensal"
                  disabled={status === "loading"}
                  value={form.faturamento_mensal}
                  onChange={(e) => setField("faturamento_mensal", e.target.value)}
                  className={`${inputClass} text-neutral-900`}
                >
                  <option value="" disabled>
                    Selecione uma faixa
                  </option>
                  {FATURAMENTO_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 flex w-full items-center justify-between gap-3 bg-[#3A43E3] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9] disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Agendar diagnóstico"}
              <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
            </button>

            {status === "error" && (
              <p className="mt-4 text-xs leading-relaxed text-red-600" role="alert">
                {errorMessage}
              </p>
            )}

            <p className="mt-4 text-xs leading-relaxed text-neutral-500">
              Ao enviar, você concorda em ser contatado pelo nosso time pelo WhatsApp.
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
