"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

const FATURAMENTO_OPTIONS = [
  "Até R$ 20 mil",
  "R$ 20 mil a R$ 50 mil",
  "R$ 50 mil a R$ 100 mil",
  "R$ 100 mil a R$ 300 mil",
  "Acima de R$ 300 mil",
];

function normalizeWhatsapp(rawValue: string) {
  const digits = rawValue.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("55") && digits.length >= 12) return digits;
  return `55${digits}`;
}

export default function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead-contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.get("nome"),
          whatsapp: normalizeWhatsapp(String(data.get("whatsapp") ?? "")),
          email: data.get("email"),
          instagram: data.get("instagram"),
          faturamento_mensal: data.get("faturamento_mensal"),
        }),
      });
      const responseData = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(responseData?.error ?? "Não foi possível enviar. Tente novamente.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar. Tente novamente."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-7 text-neutral-900 sm:p-10">
        <p className="font-canela text-2xl leading-tight">Mensagem enviada.</p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Recebemos seus dados e nosso time vai entrar em contato em breve pelo WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-7 text-neutral-900 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-nome`} className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Nome *
          </label>
          <input
            id={`${formId}-nome`}
            name="nome"
            type="text"
            required
            disabled={status === "loading"}
            placeholder="Seu nome completo"
            className="mt-3 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-whatsapp`} className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            WhatsApp *
          </label>
          <input
            id={`${formId}-whatsapp`}
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            required
            disabled={status === "loading"}
            placeholder="(27) 99999-8888"
            className="mt-3 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            E-mail
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            disabled={status === "loading"}
            placeholder="seuemail@escritorio.com.br"
            className="mt-3 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-instagram`} className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Instagram
          </label>
          <input
            id={`${formId}-instagram`}
            name="instagram"
            type="text"
            disabled={status === "loading"}
            placeholder="@seuescritorio"
            className="mt-3 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#3A43E3]"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-faturamento`} className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Faturamento mensal
          </label>
          <select
            id={`${formId}-faturamento`}
            name="faturamento_mensal"
            disabled={status === "loading"}
            defaultValue=""
            className="mt-3 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-[#3A43E3]"
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
        className="mt-8 inline-flex w-full items-center justify-between gap-3 bg-[#3A43E3] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#2f37c9] disabled:opacity-60"
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
  );
}
