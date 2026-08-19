"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

type NewsletterFormProps = {
  endpoint: "/api/lead-cases" | "/api/lead-blog";
  formClassName: string;
  label: string;
  labelClassName: string;
  inputClassName: string;
  buttonClassName: string;
  buttonText: string;
  disclaimer?: string;
  disclaimerClassName?: string;
  successClassName?: string;
  errorClassName?: string;
};

export default function NewsletterForm({
  endpoint,
  formClassName,
  label,
  labelClassName,
  inputClassName,
  buttonClassName,
  buttonText,
  disclaimer,
  disclaimerClassName = "mt-4 text-xs leading-relaxed text-neutral-500",
  successClassName = "text-sm leading-relaxed text-neutral-600",
  errorClassName = "mt-3 text-xs leading-relaxed text-red-600",
}: NewsletterFormProps) {
  const inputId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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

  if (status === "success") {
    return (
      <div className={formClassName}>
        <p className={successClassName}>Recebido! Fique de olho no seu e-mail.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <label htmlFor={inputId} className={labelClassName}>
        {label}
      </label>
      <input
        id={inputId}
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={status === "loading"}
        placeholder="seuemail@escritorio.com.br"
        className={inputClassName}
      />
      <button type="submit" disabled={status === "loading"} className={buttonClassName}>
        {status === "loading" ? "Enviando..." : buttonText}
        <ArrowUpRightIcon className="h-4 w-4 shrink-0" />
      </button>
      {status === "error" && (
        <p className={errorClassName} role="alert">
          {errorMessage}
        </p>
      )}
      {disclaimer && <p className={disclaimerClassName}>{disclaimer}</p>}
    </form>
  );
}
