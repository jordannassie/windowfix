import LeadForm from "@/components/LeadForm";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Most repairs completed within 2 hours of booking.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "We Come to You",
    desc: "Mobile technicians repair at your home, office, or anywhere.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Lifetime Guarantee",
    desc: "Every repair is backed by our no-hassle warranty.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Insurance Accepted",
    desc: "We work directly with most major insurance providers.",
  },
];

const steps = [
  {
    num: "1",
    title: "Submit your info",
    desc: "Tell us your location, vehicle, and the damage — takes under a minute.",
  },
  {
    num: "2",
    title: "We confirm your slot",
    desc: "A technician calls within 30 minutes to schedule at your convenience.",
  },
  {
    num: "3",
    title: "Chip repaired. Done.",
    desc: "Our tech arrives and fixes the chip in 30–45 minutes. No mess, no fuss.",
  },
];

const stats = [
  { value: "500+", label: "Repairs completed" },
  { value: "4.9★", label: "Average rating" },
  { value: "30 min", label: "Response time" },
  { value: "100%", label: "Satisfaction guarantee" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full font-[var(--font-inter)]">

      {/* ── NAV ── */}
      <header className="hero-bg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h8" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Window<span className="text-blue-400">Fix</span>
            </span>
          </div>
          <a
            href="tel:+18005551234"
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (800) 555-1234
          </a>
        </nav>

        {/* ── HERO ── */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-12 lg:grid-cols-2 lg:items-center lg:pb-28">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300 ring-1 ring-blue-400/30">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Same-day appointments available
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Stop a chip before it becomes a{" "}
              <span className="text-blue-400">crack.</span>
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-300">
              Fast, affordable windshield chip repair — our mobile technicians
              come directly to you. Free quotes in 60 seconds.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-extrabold text-white">{s.value}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl bg-white p-7 shadow-2xl ring-1 ring-black/5">
            <LeadForm />
          </div>
        </section>
      </header>

      {/* ── FEATURES ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Why choose WindowFix?
            </h2>
            <p className="mt-3 text-slate-500">
              We make chip repair completely hassle-free.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-100 transition hover:ring-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              How it works
            </h2>
            <p className="mt-3 text-slate-500">
              Three simple steps to a repaired windshield.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-6 hidden h-0.5 w-full bg-gradient-to-r from-blue-200 to-blue-100 sm:block" />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-extrabold text-white shadow-md shadow-blue-200">
                  {step.num}
                </div>
                <div className="mt-5">
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY BANNER ── */}
      <section className="bg-amber-50 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold text-amber-900">Don&rsquo;t wait — chips spread fast.</p>
              <p className="text-sm text-amber-700">Temperature changes and road vibration can turn a chip into a full crack overnight.</p>
            </div>
          </div>
          <a
            href="#quote"
            className="btn-primary mt-4 flex-shrink-0 rounded-xl px-6 py-3 text-sm font-bold text-white sm:mt-0"
          >
            Book Now →
          </a>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section id="quote" className="hero-bg py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to fix that chip?
          </h2>
          <p className="mt-3 text-slate-300">
            Get a free quote now. No obligation. We&rsquo;ll come to you.
          </p>
          <div className="mt-8 rounded-2xl bg-white p-7 shadow-2xl text-left">
            <LeadForm compact />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} WindowFix. All rights reserved.</p>
        <p className="mt-1">
          <a href="tel:+18005551234" className="hover:text-slate-300 transition">(800) 555-1234</a>
          {" · "}
          <a href="mailto:hello@windowfix.com" className="hover:text-slate-300 transition">hello@windowfix.com</a>
        </p>
      </footer>

    </div>
  );
}
