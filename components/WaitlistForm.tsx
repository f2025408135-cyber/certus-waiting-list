"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { form } from "@/lib/content";

type FieldName =
  | "name"
  | "email"
  | "company"
  | "role"
  | "companySize"
  | "avaTool"
  | "pain"
  | "consent";

type FormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  avaTool: string;
  pain: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues: FormValues = {
  name: "",
  email: "",
  company: "",
  role: "",
  companySize: "",
  avaTool: "",
  pain: "",
};

const REQUIRED_FIELDS: FieldName[] = ["name", "email", "company", "consent"];

function validateField(
  field: FieldName,
  values: FormValues,
  consent: boolean
): string | null {
  switch (field) {
    case "name":
      return values.name.trim() === "" ? form.errors.required : null;
    case "company":
      return values.company.trim() === "" ? form.errors.required : null;
    case "email": {
      const email = values.email.trim();
      if (email === "") return form.errors.required;
      return EMAIL_RE.test(email) ? null : form.errors.email;
    }
    case "consent":
      return consent ? null : form.errors.consent;
    default:
      return null;
  }
}

function controlClass(hasError: boolean): string {
  return [
    "w-full rounded-sm border bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink-3",
    hasError ? "border-ko" : "border-rule",
  ].join(" ");
}

function displayAvaTool(option: string): string {
  if (option === "keine") return "Keine";
  if (option === "andere") return "Andere";
  return option;
}

export default function WaitlistForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const submittedRef = useRef(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  function updateValue(field: FieldName, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (!submittedRef.current) return;
    setErrors((prev) => {
      const nextErrors = { ...prev };
      const error = validateField(field, nextValues, consent);
      if (error) nextErrors[field] = error;
      else delete nextErrors[field];
      return nextErrors;
    });
  }

  function updateConsent(checked: boolean) {
    setConsent(checked);
    if (!submittedRef.current) return;
    setErrors((prev) => {
      const nextErrors = { ...prev };
      const error = validateField("consent", values, checked);
      if (error) nextErrors.consent = error;
      else delete nextErrors.consent;
      return nextErrors;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submittedRef.current = true;

    const nextErrors: Partial<Record<FieldName, string>> = {};
    for (const field of REQUIRED_FIELDS) {
      const error = validateField(field, values, consent);
      if (error) nextErrors[field] = error;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setGeneralError(null);
      return;
    }

    setErrors({});
    setGeneralError(null);
    setStatus("submitting");

    const payload: Record<string, unknown> = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      consent,
      firma_webseite: "",
    };

    const optionalFields: Array<[string, string]> = [
      ["role", values.role.trim()],
      ["companySize", values.companySize.trim()],
      ["avaTool", values.avaTool.trim()],
      ["pain", values.pain.trim()],
    ];

    for (const [key, value] of optionalFields) {
      if (value !== "") payload[key] = value;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      if (res.status === 400) {
        const data = (await res.json().catch(() => null)) as {
          details?: Record<string, unknown>;
        } | null;
        const details = data?.details;
        if (details && typeof details === "object") {
          const fieldErrors: Partial<Record<FieldName, string>> = {};
          if (details.name) fieldErrors.name = form.errors.required;
          if (details.company) fieldErrors.company = form.errors.required;
          if (details.email) fieldErrors.email = form.errors.email;
          if (details.consent) fieldErrors.consent = form.errors.consent;
          if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
          } else {
            setGeneralError(form.errors.general);
          }
          setStatus("idle");
          return;
        }
      }

      setGeneralError(form.errors.general);
      setStatus("idle");
    } catch {
      setGeneralError(form.errors.general);
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <section id="warteliste" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
          <div
            aria-live="polite"
            className="mx-auto max-w-2xl rounded-sm border border-rule bg-surface p-6 sm:p-10"
          >
            {/* The binding act: in Austria a bid is binding once it is
                stamped. The registration gets its stamp. */}
            <div aria-hidden="true" className="mb-7 flex justify-center">
              <span className="stamp stamp--in text-sm text-accent sm:text-base">
                Angemeldet
              </span>
            </div>
            <h2
              ref={successHeadingRef}
              tabIndex={-1}
              className="text-center font-condensed text-2xl font-bold text-ink sm:text-3xl"
            >
              {form.successTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-ink-2">
              {form.successText}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="warteliste" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-condensed text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {form.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{form.intro}</p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-sm border border-rule bg-surface p-6 sm:p-8"
          >
            {generalError && (
              <div
                role="alert"
                className="mb-6 rounded-sm border border-ko bg-ko-bg p-4 text-sm text-ko"
              >
                {generalError}
              </div>
            )}

            <input
              name="firma_webseite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              defaultValue=""
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.name}
                  <span aria-hidden="true" className="text-accent">*</span>
                  <span className="sr-only"> (erforderlich)</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={(event) => updateValue("name", event.target.value)}
                  placeholder={form.placeholders.name}
                  className={controlClass(Boolean(errors.name))}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-ko">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.email}
                  <span aria-hidden="true" className="text-accent">*</span>
                  <span className="sr-only"> (erforderlich)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={values.email}
                  onChange={(event) => updateValue("email", event.target.value)}
                  placeholder={form.placeholders.email}
                  className={controlClass(Boolean(errors.email))}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-ko">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.company}
                  <span aria-hidden="true" className="text-accent">*</span>
                  <span className="sr-only"> (erforderlich)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  value={values.company}
                  onChange={(event) => updateValue("company", event.target.value)}
                  placeholder={form.placeholders.company}
                  className={controlClass(Boolean(errors.company))}
                  aria-invalid={errors.company ? true : undefined}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="mt-1.5 text-sm text-ko">
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.role}
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
                    Optional
                  </span>
                </label>
                <select
                  id="role"
                  name="role"
                  value={values.role}
                  onChange={(event) => updateValue("role", event.target.value)}
                  className={controlClass(false)}
                >
                  <option value="">— Bitte wählen</option>
                  {form.roles.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="companySize" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.companySize}
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
                    Optional
                  </span>
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={values.companySize}
                  onChange={(event) => updateValue("companySize", event.target.value)}
                  className={controlClass(false)}
                >
                  <option value="">— Bitte wählen</option>
                  {form.companySizes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="avaTool" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.avaTool}
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
                    Optional
                  </span>
                </label>
                <select
                  id="avaTool"
                  name="avaTool"
                  value={values.avaTool}
                  onChange={(event) => updateValue("avaTool", event.target.value)}
                  className={controlClass(false)}
                >
                  <option value="">— Bitte wählen</option>
                  {form.avaTools.map((option) => (
                    <option key={option} value={option}>
                      {displayAvaTool(option)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="pain" className="mb-1.5 block text-sm font-medium text-ink">
                  {form.labels.pain}
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
                    Optional
                  </span>
                </label>
                <textarea
                  id="pain"
                  name="pain"
                  rows={4}
                  value={values.pain}
                  onChange={(event) => updateValue("pain", event.target.value)}
                  placeholder={form.placeholders.pain}
                  className={`${controlClass(false)} resize-y`}
                />
              </div>
            </div>

            <div className="mt-8 border-t border-rule pt-6">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                Einwilligung · DSGVO
              </p>
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(event) => updateConsent(event.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border border-rule accent-accent"
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <label htmlFor="consent" className="text-sm leading-relaxed text-ink-2">
                  Ich habe die{" "}
                  <Link
                    href="/datenschutz"
                    className="font-medium text-accent underline underline-offset-2"
                  >
                    {form.consentLinkText}
                  </Link>{" "}
                  gelesen. {form.labels.consent}
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="mt-1.5 text-sm text-ko">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    />
                    {form.submitting}
                  </>
                ) : (
                  form.submit
                )}
              </button>
              <p className="text-xs leading-relaxed text-ink-3">
                {form.privacyHint}{" "}
                <Link
                  href="/datenschutz"
                  className="font-medium text-accent underline underline-offset-2"
                >
                  {form.consentLinkText}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
