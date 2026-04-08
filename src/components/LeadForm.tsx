"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  zip: string;
  vehicle: string;
  damage: string;
}

const initialState: FormData = {
  name: "",
  phone: "",
  zip: "",
  vehicle: "",
  damage: "chip",
};

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-black/5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">You&rsquo;re all set!</h3>
          <p className="mt-1 text-slate-500">
            A technician will call you within 30 minutes to confirm your appointment.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:bg-white text-sm font-medium";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {!compact && (
        <div className="mb-1">
          <h3 className="text-lg font-bold text-slate-900">Get Your Free Quote</h3>
          <p className="text-sm text-slate-500">Takes less than 60 seconds</p>
        </div>
      )}

      <input
        name="name"
        type="text"
        required
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
        autoComplete="name"
      />

      <input
        name="phone"
        type="tel"
        required
        placeholder="Phone number"
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
        autoComplete="tel"
        pattern="[\d\s\(\)\-\+]{7,15}"
      />

      <div className={compact ? "flex gap-2" : "flex gap-2"}>
        <input
          name="zip"
          type="text"
          required
          placeholder="ZIP code"
          value={form.zip}
          onChange={handleChange}
          className={inputClass}
          pattern="\d{5}"
          maxLength={5}
          autoComplete="postal-code"
        />
        <select
          name="damage"
          value={form.damage}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="chip">Small chip</option>
          <option value="crack">Crack</option>
          <option value="multiple">Multiple chips</option>
          <option value="unsure">Not sure</option>
        </select>
      </div>

      <input
        name="vehicle"
        type="text"
        placeholder="Vehicle (e.g. 2021 Toyota Camry)"
        value={form.vehicle}
        onChange={handleChange}
        className={inputClass}
        autoComplete="off"
      />

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-1 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            Get My Free Quote
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        No spam. We&rsquo;ll only contact you about your repair.
      </p>
    </form>
  );
}
